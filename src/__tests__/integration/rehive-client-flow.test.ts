import {
  mockLoginResponse,
  mockRegisterResponse,
  mockLogoutResponse,
  mockRefreshResponse,
} from '../mocks/platform-api.js';

const mockAuthLogin = jest.fn();
const mockAuthRegister = jest.fn();
const mockAuthLogout = jest.fn();
const mockAuthRefreshCreate = jest.fn();
const mockUserRetrieve = jest.fn();

jest.mock('../../platform/user/openapi-ts/sdk.gen.js', () => ({
  authLogin: (...args: any[]) => mockAuthLogin(...args),
  authRegister: (...args: any[]) => mockAuthRegister(...args),
  authRegisterCompany: jest.fn(),
  authLogout: (...args: any[]) => mockAuthLogout(...args),
  authRefreshCreate: (...args: any[]) => mockAuthRefreshCreate(...args),
  userRetrieve: (...args: any[]) => mockUserRetrieve(...args),
}));

jest.mock('../../platform/user/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({})),
}));

jest.mock('../../platform/admin/openapi-ts/sdk.gen.js', () => ({
  adminUsersList: jest.fn(),
  adminUsersCreate: jest.fn(),
}));

jest.mock('../../platform/admin/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({})),
}));

jest.mock('../../extensions/conversion/openapi-ts/sdk.gen.js', () => ({
  userConversionPairsList: jest.fn().mockResolvedValue({ status: 'success', data: { results: [] } }),
}));

jest.mock('../../extensions/conversion/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({})),
}));

import { RehiveClient } from '../../client/rehive-client.js';
import { MemoryStorageAdapter } from '../../auth/core/storage-adapters.js';

describe('RehiveClient Integration Flow', () => {
  let storage: MemoryStorageAdapter;

  beforeEach(() => {
    storage = new MemoryStorageAdapter();
    jest.clearAllMocks();

    mockAuthLogin.mockImplementation(async (opts: any) => {
      if (opts?.body?.password === 'wrong-password') {
        throw new Error('Invalid credentials');
      }
      return mockLoginResponse;
    });
    mockAuthRegister.mockResolvedValue(mockRegisterResponse);
    mockAuthLogout.mockResolvedValue(mockLogoutResponse);
    mockAuthRefreshCreate.mockResolvedValue(mockRefreshResponse);
    mockUserRetrieve.mockResolvedValue({ status: 'success', data: { id: 'user-123', email: 'test@example.com' } });
  });

  describe('Client-side authentication flow', () => {
    it('should complete full authentication flow', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false,
      });

      expect(rehive.auth.getActiveSession()).toBeNull();

      const session = await rehive.auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company',
      });

      expect(session).toBeDefined();
      expect(session.token).toBeDefined();
      expect(session.user.id).toBeDefined();
      expect(rehive.auth.getActiveSession()).toEqual(session);

      const storedData = await storage.getItem('rehive_auth_state');
      expect(storedData).not.toBeNull();

      const authState = JSON.parse(storedData!);
      expect(authState.sessions).toHaveLength(1);
      expect(authState.activeSessionIndex).toBe(0);

      const newRehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false,
      });

      await new Promise((resolve) => setTimeout(resolve, 50));

      const restoredSession = newRehive.auth.getActiveSession();
      expect(restoredSession).not.toBeNull();
      expect(restoredSession?.token).toBe(session.token);

      await newRehive.auth.logout();
      expect(newRehive.auth.getActiveSession()).toBeNull();

      const clearedData = await storage.getItem('rehive_auth_state');
      const clearedAuthState = JSON.parse(clearedData!);
      expect(clearedAuthState.sessions).toHaveLength(0);
      expect(clearedAuthState.activeSessionIndex).toBe(-1);
    });

    it('should handle registration flow', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false,
      });

      const session = await rehive.auth.register({
        email: 'newuser@example.com',
        password: 'password123',
        company: 'test-company',
      });

      expect(session).toBeDefined();
      expect(session.token).toBeDefined();
      expect(rehive.auth.getActiveSession()).not.toBeNull();
    });

    it('should create extension APIs with shared auth', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false,
      });

      await rehive.auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company',
      });

      const conversion = rehive.extensions.conversion();
      expect(conversion).toBeDefined();
      expect(typeof conversion.userConversionPairsList).toBe('function');
    });
  });

  describe('Server-side permanent token flow', () => {
    it('should provide token from getToken with permanent token', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'permanent-admin-token-123',
      });

      expect(rehive.auth.getActiveSession()).toBeNull();
      const token = await rehive.auth.getToken();
      expect(token).toBe('permanent-admin-token-123');
    });

    it('should create extension APIs with permanent token', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'permanent-admin-token-123',
      });

      const conversion = rehive.extensions.conversion();
      expect(conversion).toBeDefined();
      expect(typeof conversion.userConversionPairsList).toBe('function');
    });
  });

  describe('Error handling and recovery', () => {
    it('should handle login errors and notify listeners', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false,
      });

      const errorListener = jest.fn();
      rehive.auth.subscribeToErrors(errorListener);

      await expect(
        rehive.auth.login({
          user: 'test@example.com',
          password: 'wrong-password',
          company: 'test-company',
        }),
      ).rejects.toThrow('Invalid credentials');

      expect(rehive.auth.getActiveSession()).toBeNull();
      expect(errorListener).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  describe('Session listeners and reactivity', () => {
    it('should notify listeners of session changes', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false,
      });

      const sessionListener = jest.fn();
      rehive.auth.subscribe(sessionListener);

      await rehive.auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company',
      });

      expect(sessionListener).toHaveBeenCalledWith(
        expect.objectContaining({
          token: expect.any(String),
          user: expect.objectContaining({ id: expect.any(String) }),
        }),
      );

      await rehive.auth.logout();
      expect(sessionListener).toHaveBeenCalledWith(null);
    });
  });
});
