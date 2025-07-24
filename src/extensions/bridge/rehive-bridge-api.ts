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
  status: string;
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
export interface AdminCard {
  id: string;
  currency: Currency;
  account: string | null;
  bridge_id: string | null;
  user: string;
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
  /**
   * * `test` - Test
   * * `production` - Production
   */
  mode: "test" | "production";
  bridge_api_key: string;
  bridge_webhook_id: string | null;
  admin_user_bridge_id: string | null;
}

export interface AdminCompanyResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCompany;
}

export interface AdminCryptoReturnPolicy {
  id: string;
  refund_destination_address?: string | null;
  refund_destination_blockchain_memo?: string | null;
  refund_destination_chain?: string | null;
  refund_destination_currency?: string | null;
  /**
   * * `refund_to_sender` - refund_to_sender
   * * `static_address` - static_address
   */
  strategy: "refund_to_sender" | "static_address";
}

export type AdminCryptoReturnPolicyList = AdminCryptoReturnPolicy[];

export interface AdminCryptoReturnPolicyListResponse {
  status: string;
  data: AdminCryptoReturnPolicyList;
}

export interface AdminCryptoReturnPolicyResponse {
  status: string;
  data: AdminCryptoReturnPolicy;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCurrency {
  code: string;
  /** * `usdc` - Usdc */
  bridge_code?: "usdc";
  /** * `solana` - Solana */
  bridge_chain?: "solana";
  display_code: string | null;
  description: string | null;
  symbol: string | null;
  unit: string | null;
  divisibility: number;
  manager: string | null;
}

export interface AdminCurrencyResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCurrency;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminExtendedCard {
  id: string;
  currency: Currency;
  account: string | null;
  bridge_id: string | null;
  client_reference_id: string;
  card_image_url: string;
  status: string;
  status_reason: string;
  card_details: Record<string, any>;
  balances: Record<string, any>;
  freezes: Record<string, any>;
  funding_instructions: Record<string, any>;
  user: string;
}

export interface AdminExtendedCardResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminExtendedCard;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminPaymentProcessorQuote {
  id: string;
  /** @maxLength 256 */
  account?: string | null;
  currency: Record<string, any>;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  amount?: string | null;
  /** @format date-time */
  expiration_date?: string | null;
  payer_user?: Record<string, any>;
  /**
   * * `bank` - Bank
   * * `wallet` - Wallet
   * * `crypto` - Crypto
   */
  processor_type: "bank" | "wallet" | "crypto";
}

export interface AdminPaymentProcessorQuoteResponse {
  reference: string;
  account: string;
  deposit_details: Record<string, any>;
}

export interface AdminPaymentProcessorQuoteResponseResponse {
  status: string;
  data: AdminPaymentProcessorQuoteResponse;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateCompany {
  id: string;
  /** @format uuid */
  secret: string;
  /**
   * * `test` - Test
   * * `production` - Production
   */
  mode: "test" | "production";
  bridge_api_key?: string;
  bridge_webhook_id: string | null;
  /** @maxLength 64 */
  admin_user_bridge_id?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminWallet {
  id: string;
  user: string;
  currency: Currency;
  account: string | null;
  bridge_id: string | null;
}

export interface AdminWalletResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminWallet;
}

export interface BridgeWebhook {
  event_id: string;
  event_category: string;
  event_type: string;
  event_object_id: string;
  event_object_status?: string | null;
  event_object_changes?: Record<string, any>;
  event_object: Record<string, any>;
  event_created_at: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Currency {
  /** @maxLength 32 */
  code: string;
  /** * `usdc` - Usdc */
  bridge_code?: "usdc";
  /** * `solana` - Solana */
  bridge_chain?: "solana";
  /** @maxLength 32 */
  display_code?: string | null;
  /** @maxLength 256 */
  description?: string | null;
  /** @maxLength 32 */
  symbol?: string | null;
  /** @maxLength 32 */
  unit?: string | null;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  divisibility?: number;
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

export interface PaginatedAdminCardList {
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
  results?: AdminCard[];
}

export interface PaginatedAdminCardListResponse {
  status: string;
  data: PaginatedAdminCardList;
}

export interface PaginatedAdminCurrencyList {
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
  results?: AdminCurrency[];
}

export interface PaginatedAdminCurrencyListResponse {
  status: string;
  data: PaginatedAdminCurrencyList;
}

export interface PaginatedAdminWalletList {
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
  results?: AdminWallet[];
}

export interface PaginatedAdminWalletListResponse {
  status: string;
  data: PaginatedAdminWalletList;
}

export interface PatchedAdminCryptoReturnPolicy {
  id?: string;
  refund_destination_address?: string | null;
  refund_destination_blockchain_memo?: string | null;
  refund_destination_chain?: string | null;
  refund_destination_currency?: string | null;
  /**
   * * `refund_to_sender` - refund_to_sender
   * * `static_address` - static_address
   */
  strategy?: "refund_to_sender" | "static_address";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCurrency {
  code?: string;
  /** * `usdc` - Usdc */
  bridge_code?: "usdc";
  /** * `solana` - Solana */
  bridge_chain?: "solana";
  display_code?: string | null;
  description?: string | null;
  symbol?: string | null;
  unit?: string | null;
  divisibility?: number;
  manager?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateCompany {
  id?: string;
  /** @format uuid */
  secret?: string;
  /**
   * * `test` - Test
   * * `production` - Production
   */
  mode?: "test" | "production";
  bridge_api_key?: string;
  bridge_webhook_id?: string | null;
  /** @maxLength 64 */
  admin_user_bridge_id?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedUser {
  id?: string;
  bridge_id?: string;
  bridge_signed_agreement_id?: string;
  business_id?: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface User {
  id: string;
  bridge_id: string;
  bridge_signed_agreement_id: string;
  business_id: string;
}

export interface UserCreateCustomerKYCLink {
  /**
   * * `individual` - Individual
   * * `business` - Business
   * @default "individual"
   */
  customer_type?: "individual" | "business";
  /** @format uri */
  redirect_uri?: string | null;
}

export interface UserCryptoDeposit {
  account_currency: string;
  /**
   * * `solana` - Solana
   * * `base` - Base
   * * `ethereum` - Ethereum
   * * `stellar` - Stellar
   * * `tron` - Tron
   * * `polygon` - Polygon
   * * `arbitrum` - Arbitrum
   * * `optimism` - Optimism
   */
  chain:
    | "solana"
    | "base"
    | "ethereum"
    | "stellar"
    | "tron"
    | "polygon"
    | "arbitrum"
    | "optimism";
}

export interface UserCryptoDepositResponse {
  chain: string;
  currency: string;
  address: string;
  memo: string;
}

export interface UserCryptoDepositResponseResponse {
  status: string;
  data: UserCryptoDepositResponse;
}

export interface UserCustomerKYCLink {
  kyc: Record<string, any>;
  tos: Record<string, any>;
}

export interface UserCustomerKYCLinkResponse {
  status: string;
  data: UserCustomerKYCLink;
}

export interface UserResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: User;
}

export interface Webhook {
  id: string;
  /**
   * * `account.currency.create` - Account Currency Create
   * * `bank_account.create` - Bank Account Create
   * * `bank_account.update` - Bank Account Update
   * * `currency.create` - Currency Create
   * * `currency.update` - Currency Update
   * * `transaction.initiate` - Transaction Initiate
   * * `transaction.transition.update` - Transaction Transition Update
   * * `user.update` - User Update
   */
  event:
    | "account.currency.create"
    | "bank_account.create"
    | "bank_account.update"
    | "currency.create"
    | "currency.update"
    | "transaction.initiate"
    | "transaction.transition.update"
    | "user.update";
  company: string;
  data: Record<string, any>;
}

export type ActivateCreateData = ActionResponse;

export interface AdminCardsListParams {
  account?: string;
  bridge_id?: string;
  currency?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  user?: string;
}

export type AdminCardsListData = PaginatedAdminCardListResponse;

export type AdminCardsRetrieveData = AdminExtendedCardResponse;

export type AdminCompanyRetrieveData = AdminCompanyResponse;

export type AdminCompanyUpdateData = AdminCompanyResponse;

export type AdminCompanyPartialUpdateData = AdminCompanyResponse;

export type AdminCryptoReturnPoliciesListData =
  AdminCryptoReturnPolicyListResponse;

export type AdminCryptoReturnPoliciesCreateData =
  AdminCryptoReturnPolicyResponse;

export type AdminCryptoReturnPoliciesRetrieveData =
  AdminCryptoReturnPolicyResponse;

export type AdminCryptoReturnPoliciesUpdateData =
  AdminCryptoReturnPolicyResponse;

export type AdminCryptoReturnPoliciesPartialUpdateData =
  AdminCryptoReturnPolicyResponse;

export type AdminCryptoReturnPoliciesDestroyData =
  AdminCryptoReturnPolicyResponse;

export interface AdminCurrenciesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminCurrenciesListData = PaginatedAdminCurrencyListResponse;

export type AdminCurrenciesRetrieveData = AdminCurrencyResponse;

export type AdminCurrenciesUpdateData = AdminCurrencyResponse;

export type AdminCurrenciesPartialUpdateData = AdminCurrencyResponse;

export type AdminPaymentProcessorQuoteCreateData =
  AdminPaymentProcessorQuoteResponseResponse;

export interface AdminWalletsListParams {
  account?: string;
  bridge_id?: string;
  currency?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  user?: string;
}

export type AdminWalletsListData = PaginatedAdminWalletListResponse;

export type AdminWalletsRetrieveData = AdminWalletResponse;

export type BridgeWebhookCreateData = ActionResponse;

export type DeactivateCreateData = ActionResponse;

export type UserRetrieveData = UserResponse;

export type UserUpdateData = UserResponse;

export type UserPartialUpdateData = UserResponse;

export type UserCryptoDepositCreateData = UserCryptoDepositResponseResponse;

export type UserKycLinksCreateData = UserCustomerKYCLinkResponse;

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
  public baseUrl: string = "https://bridge.services.rehive.com/api/";
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
 * @title Bridge Service API
 * @version 1 (1)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://bridge.services.rehive.com/api/
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **Bridge Service API** is used for managing and processing Rehive transactions using Bridge.
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
     * @name AdminCardsList
     * @request GET:/admin/cards/
     * @secure
     */
    adminCardsList: (query: AdminCardsListParams, params: RequestParams = {}) =>
      this.request<AdminCardsListData, any>({
        path: `/admin/cards/`,
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
     * @name AdminCardsRetrieve
     * @request GET:/admin/cards/{identifier}/
     * @secure
     */
    adminCardsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminCardsRetrieveData, any>({
        path: `/admin/cards/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCompanyRetrieve
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
     * @request PUT:/admin/company/
     * @secure
     */
    adminCompanyUpdate: (
      data: AdminUpdateCompany,
      params: RequestParams = {},
    ) =>
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
     * @request PATCH:/admin/company/
     * @secure
     */
    adminCompanyPartialUpdate: (
      data: PatchedAdminUpdateCompany,
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
     * @name AdminCryptoReturnPoliciesList
     * @request GET:/admin/crypto-return-policies/
     * @secure
     */
    adminCryptoReturnPoliciesList: (params: RequestParams = {}) =>
      this.request<AdminCryptoReturnPoliciesListData, any>({
        path: `/admin/crypto-return-policies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCryptoReturnPoliciesCreate
     * @request POST:/admin/crypto-return-policies/
     * @secure
     */
    adminCryptoReturnPoliciesCreate: (
      data: AdminCryptoReturnPolicy,
      params: RequestParams = {},
    ) =>
      this.request<AdminCryptoReturnPoliciesCreateData, any>({
        path: `/admin/crypto-return-policies/`,
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
     * @name AdminCryptoReturnPoliciesRetrieve
     * @request GET:/admin/crypto-return-policies/{identifier}/
     * @secure
     */
    adminCryptoReturnPoliciesRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminCryptoReturnPoliciesRetrieveData, any>({
        path: `/admin/crypto-return-policies/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCryptoReturnPoliciesUpdate
     * @request PUT:/admin/crypto-return-policies/{identifier}/
     * @secure
     */
    adminCryptoReturnPoliciesUpdate: (
      identifier: string,
      data: AdminCryptoReturnPolicy,
      params: RequestParams = {},
    ) =>
      this.request<AdminCryptoReturnPoliciesUpdateData, any>({
        path: `/admin/crypto-return-policies/${identifier}/`,
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
     * @name AdminCryptoReturnPoliciesPartialUpdate
     * @request PATCH:/admin/crypto-return-policies/{identifier}/
     * @secure
     */
    adminCryptoReturnPoliciesPartialUpdate: (
      identifier: string,
      data: PatchedAdminCryptoReturnPolicy,
      params: RequestParams = {},
    ) =>
      this.request<AdminCryptoReturnPoliciesPartialUpdateData, any>({
        path: `/admin/crypto-return-policies/${identifier}/`,
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
     * @name AdminCryptoReturnPoliciesDestroy
     * @request DELETE:/admin/crypto-return-policies/{identifier}/
     * @secure
     */
    adminCryptoReturnPoliciesDestroy: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminCryptoReturnPoliciesDestroyData, any>({
        path: `/admin/crypto-return-policies/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCurrenciesList
     * @request GET:/admin/currencies/
     * @secure
     */
    adminCurrenciesList: (
      query: AdminCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminCurrenciesListData, any>({
        path: `/admin/currencies/`,
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
     * @name AdminCurrenciesRetrieve
     * @request GET:/admin/currencies/{code}/
     * @secure
     */
    adminCurrenciesRetrieve: (code: string, params: RequestParams = {}) =>
      this.request<AdminCurrenciesRetrieveData, any>({
        path: `/admin/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCurrenciesUpdate
     * @request PUT:/admin/currencies/{code}/
     * @secure
     */
    adminCurrenciesUpdate: (
      code: string,
      data: AdminCurrency,
      params: RequestParams = {},
    ) =>
      this.request<AdminCurrenciesUpdateData, any>({
        path: `/admin/currencies/${code}/`,
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
     * @name AdminCurrenciesPartialUpdate
     * @request PATCH:/admin/currencies/{code}/
     * @secure
     */
    adminCurrenciesPartialUpdate: (
      code: string,
      data: PatchedAdminCurrency,
      params: RequestParams = {},
    ) =>
      this.request<AdminCurrenciesPartialUpdateData, any>({
        path: `/admin/currencies/${code}/`,
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
     * @name AdminPaymentProcessorQuoteCreate
     * @request POST:/admin/payment-processor-quote/
     * @secure
     */
    adminPaymentProcessorQuoteCreate: (
      data: AdminPaymentProcessorQuote,
      params: RequestParams = {},
    ) =>
      this.request<AdminPaymentProcessorQuoteCreateData, any>({
        path: `/admin/payment-processor-quote/`,
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
     * @name AdminWalletsList
     * @request GET:/admin/wallets/
     * @secure
     */
    adminWalletsList: (
      query: AdminWalletsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminWalletsListData, any>({
        path: `/admin/wallets/`,
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
     * @name AdminWalletsRetrieve
     * @request GET:/admin/wallets/{identifier}/
     * @secure
     */
    adminWalletsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminWalletsRetrieveData, any>({
        path: `/admin/wallets/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  bridge = {
    /**
     * No description
     *
     * @tags bridge
     * @name BridgeWebhookCreate
     * @request POST:/bridge/webhook/{company_id}/
     * @secure
     */
    bridgeWebhookCreate: (
      companyId: string,
      data: BridgeWebhook,
      params: RequestParams = {},
    ) =>
      this.request<BridgeWebhookCreateData, any>({
        path: `/bridge/webhook/${companyId}/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
  user = {
    /**
     * No description
     *
     * @tags user
     * @name UserRetrieve
     * @request GET:/user/
     * @secure
     */
    userRetrieve: (params: RequestParams = {}) =>
      this.request<UserRetrieveData, any>({
        path: `/user/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserUpdate
     * @request PUT:/user/
     * @secure
     */
    userUpdate: (data: User, params: RequestParams = {}) =>
      this.request<UserUpdateData, any>({
        path: `/user/`,
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
     * @tags user
     * @name UserPartialUpdate
     * @request PATCH:/user/
     * @secure
     */
    userPartialUpdate: (data: PatchedUser, params: RequestParams = {}) =>
      this.request<UserPartialUpdateData, any>({
        path: `/user/`,
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
     * @tags user
     * @name UserCryptoDepositCreate
     * @request POST:/user/crypto-deposit/
     * @secure
     */
    userCryptoDepositCreate: (
      data: UserCryptoDeposit,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoDepositCreateData, any>({
        path: `/user/crypto-deposit/`,
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
     * @tags user
     * @name UserKycLinksCreate
     * @request POST:/user/kyc-links/
     * @secure
     */
    userKycLinksCreate: (
      data: UserCreateCustomerKYCLink,
      params: RequestParams = {},
    ) =>
      this.request<UserKycLinksCreateData, any>({
        path: `/user/kyc-links/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
