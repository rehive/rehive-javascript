import { createClient } from '../platform/user/openapi-ts/client/index.js';
import {
  authLogin,
  authRegister,
  authRegisterCompany,
  authRefreshCreate,
  authLogout,
} from '../platform/user/openapi-ts/sdk.gen.js';
import type {
  LoginRequestWritable,
  RegisterRequestWritable,
  RegisterCompanyRequestWritable,
} from '../platform/user/openapi-ts/types.gen.js';
import { WebStorageAdapter, MemoryStorageAdapter } from './core/storage-adapters.js';
import { ApiError, normalizeFetch } from '../shared/api-utils.js';
import type {
  AuthEvent,
  AuthEventListener,
  AuthRecoveryState,
  AuthSession,
  AuthSnapshot,
  AuthState,
  AuthStateListener,
  AuthStatus,
  ErrorListener,
  SessionListener,
  StorageAdapter,
} from './types/index.js';

export type LoginParams = {
  user: string;
  password: string;
  company: string;
  session_duration?: number;
};

export type RegisterParams = {
  email?: string;
  mobile?: string;
  username?: string;
  password: string;
  company: string;
  first_name?: string;
  last_name?: string;
  terms_and_conditions?: boolean;
  privacy_policy?: boolean;
  session_duration?: number;
};

export type RegisterCompanyParams = RegisterCompanyRequestWritable;

export interface ImportTokenOptions {
  company?: string;
  expires?: number;
  sessionDuration?: number;
}

export interface ValidateSessionOptions {
  retryCount?: number;
  retryDelayMs?: number;
}

export type SessionPatch =
  | Partial<AuthSession>
  | ((session: AuthSession) => AuthSession);

export interface AuthConfig {
  baseUrl?: string;
  storage?: 'local' | 'memory' | StorageAdapter;
  token?: string;
  enableCrossTabSync?: boolean;
}

export interface Auth {
  login(params: LoginParams): Promise<AuthSession>;
  register(params: RegisterParams): Promise<AuthSession>;
  registerCompany(params: RegisterCompanyParams): Promise<AuthSession>;
  logout(): Promise<void>;
  logoutAll(): Promise<void>;
  refresh(): Promise<void>;
  getToken(): Promise<string | undefined>;
  getActiveSession(): AuthSession | null;
  getSessions(): AuthSession[];
  getSessionsByCompany(company: string): AuthSession[];
  getState(): AuthSnapshot;
  getStatus(): AuthStatus;
  getRecoveryState(): AuthRecoveryState;
  switchToSession(userId: string, company?: string): Promise<AuthSession | null>;
  clearAllSessions(): Promise<void>;
  deleteChallenge(challengeId: string): Promise<void>;
  importToken(token: string, options?: ImportTokenOptions): Promise<AuthSession>;
  validateActiveSession(options?: ValidateSessionOptions): Promise<boolean>;
  syncActiveSessionUser(): Promise<AuthSession | null>;
  updateSession(
    userId: string,
    company: string | undefined,
    patch: SessionPatch,
  ): Promise<AuthSession | null>;
  expireActiveSession(): Promise<AuthRecoveryState>;
  subscribe(listener: SessionListener): () => void;
  subscribeToErrors(listener: ErrorListener): () => void;
  subscribeToState(listener: AuthStateListener): () => void;
  subscribeToEvents(listener: AuthEventListener): () => void;
  readonly baseUrl: string;
}

function resolveStorage(storage?: 'local' | 'memory' | StorageAdapter): StorageAdapter {
  if (!storage || storage === 'local') {
    if (typeof window !== 'undefined' && window.localStorage) {
      return new WebStorageAdapter();
    }
    return new MemoryStorageAdapter();
  }
  if (storage === 'memory') {
    return new MemoryStorageAdapter();
  }
  return storage;
}

function errorHandlingFetch(baseFetch: typeof fetch): typeof fetch {
  return async (...args: Parameters<typeof fetch>): Promise<Response> => {
    const response = await baseFetch(...args);
    if (!response.ok) {
      const errorText = await response.text();
      let errorJson: any = null;
      try {
        errorJson = JSON.parse(errorText);
      } catch {
        // not JSON
      }
      throw new ApiError({
        status: response.status,
        error: errorJson || errorText,
        message:
          errorJson?.error ||
          errorJson?.message ||
          'A server error occurred. HTTPStatus: ' + response.status,
      });
    }
    return response;
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getSessionCompany(session: AuthSession): string | undefined {
  return session.company ?? session.user?.company;
}

function cloneSessions(sessions: AuthSession[]): AuthSession[] {
  return [...sessions];
}

export function createAuth(config: AuthConfig = {}): Auth {
  const baseUrl = config.baseUrl || 'https://api.rehive.com';
  const storage = resolveStorage(config.storage);
  const permanentToken = config.token;
  const enableCrossTabSync = config.enableCrossTabSync ?? true;
  const storageKey = 'rehive_auth_state';
  const baseFetch = normalizeFetch(globalThis.fetch);

  const client = createClient({
    baseUrl,
    responseStyle: 'data' as const,
    fetch: errorHandlingFetch(baseFetch),
  });

  let sessions: AuthSession[] = [];
  let activeSessionIndex = -1;
  let sessionListeners: SessionListener[] = [];
  let errorListeners: ErrorListener[] = [];
  let stateListeners: AuthStateListener[] = [];
  let eventListeners: AuthEventListener[] = [];
  let refreshPromise: Promise<void> | null = null;
  let isRefreshing = false;
  let loadAuthStatePromise: Promise<AuthState> | null = null;
  let initialized = false;
  let lastError: Error | null = null;
  let lastExpiredSession: AuthSession | null = null;

  function isTokenExpired(expires: number): boolean {
    return Date.now() >= expires - 30 * 1000;
  }

  function getActiveSessionFromState(state: AuthState): AuthSession | null {
    if (
      state.activeSessionIndex >= 0 &&
      state.activeSessionIndex < state.sessions.length
    ) {
      return state.sessions[state.activeSessionIndex];
    }
    return null;
  }

  function getCurrentState(): AuthState {
    return {
      sessions: cloneSessions(sessions),
      activeSessionIndex,
    };
  }

  function getActiveSession(): AuthSession | null {
    return getActiveSessionFromState(getCurrentState());
  }

  function buildRecoveryState(state: AuthState = getCurrentState()): AuthRecoveryState {
    const session = getActiveSessionFromState(state);
    const pending = !permanentToken && !session && state.sessions.length > 0;

    return {
      pending,
      expiredSession: pending ? lastExpiredSession : null,
      remainingSessions: pending ? cloneSessions(state.sessions) : [],
    };
  }

  function getStatus(state: AuthState = getCurrentState()): AuthStatus {
    if (!initialized && !permanentToken) {
      return 'loading';
    }
    if (isRefreshing) {
      return 'refreshing';
    }
    if (permanentToken) {
      return 'authenticated';
    }
    if (getActiveSessionFromState(state)) {
      return 'authenticated';
    }
    if (state.sessions.length > 0) {
      return 'recoverable';
    }
    return 'unauthenticated';
  }

  function getState(): AuthSnapshot {
    const state = getCurrentState();
    return {
      status: getStatus(state),
      session: getActiveSessionFromState(state),
      sessions: state.sessions,
      activeSessionIndex: state.activeSessionIndex,
      isRefreshing,
      initialized: initialized || !!permanentToken,
      error: lastError,
      recovery: buildRecoveryState(state),
    };
  }

  function emit(event: Omit<AuthEvent, 'snapshot'>): void {
    const snapshot = getState();
    const payload: AuthEvent = {
      ...event,
      snapshot,
    };
    eventListeners.forEach((listener) => listener(payload));
  }

  function notifyAll(event?: Omit<AuthEvent, 'snapshot'>): void {
    const snapshot = getState();
    sessionListeners.forEach((listener) => listener(snapshot.session));
    errorListeners.forEach((listener) => listener(snapshot.error));
    stateListeners.forEach((listener) => listener(snapshot));

    if (event) {
      emit(event);
    }
  }

  function setError(error: Error | null): void {
    lastError = error;
  }

  async function persistState(state: AuthState): Promise<void> {
    if (permanentToken) {
      return;
    }

    await storage.setItem(storageKey, JSON.stringify(state));
  }

  async function applyState(
    state: AuthState,
    options: {
      clearExpiredSession?: boolean;
      expiredSession?: AuthSession | null;
      error?: Error | null;
      event?: Omit<AuthEvent, 'snapshot'>;
    } = {},
  ): Promise<void> {
    sessions = cloneSessions(state.sessions);
    activeSessionIndex =
      state.activeSessionIndex >= 0 && state.activeSessionIndex < sessions.length
        ? state.activeSessionIndex
        : -1;

    if (options.clearExpiredSession || activeSessionIndex >= 0 || sessions.length === 0) {
      lastExpiredSession = null;
    }
    if (Object.prototype.hasOwnProperty.call(options, 'expiredSession')) {
      lastExpiredSession = options.expiredSession ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(options, 'error')) {
      setError(options.error ?? null);
    }

    try {
      await persistState({
        sessions,
        activeSessionIndex,
      });
    } catch (error) {
      console.error('Failed to save auth state:', error);
      if (!lastError && error instanceof Error) {
        setError(error);
      }
    }

    notifyAll(options.event);
  }

  async function loadAuthState(): Promise<AuthState> {
    if (loadAuthStatePromise) {
      return loadAuthStatePromise;
    }

    loadAuthStatePromise = (async (): Promise<AuthState> => {
      const state: AuthState = { sessions: [], activeSessionIndex: -1 };
      try {
        const saved = await storage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          state.sessions = Array.isArray(parsed.sessions) ? parsed.sessions : [];
          state.activeSessionIndex =
            typeof parsed.activeSessionIndex === 'number'
              ? parsed.activeSessionIndex
              : -1;
        }
      } catch (error) {
        console.error('Failed to load auth state:', error);
      }

      sessions = state.sessions;
      activeSessionIndex =
        state.activeSessionIndex >= 0 && state.activeSessionIndex < state.sessions.length
          ? state.activeSessionIndex
          : -1;

      return {
        sessions: cloneSessions(sessions),
        activeSessionIndex,
      };
    })();

    try {
      return await loadAuthStatePromise;
    } finally {
      loadAuthStatePromise = null;
    }
  }

  function setupCrossTabSync(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event: StorageEvent) => {
        if (event.key !== storageKey) {
          return;
        }

        if (!event.newValue) {
          void applyState(
            { sessions: [], activeSessionIndex: -1 },
            { clearExpiredSession: true },
          );
          return;
        }

        try {
          const newState = JSON.parse(event.newValue);
          void applyState(
            {
              sessions: Array.isArray(newState.sessions) ? newState.sessions : [],
              activeSessionIndex:
                typeof newState.activeSessionIndex === 'number'
                  ? newState.activeSessionIndex
                  : -1,
            },
            {},
          );
        } catch (error) {
          console.error('Failed to sync auth state from storage event:', error);
        }
      });
    }
  }

  async function initialize(): Promise<void> {
    if (initialized) {
      return;
    }
    initialized = true;

    if (!permanentToken) {
      if (enableCrossTabSync) {
        setupCrossTabSync();
      }
      await loadAuthState();
    }

    notifyAll({ type: 'initialized' });
  }

  async function fetchUserForToken(token: string): Promise<any> {
    const response = await baseFetch(`${baseUrl.replace(/\/$/, '')}/3/user/`, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorJson: any = null;
      try {
        errorJson = JSON.parse(errorText);
      } catch {
        // not JSON
      }

      throw new ApiError({
        status: response.status,
        error: errorJson || errorText,
        message:
          errorJson?.error ||
          errorJson?.message ||
          'A server error occurred. HTTPStatus: ' + response.status,
      });
    }

    const payload = await response.json();
    return payload?.data ?? payload;
  }

  async function upsertSession(
    newSession: AuthSession,
    eventType: AuthEvent['type'],
  ): Promise<AuthSession> {
    await initialize();
    const currentState = await loadAuthState();
    const sessionCompany = getSessionCompany(newSession);
    const existingIdx = currentState.sessions.findIndex(
      (session) =>
        session.user.id === newSession.user.id &&
        getSessionCompany(session) === sessionCompany,
    );

    let nextState: AuthState;
    if (existingIdx >= 0) {
      const updatedSessions = cloneSessions(currentState.sessions);
      updatedSessions[existingIdx] = newSession;
      nextState = {
        sessions: updatedSessions,
        activeSessionIndex: existingIdx,
      };
    } else {
      nextState = {
        sessions: [...currentState.sessions, newSession],
        activeSessionIndex: currentState.sessions.length,
      };
    }

    await applyState(nextState, {
      clearExpiredSession: true,
      error: null,
      event: {
        type: eventType,
        session: newSession,
      },
    });

    return newSession;
  }

  if (!permanentToken) {
    initialize().catch(console.error);
  }

  async function login(params: LoginParams): Promise<AuthSession> {
    await initialize();
    try {
      const sessionDuration = params.session_duration ?? 900;
      const body: LoginRequestWritable = {
        user: params.user,
        password: params.password,
        company: params.company,
        session_duration: sessionDuration,
        auth_method: 'token',
      };

      const result: any = await authLogin({ client, body, throwOnError: true });
      const data = result?.data ?? result;

      return await upsertSession(
        {
          user: data.user,
          token: data.token,
          refresh_token: data.refresh_token,
          challenges: data.challenges,
          expires: data.expires,
          session_duration: sessionDuration,
          company: params.company,
        },
        'login',
      );
    } catch (e) {
      const error = e instanceof ApiError ? e : new Error('Login failed');
      setError(error);
      notifyAll({
        type: 'error',
        error,
      });
      throw e;
    }
  }

  async function register(params: RegisterParams): Promise<AuthSession> {
    await initialize();
    try {
      const sessionDuration = params.session_duration ?? 900;
      const body: RegisterRequestWritable = {
        email: params.email,
        mobile: params.mobile,
        username: params.username,
        company: params.company,
        password1: params.password,
        password2: params.password,
        first_name: params.first_name,
        last_name: params.last_name,
        terms_and_conditions: params.terms_and_conditions,
        privacy_policy: params.privacy_policy,
        session_duration: sessionDuration,
      };

      const result: any = await authRegister({ client, body, throwOnError: true });
      const data = result?.data ?? result;

      return await upsertSession(
        {
          user: data.user,
          token: data.token,
          refresh_token: data.refresh_token,
          challenges: data.challenges,
          expires: data.expires,
          session_duration: sessionDuration,
          company: params.company,
        },
        'register',
      );
    } catch (e) {
      const error = e instanceof ApiError ? e : new Error('Registration failed');
      setError(error);
      notifyAll({
        type: 'error',
        error,
      });
      throw e;
    }
  }

  async function registerCompanyFn(params: RegisterCompanyParams): Promise<AuthSession> {
    await initialize();
    try {
      const result: any = await authRegisterCompany({
        client,
        body: params,
        throwOnError: true,
      });
      const data = result?.data ?? result;
      const company =
        typeof params.company === 'string'
          ? params.company
          : (params.company as any)?.id;

      return await upsertSession(
        {
          user: data.user,
          token: data.token,
          refresh_token: data.refresh_token,
          challenges: data.challenges,
          expires: data.expires,
          session_duration: 900,
          company,
        },
        'register-company',
      );
    } catch (e) {
      const error =
        e instanceof ApiError ? e : new Error('Company registration failed');
      setError(error);
      notifyAll({
        type: 'error',
        error,
      });
      throw e;
    }
  }

  async function logout(): Promise<void> {
    await initialize();
    const currentState = await loadAuthState();
    const session = getActiveSessionFromState(currentState);

    if (session?.token) {
      try {
        await authLogout({
          client,
          body: { clear_session_option: 'none' },
          headers: { Authorization: `Token ${session.token}` },
          throwOnError: true,
        });
      } catch {
        // Continue with local logout even if API call fails.
      }
    }

    await applyState(
      {
        sessions: currentState.sessions.filter(
          (_session, index) => index !== currentState.activeSessionIndex,
        ),
        activeSessionIndex: -1,
      },
      {
        clearExpiredSession: true,
        error: null,
        event: {
          type: 'logout',
          session,
        },
      },
    );
  }

  async function logoutAll(): Promise<void> {
    await initialize();
    const currentState = await loadAuthState();

    await Promise.all(
      currentState.sessions.map(async (session) => {
        try {
          await authLogout({
            client,
            body: { clear_session_option: 'none' },
            headers: { Authorization: `Token ${session.token}` },
            throwOnError: true,
          });
        } catch {
          // Continue clearing local sessions even if API logout fails.
        }
      }),
    );

    await applyState(
      {
        sessions: [],
        activeSessionIndex: -1,
      },
      {
        clearExpiredSession: true,
        error: null,
        event: {
          type: 'logout-all',
        },
      },
    );
  }

  async function refresh(): Promise<void> {
    if (refreshPromise) {
      return refreshPromise;
    }

    refreshPromise = (async () => {
      isRefreshing = true;
      notifyAll();

      let sessionBeforeRefresh: AuthSession | null = null;

      try {
        const currentState = await loadAuthState();
        const idx = currentState.activeSessionIndex;
        const session = getActiveSessionFromState(currentState);
        sessionBeforeRefresh = session;

        if (idx < 0 || !session?.token || !session.refresh_token) {
          throw new Error('No active session, token, or refresh token found');
        }

        const result: any = await authRefreshCreate({
          client,
          body: { session_duration: session.session_duration ?? 900 },
          headers: { Authorization: `Refresh-Token ${session.refresh_token}` },
          throwOnError: true,
        });
        const data = result?.data ?? result;

        const updatedSessions = cloneSessions(currentState.sessions);
        updatedSessions[idx] = {
          ...session,
          token: data.token ?? session.token,
          refresh_token: data.refresh_token ?? session.refresh_token,
          expires: data.expires ?? session.expires,
          session_duration: session.session_duration ?? 900,
          company: getSessionCompany(session),
        };

        await applyState(
          {
            sessions: updatedSessions,
            activeSessionIndex: idx,
          },
          {
            clearExpiredSession: true,
            error: null,
            event: {
              type: 'refresh',
              session: updatedSessions[idx],
            },
          },
        );
      } catch (e) {
        const error = e instanceof ApiError ? e : new Error('Refresh failed');
        const currentState = await loadAuthState();
        const expiredSession =
          sessionBeforeRefresh ??
          getActiveSessionFromState(currentState);
        const nextSessions = currentState.sessions.filter(
          (_session, index) => index !== currentState.activeSessionIndex,
        );

        await applyState(
          {
            sessions: nextSessions,
            activeSessionIndex: -1,
          },
          {
            expiredSession: expiredSession ?? null,
            error,
            event: {
              type: 'session-expired',
              session: expiredSession,
              error,
            },
          },
        );
        throw e;
      } finally {
        isRefreshing = false;
        refreshPromise = null;
        notifyAll();
      }
    })();

    return refreshPromise;
  }

  async function getToken(): Promise<string | undefined> {
    if (permanentToken) {
      return permanentToken;
    }

    await initialize();
    const session = getActiveSession();
    if (!session) {
      return undefined;
    }

    if (session.expires && isTokenExpired(session.expires)) {
      try {
        await refresh();
      } catch {
        return undefined;
      }
      return getActiveSession()?.token;
    }

    return session.token;
  }

  async function switchToSession(
    userId: string,
    company?: string,
  ): Promise<AuthSession | null> {
    await initialize();
    const currentState = await loadAuthState();
    const idx = currentState.sessions.findIndex(
      (session) =>
        session.user.id === userId && getSessionCompany(session) === company,
    );

    if (idx === -1) {
      return null;
    }

    await applyState(
      {
        sessions: currentState.sessions,
        activeSessionIndex: idx,
      },
      {
        clearExpiredSession: true,
        error: null,
        event: {
          type: 'session-switched',
          session: currentState.sessions[idx],
        },
      },
    );

    const session = getActiveSession();
    if (session?.expires && isTokenExpired(session.expires)) {
      await refresh();
      return getActiveSession();
    }

    return session;
  }

  async function clearAllSessions(): Promise<void> {
    await initialize();
    await applyState(
      {
        sessions: [],
        activeSessionIndex: -1,
      },
      {
        clearExpiredSession: true,
        error: null,
        event: {
          type: 'session-cleared',
        },
      },
    );
  }

  async function deleteChallenge(challengeId: string): Promise<void> {
    await initialize();
    const currentState = await loadAuthState();
    const idx = currentState.activeSessionIndex;

    if (idx < 0 || idx >= currentState.sessions.length) {
      return;
    }

    const session = currentState.sessions[idx];
    const updatedSessions = cloneSessions(currentState.sessions);
    updatedSessions[idx] = {
      ...session,
      challenges:
        session.challenges?.filter((challenge: any) => challenge.id !== challengeId) ||
        [],
    };

    await applyState(
      {
        sessions: updatedSessions,
        activeSessionIndex: idx,
      },
      {
        error: null,
      },
    );
  }

  async function importToken(
    token: string,
    options: ImportTokenOptions = {},
  ): Promise<AuthSession> {
    await initialize();
    const user = await fetchUserForToken(token);
    const sessionDuration = options.sessionDuration ?? 900;

    return upsertSession(
      {
        user,
        token,
        refresh_token: '',
        challenges: [],
        expires: options.expires ?? Date.now() + 30 * 24 * 60 * 60 * 1000,
        session_duration: sessionDuration,
        company: options.company ?? user?.company,
      },
      'session-imported',
    );
  }

  async function validateActiveSession(
    options: ValidateSessionOptions = {},
  ): Promise<boolean> {
    await initialize();
    if (!getActiveSession()?.token) {
      return false;
    }

    const retryCount = options.retryCount ?? 1;
    const retryDelayMs = options.retryDelayMs ?? 400;
    let refreshAttempted = false;

    for (let attempt = 0; attempt <= retryCount; attempt += 1) {
      const activeSession = getActiveSession();

      if (!activeSession?.token) {
        return false;
      }

      try {
        await fetchUserForToken(activeSession.token);
        return true;
      } catch (error) {
        const status =
          error instanceof ApiError
            ? error.status
            : typeof error === 'object' &&
                error &&
                'status' in error &&
                typeof (error as any).status === 'number'
              ? (error as any).status
              : undefined;

        if (status === 401 || status === 403) {
          if (!refreshAttempted && activeSession.refresh_token) {
            refreshAttempted = true;

            try {
              await refresh();
            } catch {
              await expireActiveSession();
              return false;
            }

            const refreshedSession = getActiveSession();
            if (!refreshedSession?.token) {
              return false;
            }

            try {
              await fetchUserForToken(refreshedSession.token);
              return true;
            } catch {
              await expireActiveSession();
              return false;
            }
          }

          if (attempt < retryCount) {
            await sleep(retryDelayMs);
            continue;
          }
          await expireActiveSession();
          return false;
        }

        if (attempt < retryCount) {
          await sleep(retryDelayMs);
          continue;
        }

        return false;
      }
    }

    return false;
  }

  async function syncActiveSessionUser(): Promise<AuthSession | null> {
    await initialize();
    const currentState = await loadAuthState();
    const idx = currentState.activeSessionIndex;
    const session = getActiveSessionFromState(currentState);

    if (idx < 0 || !session?.token) {
      return null;
    }

    const user = await fetchUserForToken(session.token);
    const updatedSession: AuthSession = {
      ...session,
      user: {
        ...session.user,
        ...user,
      },
      company: user?.company ?? getSessionCompany(session),
    };

    const updatedSessions = cloneSessions(currentState.sessions);
    updatedSessions[idx] = updatedSession;

    await applyState(
      {
        sessions: updatedSessions,
        activeSessionIndex: idx,
      },
      {
        error: null,
        event: {
          type: 'session-updated',
          session: updatedSession,
        },
      },
    );

    return updatedSession;
  }

  async function updateSession(
    userId: string,
    company: string | undefined,
    patch: SessionPatch,
  ): Promise<AuthSession | null> {
    await initialize();
    const currentState = await loadAuthState();
    const idx = currentState.sessions.findIndex(
      (session) =>
        session.user.id === userId && getSessionCompany(session) === company,
    );

    if (idx === -1) {
      return null;
    }

    const currentSession = currentState.sessions[idx];
    const updatedSession =
      typeof patch === 'function'
        ? patch(currentSession)
        : {
            ...currentSession,
            ...patch,
            user: patch.user
              ? {
                  ...currentSession.user,
                  ...patch.user,
                }
              : currentSession.user,
            company:
              patch.company ??
              patch.user?.company ??
              getSessionCompany(currentSession),
          };

    const updatedSessions = cloneSessions(currentState.sessions);
    updatedSessions[idx] = updatedSession;

    await applyState(
      {
        sessions: updatedSessions,
        activeSessionIndex: currentState.activeSessionIndex,
      },
      {
        error: null,
        event: {
          type: 'session-updated',
          session: updatedSession,
        },
      },
    );

    return updatedSession;
  }

  async function expireActiveSession(): Promise<AuthRecoveryState> {
    await initialize();
    const currentState = await loadAuthState();
    const session = getActiveSessionFromState(currentState);

    if (!session) {
      return buildRecoveryState(currentState);
    }

    const nextState: AuthState = {
      sessions: currentState.sessions.filter(
        (_entry, index) => index !== currentState.activeSessionIndex,
      ),
      activeSessionIndex: -1,
    };

    await applyState(nextState, {
      expiredSession: session,
      error: null,
      event: {
        type: 'session-expired',
        session,
      },
    });

    return buildRecoveryState();
  }

  return {
    login,
    register,
    registerCompany: registerCompanyFn,
    logout,
    logoutAll,
    refresh,
    getToken,
    getActiveSession,
    getSessions: () => cloneSessions(sessions),
    getSessionsByCompany: (company: string) =>
      sessions.filter((session) => getSessionCompany(session) === company),
    getState,
    getStatus: () => getStatus(),
    getRecoveryState: () => buildRecoveryState(),
    switchToSession,
    clearAllSessions,
    deleteChallenge,
    importToken,
    validateActiveSession,
    syncActiveSessionUser,
    updateSession,
    expireActiveSession,
    subscribe(listener: SessionListener): () => void {
      sessionListeners.push(listener);
      return () => {
        sessionListeners = sessionListeners.filter((entry) => entry !== listener);
      };
    },
    subscribeToErrors(listener: ErrorListener): () => void {
      errorListeners.push(listener);
      return () => {
        errorListeners = errorListeners.filter((entry) => entry !== listener);
      };
    },
    subscribeToState(listener: AuthStateListener): () => void {
      stateListeners.push(listener);
      return () => {
        stateListeners = stateListeners.filter((entry) => entry !== listener);
      };
    },
    subscribeToEvents(listener: AuthEventListener): () => void {
      eventListeners.push(listener);
      return () => {
        eventListeners = eventListeners.filter((entry) => entry !== listener);
      };
    },
    get baseUrl() {
      return baseUrl;
    },
  };
}
