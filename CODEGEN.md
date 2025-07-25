# Code Generation Workflow

This document describes how to update the generated API clients from swagger specifications.

## Structure

The SDK includes multiple API clients generated from swagger specs:

```
src/
├── platform/
│   ├── user/           # Platform User API (generated)
│   │   ├── data-contracts.ts
│   │   ├── http-client.ts
│   │   └── rehive-platform-user-api.ts
│   └── admin/          # Platform Admin API (generated)
│       ├── data-contracts.ts
│       ├── http-client.ts
│       └── rehive-platform-admin-api.ts
├── extensions/         # Service Extensions (generated)
│   ├── conversion/
│   ├── mass-send/
│   ├── notifications/
│   ├── products/
│   ├── rewards/
│   ├── stellar/
│   ├── stellar-testnet/
│   ├── business/
│   ├── payment-requests/
│   └── bridge/
├── shared/
│   └── http-client.ts  # Shared/customized HTTP client
└── auth/              # Auth functionality using Platform User API
```

## Updating Generated Files

### Prerequisites

Install swagger-typescript-api globally:
```bash
npm install -g swagger-typescript-api
```

### Platform User API

Generate the files from the swagger spec:
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path https://api.rehive.com/schema.json \
  --output src/platform/user/ \
  --name rehive-platform-user-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

### Platform Admin API

Generate the files from the swagger spec:
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path https://api.rehive.com/admin/schema.json \
  --output src/platform/admin/ \
  --name rehive-platform-admin-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

### Extensions

For each extension, create directory `src/extensions/{extension-name}/` and generate:

#### Conversion Extension
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path https://conversion.services.rehive.com/schema.json \
  --output src/extensions/conversion/ \
  --name rehive-conversion-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

#### Mass Send Extension
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path https://mass-send.services.rehive.com/schema.json \
  --output src/extensions/mass-send/ \
  --name rehive-mass-send-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

#### Notifications Extension
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path https://notification.services.rehive.com/schema.json \
  --output src/extensions/notifications/ \
  --name rehive-notifications-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

#### Products Extension
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path https://product.services.rehive.com/schema.json \
  --output src/extensions/products/ \
  --name rehive-products-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

#### Rewards Extension
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path https://reward.services.rehive.com/schema.json \
  --output src/extensions/rewards/ \
  --name rehive-rewards-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

#### Stellar Mainnet Extension
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path "https://stellar.services.rehive.com/swagger/?format=openapi" \
  --output src/extensions/stellar/ \
  --name rehive-stellar-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

#### Stellar Testnet Extension
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path "https://stellar-testnet.services.rehive.com/swagger/?format=openapi" \
  --output src/extensions/stellar-testnet/ \
  --name rehive-stellar-testnet-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

#### Business Extension
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path https://business.services.rehive.com/schema.json \
  --output src/extensions/business/ \
  --name rehive-business-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

#### Payment Requests Extension
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path https://payment-requests.services.rehive.com/schema.json \
  --output src/extensions/payment-requests/ \
  --name rehive-payment-requests-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

#### Bridge Extension
```bash
npx swagger-typescript-api generate \
  --templates ./swagger-templates \
  --path https://bridge.services.rehive.com/schema.json \
  --output src/extensions/bridge/ \
  --name rehive-bridge-api \
  --extract-request-params \
  --extract-response-error \
  --extract-response-body
```

**After generating each extension:**
1. Update the generated `http-client.ts` to re-export shared client:
```typescript
export * from '../../shared/http-client.js';
```
2. Export from main index.ts

## Customizations

### Shared HTTP Client

The shared HTTP client (`src/shared/http-client.ts`) includes customizations:
- Token expiration checking
- Automatic token refresh
- Custom error handling
- Support for React Native and web platforms

### Auth Integration

The auth system (`src/auth/`) uses the Platform User API for:
- Login (`/3/auth/login/`)
- Register (`/3/auth/register/`)
- Logout (`/3/auth/logout/`)
- Token refresh (when available)

## Build Process

After updating generated files:

1. Build the SDK:
```bash
npm run build
```

2. Update the main app dependencies:
```bash
cd ../../ && npm install
```

## Testing

Test the updated APIs by running the main application:
```bash
npm run dev
```

Check that authentication and API calls work correctly.