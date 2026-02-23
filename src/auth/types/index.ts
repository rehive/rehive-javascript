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

export type SessionListener = (session: AuthSession | null) => void;
export type ErrorListener = (error: Error | null) => void;
