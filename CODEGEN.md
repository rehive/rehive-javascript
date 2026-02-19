# Code Generation Workflow

This SDK now uses `@hey-api/openapi-ts@latest` for all platform and extension specs.

Runtime API files (`rehive-*-api.ts`) are compatibility adapters that preserve the
existing public SDK surface while delegating to generated `openapi-ts` outputs.

## Command

Generate all API outputs:

```bash
npm run codegen:openapi-ts
```

Clean generated folders first, then regenerate:

```bash
npm run codegen:openapi-ts:clean
```

## Output Locations

Generated files are written directly to:

- `src/platform/user/openapi-ts/`
- `src/platform/admin/openapi-ts/`
- `src/extensions/conversion/openapi-ts/`
- `src/extensions/mass-send/openapi-ts/`
- `src/extensions/notifications/openapi-ts/`
- `src/extensions/products/openapi-ts/`
- `src/extensions/rewards/openapi-ts/`
- `src/extensions/stellar/openapi-ts/`
- `src/extensions/stellar-testnet/openapi-ts/`
- `src/extensions/business/openapi-ts/`
- `src/extensions/payment-requests/openapi-ts/`
- `src/extensions/bridge/openapi-ts/`
- `src/extensions/app/openapi-ts/`

## Source Specs

The generation script (`scripts/codegen-openapi-ts.sh`) uses:

- `https://api.rehive.com/schema.json`
- `https://api.rehive.com/admin/schema.json`
- `https://conversion.services.rehive.com/schema.json`
- `https://mass-send.services.rehive.com/schema.json`
- `https://notification.services.rehive.com/schema.json`
- `https://product.services.rehive.com/schema.json`
- `https://reward.services.rehive.com/schema.json`
- `https://stellar.services.rehive.com/swagger/?format=openapi`
- `https://stellar-testnet.services.rehive.com/swagger/?format=openapi`
- `https://business.services.rehive.com/schema.json`
- `https://payment-requests.services.rehive.com/schema.json`
- `https://bridge.services.rehive.com/schema.json`
- `https://app.services.rehive.com/schema.json`

## Notes

- Compat adapters in `src/platform/*/rehive-*-api.ts` and `src/extensions/*/rehive-*-api.ts`
  keep public SDK access patterns stable (`.v3`, `.admin`, `.user`, etc.).
- Shared compatibility behavior is implemented in `src/shared/openapi-compat.ts`.
