export { createAuth } from './auth/create-auth.js';
export type {
  Auth,
  AuthConfig,
  LoginParams,
  RegisterParams,
  RegisterCompanyParams,
  ImportTokenOptions,
  ValidateSessionOptions,
  SessionPatch,
} from './auth/create-auth.js';

export { createUserApi } from './platform/user/create-api.js';
export { createAdminApi } from './platform/admin/create-api.js';

export { ApiError } from './shared/api-utils.js';
export { createAuthenticatedFetch } from './shared/create-api-client.js';

export { WebStorageAdapter, MemoryStorageAdapter, AsyncStorageAdapter } from './auth/core/storage-adapters.js';

export type {
  UserSession,
  AuthSession,
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
} from './auth/types/index.js';
