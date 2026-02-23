import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { createAuth } from '../auth/create-auth.js';
import type { Auth, AuthConfig, LoginParams, RegisterParams, RegisterCompanyParams } from '../auth/create-auth.js';
import type { AuthSession } from '../auth/types/index.js';

export interface AuthContextType {
  authUser: AuthSession | null | undefined;
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
  auth: Auth;
}

const AuthContext = createContext<AuthContextType | null>(null);

export interface AuthProviderProps {
  children: ReactNode;
  config: AuthConfig;
}

export const AuthProvider = ({ children, config }: AuthProviderProps) => {
  const [auth] = useState(() => createAuth(config));
  const [authUser, setAuthUser] = useState<AuthSession | null | undefined>(undefined);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState<Error | null>(null);

  const refreshCallback = useCallback(() => auth.refresh(), [auth]);

  useEffect(() => {
    const unsubscribeSession = auth.subscribe(setAuthUser);
    const unsubscribeError = auth.subscribeToErrors(setAuthError);

    return () => {
      unsubscribeSession();
      unsubscribeError();
    };
  }, [auth]);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (!config.token) {
          await new Promise((resolve) => setTimeout(resolve, 10));
        }
        const session = auth.getActiveSession();
        setAuthUser(session);
      } catch (error) {
        console.error('Error initializing auth:', error);
        setAuthUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    initializeAuth();
  }, [auth, config.token]);

  const login = async (params: LoginParams): Promise<AuthSession> => {
    setAuthLoading(true);
    try {
      return await auth.login(params);
    } finally {
      setAuthLoading(false);
    }
  };

  const register = async (params: RegisterParams): Promise<AuthSession> => {
    setAuthLoading(true);
    try {
      return await auth.register(params);
    } finally {
      setAuthLoading(false);
    }
  };

  const registerCompany = async (params: RegisterCompanyParams): Promise<AuthSession> => {
    setAuthLoading(true);
    try {
      return await auth.registerCompany(params);
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setAuthLoading(true);
    try {
      await auth.logout();
    } finally {
      setAuthLoading(false);
    }
  };

  const deleteChallenge = async (challengeId: string | undefined): Promise<void> => {
    if (!challengeId) return;
    setAuthLoading(true);
    try {
      await auth.deleteChallenge(challengeId);
    } finally {
      setAuthLoading(false);
    }
  };

  const getSessions = (): AuthSession[] => auth.getSessions();

  const getSessionsByCompany = (company: string): AuthSession[] =>
    auth.getSessionsByCompany(company);

  const switchToSession = async (
    userId: string,
    company?: string,
  ): Promise<AuthSession | null> => {
    setAuthLoading(true);
    try {
      return await auth.switchToSession(userId, company);
    } finally {
      setAuthLoading(false);
    }
  };

  const clearAllSessions = async (): Promise<void> => {
    setAuthLoading(true);
    try {
      await auth.clearAllSessions();
    } finally {
      setAuthLoading(false);
    }
  };

  const logoutAll = async (): Promise<void> => {
    setAuthLoading(true);
    try {
      await auth.logoutAll();
    } finally {
      setAuthLoading(false);
    }
  };

  const contextValue: AuthContextType = {
    authUser,
    refreshCallback,
    login,
    register,
    registerCompany,
    logout,
    refresh: refreshCallback,
    authLoading,
    authError,
    deleteChallenge,
    getSessions,
    getSessionsByCompany,
    switchToSession,
    clearAllSessions,
    logoutAll,
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
