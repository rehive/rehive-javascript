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
  system_email: string;
  /** @format uuid */
  secret: string;
  push_enabled: boolean;
}

/** Serialize company, update and delete. */
export interface AdminCompany {
  id: string;
  /** @format uuid */
  secret: string;
  push_enabled?: boolean;
  /**
   * * `test` - Test
   * * `production` - Production
   */
  mode: "test" | "production";
  quotas: Quotas;
  /** @maxLength 50 */
  bimi_selector_header?: string | null;
  /** @maxLength 100 */
  name?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  website?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  system_email?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  support_email?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email?: string | null;
  /**
   * @format uri
   * @maxLength 512
   */
  logo?: string | null;
  /**
   * @format uri
   * @maxLength 512
   */
  icon?: string | null;
}

export interface AdminCompanyResponse {
  /** @example "success" */
  status?: string;
  /** Serialize company, update and delete. */
  data?: AdminCompany;
}

/** Serialize notifications, create, update and delete. */
export interface AdminCreateUpdateNotification {
  id: number;
  /**
   * * `email` - email
   * * `sms` - sms
   * * `push` - push
   */
  type?: "email" | "sms" | "push" | "" | null;
  template?: string | null;
  /** @maxLength 250 */
  name: string;
  /** @maxLength 250 */
  subject?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  company: string;
  html_message?: string | null;
  text_message?: string | null;
  /** @maxLength 300 */
  sms_message?: string | null;
  /** @maxLength 300 */
  push_message?: string | null;
  enabled?: boolean;
  preference_enabled?: boolean;
  event?: string | null;
  /** @maxLength 150 */
  to_email?: string | null;
  /** @maxLength 150 */
  to_mobile?: string | null;
  /** @maxLength 150 */
  to_user?: string | null;
  /** @maxLength 250 */
  expression?: string | null;
  /**
   * @format email
   * @maxLength 250
   */
  from_email?: string | null;
  layout?: string | null;
}

/** Serialize notifications, create, update and delete. */
export interface AdminCredential {
  id: number;
  /**
   * * `twilio` - twilio
   * * `sendgrid` - sendgrid
   */
  credential_type: "twilio" | "sendgrid";
  credentials?: Record<string, any>;
  created: number;
  updated: number;
}

export interface AdminCredentialResponse {
  /** @example "success" */
  status?: string;
  /** Serialize notifications, create, update and delete. */
  data?: AdminCredential;
}

/** Serialize notification logs. */
export interface AdminLog {
  id: number;
  notification: string | null;
  /**
   * * `email` - email
   * * `sms` - sms
   * * `push` - push
   */
  type: "email" | "sms" | "push";
  user: string | null;
  /** @maxLength 150 */
  recipient: string;
  text_message: string | null;
  html_message: string | null;
  sms_message: string | null;
  push_message: string | null;
  sent?: boolean;
  error_message?: string | null;
  created: number;
}

export interface AdminLogResponse {
  /** @example "success" */
  status?: string;
  /** Serialize notification logs. */
  data?: AdminLog;
}

/** Serialize log sending. */
export interface AdminLogSend {
  recipient?: string;
}

/** Serialize notifications, create, update and delete. */
export interface AdminNotification {
  id: number;
  /**
   * * `email` - email
   * * `sms` - sms
   * * `push` - push
   */
  type: "email" | "sms" | "push";
  template?: AdminReducedTemplate | null;
  /** @maxLength 250 */
  name: string;
  /** @maxLength 250 */
  subject?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  company: string;
  html_message?: string | null;
  text_message?: string | null;
  /** @maxLength 300 */
  sms_message?: string | null;
  /** @maxLength 300 */
  push_message?: string | null;
  enabled?: boolean;
  preference_enabled?: boolean;
  event: string;
  /** @maxLength 150 */
  to_email?: string | null;
  /** @maxLength 150 */
  to_mobile?: string | null;
  /** @maxLength 150 */
  to_user?: string | null;
  /** @maxLength 250 */
  expression?: string | null;
  /**
   * @format email
   * @maxLength 250
   */
  from_email?: string | null;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  layout?: ReducedNotificationLayout;
}

export interface AdminNotificationResponse {
  /** @example "success" */
  status?: string;
  /** Serialize notifications, create, update and delete. */
  data?: AdminNotification;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminReducedTemplate {
  id: string;
  default?: boolean;
  deletable?: boolean;
}

/** Serialize templates. */
export interface AdminTemplate {
  id: string;
  /**
   * * `email` - email
   * * `sms` - sms
   * * `push` - push
   */
  type: "email" | "sms" | "push";
  /** @maxLength 250 */
  name: string;
  /** @maxLength 250 */
  subject: string;
  /** @maxLength 250 */
  description?: string | null;
  html_message?: string | null;
  text_message?: string | null;
  /** @maxLength 300 */
  sms_message?: string | null;
  /** @maxLength 300 */
  push_message?: string | null;
  enabled?: boolean;
  preference_enabled?: boolean;
  event: string;
  /** @maxLength 150 */
  to_email?: string | null;
  /** @maxLength 150 */
  to_mobile?: string | null;
  /** @maxLength 150 */
  to_user?: string | null;
  /** @maxLength 250 */
  expression?: string | null;
  layout: ReducedLayoutTemplate;
  default?: boolean;
  deletable?: boolean;
  created: number;
  updated: number;
}

export interface AdminTemplateResponse {
  /** @example "success" */
  status?: string;
  /** Serialize templates. */
  data?: AdminTemplate;
}

/** Trigger a notification. */
export interface AdminTriggerNotification {
  data?: Record<string, any>;
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
export interface LayoutTemplate {
  id: string;
  name: string;
  description: string | null;
  /**
   * * `email` - email
   * * `sms` - sms
   * * `push` - push
   */
  type: "email" | "sms" | "push";
  html_layout: string | null;
  text_layout: string | null;
  sms_layout: string | null;
  push_layout: string | null;
  created: number;
  updated: number;
}

export interface LayoutTemplateResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: LayoutTemplate;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface NotificationLayout {
  id: string;
  /** @maxLength 30 */
  name: string;
  /** @maxLength 100 */
  description?: string | null;
  /**
   * * `email` - email
   * * `sms` - sms
   * * `push` - push
   */
  type: "email" | "sms" | "push";
  html_layout?: string | null;
  text_layout?: string | null;
  sms_layout?: string | null;
  push_layout?: string | null;
  created: number;
  updated: number;
}

export interface NotificationLayoutResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: NotificationLayout;
}

export interface PaginatedAdminCredentialList {
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
  results?: AdminCredential[];
}

export interface PaginatedAdminCredentialListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminCredentialList;
}

export interface PaginatedAdminLogList {
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
  results?: AdminLog[];
}

export interface PaginatedAdminLogListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminLogList;
}

export interface PaginatedAdminNotificationList {
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
  results?: AdminNotification[];
}

export interface PaginatedAdminNotificationListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminNotificationList;
}

export interface PaginatedAdminTemplateList {
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
  results?: AdminTemplate[];
}

export interface PaginatedAdminTemplateListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminTemplateList;
}

export interface PaginatedLayoutTemplateList {
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
  results?: LayoutTemplate[];
}

export interface PaginatedLayoutTemplateListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedLayoutTemplateList;
}

export interface PaginatedNotificationLayoutList {
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
  results?: NotificationLayout[];
}

export interface PaginatedNotificationLayoutListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedNotificationLayoutList;
}

export interface PaginatedUserNotificationList {
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
  results?: UserNotification[];
}

export interface PaginatedUserNotificationListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedUserNotificationList;
}

/** Serialize company, update and delete. */
export interface PatchedAdminCompany {
  id?: string;
  /** @format uuid */
  secret?: string;
  push_enabled?: boolean;
  /**
   * * `test` - Test
   * * `production` - Production
   */
  mode?: "test" | "production";
  quotas?: Quotas;
  /** @maxLength 50 */
  bimi_selector_header?: string | null;
  /** @maxLength 100 */
  name?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  website?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  system_email?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  support_email?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email?: string | null;
  /**
   * @format uri
   * @maxLength 512
   */
  logo?: string | null;
  /**
   * @format uri
   * @maxLength 512
   */
  icon?: string | null;
}

/** Serialize notifications, create, update and delete. */
export interface PatchedAdminCreateUpdateNotification {
  id?: number;
  /**
   * * `email` - email
   * * `sms` - sms
   * * `push` - push
   */
  type?: "email" | "sms" | "push" | "" | null;
  template?: string | null;
  /** @maxLength 250 */
  name?: string;
  /** @maxLength 250 */
  subject?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  company?: string;
  html_message?: string | null;
  text_message?: string | null;
  /** @maxLength 300 */
  sms_message?: string | null;
  /** @maxLength 300 */
  push_message?: string | null;
  enabled?: boolean;
  preference_enabled?: boolean;
  event?: string | null;
  /** @maxLength 150 */
  to_email?: string | null;
  /** @maxLength 150 */
  to_mobile?: string | null;
  /** @maxLength 150 */
  to_user?: string | null;
  /** @maxLength 250 */
  expression?: string | null;
  /**
   * @format email
   * @maxLength 250
   */
  from_email?: string | null;
  layout?: string | null;
}

/** Serialize notifications, create, update and delete. */
export interface PatchedAdminCredential {
  id?: number;
  /**
   * * `twilio` - twilio
   * * `sendgrid` - sendgrid
   */
  credential_type?: "twilio" | "sendgrid";
  credentials?: Record<string, any>;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedNotificationLayout {
  id?: string;
  /** @maxLength 30 */
  name?: string;
  /** @maxLength 100 */
  description?: string | null;
  /**
   * * `email` - email
   * * `sms` - sms
   * * `push` - push
   */
  type?: "email" | "sms" | "push";
  html_layout?: string | null;
  text_layout?: string | null;
  sms_layout?: string | null;
  push_layout?: string | null;
  created?: number;
  updated?: number;
}

/**
 * Serialize notifications update. Actually updates the notification
 * preference instead.
 */
export interface PatchedUserUpdateNotification {
  enabled?: boolean;
}

export interface Quotas {
  sms: number;
  email: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedLayoutTemplate {
  id: string;
  /** @maxLength 30 */
  name: string;
  /** @maxLength 100 */
  description?: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedNotificationLayout {
  id: string;
  /** @maxLength 30 */
  name: string;
  /** @maxLength 100 */
  description?: string | null;
  created: number;
  updated: number;
}

/** Serialize notifications. */
export interface UserNotification {
  id: number;
  /** @maxLength 250 */
  name: string;
  /** @maxLength 250 */
  description?: string | null;
  event: string;
  type: string;
  enabled: boolean;
}

export interface UserNotificationResponse {
  /** @example "success" */
  status?: string;
  /** Serialize notifications. */
  data?: UserNotification;
}

/**
 * Serialize notifications update. Actually updates the notification
 * preference instead.
 */
export interface UserUpdateNotification {
  enabled: boolean;
}

/**
 * Validate and serialize the webhook data. The secret key and company are
 * used to identify a specific company.
 */
export interface Webhook {
  id: string;
  event: string;
  company: string;
  data: Record<string, any>;
}

export type ActivateCreateData = ActionResponse;

export type AdminCompanyRetrieveData = AdminCompanyResponse;

export type AdminCompanyUpdateData = AdminCompanyResponse;

export type AdminCompanyPartialUpdateData = AdminCompanyResponse;

export interface AdminCredentialsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminCredentialsListData = PaginatedAdminCredentialListResponse;

export type AdminCredentialsCreateData = AdminCredentialResponse;

export type AdminCredentialsRetrieveData = AdminCredentialResponse;

export type AdminCredentialsUpdateData = AdminCredentialResponse;

export type AdminCredentialsPartialUpdateData = AdminCredentialResponse;

export type AdminCredentialsDestroyData = AdminCredentialResponse;

export interface AdminLayoutTemplatesListParams {
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
}

export type AdminLayoutTemplatesListData = PaginatedLayoutTemplateListResponse;

export type AdminLayoutTemplatesRetrieveData = LayoutTemplateResponse;

export interface AdminLayoutsListParams {
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
}

export type AdminLayoutsListData = PaginatedNotificationLayoutListResponse;

export type AdminLayoutsCreateData = NotificationLayoutResponse;

export type AdminLayoutsRetrieveData = NotificationLayoutResponse;

export type AdminLayoutsUpdateData = NotificationLayoutResponse;

export type AdminLayoutsPartialUpdateData = NotificationLayoutResponse;

export type AdminLayoutsDestroyData = NotificationLayoutResponse;

export interface AdminLogsListParams {
  /** @format date-time */
  created__gt?: string;
  /** @format date-time */
  created__lt?: string;
  notification?: string;
  notification__name?: string;
  notification__name__contains?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  recipient?: string;
  recipient__contains?: string;
  sent?: boolean;
}

export type AdminLogsListData = PaginatedAdminLogListResponse;

export type AdminLogsRetrieveData = AdminLogResponse;

export type AdminLogsSendCreateData = ActionResponse;

export interface AdminNotificationsListParams {
  event?: string;
  layout?: string;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
}

export type AdminNotificationsListData = PaginatedAdminNotificationListResponse;

export type AdminNotificationsCreateData = AdminNotificationResponse;

export type AdminNotificationsRetrieveData = AdminNotificationResponse;

export type AdminNotificationsUpdateData = AdminNotificationResponse;

export type AdminNotificationsPartialUpdateData = AdminNotificationResponse;

export type AdminNotificationsDestroyData = AdminNotificationResponse;

export type AdminNotificationsTriggerCreateData = ActionResponse;

export interface AdminTemplatesListParams {
  event?: string;
  layout?: string;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
}

export type AdminTemplatesListData = PaginatedAdminTemplateListResponse;

export type AdminTemplatesRetrieveData = AdminTemplateResponse;

export type AdminWebhookCreateData = ActionResponse;

export type DeactivateCreateData = ActionResponse;

export interface UserNotificationsListParams {
  event?: string;
  layout?: string;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
}

export type UserNotificationsListData = PaginatedUserNotificationListResponse;

export type UserNotificationsRetrieveData = UserNotificationResponse;

export type UserNotificationsUpdateData = UserNotificationResponse;

export type UserNotificationsPartialUpdateData = UserNotificationResponse;

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
  public baseUrl: string = "https://notification.services.rehive.com/api/";
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
 * @title Notification Service API
 * @version 1 (1)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://notification.services.rehive.com/api/
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **Notification Service API** is used for sending email, SMS, and push notifications in Rehive.
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
     * @name AdminCredentialsList
     * @summary List credentials
     * @request GET:/admin/credentials/
     * @secure
     */
    adminCredentialsList: (
      query: AdminCredentialsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminCredentialsListData, any>({
        path: `/admin/credentials/`,
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
     * @name AdminCredentialsCreate
     * @summary Create credential
     * @request POST:/admin/credentials/
     * @secure
     */
    adminCredentialsCreate: (
      data: AdminCredential,
      params: RequestParams = {},
    ) =>
      this.request<AdminCredentialsCreateData, any>({
        path: `/admin/credentials/`,
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
     * @name AdminCredentialsRetrieve
     * @summary Retrieve credential
     * @request GET:/admin/credentials/{credential_id}/
     * @secure
     */
    adminCredentialsRetrieve: (
      credentialId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminCredentialsRetrieveData, any>({
        path: `/admin/credentials/${credentialId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCredentialsUpdate
     * @summary Update credential
     * @request PUT:/admin/credentials/{credential_id}/
     * @secure
     */
    adminCredentialsUpdate: (
      credentialId: string,
      data: AdminCredential,
      params: RequestParams = {},
    ) =>
      this.request<AdminCredentialsUpdateData, any>({
        path: `/admin/credentials/${credentialId}/`,
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
     * @name AdminCredentialsPartialUpdate
     * @summary Partially update credential
     * @request PATCH:/admin/credentials/{credential_id}/
     * @secure
     */
    adminCredentialsPartialUpdate: (
      credentialId: string,
      data: PatchedAdminCredential,
      params: RequestParams = {},
    ) =>
      this.request<AdminCredentialsPartialUpdateData, any>({
        path: `/admin/credentials/${credentialId}/`,
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
     * @name AdminCredentialsDestroy
     * @summary Delete credential
     * @request DELETE:/admin/credentials/{credential_id}/
     * @secure
     */
    adminCredentialsDestroy: (
      credentialId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminCredentialsDestroyData, any>({
        path: `/admin/credentials/${credentialId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminLayoutTemplatesList
     * @summary List layout templates
     * @request GET:/admin/layout-templates/
     * @secure
     */
    adminLayoutTemplatesList: (
      query: AdminLayoutTemplatesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminLayoutTemplatesListData, any>({
        path: `/admin/layout-templates/`,
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
     * @name AdminLayoutTemplatesRetrieve
     * @summary Retrieve layout template
     * @request GET:/admin/layout-templates/{id}/
     * @secure
     */
    adminLayoutTemplatesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<AdminLayoutTemplatesRetrieveData, any>({
        path: `/admin/layout-templates/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminLayoutsList
     * @summary List layouts
     * @request GET:/admin/layouts/
     * @secure
     */
    adminLayoutsList: (
      query: AdminLayoutsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminLayoutsListData, any>({
        path: `/admin/layouts/`,
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
     * @name AdminLayoutsCreate
     * @summary Create layout
     * @request POST:/admin/layouts/
     * @secure
     */
    adminLayoutsCreate: (
      data: NotificationLayout,
      params: RequestParams = {},
    ) =>
      this.request<AdminLayoutsCreateData, any>({
        path: `/admin/layouts/`,
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
     * @name AdminLayoutsRetrieve
     * @summary Retrieve layout
     * @request GET:/admin/layouts/{id}/
     * @secure
     */
    adminLayoutsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<AdminLayoutsRetrieveData, any>({
        path: `/admin/layouts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminLayoutsUpdate
     * @summary Update layout
     * @request PUT:/admin/layouts/{id}/
     * @secure
     */
    adminLayoutsUpdate: (
      id: string,
      data: NotificationLayout,
      params: RequestParams = {},
    ) =>
      this.request<AdminLayoutsUpdateData, any>({
        path: `/admin/layouts/${id}/`,
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
     * @name AdminLayoutsPartialUpdate
     * @summary Partially update layout
     * @request PATCH:/admin/layouts/{id}/
     * @secure
     */
    adminLayoutsPartialUpdate: (
      id: string,
      data: PatchedNotificationLayout,
      params: RequestParams = {},
    ) =>
      this.request<AdminLayoutsPartialUpdateData, any>({
        path: `/admin/layouts/${id}/`,
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
     * @name AdminLayoutsDestroy
     * @summary Delete layout
     * @request DELETE:/admin/layouts/{id}/
     * @secure
     */
    adminLayoutsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<AdminLayoutsDestroyData, any>({
        path: `/admin/layouts/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminLogsList
     * @summary List logs
     * @request GET:/admin/logs/
     * @secure
     */
    adminLogsList: (query: AdminLogsListParams, params: RequestParams = {}) =>
      this.request<AdminLogsListData, any>({
        path: `/admin/logs/`,
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
     * @name AdminLogsRetrieve
     * @summary Retrieve log
     * @request GET:/admin/logs/{log_id}/
     * @secure
     */
    adminLogsRetrieve: (logId: string, params: RequestParams = {}) =>
      this.request<AdminLogsRetrieveData, any>({
        path: `/admin/logs/${logId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminLogsSendCreate
     * @summary Send notification
     * @request POST:/admin/logs/{log_id}/send/
     * @secure
     */
    adminLogsSendCreate: (
      logId: string,
      data: AdminLogSend,
      params: RequestParams = {},
    ) =>
      this.request<AdminLogsSendCreateData, any>({
        path: `/admin/logs/${logId}/send/`,
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
     * @name AdminNotificationsList
     * @summary List notifications
     * @request GET:/admin/notifications/
     * @secure
     */
    adminNotificationsList: (
      query: AdminNotificationsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminNotificationsListData, any>({
        path: `/admin/notifications/`,
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
     * @name AdminNotificationsCreate
     * @summary Create notification
     * @request POST:/admin/notifications/
     * @secure
     */
    adminNotificationsCreate: (
      data: AdminCreateUpdateNotification,
      params: RequestParams = {},
    ) =>
      this.request<AdminNotificationsCreateData, any>({
        path: `/admin/notifications/`,
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
     * @name AdminNotificationsRetrieve
     * @summary Retrieve notification
     * @request GET:/admin/notifications/{notification_id}/
     * @secure
     */
    adminNotificationsRetrieve: (
      notificationId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminNotificationsRetrieveData, any>({
        path: `/admin/notifications/${notificationId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminNotificationsUpdate
     * @summary Update notification
     * @request PUT:/admin/notifications/{notification_id}/
     * @secure
     */
    adminNotificationsUpdate: (
      notificationId: string,
      data: AdminCreateUpdateNotification,
      params: RequestParams = {},
    ) =>
      this.request<AdminNotificationsUpdateData, any>({
        path: `/admin/notifications/${notificationId}/`,
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
     * @name AdminNotificationsPartialUpdate
     * @summary Partially update notification
     * @request PATCH:/admin/notifications/{notification_id}/
     * @secure
     */
    adminNotificationsPartialUpdate: (
      notificationId: string,
      data: PatchedAdminCreateUpdateNotification,
      params: RequestParams = {},
    ) =>
      this.request<AdminNotificationsPartialUpdateData, any>({
        path: `/admin/notifications/${notificationId}/`,
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
     * @name AdminNotificationsDestroy
     * @summary Delete notification
     * @request DELETE:/admin/notifications/{notification_id}/
     * @secure
     */
    adminNotificationsDestroy: (
      notificationId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminNotificationsDestroyData, any>({
        path: `/admin/notifications/${notificationId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminNotificationsTriggerCreate
     * @summary Trigger notification
     * @request POST:/admin/notifications/{notification_id}/trigger/
     * @secure
     */
    adminNotificationsTriggerCreate: (
      notificationId: string,
      data: AdminTriggerNotification,
      params: RequestParams = {},
    ) =>
      this.request<AdminNotificationsTriggerCreateData, any>({
        path: `/admin/notifications/${notificationId}/trigger/`,
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
     * @name AdminTemplatesList
     * @summary List templates
     * @request GET:/admin/templates/
     * @secure
     */
    adminTemplatesList: (
      query: AdminTemplatesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminTemplatesListData, any>({
        path: `/admin/templates/`,
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
     * @name AdminTemplatesRetrieve
     * @summary Retrieve template
     * @request GET:/admin/templates/{template_id}/
     * @secure
     */
    adminTemplatesRetrieve: (templateId: string, params: RequestParams = {}) =>
      this.request<AdminTemplatesRetrieveData, any>({
        path: `/admin/templates/${templateId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminWebhookCreate
     * @request POST:/admin/webhook/
     * @secure
     */
    adminWebhookCreate: (data: Webhook, params: RequestParams = {}) =>
      this.request<AdminWebhookCreateData, any>({
        path: `/admin/webhook/`,
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
  user = {
    /**
     * No description
     *
     * @tags user
     * @name UserNotificationsList
     * @summary List notifications
     * @request GET:/user/notifications/
     * @secure
     */
    userNotificationsList: (
      query: UserNotificationsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserNotificationsListData, any>({
        path: `/user/notifications/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserNotificationsRetrieve
     * @summary Retrieve notification
     * @request GET:/user/notifications/{notification_id}/
     * @secure
     */
    userNotificationsRetrieve: (
      notificationId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserNotificationsRetrieveData, any>({
        path: `/user/notifications/${notificationId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserNotificationsUpdate
     * @summary Update notification
     * @request PUT:/user/notifications/{notification_id}/
     * @secure
     */
    userNotificationsUpdate: (
      notificationId: string,
      data: UserUpdateNotification,
      params: RequestParams = {},
    ) =>
      this.request<UserNotificationsUpdateData, any>({
        path: `/user/notifications/${notificationId}/`,
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
     * @name UserNotificationsPartialUpdate
     * @summary Partially update notification
     * @request PATCH:/user/notifications/{notification_id}/
     * @secure
     */
    userNotificationsPartialUpdate: (
      notificationId: string,
      data: PatchedUserUpdateNotification,
      params: RequestParams = {},
    ) =>
      this.request<UserNotificationsPartialUpdateData, any>({
        path: `/user/notifications/${notificationId}/`,
        method: "PATCH",
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
