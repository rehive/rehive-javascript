export interface StorageAdapter {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
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
  session_duration: number;
  company?: string;
}

export type UserSession = AuthSession;

export interface AuthState {
  sessions: AuthSession[];
  activeSessionIndex: number;
}

export type AuthStatus =
  | 'loading'
  | 'authenticated'
  | 'refreshing'
  | 'recoverable'
  | 'unauthenticated';

export interface AuthRecoveryState {
  pending: boolean;
  expiredSession: AuthSession | null;
  remainingSessions: AuthSession[];
}

export interface AuthSnapshot {
  status: AuthStatus;
  session: AuthSession | null;
  sessions: AuthSession[];
  activeSessionIndex: number;
  isRefreshing: boolean;
  initialized: boolean;
  error: Error | null;
  recovery: AuthRecoveryState;
}

export type AuthEventType =
  | 'initialized'
  | 'login'
  | 'register'
  | 'register-company'
  | 'logout'
  | 'logout-all'
  | 'refresh'
  | 'session-imported'
  | 'session-updated'
  | 'session-switched'
  | 'session-expired'
  | 'session-cleared'
  | 'error';

export interface AuthEvent {
  type: AuthEventType;
  snapshot: AuthSnapshot;
  session?: AuthSession | null;
  error?: Error | null;
}

export type SessionListener = (session: AuthSession | null) => void;
export type ErrorListener = (error: Error | null) => void;
export type AuthStateListener = (snapshot: AuthSnapshot) => void;
export type AuthEventListener = (event: AuthEvent) => void;
