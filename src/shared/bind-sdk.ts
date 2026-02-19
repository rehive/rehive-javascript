type SdkModule = Record<string, unknown>;

type StripClient<T> =
  T extends (options?: infer O) => infer R
    ? (options?: Omit<O & {}, 'client'>) => R
    : T extends (options: infer O) => infer R
      ? (options: Omit<O, 'client'>) => R
      : T;

export type BoundSdk<M extends SdkModule> = {
  [K in keyof M as M[K] extends (...args: any[]) => any ? K : never]: StripClient<M[K]>;
};

export function bindSdk<M extends SdkModule>(sdkModule: M, client: unknown): BoundSdk<M> {
  const bound: Record<string, unknown> = {};
  for (const [name, fn] of Object.entries(sdkModule)) {
    if (typeof fn === 'function') {
      bound[name] = (options: Record<string, unknown> = {}) =>
        (fn as Function)({ ...options, client });
    }
  }
  return bound as BoundSdk<M>;
}
