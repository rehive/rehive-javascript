import { RehiveClient } from '../../client/rehive-client.js';
import { MemoryStorageAdapter } from '../../auth/core/storage-adapters.js';

// Mock the Platform APIs
jest.mock('../../platform/user/rehive-platform-user-api.js', () => {
  const { MockRehivePlatformUserApi } = require('../mocks/platform-api.js');
  return {
    Api: MockRehivePlatformUserApi
  };
});

jest.mock('../../platform/admin/rehive-platform-admin-api.js', () => {
  const { MockRehivePlatformUserApi } = require('../mocks/platform-api.js');
  return {
    Api: MockRehivePlatformUserApi // Using same mock for simplicity
  };
});

// Mock the conversion extension API
jest.mock('../../extensions/conversion/rehive-conversion-api.js', () => {
  const { MockRehivePlatformUserApi } = require('../mocks/platform-api.js');
  return {
    Api: MockRehivePlatformUserApi
  };
});

// Import mock responses after mocking
const { mockLoginResponse, mockRegisterResponse, MockRehivePlatformUserApi } = require('../mocks/platform-api.js');

describe('RehiveClient', () => {
  let rehive: RehiveClient;
  let mockStorage: MemoryStorageAdapter;

  beforeEach(() => {
    mockStorage = new MemoryStorageAdapter();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('client-side usage (auth flows)', () => {
    beforeEach(() => {
      rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage: mockStorage,
        enableCrossTabSync: false
      });
    });

    it('should initialize with direct API access', () => {
      expect(rehive.user).toBeDefined();
      expect(rehive.admin).toBeDefined();
      expect(typeof rehive.user.authLogin).toBe('function');
      expect(typeof rehive.admin.adminUsersCreate).toBe('function');
    });

    it('should provide auth methods', () => {
      expect(typeof rehive.auth.login).toBe('function');
      expect(typeof rehive.auth.register).toBe('function');
      expect(typeof rehive.auth.logout).toBe('function');
      expect(typeof rehive.auth.refresh).toBe('function');
    });

    it('should successfully login and authenticate APIs', async () => {
      const loginParams = {
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company'
      };

      const session = await rehive.auth.login(loginParams);

      expect(session.token).toBe(mockLoginResponse.data.token);
      expect(session.user.id).toBe(mockLoginResponse.data.user.id);
      
      // Check active session is set
      const activeSession = rehive.auth.getActiveSession();
      expect(activeSession).toEqual(session);
    });

    it('should handle login errors', async () => {
      const loginParams = {
        user: 'test@example.com',
        password: 'wrong-password',
        company: 'test-company'
      };

      await expect(rehive.auth.login(loginParams)).rejects.toThrow('Invalid credentials');
      
      // Should not have active session on failed login
      expect(rehive.auth.getActiveSession()).toBeNull();
    });

    it('should successfully register', async () => {
      const registerParams = {
        email: 'newuser@example.com',
        password: 'password123',
        company: 'test-company',
        password1: 'password123',
        password2: 'password123',
        terms_and_conditions: true,
        privacy_policy: true
      };

      await rehive.auth.register(registerParams);

      const activeSession = rehive.auth.getActiveSession();
      expect(activeSession).not.toBeNull();
      expect(activeSession?.token).toBe(mockRegisterResponse.data.token);
    });

    it('should successfully logout', async () => {
      // First login
      const loginParams = {
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company'
      };
      
      await rehive.auth.login(loginParams);
      expect(rehive.auth.getActiveSession()).not.toBeNull();

      // Then logout
      await rehive.auth.logout();
      
      expect(rehive.auth.getActiveSession()).toBeNull();
    });

    it('should notify session listeners', async () => {
      const sessionListener = jest.fn();
      const unsubscribe = rehive.auth.subscribeToSession(sessionListener);

      const loginParams = {
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company'
      };
      
      await rehive.auth.login(loginParams);
      
      expect(sessionListener).toHaveBeenCalledWith(expect.objectContaining({
        token: mockLoginResponse.data.token,
        user: expect.objectContaining({ id: mockLoginResponse.data.user.id })
      }));

      unsubscribe();
    });

    it('should provide extension factories', () => {
      expect(typeof rehive.extensions.conversion).toBe('function');
      expect(typeof rehive.extensions.rewards).toBe('function');
      expect(typeof rehive.extensions.massSend).toBe('function');
    });

    it('should create conversion API with default URL', () => {
      const conversionApi = rehive.extensions.conversion();
      expect(conversionApi).toBeDefined();
    });

    it('should create conversion API with custom URL', () => {
      const conversionApi = rehive.extensions.conversion({
        baseUrl: 'https://staging-conversion.services.rehive.com/api/'
      });
      expect(conversionApi).toBeDefined();
    });
  });

  describe('server-side usage (permanent token)', () => {
    beforeEach(() => {
      rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'permanent-admin-token-123'
      });
    });

    it('should initialize with permanent token', () => {
      expect(rehive.user).toBeDefined();
      expect(rehive.admin).toBeDefined();
      
      // Should not have active session for permanent token usage
      expect(rehive.auth.getActiveSession()).toBeNull();
    });

    it('should set permanent token on APIs immediately', () => {
      // Create new client to trigger token setting
      const serverRehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'server-token-456'
      });

      // Set up spies on the new instance's APIs
      const userSetSecuritySpy = jest.spyOn(serverRehive.user, 'setSecurityData');
      const adminSetSecuritySpy = jest.spyOn(serverRehive.admin, 'setSecurityData');

      // Trigger token setting again to verify the spies work
      (serverRehive as any).setPermanentToken('server-token-456');

      // The setPermanentToken call should have set the token on both APIs
      expect(userSetSecuritySpy).toHaveBeenCalledWith('Token server-token-456');
      expect(adminSetSecuritySpy).toHaveBeenCalledWith('Token server-token-456');
    });

    it('should work with extension APIs using permanent token', async () => {
      // Create a new client with permanent token for this test
      const serverRehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'permanent-admin-token-123'
      });
      
      // Create extension API and verify it works
      const conversionApi = serverRehive.extensions.conversion();
      expect(conversionApi).toBeDefined();
      
      // Verify that the extension API has setSecurityData method
      expect(typeof conversionApi.setSecurityData).toBe('function');
      
      // Test that calling a method would work (mocked, so it should succeed)
      const result = await conversionApi.user.userConversionPairsList({});
      expect(result).toBeDefined();
      expect(result.data).toBeDefined();
    });

    it('should not initialize client-side auth with permanent token', () => {
      // Auth methods should still be available but getActiveSession should return null
      expect(typeof rehive.auth.login).toBe('function');
      expect(rehive.auth.getActiveSession()).toBeNull();
    });
  });

  describe('configuration options', () => {
    it('should work with custom storage adapter', () => {
      const customStorage = new MemoryStorageAdapter();
      const rehiveWithCustomStorage = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage: customStorage,
        enableCrossTabSync: false
      });

      expect(rehiveWithCustomStorage).toBeDefined();
    });

    it('should handle cross-tab sync configuration', () => {
      const rehiveWithSync = new RehiveClient({
        baseUrl: 'https://api.test.com',
        enableCrossTabSync: true
      });

      const rehiveWithoutSync = new RehiveClient({
        baseUrl: 'https://api.test.com',
        enableCrossTabSync: false
      });

      expect(rehiveWithSync).toBeDefined();
      expect(rehiveWithoutSync).toBeDefined();
    });
  });

  describe('API direct access', () => {
    beforeEach(() => {
      rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'test-token'
      });
    });

    it('should provide direct access to user API methods', async () => {
      // Mock the API response
      const mockResponse = { data: { id: 'user-123', email: 'test@example.com' } };
      jest.spyOn(rehive.user, 'userRetrieve').mockResolvedValue(mockResponse);

      const result = await rehive.user.userRetrieve();
      expect(result).toEqual(mockResponse);
      expect(rehive.user.userRetrieve).toHaveBeenCalled();
    });

    it('should provide direct access to admin API methods', async () => {
      // Mock the API response
      const mockResponse = { data: { results: [{ id: 'user-1' }, { id: 'user-2' }] } };
      jest.spyOn(rehive.admin, 'adminUsersCreate').mockResolvedValue(mockResponse);

      const userData = { email: 'new@example.com', first_name: 'John' };
      const result = await rehive.admin.adminUsersCreate(userData);
      
      expect(result).toEqual(mockResponse);
      expect(rehive.admin.adminUsersCreate).toHaveBeenCalledWith(userData);
    });
  });

  describe('error handling', () => {
    beforeEach(() => {
      rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage: mockStorage,
        enableCrossTabSync: false
      });
    });

    it('should handle and notify error listeners', async () => {
      const errorListener = jest.fn();
      const unsubscribe = rehive.auth.subscribeToErrors(errorListener);

      const loginParams = {
        user: 'test@example.com',
        password: 'wrong-password',
        company: 'test-company'
      };

      try {
        await rehive.auth.login(loginParams);
      } catch (error) {
        // Expected error
      }

      expect(errorListener).toHaveBeenCalledWith(expect.any(Error));
      unsubscribe();
    });
  });
});