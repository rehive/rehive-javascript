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

export interface Activate {
  token: string;
  id: string;
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
  config?: Record<string, any>;
  /** @format uri */
  android_play_store_url?: string | null;
  /** @format uri */
  apple_app_store_url?: string | null;
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
export interface AdminCreateDomain {
  id: string;
  /**
   * * `native` - Native
   * * `client` - Client
   */
  host?: "native" | "client";
  /** @maxLength 100 */
  domain: string;
  /**
   * * `active` - Active
   * * `inactive` - Inactive
   */
  status: "active" | "inactive";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateLocale {
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  id: string;
  translation: Record<string, any>;
  /** @format uri */
  icon?: string | null;
  /** @maxLength 50 */
  name?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminDomain {
  id: string;
  /**
   * * `native` - Native
   * * `client` - Client
   */
  host: "native" | "client";
  domain: string;
  /**
   * * `active` - Active
   * * `inactive` - Inactive
   */
  status: "active" | "inactive";
  created: number;
  updated: number;
}

export interface AdminDomainResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminDomain;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AndroidApp {
  id: string;
  /** @maxLength 50 */
  package: string;
  /** @maxLength 30 */
  name?: string | null;
  /** @maxLength 80 */
  short_description?: string | null;
  /** @maxLength 4000 */
  full_description?: string | null;
  /** @maxLength 3807 */
  whats_new?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  website?: string | null;
  /** @maxLength 24 */
  contact_phone_number?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email_address?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  terms_and_conditions?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  privacy_policy?: string | null;
  created: number;
  updated: number;
}

export interface AndroidAppResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AndroidApp;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AppCodebase {
  id: string;
  /**
   * * `mobile` - Mobile
   * * `web` - Web
   */
  type: "mobile" | "web";
  /** @format uri */
  file: string;
  /** @maxLength 24 */
  version: string;
  /** @maxLength 24 */
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  created: string;
  /** @format date-time */
  updated: string;
}

export interface AppCodebaseResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AppCodebase;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Company {
  id: string;
  config: Record<string, any>;
  /** @format uri */
  android_play_store_url?: string | null;
  /** @format uri */
  apple_app_store_url?: string | null;
}

export interface CompanyResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Company;
}

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
export interface IOSApp {
  id: string;
  /** @maxLength 50 */
  bundle_identifier: string;
  /** @maxLength 30 */
  name?: string | null;
  /** @maxLength 30 */
  subtitle?: string | null;
  /** @maxLength 3110 */
  description?: string | null;
  /** @maxLength 170 */
  promotional_text?: string | null;
  /** @maxLength 3807 */
  whats_new?: string | null;
  /** @maxLength 70 */
  keywords?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  support_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  marketing_url?: string | null;
  /** @maxLength 30 */
  contact_first_name?: string | null;
  /** @maxLength 30 */
  contact_last_name?: string | null;
  /** @maxLength 24 */
  contact_phone_number?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email_address?: string | null;
  /** @maxLength 70 */
  copyright?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  terms_and_conditions?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  privacy_policy?: string | null;
  created: number;
  updated: number;
}

export interface IOSAppResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: IOSApp;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Locale {
  id: string;
  translation: Record<string, any>;
  created: number;
  updated: number;
  /** @format uri */
  icon?: string | null;
  /** @maxLength 50 */
  name?: string | null;
}

export interface LocaleResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Locale;
}

export interface PaginatedAdminDomainList {
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
  results?: AdminDomain[];
}

export interface PaginatedAdminDomainListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminDomainList;
}

export interface PaginatedAndroidAppList {
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
  results?: AndroidApp[];
}

export interface PaginatedAndroidAppListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAndroidAppList;
}

export interface PaginatedAppCodebaseList {
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
  results?: AppCodebase[];
}

export interface PaginatedAppCodebaseListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAppCodebaseList;
}

export interface PaginatedIOSAppList {
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
  results?: IOSApp[];
}

export interface PaginatedIOSAppListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedIOSAppList;
}

export interface PaginatedLocaleList {
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
  results?: Locale[];
}

export interface PaginatedLocaleListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedLocaleList;
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
  config?: Record<string, any>;
  /** @format uri */
  android_play_store_url?: string | null;
  /** @format uri */
  apple_app_store_url?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminDomain {
  id?: string;
  /**
   * * `native` - Native
   * * `client` - Client
   */
  host?: "native" | "client";
  domain?: string;
  /**
   * * `active` - Active
   * * `inactive` - Inactive
   */
  status?: "active" | "inactive";
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAndroidApp {
  id?: string;
  /** @maxLength 50 */
  package?: string;
  /** @maxLength 30 */
  name?: string | null;
  /** @maxLength 80 */
  short_description?: string | null;
  /** @maxLength 4000 */
  full_description?: string | null;
  /** @maxLength 3807 */
  whats_new?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  website?: string | null;
  /** @maxLength 24 */
  contact_phone_number?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email_address?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  terms_and_conditions?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  privacy_policy?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAppCodebase {
  id?: string;
  /**
   * * `mobile` - Mobile
   * * `web` - Web
   */
  type?: "mobile" | "web";
  /** @format uri */
  file?: string;
  /** @maxLength 24 */
  version?: string;
  /** @maxLength 24 */
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedIOSApp {
  id?: string;
  /** @maxLength 50 */
  bundle_identifier?: string;
  /** @maxLength 30 */
  name?: string | null;
  /** @maxLength 30 */
  subtitle?: string | null;
  /** @maxLength 3110 */
  description?: string | null;
  /** @maxLength 170 */
  promotional_text?: string | null;
  /** @maxLength 3807 */
  whats_new?: string | null;
  /** @maxLength 70 */
  keywords?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  support_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  marketing_url?: string | null;
  /** @maxLength 30 */
  contact_first_name?: string | null;
  /** @maxLength 30 */
  contact_last_name?: string | null;
  /** @maxLength 24 */
  contact_phone_number?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email_address?: string | null;
  /** @maxLength 70 */
  copyright?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  terms_and_conditions?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  privacy_policy?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedLocale {
  id?: string;
  translation?: Record<string, any>;
  created?: number;
  updated?: number;
  /** @format uri */
  icon?: string | null;
  /** @maxLength 50 */
  name?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedUser {
  id?: string;
  config?: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface User {
  id: string;
  config?: Record<string, any>;
}

export interface UserResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: User;
}

export type ActivateCreateData = ActionResponse;

export interface AdminAndroidAppsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminAndroidAppsListData = PaginatedAndroidAppListResponse;

export type AdminAndroidAppsCreateData = AndroidAppResponse;

export type AdminAndroidAppsRetrieveData = AndroidAppResponse;

export type AdminAndroidAppsUpdateData = AndroidAppResponse;

export type AdminAndroidAppsPartialUpdateData = AndroidAppResponse;

export type AdminAndroidAppsDestroyData = AndroidAppResponse;

export interface AdminAppCodebasesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
  version?: string;
}

export type AdminAppCodebasesListData = PaginatedAppCodebaseListResponse;

export type AdminAppCodebasesRetrieveData = AppCodebaseResponse;

export type AdminCompanyRetrieveData = AdminCompanyResponse;

export type AdminCompanyUpdateData = AdminCompanyResponse;

export type AdminCompanyPartialUpdateData = AdminCompanyResponse;

export interface AdminDomainsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminDomainsListData = PaginatedAdminDomainListResponse;

export type AdminDomainsCreateData = AdminDomainResponse;

export type AdminDomainsRetrieveData = AdminDomainResponse;

export type AdminDomainsUpdateData = AdminDomainResponse;

export type AdminDomainsPartialUpdateData = AdminDomainResponse;

export type AdminDomainsDestroyData = AdminDomainResponse;

export interface AdminIosAppsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminIosAppsListData = PaginatedIOSAppListResponse;

export type AdminIosAppsCreateData = IOSAppResponse;

export type AdminIosAppsRetrieveData = IOSAppResponse;

export type AdminIosAppsUpdateData = IOSAppResponse;

export type AdminIosAppsPartialUpdateData = IOSAppResponse;

export type AdminIosAppsDestroyData = IOSAppResponse;

export interface AdminLocalesListParams {
  id?: string;
  id__in?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminLocalesListData = PaginatedLocaleListResponse;

export type AdminLocalesCreateData = LocaleResponse;

export type AdminLocalesRetrieveData = LocaleResponse;

export type AdminLocalesUpdateData = LocaleResponse;

export type AdminLocalesPartialUpdateData = LocaleResponse;

export type AdminLocalesDestroyData = LocaleResponse;

export type DeactivateCreateData = ActionResponse;

export type PublicCompanyRetrieveData = CompanyResponse;

export interface PublicCompanyLocalesListParams {
  id?: string;
  id__in?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  companyId: string;
}

export type PublicCompanyLocalesListData = PaginatedLocaleListResponse;

export type PublicCompanyLocalesRetrieveData = LocaleResponse;

export interface SuperadminAppCodebasesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
  version?: string;
}

export type SuperadminAppCodebasesListData = PaginatedAppCodebaseListResponse;

export type SuperadminAppCodebasesCreateData = AppCodebaseResponse;

export type SuperadminAppCodebasesRetrieveData = AppCodebaseResponse;

export type SuperadminAppCodebasesUpdateData = AppCodebaseResponse;

export type SuperadminAppCodebasesPartialUpdateData = AppCodebaseResponse;

export type SuperadminAppCodebasesDestroyData = AppCodebaseResponse;

export type UserRetrieveData = UserResponse;

export type UserUpdateData = UserResponse;

export type UserPartialUpdateData = UserResponse;

export type UserCompanyRetrieveData = CompanyResponse;

export interface UserLocalesListParams {
  id?: string;
  id__in?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UserLocalesListData = PaginatedLocaleListResponse;

export type UserLocalesRetrieveData = LocaleResponse;

// Import the shared http client instead of generating a new one
export * from "../../shared/http-client.js";
import { HttpClient } from "../../shared/http-client.js";

// Note: We don't need a specialized HttpClient class since we're using the shared one
// The shared HttpClient is imported and re-exported above

/**
 * @title App Service API
 * @version 1 (1)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://app.services.rehive.com
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **App Service API** is used for customizing the end-user app experience in Rehive.
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
        type: "application/json",
        format: "json",
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags admin
     * @name AdminAndroidAppsList
     * @summary List android apps
     * @request GET:/admin/android-apps/
     * @secure
     */
    adminAndroidAppsList: (
      query: AdminAndroidAppsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminAndroidAppsListData, any>({
        path: `/admin/android-apps/`,
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
     * @name AdminAndroidAppsCreate
     * @summary Create android app
     * @request POST:/admin/android-apps/
     * @secure
     */
    adminAndroidAppsCreate: (data: AndroidApp, params: RequestParams = {}) =>
      this.request<AdminAndroidAppsCreateData, any>({
        path: `/admin/android-apps/`,
        method: "POST",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminAndroidAppsRetrieve
     * @summary Retrieve android app
     * @request GET:/admin/android-apps/{id}/
     * @secure
     */
    adminAndroidAppsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<AdminAndroidAppsRetrieveData, any>({
        path: `/admin/android-apps/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminAndroidAppsUpdate
     * @summary Update android app
     * @request PUT:/admin/android-apps/{id}/
     * @secure
     */
    adminAndroidAppsUpdate: (
      id: string,
      data: AndroidApp,
      params: RequestParams = {},
    ) =>
      this.request<AdminAndroidAppsUpdateData, any>({
        path: `/admin/android-apps/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminAndroidAppsPartialUpdate
     * @summary Partially update android app
     * @request PATCH:/admin/android-apps/{id}/
     * @secure
     */
    adminAndroidAppsPartialUpdate: (
      id: string,
      data: PatchedAndroidApp,
      params: RequestParams = {},
    ) =>
      this.request<AdminAndroidAppsPartialUpdateData, any>({
        path: `/admin/android-apps/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminAndroidAppsDestroy
     * @summary Delete android app
     * @request DELETE:/admin/android-apps/{id}/
     * @secure
     */
    adminAndroidAppsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<AdminAndroidAppsDestroyData, any>({
        path: `/admin/android-apps/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminAppCodebasesList
     * @summary List app codebases
     * @request GET:/admin/app-codebases/
     * @secure
     */
    adminAppCodebasesList: (
      query: AdminAppCodebasesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminAppCodebasesListData, any>({
        path: `/admin/app-codebases/`,
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
     * @name AdminAppCodebasesRetrieve
     * @summary Retrieve app codebase
     * @request GET:/admin/app-codebases/{id}/
     * @secure
     */
    adminAppCodebasesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<AdminAppCodebasesRetrieveData, any>({
        path: `/admin/app-codebases/${id}/`,
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
        type: "application/json",
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
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminDomainsList
     * @summary List domains
     * @request GET:/admin/domains/
     * @secure
     */
    adminDomainsList: (
      query: AdminDomainsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminDomainsListData, any>({
        path: `/admin/domains/`,
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
     * @name AdminDomainsCreate
     * @summary Create domain
     * @request POST:/admin/domains/
     * @secure
     */
    adminDomainsCreate: (data: AdminCreateDomain, params: RequestParams = {}) =>
      this.request<AdminDomainsCreateData, any>({
        path: `/admin/domains/`,
        method: "POST",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminDomainsRetrieve
     * @summary Retrieve domain
     * @request GET:/admin/domains/{identifier}/
     * @secure
     */
    adminDomainsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminDomainsRetrieveData, any>({
        path: `/admin/domains/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminDomainsUpdate
     * @summary Update domain
     * @request PUT:/admin/domains/{identifier}/
     * @secure
     */
    adminDomainsUpdate: (
      identifier: string,
      data: AdminDomain,
      params: RequestParams = {},
    ) =>
      this.request<AdminDomainsUpdateData, any>({
        path: `/admin/domains/${identifier}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminDomainsPartialUpdate
     * @summary Partially update domain
     * @request PATCH:/admin/domains/{identifier}/
     * @secure
     */
    adminDomainsPartialUpdate: (
      identifier: string,
      data: PatchedAdminDomain,
      params: RequestParams = {},
    ) =>
      this.request<AdminDomainsPartialUpdateData, any>({
        path: `/admin/domains/${identifier}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminDomainsDestroy
     * @summary Delete domain
     * @request DELETE:/admin/domains/{identifier}/
     * @secure
     */
    adminDomainsDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminDomainsDestroyData, any>({
        path: `/admin/domains/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminIosAppsList
     * @summary List iOS apps
     * @request GET:/admin/ios-apps/
     * @secure
     */
    adminIosAppsList: (
      query: AdminIosAppsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminIosAppsListData, any>({
        path: `/admin/ios-apps/`,
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
     * @name AdminIosAppsCreate
     * @summary Create iOS app
     * @request POST:/admin/ios-apps/
     * @secure
     */
    adminIosAppsCreate: (data: IOSApp, params: RequestParams = {}) =>
      this.request<AdminIosAppsCreateData, any>({
        path: `/admin/ios-apps/`,
        method: "POST",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminIosAppsRetrieve
     * @summary Retrieve iOS app
     * @request GET:/admin/ios-apps/{id}/
     * @secure
     */
    adminIosAppsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<AdminIosAppsRetrieveData, any>({
        path: `/admin/ios-apps/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminIosAppsUpdate
     * @summary Update iOS app
     * @request PUT:/admin/ios-apps/{id}/
     * @secure
     */
    adminIosAppsUpdate: (
      id: string,
      data: IOSApp,
      params: RequestParams = {},
    ) =>
      this.request<AdminIosAppsUpdateData, any>({
        path: `/admin/ios-apps/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminIosAppsPartialUpdate
     * @summary Partially update iOS app
     * @request PATCH:/admin/ios-apps/{id}/
     * @secure
     */
    adminIosAppsPartialUpdate: (
      id: string,
      data: PatchedIOSApp,
      params: RequestParams = {},
    ) =>
      this.request<AdminIosAppsPartialUpdateData, any>({
        path: `/admin/ios-apps/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminIosAppsDestroy
     * @summary Delete iOS app
     * @request DELETE:/admin/ios-apps/{id}/
     * @secure
     */
    adminIosAppsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<AdminIosAppsDestroyData, any>({
        path: `/admin/ios-apps/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminLocalesList
     * @summary List locales
     * @request GET:/admin/locales/
     * @secure
     */
    adminLocalesList: (
      query: AdminLocalesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminLocalesListData, any>({
        path: `/admin/locales/`,
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
     * @name AdminLocalesCreate
     * @summary Create locale
     * @request POST:/admin/locales/
     * @secure
     */
    adminLocalesCreate: (data: AdminCreateLocale, params: RequestParams = {}) =>
      this.request<AdminLocalesCreateData, any>({
        path: `/admin/locales/`,
        method: "POST",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminLocalesRetrieve
     * @summary Retrieve locale
     * @request GET:/admin/locales/{locale_id}/
     * @secure
     */
    adminLocalesRetrieve: (localeId: string, params: RequestParams = {}) =>
      this.request<AdminLocalesRetrieveData, any>({
        path: `/admin/locales/${localeId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminLocalesUpdate
     * @summary Update locale
     * @request PUT:/admin/locales/{locale_id}/
     * @secure
     */
    adminLocalesUpdate: (
      localeId: string,
      data: Locale,
      params: RequestParams = {},
    ) =>
      this.request<AdminLocalesUpdateData, any>({
        path: `/admin/locales/${localeId}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminLocalesPartialUpdate
     * @summary Partially update locale
     * @request PATCH:/admin/locales/{locale_id}/
     * @secure
     */
    adminLocalesPartialUpdate: (
      localeId: string,
      data: PatchedLocale,
      params: RequestParams = {},
    ) =>
      this.request<AdminLocalesPartialUpdateData, any>({
        path: `/admin/locales/${localeId}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminLocalesDestroy
     * @summary Delete locale
     * @request DELETE:/admin/locales/{locale_id}/
     * @secure
     */
    adminLocalesDestroy: (localeId: string, params: RequestParams = {}) =>
      this.request<AdminLocalesDestroyData, any>({
        path: `/admin/locales/${localeId}/`,
        method: "DELETE",
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
        type: "application/json",
        format: "json",
        ...params,
      }),
  };
  public = {
    /**
     * No description
     *
     * @tags public
     * @name PublicCompanyRetrieve
     * @summary Retrieve public company
     * @request GET:/public/company/
     * @secure
     */
    publicCompanyRetrieve: (params: RequestParams = {}) =>
      this.request<PublicCompanyRetrieveData, any>({
        path: `/public/company/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags public
     * @name PublicCompanyLocalesList
     * @summary List public locales
     * @request GET:/public/company/{company_id}/locales/
     * @secure
     */
    publicCompanyLocalesList: (
      { companyId, ...query }: PublicCompanyLocalesListParams,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompanyLocalesListData, any>({
        path: `/public/company/${companyId}/locales/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags public
     * @name PublicCompanyLocalesRetrieve
     * @summary Retrieve public locale
     * @request GET:/public/company/{company_id}/locales/{locale_id}/
     * @secure
     */
    publicCompanyLocalesRetrieve: (
      companyId: string,
      localeId: string,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompanyLocalesRetrieveData, any>({
        path: `/public/company/${companyId}/locales/${localeId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  superadmin = {
    /**
     * No description
     *
     * @tags superadmin
     * @name SuperadminAppCodebasesList
     * @summary List app codebases
     * @request GET:/superadmin/app-codebases/
     * @secure
     */
    superadminAppCodebasesList: (
      query: SuperadminAppCodebasesListParams,
      params: RequestParams = {},
    ) =>
      this.request<SuperadminAppCodebasesListData, any>({
        path: `/superadmin/app-codebases/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags superadmin
     * @name SuperadminAppCodebasesCreate
     * @summary Create app codebase
     * @request POST:/superadmin/app-codebases/
     * @secure
     */
    superadminAppCodebasesCreate: (
      data: AppCodebase,
      params: RequestParams = {},
    ) =>
      this.request<SuperadminAppCodebasesCreateData, any>({
        path: `/superadmin/app-codebases/`,
        method: "POST",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags superadmin
     * @name SuperadminAppCodebasesRetrieve
     * @summary Retrieve app codebase
     * @request GET:/superadmin/app-codebases/{id}/
     * @secure
     */
    superadminAppCodebasesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<SuperadminAppCodebasesRetrieveData, any>({
        path: `/superadmin/app-codebases/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags superadmin
     * @name SuperadminAppCodebasesUpdate
     * @summary Update app codebase
     * @request PUT:/superadmin/app-codebases/{id}/
     * @secure
     */
    superadminAppCodebasesUpdate: (
      id: string,
      data: AppCodebase,
      params: RequestParams = {},
    ) =>
      this.request<SuperadminAppCodebasesUpdateData, any>({
        path: `/superadmin/app-codebases/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags superadmin
     * @name SuperadminAppCodebasesPartialUpdate
     * @summary Partially update codebase
     * @request PATCH:/superadmin/app-codebases/{id}/
     * @secure
     */
    superadminAppCodebasesPartialUpdate: (
      id: string,
      data: PatchedAppCodebase,
      params: RequestParams = {},
    ) =>
      this.request<SuperadminAppCodebasesPartialUpdateData, any>({
        path: `/superadmin/app-codebases/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags superadmin
     * @name SuperadminAppCodebasesDestroy
     * @summary Delete codebase
     * @request DELETE:/superadmin/app-codebases/{id}/
     * @secure
     */
    superadminAppCodebasesDestroy: (id: string, params: RequestParams = {}) =>
      this.request<SuperadminAppCodebasesDestroyData, any>({
        path: `/superadmin/app-codebases/${id}/`,
        method: "DELETE",
        secure: true,
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
     * @summary Retrieve user
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
     * @summary Update user
     * @request PUT:/user/
     * @secure
     */
    userUpdate: (data: User, params: RequestParams = {}) =>
      this.request<UserUpdateData, any>({
        path: `/user/`,
        method: "PUT",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserPartialUpdate
     * @summary Partially update user
     * @request PATCH:/user/
     * @secure
     */
    userPartialUpdate: (data: PatchedUser, params: RequestParams = {}) =>
      this.request<UserPartialUpdateData, any>({
        path: `/user/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: "application/json",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCompanyRetrieve
     * @summary Retrieve company
     * @request GET:/user/company/
     * @secure
     */
    userCompanyRetrieve: (params: RequestParams = {}) =>
      this.request<UserCompanyRetrieveData, any>({
        path: `/user/company/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserLocalesList
     * @summary List locales
     * @request GET:/user/locales/
     * @secure
     */
    userLocalesList: (
      query: UserLocalesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserLocalesListData, any>({
        path: `/user/locales/`,
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
     * @name UserLocalesRetrieve
     * @summary Retrieve locale
     * @request GET:/user/locales/{locale_id}/
     * @secure
     */
    userLocalesRetrieve: (localeId: string, params: RequestParams = {}) =>
      this.request<UserLocalesRetrieveData, any>({
        path: `/user/locales/${localeId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
