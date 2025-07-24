import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { RehiveClient } from '../client/rehive-client.js';
import type { RehiveConfig } from '../client/rehive-client.js';
import type { AuthSession, LoginParams, RegisterParams } from '../auth/types/index.js';

interface AuthContextType {
  authUser: AuthSession | null | undefined;
  refreshCallback: () => Promise<void>;
  login: (params: LoginParams) => Promise<AuthSession>;
  register: (params: RegisterParams) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
  authLoading: boolean;
  authError: Error | null | undefined;
  deleteChallenge: (challengeId: string | undefined) => Promise<void>;
  rehive: RehiveClient;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
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
    const unsubscribeSession = rehive.auth.subscribeToSession(setAuthUser);
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
          // Give client-side auth a moment to initialize
          await new Promise(resolve => setTimeout(resolve, 10));
        }
        // Check if we have an active session
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
      const result = await rehive.auth.login(params);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setAuthLoading(false);
    }
  };

  const register = async (params: RegisterParams): Promise<void> => {
    setAuthLoading(true);
    try {
      await rehive.auth.register(params);
    } catch (error) {
      throw error;
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setAuthLoading(true);
    try {
      await rehive.auth.logout();
    } catch (error) {
      throw error;
    } finally {
      setAuthLoading(false);
    }
  };

  const deleteChallenge = async (challengeId: string | undefined): Promise<void> => {
    if (!challengeId) return;
    
    setAuthLoading(true);
    try {
      await rehive.auth.deleteChallenge(challengeId);
    } catch (error) {
      throw error;
    } finally {
      setAuthLoading(false);
    }
  };

  const auth: AuthContextType = {
    authUser,
    refreshCallback,
    login,
    register,
    logout,
    refresh: refreshCallback,
    authLoading,
    authError,
    deleteChallenge,
    rehive,
  };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export type { AuthContextType, AuthProviderProps };