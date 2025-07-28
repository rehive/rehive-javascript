# Custom Swagger TypeScript API Templates

These templates have been customized from the default swagger-typescript-api templates to improve the developer experience when using the Rehive SDK.

## Key Changes

### 1. **http-client.ejs**
- **Changed**: Instead of generating a full HTTP client, we now import and extend the shared HTTP client from `src/shared/http-client.ts`
- **Why**: 
  - Maintains custom error handling via `withErrorHandling` wrapper
  - Keeps all HTTP client logic in one place
  - Easier to maintain and update

### 2. **procedure-call.ejs** 
- **Changed**: Modified the return type from `Promise<HttpResponse<T, E>>` to `Promise<T>`
- **Why**: This eliminates the `response.data.data` pattern that occurs when:
  - swagger-typescript-api wraps responses in a `data` property
  - Rehive API responses also have a `data` property
  - Results in awkward `response.data.data` access patterns

## Result

Before:
```typescript
const response = await api.auth.user.retrieve();
const user = response.data.data; // Awkward double data access
```

After:
```typescript
const user = await api.auth.user.retrieve(); // Clean, direct access
```

## Error Handling

The error handling remains unchanged - errors are still caught and thrown as `ApiError` instances with proper status codes and error details via the `withErrorHandling` wrapper in the shared http-client.

## Regenerating Templates

If you need to update these templates based on newer swagger-typescript-api versions:

1. Generate fresh templates: `npx swagger-typescript-api generate-templates -o swagger-templates-new/`
2. Compare with our customized versions
3. Apply our modifications to the new templates
4. Test thoroughly before replacing