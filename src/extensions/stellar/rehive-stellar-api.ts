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

export interface Activate {
  /**
   * Token
   * @minLength 1
   */
  token: string;
  /**
   * Id
   * @minLength 1
   */
  id?: string;
  /**
   * Email
   * @minLength 1
   */
  email?: string;
  /**
   * Secret
   * @format uuid
   */
  secret?: string;
}

export interface AdminCreateAsset {
  /**
   * Address
   * @minLength 1
   */
  address: string;
  /**
   * Currency code
   * @minLength 1
   * @maxLength 12
   */
  currency_code: string;
  /**
   * Description
   * @minLength 1
   */
  description?: string;
  /**
   * Symbol
   * @minLength 1
   */
  symbol?: string;
  /**
   * Unit
   * @minLength 1
   */
  unit?: string;
  /**
   * Id
   * @minLength 1
   */
  id?: string;
  /** Issued by company */
  issued_by_company?: boolean;
  /** Sep24 enabled */
  sep24_enabled?: boolean;
  /** Auth required */
  auth_required?: boolean;
  /**
   * Auth signing key
   * @minLength 1
   */
  auth_signing_key?: string;
  /**
   * Divisibility
   * @min 0
   * @max 7
   */
  divisibility?: number;
}

export interface AdminAsset {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Address
   * @minLength 1
   */
  address?: string | null;
  /**
   * Currency code
   * @minLength 1
   */
  currency_code?: string | null;
  /** Auth required */
  auth_required?: boolean;
  /**
   * Auth signing key
   * @maxLength 100
   */
  auth_signing_key?: string | null;
  /**
   * Display decimals
   * @min 0
   * @max 2147483647
   */
  display_decimals?: number;
}

export interface AdminAuthAssetTrust {
  /** Trustor public address */
  trustor_public_address: number;
  /** Authorize */
  authorize: boolean;
  /**
   * Asset id
   * @format uuid
   */
  asset_id: string;
}

export interface AdminFundAsset {
  /** Issuer secret */
  issuer_secret?: string | null;
  /** Amount */
  amount: number;
  /**
   * Asset id
   * @format uuid
   */
  asset_id: string;
}

export interface BlacklistedAccount {
  /** ID */
  id?: number;
  /**
   * Public address
   * @minLength 1
   * @maxLength 100
   */
  public_address: string;
  /**
   * Name
   * @maxLength 100
   */
  name?: string | null;
  /**
   * Description
   * @maxLength 255
   */
  description?: string | null;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
}

export interface Coldstorage {
  /** Balance */
  balance?: string;
  /**
   * Rehive account reference
   * @minLength 1
   */
  rehive_account_reference?: string;
  /** User account identifier */
  user_account_identifier?: string;
}

export interface ColdstorageAccount {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Account address
   * @maxLength 100
   */
  account_address?: string | null;
  /** Cursor */
  cursor?: number;
  /** User */
  user?: string;
  /** Status */
  status?: "Active" | "Disabled" | "Removed";
  /** Type */
  type?: "deposit" | "withdraw" | "issue" | null;
  /** Primary */
  primary?: boolean;
  /**
   * Date monitoring was disabled
   * @format date-time
   */
  date_monitoring_was_disabled?: string | null;
  /** Service controlled */
  service_controlled?: boolean;
  /**
   * Note
   * @maxLength 255
   */
  note?: string | null;
}

export interface CompanyAdmin {
  /**
   * Identifier
   * @minLength 1
   */
  identifier?: string | null;
  /**
   * Secret
   * @format uuid
   */
  secret?: string | null;
  /**
   * Email
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** Has completed setup */
  has_completed_setup: boolean;
  /** Active */
  active?: boolean;
  /** Is federated */
  is_federated?: string;
  /** Federation domain */
  federation_domain?: string;
}

export interface DefaultGroupAccountPair {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Group
   * @minLength 1
   * @maxLength 100
   */
  group: string;
  /**
   * Account
   * @minLength 1
   * @maxLength 100
   */
  account: string;
}

export interface CompanyConfiguration {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Transaction credit subtype
   * @maxLength 100
   */
  transaction_credit_subtype?: string | null;
  /**
   * Transaction debit subtype
   * @maxLength 100
   */
  transaction_debit_subtype?: string | null;
  /**
   * Transaction fee subtype
   * @maxLength 100
   */
  transaction_fee_subtype?: string | null;
  /** Use default as fallback */
  use_default_as_fallback?: boolean;
  /**
   * Transaction fund subtype
   * @maxLength 100
   */
  transaction_fund_subtype?: string | null;
  /**
   * Transaction issue subtype
   * @maxLength 100
   */
  transaction_issue_subtype?: string | null;
  /**
   * Transaction withdraw subtype
   * @maxLength 100
   */
  transaction_withdraw_subtype?: string | null;
  /**
   * Transaction credit warmstorage subtype
   * @maxLength 100
   */
  transaction_credit_warmstorage_subtype?: string | null;
  /**
   * Transaction debit warmstorage subtype
   * @maxLength 100
   */
  transaction_debit_warmstorage_subtype?: string | null;
  /**
   * Transaction credit hotwallet subtype
   * @maxLength 100
   */
  transaction_credit_hotwallet_subtype?: string | null;
  /**
   * Transaction debit hotwallet subtype
   * @maxLength 100
   */
  transaction_debit_hotwallet_subtype?: string | null;
  /**
   * Transaction credit coldstorage subtype
   * @maxLength 100
   */
  transaction_credit_coldstorage_subtype?: string | null;
  /**
   * Transaction debit coldstorage subtype
   * @maxLength 100
   */
  transaction_debit_coldstorage_subtype?: string | null;
  currency_fees_paid_by_company?: (string | null)[];
  group_account_pairs?: DefaultGroupAccountPair[];
  /** Disable withdrawals */
  disable_withdrawals?: boolean;
  /** Allow multiple memos per user */
  allow_multiple_memos_per_user?: boolean;
  /**
   * External signer url
   * @maxLength 255
   */
  external_signer_url?: string | null;
  /**
   * External signer key
   * @maxLength 255
   */
  external_signer_key?: string | null;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
}

export interface AnchorPlatformConfiguration {
  /**
   * Sep10 jwt secret
   * @minLength 1
   * @maxLength 100
   */
  sep10_jwt_secret?: string | null;
  /**
   * Anchor platform api key
   * @minLength 1
   * @maxLength 100
   */
  anchor_platform_api_key?: string | null;
  /**
   * Anchor platform base api
   * @minLength 1
   * @maxLength 255
   */
  anchor_platform_base_api?: string | null;
  /**
   * Anchor tier requirement
   * @minLength 1
   * @maxLength 100
   */
  anchor_tier_requirement?: string | null;
  withdrawable_currencies?: (string | null)[];
  /**
   * Prs return url
   * @minLength 1
   * @maxLength 255
   */
  prs_return_url?: string | null;
}

export interface StellarToml {
  /**
   * File
   * @format uri
   */
  file?: string;
}

export interface Federation {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Domain
   * @maxLength 255
   */
  domain?: string | null;
  /** Validated */
  validated?: boolean;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
}

export interface Hotwallet {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Rehive account reference
   * @minLength 1
   */
  rehive_account_reference?: string;
  /**
   * Low balance percentage
   * @format decimal
   */
  low_balance_percentage?: string;
  /**
   * Low balance amount
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  low_balance_amount?: number;
  /** Fee priority */
  fee_priority?: "high" | "medium" | "low";
  /** Fee maximum */
  fee_maximum?:
    | "10"
    | "20"
    | "30"
    | "40"
    | "50"
    | "60"
    | "70"
    | "80"
    | "90"
    | "95"
    | "99";
  /** Externally signed */
  externally_signed?: boolean;
  /** Primary hotwallet account */
  primary_hotwallet_account?: string;
}

export interface HotwalletBalance {
  /** Balance */
  balance?: string;
  /** Rehive account reference */
  rehive_account_reference?: string;
  /** Low balance percentage */
  low_balance_percentage?: string;
  /** User account identifier */
  user_account_identifier?: string;
  /** Primary stellar account */
  primary_stellar_account?: string;
}

export interface HotwalletFund {
  /** Account address */
  account_address?: string;
}

export interface HotwalletFees {
  /** Total fees */
  total_fees?: string;
}

export interface HotwalletMerge {
  /**
   * Destination account
   * @minLength 1
   */
  destination_account: string;
}

export interface HotwalletSend {
  /**
   * Rehive code
   * @minLength 1
   */
  rehive_code?: string;
  /** Rehive response */
  rehive_response?: object;
  /** Reference */
  reference?: string | null;
  /** To reference */
  to_reference?: string | null;
  /**
   * Amount
   * @min 0
   */
  amount: number;
  /**
   * Currency
   * @default "XLM"
   */
  currency?: string | null;
  /**
   * Account
   * @default "default"
   */
  account?: string | null;
  /**
   * Debit account
   * @default "default"
   */
  debit_account?: string | null;
  /**
   * Memo
   * @maxLength 28
   * @default ""
   */
  memo?: string;
}

export interface KnownPublicAddresses {
  /** ID */
  id?: number;
  /**
   * Public address
   * @maxLength 100
   */
  public_address?: string | null;
  /**
   * Name
   * @maxLength 100
   */
  name?: string | null;
  /**
   * Description
   * @maxLength 255
   */
  description?: string | null;
  /**
   * Logo
   * @format uri
   */
  logo?: string | null;
  /** Requires memo */
  requires_memo?: boolean;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
}

export interface AdminMemo {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Data
   * @minLength 1
   */
  data?: string | null;
  /** Memo type */
  memo_type?: "MEMO_TEXT" | "MEMO_ID" | "MEMO_HASH" | "MEMO_RETURN" | null;
  /**
   * Rehive account
   * @maxLength 255
   */
  rehive_account?: string | null;
  /** Primary */
  primary?: boolean;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
  /** User */
  user?: number | null;
}

export interface UserSeralizer {
  /**
   * Id
   * @minLength 1
   */
  id?: string;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email?: string | null;
  /**
   * Identifier
   * @minLength 1
   */
  identifier?: string;
  /**
   * First name
   * @maxLength 50
   */
  first_name?: string | null;
  /**
   * Last name
   * @maxLength 50
   */
  last_name?: string | null;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
  /**
   * Account id
   * @minLength 1
   */
  account_id?: string | null;
  /**
   * Username
   * @maxLength 150
   */
  username?: string | null;
  /** Memo */
  memo?: string;
}

export interface AdminSEP10AuthenticatedAccount {
  /**
   * Identifier
   * @format uuid
   */
  identifier?: string;
  /**
   * Onchain identifier
   * @minLength 1
   */
  onchain_identifier?: string;
  user: UserSeralizer;
  /** Is validated */
  is_validated?: boolean;
  /**
   * Client domain
   * @minLength 1
   */
  client_domain?: string | null;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
}

export interface Transaction {
  /** ID */
  id?: number;
  /**
   * User
   * @minLength 1
   */
  user: string;
  /**
   * Reason for assigning
   * @maxLength 255
   */
  reason_for_assigning?: string | null;
  /**
   * Rehive code
   * @minLength 1
   */
  rehive_code?: string | null;
  /**
   * External id
   * @minLength 1
   */
  external_id?: string | null;
  /** Rehive response */
  rehive_response?: object | null;
  /** Tx type */
  tx_type?:
    | "debit"
    | "credit"
    | "deposit"
    | "withdraw"
    | "transfer"
    | "fund"
    | "issue"
    | "asset_auth";
  /** Amount */
  amount?: number;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string;
  /** Status */
  status?:
    | "Initiated"
    | "Quoted"
    | "Unfunded"
    | "Funded"
    | "Waiting"
    | "Pending"
    | "Confirmed"
    | "Complete"
    | "Failed"
    | "Cancelled"
    | null;
  /** Fee */
  fee?: number;
  /**
   * To reference
   * @minLength 1
   */
  to_reference?: string | null;
  /**
   * From reference
   * @minLength 1
   */
  from_reference?: string | null;
  /** Horizon response */
  horizon_response?: object | null;
  /** Withdrawal status */
  withdrawal_status?:
    | "pending_withdrawal"
    | "failed_withdrawal"
    | "approved_withdrawal"
    | null;
  /** Transaction hash */
  transaction_hash?: string;
  /**
   * Xdr
   * @minLength 1
   */
  xdr?: string | null;
  /** Signed */
  signed?: boolean;
  /**
   * Memo
   * @minLength 1
   */
  memo?: string;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
  /**
   * Completed
   * @format date-time
   */
  completed?: string | null;
}

export interface AdminSEP24Transaction {
  /**
   * Identifier
   * @format uuid
   */
  identifier?: string;
  /**
   * Anchor platform id
   * @minLength 1
   */
  anchor_platform_id?: string;
  /**
   * Sep10 authenticated account
   * @format uuid
   */
  sep10_authenticated_account?: string | null;
  /** Prs request */
  prs_request?: string;
  /** Tx type */
  tx_type: "deposit" | "withdraw";
  /** Amount */
  amount?: number;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string;
  transaction: Transaction;
  /**
   * Rehive withdrawal account reference
   * @minLength 1
   */
  rehive_withdrawal_account_reference?: string | null;
  /**
   * Rehive withdrawal transaction id
   * @minLength 1
   */
  rehive_withdrawal_transaction_id?: string | null;
  /**
   * Processing account
   * @minLength 1
   */
  processing_account?: string;
  /**
   * Rehive internal dispersal collection id
   * @minLength 1
   */
  rehive_internal_dispersal_collection_id?: string;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
  /** Status */
  status:
    | "initiated"
    | "initiated_invoicing"
    | "prs_requested"
    | "prs_quoted"
    | "prs_processing"
    | "prs_complete"
    | "processing_internal_dispersal"
    | "completed_internal_dispersal"
    | "processing_external_dispersal"
    | "completed_external_dispersal"
    | "complete"
    | "failed";
}

export interface StellarAccount {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Account address
   * @maxLength 100
   */
  account_address?: string | null;
  /** Cursor */
  cursor?: number;
  /** User */
  user?: string;
  /** Status */
  status?: "Active" | "Disabled" | "Removed";
  /** Type */
  type?: "deposit" | "withdraw" | "issue" | null;
  /** Primary */
  primary?: boolean;
  /**
   * Date monitoring was disabled
   * @format date-time
   */
  date_monitoring_was_disabled?: string | null;
  /** Service controlled */
  service_controlled?: boolean;
  /**
   * Note
   * @maxLength 255
   */
  note?: string | null;
}

export interface StellarAccountGenerate {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Account address
   * @minLength 1
   */
  account_address?: string | null;
  /** Type */
  type?: "deposit" | "withdraw" | "issue" | null;
}

export interface StellarAccountChangeOwnership {
  /**
   * New owner address
   * @minLength 1
   */
  new_owner_address: string;
}

export interface AdminUserInfoSeralizer {
  /**
   * Id
   * @minLength 1
   */
  id?: string;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email?: string | null;
  /**
   * Identifier
   * @minLength 1
   */
  identifier?: string;
  /** Crypto */
  crypto?: string;
  /**
   * Username
   * @maxLength 150
   */
  username?: string | null;
  /** Memo */
  memo?: string;
}

export interface AdminTransaction {
  /** ID */
  id?: number;
  user: AdminUserInfoSeralizer;
  /**
   * Reason for assigning
   * @maxLength 255
   */
  reason_for_assigning?: string | null;
  /**
   * Rehive code
   * @minLength 1
   */
  rehive_code?: string | null;
  /**
   * External id
   * @minLength 1
   */
  external_id?: string | null;
  /** Rehive response */
  rehive_response?: object | null;
  /** Tx type */
  tx_type?:
    | "debit"
    | "credit"
    | "deposit"
    | "withdraw"
    | "transfer"
    | "fund"
    | "issue"
    | "asset_auth";
  /** Amount */
  amount?: number;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string;
  /** Status */
  status?:
    | "Initiated"
    | "Quoted"
    | "Unfunded"
    | "Funded"
    | "Waiting"
    | "Pending"
    | "Confirmed"
    | "Complete"
    | "Failed"
    | "Cancelled"
    | null;
  /** Fee */
  fee?: number;
  /**
   * To reference
   * @minLength 1
   */
  to_reference?: string | null;
  /**
   * From reference
   * @minLength 1
   */
  from_reference?: string | null;
  /** Horizon response */
  horizon_response?: object | null;
  /** Withdrawal status */
  withdrawal_status?:
    | "pending_withdrawal"
    | "failed_withdrawal"
    | "approved_withdrawal"
    | null;
  /** Transaction hash */
  transaction_hash?: string;
  /**
   * Xdr
   * @minLength 1
   */
  xdr?: string | null;
  /** Signed */
  signed?: boolean;
  /**
   * Memo
   * @minLength 1
   */
  memo?: string;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
  /**
   * Completed
   * @format date-time
   */
  completed?: string | null;
}

export interface AdminSendTransaction {
  /**
   * Rehive code
   * @minLength 1
   */
  rehive_code?: string;
  /** Rehive response */
  rehive_response?: object;
  /** Reference */
  reference?: string | null;
  /** To reference */
  to_reference?: string | null;
  /**
   * Amount
   * @min 0
   */
  amount: number;
  /**
   * Currency
   * @default "XLM"
   */
  currency?: string | null;
  /**
   * Account
   * @default "default"
   */
  account?: string | null;
  /**
   * Debit account
   * @default "default"
   */
  debit_account?: string | null;
  /**
   * Memo
   * @maxLength 28
   * @default ""
   */
  memo?: string;
  /**
   * User
   * @minLength 1
   */
  user: string;
}

export interface AdminUser {
  /**
   * Id
   * @minLength 1
   */
  id?: string;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email?: string | null;
  /**
   * Identifier
   * @minLength 1
   */
  identifier?: string;
  /**
   * First name
   * @maxLength 50
   */
  first_name?: string | null;
  /**
   * Last name
   * @maxLength 50
   */
  last_name?: string | null;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
  /**
   * Account id
   * @minLength 1
   */
  account_id?: string | null;
  /** Crypto */
  crypto?: string;
  /**
   * Username
   * @maxLength 150
   */
  username?: string | null;
  /** Memo */
  memo?: string;
}

export interface AdminUserMemo {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Data
   * @minLength 1
   */
  data?: string | null;
  /** Memo type */
  memo_type?: "MEMO_TEXT" | "MEMO_ID" | "MEMO_HASH" | "MEMO_RETURN" | null;
  /**
   * Rehive account
   * @maxLength 255
   */
  rehive_account?: string | null;
  /** Primary */
  primary?: boolean;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
  /** User */
  user?: number | null;
}

export interface Warmstorage {
  /** Balance */
  balance?: string;
  /**
   * Rehive account reference
   * @minLength 1
   */
  rehive_account_reference?: string;
  /** User account identifier */
  user_account_identifier?: string;
}

export interface WarmstorageAccount {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Account address
   * @maxLength 100
   */
  account_address?: string | null;
  /** Cursor */
  cursor?: number;
  /** User */
  user?: string;
  /** Status */
  status?: "Active" | "Disabled" | "Removed";
  /** Type */
  type?: "deposit" | "withdraw" | "issue" | null;
  /** Primary */
  primary?: boolean;
  /**
   * Date monitoring was disabled
   * @format date-time
   */
  date_monitoring_was_disabled?: string | null;
  /**
   * Note
   * @maxLength 255
   */
  note?: string | null;
}

export interface UserCompanyConfiguration {
  /**
   * Transaction credit subtype
   * @minLength 1
   */
  transaction_credit_subtype?: string | null;
  /**
   * Transaction debit subtype
   * @minLength 1
   */
  transaction_debit_subtype?: string | null;
  /**
   * Transaction fee subtype
   * @minLength 1
   */
  transaction_fee_subtype?: string | null;
  /**
   * Transaction fund subtype
   * @minLength 1
   */
  transaction_fund_subtype?: string | null;
  /**
   * Transaction withdraw subtype
   * @minLength 1
   */
  transaction_withdraw_subtype?: string | null;
  /** Disable withdrawals */
  disable_withdrawals?: boolean;
}

export interface Company {
  /**
   * Identifier
   * @minLength 1
   */
  identifier?: string | null;
  /** Active */
  active?: boolean;
  /** Is federated */
  is_federated?: string;
  /** Federation domain */
  federation_domain?: string;
  /** Has service issued acccounts */
  has_service_issued_acccounts?: string;
  company_configuration: UserCompanyConfiguration;
  /** Anchor tier requirement */
  anchor_tier_requirement?: string;
  /** Sep24 withdrawable currencies */
  sep24_withdrawable_currencies?: string;
}

export interface Asset {
  /**
   * Hotwallet account id
   * @minLength 1
   */
  hotwallet_account_id?: string;
  /**
   * Currency code
   * @minLength 1
   */
  currency_code?: string;
  /**
   * Display decimals
   * @minLength 1
   */
  display_decimals?: string;
  /**
   * Address
   * @minLength 1
   */
  address?: string;
  /**
   * Id
   * @minLength 1
   */
  id: string;
  /** Sep24 enabled */
  sep24_enabled?: boolean;
}

export interface Deactivate {
  /**
   * Token
   * @minLength 1
   */
  token: string;
}

export interface PRSWebhook {
  /**
   * Id
   * @minLength 1
   */
  id: string;
  /** Event */
  event: "service_payment_requests.request.update";
  /**
   * Company
   * @minLength 1
   */
  company: string;
  /** Data */
  data: object;
}

export interface InfoView {
  /** Stellar network */
  stellar_network?: string;
}

export interface KnownAssets {
  /**
   * Address
   * @minLength 1
   */
  address?: string | null;
  /**
   * Code
   * @minLength 1
   */
  code?: string | null;
  /**
   * Description
   * @minLength 1
   */
  description?: string | null;
  /**
   * Symbol
   * @minLength 1
   */
  symbol?: string | null;
  /**
   * Unit
   * @minLength 1
   */
  unit?: string | null;
  /**
   * Icon
   * @minLength 1
   */
  icon?: string | null;
  /**
   * Website
   * @minLength 1
   */
  website?: string | null;
  /**
   * Name
   * @minLength 1
   */
  name?: string | null;
}

export interface SendTransaction {
  /**
   * Rehive code
   * @minLength 1
   */
  rehive_code?: string;
  /** Rehive response */
  rehive_response?: object;
  /** Reference */
  reference?: string | null;
  /** To reference */
  to_reference?: string | null;
  /**
   * Amount
   * @min 0
   */
  amount: number;
  /**
   * Currency
   * @default "XLM"
   */
  currency?: string | null;
  /**
   * Account
   * @default "default"
   */
  account?: string | null;
  /**
   * Debit account
   * @default "default"
   */
  debit_account?: string | null;
  /**
   * Memo
   * @maxLength 28
   * @default ""
   */
  memo?: string;
}

export interface UserInfoSeralizer {
  /**
   * Id
   * @minLength 1
   */
  id?: string;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email?: string | null;
  /**
   * Identifier
   * @minLength 1
   */
  identifier?: string;
  /** Crypto */
  crypto?: string;
  /**
   * Username
   * @maxLength 150
   */
  username?: string | null;
  /** Memo */
  memo?: string;
}

export type AnchorAccountValidate = object;

export type AnchorSessionValidate = object;

export interface UserSEP24Transaction {
  /**
   * Identifier
   * @format uuid
   */
  identifier?: string;
  /**
   * Anchor platform id
   * @minLength 1
   */
  anchor_platform_id?: string;
  /** Prs request id */
  prs_request_id?: string;
  /** Tx type */
  tx_type: "deposit" | "withdraw";
  /**
   * Amount
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  amount?: number;
  /**
   * Currency
   * @minLength 1
   * @maxLength 10
   */
  currency: string;
  /** Transaction hash */
  transaction_hash?: string;
  /**
   * Rehive withdrawal account reference
   * @maxLength 50
   */
  rehive_withdrawal_account_reference?: string | null;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
  /** Status */
  status:
    | "initiated"
    | "initiated_invoicing"
    | "prs_requested"
    | "prs_quoted"
    | "prs_processing"
    | "prs_complete"
    | "processing_internal_dispersal"
    | "completed_internal_dispersal"
    | "processing_external_dispersal"
    | "completed_external_dispersal"
    | "complete"
    | "failed";
}

export interface UserMemo {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Data
   * @minLength 1
   */
  data?: string | null;
  /** Memo type */
  memo_type?: "MEMO_TEXT" | "MEMO_ID" | "MEMO_HASH" | "MEMO_RETURN" | null;
  /**
   * Rehive account
   * @maxLength 255
   */
  rehive_account?: string | null;
  /** Primary */
  primary?: boolean;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Updated
   * @format date-time
   */
  updated?: string;
  /** User */
  user?: number | null;
}

export interface SetUsernameMemo {
  /**
   * Username
   * @minLength 1
   */
  username: string;
}

export type ActivateCreateData = Activate;

export type AdminAssetListData = AdminCreateAsset[];

export type AdminAssetCreateData = AdminCreateAsset;

export type AdminAssetReadData = AdminAsset;

export type AdminAssetPartialUpdateData = AdminAsset;

export type AdminAssetAuthoriseHolderCreateData = AdminAuthAssetTrust;

export type AdminAssetFundCreateData = AdminFundAsset;

export type AdminBlacklistedAccountReadData = BlacklistedAccount;

export type AdminBlacklistedAccountUpdateData = BlacklistedAccount;

export type AdminBlacklistedAccountPartialUpdateData = BlacklistedAccount;

export type AdminBlacklistedAccountDeleteData = any;

export type AdminBlacklistedAccountsListData = BlacklistedAccount[];

export type AdminBlacklistedAccountsCreateData = BlacklistedAccount;

export interface AdminColdstorageListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface AdminColdstorageListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: Coldstorage[];
}

export interface AdminColdstorageAccountsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface AdminColdstorageAccountsListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: ColdstorageAccount[];
}

export type AdminColdstorageAccountsCreateData = ColdstorageAccount;

export type AdminColdstorageAccountsReadData = ColdstorageAccount;

export type AdminColdstorageAccountsPartialUpdateData = ColdstorageAccount;

export type AdminCompanyListData = CompanyAdmin[];

export type AdminCompanyPartialUpdateData = CompanyAdmin;

export type AdminCompanyConfigurationListData = CompanyConfiguration[];

export type AdminCompanyConfigurationUpdateData = CompanyConfiguration;

export type AdminCompanyConfigurationPartialUpdateData = CompanyConfiguration;

export type AdminCompanyConfigurationAccountGroupsListData =
  DefaultGroupAccountPair[];

export type AdminCompanyConfigurationAccountGroupsCreateData =
  DefaultGroupAccountPair;

export type AdminCompanyConfigurationAccountGroupsReadData =
  DefaultGroupAccountPair;

export type AdminCompanyConfigurationAccountGroupsUpdateData =
  DefaultGroupAccountPair;

export type AdminCompanyConfigurationAccountGroupsPartialUpdateData =
  DefaultGroupAccountPair;

export type AdminCompanyConfigurationAccountGroupsDeleteData = any;

export type AdminCompanyConfigurationAnchorPlatformListData =
  AnchorPlatformConfiguration[];

export type AdminCompanyConfigurationAnchorPlatformUpdateData =
  AnchorPlatformConfiguration;

export type AdminCompanyConfigurationAnchorPlatformPartialUpdateData =
  AnchorPlatformConfiguration;

export type AdminCompanyStellarTomlListData = StellarToml[];

export type AdminFederationListData = Federation[];

export type AdminFederationCreateData = Federation;

export type AdminHotwalletListData = Hotwallet[];

export type AdminHotwalletCreateData = Hotwallet;

export type AdminHotwalletPartialUpdateData = Hotwallet;

export type AdminHotwalletActiveListData = HotwalletBalance[];

export type AdminHotwalletEnableMssCreateData = HotwalletFund;

export type AdminHotwalletFeesListData = HotwalletFees[];

export type AdminHotwalletFundListData = HotwalletFund[];

export type AdminHotwalletMergeCreateData = HotwalletMerge;

export type AdminHotwalletSendCreateData = HotwalletSend;

export type AdminKnownPublicAddressesListData = KnownPublicAddresses[];

export type AdminKnownPublicAddressesCreateData = KnownPublicAddresses;

export type AdminKnownPublicAddressesReadData = KnownPublicAddresses;

export type AdminKnownPublicAddressesUpdateData = KnownPublicAddresses;

export type AdminKnownPublicAddressesPartialUpdateData = KnownPublicAddresses;

export type AdminKnownPublicAddressesDeleteData = any;

export type AdminMemosListData = AdminMemo[];

export type AdminMemosCreateData = AdminMemo;

export interface AdminSep10AuthenticatedAccountsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface AdminSep10AuthenticatedAccountsListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: AdminSEP10AuthenticatedAccount[];
}

export type AdminSep10AuthenticatedAccountsReadData =
  AdminSEP10AuthenticatedAccount;

export interface AdminSep24TransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface AdminSep24TransactionsListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: AdminSEP24Transaction[];
}

export type AdminSep24TransactionsReadData = AdminSEP24Transaction;

export interface AdminStellarAccountsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface AdminStellarAccountsListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: StellarAccount[];
}

export type AdminStellarAccountsGenerateCreateData = StellarAccountGenerate;

export type AdminStellarAccountsReadData = StellarAccount;

export type AdminStellarAccountsPartialUpdateData = StellarAccount;

export type AdminStellarAccountsChangeOwnershipCreateData =
  StellarAccountChangeOwnership;

export interface AdminTransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface AdminTransactionsListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: AdminTransaction[];
}

export type AdminTransactionsSendCreateData = AdminSendTransaction;

export type AdminTransactionsReadData = AdminTransaction;

export type AdminTransactionsPartialUpdateData = AdminTransaction;

export interface AdminUsersListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface AdminUsersListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: AdminUserInfoSeralizer[];
}

export type AdminUsersCreateData = AdminUserInfoSeralizer;

export type AdminUsersReadData = AdminUser;

export type AdminUsersPartialUpdateData = UserSeralizer;

export type AdminUsersMemosListData = AdminUserMemo[];

export type AdminUsersMemosCreateData = AdminUserMemo;

export interface AdminWarmstorageListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface AdminWarmstorageListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: Warmstorage[];
}

export interface AdminWarmstorageAccountsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface AdminWarmstorageAccountsListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: WarmstorageAccount[];
}

export type AdminWarmstorageAccountsCreateData = WarmstorageAccount;

export type AdminWarmstorageAccountsReadData = WarmstorageAccount;

export type AdminWarmstorageAccountsPartialUpdateData = WarmstorageAccount;

export type CompanyListData = Company[];

export type CompanyAssetsListData = Asset[];

export type DeactivateCreateData = Deactivate;

export type HooksPrsCreateData = PRSWebhook;

export type InfoListData = InfoView[];

export interface KnownAssetsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface KnownAssetsListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: KnownAssets[];
}

export type StellarFederationReadData = any;

export interface TransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export interface TransactionsListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: AdminTransaction[];
}

export type TransactionsSendCreateData = SendTransaction;

export type UserListData = UserInfoSeralizer[];

export type UserPartialUpdateData = UserInfoSeralizer;

export type UserAccountListData = any;

export type UserAnchorSessionsValidateCreateData = AnchorAccountValidate;

export type UserAnchorSessionsValidateAccountCreateData = AnchorAccountValidate;

export type UserAnchorSessionsValidateSessionCreateData = AnchorSessionValidate;

export type UserAnchorTransactionsListData = UserSEP24Transaction[];

export type UserAnchorTransactionsReadData = UserSEP24Transaction;

export type UserAnchorTransactionsCreateData = UserSEP24Transaction;

export type UserAnchorTransactionsPartialUpdateData = UserSEP24Transaction;

export type UserAnchorAuthCreateData = any;

export type UserKnownPublicAddressesListData = KnownPublicAddresses[];

export type UserMemosListData = UserMemo[];

export type UserMemosCreateData = UserMemo;

export type UserTransactionsSendCreateData = SendTransaction;

export type UserUsernameSetCreateData = SetUsernameMemo;

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
  public baseUrl: string = "https://stellar.services.rehive.com/api/1";
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
 * @title Stellar Service API
 * @version v1
 * @baseUrl https://stellar.services.rehive.com/api/1
 *
 * Start by clicking Authorize and adding the header: Token <your-api-key>. The user endpoints require a normal rehive user token returned by Rehive's /auth/login/ or /auth/register/ endpoints. The admin endpoints require a permanent token with admin permissions. The /hooks/ enpoint requires the secret from the Rehive webhook settings in the authorization header as Secret <your-webhook-secret>.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  activate = {
    /**
     * @description This endpoint is used by the Rehive Marketplace to add this service for a specific company. It requires an permanent API token for that company with admin permissions.
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
     * @description Add a new stellar asset to the service, or list existing assets. You'll need to include a valid stellar anchor issuing address and asset ID.
     *
     * @tags admin
     * @name AdminAssetList
     * @request GET:/admin/asset/
     * @secure
     */
    adminAssetList: (params: RequestParams = {}) =>
      this.request<AdminAssetListData, any>({
        path: `/admin/asset/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a new stellar asset to the service, or list existing assets. You'll need to include a valid stellar anchor issuing address and asset ID.
     *
     * @tags admin
     * @name AdminAssetCreate
     * @request POST:/admin/asset/
     * @secure
     */
    adminAssetCreate: (data: AdminCreateAsset, params: RequestParams = {}) =>
      this.request<AdminAssetCreateData, any>({
        path: `/admin/asset/`,
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
     * @name AdminAssetRead
     * @request GET:/admin/asset/{id}/
     * @secure
     */
    adminAssetRead: (id: string, params: RequestParams = {}) =>
      this.request<AdminAssetReadData, any>({
        path: `/admin/asset/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminAssetPartialUpdate
     * @request PATCH:/admin/asset/{id}/
     * @secure
     */
    adminAssetPartialUpdate: (
      id: string,
      data: AdminAsset,
      params: RequestParams = {},
    ) =>
      this.request<AdminAssetPartialUpdateData, any>({
        path: `/admin/asset/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description A simple APIView for funding asset accounts.
     *
     * @tags admin
     * @name AdminAssetAuthoriseHolderCreate
     * @request POST:/admin/asset/{id}/authorise_holder/
     * @secure
     */
    adminAssetAuthoriseHolderCreate: (
      id: string,
      data: AdminAuthAssetTrust,
      params: RequestParams = {},
    ) =>
      this.request<AdminAssetAuthoriseHolderCreateData, any>({
        path: `/admin/asset/${id}/authorise_holder/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description A simple APIView for funding asset accounts.
     *
     * @tags admin
     * @name AdminAssetFundCreate
     * @request POST:/admin/asset/{id}/fund/
     * @secure
     */
    adminAssetFundCreate: (
      id: string,
      data: AdminFundAsset,
      params: RequestParams = {},
    ) =>
      this.request<AdminAssetFundCreateData, any>({
        path: `/admin/asset/${id}/fund/`,
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
     * @name AdminBlacklistedAccountRead
     * @request GET:/admin/blacklisted-account/{id}/
     * @secure
     */
    adminBlacklistedAccountRead: (id: string, params: RequestParams = {}) =>
      this.request<AdminBlacklistedAccountReadData, any>({
        path: `/admin/blacklisted-account/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBlacklistedAccountUpdate
     * @request PUT:/admin/blacklisted-account/{id}/
     * @secure
     */
    adminBlacklistedAccountUpdate: (
      id: string,
      data: BlacklistedAccount,
      params: RequestParams = {},
    ) =>
      this.request<AdminBlacklistedAccountUpdateData, any>({
        path: `/admin/blacklisted-account/${id}/`,
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
     * @name AdminBlacklistedAccountPartialUpdate
     * @request PATCH:/admin/blacklisted-account/{id}/
     * @secure
     */
    adminBlacklistedAccountPartialUpdate: (
      id: string,
      data: BlacklistedAccount,
      params: RequestParams = {},
    ) =>
      this.request<AdminBlacklistedAccountPartialUpdateData, any>({
        path: `/admin/blacklisted-account/${id}/`,
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
     * @name AdminBlacklistedAccountDelete
     * @request DELETE:/admin/blacklisted-account/{id}/
     * @secure
     */
    adminBlacklistedAccountDelete: (id: string, params: RequestParams = {}) =>
      this.request<AdminBlacklistedAccountDeleteData, any>({
        path: `/admin/blacklisted-account/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBlacklistedAccountsList
     * @request GET:/admin/blacklisted-accounts/
     * @secure
     */
    adminBlacklistedAccountsList: (params: RequestParams = {}) =>
      this.request<AdminBlacklistedAccountsListData, any>({
        path: `/admin/blacklisted-accounts/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBlacklistedAccountsCreate
     * @request POST:/admin/blacklisted-accounts/
     * @secure
     */
    adminBlacklistedAccountsCreate: (
      data: BlacklistedAccount,
      params: RequestParams = {},
    ) =>
      this.request<AdminBlacklistedAccountsCreateData, any>({
        path: `/admin/blacklisted-accounts/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View coldstorage balance
     *
     * @tags admin
     * @name AdminColdstorageList
     * @request GET:/admin/coldstorage/
     * @secure
     */
    adminColdstorageList: (
      query: AdminColdstorageListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminColdstorageListData, any>({
        path: `/admin/coldstorage/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List or create coldstorage accounts for monitoring
     *
     * @tags admin
     * @name AdminColdstorageAccountsList
     * @request GET:/admin/coldstorage/accounts/
     * @secure
     */
    adminColdstorageAccountsList: (
      query: AdminColdstorageAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminColdstorageAccountsListData, any>({
        path: `/admin/coldstorage/accounts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List or create coldstorage accounts for monitoring
     *
     * @tags admin
     * @name AdminColdstorageAccountsCreate
     * @request POST:/admin/coldstorage/accounts/
     * @secure
     */
    adminColdstorageAccountsCreate: (
      data: ColdstorageAccount,
      params: RequestParams = {},
    ) =>
      this.request<AdminColdstorageAccountsCreateData, any>({
        path: `/admin/coldstorage/accounts/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View or update a cold storage account
     *
     * @tags admin
     * @name AdminColdstorageAccountsRead
     * @request GET:/admin/coldstorage/accounts/{id}/
     * @secure
     */
    adminColdstorageAccountsRead: (id: string, params: RequestParams = {}) =>
      this.request<AdminColdstorageAccountsReadData, any>({
        path: `/admin/coldstorage/accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View or update a cold storage account
     *
     * @tags admin
     * @name AdminColdstorageAccountsPartialUpdate
     * @request PATCH:/admin/coldstorage/accounts/{id}/
     * @secure
     */
    adminColdstorageAccountsPartialUpdate: (
      id: string,
      data: ColdstorageAccount,
      params: RequestParams = {},
    ) =>
      this.request<AdminColdstorageAccountsPartialUpdateData, any>({
        path: `/admin/coldstorage/accounts/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Details of Rehive company that was added via the /activate/ endpoint.
     *
     * @tags admin
     * @name AdminCompanyList
     * @request GET:/admin/company/
     * @secure
     */
    adminCompanyList: (params: RequestParams = {}) =>
      this.request<AdminCompanyListData, any>({
        path: `/admin/company/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Details of Rehive company that was added via the /activate/ endpoint.
     *
     * @tags admin
     * @name AdminCompanyPartialUpdate
     * @request PATCH:/admin/company/
     * @secure
     */
    adminCompanyPartialUpdate: (
      data: CompanyAdmin,
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
     * @description Details of Rehive company that was added via the /activate/ endpoint.
     *
     * @tags admin
     * @name AdminCompanyConfigurationList
     * @request GET:/admin/company/configuration/
     * @secure
     */
    adminCompanyConfigurationList: (params: RequestParams = {}) =>
      this.request<AdminCompanyConfigurationListData, any>({
        path: `/admin/company/configuration/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Details of Rehive company that was added via the /activate/ endpoint.
     *
     * @tags admin
     * @name AdminCompanyConfigurationUpdate
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
     * @description Details of Rehive company that was added via the /activate/ endpoint.
     *
     * @tags admin
     * @name AdminCompanyConfigurationPartialUpdate
     * @request PATCH:/admin/company/configuration/
     * @secure
     */
    adminCompanyConfigurationPartialUpdate: (
      data: CompanyConfiguration,
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
     * @description Group/Account Pairs specified for the company
     *
     * @tags admin
     * @name AdminCompanyConfigurationAccountGroupsList
     * @request GET:/admin/company/configuration/account-groups/
     * @secure
     */
    adminCompanyConfigurationAccountGroupsList: (params: RequestParams = {}) =>
      this.request<AdminCompanyConfigurationAccountGroupsListData, any>({
        path: `/admin/company/configuration/account-groups/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Group/Account Pairs specified for the company
     *
     * @tags admin
     * @name AdminCompanyConfigurationAccountGroupsCreate
     * @request POST:/admin/company/configuration/account-groups/
     * @secure
     */
    adminCompanyConfigurationAccountGroupsCreate: (
      data: DefaultGroupAccountPair,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyConfigurationAccountGroupsCreateData, any>({
        path: `/admin/company/configuration/account-groups/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Details for a Group/Account pair
     *
     * @tags admin
     * @name AdminCompanyConfigurationAccountGroupsRead
     * @request GET:/admin/company/configuration/account-groups/{id}/
     * @secure
     */
    adminCompanyConfigurationAccountGroupsRead: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyConfigurationAccountGroupsReadData, any>({
        path: `/admin/company/configuration/account-groups/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Details for a Group/Account pair
     *
     * @tags admin
     * @name AdminCompanyConfigurationAccountGroupsUpdate
     * @request PUT:/admin/company/configuration/account-groups/{id}/
     * @secure
     */
    adminCompanyConfigurationAccountGroupsUpdate: (
      id: string,
      data: DefaultGroupAccountPair,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyConfigurationAccountGroupsUpdateData, any>({
        path: `/admin/company/configuration/account-groups/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Details for a Group/Account pair
     *
     * @tags admin
     * @name AdminCompanyConfigurationAccountGroupsPartialUpdate
     * @request PATCH:/admin/company/configuration/account-groups/{id}/
     * @secure
     */
    adminCompanyConfigurationAccountGroupsPartialUpdate: (
      id: string,
      data: DefaultGroupAccountPair,
      params: RequestParams = {},
    ) =>
      this.request<
        AdminCompanyConfigurationAccountGroupsPartialUpdateData,
        any
      >({
        path: `/admin/company/configuration/account-groups/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Details for a Group/Account pair
     *
     * @tags admin
     * @name AdminCompanyConfigurationAccountGroupsDelete
     * @request DELETE:/admin/company/configuration/account-groups/{id}/
     * @secure
     */
    adminCompanyConfigurationAccountGroupsDelete: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyConfigurationAccountGroupsDeleteData, any>({
        path: `/admin/company/configuration/account-groups/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Details of Rehive company that was added via the /activate/ endpoint.
     *
     * @tags admin
     * @name AdminCompanyConfigurationAnchorPlatformList
     * @request GET:/admin/company/configuration/anchor_platform/
     * @secure
     */
    adminCompanyConfigurationAnchorPlatformList: (params: RequestParams = {}) =>
      this.request<AdminCompanyConfigurationAnchorPlatformListData, any>({
        path: `/admin/company/configuration/anchor_platform/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Details of Rehive company that was added via the /activate/ endpoint.
     *
     * @tags admin
     * @name AdminCompanyConfigurationAnchorPlatformUpdate
     * @request PUT:/admin/company/configuration/anchor_platform/
     * @secure
     */
    adminCompanyConfigurationAnchorPlatformUpdate: (
      data: AnchorPlatformConfiguration,
      params: RequestParams = {},
    ) =>
      this.request<AdminCompanyConfigurationAnchorPlatformUpdateData, any>({
        path: `/admin/company/configuration/anchor_platform/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Details of Rehive company that was added via the /activate/ endpoint.
     *
     * @tags admin
     * @name AdminCompanyConfigurationAnchorPlatformPartialUpdate
     * @request PATCH:/admin/company/configuration/anchor_platform/
     * @secure
     */
    adminCompanyConfigurationAnchorPlatformPartialUpdate: (
      data: AnchorPlatformConfiguration,
      params: RequestParams = {},
    ) =>
      this.request<
        AdminCompanyConfigurationAnchorPlatformPartialUpdateData,
        any
      >({
        path: `/admin/company/configuration/anchor_platform/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create and sends back a link to a Stellar.toml file
     *
     * @tags admin
     * @name AdminCompanyStellarTomlList
     * @request GET:/admin/company/stellar-toml/
     * @secure
     */
    adminCompanyStellarTomlList: (params: RequestParams = {}) =>
      this.request<AdminCompanyStellarTomlListData, any>({
        path: `/admin/company/stellar-toml/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View or update a Stellar Account
     *
     * @tags admin
     * @name AdminFederationList
     * @request GET:/admin/federation/
     * @secure
     */
    adminFederationList: (params: RequestParams = {}) =>
      this.request<AdminFederationListData, any>({
        path: `/admin/federation/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View or update a Stellar Account
     *
     * @tags admin
     * @name AdminFederationCreate
     * @request POST:/admin/federation/
     * @secure
     */
    adminFederationCreate: (data: Federation, params: RequestParams = {}) =>
      this.request<AdminFederationCreateData, any>({
        path: `/admin/federation/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View, create and update the hot wallet
     *
     * @tags admin
     * @name AdminHotwalletList
     * @request GET:/admin/hotwallet/
     * @secure
     */
    adminHotwalletList: (params: RequestParams = {}) =>
      this.request<AdminHotwalletListData, any>({
        path: `/admin/hotwallet/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View, create and update the hot wallet
     *
     * @tags admin
     * @name AdminHotwalletCreate
     * @request POST:/admin/hotwallet/
     * @secure
     */
    adminHotwalletCreate: (data: Hotwallet, params: RequestParams = {}) =>
      this.request<AdminHotwalletCreateData, any>({
        path: `/admin/hotwallet/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View, create and update the hot wallet
     *
     * @tags admin
     * @name AdminHotwalletPartialUpdate
     * @request PATCH:/admin/hotwallet/
     * @secure
     */
    adminHotwalletPartialUpdate: (
      data: Hotwallet,
      params: RequestParams = {},
    ) =>
      this.request<AdminHotwalletPartialUpdateData, any>({
        path: `/admin/hotwallet/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View hotwallet balance
     *
     * @tags admin
     * @name AdminHotwalletActiveList
     * @request GET:/admin/hotwallet/active/
     * @secure
     */
    adminHotwalletActiveList: (params: RequestParams = {}) =>
      this.request<AdminHotwalletActiveListData, any>({
        path: `/admin/hotwallet/active/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description A simple APIView for funding asset accounts.
     *
     * @tags admin
     * @name AdminHotwalletEnableMssCreate
     * @request POST:/admin/hotwallet/enable_mss/
     * @secure
     */
    adminHotwalletEnableMssCreate: (
      data: HotwalletFund,
      params: RequestParams = {},
    ) =>
      this.request<AdminHotwalletEnableMssCreateData, any>({
        path: `/admin/hotwallet/enable_mss/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View hotwallet balance
     *
     * @tags admin
     * @name AdminHotwalletFeesList
     * @request GET:/admin/hotwallet/fees/
     * @secure
     */
    adminHotwalletFeesList: (params: RequestParams = {}) =>
      this.request<AdminHotwalletFeesListData, any>({
        path: `/admin/hotwallet/fees/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description View and update company. Authenticates requests using a token in the Authorization header.
     *
     * @tags admin
     * @name AdminHotwalletFundList
     * @request GET:/admin/hotwallet/fund/
     * @secure
     */
    adminHotwalletFundList: (params: RequestParams = {}) =>
      this.request<AdminHotwalletFundListData, any>({
        path: `/admin/hotwallet/fund/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Merges and deletes the current hotwallet
     *
     * @tags admin
     * @name AdminHotwalletMergeCreate
     * @request POST:/admin/hotwallet/merge/
     * @secure
     */
    adminHotwalletMergeCreate: (
      data: HotwalletMerge,
      params: RequestParams = {},
    ) =>
      this.request<AdminHotwalletMergeCreateData, any>({
        path: `/admin/hotwallet/merge/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Sends an onchain transactions directly from the Hotwallet
     *
     * @tags admin
     * @name AdminHotwalletSendCreate
     * @request POST:/admin/hotwallet/send/
     * @secure
     */
    adminHotwalletSendCreate: (
      data: HotwalletSend,
      params: RequestParams = {},
    ) =>
      this.request<AdminHotwalletSendCreateData, any>({
        path: `/admin/hotwallet/send/`,
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
     * @name AdminKnownPublicAddressesList
     * @request GET:/admin/known-public-addresses/
     * @secure
     */
    adminKnownPublicAddressesList: (params: RequestParams = {}) =>
      this.request<AdminKnownPublicAddressesListData, any>({
        path: `/admin/known-public-addresses/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminKnownPublicAddressesCreate
     * @request POST:/admin/known-public-addresses/
     * @secure
     */
    adminKnownPublicAddressesCreate: (
      data: KnownPublicAddresses,
      params: RequestParams = {},
    ) =>
      this.request<AdminKnownPublicAddressesCreateData, any>({
        path: `/admin/known-public-addresses/`,
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
     * @name AdminKnownPublicAddressesRead
     * @request GET:/admin/known-public-addresses/{id}/
     * @secure
     */
    adminKnownPublicAddressesRead: (id: string, params: RequestParams = {}) =>
      this.request<AdminKnownPublicAddressesReadData, any>({
        path: `/admin/known-public-addresses/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminKnownPublicAddressesUpdate
     * @request PUT:/admin/known-public-addresses/{id}/
     * @secure
     */
    adminKnownPublicAddressesUpdate: (
      id: string,
      data: KnownPublicAddresses,
      params: RequestParams = {},
    ) =>
      this.request<AdminKnownPublicAddressesUpdateData, any>({
        path: `/admin/known-public-addresses/${id}/`,
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
     * @name AdminKnownPublicAddressesPartialUpdate
     * @request PATCH:/admin/known-public-addresses/{id}/
     * @secure
     */
    adminKnownPublicAddressesPartialUpdate: (
      id: string,
      data: KnownPublicAddresses,
      params: RequestParams = {},
    ) =>
      this.request<AdminKnownPublicAddressesPartialUpdateData, any>({
        path: `/admin/known-public-addresses/${id}/`,
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
     * @name AdminKnownPublicAddressesDelete
     * @request DELETE:/admin/known-public-addresses/{id}/
     * @secure
     */
    adminKnownPublicAddressesDelete: (id: string, params: RequestParams = {}) =>
      this.request<AdminKnownPublicAddressesDeleteData, any>({
        path: `/admin/known-public-addresses/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminMemosList
     * @request GET:/admin/memos/
     * @secure
     */
    adminMemosList: (params: RequestParams = {}) =>
      this.request<AdminMemosListData, any>({
        path: `/admin/memos/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminMemosCreate
     * @request POST:/admin/memos/
     * @secure
     */
    adminMemosCreate: (data: AdminMemo, params: RequestParams = {}) =>
      this.request<AdminMemosCreateData, any>({
        path: `/admin/memos/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List transactions
     *
     * @tags admin
     * @name AdminSep10AuthenticatedAccountsList
     * @request GET:/admin/sep10-authenticated-accounts/
     * @secure
     */
    adminSep10AuthenticatedAccountsList: (
      query: AdminSep10AuthenticatedAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminSep10AuthenticatedAccountsListData, any>({
        path: `/admin/sep10-authenticated-accounts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### GET a single SEP10AuthenticatedAccount object
     *
     * @tags admin
     * @name AdminSep10AuthenticatedAccountsRead
     * @request GET:/admin/sep10-authenticated-accounts/{id}/
     * @secure
     */
    adminSep10AuthenticatedAccountsRead: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminSep10AuthenticatedAccountsReadData, any>({
        path: `/admin/sep10-authenticated-accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List all SEP24Transaction objects
     *
     * @tags admin
     * @name AdminSep24TransactionsList
     * @request GET:/admin/sep24-transactions/
     * @secure
     */
    adminSep24TransactionsList: (
      query: AdminSep24TransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminSep24TransactionsListData, any>({
        path: `/admin/sep24-transactions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### GET a single SEP24Transaction object
     *
     * @tags admin
     * @name AdminSep24TransactionsRead
     * @request GET:/admin/sep24-transactions/{id}/
     * @secure
     */
    adminSep24TransactionsRead: (id: string, params: RequestParams = {}) =>
      this.request<AdminSep24TransactionsReadData, any>({
        path: `/admin/sep24-transactions/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List stellar accounts
     *
     * @tags admin
     * @name AdminStellarAccountsList
     * @request GET:/admin/stellar_accounts/
     * @secure
     */
    adminStellarAccountsList: (
      query: AdminStellarAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminStellarAccountsListData, any>({
        path: `/admin/stellar_accounts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View or update a Stellar Account
     *
     * @tags admin
     * @name AdminStellarAccountsGenerateCreate
     * @request POST:/admin/stellar_accounts/generate/
     * @secure
     */
    adminStellarAccountsGenerateCreate: (
      data: StellarAccountGenerate,
      params: RequestParams = {},
    ) =>
      this.request<AdminStellarAccountsGenerateCreateData, any>({
        path: `/admin/stellar_accounts/generate/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View or update a Stellar Account
     *
     * @tags admin
     * @name AdminStellarAccountsRead
     * @request GET:/admin/stellar_accounts/{id}/
     * @secure
     */
    adminStellarAccountsRead: (id: string, params: RequestParams = {}) =>
      this.request<AdminStellarAccountsReadData, any>({
        path: `/admin/stellar_accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View or update a Stellar Account
     *
     * @tags admin
     * @name AdminStellarAccountsPartialUpdate
     * @request PATCH:/admin/stellar_accounts/{id}/
     * @secure
     */
    adminStellarAccountsPartialUpdate: (
      id: string,
      data: StellarAccount,
      params: RequestParams = {},
    ) =>
      this.request<AdminStellarAccountsPartialUpdateData, any>({
        path: `/admin/stellar_accounts/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Change the ownership of a service generated account ### Adds a new primary signer and removes the services secret as a signer
     *
     * @tags admin
     * @name AdminStellarAccountsChangeOwnershipCreate
     * @request POST:/admin/stellar_accounts/{id}/change_ownership/
     * @secure
     */
    adminStellarAccountsChangeOwnershipCreate: (
      id: string,
      data: StellarAccountChangeOwnership,
      params: RequestParams = {},
    ) =>
      this.request<AdminStellarAccountsChangeOwnershipCreateData, any>({
        path: `/admin/stellar_accounts/${id}/change_ownership/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List transactions
     *
     * @tags admin
     * @name AdminTransactionsList
     * @request GET:/admin/transactions/
     * @secure
     */
    adminTransactionsList: (
      query: AdminTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminTransactionsListData, any>({
        path: `/admin/transactions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description View for sending assets directly out of the hotwallet account
     *
     * @tags admin
     * @name AdminTransactionsSendCreate
     * @request POST:/admin/transactions/send/
     * @secure
     */
    adminTransactionsSendCreate: (
      data: AdminSendTransaction,
      params: RequestParams = {},
    ) =>
      this.request<AdminTransactionsSendCreateData, any>({
        path: `/admin/transactions/send/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### GET and PATCH a single transaction on the Stellar service
     *
     * @tags admin
     * @name AdminTransactionsRead
     * @request GET:/admin/transactions/{id}/
     * @secure
     */
    adminTransactionsRead: (id: string, params: RequestParams = {}) =>
      this.request<AdminTransactionsReadData, any>({
        path: `/admin/transactions/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### GET and PATCH a single transaction on the Stellar service
     *
     * @tags admin
     * @name AdminTransactionsPartialUpdate
     * @request PATCH:/admin/transactions/{id}/
     * @secure
     */
    adminTransactionsPartialUpdate: (
      id: string,
      data: AdminTransaction,
      params: RequestParams = {},
    ) =>
      this.request<AdminTransactionsPartialUpdateData, any>({
        path: `/admin/transactions/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List users
     *
     * @tags admin
     * @name AdminUsersList
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
     * @description ### List users
     *
     * @tags admin
     * @name AdminUsersCreate
     * @request POST:/admin/users/
     * @secure
     */
    adminUsersCreate: (
      data: AdminUserInfoSeralizer,
      params: RequestParams = {},
    ) =>
      this.request<AdminUsersCreateData, any>({
        path: `/admin/users/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List users
     *
     * @tags admin
     * @name AdminUsersRead
     * @request GET:/admin/users/{id}/
     * @secure
     */
    adminUsersRead: (id: string, params: RequestParams = {}) =>
      this.request<AdminUsersReadData, any>({
        path: `/admin/users/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List users
     *
     * @tags admin
     * @name AdminUsersPartialUpdate
     * @request PATCH:/admin/users/{id}/
     * @secure
     */
    adminUsersPartialUpdate: (
      id: string,
      data: UserSeralizer,
      params: RequestParams = {},
    ) =>
      this.request<AdminUsersPartialUpdateData, any>({
        path: `/admin/users/${id}/`,
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
     * @name AdminUsersMemosList
     * @request GET:/admin/users/{id}/memos/
     * @secure
     */
    adminUsersMemosList: (id: string, params: RequestParams = {}) =>
      this.request<AdminUsersMemosListData, any>({
        path: `/admin/users/${id}/memos/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminUsersMemosCreate
     * @request POST:/admin/users/{id}/memos/
     * @secure
     */
    adminUsersMemosCreate: (
      id: string,
      data: AdminUserMemo,
      params: RequestParams = {},
    ) =>
      this.request<AdminUsersMemosCreateData, any>({
        path: `/admin/users/${id}/memos/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View warmstorage balance
     *
     * @tags admin
     * @name AdminWarmstorageList
     * @request GET:/admin/warmstorage/
     * @secure
     */
    adminWarmstorageList: (
      query: AdminWarmstorageListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminWarmstorageListData, any>({
        path: `/admin/warmstorage/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List or create warmstorage accounts for monitoring
     *
     * @tags admin
     * @name AdminWarmstorageAccountsList
     * @request GET:/admin/warmstorage/accounts/
     * @secure
     */
    adminWarmstorageAccountsList: (
      query: AdminWarmstorageAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminWarmstorageAccountsListData, any>({
        path: `/admin/warmstorage/accounts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### List or create warmstorage accounts for monitoring
     *
     * @tags admin
     * @name AdminWarmstorageAccountsCreate
     * @request POST:/admin/warmstorage/accounts/
     * @secure
     */
    adminWarmstorageAccountsCreate: (
      data: WarmstorageAccount,
      params: RequestParams = {},
    ) =>
      this.request<AdminWarmstorageAccountsCreateData, any>({
        path: `/admin/warmstorage/accounts/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View or update a warm storage account
     *
     * @tags admin
     * @name AdminWarmstorageAccountsRead
     * @request GET:/admin/warmstorage/accounts/{id}/
     * @secure
     */
    adminWarmstorageAccountsRead: (id: string, params: RequestParams = {}) =>
      this.request<AdminWarmstorageAccountsReadData, any>({
        path: `/admin/warmstorage/accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### View or update a warm storage account
     *
     * @tags admin
     * @name AdminWarmstorageAccountsPartialUpdate
     * @request PATCH:/admin/warmstorage/accounts/{id}/
     * @secure
     */
    adminWarmstorageAccountsPartialUpdate: (
      id: string,
      data: WarmstorageAccount,
      params: RequestParams = {},
    ) =>
      this.request<AdminWarmstorageAccountsPartialUpdateData, any>({
        path: `/admin/warmstorage/accounts/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  company = {
    /**
     * @description Public details of the Rehive company that was added via the /activate/ endpoint.
     *
     * @tags company
     * @name CompanyList
     * @request GET:/company/
     * @secure
     */
    companyList: (params: RequestParams = {}) =>
      this.request<CompanyListData, any>({
        path: `/company/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a new stellar asset to the service, or list existing assets. You'll need to include a valid stellar anchor issuing address and asset ID.
     *
     * @tags company
     * @name CompanyAssetsList
     * @request GET:/company/assets/
     * @secure
     */
    companyAssetsList: (params: RequestParams = {}) =>
      this.request<CompanyAssetsListData, any>({
        path: `/company/assets/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  deactivate = {
    /**
     * @description This endpoint is used by the Rehive Marketplace to remove this service for a specific company. It requires a permanent API token for that company.
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
  hooks = {
    /**
     * No description
     *
     * @tags hooks
     * @name HooksPrsCreate
     * @request POST:/hooks/prs/
     * @secure
     */
    hooksPrsCreate: (data: PRSWebhook, params: RequestParams = {}) =>
      this.request<HooksPrsCreateData, any>({
        path: `/hooks/prs/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  info = {
    /**
     * @description Returns node and network data for the service
     *
     * @tags info
     * @name InfoList
     * @request GET:/info/
     * @secure
     */
    infoList: (params: RequestParams = {}) =>
      this.request<InfoListData, any>({
        path: `/info/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  knownAssets = {
    /**
     * @description Returns node and network data for the service
     *
     * @tags known-assets
     * @name KnownAssetsList
     * @request GET:/known-assets/
     * @secure
     */
    knownAssetsList: (
      query: KnownAssetsListParams,
      params: RequestParams = {},
    ) =>
      this.request<KnownAssetsListData, any>({
        path: `/known-assets/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  stellarFederation = {
    /**
     * No description
     *
     * @tags stellar_federation
     * @name StellarFederationRead
     * @request GET:/stellar_federation/{company}/
     * @secure
     */
    stellarFederationRead: (company: string, params: RequestParams = {}) =>
      this.request<StellarFederationReadData, any>({
        path: `/stellar_federation/${company}/`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  transactions = {
    /**
     * @description ### List transactions
     *
     * @tags transactions
     * @name TransactionsList
     * @request GET:/transactions/
     * @secure
     */
    transactionsList: (
      query: TransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsListData, any>({
        path: `/transactions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create the send transaction on Rehive, and/or on the stellar blockchain. When the an email address, the transaction will be handled off-chain, only on the rehive ledger. When sent to a stellar address, the transaction is created on Rehive. Rehive then sends a webhook to the /hooks/debit/ endpoint and a blockchain transaction is created and broadcasted.
     *
     * @tags transactions
     * @name TransactionsSendCreate
     * @request POST:/transactions/send/
     * @secure
     */
    transactionsSendCreate: (
      data: SendTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsSendCreateData, any>({
        path: `/transactions/send/`,
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
     * @name UserList
     * @request GET:/user/
     * @secure
     */
    userList: (params: RequestParams = {}) =>
      this.request<UserListData, any>({
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
     * @name UserPartialUpdate
     * @request PATCH:/user/
     * @secure
     */
    userPartialUpdate: (data: UserInfoSeralizer, params: RequestParams = {}) =>
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
     * @name UserAccountList
     * @request GET:/user/account/
     * @secure
     */
    userAccountList: (params: RequestParams = {}) =>
      this.request<UserAccountListData, any>({
        path: `/user/account/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description ### Endpoint for validating a specific session id using a valid Rehive user session
     *
     * @tags user
     * @name UserAnchorSessionsValidateCreate
     * @request POST:/user/anchor/sessions/{session_id}/validate/
     * @secure
     */
    userAnchorSessionsValidateCreate: (
      sessionId: string,
      data: AnchorAccountValidate,
      params: RequestParams = {},
    ) =>
      this.request<UserAnchorSessionsValidateCreateData, any>({
        path: `/user/anchor/sessions/${sessionId}/validate/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Endpoint for validating a specific session id using a valid Rehive user session
     *
     * @tags user
     * @name UserAnchorSessionsValidateAccountCreate
     * @request POST:/user/anchor/sessions/{session_id}/validate_account/
     * @secure
     */
    userAnchorSessionsValidateAccountCreate: (
      sessionId: string,
      data: AnchorAccountValidate,
      params: RequestParams = {},
    ) =>
      this.request<UserAnchorSessionsValidateAccountCreateData, any>({
        path: `/user/anchor/sessions/${sessionId}/validate_account/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Endpoint for validating a specific session id using a valid Rehive user session
     *
     * @tags user
     * @name UserAnchorSessionsValidateSessionCreate
     * @request POST:/user/anchor/sessions/{session_id}/validate_session/
     * @secure
     */
    userAnchorSessionsValidateSessionCreate: (
      sessionId: string,
      data: AnchorSessionValidate,
      params: RequestParams = {},
    ) =>
      this.request<UserAnchorSessionsValidateSessionCreateData, any>({
        path: `/user/anchor/sessions/${sessionId}/validate_session/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Endpoint for viewing all user SEP-10 sessions
     *
     * @tags user
     * @name UserAnchorTransactionsList
     * @request GET:/user/anchor/transactions/
     * @secure
     */
    userAnchorTransactionsList: (params: RequestParams = {}) =>
      this.request<UserAnchorTransactionsListData, any>({
        path: `/user/anchor/transactions/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Endpoint for viewing all user SEP-10 sessions
     *
     * @tags user
     * @name UserAnchorTransactionsRead
     * @request GET:/user/anchor/transactions/{transaction_id}/
     * @secure
     */
    userAnchorTransactionsRead: (
      transactionId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserAnchorTransactionsReadData, any>({
        path: `/user/anchor/transactions/${transactionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Endpoint for viewing all user SEP-10 sessions
     *
     * @tags user
     * @name UserAnchorTransactionsCreate
     * @request POST:/user/anchor/transactions/{transaction_id}/
     * @secure
     */
    userAnchorTransactionsCreate: (
      transactionId: string,
      data: UserSEP24Transaction,
      params: RequestParams = {},
    ) =>
      this.request<UserAnchorTransactionsCreateData, any>({
        path: `/user/anchor/transactions/${transactionId}/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Endpoint for viewing all user SEP-10 sessions
     *
     * @tags user
     * @name UserAnchorTransactionsPartialUpdate
     * @request PATCH:/user/anchor/transactions/{transaction_id}/
     * @secure
     */
    userAnchorTransactionsPartialUpdate: (
      transactionId: string,
      data: UserSEP24Transaction,
      params: RequestParams = {},
    ) =>
      this.request<UserAnchorTransactionsPartialUpdateData, any>({
        path: `/user/anchor/transactions/${transactionId}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Endpoint for generating a new unvalidated authentication session using a SEP 10 JWT
     *
     * @tags user
     * @name UserAnchorAuthCreate
     * @request POST:/user/anchor/{company_id}/auth/
     * @secure
     */
    userAnchorAuthCreate: (companyId: string, params: RequestParams = {}) =>
      this.request<UserAnchorAuthCreateData, any>({
        path: `/user/anchor/${companyId}/auth/`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserKnownPublicAddressesList
     * @request GET:/user/known-public-addresses/
     * @secure
     */
    userKnownPublicAddressesList: (params: RequestParams = {}) =>
      this.request<UserKnownPublicAddressesListData, any>({
        path: `/user/known-public-addresses/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserMemosList
     * @request GET:/user/memos/
     * @secure
     */
    userMemosList: (params: RequestParams = {}) =>
      this.request<UserMemosListData, any>({
        path: `/user/memos/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserMemosCreate
     * @request POST:/user/memos/
     * @secure
     */
    userMemosCreate: (data: UserMemo, params: RequestParams = {}) =>
      this.request<UserMemosCreateData, any>({
        path: `/user/memos/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create the send transaction on Rehive, and/or on the stellar blockchain. When the an email address, the transaction will be handled off-chain, only on the rehive ledger. When sent to a stellar address, the transaction is created on Rehive. Rehive then sends a webhook to the /hooks/debit/ endpoint and a blockchain transaction is created and broadcasted.
     *
     * @tags user
     * @name UserTransactionsSendCreate
     * @request POST:/user/transactions/send/
     * @secure
     */
    userTransactionsSendCreate: (
      data: SendTransaction,
      params: RequestParams = {},
    ) =>
      this.request<UserTransactionsSendCreateData, any>({
        path: `/user/transactions/send/`,
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
     * @name UserUsernameSetCreate
     * @request POST:/user/username/set/
     * @secure
     */
    userUsernameSetCreate: (
      data: SetUsernameMemo,
      params: RequestParams = {},
    ) =>
      this.request<UserUsernameSetCreateData, any>({
        path: `/user/username/set/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
