export { createAuth } from './auth/create-auth.js';
export type { Auth, AuthConfig, LoginParams, RegisterParams, RegisterCompanyParams } from './auth/create-auth.js';

export { createUserApi } from './platform/user/create-api.js';
export { createAdminApi } from './platform/admin/create-api.js';

export { ApiError } from './shared/api-utils.js';
export { createAuthenticatedFetch } from './shared/create-api-client.js';

export { WebStorageAdapter, MemoryStorageAdapter, AsyncStorageAdapter } from './auth/core/storage-adapters.js';

export type {
  UserSession,
  AuthSession,
  AuthState,
  SessionListener,
  ErrorListener,
  StorageAdapter,
} from './auth/types/index.js';
