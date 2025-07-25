# Rehive SDK

A modern TypeScript SDK for the Rehive platform and extension APIs, providing a unified interface for both server-side and client-side usage.

## Installation

```bash
npm install @rehive/sdk
```

## Quick Start

### Server-side Usage (Permanent Token)

Perfect for backend services, webhooks, and admin operations:

```typescript
import { RehiveClient } from '@rehive/sdk';

// Initialize with permanent token (baseUrl defaults to https://api.rehive.com)
const rehive = new RehiveClient({
  token: 'your-permanent-admin-token'
});

// Or explicitly specify the baseUrl
const rehive = new RehiveClient({
  baseUrl: 'https://api.rehive.com',
  token: 'your-permanent-admin-token'
});

// Direct API access - no initialization needed
await rehive.admin.adminUsersCreate({
  email: 'user@example.com',
  first_name: 'John',
  last_name: 'Doe'
});

// User API with admin token (for impersonation)
const userProfile = await rehive.user.userRetrieve();
```

### Client-side Usage (Authentication Flows)

Perfect for web and mobile applications:

```typescript
import { RehiveClient } from '@rehive/sdk';

// Initialize without token (baseUrl defaults to https://api.rehive.com)
const rehive = new RehiveClient();

// Or explicitly specify the baseUrl
const rehive = new RehiveClient({
  baseUrl: 'https://api.rehive.com'
});

// Authentication flows
await rehive.auth.login({
  user: 'user@example.com',
  password: 'secure-password',
  company: 'your-company'
});

// Now all APIs are automatically authenticated
const profile = await rehive.user.userRetrieve();
const accounts = await rehive.user.userAccountsList({});

// Logout when done
await rehive.auth.logout();
```

## React Integration

For a complete working example, see the [interactive demo](./demo).

```typescript
import { useState } from 'react';
import { AuthProvider, useAuth } from '@rehive/sdk/react';

function App() {
  return (
    <AuthProvider config={{ baseUrl: 'https://api.rehive.com' }}>
      <UserDashboard />
    </AuthProvider>
  );
}

function UserDashboard() {
  const { login, logout, session, loading, rehive } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const handleLogin = async () => {
    await login({
      user: 'email@example.com',
      password: 'password',
      company: 'my-company'
    });
  };

  const fetchUserDetails = async () => {
    setIsLoadingDetails(true);
    try {
      const response = await rehive.user.userRetrieve();
      setUserDetails(response.data);
    } catch (error) {
      console.error('Failed to fetch user details:', error);
    } finally {
      setIsLoadingDetails(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!session) {
    return <button onClick={handleLogin}>Login</button>;
  }

  return (
    <div>
      <h2>Welcome, {session.user.email}</h2>
      <button onClick={logout}>Logout</button>
      
      <div>
        <button onClick={fetchUserDetails} disabled={isLoadingDetails}>
          {isLoadingDetails ? 'Loading...' : 'Fetch User Details'}
        </button>
        
        {userDetails && (
          <div>
            <h3>User Details</h3>
            <p>ID: {userDetails.id}</p>
            <p>Name: {userDetails.first_name} {userDetails.last_name}</p>
            <p>Status: {userDetails.status}</p>
            <p>Verified: {userDetails.verified ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
```

## Extension APIs

All extension APIs work the same way with automatic token synchronization:

```typescript
// All extensions work the same way - no imports needed
const conversion = rehive.extensions.conversion();
await conversion.user.userConversionPairsList({});
await conversion.admin.adminConversionRatesList({});

const rewards = rehive.extensions.rewards();
await rewards.user.userRewardsList({});

const products = rehive.extensions.products();
await products.user.userProductsList({});

const notifications = rehive.extensions.notifications();
await notifications.user.userNotificationsList({});

// Custom environment URLs (same pattern for all extensions)
const stagingConversion = rehive.extensions.conversion({
  baseUrl: 'https://onversion.services.rehive.com/api/'
});

const stagingRewards = rehive.extensions.rewards({
  baseUrl: 'https://rewards.services.rehive.com/api/'
});
```

### Custom Extensions and Ad-hoc API Calls

For custom extensions or one-off API calls, use the authenticated fetch method:

```typescript
// GET request to custom extension
const response = await rehive.extensions.fetch('https://my-custom.services.rehive.com/api/users');
const users = await response.json();

// POST request with data
const response = await rehive.extensions.fetch('https://my-custom.services.rehive.com/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ product_id: 123, quantity: 2 })
});

// Works with any HTTP endpoint - automatically handles authentication
const response = await rehive.extensions.fetch('https://api.external-service.com/data', {
  method: 'GET',
  headers: { 'X-Custom-Header': 'value' }
});
```

**Key Benefits:**
- **Automatic authentication**: Attaches current user token to requests
- **Token refresh**: Automatically refreshes expired tokens 
- **Works anywhere**: Use with any HTTP endpoint, not just Rehive services
- **Standard fetch API**: Same interface as native `fetch()` with auth handling

## API Responses and Error Handling

### Response Structure

All API methods return responses in a consistent format that matches the Rehive API structure:

```typescript
// API responses have a standard structure
const user = await rehive.user.authRetrieve();
console.log(user.data.email); // Access user data

const accounts = await rehive.user.userAccountsList({});
console.log(accounts.data.results); // Access account list
```

**Response Format:**
```typescript
{
  status: "success",
  data: {
    // Your actual data here
    id: "user-id",
    email: "user@example.com",
    // ... other properties
  }
}
```

### Error Handling

The SDK provides comprehensive error handling through the `ApiError` class:

```typescript
import { RehiveClient, ApiError } from '@rehive/sdk';

try {
  const user = await rehive.user.authRetrieve();
  console.log('User:', user.data.email);
} catch (error) {
  if (error instanceof ApiError) {
    // Structured API errors from Rehive
    console.log('Status Code:', error.status);        // 401, 400, 500, etc.
    console.log('Error Message:', error.message);     // Human-readable message
    console.log('Error Details:', error.error);       // Full API error response
    
    // Handle specific error types
    switch (error.status) {
      case 401:
        console.log('Authentication required');
        // Redirect to login
        break;
      case 400:
        console.log('Bad request:', error.error.data);
        // Show validation errors
        break;
      case 429:
        console.log('Rate limited - retry later');
        break;
      default:
        console.log('API error:', error.message);
    }
  } else {
    // Network errors, timeouts, etc.
    console.error('Network error:', error.message);
  }
}
```

**Common Error Scenarios:**

| Status Code | Description | Common Causes |
|-------------|-------------|---------------|
| `400` | Bad Request | Missing required fields, invalid data format |
| `401` | Unauthorized | Missing or invalid authentication token |
| `403` | Forbidden | Insufficient permissions for the operation |
| `404` | Not Found | Resource doesn't exist or user lacks access |
| `429` | Rate Limited | Too many requests - implement retry logic |
| `500` | Server Error | Internal server error - retry or contact support |

**Error Response Structure:**
```typescript
// ApiError properties
{
  status: 400,                    // HTTP status code
  message: "Validation failed",   // Human-readable message
  error: {                        // Full API response
    status: "error",
    message: "Validation failed",
    data: {
      email: ["This field is required"],
      password: ["Password too short"]
    }
  }
}
```

### Authentication Error Handling

The SDK provides specialized handlers for authentication flows:

```typescript
// Subscribe to authentication errors
const unsubscribe = rehive.auth.subscribeToErrors((error) => {
  if (error) {
    console.error('Auth error:', error.message);
    
    // Handle different auth error types
    if (error.status === 401) {
      // Token expired or invalid
      window.location.href = '/login';
    } else if (error.status === 400) {
      // Invalid credentials
      showErrorMessage('Invalid email or password');
    }
  }
});

// Subscribe to session changes
const unsubscribeSession = rehive.auth.subscribeToSession((session) => {
  if (session) {
    console.log('User logged in:', session.user.email);
    // Update UI for authenticated state
  } else {
    console.log('User logged out');
    // Update UI for unauthenticated state
  }
});

// Clean up subscriptions
unsubscribe();
unsubscribeSession();
```

## Key Features

### ✅ Smart Token Management
- **Automatic refresh**: Tokens refresh 30 seconds before expiration
- **Cross-API sync**: All API instances share the same authentication state
- **Persistent sessions**: Authentication survives page reloads
- **Cross-tab sync**: Authentication state syncs across browser tabs

### ✅ Extension Integration
- **Factory methods**: Built-in methods for all Rehive extensions
- **Default URLs**: Production URLs configured by default
- **Environment flexibility**: Easy to override for staging/development
- **Same DX**: Extensions get the same token management and response unwrapping

## Architecture

The SDK includes multiple API clients generated from swagger specifications:

```
src/
├── platform/
│   ├── user/           # Platform User API (203 methods)
│   └── admin/          # Platform Admin API (360 methods)
├── extensions/         # Service Extensions
│   ├── conversion/     # 60 methods
│   ├── mass-send/      # 18 methods
│   ├── notifications/  # 37 methods
│   ├── products/       # 241 methods
│   ├── rewards/        # 30 methods
│   ├── stellar/        # 101 methods
│   ├── stellar-testnet/# 101 methods
│   ├── business/       # 84 methods
│   ├── payment-requests/# 77 methods
│   └── bridge/         # 27 methods
├── shared/
│   └── http-client.ts  # Shared/customized HTTP client
└── auth/              # Auth functionality using Platform User API
```

## Available APIs

| API | Client Name | Methods | Documentation |
|-----|-------------|---------|---------------|
| Platform User API | `platform-user-api` | 203 | [Methods](./docs/api-methods/platform-user-methods.md) |
| Platform Admin API | `platform-admin-api` | 360 | [Methods](./docs/api-methods/platform-admin-methods.md) |
| Conversion Extension | `conversion-api` | 60 | [Methods](./docs/api-methods/conversion-methods.md) |
| Mass Send Extension | `mass-send-api` | 18 | [Methods](./docs/api-methods/mass-send-methods.md) |
| Notifications Extension | `notifications-api` | 37 | [Methods](./docs/api-methods/notifications-methods.md) |
| Products Extension | `products-api` | 241 | [Methods](./docs/api-methods/products-methods.md) |
| Rewards Extension | `rewards-api` | 30 | [Methods](./docs/api-methods/rewards-methods.md) |
| Stellar Extension | `stellar-api` | 101 | [Methods](./docs/api-methods/stellar-methods.md) |
| Stellar Testnet Extension | `stellar-testnet-api` | 101 | [Methods](./docs/api-methods/stellar-testnet-methods.md) |
| Business Extension | `business-api` | 84 | [Methods](./docs/api-methods/business-methods.md) |
| Payment Requests Extension | `payment-requests-api` | 77 | [Methods](./docs/api-methods/payment-requests-methods.md) |
| Bridge Extension | `bridge-api` | 27 | [Methods](./docs/api-methods/bridge-methods.md) |

**Total: 1,339 API methods across platform and extensions**

📋 [View complete API overview](./docs/api-methods-overview.md)

## Advanced Usage

### Error Handling

```typescript
// Subscribe to auth errors
const unsubscribe = rehive.auth.subscribeToErrors((error) => {
  if (error) {
    console.error('Auth error:', error.message);
    // Handle login redirect, show error message, etc.
  }
});

// Subscribe to session changes
const unsubscribeSession = rehive.auth.subscribeToSession((session) => {
  if (session) {
    console.log('User logged in:', session.user.email);
  } else {
    console.log('User logged out');
  }
});
```

### Custom Storage

```typescript
import { RehiveClient, MemoryStorageAdapter } from '@rehive/sdk';

const rehive = new RehiveClient({
  baseUrl: 'https://api.rehive.com',
  storage: new MemoryStorageAdapter(), // Won't persist across page reloads
  enableCrossTabSync: false // Disable cross-tab synchronization
});
```

## TypeScript Support

The SDK is fully typed with comprehensive TypeScript support:

```typescript
import { RehiveClient, type RehiveConfig, type UserSession } from '@rehive/sdk';

const config: RehiveConfig = {
  baseUrl: 'https://api.rehive.com',
  token: 'optional-permanent-token'
};

const rehive = new RehiveClient(config);

// Full type safety on all API methods
const session: UserSession = await rehive.auth.login({
  user: 'email@example.com',
  password: 'password',
  company: 'company-name'
});
```

## Development

### Building the SDK

```bash
npm run build
```

### Updating API Clients

The SDK uses generated API clients from swagger specifications. To update them:

```bash
# Extract current API methods for reference
node scripts/extract-api-methods.js

# Follow the code generation workflow
```

📖 [Complete code generation guide](./CODEGEN.md)

### Testing

```bash
npm run dev
```

## Documentation

- **[API Methods Overview](./docs/api-methods-overview.md)** - Complete list of all available API methods
- **[Code Generation Workflow](./CODEGEN.md)** - How to update generated API clients
- **Individual API Documentation** - Detailed method lists for each API in `docs/api-methods/`

## License

MIT License

---

This modern SDK design follows current best practices and provides a clean, intuitive developer experience for both server-side and client-side usage.