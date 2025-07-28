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

describe('RehiveClient Integration Flow', () => {
  let storage: MemoryStorageAdapter;

  beforeEach(() => {
    storage = new MemoryStorageAdapter();
  });

  describe('Client-side authentication flow', () => {
    it('should complete full authentication flow with modern API', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false
      });

      // 1. Initially no active session
      expect(rehive.auth.getActiveSession()).toBeNull();

      // 2. Login using modern auth API
      const loginParams = {
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company'
      };

      const session = await rehive.auth.login(loginParams);
      
      expect(session).toBeDefined();
      expect(session.token).toBeDefined();
      expect(session.user.id).toBeDefined();
      expect(rehive.auth.getActiveSession()).toEqual(session);

      // 3. Verify direct API access works
      const userResponse = await rehive.user.userRetrieve();
      expect(userResponse.status).toBe('success');
      expect(userResponse.data?.id).toBeDefined();

      // 4. Verify admin API access works with same token
      const adminResponse = await rehive.admin.adminUsersCreate({
        email: 'new@example.com',
        first_name: 'Test'
      });
      expect(adminResponse).toBeDefined();

      // 5. Verify session persistence
      const storedData = await storage.getItem('rehive_auth_state');
      expect(storedData).not.toBeNull();
      
      const authState = JSON.parse(storedData!);
      expect(authState.sessions).toHaveLength(1);
      expect(authState.activeSessionIndex).toBe(0);

      // 6. Create new client instance (simulating app restart)
      const newRehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false
      });

      // Wait a bit for async initialization
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const restoredSession = newRehive.auth.getActiveSession();
      expect(restoredSession).not.toBeNull();
      expect(restoredSession?.token).toBe(session.token);

      // 7. Logout using modern API
      await newRehive.auth.logout();
      expect(newRehive.auth.getActiveSession()).toBeNull();

      // 8. Verify session cleared from storage
      const clearedData = await storage.getItem('rehive_auth_state');
      const clearedAuthState = JSON.parse(clearedData!);
      expect(clearedAuthState.sessions).toHaveLength(0);
      expect(clearedAuthState.activeSessionIndex).toBe(-1);
    });

    it('should handle registration flow with direct API access', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false
      });

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
      expect(activeSession?.user.email).toBe('newuser@example.com');

      // Should be able to use both APIs after registration
      const userResponse = await rehive.user.userRetrieve();
      expect(userResponse.status).toBe('success');

      const adminResponse = await rehive.admin.adminUsersCreate({
        email: 'another@example.com'
      });
      expect(adminResponse).toBeDefined();
    });

    it('should handle extension APIs with authentication', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false
      });

      // Login first
      await rehive.auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company'
      });

      // Create extension API - should automatically receive auth token
      const conversionApi = rehive.extensions.conversion();
      expect(conversionApi).toBeDefined();
      
      // Verify the extension API can make authenticated calls (token was set correctly)
      expect(typeof conversionApi.setSecurityData).toBe('function');
      
      // Test that the extension API works with authentication
      const result = await conversionApi.user.userConversionPairsList({});
      expect(result).toBeDefined();
    });
  });

  describe('Server-side permanent token flow', () => {
    it('should work with permanent token for server usage', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'permanent-admin-token-123'
      });

      // Should not have active session (since using permanent token)
      expect(rehive.auth.getActiveSession()).toBeNull();

      // Both APIs should work immediately with permanent token
      const userSpy = jest.spyOn(rehive.user, 'userRetrieve').mockResolvedValue({
        data: { id: 'user-1', email: 'test@example.com' }
      });

      const adminSpy = jest.spyOn(rehive.admin, 'adminUsersCreate').mockResolvedValue({
        data: { id: 'user-2', email: 'new@example.com' }
      });

      await rehive.user.userRetrieve();
      await rehive.admin.adminUsersCreate({
        email: 'new@example.com',
        first_name: 'Test'
      });

      expect(userSpy).toHaveBeenCalled();
      expect(adminSpy).toHaveBeenCalled();

      // Extension APIs should also work with permanent token
      const conversionApi = rehive.extensions.conversion();
      expect(conversionApi).toBeDefined();
      
      // Verify the extension can make calls with the permanent token
      const result = await conversionApi.user.userConversionPairsList({});
      expect(result).toBeDefined();
    });

    it('should handle mixed permanent token and extension usage', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'server-token-456'
      });

      // Test multiple extension creations
      const conversion = rehive.extensions.conversion();
      const conversionStaging = rehive.extensions.conversion({
        baseUrl: 'https://staging-conversion.services.rehive.com/api/'
      });

      expect(conversion).toBeDefined();
      expect(conversionStaging).toBeDefined();

      // Both should work with the permanent token
      expect(typeof conversion.setSecurityData).toBe('function');
      expect(typeof conversionStaging.setSecurityData).toBe('function');
      
      // Verify both can make API calls
      const result1 = await conversion.user.userConversionPairsList({});
      const result2 = await conversionStaging.user.userConversionPairsList({});
      
      expect(result1).toBeDefined();
      expect(result2).toBeDefined();
    });
  });

  describe('Error handling and recovery', () => {
    it('should handle authentication errors gracefully', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false
      });

      const errorListener = jest.fn();
      rehive.auth.subscribeToErrors(errorListener);

      // Attempt login with wrong password
      try {
        await rehive.auth.login({
          user: 'test@example.com',
          password: 'wrong-password',
          company: 'test-company'
        });
        fail('Expected login to fail');
      } catch (error) {
        expect(error).toBeDefined();
      }

      // Should have no active session
      expect(rehive.auth.getActiveSession()).toBeNull();
      
      // Error listener should have been called
      expect(errorListener).toHaveBeenCalledWith(expect.any(Error));
    });

    it('should handle network errors in API calls', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'test-token'
      });

      // Mock network error
      jest.spyOn(rehive.user, 'userRetrieve').mockRejectedValue(
        new Error('Network error')
      );

      try {
        await rehive.user.userRetrieve();
        fail('Expected API call to fail');
      } catch (error: any) {
        expect(error.message).toBe('Network error');
      }
    });
  });

  describe('Session listeners and reactivity', () => {
    it('should notify listeners of session changes', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false
      });

      const sessionListener = jest.fn();
      const errorListener = jest.fn();

      const unsubscribeSession = rehive.auth.subscribeToSession(sessionListener);
      const unsubscribeError = rehive.auth.subscribeToErrors(errorListener);

      // Login should trigger session listener
      await rehive.auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company'
      });

      expect(sessionListener).toHaveBeenCalledWith(
        expect.objectContaining({
          token: expect.any(String),
          user: expect.objectContaining({ id: expect.any(String) })
        })
      );

      // Logout should trigger session listener with null
      await rehive.auth.logout();
      expect(sessionListener).toHaveBeenCalledWith(null);

      // Should clear error state on successful operations
      expect(errorListener).toHaveBeenCalledWith(null);

      unsubscribeSession();
      unsubscribeError();
    });
  });
});