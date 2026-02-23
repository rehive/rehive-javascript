import React from 'react';
import { render, renderHook, act, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '../../react/auth-provider.js';
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

jest.mock('../../platform/admin/openapi-ts/sdk.gen.js', () => ({}));
jest.mock('../../platform/admin/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({})),
}));

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider
    config={{
      baseUrl: 'https://api.test.com',
      storage: 'memory',
      enableCrossTabSync: false,
    }}
  >
    {children}
  </AuthProvider>
);

const TestComponent = () => {
  const auth = useAuth();
  return (
    <div>
      <span data-testid="loading">{auth.authLoading.toString()}</span>
      <span data-testid="user">{auth.authUser?.user.id || 'null'}</span>
      <span data-testid="error">{auth.authError?.message || 'null'}</span>
    </div>
  );
};

describe('AuthProvider', () => {
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

  it('should provide auth context to children', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>,
    );

    expect(getByTestId('loading')).toBeInTheDocument();
    expect(getByTestId('user')).toBeInTheDocument();
    expect(getByTestId('error')).toBeInTheDocument();
  });

  it('should initialize with loading state', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>,
    );

    expect(getByTestId('loading')).toHaveTextContent('true');
    expect(getByTestId('user')).toHaveTextContent('null');

    await waitFor(() => {
      expect(getByTestId('loading')).toHaveTextContent('false');
    });
  });

  it('should handle login through useAuth hook', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    expect(result.current.authUser).toBeNull();

    await act(async () => {
      await result.current.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company',
      });
    });

    expect(result.current.authUser).not.toBeNull();
    expect(result.current.authUser?.token).toBe(mockLoginResponse.data.token);
    expect(result.current.authUser?.user.id).toBe(mockLoginResponse.data.user.id);
  });

  it('should handle login errors', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    await act(async () => {
      try {
        await result.current.login({
          user: 'test@example.com',
          password: 'wrong-password',
          company: 'test-company',
        });
      } catch {
        // Expected error
      }
    });

    expect(result.current.authUser).toBeNull();
    expect(result.current.authError).not.toBeNull();
  });

  it('should handle registration', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    await act(async () => {
      await result.current.register({
        email: 'newuser@example.com',
        password: 'password123',
        company: 'test-company',
      });
    });

    expect(result.current.authUser).not.toBeNull();
    expect(result.current.authUser?.user.id).toBeDefined();
  });

  it('should handle company registration', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    await act(async () => {
      await result.current.registerCompany({
        email: 'owner@example.com',
        password1: 'password123',
        password2: 'password123',
        company: { id: 'new-company' } as any,
      });
    });

    expect(result.current.authUser).not.toBeNull();
    expect(result.current.authUser?.token).toBe(mockRegisterCompanyResponse.data.token);
    expect(result.current.authUser?.company).toBe('new-company');
  });

  it('should handle logout', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    await act(async () => {
      await result.current.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company',
      });
    });

    expect(result.current.authUser).not.toBeNull();

    await act(async () => {
      await result.current.logout();
    });

    expect(result.current.authUser).toBeNull();
  });

  it('should provide access to auth instance', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    expect(result.current.auth).toBeDefined();
    expect(typeof result.current.auth.login).toBe('function');
    expect(typeof result.current.auth.registerCompany).toBe('function');
    expect(typeof result.current.auth.logout).toBe('function');
  });

  it('should throw error when used outside AuthProvider', () => {
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => {
      renderHook(() => useAuth());
    }).toThrow('useAuth must be used within an AuthProvider');

    console.error = originalError;
  });

  it('should handle refresh callback', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    expect(typeof result.current.refreshCallback).toBe('function');
    expect(typeof result.current.refresh).toBe('function');
    expect(result.current.refresh).toBe(result.current.refreshCallback);
  });
});
