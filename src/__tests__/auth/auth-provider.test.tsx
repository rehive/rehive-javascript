import React from 'react';
import { render, renderHook, act, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '../../react/auth-provider.js';
import { MemoryStorageAdapter } from '../../auth/core/storage-adapters.js';

// Mock the Platform User API
jest.mock('../../platform/user/rehive-platform-user-api.js', () => {
  const { MockRehivePlatformUserApi } = require('../mocks/platform-api.js');
  return {
    Api: MockRehivePlatformUserApi
  };
});

// Mock the Platform Admin API  
jest.mock('../../platform/admin/rehive-platform-admin-api.js', () => {
  const { MockRehivePlatformUserApi } = require('../mocks/platform-api.js');
  return {
    Api: MockRehivePlatformUserApi
  };
});

// Import mock response after mocking
const { mockLoginResponse } = require('../mocks/platform-api.js');

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider 
    config={{
      baseUrl: 'https://api.test.com',
      storage: new MemoryStorageAdapter(),
      enableCrossTabSync: false
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
  });

  it('should provide auth context to children', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    );

    expect(getByTestId('loading')).toBeInTheDocument();
    expect(getByTestId('user')).toBeInTheDocument();
    expect(getByTestId('error')).toBeInTheDocument();
  });

  it('should initialize with loading state', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    );

    expect(getByTestId('loading')).toHaveTextContent('true');
    expect(getByTestId('user')).toHaveTextContent('null');

    // Wait for initialization to complete
    await waitFor(() => {
      expect(getByTestId('loading')).toHaveTextContent('false');
    });
  });

  it('should handle login through useAuth hook', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    });

    // Wait for initial loading to finish
    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    expect(result.current.authUser).toBeNull();

    // Perform login
    await act(async () => {
      await result.current.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company'
      });
    });

    expect(result.current.authUser).not.toBeNull();
    expect(result.current.authUser?.token).toBe(mockLoginResponse.data.token);
    expect(result.current.authUser?.user.id).toBe(mockLoginResponse.data.user.id);
  });

  it('should handle login errors', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    // Attempt login with wrong password
    await act(async () => {
      try {
        await result.current.login({
          user: 'test@example.com',
          password: 'wrong-password',
          company: 'test-company'
        });
      } catch (error) {
        // Expected error
      }
    });

    expect(result.current.authUser).toBeNull();
    expect(result.current.authError).not.toBeNull();
  });

  it('should handle registration', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    await act(async () => {
      await result.current.register({
        email: 'newuser@example.com',
        password: 'password123',
        company: 'test-company',
        password1: 'password123',
        password2: 'password123',
        terms_and_conditions: true,
        privacy_policy: true
      });
    });

    expect(result.current.authUser).not.toBeNull();
    expect(result.current.authUser?.user.id).toBeDefined();
  });

  it('should handle logout', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    // First login
    await act(async () => {
      await result.current.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company'
      });
    });

    expect(result.current.authUser).not.toBeNull();

    // Then logout
    await act(async () => {
      await result.current.logout();
    });

    expect(result.current.authUser).toBeNull();
  });

  it('should provide access to rehive client', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    expect(result.current.rehive).toBeDefined();
    expect(typeof result.current.rehive.auth.login).toBe('function');
    expect(typeof result.current.rehive.auth.logout).toBe('function');
  });

  it('should throw error when used outside AuthProvider', () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => {
      renderHook(() => useAuth());
    }).toThrow('useAuth must be used within an AuthProvider');

    console.error = originalError;
  });

  it('should handle refresh callback', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    // Login first
    await act(async () => {
      await result.current.login({
        user: 'test@example.com',
        password: 'password123',
        company: 'test-company'
      });
    });

    // Test refresh callback
    expect(typeof result.current.refreshCallback).toBe('function');
    expect(typeof result.current.refresh).toBe('function');
    expect(result.current.refresh).toBe(result.current.refreshCallback);
  });

  it('should handle deleteChallenge', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    });

    await waitFor(() => {
      expect(result.current.authLoading).toBe(false);
    });

    // Should not throw even without active session
    await act(async () => {
      await result.current.deleteChallenge('challenge-123');
    });

    expect(typeof result.current.deleteChallenge).toBe('function');
  });
});