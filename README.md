# Rehive SDK

A modern, fully typed TypeScript SDK for the Rehive platform and extension APIs. Tree-shakeable modular imports, shared authentication, and full autocomplete on every method.

> **Note:** This is version 4 of the Rehive JavaScript SDK -- a major rewrite with a modular architecture. For v3, see the [v3 branch](https://github.com/rehive/rehive-javascript/tree/v3). For v2, see the [v2 branch](https://github.com/rehive/rehive-javascript/tree/v2).

## Installation

```bash
npm install rehive
```

## Quick Start

### Modular API (recommended)

Import only what you need. Each module is tree-shakeable and fully typed.

```typescript
import { createAuth } from "rehive/auth";
import { createUserApi } from "rehive/user";
import { createAdminApi } from "rehive/admin";
import { createConversionApi } from "rehive/extensions/conversion";

// Create a shared auth instance
const auth = createAuth({
  baseUrl: "https://api.rehive.com",
  storage: "local",           // "local" | "memory" | custom StorageAdapter
});

// Create API instances -- each uses auth.getToken() automatically
const user = createUserApi({ auth });
const admin = createAdminApi({ auth });
const conversion = createConversionApi({ auth });

// Authenticate
await auth.login({ user: "email@example.com", password: "pass", company: "myco" });

// All APIs are now authenticated -- full autocomplete on every method
await user.userRetrieve();
await admin.adminUsersList({});
await conversion.userConversionPairsList({});

// Logout
await auth.logout();
```

### Server-side with permanent token

```typescript
import { createAuth } from "rehive/auth";
import { createAdminApi } from "rehive/admin";

const auth = createAuth({ token: "your-permanent-admin-token" });
const admin = createAdminApi({ auth });

await admin.adminUsersCreate({ body: { email: "user@example.com" } });
```

### RehiveClient wrapper (backward-compatible)

A convenience class that composes auth + all APIs in one object:

```typescript
import { RehiveClient } from "rehive";

const rehive = new RehiveClient({
  baseUrl: "https://api.rehive.com",
  storage: "local",
});

// Auth
await rehive.auth.login({ user: "email@example.com", password: "pass", company: "myco" });

// Platform APIs -- directly on the client
await rehive.user.userRetrieve();
await rehive.admin.adminUsersList({});

// Extension APIs -- created via factory methods
const conversion = rehive.extensions.conversion();
await conversion.userConversionPairsList({});

// Custom base URL for staging
const conversionStaging = rehive.extensions.conversion({
  baseUrl: "https://staging-conversion.services.rehive.com/api/",
});

// Authenticated fetch for custom endpoints
const response = await rehive.extensions.fetch("https://my-custom.services.rehive.com/api/data");
```

### Authenticated Fetch (for custom endpoints)

For API endpoints not covered by the generated SDK (e.g. the Builder service), use `createAuthenticatedFetch` to get a `fetch` function that automatically injects the auth token:

```typescript
import { createAuth } from "rehive/auth";
import { createAuthenticatedFetch } from "rehive";

const auth = createAuth({ storage: "local" });
await auth.login({ user: "email@example.com", password: "pass", company: "myco" });

// Create an authenticated fetch -- handles token refresh automatically
const authFetch = createAuthenticatedFetch(auth);

// Use it like regular fetch, but with auth headers injected
const response = await authFetch("https://builder.services.rehive.com/api/admin/build-tasks/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ config: { /* ... */ } }),
});
const data = await response.json();
```

This is also available on the `RehiveClient` wrapper as `rehive.extensions.fetch(url, options)`.

## React Integration

For a complete working example, see the [interactive demo](./demo).

```typescript
import { AuthProvider, useAuth } from "rehive/react";

function App() {
  return (
    <AuthProvider config={{ baseUrl: "https://api.rehive.com", storage: "local" }}>
      <Dashboard />
    </AuthProvider>
  );
}

function Dashboard() {
  const { authUser, authLoading, login, logout, rehive } = useAuth();

  if (authLoading) return <div>Loading...</div>;

  if (!authUser) {
    return (
      <button onClick={() => login({ user: "email@example.com", password: "pass", company: "myco" })}>
        Login
      </button>
    );
  }

  return (
    <div>
      <p>Logged in as {authUser.user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

The `useAuth` hook provides: `authUser`, `authLoading`, `authError`, `login`, `register`, `registerCompany`, `logout`, `logoutAll`, `refresh`, `getSessions`, `switchToSession`, `clearAllSessions`, `deleteChallenge`, and `rehive` (the full `RehiveClient` instance).

## Extension APIs

All 11 extension APIs follow the same pattern -- import the factory, pass `auth`, call methods:

```typescript
import { createConversionApi } from "rehive/extensions/conversion";
import { createRewardsApi } from "rehive/extensions/rewards";
import { createStellarApi } from "rehive/extensions/stellar";
import { createProductsApi } from "rehive/extensions/products";
import { createNotificationsApi } from "rehive/extensions/notifications";
import { createMassSendApi } from "rehive/extensions/mass-send";
import { createStellarTestnetApi } from "rehive/extensions/stellar-testnet";
import { createBusinessApi } from "rehive/extensions/business";
import { createPaymentRequestsApi } from "rehive/extensions/payment-requests";
import { createBridgeApi } from "rehive/extensions/bridge";
import { createAppApi } from "rehive/extensions/app";

const conversion = createConversionApi({ auth });
const rewards = createRewardsApi({ auth });
const stellar = createStellarApi({ auth });

// Each uses its default production base URL, or pass a custom one:
const conversionStaging = createConversionApi({
  auth,
  baseUrl: "https://staging-conversion.services.rehive.com/api/",
});
```

| Extension | Default Base URL |
|-----------|-----------------|
| Conversion | `https://conversion.services.rehive.com/api/` |
| Mass Send | `https://mass-send.services.rehive.com/api/` |
| Notifications | `https://notification.services.rehive.com/api/` |
| Products | `https://product.services.rehive.com/api/` |
| Rewards | `https://reward.services.rehive.com/api/` |
| Stellar | `https://stellar.services.rehive.com/api/` |
| Stellar Testnet | `https://stellar-testnet.services.rehive.com/api/` |
| Business | `https://business.services.rehive.com/api/` |
| Payment Requests | `https://payment-requests.services.rehive.com/api/` |
| Bridge | `https://bridge.services.rehive.com/api/` |
| App | `https://app.services.rehive.com/api/` |

## Error Handling

The SDK throws `ApiError` on non-200 responses:

```typescript
import { ApiError } from "rehive";

try {
  await user.userRetrieve();
} catch (error) {
  if (error instanceof ApiError) {
    console.log("Status:", error.status);    // 401, 400, 500, etc.
    console.log("Message:", error.message);  // Human-readable message
    console.log("Details:", error.error);    // Full API error response
  }
}
```

Subscribe to auth errors for global handling:

```typescript
const unsubscribe = auth.subscribeToErrors((error) => {
  if (error) {
    console.error("Auth error:", error.message);
  }
});
```

## Multi-Session Support

The auth module supports multiple concurrent sessions across different companies:

```typescript
// Login to multiple companies
await auth.login({ user: "user@example.com", password: "pass", company: "company-one" });
await auth.login({ user: "user@example.com", password: "pass", company: "company-two" });

// List and switch sessions
const sessions = auth.getSessions();                        // All sessions
const filtered = auth.getSessionsByCompany("company-one");  // By company
await auth.switchToSession("user-id", "company-two");       // Switch active

// Cleanup
await auth.clearAllSessions();  // Local only
await auth.logoutAll();         // Invalidates tokens on server
```

## Storage Options

```typescript
import { createAuth } from "rehive/auth";
import { WebStorageAdapter, MemoryStorageAdapter, AsyncStorageAdapter } from "rehive";

// localStorage (default in browser, auto-detected)
const auth = createAuth({ storage: "local" });

// In-memory (not persisted -- good for tests)
const auth = createAuth({ storage: "memory" });

// Custom adapter (e.g. React Native AsyncStorage)
import AsyncStorage from "@react-native-async-storage/async-storage";
const auth = createAuth({ storage: new AsyncStorageAdapter(AsyncStorage) });

// Or implement your own StorageAdapter
const auth = createAuth({
  storage: {
    getItem: async (key) => { /* ... */ },
    setItem: async (key, value) => { /* ... */ },
    removeItem: async (key) => { /* ... */ },
  },
});
```

## Auth Configuration

```typescript
import { createAuth, type AuthConfig } from "rehive/auth";

const auth = createAuth({
  baseUrl: "https://api.rehive.com",    // API base URL (default: https://api.rehive.com)
  storage: "local",                     // Storage adapter or shorthand
  token: "permanent-token",             // Server-side permanent token
  enableCrossTabSync: true,             // Sync auth across browser tabs (default: true)
});
```

## Architecture

```
rehive/
├── rehive/auth           → createAuth()
├── rehive/user           → createUserApi()
├── rehive/admin          → createAdminApi()
├── rehive/extensions/*   → create*Api() for each extension
├── rehive/react          → AuthProvider, useAuth
└── rehive                → RehiveClient wrapper + re-exports
```

Each module is a separate entry point with its own bundle. The `RehiveClient` wrapper composes all modules for convenience but is not required.

### How it works

1. `createAuth()` manages sessions, tokens, and refresh internally using its own openapi-ts client
2. Each API factory (`createUserApi`, `createAdminApi`, etc.) creates an openapi-ts client configured with `auth: () => auth.getToken()`
3. `bindSdk()` injects the client into every generated SDK function, preserving full type safety
4. All methods use v4 structured parameters: `{ query, body, path }`

## Available APIs

| API | Import | Methods |
|-----|--------|---------|
| Platform User | `rehive/user` | 203 |
| Platform Admin | `rehive/admin` | 360 |
| Conversion | `rehive/extensions/conversion` | 60 |
| Mass Send | `rehive/extensions/mass-send` | 18 |
| Notifications | `rehive/extensions/notifications` | 37 |
| Products | `rehive/extensions/products` | 241 |
| Rewards | `rehive/extensions/rewards` | 30 |
| Stellar | `rehive/extensions/stellar` | 101 |
| Stellar Testnet | `rehive/extensions/stellar-testnet` | 101 |
| Business | `rehive/extensions/business` | 84 |
| Payment Requests | `rehive/extensions/payment-requests` | 77 |
| Bridge | `rehive/extensions/bridge` | 27 |
| App | `rehive/extensions/app` | 46 |

**Total: 1,385 typed API methods across platform and extensions**

## Development

```bash
# Build
npm run build

# Type check
npm run typecheck

# Run tests
npm test

# Regenerate API clients from OpenAPI specs
npm run codegen:openapi-ts
```

See [CODEGEN.md](./CODEGEN.md) for the full code generation workflow.

## License

MIT License
