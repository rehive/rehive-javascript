import { createClient } from '../platform/user/openapi-ts/client/index.js';
import {
  authLogin,
  authRegister,
  authRegisterCompany,
  authRefreshCreate,
  authLogout,
} from '../platform/user/openapi-ts/sdk.gen.js';
import type {
  LoginWritable,
  RegisterWritable,
  RegisterCompanyWritable,
} from '../platform/user/openapi-ts/types.gen.js';
import { WebStorageAdapter, MemoryStorageAdapter } from './core/storage-adapters.js';
import { ApiError, normalizeFetch } from '../shared/api-utils.js';
import type {
  AuthSession,
  AuthState,
  SessionListener,
  ErrorListener,
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

export type RegisterCompanyParams = RegisterCompanyWritable;

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
  switchToSession(userId: string, company?: string): Promise<AuthSession | null>;
  clearAllSessions(): Promise<void>;
  deleteChallenge(challengeId: string): Promise<void>;
  subscribe(listener: SessionListener): () => void;
  subscribeToErrors(listener: ErrorListener): () => void;
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

export function createAuth(config: AuthConfig = {}): Auth {
  const baseUrl = config.baseUrl || 'https://api.rehive.com';
  const storage = resolveStorage(config.storage);
  const permanentToken = config.token;
  const enableCrossTabSync = config.enableCrossTabSync ?? true;
  const storageKey = 'rehive_auth_state';

  const client = createClient({
    baseUrl,
    responseStyle: 'data' as const,
    fetch: errorHandlingFetch(normalizeFetch(globalThis.fetch)),
  });

  let sessions: AuthSession[] = [];
  let activeSessionIndex = -1;
  let sessionListeners: SessionListener[] = [];
  let errorListeners: ErrorListener[] = [];
  let refreshPromise: Promise<void> | null = null;
  let isRefreshing = false;
  let loadAuthStatePromise: Promise<AuthState> | null = null;
  let initialized = false;

  function isTokenExpired(expires: number): boolean {
    return Date.now() >= expires - 30 * 1000;
  }

  function getActiveSession(): AuthSession | null {
    if (activeSessionIndex >= 0 && activeSessionIndex < sessions.length) {
      return sessions[activeSessionIndex];
    }
    return null;
  }

  function notifySessionListeners(): void {
    const session = getActiveSession();
    sessionListeners.forEach((listener) => listener(session));
  }

  function notifyErrorListeners(error: Error | null): void {
    errorListeners.forEach((listener) => listener(error));
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
      activeSessionIndex = state.activeSessionIndex;
      return state;
    })();

    try {
      return await loadAuthStatePromise;
    } finally {
      loadAuthStatePromise = null;
    }
  }

  async function saveAuthState(state: AuthState): Promise<void> {
    try {
      await storage.setItem(storageKey, JSON.stringify(state));
      sessions = state.sessions;
      activeSessionIndex = state.activeSessionIndex;
      notifySessionListeners();
    } catch (error) {
      console.error('Failed to save auth state:', error);
    }
  }

  function setupCrossTabSync(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event: StorageEvent) => {
        if (event.key === storageKey && event.newValue) {
          try {
            const newState = JSON.parse(event.newValue);
            sessions = Array.isArray(newState.sessions) ? newState.sessions : [];
            activeSessionIndex =
              typeof newState.activeSessionIndex === 'number'
                ? newState.activeSessionIndex
                : -1;
            notifySessionListeners();
          } catch (error) {
            console.error('Failed to sync auth state from storage event:', error);
          }
        }
      });
    }
  }

  async function initialize(): Promise<void> {
    if (initialized) return;
    initialized = true;

    if (!permanentToken) {
      if (enableCrossTabSync) {
        setupCrossTabSync();
      }
      await loadAuthState();
      notifySessionListeners();
    }
  }

  // Kick off initialization (non-blocking)
  if (!permanentToken) {
    initialize().catch(console.error);
  }

  async function login(params: LoginParams): Promise<AuthSession> {
    await initialize();
    try {
      const sessionDuration = params.session_duration ?? 900;
      const body: LoginWritable = {
        user: params.user,
        password: params.password,
        company: params.company,
        session_duration: sessionDuration,
        auth_method: 'token',
      };

      const result: any = await authLogin({ client, body, throwOnError: true });
      const data = result?.data ?? result;

      const newSession: AuthSession = {
        user: data.user,
        token: data.token,
        refresh_token: data.refresh_token,
        challenges: data.challenges,
        expires: data.expires,
        session_duration: sessionDuration,
        company: params.company,
      };

      const currentState = await loadAuthState();
      const existingIdx = currentState.sessions.findIndex(
        (s: AuthSession) =>
          s.user.id === newSession.user.id && s.company === newSession.company,
      );

      let newState: AuthState;
      if (existingIdx !== -1) {
        const updated = [...currentState.sessions];
        updated[existingIdx] = newSession;
        newState = { ...currentState, sessions: updated, activeSessionIndex: existingIdx };
      } else {
        newState = {
          sessions: [...currentState.sessions, newSession],
          activeSessionIndex: currentState.sessions.length,
        };
      }

      await saveAuthState(newState);
      notifyErrorListeners(null);
      return newSession;
    } catch (e) {
      const error = e instanceof ApiError ? e : new Error('Login failed');
      notifyErrorListeners(error);
      throw e;
    }
  }

  async function register(params: RegisterParams): Promise<AuthSession> {
    await initialize();
    try {
      const sessionDuration = params.session_duration ?? 900;
      const body: RegisterWritable = {
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

      const newSession: AuthSession = {
        user: data.user,
        token: data.token,
        refresh_token: data.refresh_token,
        challenges: data.challenges,
        expires: data.expires,
        session_duration: sessionDuration,
        company: params.company,
      };

      const currentState = await loadAuthState();
      const newState: AuthState = {
        sessions: [...currentState.sessions, newSession],
        activeSessionIndex: currentState.sessions.length,
      };

      await saveAuthState(newState);
      notifyErrorListeners(null);
      return newSession;
    } catch (e) {
      const error = e instanceof ApiError ? e : new Error('Registration failed');
      notifyErrorListeners(error);
      throw e;
    }
  }

  async function registerCompanyFn(params: RegisterCompanyParams): Promise<AuthSession> {
    await initialize();
    try {
      const body: RegisterCompanyWritable = params;
      const result: any = await authRegisterCompany({ client, body, throwOnError: true });
      const data = result?.data ?? result;

      const newSession: AuthSession = {
        user: data.user,
        token: data.token,
        refresh_token: data.refresh_token,
        challenges: data.challenges,
        expires: data.expires,
        session_duration: 900,
        company: typeof params.company === 'string' ? params.company : (params.company as any)?.id,
      };

      const currentState = await loadAuthState();
      const newState: AuthState = {
        sessions: [...currentState.sessions, newSession],
        activeSessionIndex: currentState.sessions.length,
      };

      await saveAuthState(newState);
      notifyErrorListeners(null);
      return newSession;
    } catch (e) {
      const error = e instanceof ApiError ? e : new Error('Company registration failed');
      notifyErrorListeners(error);
      throw e;
    }
  }

  async function logout(): Promise<void> {
    const currentState = await loadAuthState();
    const session = currentState.sessions[currentState.activeSessionIndex];

    const newState: AuthState = {
      ...currentState,
      sessions: currentState.sessions.filter(
        (_: AuthSession, i: number) => i !== currentState.activeSessionIndex,
      ),
      activeSessionIndex: -1,
    };

    if (session?.token) {
      try {
        await authLogout({
          client,
          body: { clear_session_option: 'none' },
          headers: { Authorization: `Token ${session.token}` },
          throwOnError: true,
        });
      } catch {
        // Continue with local logout even if API call fails
      }
    }

    await saveAuthState(newState);
    notifyErrorListeners(null);
  }

  async function logoutAll(): Promise<void> {
    const currentState = await loadAuthState();

    await Promise.all(
      currentState.sessions.map(async (session: AuthSession) => {
        try {
          await authLogout({
            client,
            body: { clear_session_option: 'none' },
            headers: { Authorization: `Token ${session.token}` },
            throwOnError: true,
          });
        } catch {
          // Log but continue
        }
      }),
    );

    await saveAuthState({ sessions: [], activeSessionIndex: -1 });
    notifyErrorListeners(null);
  }

  async function refresh(): Promise<void> {
    if (refreshPromise) return refreshPromise;

    refreshPromise = (async () => {
      isRefreshing = true;
      try {
        const currentState = await loadAuthState();
        const idx = currentState.activeSessionIndex;
        const session = currentState.sessions[idx];

        if (!session?.token || !session?.refresh_token) {
          throw new Error('No active session, token, or refresh token found');
        }

        const result: any = await authRefreshCreate({
          client,
          body: { session_duration: session.session_duration ?? 900 },
          headers: { Authorization: `Refresh-Token ${session.refresh_token}` },
          throwOnError: true,
        });
        const data = result?.data ?? result;

        const updatedSessions = [...currentState.sessions];
        updatedSessions[idx] = {
          ...session,
          refresh_token: data.refresh_token,
          expires: data.expires,
          session_duration: session.session_duration ?? 900,
          company: session.company,
        };

        await saveAuthState({ ...currentState, sessions: updatedSessions });
        notifyErrorListeners(null);
      } catch (e) {
        const error = e instanceof ApiError ? e : new Error('Refresh failed');
        notifyErrorListeners(error);

        const currentState = await loadAuthState();
        await saveAuthState({
          ...currentState,
          sessions: currentState.sessions.filter(
            (_: AuthSession, i: number) => i !== currentState.activeSessionIndex,
          ),
          activeSessionIndex: -1,
        });
        throw e;
      } finally {
        isRefreshing = false;
        refreshPromise = null;
      }
    })();

    return refreshPromise;
  }

  async function getToken(): Promise<string | undefined> {
    if (permanentToken) return permanentToken;

    await initialize();
    const session = getActiveSession();
    if (!session) return undefined;

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
    const currentState = await loadAuthState();
    const idx = currentState.sessions.findIndex(
      (s: AuthSession) => s.user.id === userId && s.company === company,
    );

    if (idx === -1) return null;

    const session = currentState.sessions[idx];
    await saveAuthState({ ...currentState, activeSessionIndex: idx });

    if (session.expires && isTokenExpired(session.expires)) {
      await refresh();
      return getActiveSession();
    }

    return session;
  }

  async function clearAllSessions(): Promise<void> {
    await saveAuthState({ sessions: [], activeSessionIndex: -1 });
    notifyErrorListeners(null);
  }

  async function deleteChallenge(challengeId: string): Promise<void> {
    const currentState = await loadAuthState();
    const idx = currentState.activeSessionIndex;
    if (idx < 0 || idx >= currentState.sessions.length) return;

    const session = currentState.sessions[idx];
    const updatedSessions = [...currentState.sessions];
    updatedSessions[idx] = {
      ...session,
      challenges: session.challenges?.filter((c: any) => c.id !== challengeId) || [],
    };

    await saveAuthState({ ...currentState, sessions: updatedSessions });
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
    getSessions: () => [...sessions],
    getSessionsByCompany: (company: string) =>
      sessions.filter((s) => s.company === company),
    switchToSession,
    clearAllSessions,
    deleteChallenge,
    subscribe(listener: SessionListener): () => void {
      sessionListeners.push(listener);
      return () => {
        sessionListeners = sessionListeners.filter((l) => l !== listener);
      };
    },
    subscribeToErrors(listener: ErrorListener): () => void {
      errorListeners.push(listener);
      return () => {
        errorListeners = errorListeners.filter((l) => l !== listener);
      };
    },
    get baseUrl() {
      return baseUrl;
    },
  };
}
