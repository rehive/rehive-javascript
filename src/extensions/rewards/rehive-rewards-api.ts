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
export interface AdminCampaign {
  id: string;
  /** @maxLength 50 */
  name?: string;
  /** @format uri */
  image?: string | null;
  /** @maxLength 255 */
  description?: string;
  start_date: number;
  end_date: number;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  currency: Currency;
  /** @maxLength 200 */
  credit_account_name?: string | null;
  /** @maxLength 64 */
  credit_account?: string | null;
  /** @maxLength 64 */
  account: string;
  total: number;
  fixed_amount: number | null;
  /**
   * @format decimal
   * @pattern ^-?\d{0,7}(?:\.\d{0,2})?$
   */
  percentage?: string | null;
  balance: number;
  /**
   * * `percentage` - Percentage
   * * `fixed` - Fixed
   * * `fixedpercentage` - Fixedpercentage
   */
  type?: "percentage" | "fixed" | "fixedpercentage";
  /**
   * * `pending` - Pending
   * * `accepted` - Accepted
   * * `rejected` - Rejected
   */
  default_status?: "pending" | "accepted" | "rejected";
  users?: any[];
  groups?: any[];
  /**
   * @min 1
   * @max 1000000000
   */
  max_per_user?: number | null;
  /**
   * @min 1
   * @max 1000000000
   */
  max_per_user_per_timeframe?: number | null;
  /**
   * * `daily` - Daily
   * * `weekly` - Weekly
   * * `monthly` - Monthly
   */
  timeframe?: "daily" | "weekly" | "monthly" | "" | null;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  transactions_currency: Currency;
  /**
   * @min 1
   * @max 1000000000
   */
  min_num_transactions?: number | null;
  min_value_transactions: number | null;
  /** @default true */
  active?: boolean;
  /** @default true */
  visible?: boolean;
  /** @default true */
  claim?: boolean;
  /** @maxLength 250 */
  expression?: string | null;
  /**
   * * `company.link.create` - company.link.create
   * * `company.link.update` - company.link.update
   * * `company.update` - company.update
   * * `currency.create` - currency.create
   * * `currency.update` - currency.update
   * * `user.create` - user.create
   * * `user.update` - user.update
   * * `user.password.reset` - user.password.reset
   * * `user.password.set` - user.password.set
   * * `user.deactivate.verify` - user.deactivate.verify
   * * `user.request_delete.verify` - user.request_delete.verify
   * * `user.email.verify` - user.email.verify
   * * `user.mobile.verify` - user.mobile.verify
   * * `email.create` - email.create
   * * `email.update` - email.update
   * * `mobile.create` - mobile.create
   * * `mobile.update` - mobile.update
   * * `address.create` - address.create
   * * `address.update` - address.update
   * * `document.create` - document.create
   * * `document.update` - document.update
   * * `bank_account.create` - bank_account.create
   * * `bank_account.update` - bank_account.update
   * * `crypto_account.create` - crypto_account.create
   * * `crypto_account.update` - crypto_account.update
   * * `account.create` - account.create
   * * `account.update` - account.update
   * * `transaction.create` - transaction.create
   * * `transaction.update` - transaction.update
   * * `transaction.initiate` - transaction.initiate
   * * `transaction.execute` - transaction.execute
   * * `transaction.transition.create` - transaction.transition.create
   * * `transaction.transition.update` - transaction.transition.update
   * * `mfa.sms.verify` - mfa.sms.verify
   */
  event?:
    | "company.link.create"
    | "company.link.update"
    | "company.update"
    | "currency.create"
    | "currency.update"
    | "user.create"
    | "user.update"
    | "user.password.reset"
    | "user.password.set"
    | "user.deactivate.verify"
    | "user.request_delete.verify"
    | "user.email.verify"
    | "user.mobile.verify"
    | "email.create"
    | "email.update"
    | "mobile.create"
    | "mobile.update"
    | "address.create"
    | "address.update"
    | "document.create"
    | "document.update"
    | "bank_account.create"
    | "bank_account.update"
    | "crypto_account.create"
    | "crypto_account.update"
    | "account.create"
    | "account.update"
    | "transaction.create"
    | "transaction.update"
    | "transaction.initiate"
    | "transaction.execute"
    | "transaction.transition.create"
    | "transaction.transition.update"
    | "mfa.sms.verify"
    | ""
    | null;
  /** @maxLength 150 */
  event_user?: string | null;
  /** @maxLength 150 */
  event_amount?: string | null;
}

export interface AdminCampaignResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminCampaign;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompany {
  id: string;
  identifier: string;
  /** @format uuid */
  secret: string;
  name: string;
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
export interface AdminCreateReward {
  id: string;
  user: string;
  campaign?: string;
  currency?: string;
  amount?: number;
  /**
   * * `pending` - Pending
   * * `accepted` - Accepted
   * * `rejected` - Rejected
   */
  status?: "pending" | "accepted" | "rejected";
  collection: string | null;
  created: number;
  data?: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUpdateCampaign {
  id: string;
  /** @maxLength 50 */
  name?: string;
  /** @format uri */
  image?: string | null;
  /** @maxLength 255 */
  description?: string;
  start_date?: number | null;
  end_date?: number | null;
  currency: string;
  /** @maxLength 200 */
  credit_account_name?: string | null;
  /** @maxLength 64 */
  credit_account?: string | null;
  account?: string | null;
  total: number;
  fixed_amount?: number;
  /**
   * @format double
   * @min 0
   * @max 10000000
   * @exclusiveMax true
   */
  percentage?: number | null;
  balance: number;
  /**
   * * `percentage` - Percentage
   * * `fixed` - Fixed
   * * `fixedpercentage` - Fixedpercentage
   */
  type?: "percentage" | "fixed" | "fixedpercentage";
  /**
   * * `pending` - Pending
   * * `accepted` - Accepted
   * * `rejected` - Rejected
   */
  default_status?: "pending" | "accepted" | "rejected";
  users?: any[];
  groups?: any[];
  /**
   * @min 1
   * @max 1000000000
   */
  max_per_user?: number | null;
  /**
   * @min 1
   * @max 1000000000
   */
  max_per_user_per_timeframe?: number | null;
  /**
   * * `daily` - Daily
   * * `weekly` - Weekly
   * * `monthly` - Monthly
   */
  timeframe?: "daily" | "weekly" | "monthly" | "" | null;
  transactions_currency?: string | null;
  /**
   * @min 1
   * @max 1000000000
   */
  min_num_transactions?: number | null;
  min_value_transactions?: number | null;
  /** @default true */
  active?: boolean;
  /** @default true */
  visible?: boolean;
  /** @default true */
  claim?: boolean;
  /** @maxLength 250 */
  expression?: string | null;
  /**
   * * `company.link.create` - company.link.create
   * * `company.link.update` - company.link.update
   * * `company.update` - company.update
   * * `currency.create` - currency.create
   * * `currency.update` - currency.update
   * * `user.create` - user.create
   * * `user.update` - user.update
   * * `user.password.reset` - user.password.reset
   * * `user.password.set` - user.password.set
   * * `user.deactivate.verify` - user.deactivate.verify
   * * `user.request_delete.verify` - user.request_delete.verify
   * * `user.email.verify` - user.email.verify
   * * `user.mobile.verify` - user.mobile.verify
   * * `email.create` - email.create
   * * `email.update` - email.update
   * * `mobile.create` - mobile.create
   * * `mobile.update` - mobile.update
   * * `address.create` - address.create
   * * `address.update` - address.update
   * * `document.create` - document.create
   * * `document.update` - document.update
   * * `bank_account.create` - bank_account.create
   * * `bank_account.update` - bank_account.update
   * * `crypto_account.create` - crypto_account.create
   * * `crypto_account.update` - crypto_account.update
   * * `account.create` - account.create
   * * `account.update` - account.update
   * * `transaction.create` - transaction.create
   * * `transaction.update` - transaction.update
   * * `transaction.initiate` - transaction.initiate
   * * `transaction.execute` - transaction.execute
   * * `transaction.transition.create` - transaction.transition.create
   * * `transaction.transition.update` - transaction.transition.update
   * * `mfa.sms.verify` - mfa.sms.verify
   */
  event?:
    | "company.link.create"
    | "company.link.update"
    | "company.update"
    | "currency.create"
    | "currency.update"
    | "user.create"
    | "user.update"
    | "user.password.reset"
    | "user.password.set"
    | "user.deactivate.verify"
    | "user.request_delete.verify"
    | "user.email.verify"
    | "user.mobile.verify"
    | "email.create"
    | "email.update"
    | "mobile.create"
    | "mobile.update"
    | "address.create"
    | "address.update"
    | "document.create"
    | "document.update"
    | "bank_account.create"
    | "bank_account.update"
    | "crypto_account.create"
    | "crypto_account.update"
    | "account.create"
    | "account.update"
    | "transaction.create"
    | "transaction.update"
    | "transaction.initiate"
    | "transaction.execute"
    | "transaction.transition.create"
    | "transaction.transition.update"
    | "mfa.sms.verify"
    | ""
    | null;
  /** @maxLength 150 */
  event_user?: string | null;
  /** @maxLength 150 */
  event_amount?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminReward {
  id: string;
  user: string;
  campaign: Campaign;
  currency: Currency;
  amount: number;
  /**
   * * `pending` - Pending
   * * `accepted` - Accepted
   * * `rejected` - Rejected
   */
  status?: "pending" | "accepted" | "rejected";
  collection: string | null;
  type: string;
  created: number;
}

export interface AdminRewardResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminReward;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUser {
  id: string;
  referral_code: string | null;
  referee_code: string | null;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Campaign {
  id: string;
  /** @maxLength 50 */
  name?: string;
  /** @maxLength 255 */
  description?: string;
  active?: boolean;
  default_status: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Currency {
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
  enabled?: boolean;
}

export interface CurrencyResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Currency;
}

export interface Deactivate {
  token: string;
  /** @default false */
  purge?: boolean;
}

export interface PaginatedAdminCampaignList {
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
  results?: AdminCampaign[];
}

export interface PaginatedAdminCampaignListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminCampaignList;
}

export interface PaginatedAdminRewardList {
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
  results?: AdminReward[];
}

export interface PaginatedAdminRewardListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminRewardList;
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

export interface PaginatedCurrencyList {
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
  results?: Currency[];
}

export interface PaginatedCurrencyListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedCurrencyList;
}

export interface PaginatedUserCampaignList {
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
  results?: UserCampaign[];
}

export interface PaginatedUserCampaignListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedUserCampaignList;
}

export interface PaginatedUserRewardList {
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
  results?: UserReward[];
}

export interface PaginatedUserRewardListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedUserRewardList;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCompany {
  id?: string;
  identifier?: string;
  /** @format uuid */
  secret?: string;
  name?: string;
  operational_account?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCreateUpdateCampaign {
  id?: string;
  /** @maxLength 50 */
  name?: string;
  /** @format uri */
  image?: string | null;
  /** @maxLength 255 */
  description?: string;
  start_date?: number | null;
  end_date?: number | null;
  currency?: string;
  /** @maxLength 200 */
  credit_account_name?: string | null;
  /** @maxLength 64 */
  credit_account?: string | null;
  account?: string | null;
  total?: number;
  fixed_amount?: number;
  /**
   * @format double
   * @min 0
   * @max 10000000
   * @exclusiveMax true
   */
  percentage?: number | null;
  balance?: number;
  /**
   * * `percentage` - Percentage
   * * `fixed` - Fixed
   * * `fixedpercentage` - Fixedpercentage
   */
  type?: "percentage" | "fixed" | "fixedpercentage";
  /**
   * * `pending` - Pending
   * * `accepted` - Accepted
   * * `rejected` - Rejected
   */
  default_status?: "pending" | "accepted" | "rejected";
  users?: any[];
  groups?: any[];
  /**
   * @min 1
   * @max 1000000000
   */
  max_per_user?: number | null;
  /**
   * @min 1
   * @max 1000000000
   */
  max_per_user_per_timeframe?: number | null;
  /**
   * * `daily` - Daily
   * * `weekly` - Weekly
   * * `monthly` - Monthly
   */
  timeframe?: "daily" | "weekly" | "monthly" | "" | null;
  transactions_currency?: string | null;
  /**
   * @min 1
   * @max 1000000000
   */
  min_num_transactions?: number | null;
  min_value_transactions?: number | null;
  /** @default true */
  active?: boolean;
  /** @default true */
  visible?: boolean;
  /** @default true */
  claim?: boolean;
  /** @maxLength 250 */
  expression?: string | null;
  /**
   * * `company.link.create` - company.link.create
   * * `company.link.update` - company.link.update
   * * `company.update` - company.update
   * * `currency.create` - currency.create
   * * `currency.update` - currency.update
   * * `user.create` - user.create
   * * `user.update` - user.update
   * * `user.password.reset` - user.password.reset
   * * `user.password.set` - user.password.set
   * * `user.deactivate.verify` - user.deactivate.verify
   * * `user.request_delete.verify` - user.request_delete.verify
   * * `user.email.verify` - user.email.verify
   * * `user.mobile.verify` - user.mobile.verify
   * * `email.create` - email.create
   * * `email.update` - email.update
   * * `mobile.create` - mobile.create
   * * `mobile.update` - mobile.update
   * * `address.create` - address.create
   * * `address.update` - address.update
   * * `document.create` - document.create
   * * `document.update` - document.update
   * * `bank_account.create` - bank_account.create
   * * `bank_account.update` - bank_account.update
   * * `crypto_account.create` - crypto_account.create
   * * `crypto_account.update` - crypto_account.update
   * * `account.create` - account.create
   * * `account.update` - account.update
   * * `transaction.create` - transaction.create
   * * `transaction.update` - transaction.update
   * * `transaction.initiate` - transaction.initiate
   * * `transaction.execute` - transaction.execute
   * * `transaction.transition.create` - transaction.transition.create
   * * `transaction.transition.update` - transaction.transition.update
   * * `mfa.sms.verify` - mfa.sms.verify
   */
  event?:
    | "company.link.create"
    | "company.link.update"
    | "company.update"
    | "currency.create"
    | "currency.update"
    | "user.create"
    | "user.update"
    | "user.password.reset"
    | "user.password.set"
    | "user.deactivate.verify"
    | "user.request_delete.verify"
    | "user.email.verify"
    | "user.mobile.verify"
    | "email.create"
    | "email.update"
    | "mobile.create"
    | "mobile.update"
    | "address.create"
    | "address.update"
    | "document.create"
    | "document.update"
    | "bank_account.create"
    | "bank_account.update"
    | "crypto_account.create"
    | "crypto_account.update"
    | "account.create"
    | "account.update"
    | "transaction.create"
    | "transaction.update"
    | "transaction.initiate"
    | "transaction.execute"
    | "transaction.transition.create"
    | "transaction.transition.update"
    | "mfa.sms.verify"
    | ""
    | null;
  /** @maxLength 150 */
  event_user?: string | null;
  /** @maxLength 150 */
  event_amount?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminReward {
  id?: string;
  user?: string;
  campaign?: Campaign;
  currency?: Currency;
  amount?: number;
  /**
   * * `pending` - Pending
   * * `accepted` - Accepted
   * * `rejected` - Rejected
   */
  status?: "pending" | "accepted" | "rejected";
  collection?: string | null;
  type?: string;
  created?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedUserUpdateReferral {
  referral_code?: string | null;
  referee_code?: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface User {
  id: string;
  referral_code: string | null;
  referee_code: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserCampaign {
  id: string;
  /** @maxLength 50 */
  name?: string;
  description: string;
  /** @format uri */
  image?: string | null;
  start_date: number;
  end_date: number;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  currency: Currency;
  total: number;
  fixed_amount: number;
  /**
   * @format decimal
   * @pattern ^-?\d{0,7}(?:\.\d{0,2})?$
   */
  percentage?: string | null;
  balance: number;
  type: string;
  default_status: string;
  users?: any[];
  groups?: any[];
  /**
   * @min -2147483648
   * @max 2147483647
   */
  max_per_user?: number | null;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  max_per_user_per_timeframe?: number | null;
  timeframe?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  transactions_currency: Currency;
  /**
   * @min 1
   * @max 1000000000
   */
  min_num_transactions?: number | null;
  min_value_transactions: number | null;
  active?: boolean;
  claim?: boolean;
}

export interface UserCampaignResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: UserCampaign;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserCreateReward {
  id: string;
  user: string;
  campaign: string;
  currency: Currency;
  amount: number;
  status: string;
  collection: string | null;
  created: number;
  data?: Record<string, any>;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserReward {
  id: string;
  user: string;
  campaign: Campaign;
  currency: Currency;
  amount: number;
  status: string;
  type: string;
  /** @maxLength 64 */
  collection?: string | null;
  created: number;
}

export interface UserRewardResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: UserReward;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserUpdateReferral {
  referral_code: string | null;
  referee_code: string;
}

export interface Webhook {
  id: string;
  /**
   * * `company.link.create` - company.link.create
   * * `company.link.update` - company.link.update
   * * `company.update` - company.update
   * * `currency.create` - currency.create
   * * `currency.update` - currency.update
   * * `user.create` - user.create
   * * `user.update` - user.update
   * * `user.password.reset` - user.password.reset
   * * `user.password.set` - user.password.set
   * * `user.deactivate.verify` - user.deactivate.verify
   * * `user.request_delete.verify` - user.request_delete.verify
   * * `user.email.verify` - user.email.verify
   * * `user.mobile.verify` - user.mobile.verify
   * * `email.create` - email.create
   * * `email.update` - email.update
   * * `mobile.create` - mobile.create
   * * `mobile.update` - mobile.update
   * * `address.create` - address.create
   * * `address.update` - address.update
   * * `document.create` - document.create
   * * `document.update` - document.update
   * * `bank_account.create` - bank_account.create
   * * `bank_account.update` - bank_account.update
   * * `crypto_account.create` - crypto_account.create
   * * `crypto_account.update` - crypto_account.update
   * * `account.create` - account.create
   * * `account.update` - account.update
   * * `transaction.create` - transaction.create
   * * `transaction.update` - transaction.update
   * * `transaction.initiate` - transaction.initiate
   * * `transaction.execute` - transaction.execute
   * * `transaction.transition.create` - transaction.transition.create
   * * `transaction.transition.update` - transaction.transition.update
   * * `mfa.sms.verify` - mfa.sms.verify
   */
  event:
    | "company.link.create"
    | "company.link.update"
    | "company.update"
    | "currency.create"
    | "currency.update"
    | "user.create"
    | "user.update"
    | "user.password.reset"
    | "user.password.set"
    | "user.deactivate.verify"
    | "user.request_delete.verify"
    | "user.email.verify"
    | "user.mobile.verify"
    | "email.create"
    | "email.update"
    | "mobile.create"
    | "mobile.update"
    | "address.create"
    | "address.update"
    | "document.create"
    | "document.update"
    | "bank_account.create"
    | "bank_account.update"
    | "crypto_account.create"
    | "crypto_account.update"
    | "account.create"
    | "account.update"
    | "transaction.create"
    | "transaction.update"
    | "transaction.initiate"
    | "transaction.execute"
    | "transaction.transition.create"
    | "transaction.transition.update"
    | "mfa.sms.verify";
  company: string;
  data: Record<string, any>;
}

export type ActivateCreateData = ActionResponse;

export interface AdminCampaignsListParams {
  active?: boolean;
  available?: string;
  currency?: string;
  end_date?: string;
  end_date__gt?: string;
  end_date__lt?: string;
  /** @format uuid */
  id?: string;
  name__contains?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  search?: string;
  start_date?: string;
  start_date__gt?: string;
  start_date__lt?: string;
  type?: string;
  visible?: boolean;
}

export type AdminCampaignsListData = PaginatedAdminCampaignListResponse;

export type AdminCampaignsCreateData = AdminCampaignResponse;

export type AdminCampaignsRetrieveData = AdminCampaignResponse;

export type AdminCampaignsUpdateData = AdminCampaignResponse;

export type AdminCampaignsPartialUpdateData = AdminCampaignResponse;

export type AdminCampaignsDestroyData = AdminCampaignResponse;

export type AdminCompanyRetrieveData = AdminCompanyResponse;

export type AdminCompanyUpdateData = AdminCompanyResponse;

export type AdminCompanyPartialUpdateData = AdminCompanyResponse;

export interface AdminCurrenciesListParams {
  code?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminCurrenciesListData = PaginatedCurrencyListResponse;

export type AdminCurrenciesRetrieveData = CurrencyResponse;

export interface AdminRewardsListParams {
  campaign?: string;
  currency?: string;
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  status__in?: string;
  type?: string;
  user?: string;
}

export type AdminRewardsListData = PaginatedAdminRewardListResponse;

export type AdminRewardsCreateData = AdminRewardResponse;

export type AdminRewardsRetrieveData = AdminRewardResponse;

export type AdminRewardsUpdateData = AdminRewardResponse;

export type AdminRewardsPartialUpdateData = AdminRewardResponse;

export interface AdminUsersListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  referee_code?: string;
  referral_code?: string;
}

export type AdminUsersListData = PaginatedAdminUserListResponse;

export type AdminUsersRetrieveData = AdminUserResponse;

export type AdminWebhookCreateData = ActionResponse;

export type DeactivateCreateData = ActionResponse;

export type UserRetrieveData = UserResponse;

export type UserUpdateData = UserResponse;

export type UserPartialUpdateData = UserResponse;

export interface UserCampaignsListParams {
  active?: boolean;
  available?: string;
  currency?: string;
  end_date?: string;
  end_date__gt?: string;
  end_date__lt?: string;
  /** @format uuid */
  id?: string;
  name__contains?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  search?: string;
  start_date?: string;
  start_date__gt?: string;
  start_date__lt?: string;
  type?: string;
  visible?: boolean;
}

export type UserCampaignsListData = PaginatedUserCampaignListResponse;

export type UserCampaignsRetrieveData = UserCampaignResponse;

export interface UserRewardsListParams {
  campaign?: string;
  currency?: string;
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  status__in?: string;
  type?: string;
}

export type UserRewardsListData = PaginatedUserRewardListResponse;

export type UserRewardsCreateData = UserRewardResponse;

export type UserRewardsRetrieveData = UserRewardResponse;

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
  public baseUrl: string = "https://reward.services.rehive.io/api/";
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
 * @title Reward Service API
 * @version 1 (1)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://reward.services.rehive.io/api/
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **Reward Service API** is used for reward campaigns in Rehive.
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
     * @name AdminCampaignsList
     * @summary List campaign
     * @request GET:/admin/campaigns/
     * @secure
     */
    adminCampaignsList: (
      query: AdminCampaignsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminCampaignsListData, any>({
        path: `/admin/campaigns/`,
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
     * @name AdminCampaignsCreate
     * @summary Create campaign
     * @request POST:/admin/campaigns/
     * @secure
     */
    adminCampaignsCreate: (
      data: AdminCreateUpdateCampaign,
      params: RequestParams = {},
    ) =>
      this.request<AdminCampaignsCreateData, any>({
        path: `/admin/campaigns/`,
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
     * @name AdminCampaignsRetrieve
     * @summary Retrieve campaign
     * @request GET:/admin/campaigns/{id}/
     * @secure
     */
    adminCampaignsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<AdminCampaignsRetrieveData, any>({
        path: `/admin/campaigns/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCampaignsUpdate
     * @summary Update campaign
     * @request PUT:/admin/campaigns/{id}/
     * @secure
     */
    adminCampaignsUpdate: (
      id: string,
      data: AdminCreateUpdateCampaign,
      params: RequestParams = {},
    ) =>
      this.request<AdminCampaignsUpdateData, any>({
        path: `/admin/campaigns/${id}/`,
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
     * @name AdminCampaignsPartialUpdate
     * @summary Partially update campaign
     * @request PATCH:/admin/campaigns/{id}/
     * @secure
     */
    adminCampaignsPartialUpdate: (
      id: string,
      data: PatchedAdminCreateUpdateCampaign,
      params: RequestParams = {},
    ) =>
      this.request<AdminCampaignsPartialUpdateData, any>({
        path: `/admin/campaigns/${id}/`,
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
     * @name AdminCampaignsDestroy
     * @summary Delete campaign
     * @request DELETE:/admin/campaigns/{id}/
     * @secure
     */
    adminCampaignsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<AdminCampaignsDestroyData, any>({
        path: `/admin/campaigns/${id}/`,
        method: "DELETE",
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
     * @name AdminRewardsList
     * @summary List rewards
     * @request GET:/admin/rewards/
     * @secure
     */
    adminRewardsList: (
      query: AdminRewardsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminRewardsListData, any>({
        path: `/admin/rewards/`,
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
     * @name AdminRewardsCreate
     * @summary Create reward
     * @request POST:/admin/rewards/
     * @secure
     */
    adminRewardsCreate: (data: AdminCreateReward, params: RequestParams = {}) =>
      this.request<AdminRewardsCreateData, any>({
        path: `/admin/rewards/`,
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
     * @name AdminRewardsRetrieve
     * @summary Retrieve reward
     * @request GET:/admin/rewards/{id}/
     * @secure
     */
    adminRewardsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<AdminRewardsRetrieveData, any>({
        path: `/admin/rewards/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminRewardsUpdate
     * @summary Update reward
     * @request PUT:/admin/rewards/{id}/
     * @secure
     */
    adminRewardsUpdate: (
      id: string,
      data: AdminReward,
      params: RequestParams = {},
    ) =>
      this.request<AdminRewardsUpdateData, any>({
        path: `/admin/rewards/${id}/`,
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
     * @name AdminRewardsPartialUpdate
     * @summary Partially update reward
     * @request PATCH:/admin/rewards/{id}/
     * @secure
     */
    adminRewardsPartialUpdate: (
      id: string,
      data: PatchedAdminReward,
      params: RequestParams = {},
    ) =>
      this.request<AdminRewardsPartialUpdateData, any>({
        path: `/admin/rewards/${id}/`,
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
     * @request GET:/admin/users/{id}/
     * @secure
     */
    adminUsersRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<AdminUsersRetrieveData, any>({
        path: `/admin/users/${id}/`,
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
     * @summary Receive Platform webhook
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
    userUpdate: (data: UserUpdateReferral, params: RequestParams = {}) =>
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
     * @summary Partially update user
     * @request PATCH:/user/
     * @secure
     */
    userPartialUpdate: (
      data: PatchedUserUpdateReferral,
      params: RequestParams = {},
    ) =>
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
     * @name UserCampaignsList
     * @summary List campaigns
     * @request GET:/user/campaigns/
     * @secure
     */
    userCampaignsList: (
      query: UserCampaignsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserCampaignsListData, any>({
        path: `/user/campaigns/`,
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
     * @name UserCampaignsRetrieve
     * @summary Retrieve campaign
     * @request GET:/user/campaigns/{id}/
     * @secure
     */
    userCampaignsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserCampaignsRetrieveData, any>({
        path: `/user/campaigns/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserRewardsList
     * @summary List rewards
     * @request GET:/user/rewards/
     * @secure
     */
    userRewardsList: (
      query: UserRewardsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserRewardsListData, any>({
        path: `/user/rewards/`,
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
     * @name UserRewardsCreate
     * @summary Create reward
     * @request POST:/user/rewards/
     * @secure
     */
    userRewardsCreate: (data: UserCreateReward, params: RequestParams = {}) =>
      this.request<UserRewardsCreateData, any>({
        path: `/user/rewards/`,
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
     * @name UserRewardsRetrieve
     * @summary Retrieve user
     * @request GET:/user/rewards/{id}/
     * @secure
     */
    userRewardsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserRewardsRetrieveData, any>({
        path: `/user/rewards/${id}/`,
        method: "GET",
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
