// Main SDK client
export { RehiveClient } from './client/rehive-client.js';
export type { RehiveConfig } from './client/rehive-client.js';

// Platform API exports (for direct usage)
export { RehivePlatformUserApi } from './platform/user/index.js';
export { RehivePlatformAdminApi } from './platform/admin/index.js';

// Usage examples:
// 
// Server-side with permanent token:
//   const rehive = new RehiveClient({ token: 'your-token' })
//   await rehive.admin.adminUsersCreate(data)
//
// Client-side with auth flows:
//   const rehive = new RehiveClient({ baseUrl: 'https://api.rehive.com' })
//   await rehive.auth.login({ user: 'email', password: 'pass' })
//   await rehive.user.userRetrieve()
//
// Extension APIs:
//   const conversion = rehive.extensions.conversion()
//   await conversion.user.userConversionPairsList({})
export { WebStorageAdapter, MemoryStorageAdapter, AsyncStorageAdapter } from './auth/core/storage-adapters.js';

// Shared utilities
export { ApiError } from './shared/api-utils.js';

// Auth types
export type {
  UserSession,
  AuthSession,
  AuthState,
  SessionListener,
  ErrorListener,
  StorageAdapter,
  TokenManagerConfig,
  LoginParams,
  RegisterParams
} from './auth/types/index.js';