# Testing Guide

This guide covers how to test the Rehive SDK, particularly the authentication functionality.

## Test Setup

The SDK uses Jest with TypeScript support and React Testing Library for component tests.

### Running Tests

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Test Structure

```
src/__tests__/
├── setup.ts                    # Test configuration
├── mocks/
│   └── platform-api.ts         # Mock Platform User API
├── auth/
│   ├── token-manager.test.ts    # Core auth logic tests
│   ├── storage-adapters.test.ts # Storage layer tests
│   └── auth-provider.test.tsx   # React provider tests
└── integration/
    └── auth-flow.test.ts        # End-to-end auth flow tests
```

## Key Testing Patterns

### 1. TokenManager Tests

Tests the core authentication logic:

```typescript
import { TokenManager } from '../../auth/core/token-manager.js';
import { MemoryStorageAdapter } from '../../auth/core/storage-adapters.js';

const tokenManager = new TokenManager({
  baseUrl: 'https://api.test.com',
  storage: new MemoryStorageAdapter(),
  enableCrossTabSync: false
});

// Test login
const session = await tokenManager.login({
  user: 'test@example.com',
  password: 'password123',
  company: 'test-company'
});

expect(session.token).toBeDefined();
expect(tokenManager.getActiveSession()).toEqual(session);
```

### 2. React Component Tests

Tests the AuthProvider and useAuth hook:

```typescript
import { renderHook } from '@testing-library/react';
import { AuthProvider, useAuth } from '../../react/auth-provider.js';

const TestWrapper = ({ children }) => (
  <AuthProvider config={{ baseUrl: 'https://api.test.com' }}>
    {children}
  </AuthProvider>
);

const { result } = renderHook(() => useAuth(), {
  wrapper: TestWrapper
});

await act(async () => {
  await result.current.login({
    email: 'test@example.com',
    password: 'password123',
    company: 'test-company'
  });
});

expect(result.current.authUser).not.toBeNull();
```

### 3. Storage Adapter Tests

Tests different storage implementations:

```typescript
import { MemoryStorageAdapter, WebStorageAdapter, AsyncStorageAdapter } from '../../auth/core/storage-adapters.js';

// Test memory storage
const adapter = new MemoryStorageAdapter();
await adapter.setItem('key', 'value');
const value = await adapter.getItem('key');
expect(value).toBe('value');
```

### 4. Integration Tests

Tests complete auth flows:

```typescript
// Full login -> API usage -> logout flow
await tokenManager.initialize();
const session = await tokenManager.login(params);
const platformApi = tokenManager.getPlatformApi();
const userResponse = await platformApi.userRetrieve();
await tokenManager.logout();
```

## Mocking Strategy

### Platform User API Mock

The tests use a `MockRehivePlatformUserApi` class that simulates the real API:

```typescript
// Mock returns successful login response
const mockLoginResponse = {
  status: 'success',
  data: {
    token: 'mock-auth-token-12345',
    refresh_token: 'mock-refresh-token-12345',
    user: { id: 'user-123', email: 'test@example.com' },
    challenges: [],
    expires: Date.now() + 3600000
  }
};

// Mock can simulate errors
if (data.password === 'wrong-password') {
  throw new Error('Invalid credentials');
}
```

### Storage Mocking

- **MemoryStorageAdapter**: Real implementation for isolated tests
- **WebStorageAdapter**: Mocks `localStorage` globally
- **AsyncStorageAdapter**: Uses mock AsyncStorage object

### Environment Mocking

Global mocks in `setup.ts`:
- `localStorage`
- `fetch`
- `window.addEventListener` (for cross-tab sync)
- `TextEncoder/TextDecoder` (Node.js polyfills)

## Test Coverage

The test suite covers:

✅ **Core Auth Logic**
- Login/register/logout flows
- Session management
- Error handling
- Token storage and retrieval

✅ **Storage Adapters**  
- Memory, localStorage, and AsyncStorage implementations
- Error handling and edge cases

✅ **React Integration**
- AuthProvider component
- useAuth hook
- Loading states and error handling

✅ **API Integration**
- Platform User API method calls
- Token authentication
- Response handling

✅ **Edge Cases**
- Multiple sessions
- Storage failures
- Network errors
- Invalid credentials

## Writing New Tests

### For Auth Features

1. **Mock the Platform API**: Use `MockRehivePlatformUserApi`
2. **Use MemoryStorage**: For isolated, predictable tests
3. **Test async flows**: Use `await` and proper error handling
4. **Verify side effects**: Check storage, API calls, listeners

### For React Components

1. **Use TestWrapper**: Wrap components with `AuthProvider`
2. **Test hooks**: Use `renderHook` for useAuth testing
3. **Handle loading states**: Wait for async operations with `waitFor`
4. **Test user interactions**: Simulate login/logout flows

### Integration Tests

1. **Test complete flows**: Login → API usage → logout
2. **Test persistence**: Create new instances to verify storage
3. **Test error recovery**: Handle and recover from errors
4. **Test edge cases**: Multiple users, session conflicts

## Debugging Tests

```bash
# Run specific test file
npm test token-manager.test.ts

# Run tests with verbose output
npm test -- --verbose

# Debug with Node inspector
node --inspect-brk node_modules/.bin/jest token-manager.test.ts

# Get coverage for specific file
npm test -- --coverage --collectCoverageFrom="src/auth/core/token-manager.ts"
```

## CI/CD Integration

Add to your CI pipeline:

```yaml
- name: Run SDK Tests
  run: |
    cd packages/rehive-sdk
    npm install
    npm test -- --coverage --watchAll=false
```

The tests are designed to be deterministic and run quickly in CI environments.