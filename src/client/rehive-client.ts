import { WebStorageAdapter, MemoryStorageAdapter } from '../auth/core/storage-adapters.js';
import { ApiError } from '../shared/api-utils.js';
import { RehivePlatformUserApi } from '../platform/user/index.js';
import { RehivePlatformAdminApi } from '../platform/admin/index.js';
import type { Login, Register, Logout, Refresh } from '../platform/user/rehive-platform-user-api.js';
import type { Api as ConversionApi } from '../extensions/conversion/rehive-conversion-api.js';
import type { Api as MassSendApi } from '../extensions/mass-send/rehive-mass-send-api.js';
import type { Api as NotificationsApi } from '../extensions/notifications/rehive-notifications-api.js';
import type { Api as ProductsApi } from '../extensions/products/rehive-products-api.js';
import type { Api as RewardsApi } from '../extensions/rewards/rehive-rewards-api.js';
import type { Api as StellarApi } from '../extensions/stellar/rehive-stellar-api.js';
import type { Api as StellarTestnetApi } from '../extensions/stellar-testnet/rehive-stellar-testnet-api.js';
import type { Api as BusinessApi } from '../extensions/business/rehive-business-api.js';
import type { Api as PaymentRequestsApi } from '../extensions/payment-requests/rehive-payment-requests-api.js';
import type { Api as BridgeApi } from '../extensions/bridge/rehive-bridge-api.js';
import type { Api as AppApi } from '../extensions/app/rehive-app-api.js';
import type {
  UserSession,
  AuthState,
  SessionListener,
  ErrorListener,
  StorageAdapter,
  LoginParams,
  RegisterParams
} from '../auth/types/index.js';

export interface RehiveConfig {
  baseUrl?: string;
  token?: string; // For permanent token (server-side) usage
  storage?: StorageAdapter;
  enableCrossTabSync?: boolean;
}

/**
 * Rehive SDK Client - Modern, unified API client for the Rehive ecosystem.
 * 
 * This is the main entry point for interacting with Rehive platform and extension APIs.
 * Supports both client-side authentication flows and server-side permanent token usage.
 * 
 * ## Key Features:
 * 
 * ### 1. Dual Authentication Modes
 * - Client-side: Login/logout flows with automatic token refresh
 * - Server-side: Permanent token initialization for backend services
 * 
 * ### 2. Direct API Access
 * - Clean property-based access: `rehive.user.authLogin()`
 * - No getter methods or complex initialization required
 * - Full TypeScript intellisense support
 * 
 * ### 3. Enhanced Developer Experience
 * - Automatic response unwrapping (data.data → data)
 * - No .v3 prefix needed for platform APIs
 * - Unified token management across all APIs
 * 
 * ### 4. Extension API Integration
 * - Factory methods with production defaults for all official extensions
 * - Authenticated fetch method for custom endpoints
 * - Automatic token synchronization across all APIs
 * - Same DX improvements as platform APIs
 * 
 * ## Usage Examples:
 * 
 * ### Server-side with permanent token:
 * ```typescript
 * const rehive = new RehiveClient({ 
 *   baseUrl: 'https://api.rehive.com',
 *   token: 'your-admin-token'
 * });
 * 
 * // Direct API access - no initialization needed
 * await rehive.admin.adminUsersCreate(userData);
 * await rehive.user.userRetrieve();
 * ```
 * 
 * ### Client-side with authentication flows:
 * ```typescript
 * const rehive = new RehiveClient({ 
 *   baseUrl: 'https://api.rehive.com' 
 * });
 * 
 * // Login flow
 * await rehive.auth.login({ user: 'email', password: 'pass' });
 * await rehive.user.userRetrieve(); // Automatically authenticated
 * 
 * // Extension APIs
 * const conversion = rehive.extensions.conversion();
 * await conversion.user.userConversionPairsList({});
 * 
 * // Custom endpoints with authenticated fetch
 * const response = await rehive.extensions.fetch('https://my-custom.services.rehive.com/api/users');
 * const users = await response.json();
 * ```
 * 
 * All APIs automatically handle token expiration, refresh, and response unwrapping.
 */
export class RehiveClient {
  private refreshPromise: Promise<void> | null = null;
  private loadAuthStatePromise: Promise<AuthState> | null = null;
  private sessions: UserSession[] = [];
  private activeSessionIndex = -1;
  private sessionListeners: SessionListener[] = [];
  private errorListeners: ErrorListener[] = [];
  private currentError: Error | null = null;
  private storage: StorageAdapter;
  private enableCrossTabSync: boolean;
  private storageKey = 'rehive_auth_state';
  private isRefreshing = false;
  private apiInstances: Set<any> = new Set();
  private config: RehiveConfig;

  // Direct API access properties
  public readonly user: RehivePlatformUserApi<unknown>;
  public readonly admin: RehivePlatformAdminApi<unknown>;

  constructor(config: RehiveConfig = {}) {
    this.config = config;
    this.storage = config.storage || this.getDefaultStorage();
    this.enableCrossTabSync = config.enableCrossTabSync ?? true;

    // Initialize platform APIs with enhanced DX
    this.user = new RehivePlatformUserApi({
      baseUrl: config.baseUrl || '',
      securityWorker: this.createSecurityWorker()
    });

    this.admin = new RehivePlatformAdminApi({
      baseUrl: config.baseUrl || '',
      securityWorker: this.createSecurityWorker()
    });

    // Register API instances for token synchronization
    this.apiInstances.add(this.user);
    this.apiInstances.add(this.admin);

    // Handle permanent token initialization (server-side usage)
    if (config.token) {
      this.setPermanentToken(config.token);
    } else {
      // Initialize client-side auth if no permanent token (async)
      this.initializeClientAuth().catch(console.error);
    }
  }

  /**
   * Authentication methods for client-side usage
   */
  public readonly auth = {
    login: (params: LoginParams) => this.login(params),
    register: (params: RegisterParams) => this.register(params),
    logout: () => this.logout(),
    refresh: () => this.refresh(),
    getActiveSession: () => this.getActiveSession(),
    subscribeToSession: (listener: SessionListener) => this.subscribeToSession(listener),
    subscribeToErrors: (listener: ErrorListener) => this.subscribeToErrors(listener),
    deleteChallenge: (challengeId: string) => this.deleteChallenge(challengeId)
  };

  /**
   * Extension API factories
   */
  public readonly extensions = {
    conversion: (config: { baseUrl?: string } = {}) => this.createConversionApi(config),
    massSend: (config: { baseUrl?: string } = {}) => this.createMassSendApi(config),
    notifications: (config: { baseUrl?: string } = {}) => this.createNotificationsApi(config),
    products: (config: { baseUrl?: string } = {}) => this.createProductsApi(config),
    rewards: (config: { baseUrl?: string } = {}) => this.createRewardsApi(config),
    stellar: (config: { baseUrl?: string } = {}) => this.createStellarApi(config),
    stellarTestnet: (config: { baseUrl?: string } = {}) => this.createStellarTestnetApi(config),
    business: (config: { baseUrl?: string } = {}) => this.createBusinessApi(config),
    paymentRequests: (config: { baseUrl?: string } = {}) => this.createPaymentRequestsApi(config),
    bridge: (config: { baseUrl?: string } = {}) => this.createBridgeApi(config),
    app: (config: { baseUrl?: string } = {}) => this.createAppApi(config),
    
    /**
     * Make authenticated HTTP requests to custom endpoints.
     * 
     * This method works like fetch() but automatically handles authentication:
     * - Attaches the current user's token to requests
     * - Refreshes expired tokens automatically
     * - Works with any HTTP endpoint
     * 
     * @example
     * ```typescript
     * // GET request to custom extension
     * const response = await rehive.extensions.fetch('https://my-custom.services.rehive.com/api/users');
     * const users = await response.json();
     * 
     * // POST request with data
     * const response = await rehive.extensions.fetch('https://my-custom.services.rehive.com/api/orders', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({ product_id: 123, quantity: 2 })
     * });
     * ```
     * 
     * @param url - The URL to fetch from
     * @param options - Standard fetch options (method, headers, body, etc.)
     * @returns Promise resolving to the Response object
     */
    fetch: (url: string, options?: RequestInit) => this.authenticatedFetch(url, options)
  };

  /**
   * Initialize permanent token for server-side usage
   */
  private setPermanentToken(token: string): void {
    // Set token on all API instances immediately
    this.syncTokensToAllInstances(token, null);
  }

  /**
   * Initialize client-side authentication system
   */
  private async initializeClientAuth(): Promise<void> {
    if (this.enableCrossTabSync) {
      this.setupCrossTabSync();
    }

    await this.loadAuthState();
    
    // Set security data if there's an active session
    const activeSession = this.getActiveSession();
    if (activeSession) {
      this.syncTokensToAllInstances(activeSession.token, activeSession.expires);
    }
    
    this.notifySessionListeners();
  }


  /**
   * Creates security worker for automatic token management
   */
  private createSecurityWorker() {
    return async (securityData: any) => {
      // For permanent tokens, use them directly
      if (this.config.token) {
        return { headers: { Authorization: `Token ${this.config.token}` } };
      }
      
      // If we're already refreshing, don't interfere - just pass through the securityData
      // This allows refresh tokens to be set correctly
      if (this.isRefreshing && securityData) {
        return { headers: { Authorization: securityData as string } };
      }
      
      // For client-side auth, check expiration and refresh if needed
      const activeSession = this.getActiveSession();
      if (activeSession) {
        if (activeSession.expires && this.isTokenExpired(activeSession.expires)) {
          await this.refresh();
          const updatedSession = this.getActiveSession();
          const updatedToken = updatedSession?.token;
          return updatedToken ? { headers: { Authorization: `Token ${updatedToken}` } } : {};
        }
        
        // Use securityData if available, otherwise use activeSession token
        const token = securityData || `Token ${activeSession.token}`;
        return { headers: { Authorization: token } };
      }
      
      // No active session and no security data
      return {};
    };
  }

  // ... (include all the existing TokenManager methods here)
  // I'll continue with the key methods in the next part

  private getDefaultStorage(): StorageAdapter {
    if (typeof window !== 'undefined') {
      return new WebStorageAdapter();
    }
    return new MemoryStorageAdapter();
  }

  private setupCrossTabSync(): void {
    if (typeof window !== 'undefined') {
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === this.storageKey && event.newValue) {
          try {
            const newAuthState = JSON.parse(event.newValue);
            this.sessions = Array.isArray(newAuthState.sessions) ? newAuthState.sessions : [];
            this.activeSessionIndex = typeof newAuthState.activeSessionIndex === 'number' ? newAuthState.activeSessionIndex : -1;
            this.notifySessionListeners();
          } catch (error) {
            console.error('Failed to sync auth state from storage event:', error);
          }
        }
      };

      window.addEventListener('storage', handleStorageChange);
    }
  }

  private async loadAuthState(): Promise<AuthState> {
    if (this.loadAuthStatePromise) {
      return this.loadAuthStatePromise;
    }

    this.loadAuthStatePromise = (async () => {
      let newAuthState: AuthState = {
        sessions: [],
        activeSessionIndex: -1
      };

      try {
        const savedAuthState = await this.storage.getItem(this.storageKey);
        if (savedAuthState) {
          const parsedState = JSON.parse(savedAuthState);
          newAuthState.sessions = Array.isArray(parsedState.sessions) ? parsedState.sessions : [];
          newAuthState.activeSessionIndex = typeof parsedState.activeSessionIndex === 'number' ? parsedState.activeSessionIndex : -1;
        }
      } catch (error) {
        console.error('Failed to load auth state:', error);
      }

      this.sessions = newAuthState.sessions;
      this.activeSessionIndex = newAuthState.activeSessionIndex;
      return newAuthState;
    })();

    try {
      return await this.loadAuthStatePromise;
    } finally {
      this.loadAuthStatePromise = null;
    }
  }

  private async saveAuthState(newAuthState: AuthState): Promise<void> {
    try {
      await this.storage.setItem(this.storageKey, JSON.stringify(newAuthState));
      this.sessions = newAuthState.sessions;
      this.activeSessionIndex = newAuthState.activeSessionIndex;
      this.notifySessionListeners();
    } catch (error) {
      console.error('Failed to save auth state:', error);
    }
  }

  private notifySessionListeners(): void {
    const activeSession = this.getActiveSession();
    this.syncTokensToAllInstances(activeSession?.token || null, activeSession?.expires);
    this.sessionListeners.forEach(listener => listener(activeSession));
  }

  private notifyErrorListeners(error: Error | null): void {
    this.currentError = error;
    this.errorListeners.forEach(listener => listener(error));
  }

  private syncTokensToAllInstances(token: string | null, expires?: number | null): void {
    for (const apiInstance of this.apiInstances) {
      if (token) {
        apiInstance.setSecurityData(`Token ${token}`);
        if (expires && typeof apiInstance.setExpires === 'function') {
          apiInstance.setExpires(expires);
        }
      } else {
        apiInstance.setSecurityData(null);
        if (typeof apiInstance.setExpires === 'function') {
          apiInstance.setExpires(null);
        }
      }
    }
  }

  private isTokenExpired(expires: number): boolean {
    return Date.now() >= expires - (30 * 1000);
  }

  public getActiveSession(): UserSession | null {
    if (this.activeSessionIndex >= 0 && this.activeSessionIndex < this.sessions.length) {
      return this.sessions[this.activeSessionIndex];
    }
    return null;
  }

  public getCurrentError(): Error | null {
    return this.currentError;
  }

  // Extension API factory methods
  private createExtensionApi<T>(
    ApiClass: new (config?: any) => T, 
    config: { baseUrl: string } = { baseUrl: '' }
  ): T {
    const apiInstance = new ApiClass({
      ...config,
      securityWorker: this.createSecurityWorker(),
      refreshCallback: () => this.isRefreshing ? Promise.resolve() : this.refresh()
    });

    this.apiInstances.add(apiInstance);
    
    // Immediately sync current session token to this new API instance
    const activeSession = this.getActiveSession();
    if (activeSession) {
      if (typeof (apiInstance as any).setSecurityData === 'function') {
        (apiInstance as any).setSecurityData(`Token ${activeSession.token}`);
      }
      if (activeSession.expires && typeof (apiInstance as any).setExpires === 'function') {
        (apiInstance as any).setExpires(activeSession.expires);
      }
    }
    
    return apiInstance;
  }

  private createConversionApi(config: { baseUrl?: string } = {}): ConversionApi<unknown> {
    const { Api } = require('../extensions/conversion/rehive-conversion-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://conversion.services.rehive.com/api/'
    });
  }

  private createMassSendApi(config: { baseUrl?: string } = {}): MassSendApi<unknown> {
    const { Api } = require('../extensions/mass-send/rehive-mass-send-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://mass-send.services.rehive.com/api/'
    });
  }

  private createNotificationsApi(config: { baseUrl?: string } = {}): NotificationsApi<unknown> {
    const { Api } = require('../extensions/notifications/rehive-notifications-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://notification.services.rehive.com/api/'
    });
  }

  private createProductsApi(config: { baseUrl?: string } = {}): ProductsApi<unknown> {
    const { Api } = require('../extensions/products/rehive-products-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://product.services.rehive.com/api/'
    });
  }

  private createRewardsApi(config: { baseUrl?: string } = {}): RewardsApi<unknown> {
    const { Api } = require('../extensions/rewards/rehive-rewards-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://reward.services.rehive.com/api/'
    });
  }

  private createStellarApi(config: { baseUrl?: string } = {}): StellarApi<unknown> {
    const { Api } = require('../extensions/stellar/rehive-stellar-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://stellar.services.rehive.com/api/'
    });
  }

  private createStellarTestnetApi(config: { baseUrl?: string } = {}): StellarTestnetApi<unknown> {
    const { Api } = require('../extensions/stellar-testnet/rehive-stellar-testnet-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://stellar-testnet.services.rehive.com/api/'
    });
  }

  private createBusinessApi(config: { baseUrl?: string } = {}): BusinessApi<unknown> {
    const { Api } = require('../extensions/business/rehive-business-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://business.services.rehive.com/api/'
    });
  }

  private createPaymentRequestsApi(config: { baseUrl?: string } = {}): PaymentRequestsApi<unknown> {
    const { Api } = require('../extensions/payment-requests/rehive-payment-requests-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://payment-requests.services.rehive.com/api/'
    });
  }

  private createBridgeApi(config: { baseUrl?: string } = {}): BridgeApi<unknown> {
    const { Api } = require('../extensions/bridge/rehive-bridge-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://bridge.services.rehive.com/api/'
    });
  }

  private createAppApi(config: { baseUrl?: string } = {}): AppApi<unknown> {
    const { Api } = require('../extensions/app/rehive-app-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://app.services.rehive.com/api/'
    });
  }

  /**
   * Make an authenticated HTTP request using fetch with automatic token management.
   * 
   * This method automatically:
   * - Checks if the current token is expired and refreshes it if needed
   * - Attaches the Authorization header with the current token
   * - Handles both permanent tokens (server-side) and session tokens (client-side)
   * 
   * @param url - The URL to fetch from
   * @param options - Standard fetch options (method, headers, body, etc.)
   * @returns Promise resolving to the Response object
   */
  private async authenticatedFetch(url: string, options: RequestInit = {}): Promise<Response> {
    // Get the security headers using our existing security worker
    const securityWorker = this.createSecurityWorker();
    const securityData = await securityWorker(null);
    
    // Merge the authorization header with any existing headers
    const headers = new Headers(options.headers);
    if (securityData?.headers?.Authorization) {
      headers.set('Authorization', securityData.headers.Authorization);
    }
    
    // Make the fetch request with the updated headers
    return fetch(url, {
      ...options,
      headers
    });
  }

  // Auth methods
  private async login(params: LoginParams): Promise<UserSession> {
    try {
      const loginData: Login = { 
        user: params.user, 
        session_duration: 60, 
        password: params.password, 
        company: params.company,
        auth_method: 'token'
      };
      const response = await this.user.authLogin(loginData);

      if (!response.data) {
        throw new Error('Response data is missing');
      }

      // With our custom templates, response.data contains the login data directly
      const loginResponseData = response.data;
      
      const newSession: UserSession = {
        user: loginResponseData.user,
        token: loginResponseData.token,
        refresh_token: loginResponseData.refresh_token,
        challenges: loginResponseData.challenges,
        expires: loginResponseData.expires,
      };

      const currentAuthState = await this.loadAuthState();
      const existingSessionIndex = currentAuthState.sessions.findIndex((session: UserSession) => session.user.id === newSession.user.id);

      let newAuthState: AuthState;
      if (existingSessionIndex !== -1) {
        const updatedSessions = [...currentAuthState.sessions];
        updatedSessions[existingSessionIndex] = newSession;
        newAuthState = {
          ...currentAuthState,
          sessions: updatedSessions,
          activeSessionIndex: existingSessionIndex,
        };
      } else {
        newAuthState = {
          sessions: [...currentAuthState.sessions, newSession],
          activeSessionIndex: currentAuthState.sessions.length,
        };
      }

      await this.saveAuthState(newAuthState);
      this.syncTokensToAllInstances(newSession.token, newSession.expires);
      this.notifyErrorListeners(null);
      return newSession;
    } catch (e) {
      const error = e instanceof ApiError ? e : new Error('Login failed');
      this.notifyErrorListeners(error);
      throw e;
    }
  }

  private async register(params: RegisterParams): Promise<void> {
    try {
      const registerData = { 
        email: params.email, 
        session_duration: 600, 
        password: params.password, 
        company: params.company, 
        password1: params.password, 
        password2: params.password, 
        terms_and_conditions: params.terms_and_conditions, 
        privacy_policy: params.privacy_policy
      };
      const response = await this.user.authRegister(registerData as Register);

      if (!response.data) {
        throw new Error('Response data is missing');
      }

      // With our custom templates, response.data contains the register data directly
      const registerResponseData = response.data;
      
      const newSession: UserSession = {
        user: registerResponseData.user,
        token: registerResponseData.token,
        refresh_token: registerResponseData.refresh_token,
        challenges: registerResponseData.challenges,
        expires: registerResponseData.expires,
      };

      const currentAuthState = await this.loadAuthState();
      const newAuthState = {
        sessions: [...currentAuthState.sessions, newSession],
        activeSessionIndex: currentAuthState.sessions.length,
      };

      await this.saveAuthState(newAuthState);
      this.notifyErrorListeners(null);
    } catch (e) {
      const error = e instanceof ApiError ? e : new Error('Registration failed');
      this.notifyErrorListeners(error);
      throw e;
    }
  }

  private async logout(): Promise<void> {
    const currentAuthState = await this.loadAuthState();
    const newAuthState = {
      ...currentAuthState,
      sessions: currentAuthState.sessions.filter((_: UserSession, index: number) => index !== currentAuthState.activeSessionIndex),
      activeSessionIndex: -1,
    };

    try {
      await this.user.authLogout({ clear_session_option: 'none' });
    } catch (e) {
      console.warn('Logout API call failed, continuing with local logout:', e);
    }

    await this.saveAuthState(newAuthState);
    this.syncTokensToAllInstances(null);
    this.notifyErrorListeners(null);
  }

  private async refresh(): Promise<void> {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = (async () => {
      this.isRefreshing = true;
      
      try {
        const currentAuthState = await this.loadAuthState();
        const activeSessionIndex = currentAuthState.activeSessionIndex;
        const activeSession = currentAuthState.sessions[activeSessionIndex];

        if (!activeSession || !activeSession.token || !activeSession.refresh_token) {
          throw new Error('No active session, token, or refresh token found');
        }

        this.user.setSecurityData(`Refresh-Token ${activeSession.refresh_token}`);

        const response = await this.user.authRefreshCreate({
          session_duration: 60
        });

        if (!response.data) {
          throw new Error('Refresh response data is missing');
        }

        // With our custom templates, response.data contains the refresh data directly
        const refreshResponseData = response.data;
        
        const updatedSessions = [...currentAuthState.sessions];
        updatedSessions[activeSessionIndex] = {
          ...activeSession,
          refresh_token: refreshResponseData.refresh_token,
          expires: refreshResponseData.expires,
        };

        const newAuthState = {
          ...currentAuthState,
          sessions: updatedSessions,
        };

        await this.saveAuthState(newAuthState);
        this.syncTokensToAllInstances(activeSession.token, refreshResponseData.expires);
        this.notifyErrorListeners(null);
      } catch (e) {
        const error = e instanceof ApiError ? e : new Error('Refresh failed');
        this.notifyErrorListeners(error);

        const currentAuthState = await this.loadAuthState();
        const newAuthState = {
          ...currentAuthState,
          sessions: currentAuthState.sessions.filter((_: UserSession, index: number) => index !== currentAuthState.activeSessionIndex),
          activeSessionIndex: -1,
        };

        await this.saveAuthState(newAuthState);
        this.syncTokensToAllInstances(null);
        throw e;
      } finally {
        this.isRefreshing = false;
        this.refreshPromise = null;
      }
    })();

    return this.refreshPromise;
  }

  private subscribeToSession(listener: SessionListener): () => void {
    this.sessionListeners.push(listener);
    return () => {
      this.sessionListeners = this.sessionListeners.filter(l => l !== listener);
    };
  }

  private subscribeToErrors(listener: ErrorListener): () => void {
    this.errorListeners.push(listener);
    return () => {
      this.errorListeners = this.errorListeners.filter(l => l !== listener);
    };
  }

  private async deleteChallenge(challengeId: string): Promise<void> {
    const currentAuthState = await this.loadAuthState();
    const activeSessionIndex = currentAuthState.activeSessionIndex;
    
    if (activeSessionIndex >= 0 && activeSessionIndex < currentAuthState.sessions.length) {
      const activeSession = currentAuthState.sessions[activeSessionIndex];
      
      // Remove the challenge from the active session
      const updatedSession = {
        ...activeSession,
        challenges: activeSession.challenges?.filter(challenge => challenge.id !== challengeId) || []
      };
      
      // Update the session in the auth state
      const updatedSessions = [...currentAuthState.sessions];
      updatedSessions[activeSessionIndex] = updatedSession;
      
      const newAuthState = {
        ...currentAuthState,
        sessions: updatedSessions
      };
      
      await this.saveAuthState(newAuthState);
    }
  }
}