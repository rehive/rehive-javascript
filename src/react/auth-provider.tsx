import {
  createContext,
  useContext,
  useState,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { createAuth } from '../auth/create-auth.js';
import type {
  Auth,
  AuthConfig,
  ImportTokenOptions,
  LoginParams,
  RegisterParams,
  RegisterCompanyParams,
  SessionPatch,
  ValidateSessionOptions,
} from '../auth/create-auth.js';
import type {
  AuthRecoveryState,
  AuthSession,
  AuthSnapshot,
  AuthStatus,
} from '../auth/types/index.js';

export interface AuthContextType {
  authUser: AuthSession | null | undefined;
  authStatus: AuthStatus;
  authState: AuthSnapshot;
  authRecovery: AuthRecoveryState;
  refreshCallback: () => Promise<void>;
  login: (params: LoginParams) => Promise<AuthSession>;
  register: (params: RegisterParams) => Promise<AuthSession>;
  registerCompany: (params: RegisterCompanyParams) => Promise<AuthSession>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
  authLoading: boolean;
  authError: Error | null | undefined;
  deleteChallenge: (challengeId: string | undefined) => Promise<void>;
  getSessions: () => AuthSession[];
  getSessionsByCompany: (company: string) => AuthSession[];
  switchToSession: (userId: string, company?: string) => Promise<AuthSession | null>;
  clearAllSessions: () => Promise<void>;
  logoutAll: () => Promise<void>;
  importToken: (token: string, options?: ImportTokenOptions) => Promise<AuthSession>;
  validateActiveSession: (options?: ValidateSessionOptions) => Promise<boolean>;
  syncActiveSessionUser: () => Promise<AuthSession | null>;
  updateSession: (
    userId: string,
    company: string | undefined,
    patch: SessionPatch,
  ) => Promise<AuthSession | null>;
  expireActiveSession: () => Promise<AuthRecoveryState>;
  auth: Auth;
}

const AuthContext = createContext<AuthContextType | null>(null);

export interface AuthProviderProps {
  children: ReactNode;
  config: AuthConfig;
}

export const AuthProvider = ({ children, config }: AuthProviderProps) => {
  const [auth] = useState(() => createAuth(config));
  const [pendingActionCount, setPendingActionCount] = useState(0);

  const subscribe = useCallback(
    (onStoreChange: () => void) => auth.subscribeToState(() => onStoreChange()),
    [auth],
  );
  const getSnapshot = useCallback((): AuthSnapshot => auth.getState(), [auth]);
  const authState = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const runWithLoading = useCallback(
    async function <T>(operation: () => Promise<T>): Promise<T> {
      setPendingActionCount((count) => count + 1);
      try {
        return await operation();
      } finally {
        setPendingActionCount((count) => Math.max(0, count - 1));
      }
    },
    [],
  );

  const refreshCallback = useCallback(() => auth.refresh(), [auth]);

  const login = useCallback(
    (params: LoginParams): Promise<AuthSession> =>
      runWithLoading(() => auth.login(params)),
    [auth, runWithLoading],
  );

  const register = useCallback(
    (params: RegisterParams): Promise<AuthSession> =>
      runWithLoading(() => auth.register(params)),
    [auth, runWithLoading],
  );

  const registerCompany = useCallback(
    (params: RegisterCompanyParams): Promise<AuthSession> =>
      runWithLoading(() => auth.registerCompany(params)),
    [auth, runWithLoading],
  );

  const logout = useCallback(
    (): Promise<void> => runWithLoading(() => auth.logout()),
    [auth, runWithLoading],
  );

  const deleteChallenge = useCallback(
    async (challengeId: string | undefined): Promise<void> => {
      if (!challengeId) {
        return;
      }
      await runWithLoading(() => auth.deleteChallenge(challengeId));
    },
    [auth, runWithLoading],
  );

  const switchToSession = useCallback(
    (userId: string, company?: string): Promise<AuthSession | null> =>
      runWithLoading(() => auth.switchToSession(userId, company)),
    [auth, runWithLoading],
  );

  const clearAllSessions = useCallback(
    (): Promise<void> => runWithLoading(() => auth.clearAllSessions()),
    [auth, runWithLoading],
  );

  const logoutAll = useCallback(
    (): Promise<void> => runWithLoading(() => auth.logoutAll()),
    [auth, runWithLoading],
  );

  const importToken = useCallback(
    (token: string, options?: ImportTokenOptions): Promise<AuthSession> =>
      runWithLoading(() => auth.importToken(token, options)),
    [auth, runWithLoading],
  );

  const validateActiveSession = useCallback(
    (options?: ValidateSessionOptions): Promise<boolean> =>
      auth.validateActiveSession(options),
    [auth],
  );

  const syncActiveSessionUser = useCallback(
    (): Promise<AuthSession | null> => runWithLoading(() => auth.syncActiveSessionUser()),
    [auth, runWithLoading],
  );

  const updateSession = useCallback(
    (
      userId: string,
      company: string | undefined,
      patch: SessionPatch,
    ): Promise<AuthSession | null> =>
      runWithLoading(() => auth.updateSession(userId, company, patch)),
    [auth, runWithLoading],
  );

  const expireActiveSession = useCallback(
    (): Promise<AuthRecoveryState> =>
      runWithLoading(() => auth.expireActiveSession()),
    [auth, runWithLoading],
  );

  const authLoading =
    pendingActionCount > 0 ||
    authState.status === 'loading' ||
    authState.status === 'refreshing';

  const contextValue: AuthContextType = {
    authUser: authState.initialized ? authState.session : undefined,
    authStatus: authState.status,
    authState,
    authRecovery: authState.recovery,
    refreshCallback,
    login,
    register,
    registerCompany,
    logout,
    refresh: refreshCallback,
    authLoading,
    authError: authState.error,
    deleteChallenge,
    getSessions: auth.getSessions,
    getSessionsByCompany: auth.getSessionsByCompany,
    switchToSession,
    clearAllSessions,
    logoutAll,
    importToken,
    validateActiveSession,
    syncActiveSessionUser,
    updateSession,
    expireActiveSession,
    auth,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
