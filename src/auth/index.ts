export { createAuth } from './create-auth.js';
export type {
  Auth,
  AuthConfig,
  LoginParams,
  RegisterParams,
  RegisterCompanyParams,
  ImportTokenOptions,
  ValidateSessionOptions,
  SessionPatch,
} from './create-auth.js';
export type {
  AuthSession,
  UserSession,
  AuthState,
  AuthStatus,
  AuthRecoveryState,
  AuthSnapshot,
  AuthEvent,
  AuthEventType,
  SessionListener,
  ErrorListener,
  AuthStateListener,
  AuthEventListener,
  StorageAdapter,
} from './types/index.js';
export { WebStorageAdapter, MemoryStorageAdapter, AsyncStorageAdapter } from './core/storage-adapters.js';
