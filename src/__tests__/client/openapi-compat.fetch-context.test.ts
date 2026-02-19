import { OpenApiCompatApi } from '../../shared/openapi-compat.js';

describe('OpenApiCompatApi fetch context', () => {
  const originalFetch = globalThis.fetch;

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  const createStrictFetch = () =>
    jest.fn(function (this: unknown) {
      if (this !== globalThis) {
        throw new TypeError("Failed to execute 'fetch' on 'Window': Illegal invocation");
      }
      return Promise.resolve({
        ok: true,
        json: async () => ({ result: 'ok' }),
      } as Response);
    }) as unknown as typeof fetch;

  const createMockClient = (onFetch?: (fn: typeof fetch) => void) =>
    (config?: Record<string, any>) => {
      if (onFetch && config) onFetch(config.fetch);
      return { request: async () => ({}) };
    };

  it('normalizes the default fetch when no customFetch is provided', async () => {
    const strictFetch = createStrictFetch();
    globalThis.fetch = strictFetch;

    let capturedFetch!: typeof fetch;

    new OpenApiCompatApi({
      apiConfig: { baseUrl: 'https://example.com' },
      createClient: createMockClient((fn) => { capturedFetch = fn; }),
      defaultBaseUrl: 'https://example.com',
      sdk: {},
    });

    expect(capturedFetch).toBeDefined();

    const response = await capturedFetch('https://example.com/test');
    const data = await response.json();

    expect(data).toEqual({ result: 'ok' });
    expect(strictFetch).toHaveBeenCalledTimes(1);
  });

  it('normalizes an explicitly passed globalThis.fetch reference', async () => {
    const strictFetch = createStrictFetch();
    globalThis.fetch = strictFetch;

    let capturedFetch!: typeof fetch;

    new OpenApiCompatApi({
      apiConfig: {
        baseUrl: 'https://example.com',
        customFetch: globalThis.fetch,
      },
      createClient: createMockClient((fn) => { capturedFetch = fn; }),
      defaultBaseUrl: 'https://example.com',
      sdk: {},
    });

    expect(capturedFetch).toBeDefined();

    const response = await capturedFetch('https://example.com/test');
    const data = await response.json();

    expect(data).toEqual({ result: 'ok' });
    expect(strictFetch).toHaveBeenCalledTimes(1);
  });
});
