import type { Auth } from '../auth/create-auth.js';
import { ApiError, normalizeFetch } from './api-utils.js';

export interface ApiFactoryConfig {
  auth: Auth;
  baseUrl?: string;
}

function errorHandlingFetch(baseFetch: typeof fetch): typeof fetch {
  return async (...args: Parameters<typeof fetch>): Promise<Response> => {
    const response = await baseFetch(...args);
    if (!response.ok) {
      const errorText = await response.text();
      let errorJson: any = null;
      try {
        errorJson = JSON.parse(errorText);
      } catch {
        // not JSON
      }
      throw new ApiError({
        status: response.status,
        error: errorJson || errorText,
        message:
          errorJson?.error ||
          errorJson?.message ||
          'A server error occurred. HTTPStatus: ' + response.status,
      });
    }
    return response;
  };
}

export function buildClientConfig(config: ApiFactoryConfig, defaultBaseUrl: string) {
  return {
    baseUrl: config.baseUrl || defaultBaseUrl,
    responseStyle: 'data' as const,
    fetch: errorHandlingFetch(normalizeFetch(globalThis.fetch)),
    auth: async () => {
      const token = await config.auth.getToken();
      return token ? `Token ${token}` : undefined;
    },
  };
}
