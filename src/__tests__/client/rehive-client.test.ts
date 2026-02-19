import {
  mockLoginResponse,
  mockRegisterResponse,
  mockRegisterCompanyResponse,
  mockLogoutResponse,
  mockRefreshResponse,
} from '../mocks/platform-api.js';

const mockAuthLogin = jest.fn();
const mockAuthRegister = jest.fn();
const mockAuthRegisterCompany = jest.fn();
const mockAuthLogout = jest.fn();
const mockAuthRefreshCreate = jest.fn();

jest.mock('../../platform/user/openapi-ts/sdk.gen.js', () => ({
  authLogin: (...args: any[]) => mockAuthLogin(...args),
  authRegister: (...args: any[]) => mockAuthRegister(...args),
  authRegisterCompany: (...args: any[]) => mockAuthRegisterCompany(...args),
  authLogout: (...args: any[]) => mockAuthLogout(...args),
  authRefreshCreate: (...args: any[]) => mockAuthRefreshCreate(...args),
  userRetrieve: jest.fn(),
  accountsList: jest.fn(),
}));

jest.mock('../../platform/user/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  })),
}));

jest.mock('../../platform/admin/openapi-ts/sdk.gen.js', () => ({
  adminUsersList: jest.fn(),
  adminUsersCreate: jest.fn(),
}));

jest.mock('../../platform/admin/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  })),
}));

jest.mock('../../extensions/conversion/openapi-ts/sdk.gen.js', () => ({
  userConversionPairsList: jest.fn(),
}));

jest.mock('../../extensions/conversion/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  })),
}));

import { RehiveClient } from '../../client/rehive-client.js';

describe('RehiveClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockAuthLogin.mockImplementation(async (opts: any) => {
      if (opts?.body?.password === 'wrong-password') {
        throw new Error('Invalid credentials');
      }
      return mockLoginResponse;
    });

    mockAuthRegister.mockResolvedValue(mockRegisterResponse);
    mockAuthRegisterCompany.mockResolvedValue(mockRegisterCompanyResponse);
    mockAuthLogout.mockResolvedValue(mockLogoutResponse);
    mockAuthRefreshCreate.mockResolvedValue(mockRefreshResponse);
  });

  describe('initialization', () => {
    it('should initialize with user and admin APIs', () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage: 'memory',
      });
      expect(rehive.user).toBeDefined();
      expect(rehive.admin).toBeDefined();
    });

    it('should provide auth methods', () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage: 'memory',
      });
      expect(typeof rehive.auth.login).toBe('function');
      expect(typeof rehive.auth.register).toBe('function');
      expect(typeof rehive.auth.registerCompany).toBe('function');
      expect(typeof rehive.auth.logout).toBe('function');
      expect(typeof rehive.auth.refresh).toBe('function');
      expect(typeof rehive.auth.getToken).toBe('function');
    });

    it('should provide extension factories', () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage: 'memory',
      });
      expect(typeof rehive.extensions.conversion).toBe('function');
      expect(typeof rehive.extensions.rewards).toBe('function');
      expect(typeof rehive.extensions.massSend).toBe('function');
      expect(typeof rehive.extensions.stellar).toBe('function');
    });
  });

  describe('auth flows', () => {
    let rehive: RehiveClient;

    beforeEach(() => {
      rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage: 'memory',
        enableCrossTabSync: false,
      });
    });

    it('should login and return a session', async () => {
      const session = await rehive.auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company',
      });

      expect(session.token).toBe(mockLoginResponse.data.token);
      expect(session.user.id).toBe(mockLoginResponse.data.user.id);
      expect(rehive.auth.getActiveSession()).toEqual(session);
    });

    it('should reject login with wrong password', async () => {
      await expect(
        rehive.auth.login({
          user: 'test@example.com',
          password: 'wrong-password',
          company: 'test-company',
        }),
      ).rejects.toThrow('Invalid credentials');

      expect(rehive.auth.getActiveSession()).toBeNull();
    });

    it('should register and create session', async () => {
      const session = await rehive.auth.register({
        email: 'newuser@example.com',
        password: 'password123',
        company: 'test-company',
      });

      expect(session.token).toBe(mockRegisterResponse.data.token);
      expect(rehive.auth.getActiveSession()).not.toBeNull();
    });

    it('should register company and create session', async () => {
      const session = await rehive.auth.registerCompany({
        email: 'owner@example.com',
        password1: 'password123',
        password2: 'password123',
        company: { id: 'new-company' } as any,
      });

      expect(session.token).toBe(mockRegisterCompanyResponse.data.token);
      expect(session.company).toBe('new-company');
    });

    it('should logout and clear session', async () => {
      await rehive.auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company',
      });
      expect(rehive.auth.getActiveSession()).not.toBeNull();

      await rehive.auth.logout();
      expect(rehive.auth.getActiveSession()).toBeNull();
    });

    it('should notify session listeners', async () => {
      const listener = jest.fn();
      rehive.auth.subscribe(listener);

      await rehive.auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company',
      });

      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({
          token: mockLoginResponse.data.token,
          user: expect.objectContaining({ id: mockLoginResponse.data.user.id }),
        }),
      );
    });

    it('should notify error listeners on failure', async () => {
      const errorListener = jest.fn();
      rehive.auth.subscribeToErrors(errorListener);

      try {
        await rehive.auth.login({
          user: 'test@example.com',
          password: 'wrong-password',
          company: 'test-company',
        });
      } catch {
        // expected
      }

      expect(errorListener).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  describe('server-side (permanent token)', () => {
    it('should initialize without active session', () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'permanent-token-123',
      });
      expect(rehive.auth.getActiveSession()).toBeNull();
    });

    it('should return permanent token from getToken', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'permanent-token-123',
      });
      const token = await rehive.auth.getToken();
      expect(token).toBe('permanent-token-123');
    });
  });

  describe('extension creation', () => {
    it('should create a conversion API', () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage: 'memory',
      });
      const conversion = rehive.extensions.conversion();
      expect(conversion).toBeDefined();
    });

    it('should accept custom baseUrl', () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage: 'memory',
      });
      const conversion = rehive.extensions.conversion({
        baseUrl: 'https://staging-conversion.services.rehive.com/api/',
      });
      expect(conversion).toBeDefined();
    });
  });
});
