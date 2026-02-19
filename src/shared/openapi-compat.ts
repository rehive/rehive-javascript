import { withErrorHandling } from './api-utils.js';

type HttpMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'
  | 'head'
  | 'options'
  | 'trace'
  | 'connect';

type SdkFunction = (options?: Record<string, any>) => any;

type Operation = {
  method: HttpMethod;
  pathKeys: string[];
  fn: SdkFunction;
};

type SdkModule = Record<string, unknown>;

type CreateClientFn = (config?: Record<string, any>) => Record<string, any>;

const HTTP_METHODS: HttpMethod[] = [
  'get',
  'post',
  'put',
  'patch',
  'delete',
  'head',
  'options',
  'trace',
  'connect',
];

const REQUEST_PARAM_KEYS = new Set([
  'secure',
  'type',
  'query',
  'format',
  'body',
  'baseUrl',
  'cancelToken',
  'credentials',
  'headers',
  'redirect',
  'referrerPolicy',
  'cache',
  'integrity',
  'keepalive',
  'method',
  'mode',
  'priority',
  'referrer',
  'signal',
  'window',
]);

const OPERATIONS_CACHE = new WeakMap<SdkModule, Record<string, Operation>>();

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  secure?: boolean;
  path: string;
  type?: ContentType | string;
  query?: QueryParamsType;
  format?: ResponseFormat;
  body?: unknown;
  baseUrl?: string;
  cancelToken?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type BuildApiArgs<SecurityDataType> = {
  apiConfig: ApiConfig<SecurityDataType>;
  createClient: CreateClientFn;
  defaultBaseUrl: string;
  sdk: SdkModule;
};

const pathKeysFromUrl = (url: string): string[] => {
  const matches = url.matchAll(/\{([^}]+)\}/g);
  const keys: string[] = [];
  for (const match of matches) {
    if (match[1]) {
      keys.push(match[1]);
    }
  }
  return keys;
};

const isPlainObject = (value: unknown): value is Record<string, any> =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value);

const hasKnownRequestParamKeys = (value: Record<string, any>) =>
  Object.keys(value).some((key) => REQUEST_PARAM_KEYS.has(key));

const resolveAuthorizationFromHeaders = (headers: unknown): string | undefined => {
  if (!headers) {
    return undefined;
  }

  if (headers instanceof Headers) {
    return headers.get('Authorization') || headers.get('authorization') || undefined;
  }

  if (isPlainObject(headers)) {
    const authHeader = headers.Authorization ?? headers.authorization;
    return typeof authHeader === 'string' ? authHeader : undefined;
  }

  return undefined;
};

const extractOperationResult = (sdkFn: SdkFunction): { method: HttpMethod; url: string } | null => {
  const fakeClient = Object.fromEntries(
    HTTP_METHODS.map((method) => [
      method,
      (options: Record<string, any>) => ({ method, url: options?.url }),
    ]),
  );

  try {
    const result = sdkFn({ client: fakeClient });
    if (!isPlainObject(result)) {
      return null;
    }

    if (!result.method || !result.url) {
      return null;
    }

    return {
      method: result.method as HttpMethod,
      url: result.url as string,
    };
  } catch {
    return null;
  }
};

const buildOperations = (sdk: SdkModule): Record<string, Operation> => {
  const cached = OPERATIONS_CACHE.get(sdk);
  if (cached) {
    return cached;
  }

  const operations: Record<string, Operation> = {};

  for (const [name, value] of Object.entries(sdk)) {
    if (typeof value !== 'function') {
      continue;
    }

    const result = extractOperationResult(value as SdkFunction);
    if (!result) {
      continue;
    }

    operations[name] = {
      fn: value as SdkFunction,
      method: result.method,
      pathKeys: pathKeysFromUrl(result.url),
    };
  }

  OPERATIONS_CACHE.set(sdk, operations);
  return operations;
};

export class OpenApiCompatApi<SecurityDataType = unknown> {
  public baseUrl = '';
  private securityData: SecurityDataType | null = null;
  private readonly securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private readonly baseApiParams: RequestParams;
  private readonly customFetch: typeof fetch;
  protected readonly operations: Record<string, Operation>;
  protected readonly client: ReturnType<CreateClientFn>;
  [key: string]: any;

  constructor({ apiConfig, createClient, defaultBaseUrl, sdk }: BuildApiArgs<SecurityDataType>) {
    this.baseUrl = apiConfig.baseUrl || defaultBaseUrl;
    this.securityWorker = apiConfig.securityWorker;
    this.customFetch = apiConfig.customFetch || fetch;
    this.baseApiParams = apiConfig.baseApiParams || {};
    this.operations = buildOperations(sdk);

    this.client = createClient({
      baseUrl: this.baseUrl,
      responseStyle: 'data',
      throwOnError: true,
      fetch: (...fetchParams: Parameters<typeof fetch>) =>
        withErrorHandling(this.customFetch(...fetchParams)),
      auth: async () => {
        const workerParams = this.securityWorker
          ? await this.securityWorker(this.securityData)
          : undefined;

        return (
          resolveAuthorizationFromHeaders(workerParams?.headers) ||
          (typeof this.securityData === 'string'
            ? (this.securityData as unknown as string)
            : undefined)
        );
      },
    });
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  public setExpires = (_expires: number | null) => {
    // Compatibility no-op for SDK internals that conditionally call setExpires.
  };

  public abortRequest = (_cancelToken: unknown) => {
    // openapi-ts fetch client uses AbortSignal directly; cancel-token map is not kept here.
  };

  public request = async <T = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken: _cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const options: Record<string, any> = {
      ...params,
      body,
      query,
      url: path,
      method: String(params.method || 'GET').toUpperCase(),
    };

    if (type) {
      options.headers = {
        ...(options.headers || {}),
        'Content-Type': type,
      };
    }

    if (baseUrl) {
      options.baseUrl = baseUrl;
    }

    if (format) {
      options.parseAs = format;
    }

    if (secure === false) {
      options.security = [];
    } else if (secure === true) {
      options.security = [{ name: 'Authorization', type: 'apiKey' }];
    }

    return this.client.request(options);
  };

  protected bindOperationsToRoot = () => {
    for (const name of Object.keys(this.operations)) {
      this[name] = (...args: any[]) => this.callOperation(name, args);
    }
  };

  protected bindOperationsToGroup = (group: string) => {
    this[group] = this[group] || {};
    for (const name of Object.keys(this.operations)) {
      this[group][name] = (...args: any[]) => this.callOperation(name, args);
    }
  };

  protected bindOperationsByPrefix = () => {
    for (const name of Object.keys(this.operations)) {
      const prefixMatch = name.match(/^[a-z0-9]+/);
      const group = prefixMatch ? prefixMatch[0] : 'api';

      this[group] = this[group] || {};
      this[group][name] = (...args: any[]) => this.callOperation(name, args);
      this[name] = this[group][name];
    }
  };

  private callOperation = (operationName: string, args: any[]) => {
    const operation = this.operations[operationName];
    if (!operation) {
      throw new Error(`Unknown operation: ${operationName}`);
    }

    const requestParams = this.extractRequestParams(args);
    const data = this.extractOperationData(operation, args);
    const requestOptions = this.buildRequestOptions(data, requestParams);

    return operation.fn({
      ...requestOptions,
      client: this.client,
    });
  };

  private extractRequestParams = (args: any[]): RequestParams => {
    if (!args.length) {
      return {};
    }

    const candidate = args[args.length - 1];
    if (!isPlainObject(candidate)) {
      return {};
    }

    if (!hasKnownRequestParamKeys(candidate)) {
      return {};
    }

    args.pop();
    return candidate;
  };

  private extractOperationData = (operation: Operation, args: any[]) => {
    const data: Record<string, any> = {};
    const method = operation.method.toLowerCase();
    const bodyMethod = method === 'post' || method === 'put' || method === 'patch';

    if (operation.pathKeys.length > 0) {
      const firstArg = args[0];
      const objectStylePath =
        isPlainObject(firstArg) &&
        operation.pathKeys.some((key) => Object.prototype.hasOwnProperty.call(firstArg, key));

      if (objectStylePath) {
        const source = args.shift() as Record<string, any>;
        data.path = {};
        for (const key of operation.pathKeys) {
          data.path[key] = source[key];
        }

        const query = { ...source };
        for (const key of operation.pathKeys) {
          delete query[key];
        }
        if (Object.keys(query).length > 0) {
          data.query = query;
        }
      } else {
        data.path = {};
        for (const key of operation.pathKeys) {
          if (args.length > 0) {
            data.path[key] = args.shift();
          }
        }
      }
    }

    if (bodyMethod) {
      if (args.length > 0) {
        data.body = args.shift();
      }
      if (args.length > 0 && isPlainObject(args[0])) {
        data.query = { ...(data.query || {}), ...(args.shift() as Record<string, any>) };
      }
    } else if (args.length > 0 && isPlainObject(args[0])) {
      data.query = { ...(data.query || {}), ...(args.shift() as Record<string, any>) };
    }

    return data;
  };

  private buildRequestOptions = (operationData: Record<string, any>, params: RequestParams) => {
    const merged = {
      ...(this.baseApiParams as Record<string, any>),
      ...(params as Record<string, any>),
    };
    const {
      secure,
      format,
      type,
      query,
      body,
      baseUrl,
      cancelToken: _cancelToken,
      ...rest
    } = merged;

    const options: Record<string, any> = {
      ...rest,
      ...operationData,
    };

    if (query && isPlainObject(query)) {
      options.query = { ...(options.query || {}), ...query };
    }

    if (typeof body !== 'undefined') {
      options.body = body;
    }

    if (format) {
      options.parseAs = format;
    }

    if (baseUrl) {
      options.baseUrl = baseUrl;
    }

    if (type) {
      options.headers = {
        ...(options.headers || {}),
        'Content-Type': type,
      };
    }

    if (secure === false) {
      options.security = [];
    }

    return options;
  };
}
