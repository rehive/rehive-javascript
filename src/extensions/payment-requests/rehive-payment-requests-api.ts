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

/** Serialize company, update and delete. */
export interface AdminCompany {
  id: string;
  /** @format uuid */
  secret: string;
  name: string;
  reminder_intervals?: number[];
}

/** Serialize Company Payment Processors, view, create and update. */
export interface AdminCompanyPaymentProcessor {
  id: string;
  active?: boolean;
  /** @maxLength 255 */
  company_base_endpoint: string;
  /** @maxLength 255 */
  company_external_api_key: string;
  payment_processor?: string;
  /** @maxItems 100 */
  currencies?: string[];
  generate_accounts?: boolean;
}

export interface AdminCompanyPaymentProcessorResponse {
  /** @example "success" */
  status?: string;
  /** Serialize Company Payment Processors, view, create and update. */
  data?: AdminCompanyPaymentProcessor;
}

export interface AdminCompanyResponse {
  /** @example "success" */
  status?: string;
  /** Serialize company, update and delete. */
  data?: AdminCompany;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminPaymentProcessor {
  id: string;
  native: boolean;
  /** @maxLength 100 */
  unique_string_name: string;
  /** @maxLength 100 */
  logo?: string | null;
  /** @maxLength 100 */
  name: string;
  /**
   * * `wallet` - Wallet
   * * `crypto` - Crypto
   * * `credit_card` - Credit Card
   * * `redirect` - Redirect
   * * `bank` - Bank
   * * `custom` - Custom
   */
  type: "wallet" | "crypto" | "credit_card" | "redirect" | "bank" | "custom";
  /** @maxLength 255 */
  description: string;
  /** @maxLength 255 */
  selector_description?: string | null;
  /** @maxLength 255 */
  pending_processing_description?: string | null;
  /** @maxLength 255 */
  processing_description?: string | null;
  currencies?: (string | null)[];
  /**
   * @format int64
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  longest_expiration_time?: number;
  rehive_transaction_identifier?: Record<string, any>;
  /** @maxLength 255 */
  rehive_subtype?: string | null;
  generate_accounts?: boolean;
}

export interface AdminPaymentProcessorResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminPaymentProcessor;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminRefund {
  id: string;
  /**
   * @format int64
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  amount?: number;
  currency: string;
  /**
   * * `pending` - Pending
   * * `processing` - Processing
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "pending" | "processing" | "complete" | "failed";
  /** * `native` - Native */
  type?: "native";
  transaction_collection: string | null;
  /** @maxLength 100 */
  reason?: string | null;
  request: number;
  created?: number;
  updated?: number;
}

export interface AdminRefundResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminRefund;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminRequestCreateUpdate {
  id: string;
  /** @format uuid */
  user: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  payer_user?: User;
  /** @maxLength 255 */
  request_reference?: string | null;
  request_currency: string;
  /**
   * @format int64
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  request_amount?: number | null;
  primary_payment_processor?: string;
  /** @maxLength 255 */
  description?: string | null;
  metadata?: Record<string, any>;
  /**
   * * `draft` - Draft
   * * `initiated` - Initiated
   * * `processing` - Processing
   * * `received` - Received
   * * `paid` - Paid
   * * `complete` - Complete
   * * `failed` - Failed
   * * `overpaid` - Overpaid
   * * `cancelled` - Cancelled
   * * `expired` - Expired
   * * `late` - Late
   * * `underpaid` - Underpaid
   */
  status?:
    | "draft"
    | "initiated"
    | "processing"
    | "received"
    | "paid"
    | "complete"
    | "failed"
    | "overpaid"
    | "cancelled"
    | "expired"
    | "late"
    | "underpaid";
  expiration_date?: number;
  due_date?: number;
  send_request_on?: number;
  redirect_url: string;
  /** @format email */
  payer_email?: string;
  /** @maxLength 255 */
  account: string;
  send_reminders?: boolean;
  reminder_intervals?: number[];
  /** @maxLength 255 */
  note?: string | null;
  /** @maxLength 255 */
  return_url?: string | null;
  payer_mobile_number?: string;
  payment_processor_quotes?: PaymentProcessorQuote[];
}

export interface AdminRequestCreateUpdateResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminRequestCreateUpdate;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUser {
  id: string;
  /** @maxLength 30 */
  base_currency?: string | null;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate_padding?: string | null;
  email: string | null;
  mobile_number: string | null;
  first_name: string | null;
  profile: string | null;
  last_name: string | null;
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
export interface AdminWebhook {
  id: string;
  /** @maxLength 150 */
  secret?: string | null;
  /** @maxLength 150 */
  url: string;
  /**
   * * `service_payment_requests.request.create` - service_payment_requests.request.create
   * * `service_payment_requests.request.update` - service_payment_requests.request.update
   * * `service_payment_requests.quote.create` - Payment Requests Quote Create
   * * `service_payment_requests.otp.create` - service_payment_requests.otp.create
   * * `service_payment_requests.payer_reminder` - Payment Requests Payer Reminder
   * * `service_payment_requests.payer_requested` - Payment Requests Request Payer Requested
   */
  event:
    | "service_payment_requests.request.create"
    | "service_payment_requests.request.update"
    | "service_payment_requests.quote.create"
    | "service_payment_requests.otp.create"
    | "service_payment_requests.payer_reminder"
    | "service_payment_requests.payer_requested";
}

export interface AdminWebhookResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminWebhook;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AvailablePaymentProcessor {
  id: string;
  native: boolean;
  unique_string_name: string;
  logo: string | null;
  name: string;
  description: string;
  selector_description: string | null;
  pending_processing_description: string | null;
  processing_description: string | null;
  currencies: (string | null)[];
  /**
   * * `wallet` - Wallet
   * * `crypto` - Crypto
   * * `credit_card` - Credit Card
   * * `redirect` - Redirect
   * * `bank` - Bank
   * * `custom` - Custom
   */
  type: "wallet" | "crypto" | "credit_card" | "redirect" | "bank" | "custom";
  longest_expiration_time: number;
  rehive_transaction_identifier: Record<string, any>;
  rehive_subtype: string | null;
  active_weight: number;
  generate_accounts: boolean;
  selectable_currencies: string[];
  weight: number;
}

/** Serialize company, update and delete. */
export interface CompanyConfiguration {
  /** @maxLength 100 */
  base_redirect_url?: string | null;
  otp_notification_id: string | null;
  request_notification_id: string | null;
  reminder_default?: boolean;
  /** @maxLength 50 */
  request_param_config?: string | null;
}

export interface CompanyConfigurationResponse {
  /** @example "success" */
  status?: string;
  /** Serialize company, update and delete. */
  data?: CompanyConfiguration;
}

/** Serialize Company Payment Processor, view, create and update. */
export interface CompanyPaymentProcessor {
  id: string;
  active: boolean;
  payment_processor: PaymentProcessor;
  currencies: Currency[];
}

export interface CompanyPaymentProcessorResponse {
  /** @example "success" */
  status?: string;
  /** Serialize Company Payment Processor, view, create and update. */
  data?: CompanyPaymentProcessor;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ConversionQuote {
  /**
   * * `quoted` - Quoted
   * * `pending` - Pending
   * * `complete` - Complete
   * * `failed` - Failed
   * * `cancelled` - Cancelled
   */
  status: "quoted" | "pending" | "complete" | "failed" | "cancelled";
  conversion_quote_id: string;
  rate: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateRefund {
  id: string;
  /**
   * @format int64
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  amount?: number;
  currency: string;
  /**
   * * `pending` - Pending
   * * `processing` - Processing
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "pending" | "processing" | "complete" | "failed";
  /** * `native` - Native */
  type?: "native";
  transaction_collection: string | null;
  /** @maxLength 100 */
  reason?: string | null;
  request: number;
  created?: number;
  updated?: number;
}

export interface CreateRefundResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: CreateRefund;
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

export interface OTPChallenge {
  otp: string;
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

export interface PaginatedAdminWebhookList {
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
  results?: AdminWebhook[];
}

export interface PaginatedAdminWebhookListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminWebhookList;
}

export interface PaginatedCompanyPaymentProcessorList {
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
  results?: CompanyPaymentProcessor[];
}

export interface PaginatedCompanyPaymentProcessorListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedCompanyPaymentProcessorList;
}

export interface PaginatedPaymentProcessorList {
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
  results?: PaymentProcessor[];
}

export interface PaginatedPaymentProcessorListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedPaymentProcessorList;
}

export interface PaginatedPaymentProcessorQuoteList {
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
  results?: PaymentProcessorQuote[];
}

export interface PaginatedPaymentProcessorQuoteListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedPaymentProcessorQuoteList;
}

export interface PaginatedRefundList {
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
  results?: Refund[];
}

export interface PaginatedRefundListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedRefundList;
}

export interface PaginatedRequestList {
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
  results?: Request[];
}

export interface PaginatedRequestListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedRequestList;
}

export interface PaginatedRequestLogsList {
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
  results?: RequestLogs[];
}

export interface PaginatedRequestLogsListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedRequestLogsList;
}

export interface PaginatedRequestTransactionList {
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
  results?: RequestTransaction[];
}

export interface PaginatedRequestTransactionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedRequestTransactionList;
}

export interface PaginatedUserCompanyPaymentProcessorList {
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
  results?: UserCompanyPaymentProcessor[];
}

export interface PaginatedUserCompanyPaymentProcessorListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedUserCompanyPaymentProcessorList;
}

export interface PaginatedWebhookList {
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
  results?: Webhook[];
}

export interface PaginatedWebhookListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedWebhookList;
}

/** Serialize company, update and delete. */
export interface PatchedAdminCompany {
  id?: string;
  /** @format uuid */
  secret?: string;
  name?: string;
  reminder_intervals?: number[];
}

/** Serialize Company Payment Processors, view, create and update. */
export interface PatchedAdminCompanyPaymentProcessor {
  id?: string;
  active?: boolean;
  /** @maxLength 255 */
  company_base_endpoint?: string;
  /** @maxLength 255 */
  company_external_api_key?: string;
  payment_processor?: string;
  /** @maxItems 100 */
  currencies?: string[];
  generate_accounts?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminPaymentProcessor {
  id?: string;
  native?: boolean;
  /** @maxLength 100 */
  unique_string_name?: string;
  /** @maxLength 100 */
  logo?: string | null;
  /** @maxLength 100 */
  name?: string;
  /**
   * * `wallet` - Wallet
   * * `crypto` - Crypto
   * * `credit_card` - Credit Card
   * * `redirect` - Redirect
   * * `bank` - Bank
   * * `custom` - Custom
   */
  type?: "wallet" | "crypto" | "credit_card" | "redirect" | "bank" | "custom";
  /** @maxLength 255 */
  description?: string;
  /** @maxLength 255 */
  selector_description?: string | null;
  /** @maxLength 255 */
  pending_processing_description?: string | null;
  /** @maxLength 255 */
  processing_description?: string | null;
  currencies?: (string | null)[];
  /**
   * @format int64
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  longest_expiration_time?: number;
  rehive_transaction_identifier?: Record<string, any>;
  /** @maxLength 255 */
  rehive_subtype?: string | null;
  generate_accounts?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminRequestCreateUpdate {
  id?: string;
  /** @format uuid */
  user?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  payer_user?: User;
  /** @maxLength 255 */
  request_reference?: string | null;
  request_currency?: string;
  /**
   * @format int64
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  request_amount?: number | null;
  primary_payment_processor?: string;
  /** @maxLength 255 */
  description?: string | null;
  metadata?: Record<string, any>;
  /**
   * * `draft` - Draft
   * * `initiated` - Initiated
   * * `processing` - Processing
   * * `received` - Received
   * * `paid` - Paid
   * * `complete` - Complete
   * * `failed` - Failed
   * * `overpaid` - Overpaid
   * * `cancelled` - Cancelled
   * * `expired` - Expired
   * * `late` - Late
   * * `underpaid` - Underpaid
   */
  status?:
    | "draft"
    | "initiated"
    | "processing"
    | "received"
    | "paid"
    | "complete"
    | "failed"
    | "overpaid"
    | "cancelled"
    | "expired"
    | "late"
    | "underpaid";
  expiration_date?: number;
  due_date?: number;
  send_request_on?: number;
  redirect_url?: string;
  /** @format email */
  payer_email?: string;
  /** @maxLength 255 */
  account?: string;
  send_reminders?: boolean;
  reminder_intervals?: number[];
  /** @maxLength 255 */
  note?: string | null;
  /** @maxLength 255 */
  return_url?: string | null;
  payer_mobile_number?: string;
  payment_processor_quotes?: PaymentProcessorQuote[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUser {
  id?: string;
  /** @maxLength 30 */
  base_currency?: string | null;
  /**
   * @format decimal
   * @pattern ^-?\d{0,12}(?:\.\d{0,18})?$
   */
  rate_padding?: string | null;
  email?: string | null;
  mobile_number?: string | null;
  first_name?: string | null;
  profile?: string | null;
  last_name?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminWebhook {
  id?: string;
  /** @maxLength 150 */
  secret?: string | null;
  /** @maxLength 150 */
  url?: string;
  /**
   * * `service_payment_requests.request.create` - service_payment_requests.request.create
   * * `service_payment_requests.request.update` - service_payment_requests.request.update
   * * `service_payment_requests.quote.create` - Payment Requests Quote Create
   * * `service_payment_requests.otp.create` - service_payment_requests.otp.create
   * * `service_payment_requests.payer_reminder` - Payment Requests Payer Reminder
   * * `service_payment_requests.payer_requested` - Payment Requests Request Payer Requested
   */
  event?:
    | "service_payment_requests.request.create"
    | "service_payment_requests.request.update"
    | "service_payment_requests.quote.create"
    | "service_payment_requests.otp.create"
    | "service_payment_requests.payer_reminder"
    | "service_payment_requests.payer_requested";
}

/** Serialize company, update and delete. */
export interface PatchedCompanyConfiguration {
  /** @maxLength 100 */
  base_redirect_url?: string | null;
  otp_notification_id?: string | null;
  request_notification_id?: string | null;
  reminder_default?: boolean;
  /** @maxLength 50 */
  request_param_config?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedPublicRequestUpdate {
  id?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  user?: User;
  request_reference?: string | null;
  request_currency?: Record<string, any>;
  request_amount?: number | null;
  primary_payment_processor?: string;
  description?: string | null;
  metadata?: Record<string, any>;
  /**
   * * `draft` - Draft
   * * `initiated` - Initiated
   * * `processing` - Processing
   * * `received` - Received
   * * `paid` - Paid
   * * `complete` - Complete
   * * `failed` - Failed
   * * `overpaid` - Overpaid
   * * `cancelled` - Cancelled
   * * `expired` - Expired
   * * `late` - Late
   * * `underpaid` - Underpaid
   */
  status?:
    | "draft"
    | "initiated"
    | "processing"
    | "received"
    | "paid"
    | "complete"
    | "failed"
    | "overpaid"
    | "cancelled"
    | "expired"
    | "late"
    | "underpaid";
  redirect_url?: string;
  account?: string;
  /** @format email */
  payer_email?: string;
  return_url?: string | null;
  payer_mobile_number?: string;
  refunded?: boolean;
  payment_processor_quotes?: PaymentProcessorQuote[];
  payment_processor_currency?: string;
  available_payment_processors?: AvailablePaymentProcessor[];
  quote_amount?: string;
  /** @maxLength 255 */
  note?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedRequestCreateUpdate {
  id?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  user?: User;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  payer_user?: User;
  /** @maxLength 255 */
  request_reference?: string | null;
  request_currency?: string;
  /**
   * @format int64
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  request_amount?: number | null;
  primary_payment_processor?: string;
  /** @maxLength 255 */
  description?: string | null;
  metadata?: Record<string, any>;
  /**
   * * `draft` - Draft
   * * `initiated` - Initiated
   * * `processing` - Processing
   * * `received` - Received
   * * `paid` - Paid
   * * `complete` - Complete
   * * `failed` - Failed
   * * `overpaid` - Overpaid
   * * `cancelled` - Cancelled
   * * `expired` - Expired
   * * `late` - Late
   * * `underpaid` - Underpaid
   */
  status?:
    | "draft"
    | "initiated"
    | "processing"
    | "received"
    | "paid"
    | "complete"
    | "failed"
    | "overpaid"
    | "cancelled"
    | "expired"
    | "late"
    | "underpaid";
  expiration_date?: number;
  due_date?: number;
  send_request_on?: number;
  redirect_url?: string;
  /** @maxLength 255 */
  account?: string;
  send_reminders?: boolean;
  reminder_intervals?: number[];
  /** @maxLength 255 */
  note?: string | null;
  /** @format email */
  payer_email?: string;
  /** @maxLength 255 */
  return_url?: string | null;
  payer_mobile_number?: string;
  payment_processor_quotes?: PaymentProcessorQuote[];
}

/** Serialize Company Payment Processors, view, create and update. */
export interface PatchedUserCRUDCompanyPaymentProcessor {
  id?: string;
  active?: boolean;
  company_payment_processor?: number;
  /** @maxItems 100 */
  currencies?: string[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedWebhook {
  id?: string;
  /** @maxLength 150 */
  secret?: string | null;
  /** @maxLength 150 */
  url?: string;
  /**
   * * `service_payment_requests.request.create` - service_payment_requests.request.create
   * * `service_payment_requests.request.update` - service_payment_requests.request.update
   * * `service_payment_requests.quote.create` - Payment Requests Quote Create
   * * `service_payment_requests.otp.create` - service_payment_requests.otp.create
   * * `service_payment_requests.payer_reminder` - Payment Requests Payer Reminder
   * * `service_payment_requests.payer_requested` - Payment Requests Request Payer Requested
   */
  event?:
    | "service_payment_requests.request.create"
    | "service_payment_requests.request.update"
    | "service_payment_requests.quote.create"
    | "service_payment_requests.otp.create"
    | "service_payment_requests.payer_reminder"
    | "service_payment_requests.payer_requested";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PaymentProcessor {
  id: string;
  native: boolean;
  unique_string_name: string;
  logo: string | null;
  name: string;
  description: string;
  selector_description: string | null;
  pending_processing_description: string | null;
  processing_description: string | null;
  currencies: (string | null)[];
  /**
   * * `wallet` - Wallet
   * * `crypto` - Crypto
   * * `credit_card` - Credit Card
   * * `redirect` - Redirect
   * * `bank` - Bank
   * * `custom` - Custom
   */
  type: "wallet" | "crypto" | "credit_card" | "redirect" | "bank" | "custom";
  longest_expiration_time: number;
  rehive_transaction_identifier: Record<string, any>;
  rehive_subtype: string | null;
  active_weight: number;
  generate_accounts: boolean;
  weight: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PaymentProcessorQuote {
  id: string;
  request: number;
  reference: string | null;
  deposit_details: Record<string, any>;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  payment_processor?: PaymentProcessor;
  currency: Record<string, any>;
  amount: number;
  total_paid: number;
  total_pending: number;
  expiration_date?: number;
  /**
   * * `pending` - Pending
   * * `processing` - Processing
   * * `received` - Received
   * * `overpaid` - Overpaid
   * * `paid` - Paid
   * * `failed` - Failed
   * * `expired` - Expired
   * * `late` - Late
   * * `underpaid` - Underpaid
   */
  status:
    | "pending"
    | "processing"
    | "received"
    | "overpaid"
    | "paid"
    | "failed"
    | "expired"
    | "late"
    | "underpaid";
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  conversion_quote?: ConversionQuote;
  created?: number;
  account: string | null;
  updated?: number;
}

export interface PaymentProcessorQuoteResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: PaymentProcessorQuote;
}

export interface PaymentProcessorResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: PaymentProcessor;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PublicRequest {
  id: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  user?: User;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  payer_user?: User;
  request_reference: string | null;
  request_currency: Record<string, any>;
  request_amount: number | null;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  primary_payment_processor?: PaymentProcessor;
  description: string | null;
  metadata: Record<string, any>;
  /**
   * * `draft` - Draft
   * * `initiated` - Initiated
   * * `processing` - Processing
   * * `received` - Received
   * * `paid` - Paid
   * * `complete` - Complete
   * * `failed` - Failed
   * * `overpaid` - Overpaid
   * * `cancelled` - Cancelled
   * * `expired` - Expired
   * * `late` - Late
   * * `underpaid` - Underpaid
   */
  status:
    | "draft"
    | "initiated"
    | "processing"
    | "received"
    | "paid"
    | "complete"
    | "failed"
    | "overpaid"
    | "cancelled"
    | "expired"
    | "late"
    | "underpaid";
  account: string;
  redirect_url: string;
  /** @format email */
  payer_email?: string;
  payer_mobile_number: string;
  return_url: string | null;
  payment_processor_quotes?: PaymentProcessorQuote[];
  available_payment_processors?: AvailablePaymentProcessor[];
  expiration_date?: number;
  /** @maxLength 255 */
  note?: string | null;
  refunded: boolean;
  due_date?: number;
  created?: number;
  updated?: number;
}

export interface PublicRequestResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: PublicRequest;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Refund {
  id: string;
  /**
   * @format int64
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  amount?: number;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  currency: Currency;
  /**
   * * `pending` - Pending
   * * `processing` - Processing
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "pending" | "processing" | "complete" | "failed";
  /** * `native` - Native */
  type?: "native";
  transaction_collection: string | null;
  /** @maxLength 100 */
  reason?: string | null;
  request: number;
  created?: number;
  updated?: number;
}

export interface RehiveWebhook {
  id: string;
  /**
   * * `currency.create` - currency.create
   * * `currency.update` - currency.update
   * * `transaction.initiate` - transaction.initiate
   * * `transaction.execute` - transaction.execute
   * * `user.create` - user.create
   * * `user.update` - user.update
   */
  event:
    | "currency.create"
    | "currency.update"
    | "transaction.initiate"
    | "transaction.execute"
    | "user.create"
    | "user.update";
  company: string;
  data: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Request {
  id: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  user?: User;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  payer_user?: User;
  payer_email: string;
  payer_mobile_number: string;
  /** @maxLength 255 */
  request_reference?: string | null;
  request_currency: Record<string, any>;
  /**
   * @format int64
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  request_amount?: number | null;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  primary_payment_processor?: PaymentProcessor;
  /** @maxLength 255 */
  description?: string | null;
  metadata?: Record<string, any>;
  /**
   * * `draft` - Draft
   * * `initiated` - Initiated
   * * `processing` - Processing
   * * `received` - Received
   * * `paid` - Paid
   * * `complete` - Complete
   * * `failed` - Failed
   * * `overpaid` - Overpaid
   * * `cancelled` - Cancelled
   * * `expired` - Expired
   * * `late` - Late
   * * `underpaid` - Underpaid
   */
  status:
    | "draft"
    | "initiated"
    | "processing"
    | "received"
    | "paid"
    | "complete"
    | "failed"
    | "overpaid"
    | "cancelled"
    | "expired"
    | "late"
    | "underpaid";
  expiration_date?: number;
  due_date?: number;
  redirect_url: string;
  payment_processor_quotes?: PaymentProcessorQuote[];
  refunds?: Refund[];
  /** @maxLength 255 */
  return_url?: string | null;
  send_request_on?: number;
  /** @maxLength 255 */
  account: string;
  send_reminders?: boolean;
  reminder_intervals?: number[];
  /** @maxLength 255 */
  note?: string | null;
  refunded: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface RequestCreateUpdate {
  id: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  user?: User;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  payer_user?: User;
  /** @maxLength 255 */
  request_reference?: string | null;
  request_currency: string;
  /**
   * @format int64
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  request_amount?: number | null;
  primary_payment_processor?: string;
  /** @maxLength 255 */
  description?: string | null;
  metadata?: Record<string, any>;
  /**
   * * `draft` - Draft
   * * `initiated` - Initiated
   * * `processing` - Processing
   * * `received` - Received
   * * `paid` - Paid
   * * `complete` - Complete
   * * `failed` - Failed
   * * `overpaid` - Overpaid
   * * `cancelled` - Cancelled
   * * `expired` - Expired
   * * `late` - Late
   * * `underpaid` - Underpaid
   */
  status?:
    | "draft"
    | "initiated"
    | "processing"
    | "received"
    | "paid"
    | "complete"
    | "failed"
    | "overpaid"
    | "cancelled"
    | "expired"
    | "late"
    | "underpaid";
  expiration_date?: number;
  due_date?: number;
  send_request_on?: number;
  redirect_url: string;
  /** @maxLength 255 */
  account: string;
  send_reminders?: boolean;
  reminder_intervals?: number[];
  /** @maxLength 255 */
  note?: string | null;
  /** @format email */
  payer_email?: string;
  /** @maxLength 255 */
  return_url?: string | null;
  payer_mobile_number?: string;
  payment_processor_quotes?: PaymentProcessorQuote[];
}

export interface RequestCreateUpdateResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: RequestCreateUpdate;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface RequestLogs {
  request: number;
  user_agent: string | null;
  ip_address: string | null;
  email: string | null;
  mobile_number: string | null;
}

export interface RequestResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Request;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface RequestTransaction {
  rehive_code: string;
  /**
   * * `pending` - Pending
   * * `pending_settled` - Pending Settled
   * * `settled` - Settled
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "pending" | "pending_settled" | "settled" | "complete" | "failed";
  payment_processor_quote: number;
  details: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface User {
  id: string;
  /** @maxLength 30 */
  base_currency?: string | null;
  company: string;
  mobile_number: string | null;
  email: string | null;
  first_name: string | null;
  profile: string | null;
  last_name: string | null;
}

/** Serialize Company Payment Processors, view, create and update. */
export interface UserCRUDCompanyPaymentProcessor {
  id: string;
  active?: boolean;
  company_payment_processor: number;
  /** @maxItems 100 */
  currencies?: string[];
}

export interface UserCRUDCompanyPaymentProcessorResponse {
  /** @example "success" */
  status?: string;
  /** Serialize Company Payment Processors, view, create and update. */
  data?: UserCRUDCompanyPaymentProcessor;
}

/** Serialize Company Payment Processors, view, create and update. */
export interface UserCompanyPaymentProcessor {
  id: string;
  active: boolean;
  /** Serialize Company Payment Processor, view, create and update. */
  company_payment_processor: CompanyPaymentProcessor;
  currencies: Currency[];
}

export interface UserCompanyPaymentProcessorResponse {
  /** @example "success" */
  status?: string;
  /** Serialize Company Payment Processors, view, create and update. */
  data?: UserCompanyPaymentProcessor;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Webhook {
  id: string;
  /** @maxLength 150 */
  secret?: string | null;
  /** @maxLength 150 */
  url: string;
  /**
   * * `service_payment_requests.request.create` - service_payment_requests.request.create
   * * `service_payment_requests.request.update` - service_payment_requests.request.update
   * * `service_payment_requests.quote.create` - Payment Requests Quote Create
   * * `service_payment_requests.otp.create` - service_payment_requests.otp.create
   * * `service_payment_requests.payer_reminder` - Payment Requests Payer Reminder
   * * `service_payment_requests.payer_requested` - Payment Requests Request Payer Requested
   */
  event:
    | "service_payment_requests.request.create"
    | "service_payment_requests.request.update"
    | "service_payment_requests.quote.create"
    | "service_payment_requests.otp.create"
    | "service_payment_requests.payer_reminder"
    | "service_payment_requests.payer_requested";
}

export interface WebhookResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Webhook;
}

export type ActivateCreateData = ActionResponse;

export type AdminCompanyRetrieveData = AdminCompanyResponse;

export type AdminCompanyUpdateData = AdminCompanyResponse;

export type AdminCompanyPartialUpdateData = AdminCompanyResponse;

export type AdminCompanyConfigurationRetrieveData =
  CompanyConfigurationResponse;

export type AdminCompanyConfigurationUpdateData = CompanyConfigurationResponse;

export type AdminCompanyConfigurationPartialUpdateData =
  CompanyConfigurationResponse;

export interface AdminCompanyPaymentProcessorsListParams {
  /** @format date-time */
  created?: string;
  /** @format date-time */
  created__gt?: string;
  /** @format date-time */
  created__gte?: string;
  /** @format date-time */
  created__lt?: string;
  /** @format date-time */
  created__lte?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  unique_string_name?: string;
}

export type AdminCompanyPaymentProcessorsListData =
  PaginatedCompanyPaymentProcessorListResponse;

export type AdminCompanyPaymentProcessorsCreateData =
  CompanyPaymentProcessorResponse;

export type AdminCompanyPaymentProcessorsRetrieveData =
  CompanyPaymentProcessorResponse;

export type AdminCompanyPaymentProcessorsUpdateData =
  AdminCompanyPaymentProcessorResponse;

export type AdminCompanyPaymentProcessorsPartialUpdateData =
  AdminCompanyPaymentProcessorResponse;

export type AdminCompanyPaymentProcessorsDestroyData =
  AdminCompanyPaymentProcessorResponse;

export interface AdminPaymentProcessorQuoteListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminPaymentProcessorQuoteListData =
  PaginatedPaymentProcessorQuoteListResponse;

export interface AdminPaymentProcessorsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminPaymentProcessorsListData =
  PaginatedPaymentProcessorListResponse;

export type AdminPaymentProcessorsCreateData = PaymentProcessorResponse;

export type AdminPaymentProcessorsRetrieveData = PaymentProcessorResponse;

export type AdminPaymentProcessorsUpdateData = AdminPaymentProcessorResponse;

export type AdminPaymentProcessorsPartialUpdateData =
  AdminPaymentProcessorResponse;

export type AdminPaymentProcessorsDestroyData = AdminPaymentProcessorResponse;

export interface AdminRequestsListParams {
  /** @format date-time */
  created?: string;
  created__gt?: string;
  created__gte?: string;
  created__lt?: string;
  created__lte?: string;
  expiration_date__gt?: string;
  expiration_date__gte?: string;
  expiration_date__lt?: string;
  expiration_date__lte?: string;
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  payer_email?: string;
  payer_mobile_number?: string;
  payment_processor_quote_reference?: string;
  refund_status?: string;
  refunded?: string;
  request_currency?: string;
  request_reference?: string;
  request_type?: string;
  status?: string;
  status__in?: string;
}

export type AdminRequestsListData = PaginatedRequestListResponse;

export type AdminRequestsCreateData = RequestResponse;

export type AdminRequestsRetrieveData = RequestResponse;

export type AdminRequestsUpdateData = RequestResponse;

export type AdminRequestsPartialUpdateData = AdminRequestCreateUpdateResponse;

export interface AdminRequestsLogsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type AdminRequestsLogsListData = PaginatedRequestLogsListResponse;

export interface AdminRequestsPaymentProcessQuotesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type AdminRequestsPaymentProcessQuotesListData =
  PaginatedPaymentProcessorQuoteListResponse;

export type AdminRequestsPaymentProcessQuotesRetrieveData =
  PaymentProcessorQuoteResponse;

export type AdminRequestsPaymentProcessQuotesExecuteRetrieveData =
  PaymentProcessorQuoteResponse;

export interface AdminRequestsRefundsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type AdminRequestsRefundsListData = PaginatedRefundListResponse;

export type AdminRequestsRefundsCreateData = AdminRefundResponse;

export interface AdminRequestsTransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type AdminRequestsTransactionsListData =
  PaginatedRequestTransactionListResponse;

export interface AdminUsersListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminUsersListData = PaginatedAdminUserListResponse;

export type AdminUsersRetrieveData = AdminUserResponse;

export type AdminUsersUpdateData = AdminUserResponse;

export type AdminUsersPartialUpdateData = AdminUserResponse;

export interface AdminWebhooksListParams {
  event?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  secret?: string;
  url?: string;
}

export type AdminWebhooksListData = PaginatedAdminWebhookListResponse;

export type AdminWebhooksCreateData = AdminWebhookResponse;

export type AdminWebhooksRetrieveData = AdminWebhookResponse;

export type AdminWebhooksUpdateData = AdminWebhookResponse;

export type AdminWebhooksPartialUpdateData = AdminWebhookResponse;

export type AdminWebhooksDestroyData = AdminWebhookResponse;

export type DeactivateCreateData = ActionResponse;

export type RequestsRetrieveData = PublicRequestResponse;

export type RequestsUpdateData = PublicRequestResponse;

export type RequestsPartialUpdateData = PublicRequestResponse;

export type RequestsOtpChallengeCreateData = ActionResponse;

export interface RequestsPaymentProcessorsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type RequestsPaymentProcessorsListData =
  PaginatedPaymentProcessorListResponse;

export type RequestsResendOtpCreateData = ActionResponse;

export interface RequestsTransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type RequestsTransactionsListData =
  PaginatedRequestTransactionListResponse;

export interface UserPaymentProcessorsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UserPaymentProcessorsListData =
  PaginatedUserCompanyPaymentProcessorListResponse;

export type UserPaymentProcessorsCreateData =
  UserCompanyPaymentProcessorResponse;

export type UserPaymentProcessorsRetrieveData =
  UserCompanyPaymentProcessorResponse;

export type UserPaymentProcessorsUpdateData =
  UserCRUDCompanyPaymentProcessorResponse;

export type UserPaymentProcessorsPartialUpdateData =
  UserCRUDCompanyPaymentProcessorResponse;

export type UserPaymentProcessorsDestroyData =
  UserCRUDCompanyPaymentProcessorResponse;

export interface UserRequestsListParams {
  /** @format date-time */
  created?: string;
  created__gt?: string;
  created__gte?: string;
  created__lt?: string;
  created__lte?: string;
  expiration_date__gt?: string;
  expiration_date__gte?: string;
  expiration_date__lt?: string;
  expiration_date__lte?: string;
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  payer_email?: string;
  payer_mobile_number?: string;
  payment_processor_quote_reference?: string;
  refund_status?: string;
  refunded?: string;
  request_currency?: string;
  request_reference?: string;
  request_type?: string;
  status?: string;
  status__in?: string;
}

export type UserRequestsListData = PaginatedRequestListResponse;

export type UserRequestsCreateData = RequestCreateUpdateResponse;

export type UserRequestsRetrieveData = RequestResponse;

export type UserRequestsUpdateData = RequestResponse;

export type UserRequestsPartialUpdateData = RequestCreateUpdateResponse;

export type UserRequestsNotifyCreateData = ActionResponse;

export interface UserRequestsRefundsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type UserRequestsRefundsListData = PaginatedRefundListResponse;

export type UserRequestsRefundsCreateData = CreateRefundResponse;

export interface UserRequestsTransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type UserRequestsTransactionsListData =
  PaginatedRequestTransactionListResponse;

export interface UserWebhooksListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UserWebhooksListData = PaginatedWebhookListResponse;

export type UserWebhooksCreateData = WebhookResponse;

export type UserWebhooksRetrieveData = WebhookResponse;

export type UserWebhooksUpdateData = WebhookResponse;

export type UserWebhooksPartialUpdateData = WebhookResponse;

export type UserWebhooksDestroyData = WebhookResponse;

export type WebhookCreateData = ActionResponse;

export type WebhooksRehiveTransactionExecutedCreateData = ActionResponse;

export type WebhooksRehiveTransactionInitiatedCreateData = ActionResponse;

export type WebhooksRehiveUserCreateCreateData = ActionResponse;

export type WebhooksRehiveUserEmailUpdateCreateData = ActionResponse;

export type WebhooksRehiveUserUpdateCreateData = ActionResponse;

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
  public baseUrl: string = "https://payment-requests.services.rehive.com/api/";
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
 * @title Payment Request Service API
 * @version 1 (1)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://payment-requests.services.rehive.com/api/
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **Payment Request Service API** is used for payments, payment requests, and invoices in Rehive.
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
     * @name AdminCompanyConfigurationRetrieve
     * @summary Retrieve configuration
     * @request GET:/admin/company/configuration/
     * @secure
     */
    adminCompanyConfigurationRetrieve: (params: RequestParams = {}) =>
      this.request<AdminCompanyConfigurationRetrieveData, any>({
        path: `/admin/company/configuration/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCompanyConfigurationUpdate
     * @summary Update configuration
     * @request PUT:/admin/company/configuration/
     * @secure
     */
    adminCompanyConfigurationUpdate: (
      data: CompanyConfiguration,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyConfigurationUpdateData, any>({
        path: `/admin/company/configuration/`,
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
     * @name AdminCompanyConfigurationPartialUpdate
     * @summary Partially update configuration
     * @request PATCH:/admin/company/configuration/
     * @secure
     */
    adminCompanyConfigurationPartialUpdate: (
      data: PatchedCompanyConfiguration,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyConfigurationPartialUpdateData, any>({
        path: `/admin/company/configuration/`,
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
     * @name AdminCompanyPaymentProcessorsList
     * @summary List company payment processors
     * @request GET:/admin/company_payment_processors/
     * @secure
     */
    adminCompanyPaymentProcessorsList: (
      query: AdminCompanyPaymentProcessorsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyPaymentProcessorsListData, any>({
        path: `/admin/company_payment_processors/`,
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
     * @name AdminCompanyPaymentProcessorsCreate
     * @summary Create company payment processor
     * @request POST:/admin/company_payment_processors/
     * @secure
     */
    adminCompanyPaymentProcessorsCreate: (
      data: AdminCompanyPaymentProcessor,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyPaymentProcessorsCreateData, any>({
        path: `/admin/company_payment_processors/`,
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
     * @name AdminCompanyPaymentProcessorsRetrieve
     * @summary Retrieve company payment processor
     * @request GET:/admin/company_payment_processors/{identifier}/
     * @secure
     */
    adminCompanyPaymentProcessorsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyPaymentProcessorsRetrieveData, any>({
        path: `/admin/company_payment_processors/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCompanyPaymentProcessorsUpdate
     * @summary Update company payment processor
     * @request PUT:/admin/company_payment_processors/{identifier}/
     * @secure
     */
    adminCompanyPaymentProcessorsUpdate: (
      identifier: string,
      data: AdminCompanyPaymentProcessor,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyPaymentProcessorsUpdateData, any>({
        path: `/admin/company_payment_processors/${identifier}/`,
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
     * @name AdminCompanyPaymentProcessorsPartialUpdate
     * @summary Partially update company payment processor
     * @request PATCH:/admin/company_payment_processors/{identifier}/
     * @secure
     */
    adminCompanyPaymentProcessorsPartialUpdate: (
      identifier: string,
      data: PatchedAdminCompanyPaymentProcessor,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyPaymentProcessorsPartialUpdateData, any>({
        path: `/admin/company_payment_processors/${identifier}/`,
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
     * @name AdminCompanyPaymentProcessorsDestroy
     * @summary Delete company payment processor
     * @request DELETE:/admin/company_payment_processors/{identifier}/
     * @secure
     */
    adminCompanyPaymentProcessorsDestroy: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyPaymentProcessorsDestroyData, any>({
        path: `/admin/company_payment_processors/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminPaymentProcessorQuoteList
     * @summary List payment processor quotes
     * @request GET:/admin/payment_processor_quote/
     * @secure
     */
    adminPaymentProcessorQuoteList: (
      query: AdminPaymentProcessorQuoteListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminPaymentProcessorQuoteListData, any>({
        path: `/admin/payment_processor_quote/`,
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
     * @name AdminPaymentProcessorsList
     * @summary List payment processors
     * @request GET:/admin/payment_processors/
     * @secure
     */
    adminPaymentProcessorsList: (
      query: AdminPaymentProcessorsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminPaymentProcessorsListData, any>({
        path: `/admin/payment_processors/`,
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
     * @name AdminPaymentProcessorsCreate
     * @summary Create payment processor
     * @request POST:/admin/payment_processors/
     * @secure
     */
    adminPaymentProcessorsCreate: (
      data: AdminPaymentProcessor,
      params: RequestParams = {},
    ) =>
      this.request<AdminPaymentProcessorsCreateData, any>({
        path: `/admin/payment_processors/`,
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
     * @name AdminPaymentProcessorsRetrieve
     * @summary Retrieve payment processor
     * @request GET:/admin/payment_processors/{identifier}/
     * @secure
     */
    adminPaymentProcessorsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminPaymentProcessorsRetrieveData, any>({
        path: `/admin/payment_processors/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminPaymentProcessorsUpdate
     * @summary Update payment processor
     * @request PUT:/admin/payment_processors/{identifier}/
     * @secure
     */
    adminPaymentProcessorsUpdate: (
      identifier: string,
      data: AdminPaymentProcessor,
      params: RequestParams = {},
    ) =>
      this.request<AdminPaymentProcessorsUpdateData, any>({
        path: `/admin/payment_processors/${identifier}/`,
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
     * @name AdminPaymentProcessorsPartialUpdate
     * @summary Partially update payment processor
     * @request PATCH:/admin/payment_processors/{identifier}/
     * @secure
     */
    adminPaymentProcessorsPartialUpdate: (
      identifier: string,
      data: PatchedAdminPaymentProcessor,
      params: RequestParams = {},
    ) =>
      this.request<AdminPaymentProcessorsPartialUpdateData, any>({
        path: `/admin/payment_processors/${identifier}/`,
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
     * @name AdminPaymentProcessorsDestroy
     * @summary Delete payment processor
     * @request DELETE:/admin/payment_processors/{identifier}/
     * @secure
     */
    adminPaymentProcessorsDestroy: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminPaymentProcessorsDestroyData, any>({
        path: `/admin/payment_processors/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminRequestsList
     * @summary List requests
     * @request GET:/admin/requests/
     * @secure
     */
    adminRequestsList: (
      query: AdminRequestsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsListData, any>({
        path: `/admin/requests/`,
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
     * @name AdminRequestsCreate
     * @summary Create request
     * @request POST:/admin/requests/
     * @secure
     */
    adminRequestsCreate: (
      data: AdminRequestCreateUpdate,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsCreateData, any>({
        path: `/admin/requests/`,
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
     * @name AdminRequestsRetrieve
     * @summary Retrieve request
     * @request GET:/admin/requests/{identifier}/
     * @secure
     */
    adminRequestsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminRequestsRetrieveData, any>({
        path: `/admin/requests/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminRequestsUpdate
     * @summary Update request
     * @request PUT:/admin/requests/{identifier}/
     * @secure
     */
    adminRequestsUpdate: (
      identifier: string,
      data: Request,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsUpdateData, any>({
        path: `/admin/requests/${identifier}/`,
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
     * @name AdminRequestsPartialUpdate
     * @summary Partially update request
     * @request PATCH:/admin/requests/{identifier}/
     * @secure
     */
    adminRequestsPartialUpdate: (
      identifier: string,
      data: PatchedAdminRequestCreateUpdate,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsPartialUpdateData, any>({
        path: `/admin/requests/${identifier}/`,
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
     * @name AdminRequestsLogsList
     * @summary List request logs
     * @request GET:/admin/requests/{identifier}/logs/
     * @secure
     */
    adminRequestsLogsList: (
      { identifier, ...query }: AdminRequestsLogsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsLogsListData, any>({
        path: `/admin/requests/${identifier}/logs/`,
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
     * @name AdminRequestsPaymentProcessQuotesList
     * @summary List request payment processor quotes
     * @request GET:/admin/requests/{identifier}/payment-process-quotes/
     * @secure
     */
    adminRequestsPaymentProcessQuotesList: (
      { identifier, ...query }: AdminRequestsPaymentProcessQuotesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsPaymentProcessQuotesListData, any>({
        path: `/admin/requests/${identifier}/payment-process-quotes/`,
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
     * @name AdminRequestsPaymentProcessQuotesRetrieve
     * @summary Retrieve request payment processor quote
     * @request GET:/admin/requests/{identifier}/payment-process-quotes/{quote_identifier}/
     * @secure
     */
    adminRequestsPaymentProcessQuotesRetrieve: (
      identifier: string,
      quoteIdentifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsPaymentProcessQuotesRetrieveData, any>({
        path: `/admin/requests/${identifier}/payment-process-quotes/${quoteIdentifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminRequestsPaymentProcessQuotesExecuteRetrieve
     * @summary Retrieve request payment processor quote conversion
     * @request GET:/admin/requests/{identifier}/payment-process-quotes/{quote_identifier}/execute/
     * @secure
     */
    adminRequestsPaymentProcessQuotesExecuteRetrieve: (
      identifier: string,
      quoteIdentifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsPaymentProcessQuotesExecuteRetrieveData, any>({
        path: `/admin/requests/${identifier}/payment-process-quotes/${quoteIdentifier}/execute/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminRequestsRefundsList
     * @summary List request refunds
     * @request GET:/admin/requests/{identifier}/refunds/
     * @secure
     */
    adminRequestsRefundsList: (
      { identifier, ...query }: AdminRequestsRefundsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsRefundsListData, any>({
        path: `/admin/requests/${identifier}/refunds/`,
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
     * @name AdminRequestsRefundsCreate
     * @summary Create request refund
     * @request POST:/admin/requests/{identifier}/refunds/
     * @secure
     */
    adminRequestsRefundsCreate: (
      identifier: string,
      data: AdminRefund,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsRefundsCreateData, any>({
        path: `/admin/requests/${identifier}/refunds/`,
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
     * @name AdminRequestsTransactionsList
     * @summary List request transactions
     * @request GET:/admin/requests/{identifier}/transactions/
     * @secure
     */
    adminRequestsTransactionsList: (
      { identifier, ...query }: AdminRequestsTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminRequestsTransactionsListData, any>({
        path: `/admin/requests/${identifier}/transactions/`,
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

    /**
     * No description
     *
     * @tags admin
     * @name AdminWebhooksList
     * @summary List webhooks
     * @request GET:/admin/webhooks/
     * @secure
     */
    adminWebhooksList: (
      query: AdminWebhooksListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminWebhooksListData, any>({
        path: `/admin/webhooks/`,
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
     * @name AdminWebhooksCreate
     * @summary Create webhook
     * @request POST:/admin/webhooks/
     * @secure
     */
    adminWebhooksCreate: (data: AdminWebhook, params: RequestParams = {}) =>
      this.request<AdminWebhooksCreateData, any>({
        path: `/admin/webhooks/`,
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
     * @name AdminWebhooksRetrieve
     * @summary Retrieve webhook
     * @request GET:/admin/webhooks/{identifier}/
     * @secure
     */
    adminWebhooksRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminWebhooksRetrieveData, any>({
        path: `/admin/webhooks/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminWebhooksUpdate
     * @summary Update webhook
     * @request PUT:/admin/webhooks/{identifier}/
     * @secure
     */
    adminWebhooksUpdate: (
      identifier: string,
      data: AdminWebhook,
      params: RequestParams = {},
    ) =>
      this.request<AdminWebhooksUpdateData, any>({
        path: `/admin/webhooks/${identifier}/`,
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
     * @name AdminWebhooksPartialUpdate
     * @summary Partially update webhook
     * @request PATCH:/admin/webhooks/{identifier}/
     * @secure
     */
    adminWebhooksPartialUpdate: (
      identifier: string,
      data: PatchedAdminWebhook,
      params: RequestParams = {},
    ) =>
      this.request<AdminWebhooksPartialUpdateData, any>({
        path: `/admin/webhooks/${identifier}/`,
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
     * @name AdminWebhooksDestroy
     * @summary Delete webhook
     * @request DELETE:/admin/webhooks/{identifier}/
     * @secure
     */
    adminWebhooksDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminWebhooksDestroyData, any>({
        path: `/admin/webhooks/${identifier}/`,
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
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  requests = {
    /**
     * No description
     *
     * @tags requests
     * @name RequestsRetrieve
     * @summary Retrieve request
     * @request GET:/requests/{identifier}/
     * @secure
     */
    requestsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<RequestsRetrieveData, any>({
        path: `/requests/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags requests
     * @name RequestsUpdate
     * @summary Update request
     * @request PUT:/requests/{identifier}/
     * @secure
     */
    requestsUpdate: (
      identifier: string,
      data: PublicRequest,
      params: RequestParams = {},
    ) =>
      this.request<RequestsUpdateData, any>({
        path: `/requests/${identifier}/`,
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
     * @tags requests
     * @name RequestsPartialUpdate
     * @summary Partially update request
     * @request PATCH:/requests/{identifier}/
     * @secure
     */
    requestsPartialUpdate: (
      identifier: string,
      data: PatchedPublicRequestUpdate,
      params: RequestParams = {},
    ) =>
      this.request<RequestsPartialUpdateData, any>({
        path: `/requests/${identifier}/`,
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
     * @tags requests
     * @name RequestsOtpChallengeCreate
     * @summary Create OTP challenge
     * @request POST:/requests/{identifier}/otp_challenge/
     * @secure
     */
    requestsOtpChallengeCreate: (
      identifier: string,
      data: OTPChallenge,
      params: RequestParams = {},
    ) =>
      this.request<RequestsOtpChallengeCreateData, any>({
        path: `/requests/${identifier}/otp_challenge/`,
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
     * @tags requests
     * @name RequestsPaymentProcessorsList
     * @summary List request payment processors
     * @request GET:/requests/{identifier}/payment_processors/
     * @secure
     */
    requestsPaymentProcessorsList: (
      { identifier, ...query }: RequestsPaymentProcessorsListParams,
      params: RequestParams = {},
    ) =>
      this.request<RequestsPaymentProcessorsListData, any>({
        path: `/requests/${identifier}/payment_processors/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags requests
     * @name RequestsResendOtpCreate
     * @summary Resend OTP challenge
     * @request POST:/requests/{identifier}/resend_otp/
     * @secure
     */
    requestsResendOtpCreate: (identifier: string, params: RequestParams = {}) =>
      this.request<RequestsResendOtpCreateData, any>({
        path: `/requests/${identifier}/resend_otp/`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags requests
     * @name RequestsTransactionsList
     * @summary List request transactions
     * @request GET:/requests/{identifier}/transactions/
     * @secure
     */
    requestsTransactionsList: (
      { identifier, ...query }: RequestsTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<RequestsTransactionsListData, any>({
        path: `/requests/${identifier}/transactions/`,
        method: "GET",
        query: query,
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
     * @name UserPaymentProcessorsList
     * @summary List payment processors
     * @request GET:/user/payment_processors/
     * @secure
     */
    userPaymentProcessorsList: (
      query: UserPaymentProcessorsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserPaymentProcessorsListData, any>({
        path: `/user/payment_processors/`,
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
     * @name UserPaymentProcessorsCreate
     * @summary Create payment processor
     * @request POST:/user/payment_processors/
     * @secure
     */
    userPaymentProcessorsCreate: (
      data: UserCRUDCompanyPaymentProcessor,
      params: RequestParams = {},
    ) =>
      this.request<UserPaymentProcessorsCreateData, any>({
        path: `/user/payment_processors/`,
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
     * @name UserPaymentProcessorsRetrieve
     * @summary Retrieve payment processor
     * @request GET:/user/payment_processors/{id}/
     * @secure
     */
    userPaymentProcessorsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserPaymentProcessorsRetrieveData, any>({
        path: `/user/payment_processors/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserPaymentProcessorsUpdate
     * @summary Update payment processor
     * @request PUT:/user/payment_processors/{id}/
     * @secure
     */
    userPaymentProcessorsUpdate: (
      id: string,
      data: UserCRUDCompanyPaymentProcessor,
      params: RequestParams = {},
    ) =>
      this.request<UserPaymentProcessorsUpdateData, any>({
        path: `/user/payment_processors/${id}/`,
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
     * @name UserPaymentProcessorsPartialUpdate
     * @summary Partially update payment processor
     * @request PATCH:/user/payment_processors/{id}/
     * @secure
     */
    userPaymentProcessorsPartialUpdate: (
      id: string,
      data: PatchedUserCRUDCompanyPaymentProcessor,
      params: RequestParams = {},
    ) =>
      this.request<UserPaymentProcessorsPartialUpdateData, any>({
        path: `/user/payment_processors/${id}/`,
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
     * @name UserPaymentProcessorsDestroy
     * @summary Delete payment processor
     * @request DELETE:/user/payment_processors/{id}/
     * @secure
     */
    userPaymentProcessorsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UserPaymentProcessorsDestroyData, any>({
        path: `/user/payment_processors/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserRequestsList
     * @summary List request
     * @request GET:/user/requests/
     * @secure
     */
    userRequestsList: (
      query: UserRequestsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserRequestsListData, any>({
        path: `/user/requests/`,
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
     * @name UserRequestsCreate
     * @summary Create request
     * @request POST:/user/requests/
     * @secure
     */
    userRequestsCreate: (
      data: RequestCreateUpdate,
      params: RequestParams = {},
    ) =>
      this.request<UserRequestsCreateData, any>({
        path: `/user/requests/`,
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
     * @name UserRequestsRetrieve
     * @summary Retrieve request
     * @request GET:/user/requests/{identifier}/
     * @secure
     */
    userRequestsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UserRequestsRetrieveData, any>({
        path: `/user/requests/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserRequestsUpdate
     * @summary Update request
     * @request PUT:/user/requests/{identifier}/
     * @secure
     */
    userRequestsUpdate: (
      identifier: string,
      data: Request,
      params: RequestParams = {},
    ) =>
      this.request<UserRequestsUpdateData, any>({
        path: `/user/requests/${identifier}/`,
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
     * @name UserRequestsPartialUpdate
     * @summary Partially update request
     * @request PATCH:/user/requests/{identifier}/
     * @secure
     */
    userRequestsPartialUpdate: (
      identifier: string,
      data: PatchedRequestCreateUpdate,
      params: RequestParams = {},
    ) =>
      this.request<UserRequestsPartialUpdateData, any>({
        path: `/user/requests/${identifier}/`,
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
     * @name UserRequestsNotifyCreate
     * @summary Send notification
     * @request POST:/user/requests/{identifier}/notify/
     * @secure
     */
    userRequestsNotifyCreate: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<UserRequestsNotifyCreateData, any>({
        path: `/user/requests/${identifier}/notify/`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserRequestsRefundsList
     * @summary List request refunds
     * @request GET:/user/requests/{identifier}/refunds/
     * @secure
     */
    userRequestsRefundsList: (
      { identifier, ...query }: UserRequestsRefundsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserRequestsRefundsListData, any>({
        path: `/user/requests/${identifier}/refunds/`,
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
     * @name UserRequestsRefundsCreate
     * @summary Create request refund
     * @request POST:/user/requests/{identifier}/refunds/
     * @secure
     */
    userRequestsRefundsCreate: (
      identifier: string,
      data: CreateRefund,
      params: RequestParams = {},
    ) =>
      this.request<UserRequestsRefundsCreateData, any>({
        path: `/user/requests/${identifier}/refunds/`,
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
     * @name UserRequestsTransactionsList
     * @summary List request transactions
     * @request GET:/user/requests/{identifier}/transactions/
     * @secure
     */
    userRequestsTransactionsList: (
      { identifier, ...query }: UserRequestsTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserRequestsTransactionsListData, any>({
        path: `/user/requests/${identifier}/transactions/`,
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
     * @name UserWebhooksList
     * @summary List webhooks
     * @request GET:/user/webhooks/
     * @secure
     */
    userWebhooksList: (
      query: UserWebhooksListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserWebhooksListData, any>({
        path: `/user/webhooks/`,
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
     * @name UserWebhooksCreate
     * @summary Create webhook
     * @request POST:/user/webhooks/
     * @secure
     */
    userWebhooksCreate: (data: Webhook, params: RequestParams = {}) =>
      this.request<UserWebhooksCreateData, any>({
        path: `/user/webhooks/`,
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
     * @name UserWebhooksRetrieve
     * @summary Retrieve webhook
     * @request GET:/user/webhooks/{identifier}/
     * @secure
     */
    userWebhooksRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UserWebhooksRetrieveData, any>({
        path: `/user/webhooks/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserWebhooksUpdate
     * @summary Update webhook
     * @request PUT:/user/webhooks/{identifier}/
     * @secure
     */
    userWebhooksUpdate: (
      identifier: string,
      data: Webhook,
      params: RequestParams = {},
    ) =>
      this.request<UserWebhooksUpdateData, any>({
        path: `/user/webhooks/${identifier}/`,
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
     * @name UserWebhooksPartialUpdate
     * @summary Partially webhook
     * @request PATCH:/user/webhooks/{identifier}/
     * @secure
     */
    userWebhooksPartialUpdate: (
      identifier: string,
      data: PatchedWebhook,
      params: RequestParams = {},
    ) =>
      this.request<UserWebhooksPartialUpdateData, any>({
        path: `/user/webhooks/${identifier}/`,
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
     * @name UserWebhooksDestroy
     * @summary Delete webhook
     * @request DELETE:/user/webhooks/{identifier}/
     * @secure
     */
    userWebhooksDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<UserWebhooksDestroyData, any>({
        path: `/user/webhooks/${identifier}/`,
        method: "DELETE",
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
    webhookCreate: (data: RehiveWebhook, params: RequestParams = {}) =>
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
  webhooks = {
    /**
     * No description
     *
     * @tags webhooks
     * @name WebhooksRehiveTransactionExecutedCreate
     * @summary Receive Platform webhook
     * @request POST:/webhooks/rehive_transaction/executed/
     * @secure
     */
    webhooksRehiveTransactionExecutedCreate: (
      data: RehiveWebhook,
      params: RequestParams = {},
    ) =>
      this.request<WebhooksRehiveTransactionExecutedCreateData, any>({
        path: `/webhooks/rehive_transaction/executed/`,
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
     * @tags webhooks
     * @name WebhooksRehiveTransactionInitiatedCreate
     * @summary Receive Platform webhook
     * @request POST:/webhooks/rehive_transaction/initiated/
     * @secure
     */
    webhooksRehiveTransactionInitiatedCreate: (
      data: RehiveWebhook,
      params: RequestParams = {},
    ) =>
      this.request<WebhooksRehiveTransactionInitiatedCreateData, any>({
        path: `/webhooks/rehive_transaction/initiated/`,
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
     * @tags webhooks
     * @name WebhooksRehiveUserCreateCreate
     * @summary Receive Platform webhook
     * @request POST:/webhooks/rehive_user/create/
     * @secure
     */
    webhooksRehiveUserCreateCreate: (
      data: RehiveWebhook,
      params: RequestParams = {},
    ) =>
      this.request<WebhooksRehiveUserCreateCreateData, any>({
        path: `/webhooks/rehive_user/create/`,
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
     * @tags webhooks
     * @name WebhooksRehiveUserEmailUpdateCreate
     * @summary Receive Platform webhook
     * @request POST:/webhooks/rehive_user/email_update/
     * @secure
     */
    webhooksRehiveUserEmailUpdateCreate: (
      data: RehiveWebhook,
      params: RequestParams = {},
    ) =>
      this.request<WebhooksRehiveUserEmailUpdateCreateData, any>({
        path: `/webhooks/rehive_user/email_update/`,
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
     * @tags webhooks
     * @name WebhooksRehiveUserUpdateCreate
     * @summary Receive Platform webhook
     * @request POST:/webhooks/rehive_user/update/
     * @secure
     */
    webhooksRehiveUserUpdateCreate: (
      data: RehiveWebhook,
      params: RequestParams = {},
    ) =>
      this.request<WebhooksRehiveUserUpdateCreateData, any>({
        path: `/webhooks/rehive_user/update/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
