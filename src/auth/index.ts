export { createAuth } from './create-auth.js';
export type { Auth, AuthConfig, LoginParams, RegisterParams, RegisterCompanyParams } from './create-auth.js';
export type { AuthSession, UserSession, AuthState, SessionListener, ErrorListener, StorageAdapter } from './types/index.js';
export { WebStorageAdapter, MemoryStorageAdapter, AsyncStorageAdapter } from './core/storage-adapters.js';
