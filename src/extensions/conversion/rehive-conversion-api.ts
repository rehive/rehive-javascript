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
  identifier: string;
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
  name: string;
  display_currency?: string;
  operational_account?: string | null;
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
export interface AdminConversion {
  id: string;
  user: string;
  key: string;
  from_amount: number;
  from_fee: number;
  from_total_amount: number;
  to_amount: number;
  to_fee: number;
  to_total_amount: number;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string;
  debit_account: string | null;
  credit_account: string | null;
  operational_account: string;
  /**
   * * `quoted` - Quoted
   * * `pending` - Pending
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status?: "quoted" | "pending" | "complete" | "failed";
  collection: string | null;
  txns: string[];
  metadata: Record<string, any>;
  expires: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminConversionPair {
  id: string;
  key: string;
  path?: string | null;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string | null;
  operational_account?: string | null;
  /** @min 1 */
  quote_duration?: number;
  enabled?: boolean;
  created: number;
  updated: number;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  integration?: AdminIntegration;
  /**
   * * `operational` - Operational
   * * `non_operational` - Non Operational
   */
  transaction_type?: "operational" | "non_operational";
}

export interface AdminConversionPairResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminConversionPair;
}

export interface AdminConversionResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminConversion;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateConversion {
  id: string;
  user: string;
  key: string;
  from_amount?: number | null;
  from_fee: number;
  from_total_amount: number;
  to_amount?: number | null;
  to_fee: number;
  to_total_amount: number;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string | null;
  /** @maxLength 64 */
  debit_account?: string | null;
  /** @maxLength 64 */
  credit_account?: string | null;
  operational_account: string;
  /**
   * * `quoted` - Quoted
   * * `pending` - Pending
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "quoted" | "pending" | "complete" | "failed";
  collection: string | null;
  txns: string[];
  metadata?: Record<string, any>;
  quote_duration?: number | null;
  expires: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateConversionPair {
  id: string;
  key: string;
  path?: string | null;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string | null;
  operational_account?: string | null;
  /** @min 1 */
  quote_duration?: number;
  enabled?: boolean;
  created: number;
  updated: number;
  integration?: string | null;
  /**
   * * `operational` - Operational
   * * `non_operational` - Non Operational
   */
  transaction_type?: "operational" | "non_operational";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateRatePair {
  id: string;
  key: string;
  path?: string | null;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCurrency {
  /** @maxLength 30 */
  code: string;
  /** @maxLength 30 */
  display_code?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxLength 30 */
  symbol?: string | null;
  /** @maxLength 30 */
  unit?: string | null;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  divisibility?: number;
  archived?: boolean;
}

export interface AdminCurrencyResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminCurrency;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminIntegration {
  id: string;
  /** @maxLength 50 */
  slug: string;
  /** @maxLength 50 */
  name: string;
  /** @maxLength 255 */
  description?: string | null;
  created: number;
  updated: number;
  events: ("conversion.quote" | "conversion.execute")[];
}

export interface AdminIntegrationResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminIntegration;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminIntegrationWebhook {
  id: string;
  /** @format uri */
  url: string;
  /**
   * * `conversion.quote` - conversion.quote
   * * `conversion.execute` - conversion.execute
   */
  event: "conversion.quote" | "conversion.execute";
  /** @maxLength 250 */
  secret?: string;
  created: number;
  updated: number;
}

export interface AdminIntegrationWebhookResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminIntegrationWebhook;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminRatePair {
  id: string;
  key: string;
  path?: string | null;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string | null;
  created: number;
  updated: number;
}

export interface AdminRatePairResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminRatePair;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateConversion {
  id: string;
  user: string;
  key: string;
  from_amount: number;
  from_fee: number;
  from_total_amount: number;
  to_amount: number;
  to_fee: number;
  to_total_amount: number;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string;
  debit_account: string | null;
  credit_account: string | null;
  operational_account: string;
  /**
   * * `quoted` - Quoted
   * * `pending` - Pending
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "quoted" | "pending" | "complete" | "failed";
  collection: string | null;
  txns: string[];
  metadata: Record<string, any>;
  expires: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUser {
  id: string;
  /** @maxLength 12 */
  display_currency?: string | null;
}

export interface AdminUserResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminUser;
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
export interface NewSnapshotRate {
  key: string;
  date: number;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  rate: Rate;
}

export type NewSnapshotRateList = NewSnapshotRate[];

export interface NewSnapshotRateListResponse {
  /** @example "success" */
  status?: string;
  data?: NewSnapshotRateList;
}

export interface PaginatedAdminConversionList {
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
  results?: AdminConversion[];
}

export interface PaginatedAdminConversionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminConversionList;
}

export interface PaginatedAdminConversionPairList {
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
  results?: AdminConversionPair[];
}

export interface PaginatedAdminConversionPairListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminConversionPairList;
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
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminCurrencyList;
}

export interface PaginatedAdminIntegrationList {
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
  results?: AdminIntegration[];
}

export interface PaginatedAdminIntegrationListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminIntegrationList;
}

export interface PaginatedAdminIntegrationWebhookList {
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
  results?: AdminIntegrationWebhook[];
}

export interface PaginatedAdminIntegrationWebhookListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminIntegrationWebhookList;
}

export interface PaginatedAdminRatePairList {
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
  results?: AdminRatePair[];
}

export interface PaginatedAdminRatePairListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminRatePairList;
}

export interface PaginatedAdminUserList {
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
  results?: AdminUser[];
}

export interface PaginatedAdminUserListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminUserList;
}

export interface PaginatedUserConversionList {
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
  results?: UserConversion[];
}

export interface PaginatedUserConversionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedUserConversionList;
}

export interface PaginatedUserConversionPairList {
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
  results?: UserConversionPair[];
}

export interface PaginatedUserConversionPairListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedUserConversionPairList;
}

export interface PaginatedUserCurrencyList {
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
  results?: UserCurrency[];
}

export interface PaginatedUserCurrencyListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedUserCurrencyList;
}

export interface PaginatedUserRateList {
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
  results?: UserRate[];
}

export interface PaginatedUserRateListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedUserRateList;
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
  name?: string;
  display_currency?: string;
  operational_account?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCurrency {
  /** @maxLength 30 */
  code?: string;
  /** @maxLength 30 */
  display_code?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxLength 30 */
  symbol?: string | null;
  /** @maxLength 30 */
  unit?: string | null;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  divisibility?: number;
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminIntegration {
  id?: string;
  /** @maxLength 50 */
  slug?: string;
  /** @maxLength 50 */
  name?: string;
  /** @maxLength 255 */
  description?: string | null;
  created?: number;
  updated?: number;
  events?: ("conversion.quote" | "conversion.execute")[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminIntegrationWebhook {
  id?: string;
  /** @format uri */
  url?: string;
  /**
   * * `conversion.quote` - conversion.quote
   * * `conversion.execute` - conversion.execute
   */
  event?: "conversion.quote" | "conversion.execute";
  /** @maxLength 250 */
  secret?: string;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminRatePair {
  id?: string;
  key?: string;
  path?: string | null;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateConversion {
  id?: string;
  user?: string;
  key?: string;
  from_amount?: number;
  from_fee?: number;
  from_total_amount?: number;
  to_amount?: number;
  to_fee?: number;
  to_total_amount?: number;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string;
  debit_account?: string | null;
  credit_account?: string | null;
  operational_account?: string;
  /**
   * * `quoted` - Quoted
   * * `pending` - Pending
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status?: "quoted" | "pending" | "complete" | "failed";
  collection?: string | null;
  txns?: string[];
  metadata?: Record<string, any>;
  expires?: number;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateConversionPair {
  id?: string;
  key?: string;
  path?: string | null;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string | null;
  operational_account?: string | null;
  /** @min 1 */
  quote_duration?: number;
  enabled?: boolean;
  created?: number;
  updated?: number;
  integration?: string | null;
  /**
   * * `operational` - Operational
   * * `non_operational` - Non Operational
   */
  transaction_type?: "operational" | "non_operational";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUser {
  id?: string;
  /** @maxLength 12 */
  display_currency?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedUserUpdateConversion {
  id?: string;
  key?: string;
  from_amount?: number;
  from_fee?: number;
  from_total_amount?: number;
  to_amount?: number;
  to_fee?: number;
  to_total_amount?: number;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate?: string;
  debit_account?: string | null;
  credit_account?: string | null;
  /**
   * * `quoted` - Quoted
   * * `pending` - Pending
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status?: "quoted" | "pending" | "complete" | "failed";
  collection?: string | null;
  txns?: string[];
  metadata?: Record<string, any>;
  expires?: number;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedUserUpdateSettings {
  display_currency?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Rate {
  id: string;
  key: string;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate: string;
  created: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserConversion {
  id: string;
  key: string;
  from_amount: number;
  from_fee: number;
  from_total_amount: number;
  to_amount: number;
  to_fee: number;
  to_total_amount: number;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate: string;
  debit_account: string | null;
  credit_account: string | null;
  /**
   * * `quoted` - Quoted
   * * `pending` - Pending
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status?: "quoted" | "pending" | "complete" | "failed";
  collection: string | null;
  txns: string[];
  metadata: Record<string, any>;
  expires: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserConversionPair {
  id: string;
  key: string;
  created: number;
  updated: number;
}

export interface UserConversionPairResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: UserConversionPair;
}

export interface UserConversionResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: UserConversion;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserCreateConversion {
  id: string;
  key: string;
  from_amount?: number | null;
  from_fee: number;
  from_total_amount: number;
  to_amount?: number | null;
  to_fee: number;
  to_total_amount: number;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate: string;
  /** @maxLength 64 */
  debit_account?: string | null;
  /** @maxLength 64 */
  credit_account?: string | null;
  /**
   * * `quoted` - Quoted
   * * `pending` - Pending
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "quoted" | "pending" | "complete" | "failed";
  collection: string | null;
  txns: string[];
  metadata?: Record<string, any>;
  expires: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserCurrency {
  /** @maxLength 30 */
  code: string;
  /** @maxLength 30 */
  display_code?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxLength 30 */
  symbol?: string | null;
  /** @maxLength 30 */
  unit?: string | null;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  divisibility?: number;
}

export interface UserCurrencyResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: UserCurrency;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserRate {
  id: string;
  key: string;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate: string;
  created: number;
}

export interface UserRateResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: UserRate;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserSettings {
  display_currency: string;
}

export interface UserSettingsResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: UserSettings;
}

export interface UserSnapshotRate {
  rates: Record<
    string,
    {
      rate?: string;
      created?: number;
    }
  >;
}

export interface UserSnapshotRateResponse {
  /** @example "success" */
  status?: string;
  data?: UserSnapshotRate;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserUpdateConversion {
  id: string;
  key: string;
  from_amount: number;
  from_fee: number;
  from_total_amount: number;
  to_amount: number;
  to_fee: number;
  to_total_amount: number;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate: string;
  debit_account: string | null;
  credit_account: string | null;
  /**
   * * `quoted` - Quoted
   * * `pending` - Pending
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "quoted" | "pending" | "complete" | "failed";
  collection: string | null;
  txns: string[];
  metadata: Record<string, any>;
  expires: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserUpdateSettings {
  display_currency?: string | null;
}

export interface Webhook {
  id: string;
  /**
   * * `currency.create` - currency.create
   * * `currency.update` - currency.update
   * * `transaction.execute` - transaction.execute
   */
  event: "currency.create" | "currency.update" | "transaction.execute";
  company: string;
  data: Record<string, any>;
}

export type ActivateCreateData = ActionResponse;

export type AdminCompanyRetrieveData = AdminCompanyResponse;

export type AdminCompanyUpdateData = AdminCompanyResponse;

export type AdminCompanyPartialUpdateData = AdminCompanyResponse;

export interface AdminConversionPairsListParams {
  id?: number;
  key?: string;
  /** Multiple values may be separated by commas. */
  key__in?: string[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminConversionPairsListData =
  PaginatedAdminConversionPairListResponse;

export type AdminConversionPairsCreateData = AdminConversionPairResponse;

export type AdminConversionPairsRetrieveData = AdminConversionPairResponse;

export type AdminConversionPairsUpdateData = AdminConversionPairResponse;

export type AdminConversionPairsPartialUpdateData = AdminConversionPairResponse;

export type AdminConversionPairsDestroyData = AdminConversionPairResponse;

export interface AdminConversionsListParams {
  created?: string;
  created__gt?: string;
  created__gte?: string;
  created__lt?: string;
  created__lte?: string;
  id?: number;
  key?: string;
  /** Multiple values may be separated by commas. */
  key__in?: string[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  user?: string;
}

export type AdminConversionsListData = PaginatedAdminConversionListResponse;

export type AdminConversionsCreateData = AdminConversionResponse;

export type AdminConversionsRetrieveData = AdminConversionResponse;

export type AdminConversionsUpdateData = AdminConversionResponse;

export type AdminConversionsPartialUpdateData = AdminConversionResponse;

export interface AdminCurrenciesListParams {
  code?: string;
  /** Multiple values may be separated by commas. */
  code__in?: string[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  unit?: string;
}

export type AdminCurrenciesListData = PaginatedAdminCurrencyListResponse;

export type AdminCurrenciesCreateData = AdminCurrencyResponse;

export type AdminCurrenciesRetrieveData = AdminCurrencyResponse;

export type AdminCurrenciesUpdateData = AdminCurrencyResponse;

export type AdminCurrenciesPartialUpdateData = AdminCurrencyResponse;

export interface AdminIntegrationsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminIntegrationsListData = PaginatedAdminIntegrationListResponse;

export type AdminIntegrationsCreateData = AdminIntegrationResponse;

export type AdminIntegrationsRetrieveData = AdminIntegrationResponse;

export type AdminIntegrationsUpdateData = AdminIntegrationResponse;

export type AdminIntegrationsPartialUpdateData = AdminIntegrationResponse;

export type AdminIntegrationsDestroyData = AdminIntegrationResponse;

export interface AdminIntegrationsWebhooksListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type AdminIntegrationsWebhooksListData =
  PaginatedAdminIntegrationWebhookListResponse;

export type AdminIntegrationsWebhooksCreateData =
  AdminIntegrationWebhookResponse;

export type AdminIntegrationsWebhooksRetrieveData =
  AdminIntegrationWebhookResponse;

export type AdminIntegrationsWebhooksUpdateData =
  AdminIntegrationWebhookResponse;

export type AdminIntegrationsWebhooksPartialUpdateData =
  AdminIntegrationWebhookResponse;

export type AdminIntegrationsWebhooksDestroyData =
  AdminIntegrationWebhookResponse;

export interface AdminRatePairsListParams {
  id?: number;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminRatePairsListData = PaginatedAdminRatePairListResponse;

export type AdminRatePairsCreateData = AdminRatePairResponse;

export type AdminRatePairsRetrieveData = AdminRatePairResponse;

export type AdminRatePairsUpdateData = AdminRatePairResponse;

export type AdminRatePairsPartialUpdateData = AdminRatePairResponse;

export type AdminRatePairsDestroyData = AdminRatePairResponse;

export interface AdminUsersListParams {
  display_currency?: string;
  /** Multiple values may be separated by commas. */
  display_currency__in?: string[];
  id?: number;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminUsersListData = PaginatedAdminUserListResponse;

export type AdminUsersRetrieveData = AdminUserResponse;

export type AdminUsersUpdateData = AdminUserResponse;

export type AdminUsersPartialUpdateData = AdminUserResponse;

export type DeactivateCreateData = ActionResponse;

export interface UserConversionPairsListParams {
  id?: number;
  key?: string;
  /** Multiple values may be separated by commas. */
  key__in?: string[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UserConversionPairsListData =
  PaginatedUserConversionPairListResponse;

export type UserConversionPairsRetrieveData = UserConversionPairResponse;

export interface UserConversionsListParams {
  created?: string;
  created__gt?: string;
  created__gte?: string;
  created__lt?: string;
  created__lte?: string;
  id?: number;
  key?: string;
  /** Multiple values may be separated by commas. */
  key__in?: string[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
}

export type UserConversionsListData = PaginatedUserConversionListResponse;

export type UserConversionsCreateData = UserConversionResponse;

export type UserConversionsRetrieveData = UserConversionResponse;

export type UserConversionsUpdateData = UserConversionResponse;

export type UserConversionsPartialUpdateData = UserConversionResponse;

export interface UserCurrenciesListParams {
  code?: string;
  /** Multiple values may be separated by commas. */
  code__in?: string[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  unit?: string;
}

export type UserCurrenciesListData = PaginatedUserCurrencyListResponse;

export type UserCurrenciesRetrieveData = UserCurrencyResponse;

export interface UserRatesListParams {
  created?: string;
  created__gt?: string;
  created__gte?: string;
  created__lt?: string;
  created__lte?: string;
  id?: number;
  key?: string;
  /** Multiple values may be separated by commas. */
  key__in?: string[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UserRatesListData = PaginatedUserRateListResponse;

export type UserRatesRetrieveData = UserRateResponse;

export type UserRatesSnapshotRetrieveData = UserSnapshotRateResponse;

export type UserRatesSnapshotsListData = NewSnapshotRateListResponse;

export type UserSettingsRetrieveData = UserSettingsResponse;

export type UserSettingsUpdateData = UserSettingsResponse;

export type UserSettingsPartialUpdateData = UserSettingsResponse;

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
  public baseUrl: string = "https://conversion.services.rehive.com/api/";
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
 * @title Conversion Service API
 * @version 1 (1)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://conversion.services.rehive.com/api/
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **Conversion Service API** is used for currency rates and conversions in Rehive.
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
     * @name AdminConversionPairsList
     * @summary List conversion pairs
     * @request GET:/admin/conversion-pairs/
     * @secure
     */
    adminConversionPairsList: (
      query: AdminConversionPairsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionPairsListData, any>({
        path: `/admin/conversion-pairs/`,
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
     * @name AdminConversionPairsCreate
     * @summary Create conversion pair
     * @request POST:/admin/conversion-pairs/
     * @secure
     */
    adminConversionPairsCreate: (
      data: AdminCreateConversionPair,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionPairsCreateData, any>({
        path: `/admin/conversion-pairs/`,
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
     * @name AdminConversionPairsRetrieve
     * @summary Retrieve conversion pair
     * @request GET:/admin/conversion-pairs/{identifier}/
     * @secure
     */
    adminConversionPairsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionPairsRetrieveData, any>({
        path: `/admin/conversion-pairs/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminConversionPairsUpdate
     * @summary Update conversion pair
     * @request PUT:/admin/conversion-pairs/{identifier}/
     * @secure
     */
    adminConversionPairsUpdate: (
      identifier: string,
      data: AdminConversionPair,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionPairsUpdateData, any>({
        path: `/admin/conversion-pairs/${identifier}/`,
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
     * @name AdminConversionPairsPartialUpdate
     * @summary Partially update conversion pair
     * @request PATCH:/admin/conversion-pairs/{identifier}/
     * @secure
     */
    adminConversionPairsPartialUpdate: (
      identifier: string,
      data: PatchedAdminUpdateConversionPair,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionPairsPartialUpdateData, any>({
        path: `/admin/conversion-pairs/${identifier}/`,
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
     * @name AdminConversionPairsDestroy
     * @summary Delete conversion pair
     * @request DELETE:/admin/conversion-pairs/{identifier}/
     * @secure
     */
    adminConversionPairsDestroy: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionPairsDestroyData, any>({
        path: `/admin/conversion-pairs/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminConversionsList
     * @summary List conversions
     * @request GET:/admin/conversions/
     * @secure
     */
    adminConversionsList: (
      query: AdminConversionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionsListData, any>({
        path: `/admin/conversions/`,
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
     * @name AdminConversionsCreate
     * @summary Create conversion
     * @request POST:/admin/conversions/
     * @secure
     */
    adminConversionsCreate: (
      data: AdminCreateConversion,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionsCreateData, any>({
        path: `/admin/conversions/`,
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
     * @name AdminConversionsRetrieve
     * @summary Retrieve conversion
     * @request GET:/admin/conversions/{identifier}/
     * @secure
     */
    adminConversionsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionsRetrieveData, any>({
        path: `/admin/conversions/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminConversionsUpdate
     * @summary Update conversion
     * @request PUT:/admin/conversions/{identifier}/
     * @secure
     */
    adminConversionsUpdate: (
      identifier: string,
      data: AdminUpdateConversion,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionsUpdateData, any>({
        path: `/admin/conversions/${identifier}/`,
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
     * @name AdminConversionsPartialUpdate
     * @summary Partially update conversion
     * @request PATCH:/admin/conversions/{identifier}/
     * @secure
     */
    adminConversionsPartialUpdate: (
      identifier: string,
      data: PatchedAdminUpdateConversion,
      params: RequestParams = {},
    ) =>
      this.request<AdminConversionsPartialUpdateData, any>({
        path: `/admin/conversions/${identifier}/`,
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
     * @name AdminCurrenciesList
     * @summary List currencies
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
     * @name AdminCurrenciesCreate
     * @summary Create currency
     * @request POST:/admin/currencies/
     * @secure
     */
    adminCurrenciesCreate: (data: AdminCurrency, params: RequestParams = {}) =>
      this.request<AdminCurrenciesCreateData, any>({
        path: `/admin/currencies/`,
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
     * @name AdminCurrenciesRetrieve
     * @summary Retrieve currency
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
     * @summary Update currency
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
     * @summary Partially update currency
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
     * @name AdminIntegrationsList
     * @summary List integration
     * @request GET:/admin/integrations/
     * @secure
     */
    adminIntegrationsList: (
      query: AdminIntegrationsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsListData, any>({
        path: `/admin/integrations/`,
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
     * @name AdminIntegrationsCreate
     * @summary Create integration
     * @request POST:/admin/integrations/
     * @secure
     */
    adminIntegrationsCreate: (
      data: AdminIntegration,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsCreateData, any>({
        path: `/admin/integrations/`,
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
     * @name AdminIntegrationsRetrieve
     * @summary Retrieve integration
     * @request GET:/admin/integrations/{identifier}/
     * @secure
     */
    adminIntegrationsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsRetrieveData, any>({
        path: `/admin/integrations/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminIntegrationsUpdate
     * @summary Update integration
     * @request PUT:/admin/integrations/{identifier}/
     * @secure
     */
    adminIntegrationsUpdate: (
      identifier: string,
      data: AdminIntegration,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsUpdateData, any>({
        path: `/admin/integrations/${identifier}/`,
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
     * @name AdminIntegrationsPartialUpdate
     * @summary Partially update integration
     * @request PATCH:/admin/integrations/{identifier}/
     * @secure
     */
    adminIntegrationsPartialUpdate: (
      identifier: string,
      data: PatchedAdminIntegration,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsPartialUpdateData, any>({
        path: `/admin/integrations/${identifier}/`,
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
     * @name AdminIntegrationsDestroy
     * @summary Delete integration
     * @request DELETE:/admin/integrations/{identifier}/
     * @secure
     */
    adminIntegrationsDestroy: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsDestroyData, any>({
        path: `/admin/integrations/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminIntegrationsWebhooksList
     * @summary List integration webhooks
     * @request GET:/admin/integrations/{identifier}/webhooks/
     * @secure
     */
    adminIntegrationsWebhooksList: (
      { identifier, ...query }: AdminIntegrationsWebhooksListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsWebhooksListData, any>({
        path: `/admin/integrations/${identifier}/webhooks/`,
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
     * @name AdminIntegrationsWebhooksCreate
     * @summary Create integration webhook
     * @request POST:/admin/integrations/{identifier}/webhooks/
     * @secure
     */
    adminIntegrationsWebhooksCreate: (
      identifier: string,
      data: AdminIntegrationWebhook,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsWebhooksCreateData, any>({
        path: `/admin/integrations/${identifier}/webhooks/`,
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
     * @name AdminIntegrationsWebhooksRetrieve
     * @summary Retrieve integration webhook
     * @request GET:/admin/integrations/{integration_id}/webhooks/{webhook_id}/
     * @secure
     */
    adminIntegrationsWebhooksRetrieve: (
      integrationId: string,
      webhookId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsWebhooksRetrieveData, any>({
        path: `/admin/integrations/${integrationId}/webhooks/${webhookId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminIntegrationsWebhooksUpdate
     * @summary Update integration webhook
     * @request PUT:/admin/integrations/{integration_id}/webhooks/{webhook_id}/
     * @secure
     */
    adminIntegrationsWebhooksUpdate: (
      integrationId: string,
      webhookId: string,
      data: AdminIntegrationWebhook,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsWebhooksUpdateData, any>({
        path: `/admin/integrations/${integrationId}/webhooks/${webhookId}/`,
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
     * @name AdminIntegrationsWebhooksPartialUpdate
     * @summary Partially update integration webhook
     * @request PATCH:/admin/integrations/{integration_id}/webhooks/{webhook_id}/
     * @secure
     */
    adminIntegrationsWebhooksPartialUpdate: (
      integrationId: string,
      webhookId: string,
      data: PatchedAdminIntegrationWebhook,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsWebhooksPartialUpdateData, any>({
        path: `/admin/integrations/${integrationId}/webhooks/${webhookId}/`,
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
     * @name AdminIntegrationsWebhooksDestroy
     * @summary Delete integration webhook
     * @request DELETE:/admin/integrations/{integration_id}/webhooks/{webhook_id}/
     * @secure
     */
    adminIntegrationsWebhooksDestroy: (
      integrationId: string,
      webhookId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsWebhooksDestroyData, any>({
        path: `/admin/integrations/${integrationId}/webhooks/${webhookId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminRatePairsList
     * @summary List rate pairs
     * @request GET:/admin/rate-pairs/
     * @secure
     */
    adminRatePairsList: (
      query: AdminRatePairsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminRatePairsListData, any>({
        path: `/admin/rate-pairs/`,
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
     * @name AdminRatePairsCreate
     * @summary Create rate pair
     * @request POST:/admin/rate-pairs/
     * @secure
     */
    adminRatePairsCreate: (
      data: AdminCreateRatePair,
      params: RequestParams = {},
    ) =>
      this.request<AdminRatePairsCreateData, any>({
        path: `/admin/rate-pairs/`,
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
     * @name AdminRatePairsRetrieve
     * @summary Retrieve rate pair
     * @request GET:/admin/rate-pairs/{identifier}/
     * @secure
     */
    adminRatePairsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminRatePairsRetrieveData, any>({
        path: `/admin/rate-pairs/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminRatePairsUpdate
     * @summary Update rate pair
     * @request PUT:/admin/rate-pairs/{identifier}/
     * @secure
     */
    adminRatePairsUpdate: (
      identifier: string,
      data: AdminRatePair,
      params: RequestParams = {},
    ) =>
      this.request<AdminRatePairsUpdateData, any>({
        path: `/admin/rate-pairs/${identifier}/`,
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
     * @name AdminRatePairsPartialUpdate
     * @summary Partially update rate pair
     * @request PATCH:/admin/rate-pairs/{identifier}/
     * @secure
     */
    adminRatePairsPartialUpdate: (
      identifier: string,
      data: PatchedAdminRatePair,
      params: RequestParams = {},
    ) =>
      this.request<AdminRatePairsPartialUpdateData, any>({
        path: `/admin/rate-pairs/${identifier}/`,
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
     * @name AdminRatePairsDestroy
     * @summary Delete rate pair
     * @request DELETE:/admin/rate-pairs/{identifier}/
     * @secure
     */
    adminRatePairsDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminRatePairsDestroyData, any>({
        path: `/admin/rate-pairs/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminUsersList
     * @summary List users
     * @request GET:/admin/users/
     * @secure
     */
    adminUsersList: (query: AdminUsersListParams, params: RequestParams = {}) =>
      this.request<AdminUsersListData, any>({
        path: `/admin/users/`,
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
     * @name AdminUsersRetrieve
     * @summary Retrieve user
     * @request GET:/admin/users/{identifier}/
     * @secure
     */
    adminUsersRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminUsersRetrieveData, any>({
        path: `/admin/users/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminUsersUpdate
     * @summary Update user
     * @request PUT:/admin/users/{identifier}/
     * @secure
     */
    adminUsersUpdate: (
      identifier: string,
      data: AdminUser,
      params: RequestParams = {},
    ) =>
      this.request<AdminUsersUpdateData, any>({
        path: `/admin/users/${identifier}/`,
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
     * @name AdminUsersPartialUpdate
     * @summary Partially update user
     * @request PATCH:/admin/users/{identifier}/
     * @secure
     */
    adminUsersPartialUpdate: (
      identifier: string,
      data: PatchedAdminUser,
      params: RequestParams = {},
    ) =>
      this.request<AdminUsersPartialUpdateData, any>({
        path: `/admin/users/${identifier}/`,
        method: "PATCH",
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
     * @name UserConversionPairsList
     * @summary List conversion pairs
     * @request GET:/user/conversion-pairs/
     * @secure
     */
    userConversionPairsList: (
      query: UserConversionPairsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserConversionPairsListData, any>({
        path: `/user/conversion-pairs/`,
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
     * @name UserConversionPairsRetrieve
     * @summary Retrieve conversion pair
     * @request GET:/user/conversion-pairs/{identifier}/
     * @secure
     */
    userConversionPairsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<UserConversionPairsRetrieveData, any>({
        path: `/user/conversion-pairs/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserConversionsList
     * @summary List conversions
     * @request GET:/user/conversions/
     * @secure
     */
    userConversionsList: (
      query: UserConversionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserConversionsListData, any>({
        path: `/user/conversions/`,
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
     * @name UserConversionsCreate
     * @summary Create conversion
     * @request POST:/user/conversions/
     * @secure
     */
    userConversionsCreate: (
      data: UserCreateConversion,
      params: RequestParams = {},
    ) =>
      this.request<UserConversionsCreateData, any>({
        path: `/user/conversions/`,
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
     * @name UserConversionsRetrieve
     * @summary Retrieve conversion
     * @request GET:/user/conversions/{identifier}/
     * @secure
     */
    userConversionsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UserConversionsRetrieveData, any>({
        path: `/user/conversions/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserConversionsUpdate
     * @summary Update conversion
     * @request PUT:/user/conversions/{identifier}/
     * @secure
     */
    userConversionsUpdate: (
      identifier: string,
      data: UserUpdateConversion,
      params: RequestParams = {},
    ) =>
      this.request<UserConversionsUpdateData, any>({
        path: `/user/conversions/${identifier}/`,
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
     * @name UserConversionsPartialUpdate
     * @summary Partially update conversion
     * @request PATCH:/user/conversions/{identifier}/
     * @secure
     */
    userConversionsPartialUpdate: (
      identifier: string,
      data: PatchedUserUpdateConversion,
      params: RequestParams = {},
    ) =>
      this.request<UserConversionsPartialUpdateData, any>({
        path: `/user/conversions/${identifier}/`,
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
     * @name UserCurrenciesList
     * @summary List currencies
     * @request GET:/user/currencies/
     * @secure
     */
    userCurrenciesList: (
      query: UserCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserCurrenciesListData, any>({
        path: `/user/currencies/`,
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
     * @name UserCurrenciesRetrieve
     * @summary Retrieve currency
     * @request GET:/user/currencies/{code}/
     * @secure
     */
    userCurrenciesRetrieve: (code: string, params: RequestParams = {}) =>
      this.request<UserCurrenciesRetrieveData, any>({
        path: `/user/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserRatesList
     * @summary List rates
     * @request GET:/user/rates/
     * @secure
     */
    userRatesList: (query: UserRatesListParams, params: RequestParams = {}) =>
      this.request<UserRatesListData, any>({
        path: `/user/rates/`,
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
     * @name UserRatesRetrieve
     * @summary Retrieve rate
     * @request GET:/user/rates/{identifier}/
     * @secure
     */
    userRatesRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UserRatesRetrieveData, any>({
        path: `/user/rates/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserRatesSnapshotRetrieve
     * @summary Retrieve rate snapshot
     * @request GET:/user/rates/snapshot/
     * @secure
     */
    userRatesSnapshotRetrieve: (params: RequestParams = {}) =>
      this.request<UserRatesSnapshotRetrieveData, any>({
        path: `/user/rates/snapshot/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserRatesSnapshotsList
     * @summary List rate snapshots
     * @request GET:/user/rates/snapshots/
     * @secure
     */
    userRatesSnapshotsList: (params: RequestParams = {}) =>
      this.request<UserRatesSnapshotsListData, any>({
        path: `/user/rates/snapshots/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserSettingsRetrieve
     * @summary Retrieve user settings
     * @request GET:/user/settings/
     * @secure
     */
    userSettingsRetrieve: (params: RequestParams = {}) =>
      this.request<UserSettingsRetrieveData, any>({
        path: `/user/settings/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserSettingsUpdate
     * @summary Update user settings
     * @request PUT:/user/settings/
     * @secure
     */
    userSettingsUpdate: (
      data: UserUpdateSettings,
      params: RequestParams = {},
    ) =>
      this.request<UserSettingsUpdateData, any>({
        path: `/user/settings/`,
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
     * @name UserSettingsPartialUpdate
     * @summary Partially update user settings
     * @request PATCH:/user/settings/
     * @secure
     */
    userSettingsPartialUpdate: (
      data: PatchedUserUpdateSettings,
      params: RequestParams = {},
    ) =>
      this.request<UserSettingsPartialUpdateData, any>({
        path: `/user/settings/`,
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
