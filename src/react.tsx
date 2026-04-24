export { AuthProvider, useAuth } from './react/auth-provider.js';
export type { AuthContextType, AuthProviderProps } from './react/auth-provider.js';

export type {
  UserSession,
  AuthSession,
  AuthStatus,
  AuthRecoveryState,
  AuthSnapshot,
  AuthEvent,
  SessionListener,
  ErrorListener,
  AuthStateListener,
  AuthEventListener,
} from './auth/types/index.js';

export type {
  LoginParams,
  RegisterParams,
  RegisterCompanyParams,
  ImportTokenOptions,
  ValidateSessionOptions,
  SessionPatch,
} from './auth/create-auth.js';
