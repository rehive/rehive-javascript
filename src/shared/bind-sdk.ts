type SdkModule = Record<string, unknown>;

// ===========================================================================
// Type utilities
// ===========================================================================

/**
 * Strip `undefined` from the resolved type of a Promise.
 *
 * The openapi-ts codegen defaults `ThrowOnError` to `false`, which makes
 * every SDK function return `Promise<T | undefined>`.  Our
 * `errorHandlingFetch` wrapper throws on non-ok responses before the
 * openapi-ts client ever sees them, so the `undefined` (error) branch is
 * unreachable at runtime.  This utility aligns the types with that reality.
 */
type StrictReturn<T> = T extends Promise<infer U> ? Promise<NonNullable<U>> : T;

type StripClient<T> =
  T extends (options?: infer O) => infer R
    ? (options?: Omit<O & {}, 'client'>) => StrictReturn<R>
    : T extends (options: infer O) => infer R
      ? (options: Omit<O, 'client'>) => StrictReturn<R>
      : T;

export type BoundSdk<M extends SdkModule> = {
  [K in keyof M as M[K] extends (...args: any[]) => any ? K : never]: StripClient<M[K]>;
};

// ===========================================================================
// bindSdk
//
// Bind each SDK function to a configured client instance so callers don't
// need to pass `client` on every call.
// ===========================================================================

export function bindSdk<M extends SdkModule>(
  sdkModule: M,
  client: unknown,
): BoundSdk<M> {
  const bound: Record<string, unknown> = {};

  for (const [name, fn] of Object.entries(sdkModule)) {
    if (typeof fn !== 'function') continue;
    bound[name] = (options?: any) => (fn as Function)({ ...options, client });
  }

  return bound as BoundSdk<M>;
}
