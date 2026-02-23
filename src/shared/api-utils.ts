export class ApiError extends Error {
  status: number;
  error: string;

  constructor({ status, error, message }: { status: number; error: string; message: string }) {
    super(message);
    this.status = status;
    this.error = error;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export const normalizeFetch = (fetchFn: typeof fetch): typeof fetch => {
  const globalFetch =
    typeof globalThis !== 'undefined' ? globalThis.fetch : undefined;

  if (globalFetch && fetchFn === globalFetch) {
    return globalFetch.bind(globalThis);
  }

  return (...fetchParams: Parameters<typeof fetch>) => fetchFn(...fetchParams);
};
