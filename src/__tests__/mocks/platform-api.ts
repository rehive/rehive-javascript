import type { Login, Register, Logout } from '../../platform/user/rehive-platform-user-api.js';

// Mock responses that match the actual API structure
export const mockLoginResponse = {
  status: 'success',
  data: {
    token: 'mock-auth-token-12345',
    refresh_token: 'mock-refresh-token-12345',
    user: {
      id: 'user-123',
      email: 'test@example.com',
      first_name: 'Test',
      last_name: 'User'
    },
    challenges: [],
    expires: Date.now() + 3600000, // 1 hour from now
    created: Date.now()
  }
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
      last_name: 'User'
    },
    challenges: [],
    expires: Date.now() + 3600000,
    created: Date.now()
  }
};

export const mockLogoutResponse = {
  status: 'success'
};

export const mockUserResponse = {
  status: 'success',
  data: {
    id: 'user-123',
    email: 'test@example.com',
    first_name: 'Test',
    last_name: 'User',
    company: 'test-company',
    verified: true,
    created: Date.now() - 86400000, // 1 day ago
    updated: Date.now()
  }
};

// Mock Platform User API class
export class MockRehivePlatformUserApi {
  private securityData: string | null = null;
  private baseUrl: string;
  private refreshCallback?: () => Promise<void>;

  constructor(config: { baseUrl: string; securityWorker?: any; refreshCallback?: () => Promise<void> }) {
    this.baseUrl = config.baseUrl;
    this.refreshCallback = config.refreshCallback;
  }

  setSecurityData(data: string | null) {
    this.securityData = data;
  }

  async authLogin(data: Login) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));

    if (data.password === 'wrong-password') {
      throw new Error('Invalid credentials');
    }

    // Return in the format that generated APIs return: { data: actualApiResponse.data }
    return { data: mockLoginResponse.data };
  }

  async authRegister(data: Register) {
    await new Promise(resolve => setTimeout(resolve, 100));

    if (data.email === 'existing@example.com') {
      throw new Error('User already exists');
    }

    return { data: mockRegisterResponse.data };
  }

  async authLogout(data: Logout) {
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockLogoutResponse;
  }

  async userRetrieve() {
    await new Promise(resolve => setTimeout(resolve, 50));
    
    if (!this.securityData) {
      throw new Error('Authentication required');
    }
    
    // For integration tests, return the final user-facing response (unwrapped)
    return mockUserResponse;
  }

  // Mock other methods as needed
  async userAccountsList() {
    return { status: 'success', data: { results: [] } };
  }
  
  async adminUsersCreate(data: any) {
    // For integration tests, return the final user-facing response (unwrapped)
    return { status: 'success', data: { id: 'user-456', ...data } };
  }

  // Mock refresh method for refresh token
  async authRefreshCreate(data: any) {
    await new Promise(resolve => setTimeout(resolve, 50));
    return {
      data: {
        refresh_token: 'new-refresh-token-123',
        expires: Date.now() + 3600000
      }
    };
  }

  // Add setExpires method that some tests expect
  setExpires(expires: number | null) {
    // Mock implementation
  }

  // Add user property for conversion API compatibility
  user = {
    userConversionPairsList: async (params: any) => {
      return { status: 'success', data: { results: [] } };
    }
  };
}