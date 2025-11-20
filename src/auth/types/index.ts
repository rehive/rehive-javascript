// Auth types for Rehive SDK

export interface StorageAdapter {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

export interface TokenManagerConfig {
  baseUrl: string;
  storage: StorageAdapter;
  enableCrossTabSync?: boolean;
}

export interface AuthSession {
  user: {
    id: string;
    [key: string]: any;
  };
  token: string;
  refresh_token: string;
  challenges: any[];
  expires: number;
  company?: string;
}

// Alias for backward compatibility
export type UserSession = AuthSession;

export interface AuthState {
  sessions: AuthSession[];
  activeSessionIndex: number;
}

export type SessionListener = (session: AuthSession | null) => void;
export type ErrorListener = (error: Error | null) => void;

// Re-export platform types for convenience
export type { Login as LoginParams, Register as RegisterParams } from '../../platform/user/rehive-platform-user-api.js';