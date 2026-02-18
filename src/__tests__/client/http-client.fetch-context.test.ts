import { HttpClient } from '../../shared/http-client.js';

describe('HttpClient fetch context', () => {
  it('binds global fetch to avoid illegal invocation errors', async () => {
    const originalFetch = globalThis.fetch;

    const strictFetch = jest.fn(function (this: unknown) {
      if (this !== globalThis) {
        throw new TypeError("Failed to execute 'fetch' on 'Window': Illegal invocation");
      }

      return Promise.resolve({
        ok: true,
        json: async () => ({ ok: true }),
      } as Response);
    }) as unknown as typeof fetch;

    globalThis.fetch = strictFetch;

    try {
      const client = new HttpClient({
        baseUrl: 'https://example.com',
        customFetch: globalThis.fetch,
      });

      const response = await client.request<{ ok: boolean }>({
        path: '/test',
        method: 'GET',
        format: 'json',
      });

      expect(response).toEqual({ ok: true });
      expect(strictFetch).toHaveBeenCalledTimes(1);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
});
