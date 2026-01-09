import { WebStorageAdapter, MemoryStorageAdapter } from './storage-adapters.js';
import { ApiError } from '../../shared/api-utils.js';
import { RehivePlatformUserApi } from '../../platform/user/index.js';
import { RehivePlatformAdminApi } from '../../platform/admin/index.js';
import type { Login, Register, Logout, Refresh } from '../../platform/user/rehive-platform-user-api.js';
import type { Api as ConversionApi } from '../../extensions/conversion/rehive-conversion-api.js';
import type {
  UserSession,
  AuthState,
  SessionListener,
  ErrorListener,
  TokenManagerConfig,
  StorageAdapter,
  LoginParams,
  RegisterParams
} from '../types/index.js';

/**
 * TokenManager - Central authentication and API management for Rehive SDKs
 * 
 * This class provides a comprehensive solution for managing authentication and API instances
 * across the entire Rehive ecosystem with significant Developer Experience (DX) improvements:
 * 
 * ## Key Features:
 * 
 * ### 1. Automatic Token Management
 * - Handles login, logout, registration, and token refresh
 * - Automatic token expiration detection and refresh
 * - Cross-tab token synchronization
 * - Persistent session storage
 * 
 * ### 2. Enhanced DX for Platform APIs
 * - Removes the need for `.v3` prefix (api.authLogin vs api.v3.authLogin)
 * - Automatically unwraps `data.data` to just `data` in responses
 * - Consistent API structure across all endpoints
 * 
 * ### 3. Extension API Factory Methods
 * - Convenient factory methods like `createConversionApi()`
 * - Default production URLs with easy environment customization
 * - Automatic response unwrapping for all extension APIs
 * - Same authentication and refresh behavior as platform APIs
 * 
 * ### 4. Unified Token Synchronization
 * - All API instances (platform + extensions) share the same authentication state
 * - When tokens refresh, all registered instances are automatically updated
 * - Seamless authentication across the entire API ecosystem
 * 
 * ## Usage Examples:
 * 
 * ```typescript
 * // Initialize
 * const tokenManager = new TokenManager({ baseUrl: 'https://api.rehive.com' })
 * await tokenManager.initialize()
 * 
 * // Platform APIs - Clean syntax, no .v3 prefix needed
 * const userApi = tokenManager.getPlatformApi()
 * await userApi.authLogin({ user: 'email', password: 'pass' })
 * 
 * const adminApi = tokenManager.getPlatformAdminApi()
 * await adminApi.adminUsersCreate(userData)
 * 
 * // Extension APIs - Factory methods with default URLs
 * const conversionApi = tokenManager.createConversionApi()
 * await conversionApi.user.userConversionPairsList({})
 * 
 * // Custom environment
 * const stagingConversionApi = tokenManager.createConversionApi({
 *   baseUrl: 'https://staging-conversion.services.rehive.com/api/'
 * })
 * ```
 * 
 * All APIs automatically handle token expiration, refresh, and response unwrapping
 * without any additional configuration or boilerplate code.
 */
export class TokenManager {
  private refreshPromise: Promise<void> | null = null;
  private loadAuthStatePromise: Promise<AuthState> | null = null;
  private sessions: UserSession[] = [];
  private activeSessionIndex = -1;
  private sessionListeners: SessionListener[] = [];
  private errorListeners: ErrorListener[] = [];
  private platformApi: RehivePlatformUserApi<unknown>;
  private adminApi: RehivePlatformAdminApi<unknown>;
  private currentError: Error | null = null;
  private storage: StorageAdapter;
  private enableCrossTabSync: boolean;
  private storageKey = 'rehive_auth_state';
  private isRefreshing = false; // Flag to prevent recursive refresh
  private apiInstances: Set<any> = new Set(); // Registry of all API instances


  constructor(config: TokenManagerConfig) {
    /**
     * Initialize the Platform User API with enhanced DX features:
     * 1. Automatic response unwrapping (data.data → data)
     * 2. Flattened method access (no .v3 prefix needed)
     * 3. Automatic token expiration checking and refresh
     */
    this.platformApi = new RehivePlatformUserApi({
      baseUrl: config.baseUrl || '',
      customFetch: fetch,
      securityWorker: async (securityData: any) => {
        if (!securityData) return {};
        
        // Check if token is expired before using it for this request
        const activeSession = this.getActiveSession();
        if (activeSession?.expires && this.isTokenExpired(activeSession.expires)) {
          // Token is expired, refresh it first before proceeding
          if (!this.isRefreshing) {
            await this.refresh();
          }
          // Get the updated session after refresh
          const updatedSession = this.getActiveSession();
          const updatedToken = updatedSession?.token;
          return updatedToken ? { headers: { Authorization: `Token ${updatedToken}` } } : {};
        }
        
        return { headers: { Authorization: securityData as string } };
      }
    });
    
    // Register the platform API instance for automatic token synchronization
    this.apiInstances.add(this.platformApi);
    
    /**
     * Initialize the Platform Admin API with the same enhanced DX features:
     * 1. Automatic response unwrapping (data.data → data)
     * 2. Flattened method access (no .v3 prefix needed)
     * 3. Automatic token expiration checking and refresh
     */
    this.adminApi = new RehivePlatformAdminApi({
      baseUrl: config.baseUrl || '',
      customFetch: fetch,
      securityWorker: async (securityData: any) => {
        if (!securityData) return {};
        
        // Check if token is expired before using it for this request
        const activeSession = this.getActiveSession();
        if (activeSession?.expires && this.isTokenExpired(activeSession.expires)) {
          // Token is expired, refresh it first before proceeding
          if (!this.isRefreshing) {
            await this.refresh();
          }
          // Get the updated session after refresh
          const updatedSession = this.getActiveSession();
          const updatedToken = updatedSession?.token;
          return updatedToken ? { headers: { Authorization: `Token ${updatedToken}` } } : {};
        }
        
        return { headers: { Authorization: securityData as string } };
      }
    });
    
    // Register the admin API instance for automatic token synchronization
    this.apiInstances.add(this.adminApi);
    
    this.storage = config.storage || this.getDefaultStorage();
    this.enableCrossTabSync = config.enableCrossTabSync ?? true;
    
    if (this.enableCrossTabSync) {
      this.setupCrossTabSync();
    }
  }

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

  public async initialize(): Promise<void> {
    await this.loadAuthState();
    
    // Set security data and expires if there's an active session
    const activeSession = this.getActiveSession();
    if (activeSession) {
      this.syncTokensToAllInstances(activeSession.token, activeSession.expires);
    }
    
    this.notifySessionListeners();
  }

  public getActiveSession(): UserSession | null {
    if (this.activeSessionIndex >= 0 && this.activeSessionIndex < this.sessions.length) {
      return this.sessions[this.activeSessionIndex];
    }
    return null;
  }

  /**
   * Get all stored sessions.
   *
   * Returns an array of all sessions currently stored in the TokenManager.
   * This is useful for displaying a list of available sessions/users in the UI.
   *
   * @returns Array of all sessions
   */
  public getSessions(): UserSession[] {
    return [...this.sessions];
  }

  /**
   * Get all sessions for a specific company.
   *
   * Filters sessions by company identifier, useful for displaying sessions
   * grouped by company in multi-company applications.
   *
   * @param company - The company identifier to filter by
   * @returns Array of sessions belonging to the specified company
   */
  public getSessionsByCompany(company: string): UserSession[] {
    return this.sessions.filter(session => session.company === company);
  }

  /**
   * Switch to a different session without requiring login.
   *
   * This method allows users to switch between previously authenticated sessions.
   * It updates the active session, syncs tokens to all API instances, and notifies
   * session listeners. If the session token is expired, it will automatically refresh.
   *
   * @param userId - The user ID of the session to switch to
   * @param company - Optional company identifier to match (required for multi-company setups)
   * @returns The activated session, or null if no matching session was found
   * @throws Error if token refresh fails
   */
  public async switchToSession(userId: string, company?: string): Promise<UserSession | null> {
    const currentAuthState = await this.loadAuthState();

    // Find the session matching both userId and company
    const sessionIndex = currentAuthState.sessions.findIndex(
      (session: UserSession) =>
        session.user.id === userId &&
        session.company === company
    );

    if (sessionIndex === -1) {
      return null;
    }

    const session = currentAuthState.sessions[sessionIndex];

    // Update the active session index
    const newAuthState = {
      ...currentAuthState,
      activeSessionIndex: sessionIndex,
    };

    await this.saveAuthState(newAuthState);

    // Check if token is expired and refresh if needed
    if (session.expires && this.isTokenExpired(session.expires)) {
      await this.refresh();
      // Get the updated session after refresh
      const updatedSession = this.getActiveSession();
      return updatedSession;
    }

    // Sync tokens to all API instances and notify listeners
    this.syncTokensToAllInstances(session.token, session.expires);
    this.notifySessionListeners();

    return session;
  }

  public getCurrentError(): Error | null {
    return this.currentError;
  }

  public getPlatformApi(): RehivePlatformUserApi<unknown> {
    return this.platformApi;
  }

  /**
   * Get the Platform Admin API instance with enhanced DX features.
   * 
   * Returns the admin API with:
   * - No .v3 prefix needed (adminApi.adminUsersCreate vs adminApi.v3.adminUsersCreate)
   * - Automatic response unwrapping (data.data → data)
   * - Automatic token synchronization and refresh
   * 
   * Usage:
   *   const adminApi = tokenManager.getPlatformAdminApi()
   *   await adminApi.adminUsersCreate(userData)
   */
  public getPlatformAdminApi(): RehivePlatformAdminApi<unknown> {
    return this.adminApi;
  }

  /**
   * Register an API instance to receive token updates
   */
  public registerApiInstance(apiInstance: any): void {
    this.apiInstances.add(apiInstance);
    
    // Sync current token to the new instance
    const activeSession = this.getActiveSession();
    if (activeSession && activeSession.token) {
      apiInstance.setSecurityData(`Token ${activeSession.token}`);
      // Only call setExpires if the method exists
      if (activeSession.expires && typeof apiInstance.setExpires === 'function') {
        apiInstance.setExpires(activeSession.expires);
      }
    }
  }

  /**
   * Unregister an API instance from token updates
   */
  public unregisterApiInstance(apiInstance: any): void {
    this.apiInstances.delete(apiInstance);
  }

  /**
   * Sync tokens to all registered API instances
   */
  private syncTokensToAllInstances(token: string | null, expires?: number | null): void {
    for (const apiInstance of this.apiInstances) {
      if (token) {
        apiInstance.setSecurityData(`Token ${token}`);
        // Only call setExpires if the method exists (some generated APIs might not have it)
        if (expires && typeof apiInstance.setExpires === 'function') {
          apiInstance.setExpires(expires);
        }
      } else {
        apiInstance.setSecurityData(null);
        // Only call setExpires if the method exists
        if (typeof apiInstance.setExpires === 'function') {
          apiInstance.setExpires(null);
        }
      }
    }
  }

  /**
   * Create an extension API instance with automatic token synchronization and response unwrapping.
   * 
   * This factory method creates extension API instances that:
   * 1. Automatically check token expiration before each secure request
   * 2. Trigger token refresh if needed
   * 3. Unwrap nested data.data response structures for cleaner DX
   * 4. Stay synchronized when tokens are refreshed by other API instances
   */
  public createExtensionApi<T>(
    ApiClass: new (config?: any) => T, 
    config: { baseUrl: string } = { baseUrl: '' }
  ): T {
    const apiInstance = new ApiClass({
      ...config,
      // Apply the same response unwrapping to extension APIs
      customFetch: fetch,
      securityWorker: async (securityData: string | null) => {
        if (!securityData) return {};
        
        // Check if token is expired before using it
        const activeSession = this.getActiveSession();
        if (activeSession?.expires && this.isTokenExpired(activeSession.expires)) {
          // Token is expired, refresh it first
          if (!this.isRefreshing) {
            await this.refresh();
          }
          // Get the updated session after refresh
          const updatedSession = this.getActiveSession();
          const updatedToken = updatedSession?.token;
          return updatedToken ? { headers: { Authorization: `Token ${updatedToken}` } } : {};
        }
        
        return { headers: { Authorization: securityData } };
      },
      refreshCallback: () => this.isRefreshing ? Promise.resolve() : this.refresh()
    });

    // Register the instance for automatic token synchronization
    this.registerApiInstance(apiInstance);

    return apiInstance;
  }

  /**
   * Check if a token is expired (with 30 second buffer)
   */
  private isTokenExpired(expires: number): boolean {
    return Date.now() >= expires - (30 * 1000);
  }

  /**
   * Create a Conversion extension API instance with optimal DX.
   * 
   * This factory method creates a fully configured Conversion API that:
   * - Uses production URL by default (https://conversion.services.rehive.com/api/)
   * - Automatically handles token synchronization and refresh
   * - Unwraps nested data.data response structures
   * - Provides clean API structure (api.user.method, api.admin.method, etc.)
   * 
   * Usage:
   *   const conversionApi = tokenManager.createConversionApi()
   *   await conversionApi.user.userConversionPairsList({})
   *   await conversionApi.admin.adminConversionPairsList({})
   * 
   * For custom environments:
   *   const stagingApi = tokenManager.createConversionApi({ 
   *     baseUrl: 'https://staging-conversion.services.rehive.com/api/' 
   *   })
   */
  public createConversionApi(config: { baseUrl?: string } = {}): ConversionApi<unknown> {
    // Import the Api class lazily to avoid circular dependencies
    const { Api } = require('../../extensions/conversion/rehive-conversion-api.js');
    return this.createExtensionApi(Api, {
      baseUrl: config.baseUrl || 'https://conversion.services.rehive.com/api/'
    });
  }

  /**
   * Create a Mass Send extension API instance with default production URL
   */
  public createMassSendApi<T>(
    ApiClass: new (config?: any) => T,
    config: { baseUrl?: string } = {}
  ): T {
    return this.createExtensionApi(ApiClass, {
      baseUrl: config.baseUrl || 'https://mass-send.services.rehive.com/api/'
    });
  }

  /**
   * Create a Notifications extension API instance with default production URL
   */
  public createNotificationsApi<T>(
    ApiClass: new (config?: any) => T,
    config: { baseUrl?: string } = {}
  ): T {
    return this.createExtensionApi(ApiClass, {
      baseUrl: config.baseUrl || 'https://notification.services.rehive.com/api/'
    });
  }

  /**
   * Create a Products extension API instance with default production URL
   */
  public createProductsApi<T>(
    ApiClass: new (config?: any) => T,
    config: { baseUrl?: string } = {}
  ): T {
    return this.createExtensionApi(ApiClass, {
      baseUrl: config.baseUrl || 'https://product.services.rehive.com/api/'
    });
  }

  /**
   * Create a Rewards extension API instance with default production URL
   */
  public createRewardsApi<T>(
    ApiClass: new (config?: any) => T,
    config: { baseUrl?: string } = {}
  ): T {
    return this.createExtensionApi(ApiClass, {
      baseUrl: config.baseUrl || 'https://reward.services.rehive.com/api/'
    });
  }

  /**
   * Create a Stellar extension API instance with default production URL
   */
  public createStellarApi<T>(
    ApiClass: new (config?: any) => T,
    config: { baseUrl?: string } = {}
  ): T {
    return this.createExtensionApi(ApiClass, {
      baseUrl: config.baseUrl || 'https://stellar.services.rehive.com/api/'
    });
  }

  /**
   * Create a Stellar Testnet extension API instance with default production URL
   */
  public createStellarTestnetApi<T>(
    ApiClass: new (config?: any) => T,
    config: { baseUrl?: string } = {}
  ): T {
    return this.createExtensionApi(ApiClass, {
      baseUrl: config.baseUrl || 'https://stellar-testnet.services.rehive.com/api/'
    });
  }

  /**
   * Create a Business extension API instance with default production URL
   */
  public createBusinessApi<T>(
    ApiClass: new (config?: any) => T,
    config: { baseUrl?: string } = {}
  ): T {
    return this.createExtensionApi(ApiClass, {
      baseUrl: config.baseUrl || 'https://business.services.rehive.com/api/'
    });
  }

  /**
   * Create a Payment Requests extension API instance with default production URL
   */
  public createPaymentRequestsApi<T>(
    ApiClass: new (config?: any) => T,
    config: { baseUrl?: string } = {}
  ): T {
    return this.createExtensionApi(ApiClass, {
      baseUrl: config.baseUrl || 'https://payment-requests.services.rehive.com/api/'
    });
  }

  /**
   * Create a Bridge extension API instance with default production URL
   */
  public createBridgeApi<T>(
    ApiClass: new (config?: any) => T,
    config: { baseUrl?: string } = {}
  ): T {
    return this.createExtensionApi(ApiClass, {
      baseUrl: config.baseUrl || 'https://bridge.services.rehive.com/api/'
    });
  }

  public async refresh(): Promise<void> {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = (async () => {
      this.isRefreshing = true; // Set flag to prevent recursive refresh
      
      try {
        const currentAuthState = await this.loadAuthState();
        const activeSessionIndex = currentAuthState.activeSessionIndex;
        const activeSession = currentAuthState.sessions[activeSessionIndex];

        if (!activeSession || !activeSession.token || !activeSession.refresh_token) {
          throw new Error('No active session, token, or refresh token found');
        }

        // Set the refresh token for the refresh request (NOT the access token)
        this.platformApi.setSecurityData(`Refresh-Token ${activeSession.refresh_token}`);

        // Call the refresh endpoint using the session_duration from the active session
        const response = await this.platformApi.authRefreshCreate({
          session_duration: activeSession.session_duration ?? 900
        });

        if (!response.data) {
          throw new Error('Refresh response data is missing');
        }

        // Update the session with new tokens and set security data
        const updatedSessions = [...currentAuthState.sessions];
        updatedSessions[activeSessionIndex] = {
          ...activeSession,
          refresh_token: response.data.refresh_token,
          expires: response.data.expires,
          session_duration: activeSession.session_duration ?? 900,
          company: activeSession.company,
        };

        const newAuthState = {
          ...currentAuthState,
          sessions: updatedSessions,
        };

        await this.saveAuthState(newAuthState);
        
        // Restore the normal Token authorization header and update expires for all instances
        this.syncTokensToAllInstances(activeSession.token, response.data.expires);
        
        this.notifyErrorListeners(null);
      } catch (e) {
        const error = e instanceof ApiError ? e : new Error('Refresh failed');
        this.notifyErrorListeners(error);

        // If refresh fails, remove the session
        const currentAuthState = await this.loadAuthState();
        const newAuthState = {
          ...currentAuthState,
          sessions: currentAuthState.sessions.filter((_: UserSession, index: number) => index !== currentAuthState.activeSessionIndex),
          activeSessionIndex: -1,
        };

        await this.saveAuthState(newAuthState);
        
        // Clear security data for all instances (don't restore since session is invalid)
        this.syncTokensToAllInstances(null);
        
        throw e;
      } finally {
        this.isRefreshing = false; // Clear flag
        this.refreshPromise = null;
      }
    })();

    return this.refreshPromise;
  }

  public async login(params: LoginParams): Promise<UserSession> {
    try {
      const sessionDuration = params.session_duration ?? 900; // 15 minutes
      const loginData: Login = {
        user: params.user,
        session_duration: sessionDuration,
        password: params.password,
        company: params.company,
        auth_method: 'token'
      };
      const response = await this.platformApi.authLogin(loginData);

      if (!response.data) {
        throw new Error('Response data is missing');
      }

      const newSession: UserSession = {
        user: response.data.user,
        token: response.data.token,
        refresh_token: response.data.refresh_token,
        challenges: response.data.challenges,
        expires: response.data.expires,
        session_duration: sessionDuration,
        company: params.company,
      };

      const currentAuthState = await this.loadAuthState();
      // Match sessions by both user.id and company to support multi-company logins
      const existingSessionIndex = currentAuthState.sessions.findIndex(
        (session: UserSession) =>
          session.user.id === newSession.user.id &&
          session.company === newSession.company
      );

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
      
      // Set security data and expires on the HTTP client for automatic refresh
      this.syncTokensToAllInstances(newSession.token, newSession.expires);
      
      this.notifyErrorListeners(null);
      return newSession;
    } catch (e) {
      const error = e instanceof ApiError ? e : new Error('Login failed');
      this.notifyErrorListeners(error);
      throw e;
    }
  }

  public async register(params: RegisterParams): Promise<void> {
    try {
      const sessionDuration = params.session_duration ?? 900; // 15 minutes
      const registerData = {
        email: params.email,
        session_duration: sessionDuration,
        password: params.password,
        company: params.company,
        password1: params.password,
        password2: params.password,
        terms_and_conditions: params.terms_and_conditions,
        privacy_policy: params.privacy_policy
      };
      const response = await this.platformApi.authRegister(registerData as Register);

      if (!response.data) {
        throw new Error('Response data is missing');
      }

      const newSession: UserSession = {
        user: response.data.user,
        token: response.data.token,
        refresh_token: response.data.refresh_token,
        challenges: response.data.challenges,
        expires: response.data.expires,
        session_duration: sessionDuration,
        company: params.company,
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

  public async logout(): Promise<void> {
    const currentAuthState = await this.loadAuthState();
    const newAuthState = {
      ...currentAuthState,
      sessions: currentAuthState.sessions.filter((_: UserSession, index: number) => index !== currentAuthState.activeSessionIndex),
      activeSessionIndex: -1,
    };

    try {
      // Try to call the logout endpoint, but don't fail if it doesn't work (e.g., expired token)
      await this.platformApi.authLogout({ clear_session_option: 'none' });
    } catch (e) {
      // Log the error but continue with local logout
      console.warn('Logout API call failed, continuing with local logout:', e);
    }

    // Always clear the local session and HTTP client state
    await this.saveAuthState(newAuthState);
    this.syncTokensToAllInstances(null);
    this.notifyErrorListeners(null);
  }

  public async deleteChallenge(challengeId: string | undefined): Promise<void> {
    try {
      const currentAuthState = await this.loadAuthState();
      const updatedSessions = [...currentAuthState.sessions];
      const activeSessionIndex = currentAuthState.activeSessionIndex;
      const activeSession = updatedSessions[activeSessionIndex];

      if (!activeSession) {
        throw new Error('No active session found');
      }

      activeSession.challenges = activeSession.challenges.filter((challenge: any) => challenge.id !== challengeId);

      const newAuthState = {
        ...currentAuthState,
        sessions: updatedSessions,
      };

      await this.saveAuthState(newAuthState);
      this.notifyErrorListeners(null);
    } catch (e) {
      const error = e instanceof Error ? e : new Error('Failed to delete challenge');
      this.notifyErrorListeners(error);
    }
  }

  /**
   * Clear all sessions locally without calling logout API
   *
   * This method removes all sessions from local storage without making
   * API calls to invalidate tokens on the server. Useful for quick local
   * cleanup or "sign out everywhere" functionality.
   */
  public async clearAllSessions(): Promise<void> {
    const newAuthState: AuthState = {
      sessions: [],
      activeSessionIndex: -1,
    };

    await this.saveAuthState(newAuthState);
    this.syncTokensToAllInstances(null);
    this.notifyErrorListeners(null);
  }

  /**
   * Logout all sessions by calling logout API for each session
   *
   * This method iterates through all sessions and calls the logout endpoint
   * for each one to properly invalidate tokens on the server. This is more
   * thorough than clearAllSessions but takes longer.
   *
   * @returns Promise that resolves when all logout calls complete
   */
  public async logoutAll(): Promise<void> {
    const currentAuthState = await this.loadAuthState();
    const sessions = currentAuthState.sessions;

    // Call logout for each session
    const logoutPromises = sessions.map(async (session) => {
      try {
        // Temporarily set this session's token for the logout call
        this.platformApi.setSecurityData(`Token ${session.token}`);
        await this.platformApi.authLogout({ clear_session_option: 'none' });
      } catch (e) {
        // Log error but continue with other logouts
        console.warn('Logout API call failed for session:', session.user.id, e);
      }
    });

    // Wait for all logout calls to complete
    await Promise.all(logoutPromises);

    // Clear all sessions locally
    const newAuthState: AuthState = {
      sessions: [],
      activeSessionIndex: -1,
    };

    await this.saveAuthState(newAuthState);
    this.syncTokensToAllInstances(null);
    this.notifyErrorListeners(null);
  }

  public subscribeToSession(listener: SessionListener): () => void {
    this.sessionListeners.push(listener);
    return () => {
      this.sessionListeners = this.sessionListeners.filter(l => l !== listener);
    };
  }

  public subscribeToErrors(listener: ErrorListener): () => void {
    this.errorListeners.push(listener);
    return () => {
      this.errorListeners = this.errorListeners.filter(l => l !== listener);
    };
  }
}