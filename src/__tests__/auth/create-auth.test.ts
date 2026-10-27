import {
  mockLoginResponse,
  mockRegisterResponse,
  mockRegisterCompanyResponse,
  mockLogoutResponse,
  mockRefreshResponse,
} from '../mocks/platform-api.js';
import { ApiError } from '../../shared/api-utils.js';
import type { StorageAdapter } from '../../auth/types/index.js';

const mockAuthLogin = jest.fn();
const mockAuthRegister = jest.fn();
const mockAuthRegisterCompany = jest.fn();
const mockAuthLogout = jest.fn();
const mockAuthRefresh = jest.fn();
const mockFetch = jest.fn();

jest.mock('../../platform/user/openapi-ts/sdk.gen.js', () => ({
  authLogin: (...args: any[]) => mockAuthLogin(...args),
  authRegister: (...args: any[]) => mockAuthRegister(...args),
  authRegisterCompany: (...args: any[]) => mockAuthRegisterCompany(...args),
  authLogout: (...args: any[]) => mockAuthLogout(...args),
  authRefresh: (...args: any[]) => mockAuthRefresh(...args),
}));

jest.mock('../../platform/user/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({})),
}));

import { createAuth } from '../../auth/create-auth.js';

describe('createAuth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = mockFetch as unknown as typeof fetch;

    mockAuthLogin.mockImplementation(async (opts: any) => {
      if (opts?.body?.password === 'wrong-password') {
        throw new Error('Invalid credentials');
      }
      return mockLoginResponse;
    });
    mockAuthRegister.mockResolvedValue(mockRegisterResponse);
    mockAuthRegisterCompany.mockResolvedValue(mockRegisterCompanyResponse);
    mockAuthLogout.mockResolvedValue(mockLogoutResponse);
    mockAuthRefresh.mockResolvedValue(mockRefreshResponse);
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        data: {
          id: 'user-123',
          email: 'test@example.com',
          company: 'test-co',
        },
      }),
      text: async () => '',
    });
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

  describe('session lifecycle helpers', () => {
    it('should import a token as the active session', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      const session = await auth.importToken('legacy-token', {
        sessionDuration: 3600,
      });

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.rehive.com/3/user/',
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: 'Token legacy-token',
          }),
        }),
      );
      expect(session.token).toBe('legacy-token');
      expect(session.company).toBe('test-co');
      expect(auth.getActiveSession()?.token).toBe('legacy-token');
      expect(auth.getStatus()).toBe('authenticated');
    });

    it('should expose recoverable state after expiring the active session', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      const loginResponse1 = {
        ...mockLoginResponse,
        data: {
          ...mockLoginResponse.data,
          user: { ...mockLoginResponse.data.user, id: 'user-1' },
          token: 'token-1',
        },
      };
      const loginResponse2 = {
        ...mockLoginResponse,
        data: {
          ...mockLoginResponse.data,
          user: { ...mockLoginResponse.data.user, id: 'user-2' },
          token: 'token-2',
        },
      };
      mockAuthLogin
        .mockResolvedValueOnce(loginResponse1)
        .mockResolvedValueOnce(loginResponse2);

      await auth.login({
        user: 'one@example.com',
        password: 'password123',
        company: 'company-1',
      });
      await auth.login({
        user: 'two@example.com',
        password: 'password123',
        company: 'company-2',
      });

      const recovery = await auth.expireActiveSession();

      expect(recovery.pending).toBe(true);
      expect(recovery.expiredSession?.token).toBe('token-2');
      expect(recovery.remainingSessions).toHaveLength(1);
      expect(recovery.remainingSessions[0].token).toBe('token-1');
      expect(auth.getStatus()).toBe('recoverable');
      expect(auth.getState().recovery.pending).toBe(true);
    });

    it('should refresh and keep the session when validation hits an unauthorized error', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      await auth.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-co',
      });

      mockFetch
        .mockResolvedValueOnce({
          ok: false,
          status: 401,
          json: async () => ({ message: 'Unauthorized' }),
          text: async () => JSON.stringify({ message: 'Unauthorized' }),
        })
        .mockResolvedValueOnce({
          ok: true,
          status: 200,
          json: async () => ({
            data: {
              id: 'user-123',
              email: 'test@example.com',
              company: 'test-co',
            },
          }),
          text: async () => '',
        });

      const isValid = await auth.validateActiveSession({
        retryCount: 0,
      });

      expect(isValid).toBe(true);
      expect(mockAuthRefresh).toHaveBeenCalledTimes(1);
      expect(auth.getStatus()).toBe('authenticated');
      expect(auth.getActiveSession()?.token).toBe(mockLoginResponse.data.token);
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

  describe('refresh failures', () => {
    const noConnection = () => new TypeError('Failed to fetch');
    const invalidToken = () =>
      new ApiError({ status: 401, error: 'Invalid token.', message: 'Invalid token.' });

    async function loginWithExpiredToken() {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });
      mockAuthLogin.mockResolvedValueOnce({
        ...mockLoginResponse,
        data: { ...mockLoginResponse.data, expires: Date.now() - 1_000 },
      });
      await auth.login({ user: 'test@example.com', password: 'password123', company: 'test-co' });
      return auth;
    }

    it.each([
      ['no connection', noConnection],
      ['a server error', () => new ApiError({ status: 503, error: '', message: 'Unavailable' })],
      ['throttling', () => new ApiError({ status: 429, error: '', message: 'Throttled' })],
    ])('should keep the session after %s', async (_case, failure) => {
      const auth = await loginWithExpiredToken();
      mockAuthRefresh.mockRejectedValueOnce(failure());

      await expect(auth.refresh()).rejects.toThrow();

      expect(auth.getStatus()).toBe('authenticated');
      expect(auth.getActiveSession()?.refresh_token).toBe(mockLoginResponse.data.refresh_token);
    });

    it('should drop the session when the platform turns the token down', async () => {
      const auth = await loginWithExpiredToken();
      mockAuthRefresh.mockRejectedValueOnce(invalidToken());

      await expect(auth.refresh()).rejects.toThrow('Invalid token.');

      expect(auth.getActiveSession()).toBeNull();
    });

    it('should fail the request, not send it without a token, until a refresh goes through', async () => {
      const auth = await loginWithExpiredToken();
      mockAuthRefresh.mockRejectedValueOnce(noConnection());

      await expect(auth.getToken()).rejects.toThrow('Failed to fetch');
      await expect(auth.getToken()).resolves.toBe(mockLoginResponse.data.token);
      expect(auth.getActiveSession()?.refresh_token).toBe(mockRefreshResponse.data.refresh_token);
    });

    it('should return no token once the refresh is turned down', async () => {
      const auth = await loginWithExpiredToken();
      mockAuthRefresh.mockRejectedValueOnce(invalidToken());

      await expect(auth.getToken()).resolves.toBeUndefined();
    });

    it('should leave the session unconfirmed, not expired, when validation cannot refresh', async () => {
      const auth = await loginWithExpiredToken();
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 401,
        json: async () => ({ message: 'Unauthorized' }),
        text: async () => JSON.stringify({ message: 'Unauthorized' }),
      });
      mockAuthRefresh.mockRejectedValueOnce(noConnection());

      await expect(auth.validateActiveSession({ retryCount: 0 })).resolves.toBe(false);

      expect(auth.getStatus()).toBe('authenticated');
      expect(auth.getState().recovery.pending).toBe(false);
    });
  });

  describe('refresh token duration', () => {
    const DAY = 86400;
    const credentials = {
      user: 'test@example.com',
      password: 'password123',
      company: 'test-co',
    };

    // A session as saved before sessions recorded their refresh token lifespan.
    function storageWithLegacySession(): StorageAdapter {
      const items = new Map<string, string>([
        [
          'rehive_auth_state',
          JSON.stringify({
            sessions: [
              {
                user: { id: 'user-123', company: 'test-co' },
                token: 'legacy-token',
                refresh_token: 'legacy-refresh-token',
                challenges: [],
                expires: Date.now() + 3600000,
                session_duration: 36000,
                company: 'test-co',
              },
            ],
            activeSessionIndex: 0,
          }),
        ],
      ]);
      return {
        getItem: async (key) => items.get(key) ?? null,
        setItem: async (key, value) => {
          items.set(key, value);
        },
        removeItem: async (key) => {
          items.delete(key);
        },
      };
    }

    function rejectedDuration(
      field: 'session_duration' | 'refresh_token_duration' = 'refresh_token_duration',
    ): ApiError {
      const body = {
        status: 'error',
        message: 'Custom session durations are disabled.',
        data: { [field]: 'Custom session durations are disabled.' },
      };
      return new ApiError({
        status: 400,
        error: body as unknown as string,
        message: body.message,
      });
    }

    const lastRefreshBody = () => mockAuthRefresh.mock.lastCall?.[0]?.body;

    it('should send the configured duration on login and record it', async () => {
      const auth = createAuth({
        storage: 'memory',
        enableCrossTabSync: false,
        refreshTokenDuration: DAY,
      });

      const session = await auth.login(credentials);

      expect(mockAuthLogin.mock.calls[0][0].body.refresh_token_duration).toBe(DAY);
      expect(session.refresh_token_duration).toBe(DAY);
    });

    it('should prefer a per-call duration and send none for null', async () => {
      const auth = createAuth({
        storage: 'memory',
        enableCrossTabSync: false,
        refreshTokenDuration: DAY,
      });

      await auth.login({ ...credentials, refresh_token_duration: 2 * DAY });
      expect(mockAuthLogin.mock.calls[0][0].body.refresh_token_duration).toBe(2 * DAY);

      const session = await auth.login({
        ...credentials,
        session_duration: null,
        refresh_token_duration: null,
      });
      expect(mockAuthLogin.mock.calls[1][0].body).not.toHaveProperty('refresh_token_duration');
      expect(session.refresh_token_duration).toBeNull();
    });

    it('should send no duration without config', async () => {
      const auth = createAuth({ storage: 'memory', enableCrossTabSync: false });

      const session = await auth.login(credentials);

      expect(mockAuthLogin.mock.calls[0][0].body).not.toHaveProperty('refresh_token_duration');
      expect(session.refresh_token_duration).toBeUndefined();
    });

    it('should never ask for a refresh token shorter than the session', async () => {
      const auth = createAuth({
        storage: 'memory',
        enableCrossTabSync: false,
        refreshTokenDuration: DAY,
      });

      await auth.login({ ...credentials, session_duration: 30 * DAY });
      expect(mockAuthLogin.mock.calls[0][0].body.refresh_token_duration).toBe(30 * DAY);

      const session = await auth.login({ ...credentials, session_duration: 0 });
      expect(mockAuthLogin.mock.calls[1][0].body).not.toHaveProperty('refresh_token_duration');
      expect(session.refresh_token_duration).toBeNull();
    });

    it('should send the configured duration on register', async () => {
      const auth = createAuth({
        storage: 'memory',
        enableCrossTabSync: false,
        refreshTokenDuration: DAY,
      });

      await auth.register({ email: 'new@example.com', password: 'password123', company: 'test-co' });

      expect(mockAuthRegister.mock.calls[0][0].body.refresh_token_duration).toBe(DAY);
    });

    it('should refresh with an empty body once the session has a duration', async () => {
      const auth = createAuth({
        storage: 'memory',
        enableCrossTabSync: false,
        refreshTokenDuration: DAY,
      });
      await auth.login(credentials);

      await auth.refresh();

      expect(lastRefreshBody()).toEqual({});
      expect(auth.getActiveSession()?.refresh_token_duration).toBe(DAY);
    });

    it('should move a legacy session to the configured duration once', async () => {
      const auth = createAuth({
        storage: storageWithLegacySession(),
        enableCrossTabSync: false,
        refreshTokenDuration: DAY,
      });

      await auth.refresh();
      expect(lastRefreshBody()).toEqual({ session_duration: 36000, refresh_token_duration: DAY });
      expect(auth.getActiveSession()?.refresh_token_duration).toBe(DAY);

      await auth.refresh();
      expect(lastRefreshBody()).toEqual({});
    });

    it('should refresh a legacy session as older versions did without config', async () => {
      const auth = createAuth({
        storage: storageWithLegacySession(),
        enableCrossTabSync: false,
      });

      await auth.refresh();
      expect(lastRefreshBody()).toEqual({ session_duration: 36000 });
      expect(auth.getActiveSession()?.refresh_token_duration).toBeUndefined();

      await auth.refresh();
      expect(lastRefreshBody()).toEqual({ session_duration: 36000 });
    });

    it('should retry without the duration when the platform rejects it', async () => {
      mockAuthRefresh.mockRejectedValueOnce(rejectedDuration());
      const auth = createAuth({
        storage: storageWithLegacySession(),
        enableCrossTabSync: false,
        refreshTokenDuration: DAY,
      });

      await auth.refresh();

      expect(mockAuthRefresh).toHaveBeenCalledTimes(2);
      expect(mockAuthRefresh.mock.calls[0][0].body).toEqual({
        session_duration: 36000,
        refresh_token_duration: DAY,
      });
      expect(mockAuthRefresh.mock.calls[1][0].body).toEqual({});
      expect(auth.getActiveSession()?.refresh_token).toBe(mockRefreshResponse.data.refresh_token);
      expect(auth.getActiveSession()?.refresh_token_duration).toBeNull();
    });

    it('should retry when the platform rejects the session duration', async () => {
      mockAuthRefresh.mockRejectedValueOnce(rejectedDuration('session_duration'));
      const auth = createAuth({
        storage: storageWithLegacySession(),
        enableCrossTabSync: false,
      });

      await auth.refresh();
      expect(mockAuthRefresh).toHaveBeenCalledTimes(2);
      expect(mockAuthRefresh.mock.calls[1][0].body).toEqual({});
      expect(auth.getActiveSession()?.refresh_token_duration).toBeNull();

      await auth.refresh();
      expect(lastRefreshBody()).toEqual({});
    });

    it('should not retry other refresh errors', async () => {
      mockAuthRefresh.mockRejectedValueOnce(
        new ApiError({ status: 401, error: 'Invalid token.', message: 'Invalid token.' }),
      );
      const auth = createAuth({
        storage: storageWithLegacySession(),
        enableCrossTabSync: false,
        refreshTokenDuration: DAY,
      });

      await expect(auth.refresh()).rejects.toThrow('Invalid token.');
      expect(mockAuthRefresh).toHaveBeenCalledTimes(1);
    });

    it('should leave the duration to the first refresh on the company session length', async () => {
      const auth = createAuth({
        storage: 'memory',
        enableCrossTabSync: false,
        refreshTokenDuration: DAY,
      });

      const session = await auth.login({ ...credentials, session_duration: null });
      expect(mockAuthLogin.mock.calls[0][0].body).not.toHaveProperty('refresh_token_duration');
      expect(session.refresh_token_duration).toBeUndefined();

      await auth.refresh();
      expect(lastRefreshBody()).toEqual({ session_duration: 900, refresh_token_duration: DAY });
    });
  });

  // Two createAuth instances on one storage stand in for two browser tabs.
  describe('multiple tabs', () => {
    const STATE_KEY = 'rehive_auth_state';
    const LOGIN_EXPIRES = Date.now() + 60_000;
    let clock = LOGIN_EXPIRES;
    let lockOptions: unknown[] = [];

    type Tab = ReturnType<typeof createAuth>;

    function sharedStorage(): StorageAdapter {
      const items = new Map<string, string>();
      return {
        getItem: async (key) => items.get(key) ?? null,
        setItem: async (key, value) => {
          items.set(key, value);
        },
        removeItem: async (key) => {
          items.delete(key);
        },
      };
    }

    async function savedSessions(storage: StorageAdapter) {
      const state = JSON.parse((await storage.getItem(STATE_KEY)) ?? '{}');
      return (state.sessions ?? []) as { company: string; refresh_token: string; expires: number }[];
    }

    function openTab(storage: StorageAdapter): Tab {
      return createAuth({ storage, enableCrossTabSync: false });
    }

    function loginAs(tab: Tab, company: string, refreshToken: string) {
      mockAuthLogin.mockResolvedValueOnce({
        ...mockLoginResponse,
        data: {
          ...mockLoginResponse.data,
          token: `token-${company}`,
          refresh_token: refreshToken,
          expires: LOGIN_EXPIRES,
        },
      });
      return tab.login({ user: 'test@example.com', password: 'password123', company });
    }

    const refreshTokenSent = (call: number) =>
      mockAuthRefresh.mock.calls[call][0].headers.Authorization.replace('Refresh-Token ', '');

    beforeEach(() => {
      // The platform: each refresh returns a new token that expires later.
      clock = LOGIN_EXPIRES;
      mockAuthRefresh.mockImplementation(async (opts: any) => {
        clock += 1_000;
        const used = opts.headers.Authorization.replace('Refresh-Token ', '');
        return { status: 'success', data: { refresh_token: `${used}+`, expires: clock } };
      });

      // A minimal Web Locks stand-in: requests for one name run one after another.
      const queues = new Map<string, Promise<unknown>>();
      lockOptions = [];
      Object.defineProperty(navigator, 'locks', {
        configurable: true,
        value: {
          request: (name: string, ...rest: unknown[]) => {
            const task = rest[rest.length - 1] as () => Promise<unknown>;
            if (rest.length > 1) lockOptions.push(rest[0]);
            const run = (queues.get(name) ?? Promise.resolve()).then(task);
            queues.set(name, run.catch(() => undefined));
            return run;
          },
        },
      });
    });

    // jsdom has no AbortSignal.timeout; the SDK passes it to the lock.
    const hadTimeout = 'timeout' in AbortSignal;
    beforeAll(() => {
      if (!hadTimeout) {
        Object.defineProperty(AbortSignal, 'timeout', {
          configurable: true,
          value: () => new AbortController().signal,
        });
      }
    });

    afterAll(() => {
      if (!hadTimeout) {
        delete (AbortSignal as { timeout?: unknown }).timeout;
      }
    });

    afterEach(() => {
      delete (navigator as { locks?: unknown }).locks;
    });

    it("should keep each tab's own session when another tab uses a different company", async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      const tabB = openTab(storage);
      await loginAs(tabA, 'co-a', 'refresh-a');
      await loginAs(tabB, 'co-b', 'refresh-b');

      await tabA.refresh();
      await tabB.refresh();

      expect(refreshTokenSent(0)).toBe('refresh-a');
      expect(refreshTokenSent(1)).toBe('refresh-b');
      expect(tabA.getActiveSession()?.company).toBe('co-a');
      expect(tabB.getActiveSession()?.company).toBe('co-b');
    });

    it("should log out only this tab's session", async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      const tabB = openTab(storage);
      await loginAs(tabA, 'co-a', 'refresh-a');
      await loginAs(tabB, 'co-b', 'refresh-b');

      await tabA.logout();

      expect((await savedSessions(storage)).map((s) => s.company)).toEqual(['co-b']);
    });

    it('should take over a refresh another tab already made', async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      await loginAs(tabA, 'co-a', 'refresh-a');
      const tabB = openTab(storage);
      await tabB.getToken();

      await tabB.refresh();
      await tabA.refresh();

      expect(mockAuthRefresh).toHaveBeenCalledTimes(1);
      expect(tabA.getActiveSession()?.refresh_token).toBe('refresh-a+');
    });

    it('should refresh a shared session once when two tabs try at the same time', async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      await loginAs(tabA, 'co-a', 'refresh-a');
      const tabB = openTab(storage);
      await tabB.getToken();

      await Promise.all([tabA.refresh(), tabB.refresh()]);

      expect(mockAuthRefresh).toHaveBeenCalledTimes(1);
      expect(tabA.getActiveSession()?.refresh_token).toBe('refresh-a+');
      expect(tabB.getActiveSession()?.refresh_token).toBe('refresh-a+');
      expect(lockOptions[0]).toHaveProperty('signal');
    });

    it('should keep both sessions when two tabs refresh different companies at once', async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      const tabB = openTab(storage);
      await loginAs(tabA, 'co-a', 'refresh-a');
      await loginAs(tabB, 'co-b', 'refresh-b');

      await Promise.all([tabA.refresh(), tabB.refresh()]);

      const saved = await savedSessions(storage);
      expect(saved.map((s) => [s.company, s.refresh_token])).toEqual([
        ['co-a', 'refresh-a+'],
        ['co-b', 'refresh-b+'],
      ]);
    });

    it('should keep a login another tab makes during a refresh', async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      const tabB = openTab(storage);
      await loginAs(tabA, 'co-a', 'refresh-a');
      mockAuthRefresh.mockImplementationOnce(async () => {
        await loginAs(tabB, 'co-b', 'refresh-b');
        clock += 1_000;
        return { status: 'success', data: { refresh_token: 'refresh-a+', expires: clock } };
      });

      await tabA.refresh();

      expect((await savedSessions(storage)).map((s) => s.company)).toEqual(['co-a', 'co-b']);
    });

    it('should refresh with its own newer token when storage holds an older one', async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      await loginAs(tabA, 'co-a', 'refresh-a');
      await tabA.refresh();
      // A stale write from another tab puts the spent login token back.
      const state = JSON.parse((await storage.getItem(STATE_KEY)) ?? '{}');
      state.sessions[0] = { ...state.sessions[0], refresh_token: 'refresh-a', expires: LOGIN_EXPIRES };
      await storage.setItem(STATE_KEY, JSON.stringify(state));

      await tabA.refresh();

      expect(refreshTokenSent(1)).toBe('refresh-a+');
      expect(tabA.getActiveSession()?.refresh_token).toBe('refresh-a++');
    });

    it('should finish the refresh it started when the tab switches session meanwhile', async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      await loginAs(tabA, 'co-b', 'refresh-b');
      await loginAs(tabA, 'co-a', 'refresh-a');
      mockAuthRefresh.mockImplementationOnce(async () => {
        await tabA.switchToSession('user-123', 'co-b');
        clock += 1_000;
        return { status: 'success', data: { refresh_token: 'refresh-a+', expires: clock } };
      });

      await tabA.refresh();

      expect(refreshTokenSent(0)).toBe('refresh-a');
      expect(tabA.getActiveSession()?.company).toBe('co-b');
      const saved = await savedSessions(storage);
      expect(saved.map((s) => [s.company, s.refresh_token])).toEqual([
        ['co-b', 'refresh-b'],
        ['co-a', 'refresh-a+'],
      ]);
    });

    it('should keep the session when another tab replaced the token that failed', async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      await loginAs(tabA, 'co-a', 'refresh-a');
      // A tab without the lock refreshes first, so ours is turned down.
      mockAuthRefresh.mockImplementationOnce(async () => {
        const state = JSON.parse((await storage.getItem(STATE_KEY)) ?? '{}');
        state.sessions[0] = {
          ...state.sessions[0],
          refresh_token: 'refresh-from-other-tab',
          expires: LOGIN_EXPIRES + 5_000,
        };
        await storage.setItem(STATE_KEY, JSON.stringify(state));
        throw new ApiError({ status: 401, error: 'Invalid token.', message: 'Invalid token.' });
      });

      await tabA.refresh();

      expect(tabA.getStatus()).toBe('authenticated');
      expect(tabA.getActiveSession()?.refresh_token).toBe('refresh-from-other-tab');
    });

    it('should drop the session when storage still holds the token that failed', async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      await loginAs(tabA, 'co-a', 'refresh-a');
      mockAuthRefresh.mockRejectedValueOnce(
        new ApiError({ status: 401, error: 'Invalid token.', message: 'Invalid token.' }),
      );

      await expect(tabA.refresh()).rejects.toThrow('Invalid token.');
      expect(tabA.getActiveSession()).toBeNull();
    });

    it('should reopen its own session after a reload, not the one saved last', async () => {
      localStorage.clear();
      sessionStorage.clear();
      const tabA = createAuth({ storage: 'local', enableCrossTabSync: false });
      await loginAs(tabA, 'co-a', 'refresh-a');
      const remembered = sessionStorage.getItem('rehive_auth_state:tab-active');
      // Another tab logs in to co-b, so storage now points there.
      await loginAs(createAuth({ storage: 'local', enableCrossTabSync: false }), 'co-b', 'refresh-b');
      sessionStorage.setItem('rehive_auth_state:tab-active', remembered ?? '');

      const reloadedA = createAuth({ storage: 'local', enableCrossTabSync: false });
      await reloadedA.getToken();

      expect(JSON.parse(localStorage.getItem(STATE_KEY) ?? '{}').activeSessionIndex).toBe(1);
      expect(reloadedA.getActiveSession()?.company).toBe('co-a');
      localStorage.clear();
      sessionStorage.clear();
    });

    it('should let a signed-out tab pick up a login from another tab', async () => {
      const storage = sharedStorage();
      const tabA = openTab(storage);
      const tabB = openTab(storage);
      await tabB.getToken();
      await loginAs(tabA, 'co-a', 'refresh-a');

      // Any action that reads storage, here a no-op challenge removal.
      await tabB.deleteChallenge('none');

      expect(tabB.getActiveSession()?.company).toBe('co-a');
    });
  });
});
