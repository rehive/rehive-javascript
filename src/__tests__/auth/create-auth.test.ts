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
}));

jest.mock('../../platform/user/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({})),
}));

import { createAuth } from '../../auth/create-auth.js';

describe('createAuth', () => {
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
    it('should create auth with default config', () => {
      const auth = createAuth({ storage: 'memory' });
      expect(auth).toBeDefined();
      expect(typeof auth.login).toBe('function');
      expect(typeof auth.getToken).toBe('function');
      expect(auth.baseUrl).toBe('https://api.rehive.com');
    });

    it('should use custom baseUrl', () => {
      const auth = createAuth({ baseUrl: 'https://api.staging.com', storage: 'memory' });
      expect(auth.baseUrl).toBe('https://api.staging.com');
    });

    it('should start with no active session', () => {
      const auth = createAuth({ storage: 'memory' });
      expect(auth.getActiveSession()).toBeNull();
      expect(auth.getSessions()).toEqual([]);
    });
  });

  describe('permanent token', () => {
    it('should return permanent token from getToken', async () => {
      const auth = createAuth({ token: 'my-permanent-token', storage: 'memory' });
      const token = await auth.getToken();
      expect(token).toBe('my-permanent-token');
    });

    it('should not have active session with permanent token', () => {
      const auth = createAuth({ token: 'my-permanent-token', storage: 'memory' });
      expect(auth.getActiveSession()).toBeNull();
    });
  });

  describe('login', () => {
    it('should login and create a session', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      const session = await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-co',
      });

      expect(session.token).toBe(mockLoginResponse.data.token);
      expect(session.user.id).toBe(mockLoginResponse.data.user.id);
      expect(session.company).toBe('test-co');
      expect(auth.getActiveSession()).toEqual(session);
    });

    it('should throw on login failure', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      await expect(
        auth.login({
          user: 'test@example.com',
          password: 'wrong-password',
          company: 'test-co',
        }),
      ).rejects.toThrow('Invalid credentials');

      expect(auth.getActiveSession()).toBeNull();
    });

    it('should update existing session for same user+company', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-co',
      });
      expect(auth.getSessions()).toHaveLength(1);

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-co',
      });
      expect(auth.getSessions()).toHaveLength(1);
    });
  });

  describe('register', () => {
    it('should register and create a session', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      const session = await auth.register({
        email: 'newuser@example.com',
        password: 'password123',
        company: 'test-co',
      });

      expect(session.token).toBe(mockRegisterResponse.data.token);
      expect(auth.getActiveSession()).toEqual(session);
    });
  });

  describe('registerCompany', () => {
    it('should register company and create a session', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      const session = await auth.registerCompany({
        email: 'owner@example.com',
        password1: 'password123',
        password2: 'password123',
        company: { id: 'new-co' } as any,
      });

      expect(session.token).toBe(mockRegisterCompanyResponse.data.token);
      expect(session.company).toBe('new-co');
    });
  });

  describe('logout', () => {
    it('should logout and clear active session', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-co',
      });
      expect(auth.getActiveSession()).not.toBeNull();

      await auth.logout();
      expect(auth.getActiveSession()).toBeNull();
    });
  });

  describe('logoutAll', () => {
    it('should clear all sessions', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-co',
      });
      expect(auth.getSessions()).toHaveLength(1);

      await auth.logoutAll();
      expect(auth.getSessions()).toHaveLength(0);
      expect(auth.getActiveSession()).toBeNull();
    });
  });

  describe('getToken', () => {
    it('should return token when session is active', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-co',
      });

      const token = await auth.getToken();
      expect(token).toBe(mockLoginResponse.data.token);
    });

    it('should return undefined when no session', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });
      const token = await auth.getToken();
      expect(token).toBeUndefined();
    });
  });

  describe('multi-session', () => {
    it('should support multiple sessions', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      // Login for first company
      const loginResponse1 = {
        ...mockLoginResponse,
        data: {
          ...mockLoginResponse.data,
          user: { ...mockLoginResponse.data.user, id: 'user-1' },
          token: 'token-1',
        },
      };
      mockAuthLogin.mockResolvedValueOnce(loginResponse1);

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'company-1',
      });

      // Login for second company
      const loginResponse2 = {
        ...mockLoginResponse,
        data: {
          ...mockLoginResponse.data,
          user: { ...mockLoginResponse.data.user, id: 'user-2' },
          token: 'token-2',
        },
      };
      mockAuthLogin.mockResolvedValueOnce(loginResponse2);

      await auth.login({
        user: 'test2@example.com',
        password: 'password123',
        company: 'company-2',
      });

      expect(auth.getSessions()).toHaveLength(2);
      expect(auth.getActiveSession()?.token).toBe('token-2');

      // Switch back to first session
      const switched = await auth.switchToSession('user-1', 'company-1');
      expect(switched?.token).toBe('token-1');
    });

    it('should filter sessions by company', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'company-1',
      });

      const filtered = auth.getSessionsByCompany('company-1');
      expect(filtered).toHaveLength(1);

      const nonExistent = auth.getSessionsByCompany('company-2');
      expect(nonExistent).toHaveLength(0);
    });
  });

  describe('listeners', () => {
    it('should notify session listeners on login', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });
      const listener = jest.fn();
      auth.subscribe(listener);

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-co',
      });

      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({ token: mockLoginResponse.data.token }),
      );
    });

    it('should notify error listeners on failure', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });
      const errorListener = jest.fn();
      auth.subscribeToErrors(errorListener);

      try {
        await auth.login({
          user: 'test@example.com',
          password: 'wrong-password',
          company: 'test-co',
        });
      } catch {
        // expected
      }

      expect(errorListener).toHaveBeenCalledWith(expect.any(Error));
    });

    it('should unsubscribe listeners', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });
      const listener = jest.fn();
      const unsub = auth.subscribe(listener);
      unsub();

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-co',
      });

      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe('deleteChallenge', () => {
    it('should remove challenge from active session', async () => {
      const loginWithChallenges = {
        ...mockLoginResponse,
        data: {
          ...mockLoginResponse.data,
          challenges: [
            { id: 'challenge-1', type: 'authentication' },
            { id: 'challenge-2', type: 'setup' },
          ],
        },
      };
      mockAuthLogin.mockResolvedValueOnce(loginWithChallenges);

      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-co',
      });

      expect(auth.getActiveSession()?.challenges).toHaveLength(2);

      await auth.deleteChallenge('challenge-1');

      expect(auth.getActiveSession()?.challenges).toHaveLength(1);
      expect(auth.getActiveSession()?.challenges[0].id).toBe('challenge-2');
    });
  });
});
