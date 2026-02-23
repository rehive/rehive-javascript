export const mockLoginResponse = {
  status: 'success',
  data: {
    token: 'mock-auth-token-12345',
    refresh_token: 'mock-refresh-token-12345',
    user: {
      id: 'user-123',
      email: 'test@example.com',
      first_name: 'Test',
      last_name: 'User',
    },
    challenges: [],
    expires: Date.now() + 3600000,
    created: Date.now(),
  },
};

export const mockRegisterResponse = {
  status: 'success',
  data: {
    token: 'mock-auth-token-register-12345',
    refresh_token: 'mock-refresh-token-register-12345',
    user: {
      id: 'user-456',
      email: 'newuser@example.com',
      first_name: 'New',
      last_name: 'User',
    },
    challenges: [],
    expires: Date.now() + 3600000,
    created: Date.now(),
  },
};

export const mockRegisterCompanyResponse = {
  status: 'success',
  data: {
    token: 'mock-auth-token-company-register-12345',
    refresh_token: 'mock-refresh-token-company-register-12345',
    user: {
      id: 'user-789',
      email: 'owner@example.com',
      first_name: 'Company',
      last_name: 'Owner',
    },
    challenges: [],
    expires: Date.now() + 3600000,
    created: Date.now(),
  },
};

export const mockLogoutResponse = {
  status: 'success',
};

export const mockRefreshResponse = {
  status: 'success',
  data: {
    refresh_token: 'new-refresh-token-123',
    expires: Date.now() + 3600000,
    created: Date.now(),
  },
};
