// React exports
export { AuthProvider, useAuth } from './react/auth-provider.js';
export type { AuthContextType, AuthProviderProps } from './react/auth-provider.js';

// Main SDK client for React apps
export { RehiveClient } from './client/rehive-client.js';

// Re-export core types that React components might need
export type {
  UserSession,
  TokenManagerConfig,
  LoginParams,
  RegisterParams
} from './types/index.js';