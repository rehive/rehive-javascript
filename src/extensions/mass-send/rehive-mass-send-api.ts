/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** This serializer can be used if only a `status` is required in the response. */
export interface ActionResponse {
  /** @default "sucess" */
  status?: string;
}

/**
 * Serialize the activation data, should be a token that represents an admin
 * user.
 */
export interface Activate {
  token: string;
  id: string;
  name: string;
  /** @format uuid */
  secret: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompany {
  id: string;
  /** @format uuid */
  secret: string;
  /** @maxLength 100 */
  name?: string | null;
}

export interface AdminCompanyResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminCompany;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminListCreateTransactionBatch {
  id: string;
  /** @format uri */
  file: string;
  file_hash: string | null;
  transactions_total: number;
  transactions_failed: number;
  transactions_succeeded: number;
  created: number;
  updated: number;
  status: string;
  errors: string[];
  /** @default true */
  published?: boolean;
  /**
   * * `admin` - Admin
   * * `user` - User
   */
  section: "admin" | "user";
}

export interface AdminListCreateTransactionBatchResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminListCreateTransactionBatch;
}

/**
 * Serialize the deactivation data, should be a token that represents an admin
 * user.
 */
export interface Deactivate {
  token: string;
  /** @default false */
  purge?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ListCreateTransactionBatch {
  id: string;
  /** @format uri */
  file: string;
  file_hash: string | null;
  transactions_total: number;
  transactions_failed: number;
  transactions_succeeded: number;
  created: number;
  updated: number;
  status: string;
  errors: string[];
  /** @default true */
  published?: boolean;
}

export interface ListCreateTransactionBatchResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ListCreateTransactionBatch;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ListTransaction {
  id: number;
  /** @format date-time */
  updated: string;
  /** @format date-time */
  created: string;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  amount?: string | null;
  /** @maxLength 50 */
  currency?: string | null;
  /** @maxLength 100 */
  user?: string | null;
  /** @maxLength 100 */
  recipient?: string | null;
  /** @maxLength 100 */
  credit_account?: string | null;
  credit_metadata?: Record<string, any>;
  /** @maxLength 100 */
  credit_note?: string | null;
  /** @maxLength 100 */
  credit_reference?: string | null;
  /** @maxLength 100 */
  credit_subtype?: string | null;
  /** @maxLength 100 */
  debit_account?: string | null;
  debit_metadata?: Record<string, any>;
  /** @maxLength 100 */
  debit_note?: string | null;
  /** @maxLength 100 */
  debit_reference?: string | null;
  /** @maxLength 100 */
  debit_subtype?: string | null;
  uploaded_to_rehive?: boolean;
  rehive_error?: string | null;
  processed?: boolean;
  /** @maxLength 200 */
  idempotency_key?: string | null;
}

export interface PaginatedAdminListCreateTransactionBatchList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: AdminListCreateTransactionBatch[];
}

export interface PaginatedAdminListCreateTransactionBatchListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminListCreateTransactionBatchList;
}

export interface PaginatedListCreateTransactionBatchList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: ListCreateTransactionBatch[];
}

export interface PaginatedListCreateTransactionBatchListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedListCreateTransactionBatchList;
}

export interface PaginatedListTransactionList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: ListTransaction[];
}

export interface PaginatedListTransactionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedListTransactionList;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCompany {
  id?: string;
  /** @format uuid */
  secret?: string;
  /** @maxLength 100 */
  name?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedTransactionBatch {
  id?: string;
  /** @format uri */
  file?: string;
  file_hash?: string | null;
  transactions_total?: number;
  transactions_failed?: number;
  transactions_succeeded?: number;
  created?: number;
  updated?: number;
  status?: string;
  errors?: string[];
  /** @default true */
  published?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface TransactionBatch {
  id: string;
  /** @format uri */
  file: string;
  file_hash: string | null;
  transactions_total: number;
  transactions_failed: number;
  transactions_succeeded: number;
  created: number;
  updated: number;
  status: string;
  errors: string[];
  /** @default true */
  published?: boolean;
}

export interface TransactionBatchResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: TransactionBatch;
}

export interface Webhook {
  id: string;
  /**
   * * `currency.create` - currency.create
   * * `currency.update` - currency.update
   */
  event: "currency.create" | "currency.update";
  company: string;
  data: Record<string, any>;
}

export type ActivateCreateData = ActionResponse;

export type AdminCompanyRetrieveData = AdminCompanyResponse;

export type AdminCompanyUpdateData = AdminCompanyResponse;

export type AdminCompanyPartialUpdateData = AdminCompanyResponse;

export interface AdminUploadsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  section?: string;
  user?: string;
}

export type AdminUploadsListData =
  PaginatedAdminListCreateTransactionBatchListResponse;

export type AdminUploadsCreateData = AdminListCreateTransactionBatchResponse;

export type AdminUploadsRetrieveData = AdminListCreateTransactionBatchResponse;

export type AdminUploadsUpdateData = AdminListCreateTransactionBatchResponse;

export type AdminUploadsPartialUpdateData =
  AdminListCreateTransactionBatchResponse;

export interface AdminUploadsTransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  batchId: string;
}

export type AdminUploadsTransactionsListData =
  PaginatedListTransactionListResponse;

export type DeactivateCreateData = ActionResponse;

export interface UploadsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UploadsListData = PaginatedListCreateTransactionBatchListResponse;

export type UploadsCreateData = ListCreateTransactionBatchResponse;

export type UploadsRetrieveData = TransactionBatchResponse;

export type UploadsUpdateData = TransactionBatchResponse;

export type UploadsPartialUpdateData = TransactionBatchResponse;

export interface UploadsTransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  batchId: string;
}

export type UploadsTransactionsListData = PaginatedListTransactionListResponse;

export type WebhookCreateData = ActionResponse;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://mass-send.services.rehive.com/api/1/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Mass Send Service API
 * @version 1 (1)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://mass-send.services.rehive.com/api/1/
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **Mass Send Service API** is used for sending baatches of transactions via CSV uploads in Rehive.
 *
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  activate = {
    /**
     * No description
     *
     * @tags activate
     * @name ActivateCreate
     * @summary Activate service
     * @request POST:/activate/
     * @secure
     */
    activateCreate: (data: Activate, params: RequestParams = {}) =>
      this.request<ActivateCreateData, any>({
        path: `/activate/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags admin
     * @name AdminCompanyRetrieve
     * @summary Retrieve company
     * @request GET:/admin/company/
     * @secure
     */
    adminCompanyRetrieve: (params: RequestParams = {}) =>
      this.request<AdminCompanyRetrieveData, any>({
        path: `/admin/company/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCompanyUpdate
     * @summary Update company
     * @request PUT:/admin/company/
     * @secure
     */
    adminCompanyUpdate: (data: AdminCompany, params: RequestParams = {}) =>
      this.request<AdminCompanyUpdateData, any>({
        path: `/admin/company/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCompanyPartialUpdate
     * @summary Partially update company
     * @request PATCH:/admin/company/
     * @secure
     */
    adminCompanyPartialUpdate: (
      data: PatchedAdminCompany,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyPartialUpdateData, any>({
        path: `/admin/company/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminUploadsList
     * @summary List transaction batches
     * @request GET:/admin/uploads/
     * @secure
     */
    adminUploadsList: (
      query: AdminUploadsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminUploadsListData, any>({
        path: `/admin/uploads/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminUploadsCreate
     * @summary Create transaction batch
     * @request POST:/admin/uploads/
     * @secure
     */
    adminUploadsCreate: (
      data: AdminListCreateTransactionBatch,
      params: RequestParams = {},
    ) =>
      this.request<AdminUploadsCreateData, any>({
        path: `/admin/uploads/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminUploadsRetrieve
     * @summary Retrieve transaction batch
     * @request GET:/admin/uploads/{batch_id}/
     * @secure
     */
    adminUploadsRetrieve: (batchId: string, params: RequestParams = {}) =>
      this.request<AdminUploadsRetrieveData, any>({
        path: `/admin/uploads/${batchId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminUploadsUpdate
     * @summary Update transaction batch
     * @request PUT:/admin/uploads/{batch_id}/
     * @secure
     */
    adminUploadsUpdate: (
      batchId: string,
      data: TransactionBatch,
      params: RequestParams = {},
    ) =>
      this.request<AdminUploadsUpdateData, any>({
        path: `/admin/uploads/${batchId}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminUploadsPartialUpdate
     * @summary Partially update transaction batch
     * @request PATCH:/admin/uploads/{batch_id}/
     * @secure
     */
    adminUploadsPartialUpdate: (
      batchId: string,
      data: PatchedTransactionBatch,
      params: RequestParams = {},
    ) =>
      this.request<AdminUploadsPartialUpdateData, any>({
        path: `/admin/uploads/${batchId}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminUploadsTransactionsList
     * @summary List transactions
     * @request GET:/admin/uploads/{batch_id}/transactions/
     * @secure
     */
    adminUploadsTransactionsList: (
      { batchId, ...query }: AdminUploadsTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminUploadsTransactionsListData, any>({
        path: `/admin/uploads/${batchId}/transactions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  deactivate = {
    /**
     * No description
     *
     * @tags deactivate
     * @name DeactivateCreate
     * @summary Deactivate service
     * @request POST:/deactivate/
     * @secure
     */
    deactivateCreate: (data: Deactivate, params: RequestParams = {}) =>
      this.request<DeactivateCreateData, any>({
        path: `/deactivate/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  uploads = {
    /**
     * No description
     *
     * @tags uploads
     * @name UploadsList
     * @summary List transaction batches
     * @request GET:/uploads/
     * @secure
     */
    uploadsList: (query: UploadsListParams, params: RequestParams = {}) =>
      this.request<UploadsListData, any>({
        path: `/uploads/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags uploads
     * @name UploadsCreate
     * @summary Create transaction batch
     * @request POST:/uploads/
     * @secure
     */
    uploadsCreate: (
      data: ListCreateTransactionBatch,
      params: RequestParams = {},
    ) =>
      this.request<UploadsCreateData, any>({
        path: `/uploads/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags uploads
     * @name UploadsRetrieve
     * @summary Retrieve transaction batch
     * @request GET:/uploads/{batch_id}/
     * @secure
     */
    uploadsRetrieve: (batchId: string, params: RequestParams = {}) =>
      this.request<UploadsRetrieveData, any>({
        path: `/uploads/${batchId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags uploads
     * @name UploadsUpdate
     * @summary Update transaction batch
     * @request PUT:/uploads/{batch_id}/
     * @secure
     */
    uploadsUpdate: (
      batchId: string,
      data: TransactionBatch,
      params: RequestParams = {},
    ) =>
      this.request<UploadsUpdateData, any>({
        path: `/uploads/${batchId}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags uploads
     * @name UploadsPartialUpdate
     * @summary Partially update transaction batch
     * @request PATCH:/uploads/{batch_id}/
     * @secure
     */
    uploadsPartialUpdate: (
      batchId: string,
      data: PatchedTransactionBatch,
      params: RequestParams = {},
    ) =>
      this.request<UploadsPartialUpdateData, any>({
        path: `/uploads/${batchId}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags uploads
     * @name UploadsTransactionsList
     * @summary List transactions
     * @request GET:/uploads/{batch_id}/transactions/
     * @secure
     */
    uploadsTransactionsList: (
      { batchId, ...query }: UploadsTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UploadsTransactionsListData, any>({
        path: `/uploads/${batchId}/transactions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  webhook = {
    /**
     * No description
     *
     * @tags webhook
     * @name WebhookCreate
     * @summary Receive Platform webhook
     * @request POST:/webhook/
     * @secure
     */
    webhookCreate: (data: Webhook, params: RequestParams = {}) =>
      this.request<WebhookCreateData, any>({
        path: `/webhook/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
