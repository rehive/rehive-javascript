import { createClient } from '../platform/user/openapi-ts/client/index.js';
import {
  authLogin,
  authRegister,
  authRegisterCompany,
  authRefresh,
  authLogout,
} from '../platform/user/openapi-ts/sdk.gen.js';
import type {
  LoginRequestWritable,
  RefreshRequest,
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
  session_duration?: number | null;
  // Defaults to `AuthConfig.refreshTokenDuration`; null sends none, so the
  // company default applies.
  refresh_token_duration?: number | null;
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
  session_duration?: number | null;
  // Defaults to `AuthConfig.refreshTokenDuration`; null sends none, so the
  // company default applies.
  refresh_token_duration?: number | null;
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
  // Refresh token lifespan (seconds) for logins and registrations. A session
  // saved without one adopts it on its next refresh.
  refreshTokenDuration?: number;
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

// The generated clients predate the platform's refresh_token_duration field.
type WithRefreshTokenDuration<T> = T & { refresh_token_duration?: number | null };

function isDurationError(error: unknown): boolean {
  if (!(error instanceof ApiError) || error.status !== 400) {
    return false;
  }
  const body = error.error as unknown as { data?: Record<string, unknown> } | null;
  return (
    typeof body === 'object' &&
    (body?.data?.session_duration !== undefined ||
      body?.data?.refresh_token_duration !== undefined)
  );
}

// The platform turned the refresh token down: spent, expired or revoked.
// Anything else (no connection, a timeout, a server error) says nothing about
// the token, so the session is kept for the next try.
function isRejectedRefresh(error: unknown): boolean {
  return (
    error instanceof ApiError &&
    error.status >= 400 &&
    error.status < 500 &&
    error.status !== 408 &&
    error.status !== 429
  );
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

// How long a tab waits for another tab's refresh of the same session.
const REFRESH_LOCK_TIMEOUT_MS = 30_000;

type SessionKey = { userId: string; company: string | undefined };

function sameSession(a: SessionKey | null, b: SessionKey | null): boolean {
  return !!a && !!b && a.userId === b.userId && a.company === b.company;
}

function sessionKey(session: AuthSession): SessionKey {
  return { userId: session.user.id, company: getSessionCompany(session) };
}

function indexOfSession(sessions: AuthSession[], key: SessionKey | null): number {
  if (!key) {
    return -1;
  }
  return sessions.findIndex(
    (session) =>
      session.user.id === key.userId && getSessionCompany(session) === key.company,
  );
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
  // This tab's active session, by user and company. With cross-tab sync off
  // the index alone is not enough: other tabs add and remove sessions, and the
  // stored index is the choice of whichever tab saved last.
  let activeKey: SessionKey | null = null;
  let hadActiveSession = false;
  // Refresh tokens are single-use, so tabs sharing storage must not refresh
  // one session at the same time.
  const sharesStorage = !(storage instanceof MemoryStorageAdapter);
  // With cross-tab sync off, each browser tab also remembers its active
  // session in sessionStorage, which survives a reload of that tab only: a
  // reload then reopens this tab's session rather than whichever one another
  // tab saved last. With sync on, tabs share the stored one.
  const tabKeyName = `${storageKey}:tab-active`;
  const usesTabMemory = !enableCrossTabSync && storage instanceof WebStorageAdapter;

  function readTabKey(): SessionKey | null {
    if (!usesTabMemory) {
      return null;
    }
    try {
      const raw = window.sessionStorage.getItem(tabKeyName);
      return raw ? (JSON.parse(raw) as SessionKey) : null;
    } catch {
      return null;
    }
  }

  function setActiveKey(key: SessionKey | null): void {
    activeKey = key;
    if (key) {
      hadActiveSession = true;
    }
    if (!usesTabMemory) {
      return;
    }
    try {
      if (key) {
        window.sessionStorage.setItem(tabKeyName, JSON.stringify(key));
      } else {
        window.sessionStorage.removeItem(tabKeyName);
      }
    } catch {
      // Private modes can refuse sessionStorage; the tab then follows storage.
    }
  }
  let sessionListeners: SessionListener[] = [];
  let errorListeners: ErrorListener[] = [];
  let stateListeners: AuthStateListener[] = [];
  let eventListeners: AuthEventListener[] = [];
  let refreshPromise: Promise<void> | null = null;
  let isRefreshing = false;
  let loadAuthStatePromise: Promise<AuthState> | null = null;
  let initialized = false;
  let initializePromise: Promise<void> | null = null;
  let cachedSnapshot: AuthSnapshot | null = null;
  let lastError: Error | null = null;
  let lastExpiredSession: AuthSession | null = null;

  function isTokenExpired(expires: number): boolean {
    return Date.now() >= expires - 30 * 1000;
  }

  // null asks for none; undefined leaves it unset, so a later config can
  // still be adopted on refresh.
  function resolveRefreshTokenDuration(
    requested: number | null | undefined,
    sessionDuration: number | undefined,
  ): number | null | undefined {
    if (requested === null) {
      return null;
    }
    // On the company's session length (unknown here) the configured value
    // waits for the first refresh, where a rejection can be retried.
    if (requested === undefined && sessionDuration === undefined) {
      return undefined;
    }
    const duration = requested ?? config.refreshTokenDuration;
    if (duration == null) {
      return undefined;
    }
    // Sessions that never expire get no refresh token.
    if (sessionDuration === 0) {
      return null;
    }
    // The platform rejects a refresh token shorter than its session.
    return sessionDuration ? Math.max(duration, sessionDuration) : duration;
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
    if (cachedSnapshot) {
      return cachedSnapshot;
    }
    const state = getCurrentState();
    cachedSnapshot = {
      status: getStatus(state),
      session: getActiveSessionFromState(state),
      sessions: state.sessions,
      activeSessionIndex: state.activeSessionIndex,
      isRefreshing,
      initialized: initialized || !!permanentToken,
      error: lastError,
      recovery: buildRecoveryState(state),
    };
    return cachedSnapshot;
  }

  function invalidateSnapshot(): void {
    cachedSnapshot = null;
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
    invalidateSnapshot();
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
    setActiveKey(activeSessionIndex >= 0 ? sessionKey(sessions[activeSessionIndex]) : null);

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
      if (enableCrossTabSync) {
        // Tabs share one active session: follow the stored choice, so a write
        // from this tab never switches the others back to an older one.
        activeSessionIndex =
          state.activeSessionIndex >= 0 && state.activeSessionIndex < state.sessions.length
            ? state.activeSessionIndex
            : -1;
        setActiveKey(
          activeSessionIndex >= 0 ? sessionKey(state.sessions[activeSessionIndex]) : null,
        );
      } else if (activeKey || hadActiveSession) {
        // Keep this tab's own session: adopting the stored index would switch
        // it to whatever another tab chose last.
        activeSessionIndex = indexOfSession(state.sessions, activeKey);
      } else {
        // A tab with no session yet reopens its own after a reload, else takes
        // the last-used one (a login in another tab included).
        const remembered = indexOfSession(state.sessions, readTabKey());
        activeSessionIndex =
          remembered >= 0
            ? remembered
            : state.activeSessionIndex >= 0 && state.activeSessionIndex < state.sessions.length
              ? state.activeSessionIndex
              : -1;
        setActiveKey(
          activeSessionIndex >= 0 ? sessionKey(state.sessions[activeSessionIndex]) : null,
        );
      }

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
    if (initializePromise) {
      return initializePromise;
    }

    initializePromise = (async () => {
      if (!permanentToken) {
        if (enableCrossTabSync) {
          setupCrossTabSync();
        }
        await loadAuthState();
      }
      initialized = true;
      notifyAll({ type: 'initialized' });
    })();

    return initializePromise;
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
      // Default to 900s unless explicitly set to null (no custom duration)
      const sessionDuration = params.session_duration === null
        ? undefined
        : (params.session_duration ?? 900);
      const refreshTokenDuration = resolveRefreshTokenDuration(
        params.refresh_token_duration,
        sessionDuration,
      );
      const body: WithRefreshTokenDuration<LoginRequestWritable> = {
        user: params.user,
        password: params.password,
        company: params.company,
        ...(sessionDuration != null && { session_duration: sessionDuration }),
        ...(refreshTokenDuration != null && { refresh_token_duration: refreshTokenDuration }),
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
          session_duration: sessionDuration ?? 900,
          refresh_token_duration: refreshTokenDuration,
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
      // Default to 900s unless explicitly set to null (no custom duration)
      const sessionDuration = params.session_duration === null
        ? undefined
        : (params.session_duration ?? 900);
      const refreshTokenDuration = resolveRefreshTokenDuration(
        params.refresh_token_duration,
        sessionDuration,
      );
      const body: WithRefreshTokenDuration<RegisterRequestWritable> = {
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
        ...(sessionDuration != null && { session_duration: sessionDuration }),
        ...(refreshTokenDuration != null && { refresh_token_duration: refreshTokenDuration }),
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
          session_duration: sessionDuration ?? 900,
          refresh_token_duration: refreshTokenDuration,
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

    // Other tabs may have refreshed or added sessions during the request, so
    // remove this one from storage as it is now.
    await withStateLock(async () => {
      const state = await loadAuthState();
      const idx = session ? indexOfSession(state.sessions, sessionKey(session)) : -1;
      await applyState(
        {
          sessions: state.sessions.filter((_session, index) => index !== idx),
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
    });
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

      try {
        await initialize();
        // The session to refresh is fixed here: switching while this waits for
        // the lock or the platform must not move the refresh to another one.
        const known = getActiveSession();
        if (!known) {
          throw new Error('No active session, token, or refresh token found');
        }
        const key = sessionKey(known);
        await withRefreshLock(key, () => refreshSession(key, known));
      } finally {
        isRefreshing = false;
        refreshPromise = null;
        notifyAll();
      }
    })();

    return refreshPromise;
  }

  // Tabs sharing storage queue on a Web Lock (elsewhere, such as React Native,
  // there is one process and `refreshPromise` already dedupes). A timeout only
  // ends the wait: a tab still waiting then rejects with an AbortError, while
  // the tab holding the lock keeps it until its task ends.
  function withLock(
    name: string,
    task: () => Promise<void>,
    timeoutMs?: number,
  ): Promise<void> {
    const locks =
      sharesStorage && typeof navigator !== 'undefined' ? navigator.locks : undefined;
    if (!locks?.request) {
      return task();
    }
    const signal =
      timeoutMs !== undefined && typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal
        ? AbortSignal.timeout(timeoutMs)
        : undefined;
    return signal ? locks.request(name, { signal }, task) : locks.request(name, task);
  }

  // One refresh per session at a time, across tabs.
  function withRefreshLock(key: SessionKey, task: () => Promise<void>): Promise<void> {
    return withLock(
      `rehive-auth-refresh:${key.userId}:${key.company ?? ''}`,
      task,
      REFRESH_LOCK_TIMEOUT_MS,
    );
  }

  // A read and the write that follows it, with no other tab's write between.
  // Its tasks are short and local, so it waits without a limit: giving up
  // after a refresh would lose the new tokens.
  function withStateLock(task: () => Promise<void>): Promise<void> {
    return withLock(`rehive-auth-state:${storageKey}`, task);
  }

  function isNewer(session: AuthSession, than: AuthSession): boolean {
    return (session.expires ?? 0) > (than.expires ?? 0);
  }

  // Writes one session back onto storage as it is now. Other tabs may have
  // logged in, switched or refreshed other sessions meanwhile, so the whole
  // state read before the request must not be written over theirs. Resolves
  // false, writing nothing, when the session is no longer stored.
  async function saveSession(
    key: SessionKey,
    session: AuthSession,
    event: Omit<AuthEvent, 'snapshot'>,
  ): Promise<boolean> {
    let saved = false;
    await withStateLock(async () => {
      const state = await loadAuthState();
      const idx = indexOfSession(state.sessions, key);
      if (idx < 0) {
        return;
      }
      const nextSessions = cloneSessions(state.sessions);
      nextSessions[idx] = session;
      await applyState(
        { sessions: nextSessions, activeSessionIndex: state.activeSessionIndex },
        { clearExpiredSession: true, error: null, event },
      );
      saved = true;
    });
    return saved;
  }

  function dropSession(
    key: SessionKey,
    expiredSession: AuthSession,
    error: Error,
  ): Promise<void> {
    return withStateLock(async () => {
      const state = await loadAuthState();
      const idx = indexOfSession(state.sessions, key);
      const wasActive = sameSession(activeKey, key);
      const nextSessions = state.sessions.filter((_session, index) => index !== idx);
      await applyState(
        {
          sessions: nextSessions,
          activeSessionIndex: wasActive ? -1 : indexOfSession(nextSessions, activeKey),
        },
        {
          ...(wasActive && { expiredSession, error }),
          event: { type: 'session-expired', session: expiredSession, error },
        },
      );
    });
  }

  async function refreshSession(key: SessionKey, known: AuthSession): Promise<void> {
    // Start from storage: another tab may have refreshed this session while
    // this one waited, or earlier, if cross-tab sync is off.
    const before = await loadAuthState();
    const stored = before.sessions[indexOfSession(before.sessions, key)] ?? null;

    if (!stored) {
      // Logged out in another tab.
      const error = new Error('Session no longer exists');
      await dropSession(key, known, error);
      throw error;
    }

    if (
      stored.refresh_token !== known.refresh_token &&
      isNewer(stored, known) &&
      !(stored.expires && isTokenExpired(stored.expires))
    ) {
      // Already refreshed elsewhere: take its tokens rather than spending
      // ours, which the platform has already replaced.
      await saveSession(key, stored, { type: 'refresh', session: stored });
      return;
    }

    // A stale write from another tab can put back an older, spent token, so
    // refresh with whichever copy is newer. A newer copy that has expired too
    // (tabs left idle) still holds the current refresh token.
    const session = isNewer(stored, known) ? stored : known;

    if (!session.token || !session.refresh_token) {
      const error = new Error('No active session, token, or refresh token found');
      await dropSession(key, session, error);
      throw error;
    }

    let refreshed: AuthSession;
    try {
      // The platform replays the durations a session was created with. A
      // session saved without a refresh token lifespan may predate that, so
      // it still sends its session duration, as older versions did, and
      // adopts the configured lifespan on the way.
      const legacy = session.refresh_token_duration === undefined;
      let refreshTokenDuration = legacy
        ? resolveRefreshTokenDuration(undefined, session.session_duration)
        : undefined;
      const requestRefresh = (body: WithRefreshTokenDuration<RefreshRequest>) =>
        authRefresh({
          client,
          body,
          headers: { Authorization: `Refresh-Token ${session.refresh_token}` },
          throwOnError: true,
        });

      let result: any;
      try {
        result = await requestRefresh(
          legacy
            ? {
                session_duration: session.session_duration ?? 900,
                ...(refreshTokenDuration != null && {
                  refresh_token_duration: refreshTokenDuration,
                }),
              }
            : {},
        );
      } catch (e) {
        if (!legacy || !isDurationError(e)) {
          throw e;
        }
        // The platform validates before it uses the refresh token, so the
        // same token can go again, letting the platform pick the durations.
        refreshTokenDuration = null;
        result = await requestRefresh({});
      }
      const data = result?.data ?? result;

      refreshed = {
        ...session,
        token: data.token ?? session.token,
        refresh_token: data.refresh_token ?? session.refresh_token,
        expires: data.expires ?? session.expires,
        session_duration: session.session_duration ?? 900,
        refresh_token_duration: legacy ? refreshTokenDuration : session.refresh_token_duration,
        company: getSessionCompany(session),
      };
    } catch (e) {
      const after = await loadAuthState();
      const current = after.sessions[indexOfSession(after.sessions, key)] ?? null;

      if (current && current.refresh_token !== session.refresh_token && isNewer(current, session)) {
        // Storage no longer holds the token that failed: another tab (one
        // without this lock) refreshed it meanwhile, so the session lives on.
        await saveSession(key, current, { type: 'refresh', session: current });
        return;
      }

      if (!isRejectedRefresh(e)) {
        throw e;
      }

      await dropSession(key, session, e as ApiError);
      throw e;
    }

    if (!(await saveSession(key, refreshed, { type: 'refresh', session: refreshed }))) {
      // Logged out in another tab while the request ran.
      const error = new Error('Session no longer exists');
      await dropSession(key, refreshed, error);
      throw error;
    }
  }

  // After a failed refresh: the session is still the active one when the
  // platform gave no verdict on its token.
  function isStillActive(session: AuthSession): boolean {
    const current = getActiveSession();
    return !!current && sameSession(sessionKey(current), sessionKey(session));
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
      } catch (error) {
        // Sent without a token, the request would come back 401 and read as
        // a rejected session, so a session kept for another try fails it.
        if (isStillActive(session)) {
          throw error;
        }
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
              // A refresh with no verdict leaves the session unconfirmed, not expired.
              if (!isStillActive(activeSession)) {
                await expireActiveSession();
              }
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
    const session = getActiveSessionFromState(currentState);

    if (!session?.token) {
      return null;
    }

    const user = await fetchUserForToken(session.token);
    const key = sessionKey(session);
    let updatedSession: AuthSession | null = null;

    // Merge the user into the session as stored now: another tab may have
    // refreshed it during the request, and its spent tokens must not go back.
    await withStateLock(async () => {
      const state = await loadAuthState();
      const idx = indexOfSession(state.sessions, key);
      if (idx < 0) {
        return;
      }
      const stored = state.sessions[idx];
      const synced: AuthSession = {
        ...stored,
        user: {
          ...stored.user,
          ...user,
        },
        company: user?.company ?? getSessionCompany(stored),
      };
      const updatedSessions = cloneSessions(state.sessions);
      updatedSessions[idx] = synced;

      await applyState(
        {
          sessions: updatedSessions,
          activeSessionIndex: state.activeSessionIndex,
        },
        {
          error: null,
          event: {
            type: 'session-updated',
            session: synced,
          },
        },
      );
      updatedSession = synced;
    });

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
