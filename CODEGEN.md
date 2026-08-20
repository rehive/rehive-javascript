# Code Generation Workflow

This SDK uses `@hey-api/openapi-ts` for all platform and extension specs.

The generator is a pinned devDependency, and the script runs the repo-local
binary rather than `npx @latest`. This matters: `openapi-ts` resolves
`typescript` from whatever tree it runs in, and its peer range allows
`>=6.0.0`. Under `npx` that resolves to TypeScript 7, whose default export no
longer exposes `SyntaxKind`, and the generator dies on the first spec. Running
from `node_modules` keeps it on the pinned `typescript` ^5.x.

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
- `src/extensions/billing/openapi-ts/`
- `src/extensions/builder/openapi-ts/`
- `src/extensions/rain/openapi-ts/`
- `src/extensions/alchemy/openapi-ts/`
- `src/extensions/sumsub/openapi-ts/`
- `src/extensions/mukuru/openapi-ts/`

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
- `https://billing.services.rehive.com/schema.json`
- `https://builder.services.rehive.com/schema.json`
- `https://rain.services.rehive.com/schema.json`
- `https://alchemy.services.rehive.com/schema.json`
- `https://sumsub.services.rehive.com/schema.json`
- `https://mukuru.services.rehive.com/schema.json`

## Unhealthy Schema Endpoints

Each spec is fetched with up to 3 attempts, since transient network failures are
common enough to otherwise skip a healthy service. A service that still fails does
not abort the run: the script keeps that service's existing committed output,
carries on with the rest, still applies the `fix-codegen-types.sh` pass, then lists
the skipped services and exits `1`. Check that summary before committing — an
unnoticed skip means the affected client is silently stale.

A skipped service is a server-side problem, not a repo one: the schema endpoint
is failing and only that service can fix it. Re-run codegen for the affected
client once the endpoint is healthy again.

## File uploads (multipart/form-data)

`openapi-ts` emits every operation with `'Content-Type': 'application/json'` and no
body serializer, including the ones that upload files. `scripts/fix-codegen-types.sh`
runs at the end of codegen and patches those:

1. `find-multipart-types.py` reads `types.gen.ts` and lists the `*Data` types whose
   `body` type declares a `Blob | File` field.
2. `apply-multipart-serializer.py` spreads `formDataBodySerializer` into each of those
   operations in `sdk.gen.ts` and sets `'Content-Type': null`, so the runtime picks
   `multipart/form-data` and its own boundary.

**A miss here is invisible at runtime.** With no body serializer the client falls back
to JSON, `JSON.stringify` turns a `File` into `{}`, and the request succeeds while
uploading nothing. That is how 4.5.0 shipped `usersDocumentsCreate`, `usersUpdate` and
`usersPartialUpdate` as JSON: a three-level-deep `annotations` object arrived in the
platform spec and defeated the detector's regex, which only tolerated one level of
nesting.

So both steps are built to fail loudly. Detection parses with brace counting rather
than a regex, and the patch step exits non-zero, naming the operations, if a body type
it was told to patch doesn't match the expected generated shape — better a red codegen
run than a silently JSON-only upload. `src/__tests__/codegen/multipart-serializer.test.ts`
re-checks the committed output independently, via the TypeScript compiler.

## Notes

- Compat adapters in `src/platform/*/rehive-*-api.ts` and `src/extensions/*/rehive-*-api.ts`
  keep public SDK access patterns stable (`.v3`, `.admin`, `.user`, etc.).
- Shared compatibility behavior is implemented in `src/shared/openapi-compat.ts`.

### File uploads the serializer cannot express

`formDataBodySerializer` only flattens top-level keys. A body that reaches a
binary only through a plain nested object is left unpatched and recorded in
`scripts/multipart-exceptions.json` with a reason — patching it would stringify
the object and drop the file anyway.

Anything reached through an `Array<...>` is patched normally: callers send
bracketed keys (`files[0][file]`), which are flat at runtime.

A file-carrying operation that is neither patchable nor listed fails codegen.
An unpatched upload compiles, runs and returns 200 while sending no file, so a
silent skip stays invisible until someone reports a lost document.
