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
export interface AdminCompany {
  id: string;
  /** @maxItems 10 */
  manager_groups?: string[] | null;
  name: string | null;
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
export interface AdminCreateCategory {
  /** @format uuid */
  id: string;
  /** @maxLength 30 */
  name: string;
  /** @format uuid */
  parent?: string;
  /** @format uri */
  image?: string;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateOrder {
  /** @format uuid */
  id: string;
  user: string;
  currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateOrderItem {
  product: string;
  /** @min 1 */
  quantity: number;
  variant?: string | null;
  metadata?: Record<string, any>;
  custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreatePayment {
  id: string;
  /** * `rehive` - rehive */
  type?: "rehive";
  amount: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  collection: string | null;
  created: number;
  updated: number;
}

export interface AdminCreateProductCategory {
  categories: string[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateProductOption {
  id: string;
  /** @maxLength 50 */
  name?: string | null;
  values: string[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateProductPrice {
  id: string;
  amount?: number | null;
  currency: string;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateProductVariant {
  id: string;
  voucher_schema?: CreateUpdateVariantVoucherSchema | null;
  /** @maxLength 100 */
  code?: string | null;
  /** @maxLength 50 */
  label?: string | null;
  options: Record<string, any>;
  quantity: number | null;
  tracked?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateProductVariantPrice {
  id: string;
  currency: string;
  amount?: number | null;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateRedemption {
  code: string;
  amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateRefund {
  id: string;
  /** * `rehive` - rehive */
  type?: "rehive";
  amount: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  item: string;
  /** @min 1 */
  quantity: number;
  /** @maxLength 100 */
  reason?: string | null;
  collection: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUpdateProduct {
  /** @format uuid */
  id: string;
  /** @maxLength 50 */
  name: string;
  description?: string | null;
  short_description?: string | null;
  prices: ProductPrice[];
  quantity?: number | null;
  tracked?: boolean;
  voucher_schema?: AdminCreateUpdateVoucherSchema | null;
  code?: string | null;
  instant_buy?: boolean;
  supplier?: string | null;
  /** @maxItems 249 */
  countries?: (
    | "AF"
    | "AX"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AQ"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BQ"
    | "BA"
    | "BW"
    | "BV"
    | "BR"
    | "IO"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "CV"
    | "KH"
    | "CM"
    | "CA"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CX"
    | "CC"
    | "CO"
    | "KM"
    | "CG"
    | "CD"
    | "CK"
    | "CR"
    | "CI"
    | "HR"
    | "CU"
    | "CW"
    | "CY"
    | "CZ"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "SZ"
    | "ET"
    | "FK"
    | "FO"
    | "FJ"
    | "FI"
    | "FR"
    | "GF"
    | "PF"
    | "TF"
    | "GA"
    | "GM"
    | "GE"
    | "DE"
    | "GH"
    | "GI"
    | "GR"
    | "GL"
    | "GD"
    | "GP"
    | "GU"
    | "GT"
    | "GG"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HM"
    | "VA"
    | "HN"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IM"
    | "IL"
    | "IT"
    | "JM"
    | "JP"
    | "JE"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MT"
    | "MH"
    | "MQ"
    | "MR"
    | "MU"
    | "YT"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "ME"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "NC"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "NU"
    | "NF"
    | "KP"
    | "MK"
    | "MP"
    | "NO"
    | "OM"
    | "PK"
    | "PW"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PN"
    | "PL"
    | "PT"
    | "PR"
    | "QA"
    | "RE"
    | "RO"
    | "RU"
    | "RW"
    | "BL"
    | "SH"
    | "KN"
    | "LC"
    | "MF"
    | "PM"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SG"
    | "SX"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "GS"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SJ"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "TL"
    | "TG"
    | "TK"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "TC"
    | "TV"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VE"
    | "VN"
    | "VG"
    | "VI"
    | "WF"
    | "EH"
    | "YE"
    | "ZM"
    | "ZW"
  )[];
  metadata?: Record<string, any>;
  categories: Category[];
  integration?: string | null;
  seller?: string | null;
  account?: string | null;
  requires_shipping_address?: boolean;
  requires_billing_address?: boolean;
  requires_contact_mobile?: boolean;
  requires_contact_email?: boolean;
  enabled?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUpdateVoucherSchema {
  /**
   * * `static` - static
   * * `balance` - balance
   */
  type: "static" | "balance";
  /**
   * * `manual` - manual
   * * `automatic` - automatic
   * * `integration` - integration
   */
  creation_type: "manual" | "automatic" | "integration";
  /** @maxItems 10 */
  redeemer_users?: string[] | null;
  /** @maxItems 10 */
  redeemer_groups?: string[] | null;
  /**
   * * `raw` - raw
   * * `qr` - qr
   * * `bar` - bar
   */
  display_format: "raw" | "qr" | "bar";
  amount?: number | null;
  currency?: string | null;
  /** @maxLength 30 */
  source_account?: string | null;
  lifespan?: number | null;
  /**
   * * `seconds` - Seconds
   * * `minutes` - Minutes
   * * `hours` - Hours
   * * `days` - Days
   * * `weeks` - Weeks
   * * `months` - Months
   * * `years` - Years
   */
  lifespan_unit?:
    | "seconds"
    | "minutes"
    | "hours"
    | "days"
    | "weeks"
    | "months"
    | "years"
    | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateVoucher {
  /** @format uuid */
  id: string;
  product?: string;
  variant?: string;
  item?: string;
  /** @maxLength 100 */
  code: string;
  /** @maxLength 64 */
  serial?: string;
  expires?: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateVoucherImport {
  id: string;
  product?: string;
  variant?: string;
  /** @format uri */
  file: string;
  /**
   * * `queued` - Queued
   * * `processing` - Processing
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "queued" | "processing" | "complete" | "failed";
  errors: string[];
}

export interface AdminCreateVoucherImportResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminCreateVoucherImport;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminGetUpdateProductImage {
  id: string;
  /** @format uri */
  file?: string;
  weight?: number;
  created: number;
  updated: number;
}

export interface AdminGetUpdateProductImageResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminGetUpdateProductImage;
}

/** DEPRECATED : Replaced by the AdminCreateVoucherImportSerializer serializer. */
export interface AdminImportVoucher {
  product?: string;
  variant?: string;
  /** @format uri */
  file: string;
  vouchers: Voucher[];
}

export interface AdminImportVoucherResponse {
  /** @example "success" */
  status?: string;
  /** DEPRECATED : Replaced by the AdminCreateVoucherImportSerializer serializer. */
  data?: AdminImportVoucher;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminIntegration {
  id: string;
  seller: ShortSeller;
  /** @maxLength 50 */
  slug: string;
  /** @maxLength 50 */
  name: string;
  /** @maxLength 255 */
  description?: string | null;
  created: number;
  updated: number;
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
  /** * `order.item.purchase` - order.item.purchase */
  event: "order.item.purchase";
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
export interface AdminListCreateProductImage {
  id: string;
  /** @format uri */
  file: string;
  weight?: number;
  created: number;
  updated: number;
}

export interface AdminListCreateProductImageResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminListCreateProductImage;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminPayment {
  id: string;
  /** * `rehive` - rehive */
  type: "rehive";
  amount: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  collection: string | null;
  created: number;
  updated: number;
}

export interface AdminPaymentResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminPayment;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminProduct {
  /** @format uuid */
  id: string;
  /** @maxLength 50 */
  name: string;
  description: string | null;
  short_description: string | null;
  prices: ProductPrice[];
  options: ProductOption[];
  variants: ProductVariant[];
  quantity: number | null;
  tracked?: boolean;
  voucher_schema: VoucherSchema;
  code: string | null;
  instant_buy?: boolean;
  supplier: string | null;
  /** @maxItems 249 */
  countries?: (
    | "AF"
    | "AX"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AQ"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BQ"
    | "BA"
    | "BW"
    | "BV"
    | "BR"
    | "IO"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "CV"
    | "KH"
    | "CM"
    | "CA"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CX"
    | "CC"
    | "CO"
    | "KM"
    | "CG"
    | "CD"
    | "CK"
    | "CR"
    | "CI"
    | "HR"
    | "CU"
    | "CW"
    | "CY"
    | "CZ"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "SZ"
    | "ET"
    | "FK"
    | "FO"
    | "FJ"
    | "FI"
    | "FR"
    | "GF"
    | "PF"
    | "TF"
    | "GA"
    | "GM"
    | "GE"
    | "DE"
    | "GH"
    | "GI"
    | "GR"
    | "GL"
    | "GD"
    | "GP"
    | "GU"
    | "GT"
    | "GG"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HM"
    | "VA"
    | "HN"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IM"
    | "IL"
    | "IT"
    | "JM"
    | "JP"
    | "JE"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MT"
    | "MH"
    | "MQ"
    | "MR"
    | "MU"
    | "YT"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "ME"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "NC"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "NU"
    | "NF"
    | "KP"
    | "MK"
    | "MP"
    | "NO"
    | "OM"
    | "PK"
    | "PW"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PN"
    | "PL"
    | "PT"
    | "PR"
    | "QA"
    | "RE"
    | "RO"
    | "RU"
    | "RW"
    | "BL"
    | "SH"
    | "KN"
    | "LC"
    | "MF"
    | "PM"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SG"
    | "SX"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "GS"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SJ"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "TL"
    | "TG"
    | "TK"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "TC"
    | "TV"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VE"
    | "VN"
    | "VG"
    | "VI"
    | "WF"
    | "EH"
    | "YE"
    | "ZM"
    | "ZW"
  )[];
  enabled?: boolean;
  metadata: Record<string, any>;
  images: ProductImage[];
  categories: Category[];
  integration: AdminIntegration;
  seller: ShortSeller;
  account: string | null;
  requires_shipping_address?: boolean;
  requires_billing_address?: boolean;
  requires_contact_mobile?: boolean;
  requires_contact_email?: boolean;
  created: number;
  updated: number;
}

export interface AdminProductResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminProduct;
}

export interface AdminQueryVoucher {
  code: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminRefund {
  id: string;
  /** * `rehive` - rehive */
  type: "rehive";
  amount: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  item: string;
  quantity: number | null;
  reason: string | null;
  collection: string | null;
  created: number;
  updated: number;
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
export interface AdminSeller {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner: string;
  /** @maxLength 30 */
  account: string;
  /**
   * * `declined` - Declined
   * * `pending` - Pending
   * * `verified` - Verified
   */
  status: "declined" | "pending" | "verified";
  metadata?: Record<string, any>;
  created: number;
  updated: number;
}

export interface AdminSellerResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminSeller;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateOrder {
  /** @format uuid */
  id: string;
  user: string;
  /**
   * * `pending` - pending
   * * `reserved` - reserved
   * * `placed` - placed
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "reserved" | "placed" | "complete" | "failed";
  currency: Currency;
  total_price: number;
  items: OrderItem[];
  shipping_address?: Record<string, any>;
  billing_address?: Record<string, any>;
  /** @maxLength 24 */
  contact_mobile?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email?: string | null;
  placed: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateOrderItem {
  /** @min 0 */
  quantity: number;
  /**
   * * `processing` - processing
   * * `shipped` - shipped
   * * `fulfilled` - fulfilled
   * * `complete` - complete
   * * `failed` - failed
   */
  status?:
    | "processing"
    | "shipped"
    | "fulfilled"
    | "complete"
    | "failed"
    | ""
    | null;
  /** @maxLength 150 */
  tracking_url?: string | null;
  metadata?: Record<string, any>;
  custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateProductOption {
  id: string;
  /** @maxLength 50 */
  name?: string | null;
  values?: string[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateProductPrice {
  id: string;
  amount?: number | null;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateProductVariant {
  id: string;
  voucher_schema?: CreateUpdateVariantVoucherSchema | null;
  /** @maxLength 100 */
  code?: string | null;
  /** @maxLength 50 */
  label?: string | null;
  options: Record<string, any>;
  quantity: number | null;
  tracked?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateProductVariantPrice {
  id: string;
  amount?: number | null;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateVoucher {
  /** @format uuid */
  id: string;
  product: ShortProduct;
  item: ShortOrderItem;
  /**
   * * `available` - available
   * * `reserved` - reserved
   * * `purchased` - purchased
   * * `redeemed` - redeemed
   * * `partially_redeemed` - partially_redeemed
   */
  status:
    | "available"
    | "reserved"
    | "purchased"
    | "redeemed"
    | "partially_redeemed";
  code: string;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Category {
  /** @format uuid */
  id: string;
  name: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  parent?: CategoryParent;
  /** @format uri */
  image: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CategoryParent {
  /** @format uuid */
  id: string;
  name: string;
  parent: number | null;
  created: number;
  updated: number;
}

export interface CategoryResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Category;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Company {
  id: string;
  manager_groups: string[] | null;
  name: string | null;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreatePayment {
  id: string;
  /** * `rehive` - rehive */
  type?: "rehive";
  amount: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  collection: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateUpdateVariantVoucherSchema {
  amount: number;
  currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateUpdateVoucherSchema {
  /**
   * * `static` - static
   * * `balance` - balance
   */
  type: "static" | "balance";
  /**
   * * `manual` - manual
   * * `automatic` - automatic
   * * `integration` - integration
   */
  creation_type: "manual" | "automatic" | "integration";
  /** @maxItems 10 */
  redeemer_users?: string[] | null;
  /** @maxItems 10 */
  redeemer_groups?: string[] | null;
  /**
   * * `raw` - raw
   * * `qr` - qr
   * * `bar` - bar
   */
  display_format: "raw" | "qr" | "bar";
  amount?: number | null;
  currency?: string | null;
  /** @maxLength 30 */
  source_account?: string | null;
  lifespan?: number | null;
  /**
   * * `seconds` - Seconds
   * * `minutes` - Minutes
   * * `hours` - Hours
   * * `days` - Days
   * * `weeks` - Weeks
   * * `months` - Months
   * * `years` - Years
   */
  lifespan_unit?:
    | "seconds"
    | "minutes"
    | "hours"
    | "days"
    | "weeks"
    | "months"
    | "years"
    | null;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ExtendedOrder {
  /** @format uuid */
  id: string;
  user: string;
  /**
   * * `pending` - pending
   * * `reserved` - reserved
   * * `placed` - placed
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "reserved" | "placed" | "complete" | "failed";
  currency: Currency;
  total_price: number;
  items: OrderItem[];
  payments: Payment[];
  refunds: Refund[];
  shipping_address?: Record<string, any>;
  billing_address?: Record<string, any>;
  /** @maxLength 24 */
  contact_mobile?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email?: string | null;
  requires_shipping_address?: boolean;
  requires_billing_address?: boolean;
  requires_contact_mobile?: boolean;
  requires_contact_email?: boolean;
  seller: ShortSeller;
  placed: number;
  created: number;
  updated: number;
}

export interface ExtendedOrderResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ExtendedOrder;
}

export interface ManagerCreateProductCategory {
  categories: string[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateProductOption {
  id: string;
  /** @maxLength 50 */
  name?: string | null;
  values: string[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateProductPrice {
  id: string;
  amount?: number | null;
  currency: string;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateProductVariant {
  id: string;
  voucher_schema?: CreateUpdateVariantVoucherSchema | null;
  /** @maxLength 100 */
  code?: string | null;
  /** @maxLength 50 */
  label?: string | null;
  options: Record<string, any>;
  quantity: number | null;
  tracked?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateProductVariantPrice {
  id: string;
  currency: string;
  amount?: number | null;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateRedemption {
  code: string;
  amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateRefund {
  id: string;
  /** * `rehive` - rehive */
  type?: "rehive";
  amount: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  item: string;
  /** @min 1 */
  quantity: number;
  /** @maxLength 100 */
  reason?: string | null;
  collection: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateSeller {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner: string;
  account: string;
  /**
   * * `declined` - Declined
   * * `pending` - Pending
   * * `verified` - Verified
   */
  status: "declined" | "pending" | "verified";
  metadata?: Record<string, any>;
  created: number;
  updated: number;
}

export interface ManagerCreateSellerResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerCreateSeller;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateUpdateProduct {
  /** @format uuid */
  id: string;
  /** @maxLength 50 */
  name: string;
  description?: string | null;
  short_description?: string | null;
  prices: ProductPrice[];
  quantity?: number | null;
  tracked?: boolean;
  voucher_schema?: CreateUpdateVoucherSchema | null;
  code?: string | null;
  instant_buy?: boolean;
  supplier?: string | null;
  /** @maxItems 249 */
  countries?: (
    | "AF"
    | "AX"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AQ"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BQ"
    | "BA"
    | "BW"
    | "BV"
    | "BR"
    | "IO"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "CV"
    | "KH"
    | "CM"
    | "CA"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CX"
    | "CC"
    | "CO"
    | "KM"
    | "CG"
    | "CD"
    | "CK"
    | "CR"
    | "CI"
    | "HR"
    | "CU"
    | "CW"
    | "CY"
    | "CZ"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "SZ"
    | "ET"
    | "FK"
    | "FO"
    | "FJ"
    | "FI"
    | "FR"
    | "GF"
    | "PF"
    | "TF"
    | "GA"
    | "GM"
    | "GE"
    | "DE"
    | "GH"
    | "GI"
    | "GR"
    | "GL"
    | "GD"
    | "GP"
    | "GU"
    | "GT"
    | "GG"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HM"
    | "VA"
    | "HN"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IM"
    | "IL"
    | "IT"
    | "JM"
    | "JP"
    | "JE"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MT"
    | "MH"
    | "MQ"
    | "MR"
    | "MU"
    | "YT"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "ME"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "NC"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "NU"
    | "NF"
    | "KP"
    | "MK"
    | "MP"
    | "NO"
    | "OM"
    | "PK"
    | "PW"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PN"
    | "PL"
    | "PT"
    | "PR"
    | "QA"
    | "RE"
    | "RO"
    | "RU"
    | "RW"
    | "BL"
    | "SH"
    | "KN"
    | "LC"
    | "MF"
    | "PM"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SG"
    | "SX"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "GS"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SJ"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "TL"
    | "TG"
    | "TK"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "TC"
    | "TV"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VE"
    | "VN"
    | "VG"
    | "VI"
    | "WF"
    | "EH"
    | "YE"
    | "ZM"
    | "ZW"
  )[];
  metadata?: Record<string, any>;
  categories: Category[];
  integration?: string | null;
  requires_shipping_address?: boolean;
  requires_billing_address?: boolean;
  requires_contact_mobile?: boolean;
  requires_contact_email?: boolean;
  enabled?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateVoucher {
  /** @format uuid */
  id: string;
  product?: string;
  variant: ProductVariant;
  item?: string;
  /** @maxLength 100 */
  code: string;
  /** @maxLength 64 */
  serial?: string;
  expires?: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateVoucherImport {
  id: string;
  product?: string;
  variant?: string;
  /** @format uri */
  file: string;
  /**
   * * `queued` - Queued
   * * `processing` - Processing
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "queued" | "processing" | "complete" | "failed";
  errors: string[];
}

export interface ManagerCreateVoucherImportResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerCreateVoucherImport;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerGetUpdateProductImage {
  id: string;
  /** @format uri */
  file?: string;
  weight?: number;
  created: number;
  updated: number;
}

export interface ManagerGetUpdateProductImageResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerGetUpdateProductImage;
}

/** DEPRECATED : Replaced by the ManagerCreateVoucherImportSerializer serializer. */
export interface ManagerImportVoucher {
  product?: string;
  variant?: string;
  /** @format uri */
  file: string;
  vouchers: Voucher[];
}

export interface ManagerImportVoucherResponse {
  /** @example "success" */
  status?: string;
  /** DEPRECATED : Replaced by the ManagerCreateVoucherImportSerializer serializer. */
  data?: ManagerImportVoucher;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerIntegration {
  id: string;
  /** @maxLength 50 */
  slug: string;
  /** @maxLength 50 */
  name: string;
  /** @maxLength 255 */
  description?: string | null;
  created: number;
  updated: number;
}

export interface ManagerIntegrationResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerIntegration;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerIntegrationWebhook {
  id: string;
  /** @format uri */
  url: string;
  /** * `order.item.purchase` - order.item.purchase */
  event: "order.item.purchase";
  /** @maxLength 250 */
  secret?: string;
  created: number;
  updated: number;
}

export interface ManagerIntegrationWebhookResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerIntegrationWebhook;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerListCreateProductImage {
  id: string;
  /** @format uri */
  file: string;
  weight?: number;
  created: number;
  updated: number;
}

export interface ManagerListCreateProductImageResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerListCreateProductImage;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerPayment {
  id: string;
  /** * `rehive` - rehive */
  type: "rehive";
  amount: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  collection: string | null;
  created: number;
  updated: number;
}

export interface ManagerPaymentResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerPayment;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerProduct {
  /** @format uuid */
  id: string;
  /** @maxLength 50 */
  name: string;
  description: string | null;
  short_description: string | null;
  prices: ProductPrice[];
  options: ProductOption[];
  variants: ProductVariant[];
  quantity: number | null;
  tracked?: boolean;
  code: string | null;
  instant_buy?: boolean;
  voucher_schema: VoucherSchema;
  supplier: string | null;
  /** @maxItems 249 */
  countries?: (
    | "AF"
    | "AX"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AQ"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BQ"
    | "BA"
    | "BW"
    | "BV"
    | "BR"
    | "IO"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "CV"
    | "KH"
    | "CM"
    | "CA"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CX"
    | "CC"
    | "CO"
    | "KM"
    | "CG"
    | "CD"
    | "CK"
    | "CR"
    | "CI"
    | "HR"
    | "CU"
    | "CW"
    | "CY"
    | "CZ"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "SZ"
    | "ET"
    | "FK"
    | "FO"
    | "FJ"
    | "FI"
    | "FR"
    | "GF"
    | "PF"
    | "TF"
    | "GA"
    | "GM"
    | "GE"
    | "DE"
    | "GH"
    | "GI"
    | "GR"
    | "GL"
    | "GD"
    | "GP"
    | "GU"
    | "GT"
    | "GG"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HM"
    | "VA"
    | "HN"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IM"
    | "IL"
    | "IT"
    | "JM"
    | "JP"
    | "JE"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MT"
    | "MH"
    | "MQ"
    | "MR"
    | "MU"
    | "YT"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "ME"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "NC"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "NU"
    | "NF"
    | "KP"
    | "MK"
    | "MP"
    | "NO"
    | "OM"
    | "PK"
    | "PW"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PN"
    | "PL"
    | "PT"
    | "PR"
    | "QA"
    | "RE"
    | "RO"
    | "RU"
    | "RW"
    | "BL"
    | "SH"
    | "KN"
    | "LC"
    | "MF"
    | "PM"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SG"
    | "SX"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "GS"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SJ"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "TL"
    | "TG"
    | "TK"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "TC"
    | "TV"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VE"
    | "VN"
    | "VG"
    | "VI"
    | "WF"
    | "EH"
    | "YE"
    | "ZM"
    | "ZW"
  )[];
  enabled?: boolean;
  metadata: Record<string, any>;
  images: ProductImage[];
  categories: Category[];
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  integration: ManagerIntegration;
  account: string | null;
  requires_shipping_address?: boolean;
  requires_billing_address?: boolean;
  requires_contact_mobile?: boolean;
  requires_contact_email?: boolean;
  created: number;
  updated: number;
}

export interface ManagerProductResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerProduct;
}

export interface ManagerQueryVoucher {
  code: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerRefund {
  id: string;
  /** * `rehive` - rehive */
  type: "rehive";
  amount: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  item: string;
  quantity: number | null;
  reason: string | null;
  collection: string | null;
  created: number;
  updated: number;
}

export interface ManagerRefundResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerRefund;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerSeller {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner: string;
  account: string;
  /**
   * * `declined` - Declined
   * * `pending` - Pending
   * * `verified` - Verified
   */
  status: "declined" | "pending" | "verified";
  metadata?: Record<string, any>;
  created: number;
  updated: number;
}

export interface ManagerSellerResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerSeller;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerUpdateOrder {
  /** @format uuid */
  id: string;
  user: string;
  /**
   * * `pending` - pending
   * * `reserved` - reserved
   * * `placed` - placed
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "reserved" | "placed" | "complete" | "failed";
  currency: Currency;
  total_price: number;
  items: OrderItem[];
  shipping_address?: Record<string, any>;
  billing_address?: Record<string, any>;
  /** @maxLength 24 */
  contact_mobile?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email?: string | null;
  placed: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerUpdateOrderItem {
  /**
   * * `processing` - processing
   * * `shipped` - shipped
   * * `fulfilled` - fulfilled
   * * `complete` - complete
   * * `failed` - failed
   */
  status?:
    | "processing"
    | "shipped"
    | "fulfilled"
    | "complete"
    | "failed"
    | ""
    | null;
  /** @maxLength 150 */
  tracking_url?: string | null;
  metadata?: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerUpdateProductOption {
  id: string;
  /** @maxLength 50 */
  name?: string | null;
  values?: string[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerUpdateProductPrice {
  id: string;
  amount?: number | null;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerUpdateProductVariant {
  id: string;
  voucher_schema?: CreateUpdateVariantVoucherSchema | null;
  /** @maxLength 100 */
  code?: string | null;
  /** @maxLength 50 */
  label?: string | null;
  options: Record<string, any>;
  quantity: number | null;
  tracked?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerUpdateProductVariantPrice {
  id: string;
  amount?: number | null;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerUpdateVoucher {
  /** @format uuid */
  id: string;
  product: ShortProduct;
  item: ShortOrderItem;
  /**
   * * `available` - available
   * * `reserved` - reserved
   * * `purchased` - purchased
   * * `redeemed` - redeemed
   * * `partially_redeemed` - partially_redeemed
   */
  status:
    | "available"
    | "reserved"
    | "purchased"
    | "redeemed"
    | "partially_redeemed";
  code: string;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface MaskedShortVoucher {
  /** @format uuid */
  id: string;
  code: string;
  /**
   * * `available` - available
   * * `reserved` - reserved
   * * `purchased` - purchased
   * * `redeemed` - redeemed
   * * `partially_redeemed` - partially_redeemed
   */
  status:
    | "available"
    | "reserved"
    | "purchased"
    | "redeemed"
    | "partially_redeemed";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Order {
  /** @format uuid */
  id: string;
  user: string;
  /**
   * * `pending` - pending
   * * `reserved` - reserved
   * * `placed` - placed
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "reserved" | "placed" | "complete" | "failed";
  currency: Currency;
  total_price: number;
  shipping_address: Record<string, any>;
  billing_address: Record<string, any>;
  contact_mobile: string | null;
  /** @format email */
  contact_email: string | null;
  requires_shipping_address: boolean;
  requires_billing_address: boolean;
  requires_contact_mobile: boolean;
  requires_contact_email: boolean;
  seller: ShortSeller;
  placed: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface OrderItem {
  /** @format uuid */
  id: string;
  product?: string;
  variant: Record<string, any>;
  code: string | null;
  name: string;
  description: string | null;
  short_description: string | null;
  voucher_schema: VoucherSchema;
  instant_buy: boolean;
  supplier: string | null;
  countries: (
    | "AF"
    | "AX"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AQ"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BQ"
    | "BA"
    | "BW"
    | "BV"
    | "BR"
    | "IO"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "CV"
    | "KH"
    | "CM"
    | "CA"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CX"
    | "CC"
    | "CO"
    | "KM"
    | "CG"
    | "CD"
    | "CK"
    | "CR"
    | "CI"
    | "HR"
    | "CU"
    | "CW"
    | "CY"
    | "CZ"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "SZ"
    | "ET"
    | "FK"
    | "FO"
    | "FJ"
    | "FI"
    | "FR"
    | "GF"
    | "PF"
    | "TF"
    | "GA"
    | "GM"
    | "GE"
    | "DE"
    | "GH"
    | "GI"
    | "GR"
    | "GL"
    | "GD"
    | "GP"
    | "GU"
    | "GT"
    | "GG"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HM"
    | "VA"
    | "HN"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IM"
    | "IL"
    | "IT"
    | "JM"
    | "JP"
    | "JE"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MT"
    | "MH"
    | "MQ"
    | "MR"
    | "MU"
    | "YT"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "ME"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "NC"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "NU"
    | "NF"
    | "KP"
    | "MK"
    | "MP"
    | "NO"
    | "OM"
    | "PK"
    | "PW"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PN"
    | "PL"
    | "PT"
    | "PR"
    | "QA"
    | "RE"
    | "RO"
    | "RU"
    | "RW"
    | "BL"
    | "SH"
    | "KN"
    | "LC"
    | "MF"
    | "PM"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SG"
    | "SX"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "GS"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SJ"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "TL"
    | "TG"
    | "TK"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "TC"
    | "TV"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VE"
    | "VN"
    | "VG"
    | "VI"
    | "WF"
    | "EH"
    | "YE"
    | "ZM"
    | "ZW"
  )[];
  metadata: Record<string, any>;
  quantity: number | null;
  tracked: boolean;
  price: number;
  total_price: number;
  has_custom_amount: boolean;
  /**
   * * `processing` - processing
   * * `shipped` - shipped
   * * `fulfilled` - fulfilled
   * * `complete` - complete
   * * `failed` - failed
   */
  status?:
    | "processing"
    | "shipped"
    | "fulfilled"
    | "complete"
    | "failed"
    | ""
    | null;
  tracking_url: string | null;
  /** @format uri */
  image: string | null;
  categories?: string[];
  vouchers: ShortVoucher[];
  account: string | null;
  created: number;
  updated: number;
}

export interface OrderItemResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: OrderItem;
}

export interface OrderResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Order;
}

export interface PaginatedAdminCreateVoucherImportList {
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
  results?: AdminCreateVoucherImport[];
}

export interface PaginatedAdminCreateVoucherImportListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminCreateVoucherImportList;
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

export interface PaginatedAdminListCreateProductImageList {
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
  results?: AdminListCreateProductImage[];
}

export interface PaginatedAdminListCreateProductImageListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminListCreateProductImageList;
}

export interface PaginatedAdminPaymentList {
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
  results?: AdminPayment[];
}

export interface PaginatedAdminPaymentListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminPaymentList;
}

export interface PaginatedAdminProductList {
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
  results?: AdminProduct[];
}

export interface PaginatedAdminProductListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminProductList;
}

export interface PaginatedAdminRefundList {
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
  results?: AdminRefund[];
}

export interface PaginatedAdminRefundListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminRefundList;
}

export interface PaginatedAdminSellerList {
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
  results?: AdminSeller[];
}

export interface PaginatedAdminSellerListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminSellerList;
}

export interface PaginatedCategoryList {
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
  results?: Category[];
}

export interface PaginatedCategoryListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedCategoryList;
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

export interface PaginatedManagerCreateVoucherImportList {
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
  results?: ManagerCreateVoucherImport[];
}

export interface PaginatedManagerCreateVoucherImportListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerCreateVoucherImportList;
}

export interface PaginatedManagerIntegrationList {
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
  results?: ManagerIntegration[];
}

export interface PaginatedManagerIntegrationListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerIntegrationList;
}

export interface PaginatedManagerIntegrationWebhookList {
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
  results?: ManagerIntegrationWebhook[];
}

export interface PaginatedManagerIntegrationWebhookListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerIntegrationWebhookList;
}

export interface PaginatedManagerListCreateProductImageList {
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
  results?: ManagerListCreateProductImage[];
}

export interface PaginatedManagerListCreateProductImageListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerListCreateProductImageList;
}

export interface PaginatedManagerPaymentList {
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
  results?: ManagerPayment[];
}

export interface PaginatedManagerPaymentListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerPaymentList;
}

export interface PaginatedManagerProductList {
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
  results?: ManagerProduct[];
}

export interface PaginatedManagerProductListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerProductList;
}

export interface PaginatedManagerRefundList {
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
  results?: ManagerRefund[];
}

export interface PaginatedManagerRefundListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerRefundList;
}

export interface PaginatedManagerSellerList {
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
  results?: ManagerSeller[];
}

export interface PaginatedManagerSellerListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerSellerList;
}

export interface PaginatedOrderItemList {
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
  results?: OrderItem[];
}

export interface PaginatedOrderItemListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedOrderItemList;
}

export interface PaginatedOrderList {
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
  results?: Order[];
}

export interface PaginatedOrderListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedOrderList;
}

export interface PaginatedPaymentList {
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
  results?: Payment[];
}

export interface PaginatedPaymentListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedPaymentList;
}

export interface PaginatedProductImageList {
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
  results?: ProductImage[];
}

export interface PaginatedProductImageListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedProductImageList;
}

export interface PaginatedProductList {
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
  results?: Product[];
}

export interface PaginatedProductListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedProductList;
}

export interface PaginatedProductOptionList {
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
  results?: ProductOption[];
}

export interface PaginatedProductOptionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedProductOptionList;
}

export interface PaginatedProductPriceList {
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
  results?: ProductPrice[];
}

export interface PaginatedProductPriceListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedProductPriceList;
}

export interface PaginatedProductVariantList {
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
  results?: ProductVariant[];
}

export interface PaginatedProductVariantListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedProductVariantList;
}

export interface PaginatedProductVariantPriceList {
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
  results?: ProductVariantPrice[];
}

export interface PaginatedProductVariantPriceListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedProductVariantPriceList;
}

export interface PaginatedRedemptionList {
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
  results?: Redemption[];
}

export interface PaginatedRedemptionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedRedemptionList;
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

export interface PaginatedSellerList {
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
  results?: Seller[];
}

export interface PaginatedSellerListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedSellerList;
}

export interface PaginatedVoucherActionList {
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
  results?: VoucherAction[];
}

export interface PaginatedVoucherActionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedVoucherActionList;
}

export interface PaginatedVoucherList {
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
  results?: Voucher[];
}

export interface PaginatedVoucherListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedVoucherList;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCompany {
  id?: string;
  /** @maxItems 10 */
  manager_groups?: string[] | null;
  name?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCreateCategory {
  /** @format uuid */
  id?: string;
  /** @maxLength 30 */
  name?: string;
  /** @format uuid */
  parent?: string;
  /** @format uri */
  image?: string;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCreateUpdateProduct {
  /** @format uuid */
  id?: string;
  /** @maxLength 50 */
  name?: string;
  description?: string | null;
  short_description?: string | null;
  prices?: ProductPrice[];
  quantity?: number | null;
  tracked?: boolean;
  voucher_schema?: AdminCreateUpdateVoucherSchema | null;
  code?: string | null;
  instant_buy?: boolean;
  supplier?: string | null;
  /** @maxItems 249 */
  countries?: (
    | "AF"
    | "AX"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AQ"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BQ"
    | "BA"
    | "BW"
    | "BV"
    | "BR"
    | "IO"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "CV"
    | "KH"
    | "CM"
    | "CA"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CX"
    | "CC"
    | "CO"
    | "KM"
    | "CG"
    | "CD"
    | "CK"
    | "CR"
    | "CI"
    | "HR"
    | "CU"
    | "CW"
    | "CY"
    | "CZ"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "SZ"
    | "ET"
    | "FK"
    | "FO"
    | "FJ"
    | "FI"
    | "FR"
    | "GF"
    | "PF"
    | "TF"
    | "GA"
    | "GM"
    | "GE"
    | "DE"
    | "GH"
    | "GI"
    | "GR"
    | "GL"
    | "GD"
    | "GP"
    | "GU"
    | "GT"
    | "GG"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HM"
    | "VA"
    | "HN"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IM"
    | "IL"
    | "IT"
    | "JM"
    | "JP"
    | "JE"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MT"
    | "MH"
    | "MQ"
    | "MR"
    | "MU"
    | "YT"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "ME"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "NC"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "NU"
    | "NF"
    | "KP"
    | "MK"
    | "MP"
    | "NO"
    | "OM"
    | "PK"
    | "PW"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PN"
    | "PL"
    | "PT"
    | "PR"
    | "QA"
    | "RE"
    | "RO"
    | "RU"
    | "RW"
    | "BL"
    | "SH"
    | "KN"
    | "LC"
    | "MF"
    | "PM"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SG"
    | "SX"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "GS"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SJ"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "TL"
    | "TG"
    | "TK"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "TC"
    | "TV"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VE"
    | "VN"
    | "VG"
    | "VI"
    | "WF"
    | "EH"
    | "YE"
    | "ZM"
    | "ZW"
  )[];
  metadata?: Record<string, any>;
  categories?: Category[];
  integration?: string | null;
  seller?: string | null;
  account?: string | null;
  requires_shipping_address?: boolean;
  requires_billing_address?: boolean;
  requires_contact_mobile?: boolean;
  requires_contact_email?: boolean;
  enabled?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminGetUpdateProductImage {
  id?: string;
  /** @format uri */
  file?: string;
  weight?: number;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminIntegration {
  id?: string;
  seller?: ShortSeller;
  /** @maxLength 50 */
  slug?: string;
  /** @maxLength 50 */
  name?: string;
  /** @maxLength 255 */
  description?: string | null;
  created?: number;
  updated?: number;
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
  /** * `order.item.purchase` - order.item.purchase */
  event?: "order.item.purchase";
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
export interface PatchedAdminPayment {
  id?: string;
  /** * `rehive` - rehive */
  type?: "rehive";
  amount?: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status?: "pending" | "complete" | "failed";
  collection?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminRefund {
  id?: string;
  /** * `rehive` - rehive */
  type?: "rehive";
  amount?: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status?: "pending" | "complete" | "failed";
  item?: string;
  quantity?: number | null;
  reason?: string | null;
  collection?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminSeller {
  id?: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner?: string;
  /** @maxLength 30 */
  account?: string;
  /**
   * * `declined` - Declined
   * * `pending` - Pending
   * * `verified` - Verified
   */
  status?: "declined" | "pending" | "verified";
  metadata?: Record<string, any>;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateOrder {
  /** @format uuid */
  id?: string;
  user?: string;
  /**
   * * `pending` - pending
   * * `reserved` - reserved
   * * `placed` - placed
   * * `complete` - complete
   * * `failed` - failed
   */
  status?: "pending" | "reserved" | "placed" | "complete" | "failed";
  currency?: Currency;
  total_price?: number;
  items?: OrderItem[];
  shipping_address?: Record<string, any>;
  billing_address?: Record<string, any>;
  /** @maxLength 24 */
  contact_mobile?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email?: string | null;
  placed?: number;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateOrderItem {
  /** @min 0 */
  quantity?: number;
  /**
   * * `processing` - processing
   * * `shipped` - shipped
   * * `fulfilled` - fulfilled
   * * `complete` - complete
   * * `failed` - failed
   */
  status?:
    | "processing"
    | "shipped"
    | "fulfilled"
    | "complete"
    | "failed"
    | ""
    | null;
  /** @maxLength 150 */
  tracking_url?: string | null;
  metadata?: Record<string, any>;
  custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateProductOption {
  id?: string;
  /** @maxLength 50 */
  name?: string | null;
  values?: string[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateProductPrice {
  id?: string;
  amount?: number | null;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateProductVariant {
  id?: string;
  voucher_schema?: CreateUpdateVariantVoucherSchema | null;
  /** @maxLength 100 */
  code?: string | null;
  /** @maxLength 50 */
  label?: string | null;
  options?: Record<string, any>;
  quantity?: number | null;
  tracked?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateProductVariantPrice {
  id?: string;
  amount?: number | null;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateVoucher {
  /** @format uuid */
  id?: string;
  product?: ShortProduct;
  item?: ShortOrderItem;
  /**
   * * `available` - available
   * * `reserved` - reserved
   * * `purchased` - purchased
   * * `redeemed` - redeemed
   * * `partially_redeemed` - partially_redeemed
   */
  status?:
    | "available"
    | "reserved"
    | "purchased"
    | "redeemed"
    | "partially_redeemed";
  code?: string;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerCreateUpdateProduct {
  /** @format uuid */
  id?: string;
  /** @maxLength 50 */
  name?: string;
  description?: string | null;
  short_description?: string | null;
  prices?: ProductPrice[];
  quantity?: number | null;
  tracked?: boolean;
  voucher_schema?: CreateUpdateVoucherSchema | null;
  code?: string | null;
  instant_buy?: boolean;
  supplier?: string | null;
  /** @maxItems 249 */
  countries?: (
    | "AF"
    | "AX"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AQ"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BQ"
    | "BA"
    | "BW"
    | "BV"
    | "BR"
    | "IO"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "CV"
    | "KH"
    | "CM"
    | "CA"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CX"
    | "CC"
    | "CO"
    | "KM"
    | "CG"
    | "CD"
    | "CK"
    | "CR"
    | "CI"
    | "HR"
    | "CU"
    | "CW"
    | "CY"
    | "CZ"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "SZ"
    | "ET"
    | "FK"
    | "FO"
    | "FJ"
    | "FI"
    | "FR"
    | "GF"
    | "PF"
    | "TF"
    | "GA"
    | "GM"
    | "GE"
    | "DE"
    | "GH"
    | "GI"
    | "GR"
    | "GL"
    | "GD"
    | "GP"
    | "GU"
    | "GT"
    | "GG"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HM"
    | "VA"
    | "HN"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IM"
    | "IL"
    | "IT"
    | "JM"
    | "JP"
    | "JE"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MT"
    | "MH"
    | "MQ"
    | "MR"
    | "MU"
    | "YT"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "ME"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "NC"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "NU"
    | "NF"
    | "KP"
    | "MK"
    | "MP"
    | "NO"
    | "OM"
    | "PK"
    | "PW"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PN"
    | "PL"
    | "PT"
    | "PR"
    | "QA"
    | "RE"
    | "RO"
    | "RU"
    | "RW"
    | "BL"
    | "SH"
    | "KN"
    | "LC"
    | "MF"
    | "PM"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SG"
    | "SX"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "GS"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SJ"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "TL"
    | "TG"
    | "TK"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "TC"
    | "TV"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VE"
    | "VN"
    | "VG"
    | "VI"
    | "WF"
    | "EH"
    | "YE"
    | "ZM"
    | "ZW"
  )[];
  metadata?: Record<string, any>;
  categories?: Category[];
  integration?: string | null;
  requires_shipping_address?: boolean;
  requires_billing_address?: boolean;
  requires_contact_mobile?: boolean;
  requires_contact_email?: boolean;
  enabled?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerGetUpdateProductImage {
  id?: string;
  /** @format uri */
  file?: string;
  weight?: number;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerIntegration {
  id?: string;
  /** @maxLength 50 */
  slug?: string;
  /** @maxLength 50 */
  name?: string;
  /** @maxLength 255 */
  description?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerIntegrationWebhook {
  id?: string;
  /** @format uri */
  url?: string;
  /** * `order.item.purchase` - order.item.purchase */
  event?: "order.item.purchase";
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
export interface PatchedManagerPayment {
  id?: string;
  /** * `rehive` - rehive */
  type?: "rehive";
  amount?: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status?: "pending" | "complete" | "failed";
  collection?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerRefund {
  id?: string;
  /** * `rehive` - rehive */
  type?: "rehive";
  amount?: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status?: "pending" | "complete" | "failed";
  item?: string;
  quantity?: number | null;
  reason?: string | null;
  collection?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerSeller {
  id?: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner?: string;
  account?: string;
  /**
   * * `declined` - Declined
   * * `pending` - Pending
   * * `verified` - Verified
   */
  status?: "declined" | "pending" | "verified";
  metadata?: Record<string, any>;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerUpdateOrder {
  /** @format uuid */
  id?: string;
  user?: string;
  /**
   * * `pending` - pending
   * * `reserved` - reserved
   * * `placed` - placed
   * * `complete` - complete
   * * `failed` - failed
   */
  status?: "pending" | "reserved" | "placed" | "complete" | "failed";
  currency?: Currency;
  total_price?: number;
  items?: OrderItem[];
  shipping_address?: Record<string, any>;
  billing_address?: Record<string, any>;
  /** @maxLength 24 */
  contact_mobile?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email?: string | null;
  placed?: number;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerUpdateOrderItem {
  /**
   * * `processing` - processing
   * * `shipped` - shipped
   * * `fulfilled` - fulfilled
   * * `complete` - complete
   * * `failed` - failed
   */
  status?:
    | "processing"
    | "shipped"
    | "fulfilled"
    | "complete"
    | "failed"
    | ""
    | null;
  /** @maxLength 150 */
  tracking_url?: string | null;
  metadata?: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerUpdateProductOption {
  id?: string;
  /** @maxLength 50 */
  name?: string | null;
  values?: string[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerUpdateProductPrice {
  id?: string;
  amount?: number | null;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerUpdateProductVariant {
  id?: string;
  voucher_schema?: CreateUpdateVariantVoucherSchema | null;
  /** @maxLength 100 */
  code?: string | null;
  /** @maxLength 50 */
  label?: string | null;
  options?: Record<string, any>;
  quantity?: number | null;
  tracked?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerUpdateProductVariantPrice {
  id?: string;
  amount?: number | null;
  allow_custom_amount?: boolean;
  min_custom_amount?: number | null;
  max_custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerUpdateVoucher {
  /** @format uuid */
  id?: string;
  product?: ShortProduct;
  item?: ShortOrderItem;
  /**
   * * `available` - available
   * * `reserved` - reserved
   * * `purchased` - purchased
   * * `redeemed` - redeemed
   * * `partially_redeemed` - partially_redeemed
   */
  status?:
    | "available"
    | "reserved"
    | "purchased"
    | "redeemed"
    | "partially_redeemed";
  code?: string;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedUserUpdateOrder {
  /** @format uuid */
  id?: string;
  user?: string;
  /**
   * * `pending` - pending
   * * `reserved` - reserved
   * * `placed` - placed
   * * `complete` - complete
   * * `failed` - failed
   */
  status?: "pending" | "reserved" | "placed" | "complete" | "failed";
  currency?: Currency;
  total_price?: number;
  items?: OrderItem[];
  shipping_address?: Record<string, any>;
  billing_address?: Record<string, any>;
  /** @maxLength 24 */
  contact_mobile?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email?: string | null;
  placed?: number;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedUserUpdateOrderItem {
  /** @min 0 */
  quantity?: number;
  /**
   * * `processing` - processing
   * * `shipped` - shipped
   * * `fulfilled` - fulfilled
   * * `complete` - complete
   * * `failed` - failed
   */
  status?:
    | "processing"
    | "shipped"
    | "fulfilled"
    | "complete"
    | "failed"
    | ""
    | null;
  custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Payment {
  id: string;
  /** * `rehive` - rehive */
  type: "rehive";
  amount: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  collection: string | null;
  created: number;
  updated: number;
}

export interface PaymentResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Payment;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Product {
  /** @format uuid */
  id: string;
  /** @maxLength 50 */
  name: string;
  description: string | null;
  short_description: string | null;
  prices: ProductPrice[];
  quantity: number | null;
  tracked?: boolean;
  options: ProductOption[];
  variants: ProductVariant[];
  seller: ShortSeller;
  voucher_schema: VoucherSchema;
  code: string | null;
  instant_buy?: boolean;
  supplier: string | null;
  /** @maxItems 249 */
  countries?: (
    | "AF"
    | "AX"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AQ"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BQ"
    | "BA"
    | "BW"
    | "BV"
    | "BR"
    | "IO"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "CV"
    | "KH"
    | "CM"
    | "CA"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CX"
    | "CC"
    | "CO"
    | "KM"
    | "CG"
    | "CD"
    | "CK"
    | "CR"
    | "CI"
    | "HR"
    | "CU"
    | "CW"
    | "CY"
    | "CZ"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "SZ"
    | "ET"
    | "FK"
    | "FO"
    | "FJ"
    | "FI"
    | "FR"
    | "GF"
    | "PF"
    | "TF"
    | "GA"
    | "GM"
    | "GE"
    | "DE"
    | "GH"
    | "GI"
    | "GR"
    | "GL"
    | "GD"
    | "GP"
    | "GU"
    | "GT"
    | "GG"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HM"
    | "VA"
    | "HN"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IM"
    | "IL"
    | "IT"
    | "JM"
    | "JP"
    | "JE"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MT"
    | "MH"
    | "MQ"
    | "MR"
    | "MU"
    | "YT"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "ME"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "NC"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "NU"
    | "NF"
    | "KP"
    | "MK"
    | "MP"
    | "NO"
    | "OM"
    | "PK"
    | "PW"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PN"
    | "PL"
    | "PT"
    | "PR"
    | "QA"
    | "RE"
    | "RO"
    | "RU"
    | "RW"
    | "BL"
    | "SH"
    | "KN"
    | "LC"
    | "MF"
    | "PM"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SG"
    | "SX"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "GS"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SJ"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "TL"
    | "TG"
    | "TK"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "TC"
    | "TV"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VE"
    | "VN"
    | "VG"
    | "VI"
    | "WF"
    | "EH"
    | "YE"
    | "ZM"
    | "ZW"
  )[];
  metadata: Record<string, any>;
  images: ProductImage[];
  categories: Category[];
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ProductImage {
  id: string;
  /** @format uri */
  file: string;
  /**
   * @min 0
   * @max 2147483647
   */
  weight: number;
  created: number;
  updated: number;
}

export interface ProductImageResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ProductImage;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ProductOption {
  id: string;
  name: string | null;
  values: any[];
}

export interface ProductOptionResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ProductOption;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ProductPrice {
  id: string;
  amount: number;
  currency: Currency;
  allow_custom_amount: boolean;
  min_custom_amount: number;
  max_custom_amount: number;
}

export interface ProductPriceResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ProductPrice;
}

export interface ProductResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Product;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ProductVariant {
  id: string;
  voucher_schema: VariantVoucherSchema;
  code: string | null;
  label: string | null;
  options: Record<string, any>;
  quantity: number | null;
  tracked: boolean;
  prices: ProductVariantPrice[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ProductVariantPrice {
  id: string;
  amount: number;
  currency: Currency;
  allow_custom_amount: boolean;
  min_custom_amount: number;
  max_custom_amount: number;
}

export interface ProductVariantPriceResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ProductVariantPrice;
}

export interface ProductVariantResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ProductVariant;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Redemption {
  id: string;
  /**
   * * `claim` - claim
   * * `fund` - fund
   * * `defund` - defund
   */
  type: "claim" | "fund" | "defund";
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  voucher: MaskedShortVoucher;
  user: string;
  code: string | null;
  amount: number;
  collection: string | null;
  created: number;
  updated: number;
}

export interface RedemptionResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Redemption;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Refund {
  id: string;
  /** * `rehive` - rehive */
  type: "rehive";
  amount: number;
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  item: string;
  quantity: number | null;
  reason: string | null;
  collection: string | null;
  created: number;
  updated: number;
}

export interface RefundResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Refund;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Seller {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * * `declined` - Declined
   * * `pending` - Pending
   * * `verified` - Verified
   */
  status: "declined" | "pending" | "verified";
  metadata: Record<string, any>;
  created: number;
  updated: number;
}

export interface SellerResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Seller;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ShortOrderItem {
  /** @format uuid */
  id: string;
  name: string;
  price: number;
  total_price: number;
  has_custom_amount: boolean;
  voucher_schema: VoucherSchema;
  code: string | null;
  /**
   * * `processing` - processing
   * * `shipped` - shipped
   * * `fulfilled` - fulfilled
   * * `complete` - complete
   * * `failed` - failed
   */
  status?:
    | "processing"
    | "shipped"
    | "fulfilled"
    | "complete"
    | "failed"
    | ""
    | null;
  tracking_url: string | null;
  /** @format uri */
  image: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ShortProduct {
  /** @format uuid */
  id: string;
  name: string;
  voucher_schema: VoucherSchema;
  code: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ShortSeller {
  id: string;
  name: string | null;
  description: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ShortVoucher {
  /** @format uuid */
  id: string;
  code: string;
  /**
   * * `available` - available
   * * `reserved` - reserved
   * * `purchased` - purchased
   * * `redeemed` - redeemed
   * * `partially_redeemed` - partially_redeemed
   */
  status:
    | "available"
    | "reserved"
    | "purchased"
    | "redeemed"
    | "partially_redeemed";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserCreateOrder {
  /** @format uuid */
  id: string;
  currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserCreateOrderItem {
  product: string;
  /** @min 1 */
  quantity: number;
  variant?: string | null;
  metadata?: Record<string, any>;
  custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserCreateRedemption {
  code: string;
  amount?: number | null;
}

export interface UserQueryVoucher {
  code: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserUpdateOrder {
  /** @format uuid */
  id: string;
  user: string;
  /**
   * * `pending` - pending
   * * `reserved` - reserved
   * * `placed` - placed
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "reserved" | "placed" | "complete" | "failed";
  currency: Currency;
  total_price: number;
  items: OrderItem[];
  shipping_address?: Record<string, any>;
  billing_address?: Record<string, any>;
  /** @maxLength 24 */
  contact_mobile?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  contact_email?: string | null;
  placed: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserUpdateOrderItem {
  /** @min 0 */
  quantity: number;
  /**
   * * `processing` - processing
   * * `shipped` - shipped
   * * `fulfilled` - fulfilled
   * * `complete` - complete
   * * `failed` - failed
   */
  status?:
    | "processing"
    | "shipped"
    | "fulfilled"
    | "complete"
    | "failed"
    | ""
    | null;
  custom_amount?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface VariantVoucherSchema {
  amount: number;
  currency: Currency;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Voucher {
  /** @format uuid */
  id: string;
  product: ShortProduct;
  variant: ProductVariant;
  item: ShortOrderItem;
  order: Order;
  /**
   * * `available` - available
   * * `reserved` - reserved
   * * `purchased` - purchased
   * * `redeemed` - redeemed
   * * `partially_redeemed` - partially_redeemed
   */
  status:
    | "available"
    | "reserved"
    | "purchased"
    | "redeemed"
    | "partially_redeemed";
  code: string;
  account: string | null;
  serial: string | null;
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
export interface VoucherAction {
  /** @format uuid */
  id: string;
  /**
   * * `claim` - claim
   * * `fund` - fund
   * * `defund` - defund
   */
  type: "claim" | "fund" | "defund";
  /**
   * * `pending` - pending
   * * `complete` - complete
   * * `failed` - failed
   */
  status: "pending" | "complete" | "failed";
  code: string | null;
  amount: number;
  collection: string | null;
  created: number;
  updated: number;
}

export interface VoucherActionResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: VoucherAction;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface VoucherImport {
  id: string;
  product: ShortProduct;
  variant: ProductVariant;
  /** @format uri */
  file: string;
  /**
   * * `queued` - Queued
   * * `processing` - Processing
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "queued" | "processing" | "complete" | "failed";
  errors: string[];
}

export interface VoucherImportResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: VoucherImport;
}

export interface VoucherResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: Voucher;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface VoucherSchema {
  /**
   * * `static` - static
   * * `balance` - balance
   */
  type: "static" | "balance";
  /**
   * * `manual` - manual
   * * `automatic` - automatic
   * * `integration` - integration
   */
  creation_type: "manual" | "automatic" | "integration";
  redeemer_users: string[] | null;
  redeemer_groups: string[] | null;
  /**
   * * `raw` - raw
   * * `qr` - qr
   * * `bar` - bar
   */
  display_format: "raw" | "qr" | "bar";
  amount: number;
  currency: Currency;
  source_account: string | null;
  lifespan: number;
  /**
   * * `seconds` - Seconds
   * * `minutes` - Minutes
   * * `hours` - Hours
   * * `days` - Days
   * * `weeks` - Weeks
   * * `months` - Months
   * * `years` - Years
   */
  lifespan_unit:
    | "seconds"
    | "minutes"
    | "hours"
    | "days"
    | "weeks"
    | "months"
    | "years";
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

export interface AdminCategoriesListParams {
  /** @format uuid */
  id?: string;
  name?: string;
  name__contains?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  parent?: string;
  parent__isnull?: string;
}

export type AdminCategoriesListData = PaginatedCategoryListResponse;

export type AdminCategoriesCreateData = CategoryResponse;

export type AdminCategoriesRetrieveData = CategoryResponse;

export type AdminCategoriesUpdateData = CategoryResponse;

export type AdminCategoriesPartialUpdateData = CategoryResponse;

export type AdminCategoriesDestroyData = CategoryResponse;

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
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
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

export interface AdminOrdersListParams {
  categories?: string;
  created?: string;
  created__gt?: string;
  created__lt?: string;
  currency?: string;
  /** @format uuid */
  id?: string;
  items__status?: string;
  /**
   * Ordering
   *
   * * `created` - Created
   * * `-created` - Created (descending)
   * * `updated` - Updated
   * * `-updated` - Updated (descending)
   */
  orderby?: ("-created" | "-updated" | "created" | "updated")[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  placed?: string;
  placed__gt?: string;
  placed__lt?: string;
  seller?: string;
  status?: string;
  statuses?: string;
  total_price?: string;
  updated?: string;
  updated__gt?: string;
  updated__lt?: string;
  user?: string;
}

export type AdminOrdersListData = PaginatedOrderListResponse;

export type AdminOrdersCreateData = OrderResponse;

export type AdminOrdersRetrieveData = ExtendedOrderResponse;

export type AdminOrdersUpdateData = ExtendedOrderResponse;

export type AdminOrdersPartialUpdateData = ExtendedOrderResponse;

export type AdminOrdersDestroyData = ExtendedOrderResponse;

export interface AdminOrdersItemsListParams {
  categories?: string;
  code?: string;
  countries?: string;
  /** @format uuid */
  id?: string;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @format uuid */
  product?: string;
  quantity?: number;
  supplier?: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type AdminOrdersItemsListData = PaginatedOrderItemListResponse;

export type AdminOrdersItemsCreateData = OrderItemResponse;

export interface AdminOrdersPaymentsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  type?: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type AdminOrdersPaymentsListData = PaginatedAdminPaymentListResponse;

export type AdminOrdersPaymentsCreateData = AdminPaymentResponse;

export interface AdminOrdersRefundsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  type?: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type AdminOrdersRefundsListData = PaginatedAdminRefundListResponse;

export type AdminOrdersRefundsCreateData = AdminRefundResponse;

export type AdminOrdersItemsRetrieveData = OrderItemResponse;

export type AdminOrdersItemsUpdateData = OrderItemResponse;

export type AdminOrdersItemsPartialUpdateData = OrderItemResponse;

export type AdminOrdersItemsDestroyData = OrderItemResponse;

export type AdminOrdersPaymentsRetrieveData = AdminPaymentResponse;

export type AdminOrdersPaymentsUpdateData = AdminPaymentResponse;

export type AdminOrdersPaymentsPartialUpdateData = AdminPaymentResponse;

export type AdminOrdersRefundsRetrieveData = AdminRefundResponse;

export type AdminOrdersRefundsUpdateData = AdminRefundResponse;

export type AdminOrdersRefundsPartialUpdateData = AdminRefundResponse;

export interface AdminProductsListParams {
  categories?: string;
  code?: string;
  countries?: string;
  currency?: string;
  enabled?: boolean;
  /** @format uuid */
  id?: string;
  name?: string;
  name__contains?: string;
  /**
   * Ordering
   *
   * * `created` - Created
   * * `-created` - Created (descending)
   * * `updated` - Updated
   * * `-updated` - Updated (descending)
   */
  orderby?: ("-created" | "-updated" | "created" | "updated")[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  quantity?: number;
  quantity__gt?: number;
  quantity__lt?: number;
  seller?: string;
  seller__isnull?: string;
  supplier?: string;
}

export type AdminProductsListData = PaginatedAdminProductListResponse;

export type AdminProductsCreateData = AdminProductResponse;

export type AdminProductsRetrieveData = AdminProductResponse;

export type AdminProductsUpdateData = AdminProductResponse;

export type AdminProductsPartialUpdateData = AdminProductResponse;

export type AdminProductsDestroyData = AdminProductResponse;

export interface AdminProductsCategoriesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type AdminProductsCategoriesListData = PaginatedCategoryListResponse;

export type AdminProductsCategoriesCreateData = CategoryResponse;

export interface AdminProductsOptionsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type AdminProductsOptionsListData = PaginatedProductOptionListResponse;

export type AdminProductsOptionsCreateData = ProductOptionResponse;

export interface AdminProductsPricesListParams {
  currency?: string;
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type AdminProductsPricesListData = PaginatedProductPriceListResponse;

export type AdminProductsPricesCreateData = ProductPriceResponse;

export interface AdminProductsVariantsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type AdminProductsVariantsListData = PaginatedProductVariantListResponse;

export type AdminProductsVariantsCreateData = ProductVariantResponse;

export type AdminProductsCategoriesRetrieveData = CategoryResponse;

export type AdminProductsCategoriesDestroyData = CategoryResponse;

export interface AdminProductsImagesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  productId: string;
}

export type AdminProductsImagesListData =
  PaginatedAdminListCreateProductImageListResponse;

export type AdminProductsImagesCreateData = AdminListCreateProductImageResponse;

export type AdminProductsImagesRetrieveData =
  AdminGetUpdateProductImageResponse;

export type AdminProductsImagesUpdateData = AdminGetUpdateProductImageResponse;

export type AdminProductsImagesPartialUpdateData =
  AdminGetUpdateProductImageResponse;

export type AdminProductsImagesDestroyData = AdminGetUpdateProductImageResponse;

export type AdminProductsOptionsRetrieveData = ProductOptionResponse;

export type AdminProductsOptionsUpdateData = ProductOptionResponse;

export type AdminProductsOptionsPartialUpdateData = ProductOptionResponse;

export type AdminProductsOptionsDestroyData = ProductOptionResponse;

export type AdminProductsPricesRetrieveData = ProductPriceResponse;

export type AdminProductsPricesUpdateData = ProductPriceResponse;

export type AdminProductsPricesPartialUpdateData = ProductPriceResponse;

export type AdminProductsPricesDestroyData = ProductPriceResponse;

export type AdminProductsVariantsRetrieveData = ProductVariantResponse;

export type AdminProductsVariantsUpdateData = ProductVariantResponse;

export type AdminProductsVariantsPartialUpdateData = ProductVariantResponse;

export type AdminProductsVariantsDestroyData = ProductVariantResponse;

export interface AdminProductsVariantsPricesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  productId: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  variantId: string;
}

export type AdminProductsVariantsPricesListData =
  PaginatedProductVariantPriceListResponse;

export type AdminProductsVariantsPricesCreateData = ProductVariantPriceResponse;

export type AdminProductsVariantsPricesRetrieveData =
  ProductVariantPriceResponse;

export type AdminProductsVariantsPricesUpdateData = ProductVariantPriceResponse;

export type AdminProductsVariantsPricesPartialUpdateData =
  ProductVariantPriceResponse;

export type AdminProductsVariantsPricesDestroyData =
  ProductVariantPriceResponse;

export interface AdminRedemptionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminRedemptionsListData = PaginatedRedemptionListResponse;

export type AdminRedemptionsCreateData = RedemptionResponse;

export type AdminRedemptionsRetrieveData = RedemptionResponse;

export interface AdminSellersListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
}

export type AdminSellersListData = PaginatedAdminSellerListResponse;

export type AdminSellersRetrieveData = AdminSellerResponse;

export type AdminSellersUpdateData = AdminSellerResponse;

export type AdminSellersPartialUpdateData = AdminSellerResponse;

export interface AdminVoucherImportsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminVoucherImportsListData =
  PaginatedAdminCreateVoucherImportListResponse;

export type AdminVoucherImportsCreateData = AdminCreateVoucherImportResponse;

export type AdminVoucherImportsRetrieveData = VoucherImportResponse;

export interface AdminVouchersListParams {
  code?: string;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  item?: string;
  item__isnull?: string;
  /** @format uuid */
  order?: string;
  order__created?: string;
  order__created__gt?: string;
  order__created__lt?: string;
  order__isnull?: string;
  order__placed?: string;
  order__placed__gt?: string;
  order__placed__lt?: string;
  order__updated?: string;
  order__updated__gt?: string;
  order__updated__lt?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @format uuid */
  product?: string;
  status?: string;
}

export type AdminVouchersListData = PaginatedVoucherListResponse;

export type AdminVouchersCreateData = VoucherResponse;

export type AdminVouchersRetrieveData = VoucherResponse;

export type AdminVouchersUpdateData = VoucherResponse;

export type AdminVouchersPartialUpdateData = VoucherResponse;

export type AdminVouchersDestroyData = VoucherResponse;

export interface AdminVouchersActionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type AdminVouchersActionsListData = PaginatedVoucherActionListResponse;

export type AdminVouchersActionsRetrieveData = VoucherActionResponse;

export type AdminVouchersImportCreateData = AdminImportVoucherResponse;

export type AdminVouchersQueryCreateData = VoucherResponse;

export type DeactivateCreateData = ActionResponse;

export interface ManagerCategoriesListParams {
  /** @format uuid */
  id?: string;
  name?: string;
  name__contains?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  parent?: string;
  parent__isnull?: string;
}

export type ManagerCategoriesListData = PaginatedCategoryListResponse;

export type ManagerCategoriesRetrieveData = CategoryResponse;

export type ManagerCompanyRetrieveData = CompanyResponse;

export interface ManagerCurrenciesListParams {
  code?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type ManagerCurrenciesListData = PaginatedCurrencyListResponse;

export type ManagerCurrenciesRetrieveData = CurrencyResponse;

export interface ManagerSellersListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type ManagerSellersListData = PaginatedManagerSellerListResponse;

export type ManagerSellersCreateData = ManagerCreateSellerResponse;

export type ManagerSellersRetrieveData = ManagerSellerResponse;

export type ManagerSellersUpdateData = ManagerSellerResponse;

export type ManagerSellersPartialUpdateData = ManagerSellerResponse;

export interface ManagerSellersIntegrationsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-z0-9\_]+)$ */
  identifier: string;
}

export type ManagerSellersIntegrationsListData =
  PaginatedManagerIntegrationListResponse;

export type ManagerSellersIntegrationsCreateData = ManagerIntegrationResponse;

export type ManagerSellersIntegrationsRetrieveData = ManagerIntegrationResponse;

export type ManagerSellersIntegrationsUpdateData = ManagerIntegrationResponse;

export type ManagerSellersIntegrationsPartialUpdateData =
  ManagerIntegrationResponse;

export type ManagerSellersIntegrationsDestroyData = ManagerIntegrationResponse;

export interface ManagerSellersIntegrationsWebhooksListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersIntegrationsWebhooksListData =
  PaginatedManagerIntegrationWebhookListResponse;

export type ManagerSellersIntegrationsWebhooksCreateData =
  ManagerIntegrationWebhookResponse;

export type ManagerSellersIntegrationsWebhooksRetrieveData =
  ManagerIntegrationWebhookResponse;

export type ManagerSellersIntegrationsWebhooksUpdateData =
  ManagerIntegrationWebhookResponse;

export type ManagerSellersIntegrationsWebhooksPartialUpdateData =
  ManagerIntegrationWebhookResponse;

export type ManagerSellersIntegrationsWebhooksDestroyData =
  ManagerIntegrationWebhookResponse;

export interface ManagerSellersOrdersListParams {
  categories?: string;
  created?: string;
  created__gt?: string;
  created__lt?: string;
  currency?: string;
  /** @format uuid */
  id?: string;
  items__status?: string;
  /**
   * Ordering
   *
   * * `created` - Created
   * * `-created` - Created (descending)
   * * `updated` - Updated
   * * `-updated` - Updated (descending)
   */
  orderby?: ("-created" | "-updated" | "created" | "updated")[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  placed?: string;
  placed__gt?: string;
  placed__lt?: string;
  status?: string;
  statuses?: string;
  total_price?: string;
  updated?: string;
  updated__gt?: string;
  updated__lt?: string;
  user?: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersOrdersListData = PaginatedOrderListResponse;

export type ManagerSellersOrdersRetrieveData = ExtendedOrderResponse;

export type ManagerSellersOrdersUpdateData = ExtendedOrderResponse;

export type ManagerSellersOrdersPartialUpdateData = ExtendedOrderResponse;

export interface ManagerSellersOrdersItemsListParams {
  categories?: string;
  code?: string;
  countries?: string;
  /** @format uuid */
  id?: string;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @format uuid */
  product?: string;
  quantity?: number;
  supplier?: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersOrdersItemsListData = PaginatedOrderItemListResponse;

export interface ManagerSellersOrdersPaymentsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  type?: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersOrdersPaymentsListData =
  PaginatedManagerPaymentListResponse;

export interface ManagerSellersOrdersRefundsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  type?: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersOrdersRefundsListData =
  PaginatedManagerRefundListResponse;

export type ManagerSellersOrdersRefundsCreateData = ManagerRefundResponse;

export type ManagerSellersOrdersItemsRetrieveData = OrderItemResponse;

export type ManagerSellersOrdersItemsUpdateData = OrderItemResponse;

export type ManagerSellersOrdersItemsPartialUpdateData = OrderItemResponse;

export type ManagerSellersOrdersPaymentsRetrieveData = ManagerPaymentResponse;

export type ManagerSellersOrdersPaymentsUpdateData = ManagerPaymentResponse;

export type ManagerSellersOrdersPaymentsPartialUpdateData =
  ManagerPaymentResponse;

export type ManagerSellersOrdersRefundsRetrieveData = ManagerRefundResponse;

export type ManagerSellersOrdersRefundsUpdateData = ManagerRefundResponse;

export type ManagerSellersOrdersRefundsPartialUpdateData =
  ManagerRefundResponse;

export interface ManagerSellersProductsListParams {
  categories?: string;
  code?: string;
  countries?: string;
  currency?: string;
  enabled?: boolean;
  /** @format uuid */
  id?: string;
  name?: string;
  name__contains?: string;
  /**
   * Ordering
   *
   * * `created` - Created
   * * `-created` - Created (descending)
   * * `updated` - Updated
   * * `-updated` - Updated (descending)
   */
  orderby?: ("-created" | "-updated" | "created" | "updated")[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  quantity?: number;
  quantity__gt?: number;
  quantity__lt?: number;
  seller?: string;
  seller__isnull?: string;
  supplier?: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersProductsListData =
  PaginatedManagerProductListResponse;

export type ManagerSellersProductsCreateData = ManagerProductResponse;

export type ManagerSellersProductsRetrieveData = ManagerProductResponse;

export type ManagerSellersProductsUpdateData = ManagerProductResponse;

export type ManagerSellersProductsPartialUpdateData = ManagerProductResponse;

export type ManagerSellersProductsDestroyData = ManagerProductResponse;

export interface ManagerSellersProductsCategoriesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersProductsCategoriesListData =
  PaginatedCategoryListResponse;

export type ManagerSellersProductsCategoriesCreateData = CategoryResponse;

export interface ManagerSellersProductsOptionsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
  /** @pattern ^\w+$ */
  sellerId: string;
}

export type ManagerSellersProductsOptionsListData =
  PaginatedProductOptionListResponse;

export type ManagerSellersProductsOptionsCreateData = ProductOptionResponse;

export interface ManagerSellersProductsPricesListParams {
  currency?: string;
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersProductsPricesListData =
  PaginatedProductPriceListResponse;

export type ManagerSellersProductsPricesCreateData = ProductPriceResponse;

export interface ManagerSellersProductsVariantsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersProductsVariantsListData =
  PaginatedProductVariantListResponse;

export type ManagerSellersProductsVariantsCreateData = ProductVariantResponse;

export type ManagerSellersProductsCategoriesRetrieveData = CategoryResponse;

export type ManagerSellersProductsCategoriesDestroyData = CategoryResponse;

export interface ManagerSellersProductsImagesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  productId: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersProductsImagesListData =
  PaginatedManagerListCreateProductImageListResponse;

export type ManagerSellersProductsImagesCreateData =
  ManagerListCreateProductImageResponse;

export type ManagerSellersProductsImagesRetrieveData =
  ManagerGetUpdateProductImageResponse;

export type ManagerSellersProductsImagesUpdateData =
  ManagerGetUpdateProductImageResponse;

export type ManagerSellersProductsImagesPartialUpdateData =
  ManagerGetUpdateProductImageResponse;

export type ManagerSellersProductsImagesDestroyData =
  ManagerGetUpdateProductImageResponse;

export type ManagerSellersProductsOptionsRetrieveData = ProductOptionResponse;

export type ManagerSellersProductsOptionsUpdateData = ProductOptionResponse;

export type ManagerSellersProductsOptionsPartialUpdateData =
  ProductOptionResponse;

export type ManagerSellersProductsOptionsDestroyData = ProductOptionResponse;

export type ManagerSellersProductsPricesRetrieveData = ProductPriceResponse;

export type ManagerSellersProductsPricesUpdateData = ProductPriceResponse;

export type ManagerSellersProductsPricesPartialUpdateData =
  ProductPriceResponse;

export type ManagerSellersProductsPricesDestroyData = ProductPriceResponse;

export type ManagerSellersProductsVariantsRetrieveData = ProductVariantResponse;

export type ManagerSellersProductsVariantsUpdateData = ProductVariantResponse;

export type ManagerSellersProductsVariantsPartialUpdateData =
  ProductVariantResponse;

export type ManagerSellersProductsVariantsDestroyData = ProductVariantResponse;

export interface ManagerSellersProductsVariantsPricesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  productId: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  variantId: string;
}

export type ManagerSellersProductsVariantsPricesListData =
  PaginatedProductVariantPriceListResponse;

export type ManagerSellersProductsVariantsPricesCreateData =
  ProductVariantPriceResponse;

export type ManagerSellersProductsVariantsPricesRetrieveData =
  ProductVariantPriceResponse;

export type ManagerSellersProductsVariantsPricesUpdateData =
  ProductVariantPriceResponse;

export type ManagerSellersProductsVariantsPricesPartialUpdateData =
  ProductVariantPriceResponse;

export type ManagerSellersProductsVariantsPricesDestroyData =
  ProductVariantPriceResponse;

export interface ManagerSellersRedemptionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersRedemptionsListData = PaginatedRedemptionListResponse;

export type ManagerSellersRedemptionsCreateData = RedemptionResponse;

export type ManagerSellersRedemptionsRetrieveData = RedemptionResponse;

export interface ManagerSellersVoucherImportsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersVoucherImportsListData =
  PaginatedManagerCreateVoucherImportListResponse;

export type ManagerSellersVoucherImportsCreateData =
  ManagerCreateVoucherImportResponse;

export type ManagerSellersVoucherImportsRetrieveData = VoucherImportResponse;

export type ManagerSellersVoucherImportCreateData =
  ManagerImportVoucherResponse;

export interface ManagerSellersVouchersListParams {
  code?: string;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  item?: string;
  item__isnull?: string;
  /** @format uuid */
  order?: string;
  order__created?: string;
  order__created__gt?: string;
  order__created__lt?: string;
  order__isnull?: string;
  order__placed?: string;
  order__placed__gt?: string;
  order__placed__lt?: string;
  order__updated?: string;
  order__updated__gt?: string;
  order__updated__lt?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @format uuid */
  product?: string;
  status?: string;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
}

export type ManagerSellersVouchersListData = PaginatedVoucherListResponse;

export type ManagerSellersVouchersCreateData = VoucherResponse;

export type ManagerSellersVouchersRetrieveData = VoucherResponse;

export type ManagerSellersVouchersUpdateData = VoucherResponse;

export type ManagerSellersVouchersPartialUpdateData = VoucherResponse;

export type ManagerSellersVouchersDestroyData = VoucherResponse;

export interface ManagerSellersVouchersActionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-z0-9\_]+)$ */
  sellerId: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  voucherId: string;
}

export type ManagerSellersVouchersActionsListData =
  PaginatedVoucherActionListResponse;

export type ManagerSellersVouchersActionsRetrieveData = VoucherActionResponse;

export type ManagerSellersVouchersQueryCreateData = VoucherResponse;

export interface UserCategoriesListParams {
  /** @format uuid */
  id?: string;
  name?: string;
  name__contains?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  parent?: string;
  parent__isnull?: string;
}

export type UserCategoriesListData = PaginatedCategoryListResponse;

export type UserCategoriesRetrieveData = CategoryResponse;

export type UserCompanyRetrieveData = CompanyResponse;

export interface UserOrdersListParams {
  categories?: string;
  created?: string;
  created__gt?: string;
  created__lt?: string;
  currency?: string;
  /** @format uuid */
  id?: string;
  items__status?: string;
  /**
   * Ordering
   *
   * * `created` - Created
   * * `-created` - Created (descending)
   * * `updated` - Updated
   * * `-updated` - Updated (descending)
   */
  orderby?: ("-created" | "-updated" | "created" | "updated")[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  placed?: string;
  placed__gt?: string;
  placed__lt?: string;
  status?: string;
  statuses?: string;
  total_price?: string;
  updated?: string;
  updated__gt?: string;
  updated__lt?: string;
}

export type UserOrdersListData = PaginatedOrderListResponse;

export type UserOrdersCreateData = OrderResponse;

export type UserOrdersRetrieveData = ExtendedOrderResponse;

export type UserOrdersUpdateData = ExtendedOrderResponse;

export type UserOrdersPartialUpdateData = ExtendedOrderResponse;

export type UserOrdersDestroyData = ExtendedOrderResponse;

export interface UserOrdersItemsListParams {
  categories?: string;
  code?: string;
  countries?: string;
  /** @format uuid */
  id?: string;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @format uuid */
  product?: string;
  quantity?: number;
  supplier?: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type UserOrdersItemsListData = PaginatedOrderItemListResponse;

export type UserOrdersItemsCreateData = OrderItemResponse;

export interface UserOrdersPaymentsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  type?: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type UserOrdersPaymentsListData = PaginatedPaymentListResponse;

export type UserOrdersPaymentsCreateData = PaymentResponse;

export interface UserOrdersRefundsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  type?: string;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type UserOrdersRefundsListData = PaginatedRefundListResponse;

export type UserOrdersItemsRetrieveData = OrderItemResponse;

export type UserOrdersItemsUpdateData = OrderItemResponse;

export type UserOrdersItemsPartialUpdateData = OrderItemResponse;

export type UserOrdersItemsDestroyData = OrderItemResponse;

export type UserOrdersPaymentsRetrieveData = PaymentResponse;

export type UserOrdersRefundsRetrieveData = RefundResponse;

export interface UserProductsListParams {
  categories?: string;
  code?: string;
  countries?: string;
  currency?: string;
  enabled?: boolean;
  /** @format uuid */
  id?: string;
  name?: string;
  name__contains?: string;
  /**
   * Ordering
   *
   * * `created` - Created
   * * `-created` - Created (descending)
   * * `updated` - Updated
   * * `-updated` - Updated (descending)
   */
  orderby?: ("-created" | "-updated" | "created" | "updated")[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  quantity?: number;
  quantity__gt?: number;
  quantity__lt?: number;
  seller?: string;
  seller__isnull?: string;
  supplier?: string;
}

export type UserProductsListData = PaginatedProductListResponse;

export type UserProductsRetrieveData = ProductResponse;

export interface UserProductsPricesListParams {
  currency?: string;
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type UserProductsPricesListData = PaginatedProductPriceListResponse;

export interface UserProductsVariantsListParams {
  /** @format uuid */
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type UserProductsVariantsListData = PaginatedProductVariantListResponse;

export interface UserProductsImagesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  productId: string;
}

export type UserProductsImagesListData = PaginatedProductImageListResponse;

export type UserProductsImagesRetrieveData = ProductImageResponse;

export type UserProductsPricesRetrieveData = ProductPriceResponse;

export type UserProductsVariantsRetrieveData = ProductVariantResponse;

export interface UserRedemptionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UserRedemptionsListData = PaginatedRedemptionListResponse;

export type UserRedemptionsCreateData = RedemptionResponse;

export type UserRedemptionsRetrieveData = RedemptionResponse;

export interface UserSellersListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UserSellersListData = PaginatedSellerListResponse;

export type UserSellersRetrieveData = SellerResponse;

export interface UserVouchersListParams {
  code?: string;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  item?: string;
  item__isnull?: string;
  /** @format uuid */
  order?: string;
  order__created?: string;
  order__created__gt?: string;
  order__created__lt?: string;
  order__isnull?: string;
  order__placed?: string;
  order__placed__gt?: string;
  order__placed__lt?: string;
  order__updated?: string;
  order__updated__gt?: string;
  order__updated__lt?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @format uuid */
  product?: string;
  status?: string;
}

export type UserVouchersListData = PaginatedVoucherListResponse;

export type UserVouchersRetrieveData = VoucherResponse;

export interface UserVouchersActionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
  identifier: string;
}

export type UserVouchersActionsListData = PaginatedVoucherActionListResponse;

export type UserVouchersActionsRetrieveData = VoucherActionResponse;

export type UserVouchersQueryCreateData = VoucherResponse;

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
  public baseUrl: string = "https://product.services.rehive.com/api/";
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
 * @title Product Service API
 * @version 1 (1)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://product.services.rehive.com/api/
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **Product Service API** is used for product and order management in Rehive.
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
     * @name AdminCategoriesList
     * @summary List categories
     * @request GET:/admin/categories/
     * @secure
     */
    adminCategoriesList: (
      query: AdminCategoriesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminCategoriesListData, any>({
        path: `/admin/categories/`,
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
     * @name AdminCategoriesCreate
     * @summary Create category
     * @request POST:/admin/categories/
     * @secure
     */
    adminCategoriesCreate: (
      data: AdminCreateCategory,
      params: RequestParams = {},
    ) =>
      this.request<AdminCategoriesCreateData, any>({
        path: `/admin/categories/`,
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
     * @name AdminCategoriesRetrieve
     * @summary Retrieve category
     * @request GET:/admin/categories/{identifier}/
     * @secure
     */
    adminCategoriesRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminCategoriesRetrieveData, any>({
        path: `/admin/categories/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminCategoriesUpdate
     * @summary Update category
     * @request PUT:/admin/categories/{identifier}/
     * @secure
     */
    adminCategoriesUpdate: (
      identifier: string,
      data: AdminCreateCategory,
      params: RequestParams = {},
    ) =>
      this.request<AdminCategoriesUpdateData, any>({
        path: `/admin/categories/${identifier}/`,
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
     * @name AdminCategoriesPartialUpdate
     * @summary Partially update category
     * @request PATCH:/admin/categories/{identifier}/
     * @secure
     */
    adminCategoriesPartialUpdate: (
      identifier: string,
      data: PatchedAdminCreateCategory,
      params: RequestParams = {},
    ) =>
      this.request<AdminCategoriesPartialUpdateData, any>({
        path: `/admin/categories/${identifier}/`,
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
     * @name AdminCategoriesDestroy
     * @summary Delete category
     * @request DELETE:/admin/categories/{identifier}/
     * @secure
     */
    adminCategoriesDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminCategoriesDestroyData, any>({
        path: `/admin/categories/${identifier}/`,
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
     * @name AdminIntegrationsList
     * @summary List integrations
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
     * @request GET:/admin/integrations/{integration_id}/webhooks{webhook_id}/
     * @secure
     */
    adminIntegrationsWebhooksRetrieve: (
      integrationId: string,
      webhookId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsWebhooksRetrieveData, any>({
        path: `/admin/integrations/${integrationId}/webhooks${webhookId}/`,
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
     * @request PUT:/admin/integrations/{integration_id}/webhooks{webhook_id}/
     * @secure
     */
    adminIntegrationsWebhooksUpdate: (
      integrationId: string,
      webhookId: string,
      data: AdminIntegrationWebhook,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsWebhooksUpdateData, any>({
        path: `/admin/integrations/${integrationId}/webhooks${webhookId}/`,
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
     * @request PATCH:/admin/integrations/{integration_id}/webhooks{webhook_id}/
     * @secure
     */
    adminIntegrationsWebhooksPartialUpdate: (
      integrationId: string,
      webhookId: string,
      data: PatchedAdminIntegrationWebhook,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsWebhooksPartialUpdateData, any>({
        path: `/admin/integrations/${integrationId}/webhooks${webhookId}/`,
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
     * @request DELETE:/admin/integrations/{integration_id}/webhooks{webhook_id}/
     * @secure
     */
    adminIntegrationsWebhooksDestroy: (
      integrationId: string,
      webhookId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminIntegrationsWebhooksDestroyData, any>({
        path: `/admin/integrations/${integrationId}/webhooks${webhookId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminOrdersList
     * @summary List orders
     * @request GET:/admin/orders/
     * @secure
     */
    adminOrdersList: (
      query: AdminOrdersListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersListData, any>({
        path: `/admin/orders/`,
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
     * @name AdminOrdersCreate
     * @summary Create order
     * @request POST:/admin/orders/
     * @secure
     */
    adminOrdersCreate: (data: AdminCreateOrder, params: RequestParams = {}) =>
      this.request<AdminOrdersCreateData, any>({
        path: `/admin/orders/`,
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
     * @name AdminOrdersRetrieve
     * @summary Retrieve order
     * @request GET:/admin/orders/{identifier}/
     * @secure
     */
    adminOrdersRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminOrdersRetrieveData, any>({
        path: `/admin/orders/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminOrdersUpdate
     * @summary Update order
     * @request PUT:/admin/orders/{identifier}/
     * @secure
     */
    adminOrdersUpdate: (
      identifier: string,
      data: AdminUpdateOrder,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersUpdateData, any>({
        path: `/admin/orders/${identifier}/`,
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
     * @name AdminOrdersPartialUpdate
     * @summary Partially update order
     * @request PATCH:/admin/orders/{identifier}/
     * @secure
     */
    adminOrdersPartialUpdate: (
      identifier: string,
      data: PatchedAdminUpdateOrder,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersPartialUpdateData, any>({
        path: `/admin/orders/${identifier}/`,
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
     * @name AdminOrdersDestroy
     * @summary Delete order
     * @request DELETE:/admin/orders/{identifier}/
     * @secure
     */
    adminOrdersDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminOrdersDestroyData, any>({
        path: `/admin/orders/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminOrdersItemsList
     * @summary List order items
     * @request GET:/admin/orders/{identifier}/items/
     * @secure
     */
    adminOrdersItemsList: (
      { identifier, ...query }: AdminOrdersItemsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersItemsListData, any>({
        path: `/admin/orders/${identifier}/items/`,
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
     * @name AdminOrdersItemsCreate
     * @summary Create order item
     * @request POST:/admin/orders/{identifier}/items/
     * @secure
     */
    adminOrdersItemsCreate: (
      identifier: string,
      data: AdminCreateOrderItem,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersItemsCreateData, any>({
        path: `/admin/orders/${identifier}/items/`,
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
     * @name AdminOrdersPaymentsList
     * @summary List payments
     * @request GET:/admin/orders/{identifier}/payments/
     * @secure
     */
    adminOrdersPaymentsList: (
      { identifier, ...query }: AdminOrdersPaymentsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersPaymentsListData, any>({
        path: `/admin/orders/${identifier}/payments/`,
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
     * @name AdminOrdersPaymentsCreate
     * @summary Create payment
     * @request POST:/admin/orders/{identifier}/payments/
     * @secure
     */
    adminOrdersPaymentsCreate: (
      identifier: string,
      data: AdminCreatePayment,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersPaymentsCreateData, any>({
        path: `/admin/orders/${identifier}/payments/`,
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
     * @name AdminOrdersRefundsList
     * @summary List refunds
     * @request GET:/admin/orders/{identifier}/refunds/
     * @secure
     */
    adminOrdersRefundsList: (
      { identifier, ...query }: AdminOrdersRefundsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersRefundsListData, any>({
        path: `/admin/orders/${identifier}/refunds/`,
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
     * @name AdminOrdersRefundsCreate
     * @summary Create refund
     * @request POST:/admin/orders/{identifier}/refunds/
     * @secure
     */
    adminOrdersRefundsCreate: (
      identifier: string,
      data: AdminCreateRefund,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersRefundsCreateData, any>({
        path: `/admin/orders/${identifier}/refunds/`,
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
     * @name AdminOrdersItemsRetrieve
     * @summary Retrieve order item
     * @request GET:/admin/orders/{order_id}/items/{item_id}/
     * @secure
     */
    adminOrdersItemsRetrieve: (
      itemId: string,
      orderId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersItemsRetrieveData, any>({
        path: `/admin/orders/${orderId}/items/${itemId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminOrdersItemsUpdate
     * @summary Update order item
     * @request PUT:/admin/orders/{order_id}/items/{item_id}/
     * @secure
     */
    adminOrdersItemsUpdate: (
      itemId: string,
      orderId: string,
      data: AdminUpdateOrderItem,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersItemsUpdateData, any>({
        path: `/admin/orders/${orderId}/items/${itemId}/`,
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
     * @name AdminOrdersItemsPartialUpdate
     * @summary Partially update order item
     * @request PATCH:/admin/orders/{order_id}/items/{item_id}/
     * @secure
     */
    adminOrdersItemsPartialUpdate: (
      itemId: string,
      orderId: string,
      data: PatchedAdminUpdateOrderItem,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersItemsPartialUpdateData, any>({
        path: `/admin/orders/${orderId}/items/${itemId}/`,
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
     * @name AdminOrdersItemsDestroy
     * @summary Delete order item
     * @request DELETE:/admin/orders/{order_id}/items/{item_id}/
     * @secure
     */
    adminOrdersItemsDestroy: (
      itemId: string,
      orderId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersItemsDestroyData, any>({
        path: `/admin/orders/${orderId}/items/${itemId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminOrdersPaymentsRetrieve
     * @summary Retrieve payment
     * @request GET:/admin/orders/{order_id}/payments/{payment_id}/
     * @secure
     */
    adminOrdersPaymentsRetrieve: (
      orderId: string,
      paymentId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersPaymentsRetrieveData, any>({
        path: `/admin/orders/${orderId}/payments/${paymentId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminOrdersPaymentsUpdate
     * @summary Update payment
     * @request PUT:/admin/orders/{order_id}/payments/{payment_id}/
     * @secure
     */
    adminOrdersPaymentsUpdate: (
      orderId: string,
      paymentId: string,
      data: AdminPayment,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersPaymentsUpdateData, any>({
        path: `/admin/orders/${orderId}/payments/${paymentId}/`,
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
     * @name AdminOrdersPaymentsPartialUpdate
     * @summary Partially update payment
     * @request PATCH:/admin/orders/{order_id}/payments/{payment_id}/
     * @secure
     */
    adminOrdersPaymentsPartialUpdate: (
      orderId: string,
      paymentId: string,
      data: PatchedAdminPayment,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersPaymentsPartialUpdateData, any>({
        path: `/admin/orders/${orderId}/payments/${paymentId}/`,
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
     * @name AdminOrdersRefundsRetrieve
     * @summary Retrieve refund
     * @request GET:/admin/orders/{order_id}/refunds/{refund_id}/
     * @secure
     */
    adminOrdersRefundsRetrieve: (
      orderId: string,
      refundId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersRefundsRetrieveData, any>({
        path: `/admin/orders/${orderId}/refunds/${refundId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminOrdersRefundsUpdate
     * @summary Update refund
     * @request PUT:/admin/orders/{order_id}/refunds/{refund_id}/
     * @secure
     */
    adminOrdersRefundsUpdate: (
      orderId: string,
      refundId: string,
      data: AdminRefund,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersRefundsUpdateData, any>({
        path: `/admin/orders/${orderId}/refunds/${refundId}/`,
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
     * @name AdminOrdersRefundsPartialUpdate
     * @summary Partially update refund
     * @request PATCH:/admin/orders/{order_id}/refunds/{refund_id}/
     * @secure
     */
    adminOrdersRefundsPartialUpdate: (
      orderId: string,
      refundId: string,
      data: PatchedAdminRefund,
      params: RequestParams = {},
    ) =>
      this.request<AdminOrdersRefundsPartialUpdateData, any>({
        path: `/admin/orders/${orderId}/refunds/${refundId}/`,
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
     * @name AdminProductsList
     * @summary List products
     * @request GET:/admin/products/
     * @secure
     */
    adminProductsList: (
      query: AdminProductsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsListData, any>({
        path: `/admin/products/`,
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
     * @name AdminProductsCreate
     * @summary Create product
     * @request POST:/admin/products/
     * @secure
     */
    adminProductsCreate: (
      data: AdminCreateUpdateProduct,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsCreateData, any>({
        path: `/admin/products/`,
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
     * @name AdminProductsRetrieve
     * @summary Retrieve product
     * @request GET:/admin/products/{identifier}/
     * @secure
     */
    adminProductsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminProductsRetrieveData, any>({
        path: `/admin/products/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsUpdate
     * @summary Update product
     * @request PUT:/admin/products/{identifier}/
     * @secure
     */
    adminProductsUpdate: (
      identifier: string,
      data: AdminCreateUpdateProduct,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsUpdateData, any>({
        path: `/admin/products/${identifier}/`,
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
     * @name AdminProductsPartialUpdate
     * @summary Partially update product
     * @request PATCH:/admin/products/{identifier}/
     * @secure
     */
    adminProductsPartialUpdate: (
      identifier: string,
      data: PatchedAdminCreateUpdateProduct,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsPartialUpdateData, any>({
        path: `/admin/products/${identifier}/`,
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
     * @name AdminProductsDestroy
     * @summary Delete product
     * @request DELETE:/admin/products/{identifier}/
     * @secure
     */
    adminProductsDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminProductsDestroyData, any>({
        path: `/admin/products/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsCategoriesList
     * @summary List product categories
     * @request GET:/admin/products/{identifier}/categories/
     * @secure
     */
    adminProductsCategoriesList: (
      { identifier, ...query }: AdminProductsCategoriesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsCategoriesListData, any>({
        path: `/admin/products/${identifier}/categories/`,
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
     * @name AdminProductsCategoriesCreate
     * @summary Create product category
     * @request POST:/admin/products/{identifier}/categories/
     * @secure
     */
    adminProductsCategoriesCreate: (
      identifier: string,
      data: AdminCreateProductCategory,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsCategoriesCreateData, any>({
        path: `/admin/products/${identifier}/categories/`,
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
     * @name AdminProductsOptionsList
     * @summary List product options
     * @request GET:/admin/products/{identifier}/options/
     * @secure
     */
    adminProductsOptionsList: (
      { identifier, ...query }: AdminProductsOptionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsOptionsListData, any>({
        path: `/admin/products/${identifier}/options/`,
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
     * @name AdminProductsOptionsCreate
     * @summary Create product option
     * @request POST:/admin/products/{identifier}/options/
     * @secure
     */
    adminProductsOptionsCreate: (
      identifier: string,
      data: AdminCreateProductOption,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsOptionsCreateData, any>({
        path: `/admin/products/${identifier}/options/`,
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
     * @name AdminProductsPricesList
     * @summary List product prices
     * @request GET:/admin/products/{identifier}/prices/
     * @secure
     */
    adminProductsPricesList: (
      { identifier, ...query }: AdminProductsPricesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsPricesListData, any>({
        path: `/admin/products/${identifier}/prices/`,
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
     * @name AdminProductsPricesCreate
     * @summary Create product price
     * @request POST:/admin/products/{identifier}/prices/
     * @secure
     */
    adminProductsPricesCreate: (
      identifier: string,
      data: AdminCreateProductPrice,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsPricesCreateData, any>({
        path: `/admin/products/${identifier}/prices/`,
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
     * @name AdminProductsVariantsList
     * @summary List product variants
     * @request GET:/admin/products/{identifier}/variants/
     * @secure
     */
    adminProductsVariantsList: (
      { identifier, ...query }: AdminProductsVariantsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsListData, any>({
        path: `/admin/products/${identifier}/variants/`,
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
     * @name AdminProductsVariantsCreate
     * @summary Create product variant
     * @request POST:/admin/products/{identifier}/variants/
     * @secure
     */
    adminProductsVariantsCreate: (
      identifier: string,
      data: AdminCreateProductVariant,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsCreateData, any>({
        path: `/admin/products/${identifier}/variants/`,
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
     * @name AdminProductsCategoriesRetrieve
     * @summary Retrieve product category
     * @request GET:/admin/products/{product_id}/categories/{category_id}/
     * @secure
     */
    adminProductsCategoriesRetrieve: (
      categoryId: string,
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsCategoriesRetrieveData, any>({
        path: `/admin/products/${productId}/categories/${categoryId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsCategoriesDestroy
     * @summary Delete product category
     * @request DELETE:/admin/products/{product_id}/categories/{category_id}/
     * @secure
     */
    adminProductsCategoriesDestroy: (
      categoryId: string,
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsCategoriesDestroyData, any>({
        path: `/admin/products/${productId}/categories/${categoryId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsImagesList
     * @summary List product images
     * @request GET:/admin/products/{product_id}/images/
     * @secure
     */
    adminProductsImagesList: (
      { productId, ...query }: AdminProductsImagesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsImagesListData, any>({
        path: `/admin/products/${productId}/images/`,
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
     * @name AdminProductsImagesCreate
     * @summary Create product image
     * @request POST:/admin/products/{product_id}/images/
     * @secure
     */
    adminProductsImagesCreate: (
      productId: string,
      data: AdminListCreateProductImage,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsImagesCreateData, any>({
        path: `/admin/products/${productId}/images/`,
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
     * @name AdminProductsImagesRetrieve
     * @summary Retrieve product image
     * @request GET:/admin/products/{product_id}/images/{image_id}/
     * @secure
     */
    adminProductsImagesRetrieve: (
      imageId: string,
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsImagesRetrieveData, any>({
        path: `/admin/products/${productId}/images/${imageId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsImagesUpdate
     * @summary Update product image
     * @request PUT:/admin/products/{product_id}/images/{image_id}/
     * @secure
     */
    adminProductsImagesUpdate: (
      imageId: string,
      productId: string,
      data: AdminGetUpdateProductImage,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsImagesUpdateData, any>({
        path: `/admin/products/${productId}/images/${imageId}/`,
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
     * @name AdminProductsImagesPartialUpdate
     * @summary Partially update product image
     * @request PATCH:/admin/products/{product_id}/images/{image_id}/
     * @secure
     */
    adminProductsImagesPartialUpdate: (
      imageId: string,
      productId: string,
      data: PatchedAdminGetUpdateProductImage,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsImagesPartialUpdateData, any>({
        path: `/admin/products/${productId}/images/${imageId}/`,
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
     * @name AdminProductsImagesDestroy
     * @summary Delete product image
     * @request DELETE:/admin/products/{product_id}/images/{image_id}/
     * @secure
     */
    adminProductsImagesDestroy: (
      imageId: string,
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsImagesDestroyData, any>({
        path: `/admin/products/${productId}/images/${imageId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsOptionsRetrieve
     * @summary Retrieve product option
     * @request GET:/admin/products/{product_id}/options/{option_id}/
     * @secure
     */
    adminProductsOptionsRetrieve: (
      optionId: string,
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsOptionsRetrieveData, any>({
        path: `/admin/products/${productId}/options/${optionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsOptionsUpdate
     * @summary Update product option
     * @request PUT:/admin/products/{product_id}/options/{option_id}/
     * @secure
     */
    adminProductsOptionsUpdate: (
      optionId: string,
      productId: string,
      data: AdminUpdateProductOption,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsOptionsUpdateData, any>({
        path: `/admin/products/${productId}/options/${optionId}/`,
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
     * @name AdminProductsOptionsPartialUpdate
     * @summary Partially update product option
     * @request PATCH:/admin/products/{product_id}/options/{option_id}/
     * @secure
     */
    adminProductsOptionsPartialUpdate: (
      optionId: string,
      productId: string,
      data: PatchedAdminUpdateProductOption,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsOptionsPartialUpdateData, any>({
        path: `/admin/products/${productId}/options/${optionId}/`,
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
     * @name AdminProductsOptionsDestroy
     * @summary Delete product option
     * @request DELETE:/admin/products/{product_id}/options/{option_id}/
     * @secure
     */
    adminProductsOptionsDestroy: (
      optionId: string,
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsOptionsDestroyData, any>({
        path: `/admin/products/${productId}/options/${optionId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsPricesRetrieve
     * @summary Retrieve product price
     * @request GET:/admin/products/{product_id}/prices/{price_id}/
     * @secure
     */
    adminProductsPricesRetrieve: (
      priceId: string,
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsPricesRetrieveData, any>({
        path: `/admin/products/${productId}/prices/${priceId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsPricesUpdate
     * @summary Update product price
     * @request PUT:/admin/products/{product_id}/prices/{price_id}/
     * @secure
     */
    adminProductsPricesUpdate: (
      priceId: string,
      productId: string,
      data: AdminUpdateProductPrice,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsPricesUpdateData, any>({
        path: `/admin/products/${productId}/prices/${priceId}/`,
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
     * @name AdminProductsPricesPartialUpdate
     * @summary Partially update product price
     * @request PATCH:/admin/products/{product_id}/prices/{price_id}/
     * @secure
     */
    adminProductsPricesPartialUpdate: (
      priceId: string,
      productId: string,
      data: PatchedAdminUpdateProductPrice,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsPricesPartialUpdateData, any>({
        path: `/admin/products/${productId}/prices/${priceId}/`,
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
     * @name AdminProductsPricesDestroy
     * @summary Delete product price
     * @request DELETE:/admin/products/{product_id}/prices/{price_id}/
     * @secure
     */
    adminProductsPricesDestroy: (
      priceId: string,
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsPricesDestroyData, any>({
        path: `/admin/products/${productId}/prices/${priceId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsVariantsRetrieve
     * @summary Retrieve product variant
     * @request GET:/admin/products/{product_id}/variants/{variant_id}/
     * @secure
     */
    adminProductsVariantsRetrieve: (
      productId: string,
      variantId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsRetrieveData, any>({
        path: `/admin/products/${productId}/variants/${variantId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsVariantsUpdate
     * @summary Update product variant
     * @request PUT:/admin/products/{product_id}/variants/{variant_id}/
     * @secure
     */
    adminProductsVariantsUpdate: (
      productId: string,
      variantId: string,
      data: AdminUpdateProductVariant,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsUpdateData, any>({
        path: `/admin/products/${productId}/variants/${variantId}/`,
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
     * @name AdminProductsVariantsPartialUpdate
     * @summary Partially update product variant
     * @request PATCH:/admin/products/{product_id}/variants/{variant_id}/
     * @secure
     */
    adminProductsVariantsPartialUpdate: (
      productId: string,
      variantId: string,
      data: PatchedAdminUpdateProductVariant,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsPartialUpdateData, any>({
        path: `/admin/products/${productId}/variants/${variantId}/`,
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
     * @name AdminProductsVariantsDestroy
     * @summary Delete product variant
     * @request DELETE:/admin/products/{product_id}/variants/{variant_id}/
     * @secure
     */
    adminProductsVariantsDestroy: (
      productId: string,
      variantId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsDestroyData, any>({
        path: `/admin/products/${productId}/variants/${variantId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsVariantsPricesList
     * @summary List product variant prices
     * @request GET:/admin/products/{product_id}/variants/{variant_id}/prices/
     * @secure
     */
    adminProductsVariantsPricesList: (
      { productId, variantId, ...query }: AdminProductsVariantsPricesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsPricesListData, any>({
        path: `/admin/products/${productId}/variants/${variantId}/prices/`,
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
     * @name AdminProductsVariantsPricesCreate
     * @summary Create product variant price
     * @request POST:/admin/products/{product_id}/variants/{variant_id}/prices/
     * @secure
     */
    adminProductsVariantsPricesCreate: (
      productId: string,
      variantId: string,
      data: AdminCreateProductVariantPrice,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsPricesCreateData, any>({
        path: `/admin/products/${productId}/variants/${variantId}/prices/`,
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
     * @name AdminProductsVariantsPricesRetrieve
     * @summary Retrieve product variant price
     * @request GET:/admin/products/{product_id}/variants/{variant_id}/prices/{price_id}/
     * @secure
     */
    adminProductsVariantsPricesRetrieve: (
      priceId: string,
      productId: string,
      variantId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsPricesRetrieveData, any>({
        path: `/admin/products/${productId}/variants/${variantId}/prices/${priceId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminProductsVariantsPricesUpdate
     * @summary Update product variant price
     * @request PUT:/admin/products/{product_id}/variants/{variant_id}/prices/{price_id}/
     * @secure
     */
    adminProductsVariantsPricesUpdate: (
      priceId: string,
      productId: string,
      variantId: string,
      data: AdminUpdateProductVariantPrice,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsPricesUpdateData, any>({
        path: `/admin/products/${productId}/variants/${variantId}/prices/${priceId}/`,
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
     * @name AdminProductsVariantsPricesPartialUpdate
     * @summary Partially update product variant price
     * @request PATCH:/admin/products/{product_id}/variants/{variant_id}/prices/{price_id}/
     * @secure
     */
    adminProductsVariantsPricesPartialUpdate: (
      priceId: string,
      productId: string,
      variantId: string,
      data: PatchedAdminUpdateProductVariantPrice,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsPricesPartialUpdateData, any>({
        path: `/admin/products/${productId}/variants/${variantId}/prices/${priceId}/`,
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
     * @name AdminProductsVariantsPricesDestroy
     * @summary Delete product variant price
     * @request DELETE:/admin/products/{product_id}/variants/{variant_id}/prices/{price_id}/
     * @secure
     */
    adminProductsVariantsPricesDestroy: (
      priceId: string,
      productId: string,
      variantId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminProductsVariantsPricesDestroyData, any>({
        path: `/admin/products/${productId}/variants/${variantId}/prices/${priceId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminRedemptionsList
     * @summary List redemptions
     * @request GET:/admin/redemptions/
     * @secure
     */
    adminRedemptionsList: (
      query: AdminRedemptionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminRedemptionsListData, any>({
        path: `/admin/redemptions/`,
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
     * @name AdminRedemptionsCreate
     * @summary Create redemption
     * @request POST:/admin/redemptions/
     * @secure
     */
    adminRedemptionsCreate: (
      data: AdminCreateRedemption,
      params: RequestParams = {},
    ) =>
      this.request<AdminRedemptionsCreateData, any>({
        path: `/admin/redemptions/`,
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
     * @name AdminRedemptionsRetrieve
     * @summary Retrieve redemption
     * @request GET:/admin/redemptions/{action_id}/
     * @secure
     */
    adminRedemptionsRetrieve: (actionId: string, params: RequestParams = {}) =>
      this.request<AdminRedemptionsRetrieveData, any>({
        path: `/admin/redemptions/${actionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminSellersList
     * @summary List sellers
     * @request GET:/admin/sellers/
     * @secure
     */
    adminSellersList: (
      query: AdminSellersListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminSellersListData, any>({
        path: `/admin/sellers/`,
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
     * @name AdminSellersRetrieve
     * @summary Retrieve seller
     * @request GET:/admin/sellers/{identifier}/
     * @secure
     */
    adminSellersRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminSellersRetrieveData, any>({
        path: `/admin/sellers/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminSellersUpdate
     * @summary Update seller
     * @request PUT:/admin/sellers/{identifier}/
     * @secure
     */
    adminSellersUpdate: (
      identifier: string,
      data: AdminSeller,
      params: RequestParams = {},
    ) =>
      this.request<AdminSellersUpdateData, any>({
        path: `/admin/sellers/${identifier}/`,
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
     * @name AdminSellersPartialUpdate
     * @summary Partially update seller
     * @request PATCH:/admin/sellers/{identifier}/
     * @secure
     */
    adminSellersPartialUpdate: (
      identifier: string,
      data: PatchedAdminSeller,
      params: RequestParams = {},
    ) =>
      this.request<AdminSellersPartialUpdateData, any>({
        path: `/admin/sellers/${identifier}/`,
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
     * @name AdminVoucherImportsList
     * @summary List voucher imports
     * @request GET:/admin/voucher-imports/
     * @secure
     */
    adminVoucherImportsList: (
      query: AdminVoucherImportsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminVoucherImportsListData, any>({
        path: `/admin/voucher-imports/`,
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
     * @name AdminVoucherImportsCreate
     * @summary Create voucher imports
     * @request POST:/admin/voucher-imports/
     * @secure
     */
    adminVoucherImportsCreate: (
      data: AdminCreateVoucherImport,
      params: RequestParams = {},
    ) =>
      this.request<AdminVoucherImportsCreateData, any>({
        path: `/admin/voucher-imports/`,
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
     * @name AdminVoucherImportsRetrieve
     * @summary Retrieve voucher import
     * @request GET:/admin/voucher-imports/{identifier}/
     * @secure
     */
    adminVoucherImportsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminVoucherImportsRetrieveData, any>({
        path: `/admin/voucher-imports/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminVouchersList
     * @summary List vouchers
     * @request GET:/admin/vouchers/
     * @secure
     */
    adminVouchersList: (
      query: AdminVouchersListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminVouchersListData, any>({
        path: `/admin/vouchers/`,
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
     * @name AdminVouchersCreate
     * @summary Create voucher
     * @request POST:/admin/vouchers/
     * @secure
     */
    adminVouchersCreate: (
      data: AdminCreateVoucher,
      params: RequestParams = {},
    ) =>
      this.request<AdminVouchersCreateData, any>({
        path: `/admin/vouchers/`,
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
     * @name AdminVouchersRetrieve
     * @summary Retrieve voucher
     * @request GET:/admin/vouchers/{identifier}/
     * @secure
     */
    adminVouchersRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminVouchersRetrieveData, any>({
        path: `/admin/vouchers/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminVouchersUpdate
     * @summary Update voucher
     * @request PUT:/admin/vouchers/{identifier}/
     * @secure
     */
    adminVouchersUpdate: (
      identifier: string,
      data: AdminUpdateVoucher,
      params: RequestParams = {},
    ) =>
      this.request<AdminVouchersUpdateData, any>({
        path: `/admin/vouchers/${identifier}/`,
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
     * @name AdminVouchersPartialUpdate
     * @summary Partially update voucher
     * @request PATCH:/admin/vouchers/{identifier}/
     * @secure
     */
    adminVouchersPartialUpdate: (
      identifier: string,
      data: PatchedAdminUpdateVoucher,
      params: RequestParams = {},
    ) =>
      this.request<AdminVouchersPartialUpdateData, any>({
        path: `/admin/vouchers/${identifier}/`,
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
     * @name AdminVouchersDestroy
     * @summary Delete voucher
     * @request DELETE:/admin/vouchers/{identifier}/
     * @secure
     */
    adminVouchersDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<AdminVouchersDestroyData, any>({
        path: `/admin/vouchers/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminVouchersActionsList
     * @summary List voucher actions
     * @request GET:/admin/vouchers/{identifier}/actions/
     * @secure
     */
    adminVouchersActionsList: (
      { identifier, ...query }: AdminVouchersActionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminVouchersActionsListData, any>({
        path: `/admin/vouchers/${identifier}/actions/`,
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
     * @name AdminVouchersActionsRetrieve
     * @summary Retrieve voucher action
     * @request GET:/admin/vouchers/{voucher_id}/actions/{action_id}/
     * @secure
     */
    adminVouchersActionsRetrieve: (
      actionId: string,
      voucherId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminVouchersActionsRetrieveData, any>({
        path: `/admin/vouchers/${voucherId}/actions/${actionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminVouchersImportCreate
     * @summary Import vouchers
     * @request POST:/admin/vouchers/import/
     * @secure
     */
    adminVouchersImportCreate: (
      data: AdminImportVoucher,
      params: RequestParams = {},
    ) =>
      this.request<AdminVouchersImportCreateData, any>({
        path: `/admin/vouchers/import/`,
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
     * @name AdminVouchersQueryCreate
     * @summary Query voucher
     * @request POST:/admin/vouchers/query/
     * @secure
     */
    adminVouchersQueryCreate: (
      data: AdminQueryVoucher,
      params: RequestParams = {},
    ) =>
      this.request<AdminVouchersQueryCreateData, any>({
        path: `/admin/vouchers/query/`,
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
  manager = {
    /**
     * No description
     *
     * @tags manager
     * @name ManagerCategoriesList
     * @summary List categories
     * @request GET:/manager/categories/
     * @secure
     */
    managerCategoriesList: (
      query: ManagerCategoriesListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerCategoriesListData, any>({
        path: `/manager/categories/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerCategoriesRetrieve
     * @summary Retrieve category
     * @request GET:/manager/categories/{identifier}/
     * @secure
     */
    managerCategoriesRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerCategoriesRetrieveData, any>({
        path: `/manager/categories/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerCompanyRetrieve
     * @summary Retrieve company
     * @request GET:/manager/company/
     * @secure
     */
    managerCompanyRetrieve: (params: RequestParams = {}) =>
      this.request<ManagerCompanyRetrieveData, any>({
        path: `/manager/company/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerCurrenciesList
     * @summary List currencies
     * @request GET:/manager/currencies/
     * @secure
     */
    managerCurrenciesList: (
      query: ManagerCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerCurrenciesListData, any>({
        path: `/manager/currencies/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerCurrenciesRetrieve
     * @summary Retrieve currency
     * @request GET:/manager/currencies/{code}/
     * @secure
     */
    managerCurrenciesRetrieve: (code: string, params: RequestParams = {}) =>
      this.request<ManagerCurrenciesRetrieveData, any>({
        path: `/manager/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersList
     * @summary List sellers
     * @request GET:/manager/sellers/
     * @secure
     */
    managerSellersList: (
      query: ManagerSellersListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersListData, any>({
        path: `/manager/sellers/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersCreate
     * @summary Create seller
     * @request POST:/manager/sellers/
     * @secure
     */
    managerSellersCreate: (
      data: ManagerCreateSeller,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersCreateData, any>({
        path: `/manager/sellers/`,
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
     * @tags manager
     * @name ManagerSellersRetrieve
     * @summary Retrieve seller
     * @request GET:/manager/sellers/{identifier}/
     * @secure
     */
    managerSellersRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<ManagerSellersRetrieveData, any>({
        path: `/manager/sellers/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersUpdate
     * @summary Update seller
     * @request PUT:/manager/sellers/{identifier}/
     * @secure
     */
    managerSellersUpdate: (
      identifier: string,
      data: ManagerSeller,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersUpdateData, any>({
        path: `/manager/sellers/${identifier}/`,
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
     * @tags manager
     * @name ManagerSellersPartialUpdate
     * @summary Partially update seller
     * @request PATCH:/manager/sellers/{identifier}/
     * @secure
     */
    managerSellersPartialUpdate: (
      identifier: string,
      data: PatchedManagerSeller,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersPartialUpdateData, any>({
        path: `/manager/sellers/${identifier}/`,
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
     * @tags manager
     * @name ManagerSellersIntegrationsList
     * @summary List integrations
     * @request GET:/manager/sellers/{identifier}/integrations/
     * @secure
     */
    managerSellersIntegrationsList: (
      { identifier, ...query }: ManagerSellersIntegrationsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsListData, any>({
        path: `/manager/sellers/${identifier}/integrations/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersIntegrationsCreate
     * @summary Create integration
     * @request POST:/manager/sellers/{identifier}/integrations/
     * @secure
     */
    managerSellersIntegrationsCreate: (
      identifier: string,
      data: ManagerIntegration,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsCreateData, any>({
        path: `/manager/sellers/${identifier}/integrations/`,
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
     * @tags manager
     * @name ManagerSellersIntegrationsRetrieve
     * @summary Retrieve integration
     * @request GET:/manager/sellers/{seller_id}/integrations/{identifier}/
     * @secure
     */
    managerSellersIntegrationsRetrieve: (
      identifier: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/integrations/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersIntegrationsUpdate
     * @summary Update integration
     * @request PUT:/manager/sellers/{seller_id}/integrations/{identifier}/
     * @secure
     */
    managerSellersIntegrationsUpdate: (
      identifier: string,
      sellerId: string,
      data: ManagerIntegration,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsUpdateData, any>({
        path: `/manager/sellers/${sellerId}/integrations/${identifier}/`,
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
     * @tags manager
     * @name ManagerSellersIntegrationsPartialUpdate
     * @summary Partially update integration
     * @request PATCH:/manager/sellers/{seller_id}/integrations/{identifier}/
     * @secure
     */
    managerSellersIntegrationsPartialUpdate: (
      identifier: string,
      sellerId: string,
      data: PatchedManagerIntegration,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/integrations/${identifier}/`,
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
     * @tags manager
     * @name ManagerSellersIntegrationsDestroy
     * @summary Delete integration
     * @request DELETE:/manager/sellers/{seller_id}/integrations/{identifier}/
     * @secure
     */
    managerSellersIntegrationsDestroy: (
      identifier: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsDestroyData, any>({
        path: `/manager/sellers/${sellerId}/integrations/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersIntegrationsWebhooksList
     * @summary List integration webhooks
     * @request GET:/manager/sellers/{seller_id}/integrations/{identifier}/webhooks/
     * @secure
     */
    managerSellersIntegrationsWebhooksList: (
      {
        identifier,
        sellerId,
        ...query
      }: ManagerSellersIntegrationsWebhooksListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsWebhooksListData, any>({
        path: `/manager/sellers/${sellerId}/integrations/${identifier}/webhooks/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersIntegrationsWebhooksCreate
     * @summary Create integration webhook
     * @request POST:/manager/sellers/{seller_id}/integrations/{identifier}/webhooks/
     * @secure
     */
    managerSellersIntegrationsWebhooksCreate: (
      identifier: string,
      sellerId: string,
      data: ManagerIntegrationWebhook,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsWebhooksCreateData, any>({
        path: `/manager/sellers/${sellerId}/integrations/${identifier}/webhooks/`,
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
     * @tags manager
     * @name ManagerSellersIntegrationsWebhooksRetrieve
     * @summary Retrieve integration webhook
     * @request GET:/manager/sellers/{seller_id}/integrations/{integration_id}/webhooks/{webhook_id}/
     * @secure
     */
    managerSellersIntegrationsWebhooksRetrieve: (
      integrationId: string,
      sellerId: string,
      webhookId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsWebhooksRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/integrations/${integrationId}/webhooks/${webhookId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersIntegrationsWebhooksUpdate
     * @summary Update integration webhook
     * @request PUT:/manager/sellers/{seller_id}/integrations/{integration_id}/webhooks/{webhook_id}/
     * @secure
     */
    managerSellersIntegrationsWebhooksUpdate: (
      integrationId: string,
      sellerId: string,
      webhookId: string,
      data: ManagerIntegrationWebhook,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsWebhooksUpdateData, any>({
        path: `/manager/sellers/${sellerId}/integrations/${integrationId}/webhooks/${webhookId}/`,
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
     * @tags manager
     * @name ManagerSellersIntegrationsWebhooksPartialUpdate
     * @summary Partially update integration webhook
     * @request PATCH:/manager/sellers/{seller_id}/integrations/{integration_id}/webhooks/{webhook_id}/
     * @secure
     */
    managerSellersIntegrationsWebhooksPartialUpdate: (
      integrationId: string,
      sellerId: string,
      webhookId: string,
      data: PatchedManagerIntegrationWebhook,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsWebhooksPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/integrations/${integrationId}/webhooks/${webhookId}/`,
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
     * @tags manager
     * @name ManagerSellersIntegrationsWebhooksDestroy
     * @summary Delete integration webhook
     * @request DELETE:/manager/sellers/{seller_id}/integrations/{integration_id}/webhooks/{webhook_id}/
     * @secure
     */
    managerSellersIntegrationsWebhooksDestroy: (
      integrationId: string,
      sellerId: string,
      webhookId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersIntegrationsWebhooksDestroyData, any>({
        path: `/manager/sellers/${sellerId}/integrations/${integrationId}/webhooks/${webhookId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersOrdersList
     * @summary List orders
     * @request GET:/manager/sellers/{seller_id}/orders/
     * @secure
     */
    managerSellersOrdersList: (
      { sellerId, ...query }: ManagerSellersOrdersListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersListData, any>({
        path: `/manager/sellers/${sellerId}/orders/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersOrdersRetrieve
     * @summary Retrieve order
     * @request GET:/manager/sellers/{seller_id}/orders/{identifier}/
     * @secure
     */
    managerSellersOrdersRetrieve: (
      identifier: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/orders/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersOrdersUpdate
     * @summary Update order
     * @request PUT:/manager/sellers/{seller_id}/orders/{identifier}/
     * @secure
     */
    managerSellersOrdersUpdate: (
      identifier: string,
      sellerId: string,
      data: ManagerUpdateOrder,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersUpdateData, any>({
        path: `/manager/sellers/${sellerId}/orders/${identifier}/`,
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
     * @tags manager
     * @name ManagerSellersOrdersPartialUpdate
     * @summary Partially update order
     * @request PATCH:/manager/sellers/{seller_id}/orders/{identifier}/
     * @secure
     */
    managerSellersOrdersPartialUpdate: (
      identifier: string,
      sellerId: string,
      data: PatchedManagerUpdateOrder,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/orders/${identifier}/`,
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
     * @tags manager
     * @name ManagerSellersOrdersItemsList
     * @summary List order items
     * @request GET:/manager/sellers/{seller_id}/orders/{identifier}/items/
     * @secure
     */
    managerSellersOrdersItemsList: (
      { identifier, sellerId, ...query }: ManagerSellersOrdersItemsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersItemsListData, any>({
        path: `/manager/sellers/${sellerId}/orders/${identifier}/items/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersOrdersPaymentsList
     * @summary List payments
     * @request GET:/manager/sellers/{seller_id}/orders/{identifier}/payments/
     * @secure
     */
    managerSellersOrdersPaymentsList: (
      {
        identifier,
        sellerId,
        ...query
      }: ManagerSellersOrdersPaymentsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersPaymentsListData, any>({
        path: `/manager/sellers/${sellerId}/orders/${identifier}/payments/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersOrdersRefundsList
     * @summary List refund
     * @request GET:/manager/sellers/{seller_id}/orders/{identifier}/refunds/
     * @secure
     */
    managerSellersOrdersRefundsList: (
      { identifier, sellerId, ...query }: ManagerSellersOrdersRefundsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersRefundsListData, any>({
        path: `/manager/sellers/${sellerId}/orders/${identifier}/refunds/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersOrdersRefundsCreate
     * @summary Create refund
     * @request POST:/manager/sellers/{seller_id}/orders/{identifier}/refunds/
     * @secure
     */
    managerSellersOrdersRefundsCreate: (
      identifier: string,
      sellerId: string,
      data: ManagerCreateRefund,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersRefundsCreateData, any>({
        path: `/manager/sellers/${sellerId}/orders/${identifier}/refunds/`,
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
     * @tags manager
     * @name ManagerSellersOrdersItemsRetrieve
     * @summary Retrieve order item
     * @request GET:/manager/sellers/{seller_id}/orders/{order_id}/items/{item_id}/
     * @secure
     */
    managerSellersOrdersItemsRetrieve: (
      itemId: string,
      orderId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersItemsRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/orders/${orderId}/items/${itemId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersOrdersItemsUpdate
     * @summary Update order item
     * @request PUT:/manager/sellers/{seller_id}/orders/{order_id}/items/{item_id}/
     * @secure
     */
    managerSellersOrdersItemsUpdate: (
      itemId: string,
      orderId: string,
      sellerId: string,
      data: ManagerUpdateOrderItem,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersItemsUpdateData, any>({
        path: `/manager/sellers/${sellerId}/orders/${orderId}/items/${itemId}/`,
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
     * @tags manager
     * @name ManagerSellersOrdersItemsPartialUpdate
     * @summary Partially update order item
     * @request PATCH:/manager/sellers/{seller_id}/orders/{order_id}/items/{item_id}/
     * @secure
     */
    managerSellersOrdersItemsPartialUpdate: (
      itemId: string,
      orderId: string,
      sellerId: string,
      data: PatchedManagerUpdateOrderItem,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersItemsPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/orders/${orderId}/items/${itemId}/`,
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
     * @tags manager
     * @name ManagerSellersOrdersPaymentsRetrieve
     * @summary Retrieve payment
     * @request GET:/manager/sellers/{seller_id}/orders/{order_id}/payments/{payment_id}/
     * @secure
     */
    managerSellersOrdersPaymentsRetrieve: (
      orderId: string,
      paymentId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersPaymentsRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/orders/${orderId}/payments/${paymentId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersOrdersPaymentsUpdate
     * @summary Update payment
     * @request PUT:/manager/sellers/{seller_id}/orders/{order_id}/payments/{payment_id}/
     * @secure
     */
    managerSellersOrdersPaymentsUpdate: (
      orderId: string,
      paymentId: string,
      sellerId: string,
      data: ManagerPayment,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersPaymentsUpdateData, any>({
        path: `/manager/sellers/${sellerId}/orders/${orderId}/payments/${paymentId}/`,
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
     * @tags manager
     * @name ManagerSellersOrdersPaymentsPartialUpdate
     * @summary Partially update payment
     * @request PATCH:/manager/sellers/{seller_id}/orders/{order_id}/payments/{payment_id}/
     * @secure
     */
    managerSellersOrdersPaymentsPartialUpdate: (
      orderId: string,
      paymentId: string,
      sellerId: string,
      data: PatchedManagerPayment,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersPaymentsPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/orders/${orderId}/payments/${paymentId}/`,
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
     * @tags manager
     * @name ManagerSellersOrdersRefundsRetrieve
     * @summary Retrieve refund
     * @request GET:/manager/sellers/{seller_id}/orders/{order_id}/refunds/{refund_id}/
     * @secure
     */
    managerSellersOrdersRefundsRetrieve: (
      orderId: string,
      refundId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersRefundsRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/orders/${orderId}/refunds/${refundId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersOrdersRefundsUpdate
     * @summary Update refund
     * @request PUT:/manager/sellers/{seller_id}/orders/{order_id}/refunds/{refund_id}/
     * @secure
     */
    managerSellersOrdersRefundsUpdate: (
      orderId: string,
      refundId: string,
      sellerId: string,
      data: ManagerRefund,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersRefundsUpdateData, any>({
        path: `/manager/sellers/${sellerId}/orders/${orderId}/refunds/${refundId}/`,
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
     * @tags manager
     * @name ManagerSellersOrdersRefundsPartialUpdate
     * @summary Partially update refund
     * @request PATCH:/manager/sellers/{seller_id}/orders/{order_id}/refunds/{refund_id}/
     * @secure
     */
    managerSellersOrdersRefundsPartialUpdate: (
      orderId: string,
      refundId: string,
      sellerId: string,
      data: PatchedManagerRefund,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersOrdersRefundsPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/orders/${orderId}/refunds/${refundId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsList
     * @summary List products
     * @request GET:/manager/sellers/{seller_id}/products/
     * @secure
     */
    managerSellersProductsList: (
      { sellerId, ...query }: ManagerSellersProductsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsListData, any>({
        path: `/manager/sellers/${sellerId}/products/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsCreate
     * @summary Create product
     * @request POST:/manager/sellers/{seller_id}/products/
     * @secure
     */
    managerSellersProductsCreate: (
      sellerId: string,
      data: ManagerCreateUpdateProduct,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsCreateData, any>({
        path: `/manager/sellers/${sellerId}/products/`,
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
     * @tags manager
     * @name ManagerSellersProductsRetrieve
     * @summary Retrieve product
     * @request GET:/manager/sellers/{seller_id}/products/{identifier}/
     * @secure
     */
    managerSellersProductsRetrieve: (
      identifier: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsUpdate
     * @summary Update product
     * @request PUT:/manager/sellers/{seller_id}/products/{identifier}/
     * @secure
     */
    managerSellersProductsUpdate: (
      identifier: string,
      sellerId: string,
      data: ManagerCreateUpdateProduct,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/`,
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
     * @tags manager
     * @name ManagerSellersProductsPartialUpdate
     * @summary Partially update product
     * @request PATCH:/manager/sellers/{seller_id}/products/{identifier}/
     * @secure
     */
    managerSellersProductsPartialUpdate: (
      identifier: string,
      sellerId: string,
      data: PatchedManagerCreateUpdateProduct,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/`,
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
     * @tags manager
     * @name ManagerSellersProductsDestroy
     * @summary Delete product
     * @request DELETE:/manager/sellers/{seller_id}/products/{identifier}/
     * @secure
     */
    managerSellersProductsDestroy: (
      identifier: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsDestroyData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsCategoriesList
     * @summary List product categories
     * @request GET:/manager/sellers/{seller_id}/products/{identifier}/categories/
     * @secure
     */
    managerSellersProductsCategoriesList: (
      {
        identifier,
        sellerId,
        ...query
      }: ManagerSellersProductsCategoriesListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsCategoriesListData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/categories/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsCategoriesCreate
     * @summary Create product category
     * @request POST:/manager/sellers/{seller_id}/products/{identifier}/categories/
     * @secure
     */
    managerSellersProductsCategoriesCreate: (
      identifier: string,
      sellerId: string,
      data: ManagerCreateProductCategory,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsCategoriesCreateData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/categories/`,
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
     * @tags manager
     * @name ManagerSellersProductsOptionsList
     * @summary List product option
     * @request GET:/manager/sellers/{seller_id}/products/{identifier}/options/
     * @secure
     */
    managerSellersProductsOptionsList: (
      {
        identifier,
        sellerId,
        ...query
      }: ManagerSellersProductsOptionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsOptionsListData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/options/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsOptionsCreate
     * @summary Create product option
     * @request POST:/manager/sellers/{seller_id}/products/{identifier}/options/
     * @secure
     */
    managerSellersProductsOptionsCreate: (
      identifier: string,
      sellerId: string,
      data: ManagerCreateProductOption,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsOptionsCreateData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/options/`,
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
     * @tags manager
     * @name ManagerSellersProductsPricesList
     * @summary List product prices
     * @request GET:/manager/sellers/{seller_id}/products/{identifier}/prices/
     * @secure
     */
    managerSellersProductsPricesList: (
      {
        identifier,
        sellerId,
        ...query
      }: ManagerSellersProductsPricesListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsPricesListData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/prices/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsPricesCreate
     * @summary Create product price
     * @request POST:/manager/sellers/{seller_id}/products/{identifier}/prices/
     * @secure
     */
    managerSellersProductsPricesCreate: (
      identifier: string,
      sellerId: string,
      data: ManagerCreateProductPrice,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsPricesCreateData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/prices/`,
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
     * @tags manager
     * @name ManagerSellersProductsVariantsList
     * @summary List product variants
     * @request GET:/manager/sellers/{seller_id}/products/{identifier}/variants/
     * @secure
     */
    managerSellersProductsVariantsList: (
      {
        identifier,
        sellerId,
        ...query
      }: ManagerSellersProductsVariantsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsListData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/variants/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsVariantsCreate
     * @summary Create product variant
     * @request POST:/manager/sellers/{seller_id}/products/{identifier}/variants/
     * @secure
     */
    managerSellersProductsVariantsCreate: (
      identifier: string,
      sellerId: string,
      data: ManagerCreateProductVariant,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsCreateData, any>({
        path: `/manager/sellers/${sellerId}/products/${identifier}/variants/`,
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
     * @tags manager
     * @name ManagerSellersProductsCategoriesRetrieve
     * @summary Retrieve product category
     * @request GET:/manager/sellers/{seller_id}/products/{product_id}/categories/{category_id}/
     * @secure
     */
    managerSellersProductsCategoriesRetrieve: (
      categoryId: string,
      productId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsCategoriesRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/categories/${categoryId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsCategoriesDestroy
     * @summary Delete product category
     * @request DELETE:/manager/sellers/{seller_id}/products/{product_id}/categories/{category_id}/
     * @secure
     */
    managerSellersProductsCategoriesDestroy: (
      categoryId: string,
      productId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsCategoriesDestroyData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/categories/${categoryId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsImagesList
     * @summary List product image
     * @request GET:/manager/sellers/{seller_id}/products/{product_id}/images/
     * @secure
     */
    managerSellersProductsImagesList: (
      { productId, sellerId, ...query }: ManagerSellersProductsImagesListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsImagesListData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/images/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsImagesCreate
     * @summary Create product image
     * @request POST:/manager/sellers/{seller_id}/products/{product_id}/images/
     * @secure
     */
    managerSellersProductsImagesCreate: (
      productId: string,
      sellerId: string,
      data: ManagerListCreateProductImage,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsImagesCreateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/images/`,
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
     * @tags manager
     * @name ManagerSellersProductsImagesRetrieve
     * @summary Retrieve product image
     * @request GET:/manager/sellers/{seller_id}/products/{product_id}/images/{image_id}/
     * @secure
     */
    managerSellersProductsImagesRetrieve: (
      imageId: string,
      productId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsImagesRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/images/${imageId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsImagesUpdate
     * @summary Update product image
     * @request PUT:/manager/sellers/{seller_id}/products/{product_id}/images/{image_id}/
     * @secure
     */
    managerSellersProductsImagesUpdate: (
      imageId: string,
      productId: string,
      sellerId: string,
      data: ManagerGetUpdateProductImage,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsImagesUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/images/${imageId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsImagesPartialUpdate
     * @summary Partially update product image
     * @request PATCH:/manager/sellers/{seller_id}/products/{product_id}/images/{image_id}/
     * @secure
     */
    managerSellersProductsImagesPartialUpdate: (
      imageId: string,
      productId: string,
      sellerId: string,
      data: PatchedManagerGetUpdateProductImage,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsImagesPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/images/${imageId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsImagesDestroy
     * @summary Delete product image
     * @request DELETE:/manager/sellers/{seller_id}/products/{product_id}/images/{image_id}/
     * @secure
     */
    managerSellersProductsImagesDestroy: (
      imageId: string,
      productId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsImagesDestroyData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/images/${imageId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsOptionsRetrieve
     * @summary Retrieve product option
     * @request GET:/manager/sellers/{seller_id}/products/{product_id}/options/{option_id}/
     * @secure
     */
    managerSellersProductsOptionsRetrieve: (
      optionId: string,
      productId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsOptionsRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/options/${optionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsOptionsUpdate
     * @summary Update product option
     * @request PUT:/manager/sellers/{seller_id}/products/{product_id}/options/{option_id}/
     * @secure
     */
    managerSellersProductsOptionsUpdate: (
      optionId: string,
      productId: string,
      sellerId: string,
      data: ManagerUpdateProductOption,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsOptionsUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/options/${optionId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsOptionsPartialUpdate
     * @summary Partially update product option
     * @request PATCH:/manager/sellers/{seller_id}/products/{product_id}/options/{option_id}/
     * @secure
     */
    managerSellersProductsOptionsPartialUpdate: (
      optionId: string,
      productId: string,
      sellerId: string,
      data: PatchedManagerUpdateProductOption,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsOptionsPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/options/${optionId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsOptionsDestroy
     * @summary Delete product option
     * @request DELETE:/manager/sellers/{seller_id}/products/{product_id}/options/{option_id}/
     * @secure
     */
    managerSellersProductsOptionsDestroy: (
      optionId: string,
      productId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsOptionsDestroyData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/options/${optionId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsPricesRetrieve
     * @summary Retrieve product price
     * @request GET:/manager/sellers/{seller_id}/products/{product_id}/prices/{price_id}/
     * @secure
     */
    managerSellersProductsPricesRetrieve: (
      priceId: string,
      productId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsPricesRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/prices/${priceId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsPricesUpdate
     * @summary Update product price
     * @request PUT:/manager/sellers/{seller_id}/products/{product_id}/prices/{price_id}/
     * @secure
     */
    managerSellersProductsPricesUpdate: (
      priceId: string,
      productId: string,
      sellerId: string,
      data: ManagerUpdateProductPrice,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsPricesUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/prices/${priceId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsPricesPartialUpdate
     * @summary Partially update product price
     * @request PATCH:/manager/sellers/{seller_id}/products/{product_id}/prices/{price_id}/
     * @secure
     */
    managerSellersProductsPricesPartialUpdate: (
      priceId: string,
      productId: string,
      sellerId: string,
      data: PatchedManagerUpdateProductPrice,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsPricesPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/prices/${priceId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsPricesDestroy
     * @summary Delete product price
     * @request DELETE:/manager/sellers/{seller_id}/products/{product_id}/prices/{price_id}/
     * @secure
     */
    managerSellersProductsPricesDestroy: (
      priceId: string,
      productId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsPricesDestroyData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/prices/${priceId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsVariantsRetrieve
     * @summary Retrieve product variant
     * @request GET:/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/
     * @secure
     */
    managerSellersProductsVariantsRetrieve: (
      productId: string,
      sellerId: string,
      variantId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/variants/${variantId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsVariantsUpdate
     * @summary Update product variant
     * @request PUT:/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/
     * @secure
     */
    managerSellersProductsVariantsUpdate: (
      productId: string,
      sellerId: string,
      variantId: string,
      data: ManagerUpdateProductVariant,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/variants/${variantId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsVariantsPartialUpdate
     * @summary Partially update product variant
     * @request PATCH:/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/
     * @secure
     */
    managerSellersProductsVariantsPartialUpdate: (
      productId: string,
      sellerId: string,
      variantId: string,
      data: PatchedManagerUpdateProductVariant,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/variants/${variantId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsVariantsDestroy
     * @summary Delete product variant
     * @request DELETE:/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/
     * @secure
     */
    managerSellersProductsVariantsDestroy: (
      productId: string,
      sellerId: string,
      variantId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsDestroyData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/variants/${variantId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsVariantsPricesList
     * @summary List product variant prices
     * @request GET:/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/
     * @secure
     */
    managerSellersProductsVariantsPricesList: (
      {
        productId,
        sellerId,
        variantId,
        ...query
      }: ManagerSellersProductsVariantsPricesListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsPricesListData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/variants/${variantId}/prices/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsVariantsPricesCreate
     * @summary Create product variant price
     * @request POST:/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/
     * @secure
     */
    managerSellersProductsVariantsPricesCreate: (
      productId: string,
      sellerId: string,
      variantId: string,
      data: ManagerCreateProductVariantPrice,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsPricesCreateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/variants/${variantId}/prices/`,
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
     * @tags manager
     * @name ManagerSellersProductsVariantsPricesRetrieve
     * @summary Retrieve product variant price
     * @request GET:/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/{price_id}/
     * @secure
     */
    managerSellersProductsVariantsPricesRetrieve: (
      priceId: string,
      productId: string,
      sellerId: string,
      variantId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsPricesRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/variants/${variantId}/prices/${priceId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersProductsVariantsPricesUpdate
     * @summary Update product variant price
     * @request PUT:/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/{price_id}/
     * @secure
     */
    managerSellersProductsVariantsPricesUpdate: (
      priceId: string,
      productId: string,
      sellerId: string,
      variantId: string,
      data: ManagerUpdateProductVariantPrice,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsPricesUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/variants/${variantId}/prices/${priceId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsVariantsPricesPartialUpdate
     * @summary Partially update product variant price
     * @request PATCH:/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/{price_id}/
     * @secure
     */
    managerSellersProductsVariantsPricesPartialUpdate: (
      priceId: string,
      productId: string,
      sellerId: string,
      variantId: string,
      data: PatchedManagerUpdateProductVariantPrice,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsPricesPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/variants/${variantId}/prices/${priceId}/`,
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
     * @tags manager
     * @name ManagerSellersProductsVariantsPricesDestroy
     * @summary Delete product variant price
     * @request DELETE:/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/{price_id}/
     * @secure
     */
    managerSellersProductsVariantsPricesDestroy: (
      priceId: string,
      productId: string,
      sellerId: string,
      variantId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersProductsVariantsPricesDestroyData, any>({
        path: `/manager/sellers/${sellerId}/products/${productId}/variants/${variantId}/prices/${priceId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersRedemptionsList
     * @summary List redemptions
     * @request GET:/manager/sellers/{seller_id}/redemptions/
     * @secure
     */
    managerSellersRedemptionsList: (
      { sellerId, ...query }: ManagerSellersRedemptionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersRedemptionsListData, any>({
        path: `/manager/sellers/${sellerId}/redemptions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersRedemptionsCreate
     * @summary Create redemption
     * @request POST:/manager/sellers/{seller_id}/redemptions/
     * @secure
     */
    managerSellersRedemptionsCreate: (
      sellerId: string,
      data: ManagerCreateRedemption,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersRedemptionsCreateData, any>({
        path: `/manager/sellers/${sellerId}/redemptions/`,
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
     * @tags manager
     * @name ManagerSellersRedemptionsRetrieve
     * @summary Retrieve redemption
     * @request GET:/manager/sellers/{seller_id}/redemptions/{action_id}/
     * @secure
     */
    managerSellersRedemptionsRetrieve: (
      actionId: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersRedemptionsRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/redemptions/${actionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersVoucherImportsList
     * @summary List voucher imports
     * @request GET:/manager/sellers/{seller_id}/voucher-imports/
     * @secure
     */
    managerSellersVoucherImportsList: (
      { sellerId, ...query }: ManagerSellersVoucherImportsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVoucherImportsListData, any>({
        path: `/manager/sellers/${sellerId}/voucher-imports/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersVoucherImportsCreate
     * @summary Create voucher import
     * @request POST:/manager/sellers/{seller_id}/voucher-imports/
     * @secure
     */
    managerSellersVoucherImportsCreate: (
      sellerId: string,
      data: ManagerCreateVoucherImport,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVoucherImportsCreateData, any>({
        path: `/manager/sellers/${sellerId}/voucher-imports/`,
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
     * @tags manager
     * @name ManagerSellersVoucherImportsRetrieve
     * @summary Retrieve voucher import
     * @request GET:/manager/sellers/{seller_id}/voucher-imports/{identifier}/
     * @secure
     */
    managerSellersVoucherImportsRetrieve: (
      identifier: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVoucherImportsRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/voucher-imports/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersVoucherImportCreate
     * @summary Import vouchers
     * @request POST:/manager/sellers/{seller_id}/voucher/import/
     * @secure
     */
    managerSellersVoucherImportCreate: (
      sellerId: string,
      data: ManagerImportVoucher,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVoucherImportCreateData, any>({
        path: `/manager/sellers/${sellerId}/voucher/import/`,
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
     * @tags manager
     * @name ManagerSellersVouchersList
     * @summary List vouchers
     * @request GET:/manager/sellers/{seller_id}/vouchers/
     * @secure
     */
    managerSellersVouchersList: (
      { sellerId, ...query }: ManagerSellersVouchersListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVouchersListData, any>({
        path: `/manager/sellers/${sellerId}/vouchers/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersVouchersCreate
     * @summary Create voucher
     * @request POST:/manager/sellers/{seller_id}/vouchers/
     * @secure
     */
    managerSellersVouchersCreate: (
      sellerId: string,
      data: ManagerCreateVoucher,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVouchersCreateData, any>({
        path: `/manager/sellers/${sellerId}/vouchers/`,
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
     * @tags manager
     * @name ManagerSellersVouchersRetrieve
     * @summary Retrieve voucher
     * @request GET:/manager/sellers/{seller_id}/vouchers/{identifier}/
     * @secure
     */
    managerSellersVouchersRetrieve: (
      identifier: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVouchersRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/vouchers/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersVouchersUpdate
     * @summary Update voucher
     * @request PUT:/manager/sellers/{seller_id}/vouchers/{identifier}/
     * @secure
     */
    managerSellersVouchersUpdate: (
      identifier: string,
      sellerId: string,
      data: ManagerUpdateVoucher,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVouchersUpdateData, any>({
        path: `/manager/sellers/${sellerId}/vouchers/${identifier}/`,
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
     * @tags manager
     * @name ManagerSellersVouchersPartialUpdate
     * @summary Partially update voucher
     * @request PATCH:/manager/sellers/{seller_id}/vouchers/{identifier}/
     * @secure
     */
    managerSellersVouchersPartialUpdate: (
      identifier: string,
      sellerId: string,
      data: PatchedManagerUpdateVoucher,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVouchersPartialUpdateData, any>({
        path: `/manager/sellers/${sellerId}/vouchers/${identifier}/`,
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
     * @tags manager
     * @name ManagerSellersVouchersDestroy
     * @summary Delete voucher
     * @request DELETE:/manager/sellers/{seller_id}/vouchers/{identifier}/
     * @secure
     */
    managerSellersVouchersDestroy: (
      identifier: string,
      sellerId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVouchersDestroyData, any>({
        path: `/manager/sellers/${sellerId}/vouchers/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersVouchersActionsList
     * @summary List voucher actions
     * @request GET:/manager/sellers/{seller_id}/vouchers/{voucher_id}/actions/
     * @secure
     */
    managerSellersVouchersActionsList: (
      {
        sellerId,
        voucherId,
        ...query
      }: ManagerSellersVouchersActionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVouchersActionsListData, any>({
        path: `/manager/sellers/${sellerId}/vouchers/${voucherId}/actions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersVouchersActionsRetrieve
     * @summary Retrieve voucher actions
     * @request GET:/manager/sellers/{seller_id}/vouchers/{voucher_id}/actions/{action_id}/
     * @secure
     */
    managerSellersVouchersActionsRetrieve: (
      actionId: string,
      sellerId: string,
      voucherId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVouchersActionsRetrieveData, any>({
        path: `/manager/sellers/${sellerId}/vouchers/${voucherId}/actions/${actionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerSellersVouchersQueryCreate
     * @summary Query voucher
     * @request POST:/manager/sellers/{seller_id}/vouchers/query/
     * @secure
     */
    managerSellersVouchersQueryCreate: (
      sellerId: string,
      data: ManagerQueryVoucher,
      params: RequestParams = {},
    ) =>
      this.request<ManagerSellersVouchersQueryCreateData, any>({
        path: `/manager/sellers/${sellerId}/vouchers/query/`,
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
     * @name UserCategoriesList
     * @summary List categories
     * @request GET:/user/categories/
     * @secure
     */
    userCategoriesList: (
      query: UserCategoriesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserCategoriesListData, any>({
        path: `/user/categories/`,
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
     * @name UserCategoriesRetrieve
     * @summary Retrieve category
     * @request GET:/user/categories/{identifier}/
     * @secure
     */
    userCategoriesRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UserCategoriesRetrieveData, any>({
        path: `/user/categories/${identifier}/`,
        method: "GET",
        secure: true,
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
     * @name UserOrdersList
     * @summary List orders
     * @request GET:/user/orders/
     * @secure
     */
    userOrdersList: (query: UserOrdersListParams, params: RequestParams = {}) =>
      this.request<UserOrdersListData, any>({
        path: `/user/orders/`,
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
     * @name UserOrdersCreate
     * @summary Create order
     * @request POST:/user/orders/
     * @secure
     */
    userOrdersCreate: (data: UserCreateOrder, params: RequestParams = {}) =>
      this.request<UserOrdersCreateData, any>({
        path: `/user/orders/`,
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
     * @name UserOrdersRetrieve
     * @summary Retrieve order
     * @request GET:/user/orders/{identifier}/
     * @secure
     */
    userOrdersRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UserOrdersRetrieveData, any>({
        path: `/user/orders/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserOrdersUpdate
     * @summary Update order
     * @request PUT:/user/orders/{identifier}/
     * @secure
     */
    userOrdersUpdate: (
      identifier: string,
      data: UserUpdateOrder,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersUpdateData, any>({
        path: `/user/orders/${identifier}/`,
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
     * @name UserOrdersPartialUpdate
     * @summary Partially update order
     * @request PATCH:/user/orders/{identifier}/
     * @secure
     */
    userOrdersPartialUpdate: (
      identifier: string,
      data: PatchedUserUpdateOrder,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersPartialUpdateData, any>({
        path: `/user/orders/${identifier}/`,
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
     * @name UserOrdersDestroy
     * @summary Delete order
     * @request DELETE:/user/orders/{identifier}/
     * @secure
     */
    userOrdersDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<UserOrdersDestroyData, any>({
        path: `/user/orders/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserOrdersItemsList
     * @summary List order items
     * @request GET:/user/orders/{identifier}/items/
     * @secure
     */
    userOrdersItemsList: (
      { identifier, ...query }: UserOrdersItemsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersItemsListData, any>({
        path: `/user/orders/${identifier}/items/`,
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
     * @name UserOrdersItemsCreate
     * @summary Create order item
     * @request POST:/user/orders/{identifier}/items/
     * @secure
     */
    userOrdersItemsCreate: (
      identifier: string,
      data: UserCreateOrderItem,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersItemsCreateData, any>({
        path: `/user/orders/${identifier}/items/`,
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
     * @name UserOrdersPaymentsList
     * @summary List payments
     * @request GET:/user/orders/{identifier}/payments/
     * @secure
     */
    userOrdersPaymentsList: (
      { identifier, ...query }: UserOrdersPaymentsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersPaymentsListData, any>({
        path: `/user/orders/${identifier}/payments/`,
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
     * @name UserOrdersPaymentsCreate
     * @summary Create payment
     * @request POST:/user/orders/{identifier}/payments/
     * @secure
     */
    userOrdersPaymentsCreate: (
      identifier: string,
      data: CreatePayment,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersPaymentsCreateData, any>({
        path: `/user/orders/${identifier}/payments/`,
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
     * @name UserOrdersRefundsList
     * @summary List refunds
     * @request GET:/user/orders/{identifier}/refunds/
     * @secure
     */
    userOrdersRefundsList: (
      { identifier, ...query }: UserOrdersRefundsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersRefundsListData, any>({
        path: `/user/orders/${identifier}/refunds/`,
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
     * @name UserOrdersItemsRetrieve
     * @summary Retrieve order item
     * @request GET:/user/orders/{order_id}/items/{item_id}/
     * @secure
     */
    userOrdersItemsRetrieve: (
      itemId: string,
      orderId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersItemsRetrieveData, any>({
        path: `/user/orders/${orderId}/items/${itemId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserOrdersItemsUpdate
     * @summary Update order item
     * @request PUT:/user/orders/{order_id}/items/{item_id}/
     * @secure
     */
    userOrdersItemsUpdate: (
      itemId: string,
      orderId: string,
      data: UserUpdateOrderItem,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersItemsUpdateData, any>({
        path: `/user/orders/${orderId}/items/${itemId}/`,
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
     * @name UserOrdersItemsPartialUpdate
     * @summary Partially update order item
     * @request PATCH:/user/orders/{order_id}/items/{item_id}/
     * @secure
     */
    userOrdersItemsPartialUpdate: (
      itemId: string,
      orderId: string,
      data: PatchedUserUpdateOrderItem,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersItemsPartialUpdateData, any>({
        path: `/user/orders/${orderId}/items/${itemId}/`,
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
     * @name UserOrdersItemsDestroy
     * @summary Delete order item
     * @request DELETE:/user/orders/{order_id}/items/{item_id}/
     * @secure
     */
    userOrdersItemsDestroy: (
      itemId: string,
      orderId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersItemsDestroyData, any>({
        path: `/user/orders/${orderId}/items/${itemId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserOrdersPaymentsRetrieve
     * @summary Retrieve payment
     * @request GET:/user/orders/{order_id}/payments/{payment_id}/
     * @secure
     */
    userOrdersPaymentsRetrieve: (
      orderId: string,
      paymentId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersPaymentsRetrieveData, any>({
        path: `/user/orders/${orderId}/payments/${paymentId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserOrdersRefundsRetrieve
     * @summary Retrieve refund
     * @request GET:/user/orders/{order_id}/refunds/{refund_id}/
     * @secure
     */
    userOrdersRefundsRetrieve: (
      orderId: string,
      refundId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserOrdersRefundsRetrieveData, any>({
        path: `/user/orders/${orderId}/refunds/${refundId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserProductsList
     * @summary List products
     * @request GET:/user/products/
     * @secure
     */
    userProductsList: (
      query: UserProductsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserProductsListData, any>({
        path: `/user/products/`,
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
     * @name UserProductsRetrieve
     * @summary Retrieve product
     * @request GET:/user/products/{identifier}/
     * @secure
     */
    userProductsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UserProductsRetrieveData, any>({
        path: `/user/products/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserProductsPricesList
     * @summary List product price
     * @request GET:/user/products/{identifier}/prices/
     * @secure
     */
    userProductsPricesList: (
      { identifier, ...query }: UserProductsPricesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserProductsPricesListData, any>({
        path: `/user/products/${identifier}/prices/`,
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
     * @name UserProductsVariantsList
     * @summary List product variants
     * @request GET:/user/products/{identifier}/variants/
     * @secure
     */
    userProductsVariantsList: (
      { identifier, ...query }: UserProductsVariantsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserProductsVariantsListData, any>({
        path: `/user/products/${identifier}/variants/`,
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
     * @name UserProductsImagesList
     * @summary List product images
     * @request GET:/user/products/{product_id}/images/
     * @secure
     */
    userProductsImagesList: (
      { productId, ...query }: UserProductsImagesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserProductsImagesListData, any>({
        path: `/user/products/${productId}/images/`,
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
     * @name UserProductsImagesRetrieve
     * @summary Retrieve product image
     * @request GET:/user/products/{product_id}/images/{image_id}/
     * @secure
     */
    userProductsImagesRetrieve: (
      imageId: string,
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserProductsImagesRetrieveData, any>({
        path: `/user/products/${productId}/images/${imageId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserProductsPricesRetrieve
     * @summary Retrieve product price
     * @request GET:/user/products/{product_id}/prices/{price_id}/
     * @secure
     */
    userProductsPricesRetrieve: (
      priceId: string,
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserProductsPricesRetrieveData, any>({
        path: `/user/products/${productId}/prices/${priceId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserProductsVariantsRetrieve
     * @summary Retrieve product variant
     * @request GET:/user/products/{product_id}/variants/{variant_id}/
     * @secure
     */
    userProductsVariantsRetrieve: (
      productId: string,
      variantId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserProductsVariantsRetrieveData, any>({
        path: `/user/products/${productId}/variants/${variantId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserRedemptionsList
     * @summary List redemptions
     * @request GET:/user/redemptions/
     * @secure
     */
    userRedemptionsList: (
      query: UserRedemptionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserRedemptionsListData, any>({
        path: `/user/redemptions/`,
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
     * @name UserRedemptionsCreate
     * @summary Create redemption
     * @request POST:/user/redemptions/
     * @secure
     */
    userRedemptionsCreate: (
      data: UserCreateRedemption,
      params: RequestParams = {},
    ) =>
      this.request<UserRedemptionsCreateData, any>({
        path: `/user/redemptions/`,
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
     * @name UserRedemptionsRetrieve
     * @summary Retrieve redemption
     * @request GET:/user/redemptions/{action_id}/
     * @secure
     */
    userRedemptionsRetrieve: (actionId: string, params: RequestParams = {}) =>
      this.request<UserRedemptionsRetrieveData, any>({
        path: `/user/redemptions/${actionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserSellersList
     * @summary List sellers
     * @request GET:/user/sellers/
     * @secure
     */
    userSellersList: (
      query: UserSellersListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserSellersListData, any>({
        path: `/user/sellers/`,
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
     * @name UserSellersRetrieve
     * @summary Retrieve seller
     * @request GET:/user/sellers/{seller_id}/
     * @secure
     */
    userSellersRetrieve: (sellerId: string, params: RequestParams = {}) =>
      this.request<UserSellersRetrieveData, any>({
        path: `/user/sellers/${sellerId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserVouchersList
     * @summary List vouchers
     * @request GET:/user/vouchers/
     * @secure
     */
    userVouchersList: (
      query: UserVouchersListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserVouchersListData, any>({
        path: `/user/vouchers/`,
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
     * @name UserVouchersRetrieve
     * @summary Retrieve voucher
     * @request GET:/user/vouchers/{identifier}/
     * @secure
     */
    userVouchersRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UserVouchersRetrieveData, any>({
        path: `/user/vouchers/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserVouchersActionsList
     * @summary List voucher actions
     * @request GET:/user/vouchers/{identifier}/actions/
     * @secure
     */
    userVouchersActionsList: (
      { identifier, ...query }: UserVouchersActionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserVouchersActionsListData, any>({
        path: `/user/vouchers/${identifier}/actions/`,
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
     * @name UserVouchersActionsRetrieve
     * @summary Retrieve voucher action
     * @request GET:/user/vouchers/{voucher_id}/actions/{action_id}/
     * @secure
     */
    userVouchersActionsRetrieve: (
      actionId: string,
      voucherId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserVouchersActionsRetrieveData, any>({
        path: `/user/vouchers/${voucherId}/actions/${actionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserVouchersQueryCreate
     * @summary Query voucher
     * @request POST:/user/vouchers/query/
     * @secure
     */
    userVouchersQueryCreate: (
      data: UserQueryVoucher,
      params: RequestParams = {},
    ) =>
      this.request<UserVouchersQueryCreateData, any>({
        path: `/user/vouchers/query/`,
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
