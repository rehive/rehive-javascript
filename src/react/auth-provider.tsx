import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { RehiveClient } from '../client/rehive-client.js';
import type { RehiveConfig } from '../client/rehive-client.js';
import type { AuthSession } from '../auth/types/index.js';
import type { LoginParams, RegisterParams, RegisterCompanyParams } from '../auth/create-auth.js';

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
  rehive: RehiveClient;
}

const AuthContext = createContext<AuthContextType | null>(null);

export interface AuthProviderProps {
  children: ReactNode;
  config: RehiveConfig;
}

export const AuthProvider = ({ children, config }: AuthProviderProps) => {
  const [rehive] = useState(() => new RehiveClient(config));
  const [authUser, setAuthUser] = useState<AuthSession | null | undefined>(undefined);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<Error | null>(null);

  const refreshCallback = useCallback(() => rehive.auth.refresh(), [rehive]);

  useEffect(() => {
    const unsubscribeSession = rehive.auth.subscribe(setAuthUser);
    const unsubscribeError = rehive.auth.subscribeToErrors(setAuthError);

    return () => {
      unsubscribeSession();
      unsubscribeError();
    };
  }, [rehive]);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (!config.token) {
          await new Promise((resolve) => setTimeout(resolve, 10));
        }
        const session = rehive.auth.getActiveSession();
        setAuthUser(session);
      } catch (error) {
        console.error('Error initializing auth:', error);
        setAuthUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    initializeAuth();
  }, [rehive, config.token]);

  const login = async (params: LoginParams): Promise<AuthSession> => {
    setAuthLoading(true);
    try {
      return await rehive.auth.login(params);
    } finally {
      setAuthLoading(false);
    }
  };

  const register = async (params: RegisterParams): Promise<AuthSession> => {
    setAuthLoading(true);
    try {
      return await rehive.auth.register(params);
    } finally {
      setAuthLoading(false);
    }
  };

  const registerCompany = async (params: RegisterCompanyParams): Promise<AuthSession> => {
    setAuthLoading(true);
    try {
      return await rehive.auth.registerCompany(params);
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setAuthLoading(true);
    try {
      await rehive.auth.logout();
    } finally {
      setAuthLoading(false);
    }
  };

  const deleteChallenge = async (challengeId: string | undefined): Promise<void> => {
    if (!challengeId) return;
    setAuthLoading(true);
    try {
      await rehive.auth.deleteChallenge(challengeId);
    } finally {
      setAuthLoading(false);
    }
  };

  const getSessions = (): AuthSession[] => rehive.auth.getSessions();

  const getSessionsByCompany = (company: string): AuthSession[] =>
    rehive.auth.getSessionsByCompany(company);

  const switchToSession = async (
    userId: string,
    company?: string,
  ): Promise<AuthSession | null> => {
    setAuthLoading(true);
    try {
      return await rehive.auth.switchToSession(userId, company);
    } finally {
      setAuthLoading(false);
    }
  };

  const clearAllSessions = async (): Promise<void> => {
    setAuthLoading(true);
    try {
      await rehive.auth.clearAllSessions();
    } finally {
      setAuthLoading(false);
    }
  };

  const logoutAll = async (): Promise<void> => {
    setAuthLoading(true);
    try {
      await rehive.auth.logoutAll();
    } finally {
      setAuthLoading(false);
    }
  };

  const auth: AuthContextType = {
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
    rehive,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
