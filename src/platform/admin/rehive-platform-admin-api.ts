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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AccountAsset {
  id: string;
  balance: number;
  available_balance: number;
  account: ReducedAccount;
  currency: ReducedAsset;
  metadata: Record<string, any>;
  active: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AccountAssetLimit {
  id: number;
  /** Convert the Limit value from Decimal to int based on asset divisibility */
  value: number;
  /**
   * * `max` - Maximum
   * * `day_max` - Maximum per day
   * * `month_max` - Maximum per month
   * * `min` - Minimum
   * * `overdraft` - Overdraft
   */
  type: "max" | "day_max" | "month_max" | "min" | "overdraft";
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string;
  created: number;
  updated: number;
}

export interface AccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AccountAsset;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AccountAssetSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: ReducedTransactionSubtype[];
}

export interface AccountAssetSettingsResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AccountAssetSettings;
}

/** This serializer can be used if only a `status` is required in the response. */
export interface ActionResponse {
  status: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAccessControlRule {
  id: number;
  /**
   * * `allow` - Allow
   * * `deny` - Deny
   */
  action: "allow" | "deny";
  /** * `ip` - Ip */
  type: "ip";
  /** @maxLength 100 */
  value: string;
  /** @maxLength 50 */
  label?: string | null;
  /**
   * A condensed user serializer showing only the necessary user information
   * in order to identifiy the user.
   */
  user?: ReducedUserInfo;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  group?: AdminReducedGroup;
  created: number;
  updated: number;
}

export interface AdminAccessControlRuleResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminAccessControlRule;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAccount {
  reference: string;
  /**
   * @maxLength 200
   * @default "default"
   */
  name?: string;
  definition: string | null;
  /** @maxLength 200 */
  label?: string | null;
  primary?: boolean;
  recon?: boolean;
  user: ReducedUserInfo;
  currencies: AdminReducedAccountAccountAsset[];
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAccountAccountAsset {
  id: string;
  balance: number;
  available_balance: number;
  currency: ReducedAsset;
  limits: AccountAssetLimit[];
  fees: AdminAccountAssetFee[];
  metadata?: Record<string, any>;
  active: boolean;
  settings: AccountAssetSettings;
  subtypes: TransactionSubtype[];
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminAccountAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminAccountAccountAsset;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAccountAccountAssetSettingsUpdate {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: number[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAccountAsset {
  id: string;
  balance: number;
  available_balance: number;
  currency: ReducedAsset;
  account: ReducedAccount;
  /**
   * A condensed user serializer showing only the necessary user information
   * in order to identifiy the user.
   */
  user: ReducedUserInfo;
  metadata: Record<string, any>;
  active: boolean;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminAccountAssetFee {
  id: number;
  name: string | null;
  description: string | null;
  /** Convert the Fee value from Decimal to int based on asset divisibility */
  value: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string | null;
  created: number;
  updated: number;
  account: string;
  asset: string;
  debit_account: string | null;
  credit_account: string | null;
  debit_subtype: string | null;
  credit_subtype: string | null;
  inferred: boolean | null;
  archived: boolean | null;
}

export type AdminAccountAssetFeeList = AdminAccountAssetFee[];

export interface AdminAccountAssetFeeListResponse {
  status: string;
  data: AdminAccountAssetFeeList;
}

export interface AdminAccountAssetFeeResponse {
  status: string;
  data: AdminAccountAssetFee;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAccountAssetLimit {
  id: number;
  /** Convert the Limit value from Decimal to int based on asset divisibility */
  value: number;
  /**
   * * `max` - Maximum
   * * `day_max` - Maximum per day
   * * `month_max` - Maximum per month
   * * `min` - Minimum
   * * `overdraft` - Overdraft
   */
  type: "max" | "day_max" | "month_max" | "min" | "overdraft";
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string;
  created: number;
  updated: number;
}

export interface AdminAccountAssetLimitResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminAccountAssetLimit;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAccountDefinition {
  /** @maxLength 200 */
  name: string;
  /** @maxLength 200 */
  label?: string | null;
  recon?: boolean;
  groups: AdminAccountDefinitionGroup[];
  archived?: boolean;
  updated: number;
  created: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAccountDefinitionGroup {
  group: ReducedGroup;
  default: boolean;
  primary: boolean;
  currencies: AdminAccountDefinitionGroupAsset[];
  archived: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAccountDefinitionGroupAsset {
  currency: ReducedAsset;
  archived: boolean;
  created: number;
  updated: number;
}

export interface AdminAccountDefinitionGroupAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminAccountDefinitionGroupAsset;
}

export interface AdminAccountDefinitionGroupResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminAccountDefinitionGroup;
}

export interface AdminAccountDefinitionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminAccountDefinition;
}

export interface AdminAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminAccount;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAppendTransactionCollectionMultiTransaction {
  transactions: AdminAppendTransactionCollectionTransaction[];
}

/**
 * This removed the status so that when appending to an existing collection
 * the status cannot be set manually.
 */
export interface AdminAppendTransactionCollectionTransaction {
  /** @maxLength 64 */
  id?: string;
  /** @maxLength 64 */
  parent?: string;
  /** @maxLength 64 */
  partner?: string;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  amount: number;
  currency: string;
  account?: string | null;
  subtype?: string | null;
  /** @maxLength 100 */
  reference?: string | null;
  /**
   * @maxLength 100
   * @default ""
   */
  note?: string;
  metadata?: Record<string, any>;
  user?: string;
  /** @default false */
  inclusive?: boolean;
  /** @min 0 */
  expires?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAsset {
  code: string | null;
  /** @maxLength 30 */
  display_code?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxLength 30 */
  symbol?: string | null;
  /** @maxLength 30 */
  unit?: string | null;
  divisibility: number;
  /** @format uri */
  icon?: string | null;
  manager: ManagerUser | null;
  /** @maxItems 20 */
  manager_conditions?: Record<string, any>[] | null;
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminAsset;
}

export interface AdminAuthToken {
  token_key: string;
  user: ReducedUserInfo;
  expires: number;
  created: number;
}

export interface AdminAuthTokenResponse {
  status: string;
  data: AdminAuthToken;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminAuthenticatorRule {
  id: number;
  /**
   * * `authentication` - Authentication
   * * `authorization` - Authorization
   * * `setup` - Setup
   */
  type: "authentication" | "authorization" | "setup";
  /**
   * * `ephemeral` - Ephemeral
   * * `durable` - Durable
   * * `permanent` - Permanent
   */
  durability: "ephemeral" | "durable" | "permanent";
  authenticator_types: ("totp" | "sms" | "static")[];
  permissions: Permission[];
  group: ReducedGroup;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  duration?: number | null;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  session_age?: number | null;
  created: number;
  updated: number;
}

export interface AdminAuthenticatorRuleResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminAuthenticatorRule;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompany {
  id: string;
  /** @maxLength 100 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  website?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  support_website?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  documentation_website?: string | null;
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
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  country?:
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
    | ""
    | null;
  /** @format uri */
  logo?: string | null;
  /** @format uri */
  icon?: string | null;
  address: AdminCompanyAddress;
  settings: CompanySettings;
  services: ReducedService[];
  public?: boolean;
  metadata?: Record<string, any>;
  /**
   * * `test` - Test
   * * `production` - Production
   */
  mode: "test" | "production";
  /**
   * * `pending` - Pending
   * * `active` - Active
   * * `restricted` - Restricted
   * * `suspended` - Suspended
   */
  status?: "pending" | "active" | "restricted" | "suspended";
  created: number;
  updated: number;
  /** @format email */
  system_email: string;
  owner: ReducedUserInfo;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompanyAddress {
  /** @maxLength 200 */
  line_1?: string | null;
  /** @maxLength 200 */
  line_2?: string | null;
  /** @maxLength 100 */
  city?: string | null;
  /** @maxLength 100 */
  state_province?: string | null;
  country?: string | null;
  /** @maxLength 10 */
  postal_code?: string | null;
}

export interface AdminCompanyAddressResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCompanyAddress;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompanyBankAccount {
  id: number;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 200 */
  number?: string | null;
  /** @maxLength 200 */
  type?: string | null;
  /** @maxLength 200 */
  bank_name?: string | null;
  /** @maxLength 50 */
  bank_code?: string | null;
  /** @maxLength 3 */
  bank_currency?: string | null;
  /** @maxLength 50 */
  branch_code?: string | null;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  branch_address?: CompanyBankBranchAddress;
  /** @maxLength 50 */
  routing_number?: string | null;
  /** @maxLength 16 */
  swift?: string | null;
  /** @maxLength 50 */
  iban?: string | null;
  /** @maxLength 16 */
  bic?: string | null;
  metadata?: Record<string, any>;
  currencies: ReducedAsset[];
  /** @default false */
  archived?: boolean;
  /** * `deposit` - Deposit */
  action?: "deposit" | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompanyBankAccountAsset {
  /** @maxLength 30 */
  code?: string | null;
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
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminCompanyBankAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCompanyBankAccountAsset;
}

export interface AdminCompanyBankAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCompanyBankAccount;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompanyLink {
  id: number;
  key: string | null;
  counterparty: AdminCompanyLinkCounterparty;
  /**
   * * `pending` - Pending
   * * `complete` - Complete
   */
  status: "pending" | "complete";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompanyLinkCounterparty {
  company: ReducedCompany;
  /**
   * * `pending` - Pending
   * * `complete` - Complete
   */
  status: "pending" | "complete";
}

export interface AdminCompanyLinkResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCompanyLink;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompanySettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: CompanyDisallowedTransactionSubtype[];
  require_transaction_subtypes?: boolean;
  require_verification?: boolean;
  allow_registrations?: boolean;
  allow_overdrafts?: boolean;
  allow_session_durations?: boolean;
  require_registration?: boolean;
  /**
   * @min 300
   * @max 2678400
   */
  default_session_duration?: number;
  /**
   * @min 300
   * @max 2678400
   */
  default_transaction_lifespan?: number;
  require_terms_and_conditions?: boolean;
  require_privacy_policy?: boolean;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  account_reference_length?: number;
  /** @format uri */
  password_reset_url?: string | null;
  /** @format uri */
  password_set_url?: string | null;
  /** @format uri */
  email_verification_url?: string | null;
  /** @format uri */
  deactivate_verification_url?: string | null;
  /** @format uri */
  request_delete_verification_url?: string | null;
  /** @format uri */
  terms_and_conditions_url?: string | null;
  /** @format uri */
  privacy_policy_url?: string | null;
  /** @maxItems 249 */
  nationalities: (
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
  /** @maxItems 249 */
  residencies: (
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
}

export interface AdminCompanySettingsResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCompanySettings;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompanyWalletAccount {
  id: number;
  /** @maxLength 200 */
  username?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** @maxLength 24 */
  mobile?: string | null;
  /** @maxLength 50 */
  name?: string | null;
  /**
   * * `paypal` - Paypal
   * * `venmo` - Venmo
   * * `other` - Other
   */
  type?: "paypal" | "venmo" | "other";
  metadata?: Record<string, any>;
  currencies: ReducedAsset[];
  /** * `deposit` - Deposit */
  action?: "deposit" | null;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompanyWalletAccountAsset {
  /** @maxLength 30 */
  code?: string | null;
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
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminCompanyWalletAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCompanyWalletAccountAsset;
}

export interface AdminCompanyWalletAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCompanyWalletAccount;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateAccessControlRule {
  id: number;
  /**
   * * `allow` - Allow
   * * `deny` - Deny
   */
  action: "allow" | "deny";
  /** * `ip` - Ip */
  type: "ip";
  /** @maxLength 100 */
  value: string;
  /** @maxLength 50 */
  label?: string | null;
  user?: string | null;
  group?: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateAccount {
  /** @maxLength 50 */
  reference?: string | null;
  /**
   * @maxLength 200
   * @default "default"
   */
  name?: string;
  definition: string | null;
  /** @maxLength 200 */
  label?: string | null;
  primary?: boolean;
  recon?: boolean;
  user?: string | null;
  currencies: AdminAccountAccountAsset[];
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminCreateAccountAccountAsset {
  currency: string;
  active?: boolean;
  metadata?: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateAccountAccountAssetFee {
  /** @maxLength 50 */
  name?: string | null;
  /** @min 0 */
  value?: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  debit_account?: string | null;
  credit_account?: string | null;
  debit_subtype?: string | null;
  credit_subtype?: string | null;
  inferred?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateAccountAccountAssetLimit {
  /** @min 0 */
  value: number;
  /**
   * * `max` - Maximum
   * * `day_max` - Maximum per day
   * * `month_max` - Maximum per month
   * * `min` - Minimum
   * * `overdraft` - Overdraft
   */
  type: "max" | "day_max" | "month_max" | "min" | "overdraft";
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateAccountDefinitionGroup {
  group: string;
  default?: boolean;
  primary?: boolean;
  currencies?: string[];
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateAccountDefinitionGroupAsset {
  currency: string;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateAsset {
  /** @maxLength 30 */
  code?: string | null;
  /** @maxLength 30 */
  display_code?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxLength 30 */
  symbol?: string | null;
  /** @maxLength 30 */
  unit?: string | null;
  /**
   * @min 0
   * @max 18
   */
  divisibility: number;
  /** @format uri */
  icon?: string | null;
  manager?: string | null;
  manager_conditions?: Record<string, any>[] | null;
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateAuthToken {
  /** @min 0 */
  duration?: number | null;
  user: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateAuthenticatorRule {
  id: number;
  /**
   * * `authentication` - Authentication
   * * `authorization` - Authorization
   * * `setup` - Setup
   */
  type: "authentication" | "authorization" | "setup";
  /**
   * * `ephemeral` - Ephemeral
   * * `durable` - Durable
   * * `permanent` - Permanent
   */
  durability: "ephemeral" | "durable" | "permanent";
  authenticator_types: ("totp" | "sms" | "static")[];
  permissions?: (string | null)[];
  group?: string;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  duration?: number | null;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  session_age?: number | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateCompanyBankAccountAsset {
  currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateCompanyLink {
  id: number;
  key?: string;
  company?: string;
  /**
   * * `pending` - Pending
   * * `complete` - Complete
   */
  status: "pending" | "complete";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateCompanyWalletAccountAsset {
  currency: string;
}

/**
 * A mixin that handles the application of permissions to properties on a
 * serializer using the built-in permissions system.
 *
 * NOTE : This only works if the following conditions are met:
 *     - The request context must contain a user.
 *     - The class this mixin is attached must be a serializer.
 *     - The class this mixin is attached to must have a Meta.model defined.
 *     - The Meta.model class must have a PERMISSION_TYPE defined.
 */
export interface AdminCreateCreditTransaction {
  /** @maxLength 64 */
  id?: string;
  amount: number;
  currency: string;
  account?: string | null;
  subtype?: string | null;
  /** @maxLength 100 */
  reference?: string | null;
  /**
   * @maxLength 100
   * @default ""
   */
  note?: string;
  metadata?: Record<string, any>;
  user?: string;
  /** @default false */
  inclusive?: boolean;
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   * @default "Pending"
   */
  status?: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  fees?: AdminCreateTransactionFee[];
  /** @min 0 */
  expires?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateCryptoAccount {
  id: number;
  /** @maxLength 250 */
  address: string;
  /** @maxLength 50 */
  name?: string | null;
  code: string | null;
  /**
   * * `bitcoin` - Bitcoin
   * * `ethereum` - Ethereum
   * * `stellar` - Stellar
   * * `other` - Other
   */
  crypto_type?: "bitcoin" | "ethereum" | "stellar" | "other";
  /**
   * * `testnet` - Testnet
   * * `mainnet` - Mainnet
   * @default "testnet"
   */
  network?: "testnet" | "mainnet";
  metadata?: Record<string, any>;
  user: string;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  currencies: ReducedAsset[];
  account_currencies: ReducedAccountAsset[];
  /** @default false */
  archived?: boolean;
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   * @default "withdraw"
   */
  action?: "withdraw" | "deposit" | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateCryptoAccountAccountAsset {
  account_currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateCryptoAccountAsset {
  currency: string;
}

/**
 * A mixin that handles the application of permissions to properties on a
 * serializer using the built-in permissions system.
 *
 * NOTE : This only works if the following conditions are met:
 *     - The request context must contain a user.
 *     - The class this mixin is attached must be a serializer.
 *     - The class this mixin is attached to must have a Meta.model defined.
 *     - The Meta.model class must have a PERMISSION_TYPE defined.
 */
export interface AdminCreateDebitTransaction {
  /** @maxLength 64 */
  id?: string;
  amount: number;
  currency: string;
  account?: string | null;
  subtype?: string | null;
  /** @maxLength 100 */
  reference?: string | null;
  /**
   * @maxLength 100
   * @default ""
   */
  note?: string;
  metadata?: Record<string, any>;
  user?: string;
  /** @default false */
  inclusive?: boolean;
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   * @default "Pending"
   */
  status?: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  fees?: AdminCreateTransactionFee[];
  /** @min 0 */
  expires?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateDevice {
  user: string;
  id: number;
  /** @maxLength 64 */
  imei: string;
  /** @maxLength 30 */
  name?: string | null;
  apps: DeviceApp[];
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateDeviceApp {
  id: number;
  /** @maxLength 30 */
  name?: string | null;
  /** * `expo` - Expo */
  type: "expo";
  /** @maxLength 100 */
  token?: string | null;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateEmail {
  user: string;
  id: number;
  /**
   * @format email
   * @maxLength 254
   */
  email: string;
  primary?: boolean;
  verified?: boolean;
  /** @default false */
  temporary: boolean | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateExport {
  /**
   * * `account` - Account
   * * `account_currency` - Account_Currency
   * * `transaction` - Transaction
   * * `user` - User
   */
  resource: "account" | "account_currency" | "transaction" | "user";
  page_size?: number | null;
  query?: Record<string, any>;
  /**
   * * `json` - JSON
   * * `csv` - CSV
   */
  file_format?: "json" | "csv";
  user?: string;
  /**
   * * `admin` - Admin
   * * `user` - User
   */
  section: "admin" | "user";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateGroup {
  /** @maxLength 80 */
  name: string;
  /** @maxLength 80 */
  label?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @format uri */
  icon?: string | null;
  /**
   * * `admin` - Admin
   * * `user` - User
   */
  section?: "admin" | "user";
  default?: boolean;
  public?: boolean;
  listed?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateGroupFee {
  /** @maxLength 50 */
  name?: string | null;
  /** @min 0 */
  value?: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  debit_account?: string | null;
  credit_account?: string | null;
  debit_subtype?: string | null;
  credit_subtype?: string | null;
  inferred?: boolean;
  account_definition?: string | null;
  currency: string;
}

export interface AdminCreateGroupPermission {
  /**
   * * `admin` - Admin
   * * `user` - User
   */
  section: "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level: "view" | "add" | "change" | "delete";
  properties?: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateGroupTierFee {
  /** @maxLength 50 */
  name?: string | null;
  /** @min 0 */
  value?: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  debit_account?: string | null;
  credit_account?: string | null;
  debit_subtype?: string | null;
  credit_subtype?: string | null;
  inferred?: boolean;
  account_definition?: string | null;
  currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateGroupTierLimit {
  /** @min 0 */
  value: number;
  /**
   * * `max` - Maximum
   * * `day_max` - Maximum per day
   * * `month_max` - Maximum per month
   * * `min` - Minimum
   * * `overdraft` - Overdraft
   */
  type: "max" | "day_max" | "month_max" | "min" | "overdraft";
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype?: string | null;
  currency: string;
  account_definition?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateMetric {
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 50 */
  slug?: string | null;
  /**
   * * `account_count` - Account Count
   * * `transaction_count` - Transaction Count
   * * `transaction_complete_count` - Transaction Complete Count
   * * `transaction_failed_count` - Transaction Failed Count
   * * `transaction_pending_count` - Transaction Pending Count
   * * `transaction_complete_sum` - Transaction Complete Sum
   * * `transaction_failed_sum` - Transaction Failed Sum
   * * `transaction_pending_sum` - Transaction Pending Sum
   * * `transaction_balance_sum` - Transaction Balance Sum
   * * `transaction_available_balance_sum` - Transaction Available Balance Sum
   * * `user_count` - User Count
   * * `user_active_count` - User Active Count
   * * `user_transacted_in_30days_count` - User Transacted In 30Days Count
   */
  type:
    | "account_count"
    | "transaction_count"
    | "transaction_complete_count"
    | "transaction_failed_count"
    | "transaction_pending_count"
    | "transaction_complete_sum"
    | "transaction_failed_sum"
    | "transaction_pending_sum"
    | "transaction_balance_sum"
    | "transaction_available_balance_sum"
    | "user_count"
    | "user_active_count"
    | "user_transacted_in_30days_count";
  /**
   * * `accumulate` - Accumulate
   * * `set` - Set
   */
  method?: "accumulate" | "set";
  currency?: string;
  timezone: string;
  query?: Record<string, any>;
  metadata?: Record<string, any>;
  user?: string;
  /**
   * * `admin` - Admin
   * * `user` - User
   */
  section: "admin" | "user";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateMobile {
  user: string;
  id: number;
  /** @maxLength 24 */
  number: string;
  primary?: boolean;
  verified?: boolean;
  /** @default false */
  archived?: boolean;
  /** @default false */
  temporary: boolean | null;
  created: number;
  updated: number;
}

export interface AdminCreateMultiGroupPermission {
  permissions: AdminCreateGroupPermission[];
}

export interface AdminCreateMultiTransaction {
  transactions: AdminExplicitCreateTransaction[];
}

export interface AdminCreateMultiUserPermission {
  permissions: AdminCreateUserPermission[];
}

export interface AdminCreateServicePermission {
  permissions: CreatePermission[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateStatement {
  account: string;
  timezone: string;
  /** @min 0 */
  start_date?: number | null;
  /** @min 0 */
  end_date?: number | null;
  metadata?: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateTransactionCollection {
  /** @maxLength 64 */
  id?: string;
  transactions: AdminCreateTransactionCollectionTransaction[];
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status?: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  checks?: ("type" | "verification" | "limits" | "balance")[] | null;
  /** @min 0 */
  expires?: number | null;
  created: number;
  updated: number;
}

/**
 * A mixin that handles the application of permissions to properties on a
 * serializer using the built-in permissions system.
 *
 * NOTE : This only works if the following conditions are met:
 *     - The request context must contain a user.
 *     - The class this mixin is attached must be a serializer.
 *     - The class this mixin is attached to must have a Meta.model defined.
 *     - The Meta.model class must have a PERMISSION_TYPE defined.
 */
export interface AdminCreateTransactionCollectionTransaction {
  /** @maxLength 64 */
  id?: string;
  /** @maxLength 64 */
  parent?: string;
  /** @maxLength 64 */
  partner?: string;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  amount: number;
  currency: string;
  account?: string | null;
  subtype?: string | null;
  /** @maxLength 100 */
  reference?: string | null;
  /**
   * @maxLength 100
   * @default ""
   */
  note?: string;
  metadata?: Record<string, any>;
  user?: string;
  /** @default false */
  inclusive?: boolean;
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status?: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  /** @min 0 */
  expires?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateTransactionFee {
  /** @maxLength 250 */
  description: string;
  /** @min 0 */
  amount: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateTransactionMessage {
  id: number;
  /**
   * * `admin` - Admin
   * * `user` - User
   */
  section?: "admin" | "user";
  /**
   * * `info` - Info
   * * `warning` - Warning
   * * `error` - Error
   */
  level?: "info" | "warning" | "error";
  message: string;
  author: ReducedUserInfo | null;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateTransactionSubtype {
  id: number;
  /** @maxLength 50 */
  name: string;
  /** @maxLength 50 */
  label?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  /**
   * * `partner` - Partner
   * * `single` - Single
   * @deprecated
   */
  usage_type?: "partner" | "single" | null;
  partner?: number | null;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateTransferTransaction {
  id: string;
  debit_account?: string | null;
  debit_subtype?: string | null;
  debit_metadata?: Record<string, any>;
  /**
   * @maxLength 100
   * @default ""
   */
  debit_note?: string;
  /** @maxLength 100 */
  debit_reference?: string | null;
  credit_account?: string | null;
  credit_subtype?: string | null;
  credit_metadata?: Record<string, any>;
  /**
   * @maxLength 100
   * @default ""
   */
  credit_note?: string;
  /** @maxLength 100 */
  credit_reference?: string | null;
  /** @maxLength 100 */
  recipient?: string | null;
  amount: number;
  currency: string;
  user?: string;
  /** @default false */
  inclusive?: boolean;
  debit_fees?: AdminCreateTransactionFee[];
  credit_fees?: AdminCreateTransactionFee[];
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status?: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  /** @min 0 */
  expires?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUpdateAccountDefinition {
  /** @maxLength 200 */
  name: string;
  /** @maxLength 200 */
  label?: string | null;
  recon?: boolean;
  /** @default false */
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUpdateLegalTerm {
  id: number;
  /**
   * * `system` - System
   * * `company` - Company
   */
  type: "system" | "company";
  /** @maxLength 100 */
  name: string;
  /** @maxLength 255 */
  description?: string | null;
  groups?: (string | null)[];
  versions: AdminReducedLegalTermVersion[];
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUserAddress {
  id: number;
  /**
   * * `permanent` - Permanent
   * * `contact` - Contact
   * * `shipping` - Shipping
   * * `billing` - Billing
   * * `business` - Business
   */
  type?: "permanent" | "contact" | "shipping" | "billing" | "business";
  user: string;
  /** @maxLength 200 */
  line_1?: string | null;
  /** @maxLength 200 */
  line_2?: string | null;
  /** @maxLength 100 */
  city?: string | null;
  /** @maxLength 100 */
  state_province?: string | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  country?:
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
    | ""
    | null;
  /** @maxLength 10 */
  postal_code?: string | null;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  /** @default false */
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUserBankAccount {
  id: number;
  user: string;
  /** @maxLength 200 */
  name?: string | null;
  owner?: BankOwner | null;
  /** @maxLength 200 */
  number?: string | null;
  /** @maxLength 200 */
  type?: string | null;
  /**
   * * `individual` - Individual
   * * `business` - Business
   */
  beneficiary_type?: "individual" | "business" | null;
  /** @maxLength 20 */
  clabe?: string | null;
  /** @maxLength 200 */
  bank_name?: string | null;
  /** @maxLength 50 */
  bank_code?: string | null;
  /** @maxLength 3 */
  bank_currency?: string | null;
  /** @maxLength 50 */
  branch_code?: string | null;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  branch_address?: AdminUserBankBranchAddress;
  /** @maxLength 255 */
  branch_address_text?: string | null;
  /** @maxLength 50 */
  routing_number?: string | null;
  /** @maxLength 16 */
  swift?: string | null;
  /** @maxLength 50 */
  iban?: string | null;
  /** @maxLength 16 */
  bic?: string | null;
  code: string | null;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  currencies: ReducedAsset[];
  account_currencies: ReducedAccountAsset[];
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   * @default "withdraw"
   */
  action?: "withdraw" | "deposit" | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUserBankAccountAccountAsset {
  account_currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUserBankAccountAsset {
  currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUserDocument {
  id: number;
  user: string;
  /** @format uri */
  file: string;
  type: number;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  /** @maxLength 250 */
  note?: string | null;
  /** @default false */
  archived?: boolean;
  expires?: number | null;
}

export interface AdminCreateUserGroup {
  group: string;
}

/**
 * Default user serializer for showing information regarding the user.
 * Information about user setting and permissions shown in
 * the ExtendedUserInfoSerializer
 */
export interface AdminCreateUserInfo {
  /** @maxLength 64 */
  id?: string;
  /** @maxLength 150 */
  username?: string;
  /** @format email */
  email?: string;
  mobile?: string;
  /** @maxLength 50 */
  first_name?: string | null;
  /** @maxLength 50 */
  middle_name?: string | null;
  /** @maxLength 50 */
  last_name?: string | null;
  /** @format uri */
  profile?: string | null;
  /**
   * @maxItems 1
   * @minItems 0
   */
  groups?: (string | null)[];
  /** @default false */
  temporary: boolean | null;
  /** @maxLength 24 */
  id_number?: string | null;
  /** @format date */
  birth_date?: string | null;
  currency: ReducedAsset;
  account: string;
  /** @default 0 */
  balance: number;
  /** @default 0 */
  available_balance: number;
  company: string;
  owner: boolean;
  /** @maxLength 24 */
  language?: string;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  nationality?:
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
    | ""
    | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  residency?:
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
    | ""
    | null;
  /**
   * * `male` - Male
   * * `female` - Female
   * * `other` - Other
   * * `not_specified` - Not Specified
   */
  gender?: "male" | "female" | "other" | "not_specified" | null;
  /**
   * * `mr` - Mr
   * * `mrs` - Mrs
   * * `ms` - Ms
   * * `mx` - Mx
   */
  title?: "mr" | "mrs" | "ms" | "mx" | null;
  /**
   * * `single` - Single
   * * `married` - Married
   * * `divorced` - Divorced
   * * `widowed` - Widowed
   */
  marital_status?: "single" | "married" | "divorced" | "widowed" | null;
  /** @maxLength 100 */
  fathers_name?: string | null;
  /** @maxLength 100 */
  mothers_name?: string | null;
  /** @maxLength 100 */
  grandfathers_name?: string | null;
  /** @maxLength 100 */
  grandmothers_name?: string | null;
  /** @maxLength 100 */
  central_bank_number?: string | null;
  metadata?: Record<string, any>;
  /** @maxLength 100 */
  timezone?: string | null;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  business_name?: string | null;
  /** @deprecated */
  verified: boolean;
  verification: UserVerification;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  created: number;
  updated: number;
  /** @default false */
  deactivated?: boolean;
  /**
   * * `retaining` - Retaining
   * * `delete_requested` - Delete Requested
   * * `deleted` - Deleted
   */
  retention_state?: "retaining" | "delete_requested" | "deleted";
  /** @default false */
  archived?: boolean;
  last_login: number;
  settings: UserSettings;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUserMessage {
  id: number;
  /**
   * * `admin` - Admin
   * * `user` - User
   */
  section?: "admin" | "user";
  /**
   * * `info` - Info
   * * `warning` - Warning
   * * `error` - Error
   */
  level?: "info" | "warning" | "error";
  message: string;
  /** @default false */
  archived?: boolean;
  author: ReducedUserInfo | null;
  created: number;
  updated: number;
}

export interface AdminCreateUserPermission {
  /**
   * * `admin` - Admin
   * * `user` - User
   */
  section: "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level: "view" | "add" | "change" | "delete";
  properties?: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUserWalletAccount {
  id: number;
  user: string;
  /** @maxLength 200 */
  username?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** @maxLength 24 */
  mobile?: string | null;
  /** @maxLength 50 */
  name?: string | null;
  code: string | null;
  /**
   * * `paypal` - Paypal
   * * `venmo` - Venmo
   * * `other` - Other
   */
  type?: "paypal" | "venmo" | "other";
  metadata?: Record<string, any>;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  currencies: ReducedAsset[];
  /** @default false */
  archived?: boolean;
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   * @default "withdraw"
   */
  action?: "withdraw" | "deposit" | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUserWalletAccountAccountAsset {
  account_currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateUserWalletAccountAsset {
  currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCryptoAccount {
  id: number;
  /** @maxLength 250 */
  address: string;
  /** @maxLength 50 */
  name?: string | null;
  code: string | null;
  /**
   * * `bitcoin` - Bitcoin
   * * `ethereum` - Ethereum
   * * `stellar` - Stellar
   * * `other` - Other
   */
  crypto_type?: "bitcoin" | "ethereum" | "stellar" | "other";
  /**
   * * `testnet` - Testnet
   * * `mainnet` - Mainnet
   * @default "testnet"
   */
  network?: "testnet" | "mainnet";
  metadata?: Record<string, any>;
  user: ReducedUserInfo;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  currencies: ReducedAsset[];
  account_currencies: ReducedAccountAsset[];
  /** @default false */
  archived?: boolean;
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   * @default "withdraw"
   */
  action?: "withdraw" | "deposit" | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCryptoAccountAsset {
  /** @maxLength 30 */
  code?: string | null;
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
  /** @format uri */
  icon?: string | null;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export type AdminCryptoAccountAssetList = AdminCryptoAccountAsset[];

export interface AdminCryptoAccountAssetListResponse {
  status: string;
  data: AdminCryptoAccountAssetList;
}

export interface AdminCryptoAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCryptoAccountAsset;
}

export interface AdminCryptoAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminCryptoAccount;
}

export interface AdminDeactivate {
  user: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminDevice {
  id: number;
  user: ReducedUserInfo;
  imei: string;
  /** @maxLength 30 */
  name?: string | null;
  apps: ReducedDeviceApp[];
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminDeviceApp {
  id: number;
  /** @maxLength 30 */
  name?: string | null;
  /** * `expo` - Expo */
  type: "expo";
  token: string | null;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminDeviceAppResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminDeviceApp;
}

export interface AdminDeviceResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminDevice;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminDocumentType {
  id: number;
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  related_resources?: (
    | "user"
    | "useraddress"
    | "userbankaccount"
    | "userwalletaccount"
    | "usercryptoaccount"
  )[];
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminDocumentTypeResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminDocumentType;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminEmail {
  user: ReducedUserInfo;
  id: number;
  /** @format email */
  email: string;
  primary?: boolean;
  verified?: boolean;
  archived?: boolean;
  /** @default false */
  temporary: boolean | null;
  created: number;
  updated: number;
}

export interface AdminEmailResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminEmail;
}

/**
 * A mixin that handles the application of permissions to properties on a
 * serializer using the built-in permissions system.
 *
 * NOTE : This only works if the following conditions are met:
 *     - The request context must contain a user.
 *     - The class this mixin is attached must be a serializer.
 *     - The class this mixin is attached to must have a Meta.model defined.
 *     - The Meta.model class must have a PERMISSION_TYPE defined.
 */
export interface AdminExplicitCreateTransaction {
  /** @maxLength 64 */
  id?: string;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  amount: number;
  currency: string;
  account?: string | null;
  subtype?: string | null;
  /** @maxLength 100 */
  reference?: string | null;
  /**
   * @maxLength 100
   * @default ""
   */
  note?: string;
  metadata?: Record<string, any>;
  user?: string;
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   * @default "Pending"
   */
  status?: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  fees?: AdminCreateTransactionFee[];
  /** @min 0 */
  expires?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminExport {
  id: string;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
  /**
   * * `account` - Account
   * * `account_currency` - Account_Currency
   * * `transaction` - Transaction
   * * `user` - User
   */
  resource: "account" | "account_currency" | "transaction" | "user";
  query?: Record<string, any>;
  /**
   * * `queued` - Queued
   * * `processing` - Processing
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "queued" | "processing" | "complete" | "failed";
  progress: number;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  count?: number | null;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  page_size?: number;
  /**
   * * `json` - JSON
   * * `csv` - CSV
   */
  file_format: "json" | "csv";
  created: number;
  updated: number;
  /**
   * A condensed user serializer showing only the necessary user information
   * in order to identifiy the user.
   */
  user: ReducedUserInfo;
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminExportPage {
  /**
   * @min -2147483648
   * @max 2147483647
   */
  count?: number;
  /** Get the page number. Index plus 1. */
  page: number;
  /** @format uri */
  file?: string | null;
  status: string;
}

export interface AdminExportResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminExport;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminExtendedAccount {
  reference: string;
  /**
   * @maxLength 200
   * @default "default"
   */
  name?: string;
  definition: string | null;
  /** @maxLength 200 */
  label?: string | null;
  primary?: boolean;
  recon?: boolean;
  user: ReducedUserInfo;
  currencies: AdminAccountAccountAsset[];
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminExtendedAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminExtendedAccount;
}

export interface AdminExtendedAuthToken {
  token_key: string;
  token: string;
  user: ReducedUserInfo;
  expires: number;
  created: number;
}

export interface AdminExtendedAuthTokenResponse {
  status: string;
  data: AdminExtendedAuthToken;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminExtendedExport {
  id: string;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
  /**
   * * `account` - Account
   * * `account_currency` - Account_Currency
   * * `transaction` - Transaction
   * * `user` - User
   */
  resource: "account" | "account_currency" | "transaction" | "user";
  query: Record<string, any>;
  /**
   * * `queued` - Queued
   * * `processing` - Processing
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "queued" | "processing" | "complete" | "failed";
  progress: number;
  count: number | null;
  page_size: number;
  pages: AdminExportPage[];
  /**
   * * `json` - JSON
   * * `csv` - CSV
   */
  file_format: "json" | "csv";
  created: number;
  updated: number;
  user: ReducedUserInfo;
  /** @default false */
  archived?: boolean;
}

export interface AdminExtendedExportResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminExtendedExport;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminExtendedGroupTier {
  id: number;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  level: number;
  /** @maxLength 255 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @deprecated */
  limits: GroupTierLimit[];
  /** @deprecated */
  fees: GroupTierFee[];
  settings: GroupTierSettings;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminExtendedGroupTierResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminExtendedGroupTier;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminExtendedRequest {
  id: number;
  user: ReducedUserInfo;
  key: string | null;
  scheme: string;
  path: string | null;
  method: string;
  content_type: string;
  params: Record<string, any>;
  headers: Record<string, any>;
  status_code: number | null;
  body: Record<string, any>;
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountcurrency` - Account Currency
   * * `accountcurrencylimit` - Account Currency Limit
   * * `accountcurrencyfee` - Account Currency Fee
   * * `accountdefinition` - Account Definition
   * * `accountdefinitiongroup` - Account Definition Group
   * * `accountdefinitiongroupcurrency` - Account Definition Group Currency
   * * `currency` - Currency
   * * `authenticator` - Authenticator
   * * `authenticatorchallenge` - Authenticator Challenge
   * * `authenticatorrule` - Authenticator Rule
   * * `backgroundtask` - Background Task
   * * `bankowneraddress` - Bank Owner Address
   * * `bankbranchaddress` - Bank Branch Address
   * * `company` - Company
   * * `companyaddress` - Company Address
   * * `companybankaccount` - Company Bank Account
   * * `companywalletaccount` - Company Wallet Account
   * * `companyservice` - Company Service
   * * `companynotification` - Company Notification
   * * `device` - Device
   * * `deviceapp` - Device App
   * * `document` - Document
   * * `documenttype` - Document Type
   * * `export` - Export
   * * `exportpage` - Export Page
   * * `email` - Email
   * * `group` - Group
   * * `groupfee` - Group Fee
   * * `grouppermission` - Group Permission
   * * `grouptier` - Group Tier
   * * `grouptierrequirement` - Group Tier Requirement
   * * `grouptierlimit` - Group Tier Limit
   * * `grouptierfee` - Group Tier Fee
   * * `grouptierrequirementsetitem` - Group Tier Requirement Set Item
   * * `grouptierrequirementset` - Group Tier Requirement Set
   * * `legalterm` - Legal Term
   * * `legaltermversion` - Legal Term Version
   * * `metric` - Metric
   * * `metric_schema` - Metric Schema
   * * `metric_point` - Metric Point
   * * `mfa` - Mfa
   * * `mfasmsdevice` - Mfa Sms Device
   * * `mfatotpdevice` - Mfa Totp Device
   * * `mfastaticdevice` - Mfa Static Device
   * * `mfatokenverification` - Mfa Token Verification
   * * `mobile` - Mobile
   * * `mobileconfirmation` - Mobile Confirmation
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `oauthlink` - Oauth Link
   * * `oauthsession` - Oauth Session
   * * `oidckey` - Oidc Key
   * * `permission` - Permission
   * * `recoverycode` - Recovery Code
   * * `refresh_token` - Refresh Token
   * * `request` - Request
   * * `resourcerequirementrule` - Resource Requirement Rule
   * * `service` - Service
   * * `statement` - Statement
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionfee` - Transaction Fee
   * * `transactionsubtype` - Transaction Subtype
   * * `transactionmessage` - Transaction Message
   * * `transactioncollection` - Transaction Collection
   * * `user` - User
   * * `useraddress` - User Address
   * * `userbankaccount` - User Bank Account
   * * `userwalletaccount` - User Wallet Account
   * * `usercryptoaccount` - User Crypto Account
   * * `userlegaltermversion` - User Legal Term Version
   * * `usermessage` - User Message
   * * `userpermission` - User Permission
   * * `webhook` - Webhook
   * * `webhooktask` - Webhook Task
   * * `webhookrequest` - Webhook Request
   */
  resource:
    | "accesscontrolrule"
    | "account"
    | "accountcurrency"
    | "accountcurrencylimit"
    | "accountcurrencyfee"
    | "accountdefinition"
    | "accountdefinitiongroup"
    | "accountdefinitiongroupcurrency"
    | "currency"
    | "authenticator"
    | "authenticatorchallenge"
    | "authenticatorrule"
    | "backgroundtask"
    | "bankowneraddress"
    | "bankbranchaddress"
    | "company"
    | "companyaddress"
    | "companybankaccount"
    | "companywalletaccount"
    | "companyservice"
    | "companynotification"
    | "device"
    | "deviceapp"
    | "document"
    | "documenttype"
    | "export"
    | "exportpage"
    | "email"
    | "group"
    | "groupfee"
    | "grouppermission"
    | "grouptier"
    | "grouptierrequirement"
    | "grouptierlimit"
    | "grouptierfee"
    | "grouptierrequirementsetitem"
    | "grouptierrequirementset"
    | "legalterm"
    | "legaltermversion"
    | "metric"
    | "metric_schema"
    | "metric_point"
    | "mfa"
    | "mfasmsdevice"
    | "mfatotpdevice"
    | "mfastaticdevice"
    | "mfatokenverification"
    | "mobile"
    | "mobileconfirmation"
    | "notification"
    | "oauthclient"
    | "oauthlink"
    | "oauthsession"
    | "oidckey"
    | "permission"
    | "recoverycode"
    | "refresh_token"
    | "request"
    | "resourcerequirementrule"
    | "service"
    | "statement"
    | "token"
    | "transaction"
    | "transactionfee"
    | "transactionsubtype"
    | "transactionmessage"
    | "transactioncollection"
    | "user"
    | "useraddress"
    | "userbankaccount"
    | "userwalletaccount"
    | "usercryptoaccount"
    | "userlegaltermversion"
    | "usermessage"
    | "userpermission"
    | "webhook"
    | "webhooktask"
    | "webhookrequest"
    | null;
  resource_id: string | null;
  /**
   * Return a response object. This has to be unpickled from a stored
   * binary field. If it fails, throw an error so we can investigate but
   * return None as well.
   */
  response: Record<string, any>;
  created: number;
  updated: number;
}

export interface AdminExtendedRequestResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminExtendedRequest;
}

/**
 * A mixin that handles the application of permissions to properties on a
 * serializer using the built-in permissions system.
 *
 * NOTE : This only works if the following conditions are met:
 *     - The request context must contain a user.
 *     - The class this mixin is attached must be a serializer.
 *     - The class this mixin is attached to must have a Meta.model defined.
 *     - The Meta.model class must have a PERMISSION_TYPE defined.
 */
export interface AdminExtendedTransaction {
  id: string;
  collection: string;
  parent: string | null;
  partner: AdminPartnerTransaction | null;
  index: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string | null;
  /** @maxLength 100 */
  note?: string;
  metadata?: Record<string, any>;
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  reference: string | null;
  amount: number;
  fee: number;
  total_amount: number;
  balance: number;
  label: string;
  account: string;
  currency: ReducedAsset;
  account_currency: TransactionAccountAsset;
  creator: ReducedUserInfo;
  user: ReducedUserInfo;
  fees: TransactionFee[];
  inclusive: boolean;
  /** @default false */
  archived?: boolean;
  executed: number | null;
  expires: number;
  created: number;
  updated: number;
}

export interface AdminExtendedTransactionResponse {
  status: string;
  /**
   * A mixin that handles the application of permissions to properties on a
   * serializer using the built-in permissions system.
   *
   * NOTE : This only works if the following conditions are met:
   *     - The request context must contain a user.
   *     - The class this mixin is attached must be a serializer.
   *     - The class this mixin is attached to must have a Meta.model defined.
   *     - The Meta.model class must have a PERMISSION_TYPE defined.
   */
  data: AdminExtendedTransaction;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminExtendedTransactionTransition {
  id: string;
  set: string;
  transaction: AdminExtendedTransaction;
  /**
   * * `queued` - Queued
   * * `pending` - Pending
   * * `approved` - Approved
   * * `declined` - Declined
   */
  status: "queued" | "pending" | "approved" | "declined";
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  from_status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  to_status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  index: number;
  archived: boolean;
  created: number;
  updated: number;
}

export interface AdminExtendedTransactionTransitionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminExtendedTransactionTransition;
}

/**
 * Default user serializer for showing information regarding the user.
 * Information about user setting and permissions shown in
 * the ExtendedUserInfoSerializer
 */
export interface AdminExtendedUserInfo {
  id: string;
  /**
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string | null;
  /** @format email */
  email: string | null;
  mobile: string | null;
  /** @maxLength 50 */
  first_name?: string | null;
  /** @maxLength 50 */
  middle_name?: string | null;
  /** @maxLength 50 */
  last_name?: string | null;
  /** @format uri */
  profile?: string | null;
  groups: ReducedGroup[];
  /** @default false */
  temporary: boolean | null;
  /** @maxLength 24 */
  id_number?: string | null;
  /** @format date */
  birth_date?: string | null;
  currency: ReducedAsset;
  account: string;
  /** @default 0 */
  balance: number;
  /** @default 0 */
  available_balance: number;
  company: string;
  owner: boolean;
  /** @maxLength 24 */
  language?: string;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  nationality?:
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
    | ""
    | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  residency?:
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
    | ""
    | null;
  /**
   * * `male` - Male
   * * `female` - Female
   * * `other` - Other
   * * `not_specified` - Not Specified
   */
  gender?: "male" | "female" | "other" | "not_specified" | null;
  /**
   * * `mr` - Mr
   * * `mrs` - Mrs
   * * `ms` - Ms
   * * `mx` - Mx
   */
  title?: "mr" | "mrs" | "ms" | "mx" | null;
  /**
   * * `single` - Single
   * * `married` - Married
   * * `divorced` - Divorced
   * * `widowed` - Widowed
   */
  marital_status?: "single" | "married" | "divorced" | "widowed" | null;
  /** @maxLength 100 */
  fathers_name?: string | null;
  /** @maxLength 100 */
  mothers_name?: string | null;
  /** @maxLength 100 */
  grandfathers_name?: string | null;
  /** @maxLength 100 */
  grandmothers_name?: string | null;
  /** @maxLength 100 */
  central_bank_number?: string | null;
  metadata?: Record<string, any>;
  /** @maxLength 100 */
  timezone?: string | null;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  business_name?: string | null;
  /** @deprecated */
  verified: boolean;
  verification: UserVerification;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  created: number;
  updated: number;
  /** @default false */
  deactivated?: boolean;
  /**
   * * `retaining` - Retaining
   * * `delete_requested` - Delete Requested
   * * `deleted` - Deleted
   */
  retention_state?: "retaining" | "delete_requested" | "deleted";
  /** @default false */
  archived?: boolean;
  last_login: number;
  settings: UserSettings;
}

export interface AdminExtendedUserInfoResponse {
  status: string;
  /**
   * Default user serializer for showing information regarding the user.
   * Information about user setting and permissions shown in
   * the ExtendedUserInfoSerializer
   */
  data: AdminExtendedUserInfo;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminExtendedWebhookTask {
  id: number;
  webhook: AdminWebhook;
  /** Get the number of tries that have occurred. */
  tries: number;
  completed: number;
  failed: number;
  archived: boolean;
  created: number;
  updated: number;
  data: Record<string, any>;
}

export interface AdminExtendedWebhookTaskResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminExtendedWebhookTask;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminGroup {
  /** @maxLength 80 */
  name: string;
  /** @maxLength 80 */
  label?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @format uri */
  icon?: string | null;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section?: "system" | "admin" | "user";
  default: boolean;
  public: boolean;
  listed: boolean;
  tiers: ReducedGroupTier[];
  settings: AdminGroupSettings;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminGroupFee {
  id: number;
  name: string | null;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string | null;
  account_definition: string | null;
  currency: string;
  /** Convert the Fee value from Decimal to int based on asset divisibility */
  value: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  description: string | null;
  debit_account: string | null;
  credit_account: string | null;
  debit_subtype: string | null;
  credit_subtype: string | null;
  created: number;
  updated: number;
  inferred: boolean | null;
  archived: boolean | null;
}

export type AdminGroupFeeList = AdminGroupFee[];

export interface AdminGroupFeeListResponse {
  status: string;
  data: AdminGroupFeeList;
}

export interface AdminGroupFeeResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminGroupFee;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminGroupPermission {
  id: number;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level: "view" | "add" | "change" | "delete";
  properties?: Record<string, any>;
}

export interface AdminGroupPermissionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminGroupPermission;
}

export interface AdminGroupResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminGroup;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminGroupSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: GroupDisallowedTransactionSubtype[];
  /**
   * @format uri
   * @maxLength 200
   */
  password_reset_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  password_set_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  email_verification_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  deactivate_verification_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  request_delete_verification_url?: string | null;
}

export interface AdminGroupSettingsResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminGroupSettings;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminGroupTier {
  id: number;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  level: number;
  /** @maxLength 255 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @deprecated */
  limits: GroupTierLimit[];
  /** @deprecated */
  fees: GroupTierFee[];
  settings: GroupTierSettings;
  archived: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminGroupTierFee {
  id: number;
  name: string | null;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string | null;
  account_definition: string | null;
  currency: string;
  /** Convert the Fee value from Decimal to int based on asset divisibility */
  value: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  description: string | null;
  debit_account: string | null;
  credit_account: string | null;
  debit_subtype: string | null;
  credit_subtype: string | null;
  created: number;
  updated: number;
  inferred: boolean | null;
  archived: boolean | null;
}

export type AdminGroupTierFeeList = AdminGroupTierFee[];

export interface AdminGroupTierFeeListResponse {
  status: string;
  data: AdminGroupTierFeeList;
}

export interface AdminGroupTierFeeResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminGroupTierFee;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminGroupTierLimit {
  id: number;
  /** Convert the Limit value from Decimal to int based on asset divisibility */
  value: number;
  /**
   * * `max` - Maximum
   * * `day_max` - Maximum per day
   * * `month_max` - Maximum per month
   * * `min` - Minimum
   * * `overdraft` - Overdraft
   */
  type: "max" | "day_max" | "month_max" | "min" | "overdraft";
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string;
  account_definition: string | null;
  currency: string;
  created: number;
  updated: number;
  archived?: boolean;
}

export type AdminGroupTierLimitList = AdminGroupTierLimit[];

export interface AdminGroupTierLimitListResponse {
  status: string;
  data: AdminGroupTierLimitList;
}

export interface AdminGroupTierLimitResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminGroupTierLimit;
}

export type AdminGroupTierList = AdminGroupTier[];

export interface AdminGroupTierListResponse {
  status: string;
  data: AdminGroupTierList;
}

export interface AdminGroupTierResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminGroupTier;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminLegalTerm {
  id: number;
  /**
   * * `system` - System
   * * `company` - Company
   */
  type: "system" | "company";
  /** @maxLength 100 */
  name: string;
  /** @maxLength 255 */
  description?: string | null;
  groups: string[];
  versions: AdminReducedLegalTermVersion[];
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminLegalTermResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminLegalTerm;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminLegalTermVersion {
  id: number;
  version: number;
  /** @maxLength 250 */
  note?: string | null;
  content?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  url?: string | null;
  created: number;
  /** @default false */
  archived?: boolean;
  updated: number;
}

export interface AdminLegalTermVersionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminLegalTermVersion;
}

export interface AdminLogin {
  user: string;
  /** @maxLength 128 */
  password: string;
  /** @min 0 */
  session_duration?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminMFAAuthenticator {
  id: string;
  /**
   * * `totp` - Totp
   * * `sms` - Sms
   * * `static` - Static
   */
  type: "totp" | "sms" | "static";
  user: ReducedUserInfo;
  verified: boolean;
}

export interface AdminMFAAuthenticatorResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminMFAAuthenticator;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminMetric {
  id: string;
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 50 */
  slug?: string | null;
  metadata?: Record<string, any>;
  /**
   * * `account_count` - Account Count
   * * `transaction_count` - Transaction Count
   * * `transaction_complete_count` - Transaction Complete Count
   * * `transaction_failed_count` - Transaction Failed Count
   * * `transaction_pending_count` - Transaction Pending Count
   * * `transaction_complete_sum` - Transaction Complete Sum
   * * `transaction_failed_sum` - Transaction Failed Sum
   * * `transaction_pending_sum` - Transaction Pending Sum
   * * `transaction_balance_sum` - Transaction Balance Sum
   * * `transaction_available_balance_sum` - Transaction Available Balance Sum
   * * `user_count` - User Count
   * * `user_active_count` - User Active Count
   * * `user_transacted_in_30days_count` - User Transacted In 30Days Count
   */
  type:
    | "account_count"
    | "transaction_count"
    | "transaction_complete_count"
    | "transaction_failed_count"
    | "transaction_pending_count"
    | "transaction_complete_sum"
    | "transaction_failed_sum"
    | "transaction_pending_sum"
    | "transaction_balance_sum"
    | "transaction_available_balance_sum"
    | "user_count"
    | "user_active_count"
    | "user_transacted_in_30days_count";
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  currency: ReducedAsset;
  timezone: string;
  query: Record<string, any>;
  /**
   * * `accumulate` - Accumulate
   * * `set` - Set
   */
  method: "accumulate" | "set";
  created: number;
  updated: number;
  /**
   * A condensed user serializer showing only the necessary user information
   * in order to identifiy the user.
   */
  user: ReducedUserInfo;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
  /** @default false */
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminMetricPoint {
  id: number;
  value: number;
  date: number;
}

export interface AdminMetricResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminMetric;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminMobile {
  user: ReducedUserInfo;
  id: number;
  number: string;
  primary: boolean;
  verified?: boolean;
  /** @default false */
  archived?: boolean;
  /** @default false */
  temporary: boolean | null;
  created: number;
  updated: number;
}

export interface AdminMobileResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminMobile;
}

export interface AdminMultiGroupPermission {
  permissions: AdminGroupPermission[];
}

export interface AdminMultiGroupPermissionResponse {
  status: string;
  data: AdminMultiGroupPermission;
}

/**
 * Generic permission handling (No properties support).
 *     - Services
 *     - Auth tokens
 */
export interface AdminMultiPermission {
  permissions: Permission[];
}

export interface AdminMultiPermissionResponse {
  status: string;
  /**
   * Generic permission handling (No properties support).
   *     - Services
   *     - Auth tokens
   */
  data: AdminMultiPermission;
}

export interface AdminMultiTransaction {
  transactions: AdminTransaction[];
}

export interface AdminMultiTransactionResponse {
  status: string;
  data: AdminMultiTransaction;
}

export interface AdminMultiUserPermission {
  permissions: AdminUserPermission[];
}

export interface AdminMultiUserPermissionResponse {
  status: string;
  data: AdminMultiUserPermission;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminOauthClient {
  id: string;
  /**
   * * `apple` - Apple
   * * `google` - Google
   */
  provider: "apple" | "google";
  /** @maxLength 250 */
  application: string;
  /** @maxLength 250 */
  client_id: string;
  data?: Record<string, any>;
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminOauthClientResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminOauthClient;
}

export interface AdminOverviewAsset {
  balance_total: number;
  available_balance_total: number;
  count_total: number;
  count_debits_pending: number;
  count_debits_complete: number;
  count_credits_pending: number;
  count_credits_complete: number;
  sum_debits_pending: number;
  sum_debits_complete: number;
  sum_credits_pending: number;
  sum_credits_complete: number;
  balance_24h: number;
  count_24h: number;
  sum_24h_debits_pending: number;
  sum_24h_debits_complete: number;
  sum_24h_credits_pending: number;
  sum_24h_credits_complete: number;
}

export interface AdminOverviewAssetResponse {
  status: string;
  data: AdminOverviewAsset;
}

export interface AdminOverviewUser {
  total: number;
  archived: number;
  active: number;
}

export interface AdminOverviewUserResponse {
  status: string;
  data: AdminOverviewUser;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminPartnerTransaction {
  id: string;
  user: AdminPartnerUserInfo;
  account: string;
}

/**
 * A condensed user serializer showing only the necessary user information to
 * identify a partner user (without exposing any extra).
 *
 * This only works when a transaction instance is sent to it.
 */
export interface AdminPartnerUserInfo {
  id: string;
  identifier: string;
  username: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  /** @format uri */
  profile: string | null;
  temporary: boolean;
  /** @format email */
  email: string;
  mobile: string;
}

/** Serializer for requesting a password reset e-mail. */
export interface AdminPasswordReset {
  force?: boolean;
  user: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminReducedAccountAccountAsset {
  id: string;
  balance: number;
  available_balance: number;
  currency: ReducedAsset;
  active: boolean;
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminReducedAccountAsset {
  id: string;
  balance: number;
  available_balance: number;
  account: ReducedAccount;
  currency: ReducedAsset;
  active: boolean;
  archived?: boolean;
}

export type AdminReducedAccountAssetList = AdminReducedAccountAsset[];

export interface AdminReducedAccountAssetListResponse {
  status: string;
  data: AdminReducedAccountAssetList;
}

export interface AdminReducedAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminReducedAccountAsset;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminReducedGroup {
  /** @maxLength 80 */
  name: string;
  /** @maxLength 80 */
  label?: string | null;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminReducedLegalTermVersion {
  id: number;
  version: number;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminReducedUserLegalTermVersion {
  id: number;
  version: number;
  accepted: boolean;
  created: number;
  updated: number;
}

export interface AdminRegister {
  /** @maxLength 50 */
  first_name?: string;
  /** @maxLength 50 */
  middle_name?: string;
  /** @maxLength 50 */
  last_name?: string;
  /** @maxLength 150 */
  username?: string;
  /** @format email */
  email?: string;
  mobile?: string;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  nationality?:
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
    | ""
    | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  residency?:
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
    | ""
    | null;
  /** @maxLength 128 */
  password?: string;
  /**
   * @deprecated
   * @maxLength 128
   */
  password1?: string;
  /**
   * @deprecated
   * @maxLength 128
   */
  password2?: string;
  terms_and_conditions?: boolean;
  privacy_policy?: boolean;
  /** @min 0 */
  session_duration?: number | null;
  /**
   * @maxItems 1
   * @minItems 0
   */
  groups?: (string | null)[];
  /** @minItems 0 */
  legal_term_versions?: number[];
  /** @maxLength 24 */
  id_number?: string | null;
  /** @format date */
  birth_date?: string | null;
  /** @maxLength 24 */
  language?: string;
  /**
   * * `male` - Male
   * * `female` - Female
   * * `other` - Other
   * * `not_specified` - Not Specified
   */
  gender?: "male" | "female" | "other" | "not_specified" | null;
  /**
   * * `mr` - Mr
   * * `mrs` - Mrs
   * * `ms` - Ms
   * * `mx` - Mx
   */
  title?: "mr" | "mrs" | "ms" | "mx" | null;
  /**
   * * `single` - Single
   * * `married` - Married
   * * `divorced` - Divorced
   * * `widowed` - Widowed
   */
  marital_status?: "single" | "married" | "divorced" | "widowed" | null;
  /** @maxLength 100 */
  timezone?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminRequest {
  id: number;
  user: ReducedUserInfo;
  key: string | null;
  scheme: string;
  path: string | null;
  method: string;
  content_type: string;
  params: Record<string, any>;
  headers: Record<string, any>;
  status_code: number | null;
  body: Record<string, any>;
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountcurrency` - Account Currency
   * * `accountcurrencylimit` - Account Currency Limit
   * * `accountcurrencyfee` - Account Currency Fee
   * * `accountdefinition` - Account Definition
   * * `accountdefinitiongroup` - Account Definition Group
   * * `accountdefinitiongroupcurrency` - Account Definition Group Currency
   * * `currency` - Currency
   * * `authenticator` - Authenticator
   * * `authenticatorchallenge` - Authenticator Challenge
   * * `authenticatorrule` - Authenticator Rule
   * * `backgroundtask` - Background Task
   * * `bankowneraddress` - Bank Owner Address
   * * `bankbranchaddress` - Bank Branch Address
   * * `company` - Company
   * * `companyaddress` - Company Address
   * * `companybankaccount` - Company Bank Account
   * * `companywalletaccount` - Company Wallet Account
   * * `companyservice` - Company Service
   * * `companynotification` - Company Notification
   * * `device` - Device
   * * `deviceapp` - Device App
   * * `document` - Document
   * * `documenttype` - Document Type
   * * `export` - Export
   * * `exportpage` - Export Page
   * * `email` - Email
   * * `group` - Group
   * * `groupfee` - Group Fee
   * * `grouppermission` - Group Permission
   * * `grouptier` - Group Tier
   * * `grouptierrequirement` - Group Tier Requirement
   * * `grouptierlimit` - Group Tier Limit
   * * `grouptierfee` - Group Tier Fee
   * * `grouptierrequirementsetitem` - Group Tier Requirement Set Item
   * * `grouptierrequirementset` - Group Tier Requirement Set
   * * `legalterm` - Legal Term
   * * `legaltermversion` - Legal Term Version
   * * `metric` - Metric
   * * `metric_schema` - Metric Schema
   * * `metric_point` - Metric Point
   * * `mfa` - Mfa
   * * `mfasmsdevice` - Mfa Sms Device
   * * `mfatotpdevice` - Mfa Totp Device
   * * `mfastaticdevice` - Mfa Static Device
   * * `mfatokenverification` - Mfa Token Verification
   * * `mobile` - Mobile
   * * `mobileconfirmation` - Mobile Confirmation
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `oauthlink` - Oauth Link
   * * `oauthsession` - Oauth Session
   * * `oidckey` - Oidc Key
   * * `permission` - Permission
   * * `recoverycode` - Recovery Code
   * * `refresh_token` - Refresh Token
   * * `request` - Request
   * * `resourcerequirementrule` - Resource Requirement Rule
   * * `service` - Service
   * * `statement` - Statement
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionfee` - Transaction Fee
   * * `transactionsubtype` - Transaction Subtype
   * * `transactionmessage` - Transaction Message
   * * `transactioncollection` - Transaction Collection
   * * `user` - User
   * * `useraddress` - User Address
   * * `userbankaccount` - User Bank Account
   * * `userwalletaccount` - User Wallet Account
   * * `usercryptoaccount` - User Crypto Account
   * * `userlegaltermversion` - User Legal Term Version
   * * `usermessage` - User Message
   * * `userpermission` - User Permission
   * * `webhook` - Webhook
   * * `webhooktask` - Webhook Task
   * * `webhookrequest` - Webhook Request
   */
  resource:
    | "accesscontrolrule"
    | "account"
    | "accountcurrency"
    | "accountcurrencylimit"
    | "accountcurrencyfee"
    | "accountdefinition"
    | "accountdefinitiongroup"
    | "accountdefinitiongroupcurrency"
    | "currency"
    | "authenticator"
    | "authenticatorchallenge"
    | "authenticatorrule"
    | "backgroundtask"
    | "bankowneraddress"
    | "bankbranchaddress"
    | "company"
    | "companyaddress"
    | "companybankaccount"
    | "companywalletaccount"
    | "companyservice"
    | "companynotification"
    | "device"
    | "deviceapp"
    | "document"
    | "documenttype"
    | "export"
    | "exportpage"
    | "email"
    | "group"
    | "groupfee"
    | "grouppermission"
    | "grouptier"
    | "grouptierrequirement"
    | "grouptierlimit"
    | "grouptierfee"
    | "grouptierrequirementsetitem"
    | "grouptierrequirementset"
    | "legalterm"
    | "legaltermversion"
    | "metric"
    | "metric_schema"
    | "metric_point"
    | "mfa"
    | "mfasmsdevice"
    | "mfatotpdevice"
    | "mfastaticdevice"
    | "mfatokenverification"
    | "mobile"
    | "mobileconfirmation"
    | "notification"
    | "oauthclient"
    | "oauthlink"
    | "oauthsession"
    | "oidckey"
    | "permission"
    | "recoverycode"
    | "refresh_token"
    | "request"
    | "resourcerequirementrule"
    | "service"
    | "statement"
    | "token"
    | "transaction"
    | "transactionfee"
    | "transactionsubtype"
    | "transactionmessage"
    | "transactioncollection"
    | "user"
    | "useraddress"
    | "userbankaccount"
    | "userwalletaccount"
    | "usercryptoaccount"
    | "userlegaltermversion"
    | "usermessage"
    | "userpermission"
    | "webhook"
    | "webhooktask"
    | "webhookrequest"
    | null;
  resource_id: string | null;
  created: number;
  updated: number;
}

export interface AdminRequestDelete {
  user: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminService {
  id: number;
  company: number | null;
  slug: string | null;
  /**
   * * `system` - System
   * * `public` - Public
   * * `private` - Private
   */
  type: "system" | "public" | "private";
  /** @maxLength 100 */
  name: string;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxItems 10 */
  tags?: string[] | null;
  verified: boolean;
  public: boolean;
  /** @maxLength 250 */
  url: string;
  /** @maxLength 250 */
  management_url?: string | null;
  terms_and_conditions_url: string | null;
  website_url: string | null;
  active: boolean;
}

export interface AdminServiceResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminService;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminStatement {
  id: string;
  account: ReducedAccount;
  timezone: string;
  start_date: number;
  end_date: number;
  /** @format uri */
  file?: string | null;
  /**
   * * `queued` - Queued
   * * `processing` - Processing
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "queued" | "processing" | "complete" | "failed";
  created: number;
  updated: number;
  /** @default false */
  archived?: boolean;
}

export interface AdminStatementResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminStatement;
}

/**
 * A mixin that handles the application of permissions to properties on a
 * serializer using the built-in permissions system.
 *
 * NOTE : This only works if the following conditions are met:
 *     - The request context must contain a user.
 *     - The class this mixin is attached must be a serializer.
 *     - The class this mixin is attached to must have a Meta.model defined.
 *     - The Meta.model class must have a PERMISSION_TYPE defined.
 */
export interface AdminTransaction {
  id: string;
  collection: string;
  parent: string | null;
  partner: AdminPartnerTransaction | null;
  index: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string | null;
  note: string;
  metadata: Record<string, any>;
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  reference: string | null;
  amount: number;
  fee: number;
  total_amount: number;
  balance: number;
  label: string;
  account: string;
  currency: ReducedAsset;
  account_currency: TransactionAccountAsset;
  user: ReducedUserInfo;
  inclusive: boolean;
  archived?: boolean;
  executed: number | null;
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
export interface AdminTransactionCollection {
  id: string;
  transactions: AdminTransactionCollectionTransaction[];
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  checks?: ("type" | "verification" | "limits" | "balance")[] | null;
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminTransactionCollectionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminTransactionCollection;
}

/**
 * A mixin that handles the application of permissions to properties on a
 * serializer using the built-in permissions system.
 *
 * NOTE : This only works if the following conditions are met:
 *     - The request context must contain a user.
 *     - The class this mixin is attached must be a serializer.
 *     - The class this mixin is attached to must have a Meta.model defined.
 *     - The Meta.model class must have a PERMISSION_TYPE defined.
 */
export interface AdminTransactionCollectionTransaction {
  id: string;
  parent: string | null;
  partner: string | null;
  index: number;
  inferred: boolean;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string | null;
  note: string;
  metadata: Record<string, any>;
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  reference: string | null;
  amount: number;
  fee: number;
  total_amount: number;
  balance: number;
  label: string;
  account: string;
  currency: ReducedAsset;
  account_currency: TransactionAccountAsset;
  user: ReducedUserInfo;
  inclusive: boolean;
  /** @default false */
  archived?: boolean;
  executed: number | null;
  created: number;
  updated: number;
  expires: number;
}

export interface AdminTransactionCollectionTransactionResponse {
  status: string;
  /**
   * A mixin that handles the application of permissions to properties on a
   * serializer using the built-in permissions system.
   *
   * NOTE : This only works if the following conditions are met:
   *     - The request context must contain a user.
   *     - The class this mixin is attached must be a serializer.
   *     - The class this mixin is attached to must have a Meta.model defined.
   *     - The Meta.model class must have a PERMISSION_TYPE defined.
   */
  data: AdminTransactionCollectionTransaction;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminTransactionMessage {
  id: number;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section?: "system" | "admin" | "user";
  /**
   * * `info` - Info
   * * `warning` - Warning
   * * `error` - Error
   */
  level?: "info" | "warning" | "error";
  message: string;
  author: ReducedUserInfo | null;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminTransactionMessageResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminTransactionMessage;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminTransactionSubtype {
  id: number;
  /** @maxLength 50 */
  name: string;
  /** @maxLength 50 */
  label?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  /**
   * * `partner` - Partner
   * * `single` - Single
   * @deprecated
   */
  usage_type: "partner" | "single" | null;
  partner: ReducedTransactionSubtype;
  archived?: boolean;
  created: number;
  updated: number;
}

export type AdminTransactionSubtypeList = AdminTransactionSubtype[];

export interface AdminTransactionSubtypeListResponse {
  status: string;
  data: AdminTransactionSubtypeList;
}

export interface AdminTransactionSubtypeResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminTransactionSubtype;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminTransactionTransition {
  id: string;
  set: string;
  transaction: string;
  /**
   * * `queued` - Queued
   * * `pending` - Pending
   * * `approved` - Approved
   * * `declined` - Declined
   */
  status: "queued" | "pending" | "approved" | "declined";
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  from_status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  to_status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  index: number;
  archived: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateAccountDefinitionGroup {
  group: ReducedGroup;
  default?: boolean;
  primary?: boolean;
  currencies?: string[];
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateAccountDefinitionGroupAsset {
  currency: ReducedAsset;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateAsset {
  code: string | null;
  /** @maxLength 30 */
  display_code?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxLength 30 */
  symbol?: string | null;
  /** @maxLength 30 */
  unit?: string | null;
  divisibility: number;
  /** @format uri */
  icon?: string | null;
  manager?: string | null;
  manager_conditions?: Record<string, any>[] | null;
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateAuthToken {
  /** @min 0 */
  expires: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateAuthenticatorRule {
  id: number;
  /**
   * * `authentication` - Authentication
   * * `authorization` - Authorization
   * * `setup` - Setup
   */
  type: "authentication" | "authorization" | "setup";
  /**
   * * `ephemeral` - Ephemeral
   * * `durable` - Durable
   * * `permanent` - Permanent
   */
  durability: "ephemeral" | "durable" | "permanent";
  authenticator_types: ("totp" | "sms" | "static")[];
  permissions?: (string | null)[];
  group: ReducedGroup;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  duration?: number | null;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  session_age?: number | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateCompanyLink {
  id: number;
  key: string | null;
  counterparty: AdminCompanyLinkCounterparty;
  /** * `complete` - Complete */
  status: "complete";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateCompanySettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: UpdateCompanyDisallowedTransactionSubtype[];
  require_transaction_subtypes?: boolean;
  require_verification?: boolean;
  allow_registrations?: boolean;
  allow_overdrafts?: boolean;
  allow_session_durations?: boolean;
  require_registration?: boolean;
  /**
   * @min 300
   * @max 2678400
   */
  default_session_duration?: number;
  /**
   * @min 300
   * @max 2678400
   */
  default_transaction_lifespan?: number;
  require_terms_and_conditions?: boolean;
  require_privacy_policy?: boolean;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  account_reference_length?: number;
  /** @format uri */
  password_reset_url?: string | null;
  /** @format uri */
  password_set_url?: string | null;
  /** @format uri */
  email_verification_url?: string | null;
  /** @format uri */
  deactivate_verification_url?: string | null;
  /** @format uri */
  request_delete_verification_url?: string | null;
  /** @format uri */
  terms_and_conditions_url?: string | null;
  /** @format uri */
  privacy_policy_url?: string | null;
  /** @maxItems 249 */
  nationalities: (
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
  /** @maxItems 249 */
  residencies: (
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
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateExtendedAccount {
  reference: string;
  /**
   * @maxLength 200
   * @default "default"
   */
  name?: string;
  definition: string | null;
  /** @maxLength 200 */
  label?: string | null;
  primary?: boolean;
  recon?: boolean;
  user: ReducedUserInfo;
  currencies: AdminAccountAccountAsset[];
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A mixin that handles the application of permissions to properties on a
 * serializer using the built-in permissions system.
 *
 * NOTE : This only works if the following conditions are met:
 *     - The request context must contain a user.
 *     - The class this mixin is attached must be a serializer.
 *     - The class this mixin is attached to must have a Meta.model defined.
 *     - The Meta.model class must have a PERMISSION_TYPE defined.
 */
export interface AdminUpdateExtendedTransaction {
  id: string;
  collection: string;
  parent: string | null;
  partner: AdminPartnerTransaction | null;
  index: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string | null;
  /** @maxLength 100 */
  note?: string;
  metadata?: Record<string, any>;
  /**
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status?: "Pending" | "Complete" | "Failed";
  reference: string | null;
  amount: number;
  fee: number;
  total_amount: number;
  balance: number;
  label: string;
  account: string;
  currency: ReducedAsset;
  account_currency: TransactionAccountAsset;
  creator: ReducedUserInfo;
  user: ReducedUserInfo;
  fees: TransactionFee[];
  inclusive: boolean;
  /** @default false */
  archived?: boolean;
  executed: number | null;
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
export interface AdminUpdateGroup {
  /** @maxLength 80 */
  name: string;
  /** @maxLength 80 */
  label?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @format uri */
  icon?: string | null;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section?: "system" | "admin" | "user";
  default: boolean;
  public: boolean;
  listed: boolean;
  tiers: ReducedGroupTier[];
  settings: AdminGroupSettings;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateGroupFee {
  /** @maxLength 50 */
  name?: string | null;
  /** @min 0 */
  value?: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  debit_account?: string | null;
  credit_account?: string | null;
  debit_subtype?: string | null;
  credit_subtype?: string | null;
  inferred?: boolean;
  account_definition?: string | null;
  currency?: string;
  /** @default false */
  archived?: boolean;
}

export interface AdminUpdateGroupResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUpdateGroup;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateGroupSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: UpdateGroupDisallowedTransactionSubtype[];
  /**
   * @format uri
   * @maxLength 200
   */
  password_reset_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  password_set_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  email_verification_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  deactivate_verification_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  request_delete_verification_url?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateGroupTierFee {
  /** @maxLength 50 */
  name?: string | null;
  /** @min 0 */
  value?: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  debit_account?: string | null;
  credit_account?: string | null;
  debit_subtype?: string | null;
  credit_subtype?: string | null;
  inferred?: boolean;
  account_definition?: string | null;
  currency?: string;
  /** @default false */
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateGroupTierLimit {
  /** @min 0 */
  value: number;
  /**
   * * `max` - Maximum
   * * `day_max` - Maximum per day
   * * `month_max` - Maximum per month
   * * `min` - Minimum
   * * `overdraft` - Overdraft
   */
  type: "max" | "day_max" | "month_max" | "min" | "overdraft";
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype?: string | null;
  currency: string;
  account_definition?: string | null;
  /** @default false */
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateGroupTierSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: UpdateGroupTierDisallowedTransactionSubtype[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateOauthClient {
  id: string;
  /**
   * * `apple` - Apple
   * * `google` - Google
   */
  provider: "apple" | "google";
  /** @maxLength 250 */
  application: string;
  client_id: string;
  data?: Record<string, any>;
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateService {
  id: number;
  company: number | null;
  slug: string | null;
  /**
   * * `system` - System
   * * `public` - Public
   * * `private` - Private
   */
  type: "system" | "public" | "private";
  name?: string;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxItems 10 */
  tags?: string[] | null;
  verified: boolean;
  public: boolean;
  url?: string;
  /** @maxLength 250 */
  management_url?: string | null;
  terms_and_conditions_url: string | null;
  website_url: string | null;
  active: boolean;
}

/**
 * Generic permission handling (No properties support).
 *     - Services
 *     - Auth tokens
 */
export interface AdminUpdateServicePermission {
  id: number;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level: "view" | "add" | "change" | "delete";
}

export interface AdminUpdateServicePermissionResponse {
  status: string;
  /**
   * Generic permission handling (No properties support).
   *     - Services
   *     - Auth tokens
   */
  data: AdminUpdateServicePermission;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateTransactionCollection {
  id: string;
  transactions: AdminTransactionCollectionTransaction[];
  /**
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status?: "Quoted" | "Pending" | "Complete" | "Failed";
  checks?: ("type" | "verification" | "limits" | "balance")[] | null;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateTransactionSubtype {
  id: number;
  /** @maxLength 50 */
  name: string;
  /** @maxLength 50 */
  label?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  /**
   * * `partner` - Partner
   * * `single` - Single
   * @deprecated
   */
  usage_type?: "partner" | "single" | null;
  partner?: number | null;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateTransactionTransition {
  id: string;
  set: string;
  transaction: AdminExtendedTransaction;
  /**
   * * `approved` - Approved
   * * `declined` - Declined
   */
  status: "approved" | "declined";
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  from_status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  to_status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  index: number;
  archived: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateUserDocument {
  id: number;
  user: ReducedUserInfo;
  /** @format uri */
  file: string;
  type: number;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  /** @maxLength 250 */
  note?: string | null;
  /** @default false */
  archived?: boolean;
  expires?: number | null;
}

/**
 * Default user serializer for showing information regarding the user.
 * Information about user setting and permissions shown in
 * the ExtendedUserInfoSerializer
 */
export interface AdminUpdateUserInfo {
  id: string;
  /**
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string | null;
  /** @format email */
  email?: string;
  mobile?: string;
  /** @maxLength 50 */
  first_name?: string | null;
  /** @maxLength 50 */
  middle_name?: string | null;
  /** @maxLength 50 */
  last_name?: string | null;
  /** @format uri */
  profile?: string | null;
  /**
   * @maxItems 1
   * @minItems 0
   */
  groups?: (string | null)[];
  /** @default false */
  temporary: boolean | null;
  /** @maxLength 24 */
  id_number?: string | null;
  /** @format date */
  birth_date?: string | null;
  currency: ReducedAsset;
  account: string;
  /** @default 0 */
  balance: number;
  /** @default 0 */
  available_balance: number;
  company: string;
  owner: boolean;
  /** @maxLength 24 */
  language?: string;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  nationality?:
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
    | ""
    | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  residency?:
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
    | ""
    | null;
  /**
   * * `male` - Male
   * * `female` - Female
   * * `other` - Other
   * * `not_specified` - Not Specified
   */
  gender?: "male" | "female" | "other" | "not_specified" | null;
  /**
   * * `mr` - Mr
   * * `mrs` - Mrs
   * * `ms` - Ms
   * * `mx` - Mx
   */
  title?: "mr" | "mrs" | "ms" | "mx" | null;
  /**
   * * `single` - Single
   * * `married` - Married
   * * `divorced` - Divorced
   * * `widowed` - Widowed
   */
  marital_status?: "single" | "married" | "divorced" | "widowed" | null;
  /** @maxLength 100 */
  fathers_name?: string | null;
  /** @maxLength 100 */
  mothers_name?: string | null;
  /** @maxLength 100 */
  grandfathers_name?: string | null;
  /** @maxLength 100 */
  grandmothers_name?: string | null;
  /** @maxLength 100 */
  central_bank_number?: string | null;
  metadata?: Record<string, any>;
  /** @maxLength 100 */
  timezone?: string | null;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  business_name?: string | null;
  /** @deprecated */
  verified: boolean;
  verification: UserVerification;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  created: number;
  updated: number;
  /** @default false */
  deactivated?: boolean;
  /**
   * * `retaining` - Retaining
   * * `delete_requested` - Delete Requested
   * * `deleted` - Deleted
   */
  retention_state?: "retaining" | "delete_requested" | "deleted";
  /** @default false */
  archived?: boolean;
  last_login: number;
  settings: UserSettings;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateUserSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: UpdateUserDisallowedTransactionSubtype[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserAddress {
  id: number;
  /**
   * * `permanent` - Permanent
   * * `contact` - Contact
   * * `shipping` - Shipping
   * * `billing` - Billing
   * * `business` - Business
   */
  type?: "permanent" | "contact" | "shipping" | "billing" | "business";
  user: ReducedUserInfo;
  /** @maxLength 200 */
  line_1?: string | null;
  /** @maxLength 200 */
  line_2?: string | null;
  /** @maxLength 100 */
  city?: string | null;
  /** @maxLength 100 */
  state_province?: string | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  country?:
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
    | ""
    | null;
  /** @maxLength 10 */
  postal_code?: string | null;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminUserAddressResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserAddress;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserBankAccount {
  id: number;
  user: ReducedUserInfo;
  /** @maxLength 200 */
  name?: string | null;
  owner?: BankOwner | null;
  /** @maxLength 200 */
  number?: string | null;
  /** @maxLength 200 */
  type?: string | null;
  /**
   * * `individual` - Individual
   * * `business` - Business
   */
  beneficiary_type?: "individual" | "business" | null;
  /** @maxLength 20 */
  clabe?: string | null;
  /** @maxLength 200 */
  bank_name?: string | null;
  /** @maxLength 50 */
  bank_code?: string | null;
  /** @maxLength 3 */
  bank_currency?: string | null;
  /** @maxLength 50 */
  branch_code?: string | null;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  branch_address?: AdminUserBankBranchAddress;
  /** @maxLength 255 */
  branch_address_text?: string | null;
  /** @maxLength 50 */
  routing_number?: string | null;
  /** @maxLength 16 */
  swift?: string | null;
  /** @maxLength 50 */
  iban?: string | null;
  /** @maxLength 16 */
  bic?: string | null;
  code: string | null;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  currencies: ReducedAsset[];
  account_currencies: ReducedAccountAsset[];
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   * @default "withdraw"
   */
  action?: "withdraw" | "deposit" | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserBankAccountAsset {
  /** @maxLength 30 */
  code?: string | null;
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
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export type AdminUserBankAccountAssetList = AdminUserBankAccountAsset[];

export interface AdminUserBankAccountAssetListResponse {
  status: string;
  data: AdminUserBankAccountAssetList;
}

export interface AdminUserBankAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserBankAccountAsset;
}

export interface AdminUserBankAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserBankAccount;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserBankBranchAddress {
  /** @maxLength 200 */
  line_1?: string | null;
  /** @maxLength 200 */
  line_2?: string | null;
  /** @maxLength 100 */
  city?: string | null;
  /** @maxLength 100 */
  state_province?: string | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  country?:
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
    | ""
    | null;
  /** @maxLength 10 */
  postal_code?: string | null;
  /** @maxLength 10 */
  state_code?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserDocument {
  id: number;
  user: ReducedUserInfo;
  /** @format uri */
  file: string;
  type: ReducedDocumentType;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata: Record<string, any>;
  note: string | null;
  archived: boolean;
  expires: number;
  created: number;
  updated: number;
}

export interface AdminUserDocumentResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserDocument;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserGroup {
  /** @maxLength 80 */
  name: string;
  /** @maxLength 80 */
  label?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @format uri */
  icon?: string | null;
  default: boolean;
  public: boolean;
  listed: boolean;
  permissions: number;
  tier: AdminGroupTier;
  tiers: ReducedGroupTier[];
  settings: AdminGroupSettings;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminUserGroupResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserGroup;
}

/**
 * Default user serializer for showing information regarding the user.
 * Information about user setting and permissions shown in
 * the ExtendedUserInfoSerializer
 */
export interface AdminUserInfo {
  id: string;
  /**
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string | null;
  /** @format email */
  email: string | null;
  mobile: string | null;
  /** @maxLength 50 */
  first_name?: string | null;
  /** @maxLength 50 */
  middle_name?: string | null;
  /** @maxLength 50 */
  last_name?: string | null;
  /** @format uri */
  profile?: string | null;
  groups: ReducedGroup[];
  /** @default false */
  temporary: boolean | null;
  /** @maxLength 24 */
  id_number?: string | null;
  /** @format date */
  birth_date?: string | null;
  currency: ReducedAsset;
  account: string;
  /** @default 0 */
  balance: number;
  /** @default 0 */
  available_balance: number;
  company: string;
  owner: boolean;
  /** @maxLength 24 */
  language?: string;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  nationality?:
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
    | ""
    | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  residency?:
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
    | ""
    | null;
  /**
   * * `male` - Male
   * * `female` - Female
   * * `other` - Other
   * * `not_specified` - Not Specified
   */
  gender?: "male" | "female" | "other" | "not_specified" | null;
  /**
   * * `mr` - Mr
   * * `mrs` - Mrs
   * * `ms` - Ms
   * * `mx` - Mx
   */
  title?: "mr" | "mrs" | "ms" | "mx" | null;
  /**
   * * `single` - Single
   * * `married` - Married
   * * `divorced` - Divorced
   * * `widowed` - Widowed
   */
  marital_status?: "single" | "married" | "divorced" | "widowed" | null;
  /** @maxLength 100 */
  fathers_name?: string | null;
  /** @maxLength 100 */
  mothers_name?: string | null;
  /** @maxLength 100 */
  grandfathers_name?: string | null;
  /** @maxLength 100 */
  grandmothers_name?: string | null;
  /** @maxLength 100 */
  central_bank_number?: string | null;
  metadata?: Record<string, any>;
  /** @maxLength 100 */
  timezone?: string | null;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  business_name?: string | null;
  /** @deprecated */
  verified: boolean;
  verification: UserVerification;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  created: number;
  updated: number;
  /** @default false */
  deactivated?: boolean;
  /**
   * * `retaining` - Retaining
   * * `delete_requested` - Delete Requested
   * * `deleted` - Deleted
   */
  retention_state?: "retaining" | "delete_requested" | "deleted";
  /** @default false */
  archived?: boolean;
  last_login: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserLegalTerm {
  id: number;
  /**
   * * `system` - System
   * * `company` - Company
   */
  type: "system" | "company";
  /** @maxLength 100 */
  name: string;
  /** @maxLength 255 */
  description?: string | null;
  versions: AdminReducedUserLegalTermVersion[];
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export interface AdminUserLegalTermResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserLegalTerm;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserLegalTermVersion {
  id: number;
  version: number;
  accepted: boolean;
  accepted_date: number;
  note: string | null;
  content: string | null;
  /** @format uri */
  url: string | null;
  archived: boolean;
  created: number;
  updated: number;
}

export interface AdminUserLegalTermVersionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserLegalTermVersion;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserMessage {
  id: number;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section?: "system" | "admin" | "user";
  /**
   * * `info` - Info
   * * `warning` - Warning
   * * `error` - Error
   */
  level?: "info" | "warning" | "error";
  message: string;
  /** @default false */
  archived?: boolean;
  author: ReducedUserInfo | null;
  created: number;
  updated: number;
}

export interface AdminUserMessageResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserMessage;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserPermission {
  id: number;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level: "view" | "add" | "change" | "delete";
  properties?: Record<string, any>;
}

export interface AdminUserPermissionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserPermission;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserWalletAccount {
  id: number;
  user: ReducedUserInfo;
  /** @maxLength 200 */
  username?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** @maxLength 24 */
  mobile?: string | null;
  /** @maxLength 50 */
  name?: string | null;
  code: string | null;
  /**
   * * `paypal` - Paypal
   * * `venmo` - Venmo
   * * `other` - Other
   */
  type?: "paypal" | "venmo" | "other";
  metadata?: Record<string, any>;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  currencies: ReducedAsset[];
  /** @default false */
  archived?: boolean;
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   * @default "withdraw"
   */
  action?: "withdraw" | "deposit" | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUserWalletAccountAsset {
  /** @maxLength 30 */
  code?: string | null;
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
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

export type AdminUserWalletAccountAssetList = AdminUserWalletAccountAsset[];

export interface AdminUserWalletAccountAssetListResponse {
  status: string;
  data: AdminUserWalletAccountAssetList;
}

export interface AdminUserWalletAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserWalletAccountAsset;
}

export interface AdminUserWalletAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminUserWalletAccount;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminWebhook {
  id: number;
  /** @format uri */
  url: string;
  /**
   * * `company.link.create` - Company Link Create
   * * `company.link.update` - Company Link Update
   * * `company.update` - Company Update
   * * `currency.create` - Currency Create
   * * `currency.update` - Currency Update
   * * `user.create` - User Create
   * * `user.update` - User Update
   * * `user.password.reset` - User Password Reset
   * * `user.password.set` - User Password Set
   * * `user.deactivate.verify` - User Deactivate Verify
   * * `user.request_delete.verify` - User Request Delete Verify
   * * `user.email.verify` - User Email Verify
   * * `user.mobile.verify` - User Mobile Verify
   * * `email.create` - Email Create
   * * `email.update` - Email Update
   * * `mobile.create` - Mobile Create
   * * `mobile.update` - Mobile Update
   * * `address.create` - Address Create
   * * `address.update` - Address Update
   * * `document.create` - Document Create
   * * `document.update` - Document Update
   * * `bank_account.create` - Bank Account Create
   * * `bank_account.update` - Bank Account Update
   * * `crypto_account.create` - Crypto Account Create
   * * `crypto_account.update` - Crypto Account Update
   * * `account.create` - Account Create
   * * `account.update` - Account Update
   * * `account.currency.create` - Account Currency Create
   * * `transaction.create` - Transaction Create
   * * `transaction.update` - Transaction Update
   * * `transaction.initiate` - Transaction Initiate
   * * `transaction.execute` - Transaction Execute
   * * `transaction.transition.create` - Transaction Transition Create
   * * `transaction.transition.update` - Transaction Transition Update
   * * `mfa.sms.verify` - Mfa Sms Verify
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
    | "account.currency.create"
    | "transaction.create"
    | "transaction.update"
    | "transaction.initiate"
    | "transaction.execute"
    | "transaction.transition.create"
    | "transaction.transition.update"
    | "mfa.sms.verify";
  /** @maxLength 250 */
  secret?: string;
  /** @maxLength 250 */
  condition?: string | null;
  enabled?: boolean;
  service: ReducedService | null;
  /** @default false */
  archived?: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminWebhookRequest {
  id: number;
  response_code: number | null;
  error: string | null;
  archived: boolean;
  created: number;
  updated: number;
}

export interface AdminWebhookRequestResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminWebhookRequest;
}

export interface AdminWebhookResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AdminWebhook;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminWebhookTask {
  id: number;
  webhook: AdminWebhook;
  /** Get the number of tries that have occurred. */
  tries: number;
  completed: number;
  failed: number;
  archived: boolean;
  created: number;
  updated: number;
}

export interface Authenticated {
  /**
   * Fetch a token to use for authentication. The token is excluded if this
   * is a cookied based authenication response.
   */
  token: string;
  /**
   * Fetch a refresh token to use for refreshing authentication. The refresh
   * token is excluded if this is a cookied based authenication response.
   */
  refresh_token: string;
  /**
   * A reduced user serializer showing only the necessary information for post
   * login serialization.
   */
  user: ProtectedUserInfo;
  challenges: AuthenticatorChallenge[];
  expires: number;
  created: number;
}

export interface AuthenticatedResponse {
  status: string;
  data: Authenticated;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AuthenticatorChallenge {
  id: string;
  /**
   * * `authentication` - Authentication
   * * `authorization` - Authorization
   * * `setup` - Setup
   */
  type: "authentication" | "authorization" | "setup";
  /**
   * * `ephemeral` - Ephemeral
   * * `durable` - Durable
   * * `permanent` - Permanent
   */
  durability: "ephemeral" | "durable" | "permanent";
  authenticator_types: ("totp" | "sms" | "static")[];
  created: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface BankOwner {
  /** @maxLength 50 */
  first_name?: string | null;
  /** @maxLength 50 */
  middle_name?: string | null;
  /** @maxLength 50 */
  last_name?: string | null;
  /** @maxLength 150 */
  full_name?: string | null;
  /** @maxLength 24 */
  phone_number?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email_address?: string | null;
  /** @maxLength 100 */
  company_name?: string | null;
  /** @maxLength 15 */
  ein_tin?: string | null;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  address?: BankOwnerAddress;
  /** @maxLength 255 */
  address_text?: string | null;
  /** @maxLength 16 */
  cpf_cpnj?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface BankOwnerAddress {
  /** @maxLength 200 */
  line_1?: string | null;
  /** @maxLength 200 */
  line_2?: string | null;
  /** @maxLength 100 */
  city?: string | null;
  /** @maxLength 100 */
  state_province?: string | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  country?:
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
    | ""
    | null;
  /** @maxLength 10 */
  postal_code?: string | null;
  /** @maxLength 10 */
  state_code?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CompanyBankBranchAddress {
  /** @maxLength 200 */
  line_1?: string | null;
  /** @maxLength 200 */
  line_2?: string | null;
  /** @maxLength 100 */
  city?: string | null;
  /** @maxLength 100 */
  state_province?: string | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  country?:
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
    | ""
    | null;
  /** @maxLength 10 */
  postal_code?: string | null;
  /** @maxLength 10 */
  state_code?: string | null;
}

export interface CompanyDisallowedTransactionSubtype {
  subtype: ReducedTransactionSubtype;
  currency: ReducedAsset;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CompanySettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: CompanyDisallowedTransactionSubtype[];
  require_transaction_subtypes?: boolean;
  require_verification?: boolean;
  allow_registrations?: boolean;
  allow_overdrafts?: boolean;
  allow_session_durations?: boolean;
  require_registration?: boolean;
  /**
   * @min 300
   * @max 2678400
   */
  default_session_duration?: number;
  /**
   * @min 300
   * @max 2678400
   */
  default_transaction_lifespan?: number;
  require_terms_and_conditions?: boolean;
  require_privacy_policy?: boolean;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  account_reference_length?: number;
  /** @format uri */
  password_reset_url?: string | null;
  /** @format uri */
  password_set_url?: string | null;
  /** @format uri */
  email_verification_url?: string | null;
  /** @format uri */
  deactivate_verification_url?: string | null;
  /** @format uri */
  request_delete_verification_url?: string | null;
  /** @format uri */
  terms_and_conditions_url?: string | null;
  /** @format uri */
  privacy_policy_url?: string | null;
  /** @maxItems 249 */
  nationalities: (
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
  /** @maxItems 249 */
  residencies: (
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
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateGroupTierRequirementSetItem {
  id: number;
  /** * `resource` - Resource */
  type: "resource";
  rule: CreateGroupTierRequirementSetItemRule;
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * @min 0
   * @max 2147483647
   */
  weight?: number | null;
  created: number;
  updated: number;
}

export type CreateGroupTierRequirementSetItemRule = ResourceRequirementRule;

/**
 * Generic permission handling (No properties support).
 *     - Services
 *     - Auth tokens
 */
export interface CreatePermission {
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level: "view" | "add" | "change" | "delete";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateUpdateGroupTierRequirementSet {
  id: number;
  parent?: number | null;
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * * `all` - All
   * * `any` - Any
   */
  condition: "all" | "any";
  /**
   * @min 1
   * @max 24
   */
  min_condition_matches?: number | null;
  items: GroupTierRequirementSetItem[];
  /**
   * @min 0
   * @max 2147483647
   */
  weight?: number | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface DeviceApp {
  id: number;
  /** @maxLength 30 */
  name?: string | null;
  /** * `expo` - Expo */
  type: "expo";
  token: string | null;
  created: number;
  updated: number;
}

export interface ExtendedAuthenticated {
  /**
   * Fetch a token to use for authentication. The token is excluded if this
   * is a cookied based authenication response.
   */
  token: string;
  /**
   * Fetch a refresh token to use for refreshing authentication. The refresh
   * token is excluded if this is a cookied based authenication response.
   */
  refresh_token: string;
  /**
   * Extended user information shown based on the default user info serializer.
   * Contain additional information about user permissions and settings.
   */
  user: ExtendedUserInfo;
  challenges: AuthenticatorChallenge[];
  expires: number;
  created: number;
}

export interface ExtendedAuthenticatedResponse {
  status: string;
  data: ExtendedAuthenticated;
}

/**
 * Extended user information shown based on the default user info serializer.
 * Contain additional information about user permissions and settings.
 */
export interface ExtendedUserInfo {
  id: string;
  /**
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string | null;
  /** @format email */
  email: string | null;
  mobile: string | null;
  /** @maxLength 50 */
  first_name?: string | null;
  /** @maxLength 50 */
  middle_name?: string | null;
  /** @maxLength 50 */
  last_name?: string | null;
  /** @format uri */
  profile?: string | null;
  groups: ReducedGroup[];
  /** @default false */
  temporary: boolean | null;
  /** @maxLength 24 */
  id_number?: string | null;
  /** @format date */
  birth_date?: string | null;
  currency: ReducedAsset;
  account: string;
  /** @default 0 */
  balance: number;
  /** @default 0 */
  available_balance: number;
  company: string;
  owner: boolean;
  /** @maxLength 24 */
  language?: string;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  nationality?:
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
    | ""
    | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  residency?:
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
    | ""
    | null;
  /**
   * * `male` - Male
   * * `female` - Female
   * * `other` - Other
   * * `not_specified` - Not Specified
   */
  gender?: "male" | "female" | "other" | "not_specified" | null;
  /**
   * * `mr` - Mr
   * * `mrs` - Mrs
   * * `ms` - Ms
   * * `mx` - Mx
   */
  title?: "mr" | "mrs" | "ms" | "mx" | null;
  /**
   * * `single` - Single
   * * `married` - Married
   * * `divorced` - Divorced
   * * `widowed` - Widowed
   */
  marital_status?: "single" | "married" | "divorced" | "widowed" | null;
  /** @maxLength 100 */
  fathers_name?: string | null;
  /** @maxLength 100 */
  mothers_name?: string | null;
  /** @maxLength 100 */
  grandfathers_name?: string | null;
  /** @maxLength 100 */
  grandmothers_name?: string | null;
  /** @maxLength 100 */
  central_bank_number?: string | null;
  metadata: Record<string, any>;
  /** @maxLength 100 */
  timezone?: string | null;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  business_name?: string | null;
  /** @deprecated */
  verified: boolean;
  verification: UserVerification;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  created: number;
  updated: number;
  settings: UserSettings;
}

export interface GroupDisallowedTransactionSubtype {
  subtype: ReducedTransactionSubtype;
  currency: ReducedAsset;
  account_definition: ReducedAccountDefinition;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface GroupPermission {
  id: number;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level: "view" | "add" | "change" | "delete";
  properties: Record<string, any>;
}

export interface GroupTierDisallowedTransactionSubtype {
  subtype: ReducedTransactionSubtype;
  currency: ReducedAsset;
  account_definition: ReducedAccountDefinition;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface GroupTierFee {
  id: number;
  name: string | null;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string | null;
  account_definition: string | null;
  currency: string;
  /** Convert the Fee value from Decimal to int based on asset divisibility */
  value: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  description: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface GroupTierLimit {
  id: number;
  /** Convert the Limit value from Decimal to int based on asset divisibility */
  value: number;
  /**
   * * `max` - Maximum
   * * `day_max` - Maximum per day
   * * `month_max` - Maximum per month
   * * `min` - Minimum
   * * `overdraft` - Overdraft
   */
  type: "max" | "day_max" | "month_max" | "min" | "overdraft";
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  subtype: string;
  account_definition: string | null;
  currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface GroupTierRequirementSet {
  id: number;
  parent?: number | null;
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * * `all` - All
   * * `any` - Any
   */
  condition: "all" | "any";
  /**
   * @min 1
   * @max 24
   */
  min_condition_matches?: number | null;
  items: GroupTierRequirementSetItem[];
  /**
   * @min 0
   * @max 2147483647
   */
  weight?: number | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface GroupTierRequirementSetItem {
  id: number;
  /** * `resource` - Resource */
  type: "resource";
  rule: GroupTierRequirementSetItemRule;
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * @min 0
   * @max 2147483647
   */
  weight?: number | null;
  created: number;
  updated: number;
}

export interface GroupTierRequirementSetItemResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: GroupTierRequirementSetItem;
}

export type GroupTierRequirementSetItemRule = ResourceRequirementRule;

export interface GroupTierRequirementSetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: GroupTierRequirementSet;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface GroupTierSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: GroupTierDisallowedTransactionSubtype[];
}

export interface GroupTierSettingsResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: GroupTierSettings;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerUser {
  id: string;
  first_name: string | null;
  middle_name: string | null;
  last_name: string | null;
  service: ReducedService | null;
}

export interface NoneTypeResponse {
  status: string;
  data: {
    highest_count?: number;
    overall_total?: number;
    next?: string;
    previous?: string;
    results?: {
      users?: object[];
      accounts?: object[];
      transactions?: object[];
    };
  };
}

export interface PaginatedAdminAccessControlRuleList {
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
  results?: AdminAccessControlRule[];
}

export interface PaginatedAdminAccessControlRuleListResponse {
  status: string;
  data: PaginatedAdminAccessControlRuleList;
}

export interface PaginatedAdminAccountAccountAssetList {
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
  results?: AdminAccountAccountAsset[];
}

export interface PaginatedAdminAccountAccountAssetListResponse {
  status: string;
  data: PaginatedAdminAccountAccountAssetList;
}

export interface PaginatedAdminAccountAssetLimitList {
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
  results?: AdminAccountAssetLimit[];
}

export interface PaginatedAdminAccountAssetLimitListResponse {
  status: string;
  data: PaginatedAdminAccountAssetLimitList;
}

export interface PaginatedAdminAccountAssetList {
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
  results?: AdminAccountAsset[];
}

export interface PaginatedAdminAccountAssetListResponse {
  status: string;
  data: PaginatedAdminAccountAssetList;
}

export interface PaginatedAdminAccountDefinitionGroupAssetList {
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
  results?: AdminAccountDefinitionGroupAsset[];
}

export interface PaginatedAdminAccountDefinitionGroupAssetListResponse {
  status: string;
  data: PaginatedAdminAccountDefinitionGroupAssetList;
}

export interface PaginatedAdminAccountDefinitionGroupList {
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
  results?: AdminAccountDefinitionGroup[];
}

export interface PaginatedAdminAccountDefinitionGroupListResponse {
  status: string;
  data: PaginatedAdminAccountDefinitionGroupList;
}

export interface PaginatedAdminAccountDefinitionList {
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
  results?: AdminAccountDefinition[];
}

export interface PaginatedAdminAccountDefinitionListResponse {
  status: string;
  data: PaginatedAdminAccountDefinitionList;
}

export interface PaginatedAdminAccountList {
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
  results?: AdminAccount[];
}

export interface PaginatedAdminAccountListResponse {
  status: string;
  data: PaginatedAdminAccountList;
}

export interface PaginatedAdminAssetList {
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
  results?: AdminAsset[];
}

export interface PaginatedAdminAssetListResponse {
  status: string;
  data: PaginatedAdminAssetList;
}

export interface PaginatedAdminAuthTokenList {
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
  results?: AdminAuthToken[];
}

export interface PaginatedAdminAuthTokenListResponse {
  status: string;
  data: PaginatedAdminAuthTokenList;
}

export interface PaginatedAdminAuthenticatorRuleList {
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
  results?: AdminAuthenticatorRule[];
}

export interface PaginatedAdminAuthenticatorRuleListResponse {
  status: string;
  data: PaginatedAdminAuthenticatorRuleList;
}

export interface PaginatedAdminCompanyBankAccountAssetList {
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
  results?: AdminCompanyBankAccountAsset[];
}

export interface PaginatedAdminCompanyBankAccountAssetListResponse {
  status: string;
  data: PaginatedAdminCompanyBankAccountAssetList;
}

export interface PaginatedAdminCompanyBankAccountList {
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
  results?: AdminCompanyBankAccount[];
}

export interface PaginatedAdminCompanyBankAccountListResponse {
  status: string;
  data: PaginatedAdminCompanyBankAccountList;
}

export interface PaginatedAdminCompanyLinkList {
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
  results?: AdminCompanyLink[];
}

export interface PaginatedAdminCompanyLinkListResponse {
  status: string;
  data: PaginatedAdminCompanyLinkList;
}

export interface PaginatedAdminCompanyWalletAccountAssetList {
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
  results?: AdminCompanyWalletAccountAsset[];
}

export interface PaginatedAdminCompanyWalletAccountAssetListResponse {
  status: string;
  data: PaginatedAdminCompanyWalletAccountAssetList;
}

export interface PaginatedAdminCompanyWalletAccountList {
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
  results?: AdminCompanyWalletAccount[];
}

export interface PaginatedAdminCompanyWalletAccountListResponse {
  status: string;
  data: PaginatedAdminCompanyWalletAccountList;
}

export interface PaginatedAdminCryptoAccountList {
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
  results?: AdminCryptoAccount[];
}

export interface PaginatedAdminCryptoAccountListResponse {
  status: string;
  data: PaginatedAdminCryptoAccountList;
}

export interface PaginatedAdminDeviceAppList {
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
  results?: AdminDeviceApp[];
}

export interface PaginatedAdminDeviceAppListResponse {
  status: string;
  data: PaginatedAdminDeviceAppList;
}

export interface PaginatedAdminDeviceList {
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
  results?: AdminDevice[];
}

export interface PaginatedAdminDeviceListResponse {
  status: string;
  data: PaginatedAdminDeviceList;
}

export interface PaginatedAdminDocumentTypeList {
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
  results?: AdminDocumentType[];
}

export interface PaginatedAdminDocumentTypeListResponse {
  status: string;
  data: PaginatedAdminDocumentTypeList;
}

export interface PaginatedAdminEmailList {
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
  results?: AdminEmail[];
}

export interface PaginatedAdminEmailListResponse {
  status: string;
  data: PaginatedAdminEmailList;
}

export interface PaginatedAdminExportList {
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
  results?: AdminExport[];
}

export interface PaginatedAdminExportListResponse {
  status: string;
  data: PaginatedAdminExportList;
}

export interface PaginatedAdminGroupList {
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
  results?: AdminGroup[];
}

export interface PaginatedAdminGroupListResponse {
  status: string;
  data: PaginatedAdminGroupList;
}

export interface PaginatedAdminLegalTermList {
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
  results?: AdminLegalTerm[];
}

export interface PaginatedAdminLegalTermListResponse {
  status: string;
  data: PaginatedAdminLegalTermList;
}

export interface PaginatedAdminLegalTermVersionList {
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
  results?: AdminLegalTermVersion[];
}

export interface PaginatedAdminLegalTermVersionListResponse {
  status: string;
  data: PaginatedAdminLegalTermVersionList;
}

export interface PaginatedAdminMFAAuthenticatorList {
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
  results?: AdminMFAAuthenticator[];
}

export interface PaginatedAdminMFAAuthenticatorListResponse {
  status: string;
  data: PaginatedAdminMFAAuthenticatorList;
}

export interface PaginatedAdminMetricList {
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
  results?: AdminMetric[];
}

export interface PaginatedAdminMetricListResponse {
  status: string;
  data: PaginatedAdminMetricList;
}

export interface PaginatedAdminMetricPointList {
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
  results?: AdminMetricPoint[];
}

export interface PaginatedAdminMetricPointListResponse {
  status: string;
  data: PaginatedAdminMetricPointList;
}

export interface PaginatedAdminMobileList {
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
  results?: AdminMobile[];
}

export interface PaginatedAdminMobileListResponse {
  status: string;
  data: PaginatedAdminMobileList;
}

export interface PaginatedAdminOauthClientList {
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
  results?: AdminOauthClient[];
}

export interface PaginatedAdminOauthClientListResponse {
  status: string;
  data: PaginatedAdminOauthClientList;
}

export interface PaginatedAdminRequestList {
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
  results?: AdminRequest[];
}

export interface PaginatedAdminRequestListResponse {
  status: string;
  data: PaginatedAdminRequestList;
}

export interface PaginatedAdminServiceList {
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
  results?: AdminService[];
}

export interface PaginatedAdminServiceListResponse {
  status: string;
  data: PaginatedAdminServiceList;
}

export interface PaginatedAdminStatementList {
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
  results?: AdminStatement[];
}

export interface PaginatedAdminStatementListResponse {
  status: string;
  data: PaginatedAdminStatementList;
}

export interface PaginatedAdminTransactionCollectionList {
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
  results?: AdminTransactionCollection[];
}

export interface PaginatedAdminTransactionCollectionListResponse {
  status: string;
  data: PaginatedAdminTransactionCollectionList;
}

export interface PaginatedAdminTransactionCollectionTransactionList {
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
  results?: AdminTransactionCollectionTransaction[];
}

export interface PaginatedAdminTransactionCollectionTransactionListResponse {
  status: string;
  data: PaginatedAdminTransactionCollectionTransactionList;
}

export interface PaginatedAdminTransactionList {
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
  results?: AdminTransaction[];
}

export interface PaginatedAdminTransactionListResponse {
  status: string;
  data: PaginatedAdminTransactionList;
}

export interface PaginatedAdminTransactionMessageList {
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
  results?: AdminTransactionMessage[];
}

export interface PaginatedAdminTransactionMessageListResponse {
  status: string;
  data: PaginatedAdminTransactionMessageList;
}

export interface PaginatedAdminTransactionTransitionList {
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
  results?: AdminTransactionTransition[];
}

export interface PaginatedAdminTransactionTransitionListResponse {
  status: string;
  data: PaginatedAdminTransactionTransitionList;
}

export interface PaginatedAdminUserAddressList {
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
  results?: AdminUserAddress[];
}

export interface PaginatedAdminUserAddressListResponse {
  status: string;
  data: PaginatedAdminUserAddressList;
}

export interface PaginatedAdminUserBankAccountList {
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
  results?: AdminUserBankAccount[];
}

export interface PaginatedAdminUserBankAccountListResponse {
  status: string;
  data: PaginatedAdminUserBankAccountList;
}

export interface PaginatedAdminUserDocumentList {
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
  results?: AdminUserDocument[];
}

export interface PaginatedAdminUserDocumentListResponse {
  status: string;
  data: PaginatedAdminUserDocumentList;
}

export interface PaginatedAdminUserGroupList {
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
  results?: AdminUserGroup[];
}

export interface PaginatedAdminUserGroupListResponse {
  status: string;
  data: PaginatedAdminUserGroupList;
}

export interface PaginatedAdminUserInfoList {
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
  results?: AdminUserInfo[];
}

export interface PaginatedAdminUserInfoListResponse {
  status: string;
  data: PaginatedAdminUserInfoList;
}

export interface PaginatedAdminUserLegalTermList {
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
  results?: AdminUserLegalTerm[];
}

export interface PaginatedAdminUserLegalTermListResponse {
  status: string;
  data: PaginatedAdminUserLegalTermList;
}

export interface PaginatedAdminUserLegalTermVersionList {
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
  results?: AdminUserLegalTermVersion[];
}

export interface PaginatedAdminUserLegalTermVersionListResponse {
  status: string;
  data: PaginatedAdminUserLegalTermVersionList;
}

export interface PaginatedAdminUserMessageList {
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
  results?: AdminUserMessage[];
}

export interface PaginatedAdminUserMessageListResponse {
  status: string;
  data: PaginatedAdminUserMessageList;
}

export interface PaginatedAdminUserWalletAccountList {
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
  results?: AdminUserWalletAccount[];
}

export interface PaginatedAdminUserWalletAccountListResponse {
  status: string;
  data: PaginatedAdminUserWalletAccountList;
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
  status: string;
  data: PaginatedAdminWebhookList;
}

export interface PaginatedAdminWebhookRequestList {
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
  results?: AdminWebhookRequest[];
}

export interface PaginatedAdminWebhookRequestListResponse {
  status: string;
  data: PaginatedAdminWebhookRequestList;
}

export interface PaginatedAdminWebhookTaskList {
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
  results?: AdminWebhookTask[];
}

export interface PaginatedAdminWebhookTaskListResponse {
  status: string;
  data: PaginatedAdminWebhookTaskList;
}

export interface PaginatedGroupPermissionList {
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
  results?: GroupPermission[];
}

export interface PaginatedGroupPermissionListResponse {
  status: string;
  data: PaginatedGroupPermissionList;
}

export interface PaginatedGroupTierRequirementSetItemList {
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
  results?: GroupTierRequirementSetItem[];
}

export interface PaginatedGroupTierRequirementSetItemListResponse {
  status: string;
  data: PaginatedGroupTierRequirementSetItemList;
}

export interface PaginatedGroupTierRequirementSetList {
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
  results?: GroupTierRequirementSet[];
}

export interface PaginatedGroupTierRequirementSetListResponse {
  status: string;
  data: PaginatedGroupTierRequirementSetList;
}

export interface PaginatedPermissionList {
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
  results?: Permission[];
}

export interface PaginatedPermissionListResponse {
  status: string;
  data: PaginatedPermissionList;
}

export interface PaginatedUserPermissionList {
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
  results?: UserPermission[];
}

export interface PaginatedUserPermissionListResponse {
  status: string;
  data: PaginatedUserPermissionList;
}

/** Serializer for confirming a password reset attempt. */
export interface PasswordResetConfirm {
  /** @maxLength 128 */
  new_password?: string;
  /**
   * @deprecated
   * @maxLength 128
   */
  new_password1?: string;
  /**
   * @deprecated
   * @maxLength 128
   */
  new_password2?: string;
  uid: string;
  token: string;
  /**
   * * `all` - All
   * * `temporary` - Temporary
   * * `none` - None
   * @default "temporary"
   */
  clear_session_option?: "all" | "temporary" | "none";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminAccountAccountAsset {
  id?: string;
  balance?: number;
  available_balance?: number;
  currency?: ReducedAsset;
  limits?: AccountAssetLimit[];
  fees?: AdminAccountAssetFee[];
  metadata?: Record<string, any>;
  active?: boolean;
  settings?: AccountAssetSettings;
  subtypes?: TransactionSubtype[];
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminAccountAccountAssetSettingsUpdate {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes?: number[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCompany {
  id?: string;
  /** @maxLength 100 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  website?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  support_website?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  documentation_website?: string | null;
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
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  country?:
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
    | ""
    | null;
  /** @format uri */
  logo?: string | null;
  /** @format uri */
  icon?: string | null;
  address?: AdminCompanyAddress;
  settings?: CompanySettings;
  services?: ReducedService[];
  public?: boolean;
  metadata?: Record<string, any>;
  /**
   * * `test` - Test
   * * `production` - Production
   */
  mode?: "test" | "production";
  /**
   * * `pending` - Pending
   * * `active` - Active
   * * `restricted` - Restricted
   * * `suspended` - Suspended
   */
  status?: "pending" | "active" | "restricted" | "suspended";
  created?: number;
  updated?: number;
  /** @format email */
  system_email?: string;
  owner?: ReducedUserInfo;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCompanyAddress {
  /** @maxLength 200 */
  line_1?: string | null;
  /** @maxLength 200 */
  line_2?: string | null;
  /** @maxLength 100 */
  city?: string | null;
  /** @maxLength 100 */
  state_province?: string | null;
  country?: string | null;
  /** @maxLength 10 */
  postal_code?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCompanyBankAccount {
  id?: number;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 200 */
  number?: string | null;
  /** @maxLength 200 */
  type?: string | null;
  /** @maxLength 200 */
  bank_name?: string | null;
  /** @maxLength 50 */
  bank_code?: string | null;
  /** @maxLength 3 */
  bank_currency?: string | null;
  /** @maxLength 50 */
  branch_code?: string | null;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  branch_address?: CompanyBankBranchAddress;
  /** @maxLength 50 */
  routing_number?: string | null;
  /** @maxLength 16 */
  swift?: string | null;
  /** @maxLength 50 */
  iban?: string | null;
  /** @maxLength 16 */
  bic?: string | null;
  metadata?: Record<string, any>;
  currencies?: ReducedAsset[];
  /** @default false */
  archived?: boolean;
  /** * `deposit` - Deposit */
  action?: "deposit" | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCompanyWalletAccount {
  id?: number;
  /** @maxLength 200 */
  username?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** @maxLength 24 */
  mobile?: string | null;
  /** @maxLength 50 */
  name?: string | null;
  /**
   * * `paypal` - Paypal
   * * `venmo` - Venmo
   * * `other` - Other
   */
  type?: "paypal" | "venmo" | "other";
  metadata?: Record<string, any>;
  currencies?: ReducedAsset[];
  /** * `deposit` - Deposit */
  action?: "deposit" | null;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCreateAccessControlRule {
  id?: number;
  /**
   * * `allow` - Allow
   * * `deny` - Deny
   */
  action?: "allow" | "deny";
  /** * `ip` - Ip */
  type?: "ip";
  /** @maxLength 100 */
  value?: string;
  /** @maxLength 50 */
  label?: string | null;
  user?: string | null;
  group?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCreateAccountAccountAssetFee {
  /** @maxLength 50 */
  name?: string | null;
  /** @min 0 */
  value?: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type?: "credit" | "debit";
  subtype?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  debit_account?: string | null;
  credit_account?: string | null;
  debit_subtype?: string | null;
  credit_subtype?: string | null;
  inferred?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCreateAccountAccountAssetLimit {
  /** @min 0 */
  value?: number;
  /**
   * * `max` - Maximum
   * * `day_max` - Maximum per day
   * * `month_max` - Maximum per month
   * * `min` - Minimum
   * * `overdraft` - Overdraft
   */
  type?: "max" | "day_max" | "month_max" | "min" | "overdraft";
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type?: "credit" | "debit";
  subtype?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCreateUpdateAccountDefinition {
  /** @maxLength 200 */
  name?: string;
  /** @maxLength 200 */
  label?: string | null;
  recon?: boolean;
  /** @default false */
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCreateUpdateLegalTerm {
  id?: number;
  /**
   * * `system` - System
   * * `company` - Company
   */
  type?: "system" | "company";
  /** @maxLength 100 */
  name?: string;
  /** @maxLength 255 */
  description?: string | null;
  groups?: (string | null)[];
  versions?: AdminReducedLegalTermVersion[];
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminCryptoAccount {
  id?: number;
  /** @maxLength 250 */
  address?: string;
  /** @maxLength 50 */
  name?: string | null;
  code?: string | null;
  /**
   * * `bitcoin` - Bitcoin
   * * `ethereum` - Ethereum
   * * `stellar` - Stellar
   * * `other` - Other
   */
  crypto_type?: "bitcoin" | "ethereum" | "stellar" | "other";
  /**
   * * `testnet` - Testnet
   * * `mainnet` - Mainnet
   * @default "testnet"
   */
  network?: "testnet" | "mainnet";
  metadata?: Record<string, any>;
  user?: ReducedUserInfo;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  currencies?: ReducedAsset[];
  account_currencies?: ReducedAccountAsset[];
  /** @default false */
  archived?: boolean;
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   * @default "withdraw"
   */
  action?: "withdraw" | "deposit" | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminDevice {
  id?: number;
  user?: ReducedUserInfo;
  imei?: string;
  /** @maxLength 30 */
  name?: string | null;
  apps?: ReducedDeviceApp[];
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminDeviceApp {
  id?: number;
  /** @maxLength 30 */
  name?: string | null;
  /** * `expo` - Expo */
  type?: "expo";
  token?: string | null;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminDocumentType {
  id?: number;
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  related_resources?: (
    | "user"
    | "useraddress"
    | "userbankaccount"
    | "userwalletaccount"
    | "usercryptoaccount"
  )[];
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminEmail {
  user?: ReducedUserInfo;
  id?: number;
  /** @format email */
  email?: string;
  primary?: boolean;
  verified?: boolean;
  archived?: boolean;
  /** @default false */
  temporary?: boolean | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminExtendedGroupTier {
  id?: number;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  level?: number;
  /** @maxLength 255 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @deprecated */
  limits?: GroupTierLimit[];
  /** @deprecated */
  fees?: GroupTierFee[];
  settings?: GroupTierSettings;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminGroupPermission {
  id?: number;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section?: "system" | "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type?:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level?: "view" | "add" | "change" | "delete";
  properties?: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminLegalTermVersion {
  id?: number;
  version?: number;
  /** @maxLength 250 */
  note?: string | null;
  content?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  url?: string | null;
  created?: number;
  /** @default false */
  archived?: boolean;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminMobile {
  user?: ReducedUserInfo;
  id?: number;
  number?: string;
  primary?: boolean;
  verified?: boolean;
  /** @default false */
  archived?: boolean;
  /** @default false */
  temporary?: boolean | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateAccountDefinitionGroup {
  group?: ReducedGroup;
  default?: boolean;
  primary?: boolean;
  currencies?: string[];
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateAccountDefinitionGroupAsset {
  currency?: ReducedAsset;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateAsset {
  code?: string | null;
  /** @maxLength 30 */
  display_code?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxLength 30 */
  symbol?: string | null;
  /** @maxLength 30 */
  unit?: string | null;
  divisibility?: number;
  /** @format uri */
  icon?: string | null;
  manager?: string | null;
  manager_conditions?: Record<string, any>[] | null;
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateAuthToken {
  /** @min 0 */
  expires?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateAuthenticatorRule {
  id?: number;
  /**
   * * `authentication` - Authentication
   * * `authorization` - Authorization
   * * `setup` - Setup
   */
  type?: "authentication" | "authorization" | "setup";
  /**
   * * `ephemeral` - Ephemeral
   * * `durable` - Durable
   * * `permanent` - Permanent
   */
  durability?: "ephemeral" | "durable" | "permanent";
  authenticator_types?: ("totp" | "sms" | "static")[];
  permissions?: (string | null)[];
  group?: ReducedGroup;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  duration?: number | null;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  session_age?: number | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateCompanyLink {
  id?: number;
  key?: string | null;
  counterparty?: AdminCompanyLinkCounterparty;
  /** * `complete` - Complete */
  status?: "complete";
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateCompanySettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes?: UpdateCompanyDisallowedTransactionSubtype[];
  require_transaction_subtypes?: boolean;
  require_verification?: boolean;
  allow_registrations?: boolean;
  allow_overdrafts?: boolean;
  allow_session_durations?: boolean;
  require_registration?: boolean;
  /**
   * @min 300
   * @max 2678400
   */
  default_session_duration?: number;
  /**
   * @min 300
   * @max 2678400
   */
  default_transaction_lifespan?: number;
  require_terms_and_conditions?: boolean;
  require_privacy_policy?: boolean;
  /**
   * @min -2147483648
   * @max 2147483647
   */
  account_reference_length?: number;
  /** @format uri */
  password_reset_url?: string | null;
  /** @format uri */
  password_set_url?: string | null;
  /** @format uri */
  email_verification_url?: string | null;
  /** @format uri */
  deactivate_verification_url?: string | null;
  /** @format uri */
  request_delete_verification_url?: string | null;
  /** @format uri */
  terms_and_conditions_url?: string | null;
  /** @format uri */
  privacy_policy_url?: string | null;
  /** @maxItems 249 */
  nationalities?: (
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
  /** @maxItems 249 */
  residencies?: (
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
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateExtendedAccount {
  reference?: string;
  /**
   * @maxLength 200
   * @default "default"
   */
  name?: string;
  definition?: string | null;
  /** @maxLength 200 */
  label?: string | null;
  primary?: boolean;
  recon?: boolean;
  user?: ReducedUserInfo;
  currencies?: AdminAccountAccountAsset[];
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A mixin that handles the application of permissions to properties on a
 * serializer using the built-in permissions system.
 *
 * NOTE : This only works if the following conditions are met:
 *     - The request context must contain a user.
 *     - The class this mixin is attached must be a serializer.
 *     - The class this mixin is attached to must have a Meta.model defined.
 *     - The Meta.model class must have a PERMISSION_TYPE defined.
 */
export interface PatchedAdminUpdateExtendedTransaction {
  id?: string;
  collection?: string;
  parent?: string | null;
  partner?: AdminPartnerTransaction | null;
  index?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type?: "credit" | "debit";
  subtype?: string | null;
  /** @maxLength 100 */
  note?: string;
  metadata?: Record<string, any>;
  /**
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status?: "Pending" | "Complete" | "Failed";
  reference?: string | null;
  amount?: number;
  fee?: number;
  total_amount?: number;
  balance?: number;
  label?: string;
  account?: string;
  currency?: ReducedAsset;
  account_currency?: TransactionAccountAsset;
  creator?: ReducedUserInfo;
  user?: ReducedUserInfo;
  fees?: TransactionFee[];
  inclusive?: boolean;
  /** @default false */
  archived?: boolean;
  executed?: number | null;
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
export interface PatchedAdminUpdateGroup {
  /** @maxLength 80 */
  name?: string;
  /** @maxLength 80 */
  label?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @format uri */
  icon?: string | null;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section?: "system" | "admin" | "user";
  default?: boolean;
  public?: boolean;
  listed?: boolean;
  tiers?: ReducedGroupTier[];
  settings?: AdminGroupSettings;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateGroupFee {
  /** @maxLength 50 */
  name?: string | null;
  /** @min 0 */
  value?: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type?: "credit" | "debit";
  subtype?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  debit_account?: string | null;
  credit_account?: string | null;
  debit_subtype?: string | null;
  credit_subtype?: string | null;
  inferred?: boolean;
  account_definition?: string | null;
  currency?: string;
  /** @default false */
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateGroupSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes?: UpdateGroupDisallowedTransactionSubtype[];
  /**
   * @format uri
   * @maxLength 200
   */
  password_reset_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  password_set_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  email_verification_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  deactivate_verification_url?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  request_delete_verification_url?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateGroupTierFee {
  /** @maxLength 50 */
  name?: string | null;
  /** @min 0 */
  value?: number;
  /**
   * @format double
   * @min 0
   * @max 1000
   * @exclusiveMax true
   */
  percentage?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type?: "credit" | "debit";
  subtype?: string | null;
  /** @maxLength 250 */
  description?: string | null;
  debit_account?: string | null;
  credit_account?: string | null;
  debit_subtype?: string | null;
  credit_subtype?: string | null;
  inferred?: boolean;
  account_definition?: string | null;
  currency?: string;
  /** @default false */
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateGroupTierLimit {
  /** @min 0 */
  value?: number;
  /**
   * * `max` - Maximum
   * * `day_max` - Maximum per day
   * * `month_max` - Maximum per month
   * * `min` - Minimum
   * * `overdraft` - Overdraft
   */
  type?: "max" | "day_max" | "month_max" | "min" | "overdraft";
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type?: "credit" | "debit";
  subtype?: string | null;
  currency?: string;
  account_definition?: string | null;
  /** @default false */
  archived?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateGroupTierSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes?: UpdateGroupTierDisallowedTransactionSubtype[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateOauthClient {
  id?: string;
  /**
   * * `apple` - Apple
   * * `google` - Google
   */
  provider?: "apple" | "google";
  /** @maxLength 250 */
  application?: string;
  client_id?: string;
  data?: Record<string, any>;
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateService {
  id?: number;
  company?: number | null;
  slug?: string | null;
  /**
   * * `system` - System
   * * `public` - Public
   * * `private` - Private
   */
  type?: "system" | "public" | "private";
  name?: string;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxItems 10 */
  tags?: string[] | null;
  verified?: boolean;
  public?: boolean;
  url?: string;
  /** @maxLength 250 */
  management_url?: string | null;
  terms_and_conditions_url?: string | null;
  website_url?: string | null;
  active?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateTransactionCollection {
  id?: string;
  transactions?: AdminTransactionCollectionTransaction[];
  /**
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status?: "Quoted" | "Pending" | "Complete" | "Failed";
  checks?: ("type" | "verification" | "limits" | "balance")[] | null;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateTransactionSubtype {
  id?: number;
  /** @maxLength 50 */
  name?: string;
  /** @maxLength 50 */
  label?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type?: "credit" | "debit";
  /**
   * * `partner` - Partner
   * * `single` - Single
   * @deprecated
   */
  usage_type?: "partner" | "single" | null;
  partner?: number | null;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateTransactionTransition {
  id?: string;
  set?: string;
  transaction?: AdminExtendedTransaction;
  /**
   * * `approved` - Approved
   * * `declined` - Declined
   */
  status?: "approved" | "declined";
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  from_status?: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  to_status?: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  index?: number;
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateUserDocument {
  id?: number;
  user?: ReducedUserInfo;
  /** @format uri */
  file?: string;
  type?: number;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  /** @maxLength 250 */
  note?: string | null;
  /** @default false */
  archived?: boolean;
  expires?: number | null;
}

/**
 * Default user serializer for showing information regarding the user.
 * Information about user setting and permissions shown in
 * the ExtendedUserInfoSerializer
 */
export interface PatchedAdminUpdateUserInfo {
  id?: string;
  /**
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username?: string | null;
  /** @format email */
  email?: string;
  mobile?: string;
  /** @maxLength 50 */
  first_name?: string | null;
  /** @maxLength 50 */
  middle_name?: string | null;
  /** @maxLength 50 */
  last_name?: string | null;
  /** @format uri */
  profile?: string | null;
  /**
   * @maxItems 1
   * @minItems 0
   */
  groups?: (string | null)[];
  /** @default false */
  temporary?: boolean | null;
  /** @maxLength 24 */
  id_number?: string | null;
  /** @format date */
  birth_date?: string | null;
  currency?: ReducedAsset;
  account?: string;
  /** @default 0 */
  balance?: number;
  /** @default 0 */
  available_balance?: number;
  company?: string;
  owner?: boolean;
  /** @maxLength 24 */
  language?: string;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  nationality?:
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
    | ""
    | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  residency?:
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
    | ""
    | null;
  /**
   * * `male` - Male
   * * `female` - Female
   * * `other` - Other
   * * `not_specified` - Not Specified
   */
  gender?: "male" | "female" | "other" | "not_specified" | null;
  /**
   * * `mr` - Mr
   * * `mrs` - Mrs
   * * `ms` - Ms
   * * `mx` - Mx
   */
  title?: "mr" | "mrs" | "ms" | "mx" | null;
  /**
   * * `single` - Single
   * * `married` - Married
   * * `divorced` - Divorced
   * * `widowed` - Widowed
   */
  marital_status?: "single" | "married" | "divorced" | "widowed" | null;
  /** @maxLength 100 */
  fathers_name?: string | null;
  /** @maxLength 100 */
  mothers_name?: string | null;
  /** @maxLength 100 */
  grandfathers_name?: string | null;
  /** @maxLength 100 */
  grandmothers_name?: string | null;
  /** @maxLength 100 */
  central_bank_number?: string | null;
  metadata?: Record<string, any>;
  /** @maxLength 100 */
  timezone?: string | null;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  business_name?: string | null;
  /** @deprecated */
  verified?: boolean;
  verification?: UserVerification;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  created?: number;
  updated?: number;
  /** @default false */
  deactivated?: boolean;
  /**
   * * `retaining` - Retaining
   * * `delete_requested` - Delete Requested
   * * `deleted` - Deleted
   */
  retention_state?: "retaining" | "delete_requested" | "deleted";
  /** @default false */
  archived?: boolean;
  last_login?: number;
  settings?: UserSettings;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateUserSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes?: UpdateUserDisallowedTransactionSubtype[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUserAddress {
  id?: number;
  /**
   * * `permanent` - Permanent
   * * `contact` - Contact
   * * `shipping` - Shipping
   * * `billing` - Billing
   * * `business` - Business
   */
  type?: "permanent" | "contact" | "shipping" | "billing" | "business";
  user?: ReducedUserInfo;
  /** @maxLength 200 */
  line_1?: string | null;
  /** @maxLength 200 */
  line_2?: string | null;
  /** @maxLength 100 */
  city?: string | null;
  /** @maxLength 100 */
  state_province?: string | null;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  country?:
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
    | ""
    | null;
  /** @maxLength 10 */
  postal_code?: string | null;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUserBankAccount {
  id?: number;
  user?: ReducedUserInfo;
  /** @maxLength 200 */
  name?: string | null;
  owner?: BankOwner | null;
  /** @maxLength 200 */
  number?: string | null;
  /** @maxLength 200 */
  type?: string | null;
  /**
   * * `individual` - Individual
   * * `business` - Business
   */
  beneficiary_type?: "individual" | "business" | null;
  /** @maxLength 20 */
  clabe?: string | null;
  /** @maxLength 200 */
  bank_name?: string | null;
  /** @maxLength 50 */
  bank_code?: string | null;
  /** @maxLength 3 */
  bank_currency?: string | null;
  /** @maxLength 50 */
  branch_code?: string | null;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  branch_address?: AdminUserBankBranchAddress;
  /** @maxLength 255 */
  branch_address_text?: string | null;
  /** @maxLength 50 */
  routing_number?: string | null;
  /** @maxLength 16 */
  swift?: string | null;
  /** @maxLength 50 */
  iban?: string | null;
  /** @maxLength 16 */
  bic?: string | null;
  code?: string | null;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  /** @default false */
  archived?: boolean;
  currencies?: ReducedAsset[];
  account_currencies?: ReducedAccountAsset[];
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   * @default "withdraw"
   */
  action?: "withdraw" | "deposit" | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUserPermission {
  id?: number;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section?: "system" | "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type?:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level?: "view" | "add" | "change" | "delete";
  properties?: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUserWalletAccount {
  id?: number;
  user?: ReducedUserInfo;
  /** @maxLength 200 */
  username?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** @maxLength 24 */
  mobile?: string | null;
  /** @maxLength 50 */
  name?: string | null;
  code?: string | null;
  /**
   * * `paypal` - Paypal
   * * `venmo` - Venmo
   * * `other` - Other
   */
  type?: "paypal" | "venmo" | "other";
  metadata?: Record<string, any>;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  currencies?: ReducedAsset[];
  /** @default false */
  archived?: boolean;
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   * @default "withdraw"
   */
  action?: "withdraw" | "deposit" | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminWebhook {
  id?: number;
  /** @format uri */
  url?: string;
  /**
   * * `company.link.create` - Company Link Create
   * * `company.link.update` - Company Link Update
   * * `company.update` - Company Update
   * * `currency.create` - Currency Create
   * * `currency.update` - Currency Update
   * * `user.create` - User Create
   * * `user.update` - User Update
   * * `user.password.reset` - User Password Reset
   * * `user.password.set` - User Password Set
   * * `user.deactivate.verify` - User Deactivate Verify
   * * `user.request_delete.verify` - User Request Delete Verify
   * * `user.email.verify` - User Email Verify
   * * `user.mobile.verify` - User Mobile Verify
   * * `email.create` - Email Create
   * * `email.update` - Email Update
   * * `mobile.create` - Mobile Create
   * * `mobile.update` - Mobile Update
   * * `address.create` - Address Create
   * * `address.update` - Address Update
   * * `document.create` - Document Create
   * * `document.update` - Document Update
   * * `bank_account.create` - Bank Account Create
   * * `bank_account.update` - Bank Account Update
   * * `crypto_account.create` - Crypto Account Create
   * * `crypto_account.update` - Crypto Account Update
   * * `account.create` - Account Create
   * * `account.update` - Account Update
   * * `account.currency.create` - Account Currency Create
   * * `transaction.create` - Transaction Create
   * * `transaction.update` - Transaction Update
   * * `transaction.initiate` - Transaction Initiate
   * * `transaction.execute` - Transaction Execute
   * * `transaction.transition.create` - Transaction Transition Create
   * * `transaction.transition.update` - Transaction Transition Update
   * * `mfa.sms.verify` - Mfa Sms Verify
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
    | "account.currency.create"
    | "transaction.create"
    | "transaction.update"
    | "transaction.initiate"
    | "transaction.execute"
    | "transaction.transition.create"
    | "transaction.transition.update"
    | "mfa.sms.verify";
  /** @maxLength 250 */
  secret?: string;
  /** @maxLength 250 */
  condition?: string | null;
  enabled?: boolean;
  service?: ReducedService | null;
  /** @default false */
  archived?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedCreateUpdateGroupTierRequirementSet {
  id?: number;
  parent?: number | null;
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * * `all` - All
   * * `any` - Any
   */
  condition?: "all" | "any";
  /**
   * @min 1
   * @max 24
   */
  min_condition_matches?: number | null;
  items?: GroupTierRequirementSetItem[];
  /**
   * @min 0
   * @max 2147483647
   */
  weight?: number | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedGroupTierRequirementSetItem {
  id?: number;
  /** * `resource` - Resource */
  type?: "resource";
  rule?: GroupTierRequirementSetItemRule;
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /**
   * @min 0
   * @max 2147483647
   */
  weight?: number | null;
  created?: number;
  updated?: number;
}

/**
 * Generic permission handling (No properties support).
 *     - Services
 *     - Auth tokens
 */
export interface Permission {
  id: number;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level: "view" | "add" | "change" | "delete";
}

export interface PermissionResponse {
  status: string;
  /**
   * Generic permission handling (No properties support).
   *     - Services
   *     - Auth tokens
   */
  data: Permission;
}

/**
 * A reduced user serializer showing only the necessary information for post
 * login serialization.
 */
export interface ProtectedUserInfo {
  id: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedAccount {
  reference: string;
  /** @maxLength 200 */
  name?: string;
  /** @maxLength 200 */
  label?: string | null;
  definition: string | null;
  primary: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedAccountAsset {
  id: string;
  balance: number;
  available_balance: number;
  account: ReducedAccount;
  currency: ReducedAsset;
  active: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedAccountDefinition {
  /** @maxLength 200 */
  name: string;
  /** @maxLength 200 */
  label?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedAsset {
  /** @maxLength 30 */
  code?: string | null;
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
  /** @format uri */
  icon: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedCompany {
  id: string;
  name: string | null;
  /** @format uri */
  icon: string | null;
  /**
   * * `test` - Test
   * * `production` - Production
   */
  mode: "test" | "production";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedDeviceApp {
  id: number;
  /** @maxLength 30 */
  name?: string | null;
  /** * `expo` - Expo */
  type: "expo";
  token: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedDocumentType {
  id: number;
  name: string | null;
  description: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedGroup {
  /** @maxLength 80 */
  name: string;
  /** @maxLength 80 */
  label?: string | null;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedGroupTier {
  id: number;
  level: number;
  name: string | null;
  description: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ReducedService {
  id: number;
  slug: string | null;
  name: string;
  url: string;
  /**
   * * `system` - System
   * * `public` - Public
   * * `private` - Private
   */
  type: "system" | "public" | "private";
}

export interface ReducedTransactionSubtype {
  id: number;
  /** @maxLength 50 */
  name: string;
  /** @maxLength 50 */
  label?: string | null;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
}

/**
 * A condensed user serializer showing only the necessary user information
 * in order to identifiy the user.
 */
export interface ReducedUserInfo {
  id: string;
  username: string | null;
  /** @format email */
  email: string | null;
  mobile: string | null;
  first_name: string | null;
  middle_name: string | null;
  last_name: string | null;
  /** @format uri */
  profile?: string | null;
  groups: ReducedGroup[];
  temporary: boolean | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ResourceRequirementRule {
  /**
   * * `address` - Address
   * * `bank_account` - Bank Account
   * * `document` - Document
   * * `email` - Email
   * * `mobile` - Mobile
   * * `user` - User
   */
  resource:
    | "address"
    | "bank_account"
    | "document"
    | "email"
    | "mobile"
    | "user";
  condition: Record<string, any>;
}

export interface TotalTransaction {
  total_amount: number;
  amount: number;
  fees: number;
  count: number;
  currency: string;
}

export interface TotalTransactionResponse {
  status: string;
  data: TotalTransaction;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface TransactionAccountAsset {
  id: string;
  account: ReducedAccount;
  currency: ReducedAsset;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface TransactionFee {
  description: string;
  amount: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface TransactionSubtype {
  id: number;
  name: string;
  label: string | null;
  description: string | null;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type: "credit" | "debit";
  /**
   * * `partner` - Partner
   * * `single` - Single
   * @deprecated
   */
  usage_type: "partner" | "single" | null;
  partner: ReducedTransactionSubtype;
  created: number;
  updated: number;
}

export interface UpdateCompanyDisallowedTransactionSubtype {
  subtype: number;
  currency?: string | null;
}

export interface UpdateGroupDisallowedTransactionSubtype {
  subtype: number;
  currency?: string | null;
  account_definition?: string | null;
}

export interface UpdateGroupTierDisallowedTransactionSubtype {
  subtype: number;
  currency?: string | null;
  account_definition?: string | null;
}

export interface UpdateUserDisallowedTransactionSubtype {
  subtype: number;
  currency?: string;
}

export interface UserDisallowedTransactionSubtype {
  subtype: ReducedTransactionSubtype;
  currency: ReducedAsset;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserPermission {
  id: number;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
  /**
   * * `accesscontrolrule` - Access Control Rule
   * * `account` - Account
   * * `accountdefinition` - Account Definition
   * * `address` - Address
   * * `currency` - Currency
   * * `bankaccount` - Bank Account
   * * `company` - Company
   * * `cryptoaccount` - Crypto Account
   * * `device` - Device
   * * `document` - Document
   * * `email` - Email
   * * `group` - Group
   * * `jwt` - Jwt
   * * `legalterm` - Legal Term
   * * `mfa` - Mfa
   * * `mfarule` - Mfa Rule
   * * `mobile` - Mobile
   * * `notification` - Notification
   * * `oauthclient` - Oauth Client
   * * `permission` - Permission
   * * `request` - Request
   * * `service` - Service
   * * `token` - Token
   * * `transaction` - Transaction
   * * `transactionsubtypes` - Transaction Subtypes
   * * `user` - User
   * * `webhook` - Webhook
   */
  type:
    | "accesscontrolrule"
    | "account"
    | "accountdefinition"
    | "address"
    | "currency"
    | "bankaccount"
    | "company"
    | "cryptoaccount"
    | "device"
    | "document"
    | "email"
    | "group"
    | "jwt"
    | "legalterm"
    | "mfa"
    | "mfarule"
    | "mobile"
    | "notification"
    | "oauthclient"
    | "permission"
    | "request"
    | "service"
    | "token"
    | "transaction"
    | "transactionsubtypes"
    | "user"
    | "webhook";
  /**
   * * `view` - View
   * * `add` - Add
   * * `change` - Change
   * * `delete` - Delete
   */
  level: "view" | "add" | "change" | "delete";
  properties: Record<string, any>;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: UserDisallowedTransactionSubtype[];
}

export interface UserSettingsResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: UserSettings;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserVerification {
  email: boolean;
  mobile: boolean;
}

export interface VerifyDeactivate {
  key: string;
}

export interface VerifyRequestDelete {
  key: string;
}

export interface AccessControlRulesListParams {
  action?: string;
  group?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
  user?: string;
}

export type AccessControlRulesListData =
  PaginatedAdminAccessControlRuleListResponse;

export type AccessControlRulesCreateData = AdminAccessControlRuleResponse;

export type AccessControlRulesRetrieveData = AdminAccessControlRuleResponse;

export type AccessControlRulesUpdateData = AdminAccessControlRuleResponse;

export type AccessControlRulesPartialUpdateData =
  AdminAccessControlRuleResponse;

export type AccessControlRulesDestroyData = ActionResponse;

export interface AccountCurrenciesListParams {
  account?: string;
  account__definition?: string;
  account__name?: string;
  account__name__contains?: string;
  active?: boolean;
  archived?: boolean;
  available_balance?: number;
  available_balance__gt?: number;
  available_balance__lt?: number;
  balance?: number;
  balance__gt?: number;
  balance__lt?: number;
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
  currency?: string;
  /** @format date-time */
  exclude__transactions__created__gt?: string;
  /** @format date-time */
  exclude__transactions__created__lt?: string;
  group?: string;
  historic?: string;
  orderby?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @format date-time */
  transactions__created__gt?: string;
  /** @format date-time */
  transactions__created__lt?: string;
  /** @format date-time */
  updated?: string;
  /** @format date-time */
  updated__gt?: string;
  /** @format date-time */
  updated__gte?: string;
  /** @format date-time */
  updated__lt?: string;
  /** @format date-time */
  updated__lte?: string;
  user?: string;
  user__isnull?: boolean;
}

export type AccountCurrenciesListData = PaginatedAdminAccountAssetListResponse;

export interface AccountDefinitionsListParams {
  archived?: boolean;
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
  group?: string;
  /**
   * Ordering
   *
   * * `created` - Created
   * * `-created` - Created (descending)
   * * `name` - Name
   * * `-name` - Name (descending)
   */
  orderby?: ("-created" | "-name" | "created" | "name")[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AccountDefinitionsListData =
  PaginatedAdminAccountDefinitionListResponse;

export type AccountDefinitionsCreateData = AdminAccountDefinitionResponse;

export type AccountDefinitionsRetrieveData = AdminAccountDefinitionResponse;

export type AccountDefinitionsUpdateData = AdminAccountDefinitionResponse;

export type AccountDefinitionsPartialUpdateData =
  AdminAccountDefinitionResponse;

export interface AccountDefinitionsGroupsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  definitionName: string;
}

export type AccountDefinitionsGroupsListData =
  PaginatedAdminAccountDefinitionGroupListResponse;

export type AccountDefinitionsGroupsCreateData =
  AdminAccountDefinitionGroupResponse;

export type AccountDefinitionsGroupsRetrieveData =
  AdminAccountDefinitionGroupResponse;

export type AccountDefinitionsGroupsUpdateData =
  AdminAccountDefinitionGroupResponse;

export type AccountDefinitionsGroupsPartialUpdateData =
  AdminAccountDefinitionGroupResponse;

export interface AccountDefinitionsGroupsCurrenciesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  definitionGroupName: string;
  /** @pattern ^\w+$ */
  definitionName: string;
}

export type AccountDefinitionsGroupsCurrenciesListData =
  PaginatedAdminAccountDefinitionGroupAssetListResponse;

export type AccountDefinitionsGroupsCurrenciesCreateData =
  AdminAccountDefinitionGroupAssetResponse;

export type AccountDefinitionsGroupsCurrenciesRetrieveData =
  AdminAccountDefinitionGroupAssetResponse;

export type AccountDefinitionsGroupsCurrenciesUpdateData =
  AdminAccountDefinitionGroupAssetResponse;

export type AccountDefinitionsGroupsCurrenciesPartialUpdateData =
  AdminAccountDefinitionGroupAssetResponse;

export interface AccountsListParams {
  active?: boolean;
  archived?: boolean;
  available_balance?: number;
  available_balance__gt?: number;
  available_balance__lt?: number;
  balance?: number;
  balance__gt?: number;
  balance__lt?: number;
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
  currency?: string;
  definition?: string;
  group?: string;
  name?: string;
  orderby?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  primary?: boolean;
  recon?: boolean;
  reference?: string;
  reference__contains?: string;
  search?: string;
  /** @format date-time */
  updated?: string;
  /** @format date-time */
  updated__gt?: string;
  /** @format date-time */
  updated__gte?: string;
  /** @format date-time */
  updated__lt?: string;
  /** @format date-time */
  updated__lte?: string;
  user?: string;
  user__isnull?: boolean;
}

export type AccountsListData = PaginatedAdminAccountListResponse;

export type AccountsCreateData = AdminAccountResponse;

export type AccountsRetrieveData = AdminExtendedAccountResponse;

export type AccountsUpdateData = AdminExtendedAccountResponse;

export type AccountsPartialUpdateData = AdminExtendedAccountResponse;

export interface AccountsCurrenciesListParams {
  account?: string;
  account__definition?: string;
  account__name?: string;
  account__name__contains?: string;
  active?: boolean;
  archived?: boolean;
  available_balance?: number;
  available_balance__gt?: number;
  available_balance__lt?: number;
  balance?: number;
  balance__gt?: number;
  balance__lt?: number;
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
  currency?: string;
  /** @format date-time */
  exclude__transactions__created__gt?: string;
  /** @format date-time */
  exclude__transactions__created__lt?: string;
  group?: string;
  historic?: string;
  orderby?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @format date-time */
  transactions__created__gt?: string;
  /** @format date-time */
  transactions__created__lt?: string;
  /** @format date-time */
  updated?: string;
  /** @format date-time */
  updated__gt?: string;
  /** @format date-time */
  updated__gte?: string;
  /** @format date-time */
  updated__lt?: string;
  /** @format date-time */
  updated__lte?: string;
  user?: string;
  user__isnull?: boolean;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  reference: string;
}

export type AccountsCurrenciesListData =
  PaginatedAdminAccountAccountAssetListResponse;

export type AccountsCurrenciesCreateData = AdminAccountAccountAssetResponse;

export type AccountsCurrenciesRetrieveData = AdminAccountAccountAssetResponse;

export type AccountsCurrenciesUpdateData = AdminAccountAccountAssetResponse;

export type AccountsCurrenciesPartialUpdateData =
  AdminAccountAccountAssetResponse;

export type AccountsCurrenciesFeesListData = AdminAccountAssetFeeListResponse;

export type AccountsCurrenciesFeesCreateData = AdminAccountAssetFeeResponse;

export type AccountsCurrenciesFeesRetrieveData = AdminAccountAssetFeeResponse;

export type AccountsCurrenciesFeesUpdateData = AdminAccountAssetFeeResponse;

export type AccountsCurrenciesFeesPartialUpdateData =
  AdminAccountAssetFeeResponse;

export type AccountsCurrenciesFeesDestroyData = ActionResponse;

export interface AccountsCurrenciesLimitsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  code: string;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  reference: string;
}

export type AccountsCurrenciesLimitsListData =
  PaginatedAdminAccountAssetLimitListResponse;

export type AccountsCurrenciesLimitsCreateData = AdminAccountAssetLimitResponse;

export type AccountsCurrenciesLimitsRetrieveData =
  AdminAccountAssetLimitResponse;

export type AccountsCurrenciesLimitsUpdateData = AdminAccountAssetLimitResponse;

export type AccountsCurrenciesLimitsPartialUpdateData =
  AdminAccountAssetLimitResponse;

export type AccountsCurrenciesLimitsDestroyData = ActionResponse;

export type AccountsCurrenciesSettingsRetrieveData =
  AccountAssetSettingsResponse;

export type AccountsCurrenciesSettingsUpdateData = AccountAssetSettingsResponse;

export type AccountsCurrenciesSettingsPartialUpdateData =
  AccountAssetSettingsResponse;

export type AuthDeactivateCreateData = ActionResponse;

export type AuthDeactivateVerifyCreateData = ActionResponse;

export type AuthLoginCreateData = AuthenticatedResponse;

export type AuthPasswordResetCreateData = ActionResponse;

export type AuthPasswordResetConfirmCreateData = ActionResponse;

export type AuthRegisterCreateData = ExtendedAuthenticatedResponse;

export type AuthRequestDeleteCreateData = ActionResponse;

export type AuthRequestDeleteVerifyCreateData = ActionResponse;

export interface AuthenticatorRulesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AuthenticatorRulesListData =
  PaginatedAdminAuthenticatorRuleListResponse;

export type AuthenticatorRulesCreateData = AdminAuthenticatorRuleResponse;

export type AuthenticatorRulesRetrieveData = AdminAuthenticatorRuleResponse;

export type AuthenticatorRulesUpdateData = AdminAuthenticatorRuleResponse;

export type AuthenticatorRulesPartialUpdateData =
  AdminAuthenticatorRuleResponse;

export type AuthenticatorRulesDestroyData = ActionResponse;

export interface BankAccountsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type BankAccountsListData = PaginatedAdminCompanyBankAccountListResponse;

export type BankAccountsCreateData = AdminCompanyBankAccountResponse;

export type BankAccountsRetrieveData = AdminCompanyBankAccountResponse;

export type BankAccountsUpdateData = AdminCompanyBankAccountResponse;

export type BankAccountsPartialUpdateData = AdminCompanyBankAccountResponse;

export type BankAccountsDestroyData = ActionResponse;

export interface BankAccountsCurrenciesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\d+$ */
  id: string;
}

export type BankAccountsCurrenciesListData =
  PaginatedAdminCompanyBankAccountAssetListResponse;

export type BankAccountsCurrenciesCreateData =
  AdminCompanyBankAccountAssetResponse;

export type BankAccountsCurrenciesRetrieveData =
  AdminCompanyBankAccountAssetResponse;

export type BankAccountsCurrenciesDestroyData = ActionResponse;

export type CompanyRetrieveData = AdminCompanyResponse;

export type CompanyUpdateData = AdminCompanyResponse;

export type CompanyPartialUpdateData = AdminCompanyResponse;

export type CompanyAddressRetrieveData = AdminCompanyAddressResponse;

export type CompanyAddressUpdateData = AdminCompanyAddressResponse;

export type CompanyAddressPartialUpdateData = AdminCompanyAddressResponse;

export interface CompanyLinksListParams {
  key?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
}

export type CompanyLinksListData = PaginatedAdminCompanyLinkListResponse;

export type CompanyLinksCreateData = AdminCompanyLinkResponse;

export type CompanyLinksRetrieveData = AdminCompanyLinkResponse;

export type CompanyLinksUpdateData = AdminCompanyLinkResponse;

export type CompanyLinksPartialUpdateData = AdminCompanyLinkResponse;

export type CompanyLinksDestroyData = ActionResponse;

export type CompanySettingsRetrieveData = AdminCompanySettingsResponse;

export type CompanySettingsUpdateData = AdminCompanySettingsResponse;

export type CompanySettingsPartialUpdateData = AdminCompanySettingsResponse;

export interface CurrenciesListParams {
  archived?: boolean;
  code?: string;
  code__in?: string;
  display_code?: string;
  /**
   * Ordering
   *
   * * `created` - Created
   * * `-created` - Created (descending)
   * * `code` - Code
   * * `-code` - Code (descending)
   * * `display_code` - Display code
   * * `-display_code` - Display code (descending)
   */
  orderby?: (
    | "-code"
    | "-created"
    | "-display_code"
    | "code"
    | "created"
    | "display_code"
  )[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  unit?: string;
}

export type CurrenciesListData = PaginatedAdminAssetListResponse;

export type CurrenciesCreateData = AdminAssetResponse;

export type CurrenciesRetrieveData = AdminAssetResponse;

export type CurrenciesUpdateData = AdminAssetResponse;

export type CurrenciesPartialUpdateData = AdminAssetResponse;

export type CurrenciesOverviewRetrieveData = AdminOverviewAssetResponse;

export interface DocumentTypesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type DocumentTypesListData = PaginatedAdminDocumentTypeListResponse;

export type DocumentTypesCreateData = AdminDocumentTypeResponse;

export type DocumentTypesRetrieveData = AdminDocumentTypeResponse;

export type DocumentTypesUpdateData = AdminDocumentTypeResponse;

export type DocumentTypesPartialUpdateData = AdminDocumentTypeResponse;

export type DocumentTypesDestroyData = ActionResponse;

export interface ExportsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  resource?: string;
  section?: string;
  status?: string;
  user?: string;
}

export type ExportsListData = PaginatedAdminExportListResponse;

export type ExportsCreateData = AdminExportResponse;

export type ExportsRetrieveData = AdminExtendedExportResponse;

export type ExportsDestroyData = ActionResponse;

export interface GroupsListParams {
  archived?: boolean;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  created__gt?: string;
  /** @format date-time */
  created__lt?: string;
  default?: boolean;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  public?: boolean;
  section?: string;
  /** @format date-time */
  updated?: string;
  /** @format date-time */
  updated__gt?: string;
  /** @format date-time */
  updated__lt?: string;
}

export type GroupsListData = PaginatedAdminGroupListResponse;

export type GroupsCreateData = AdminGroupResponse;

export type GroupsRetrieveData = AdminUpdateGroupResponse;

export type GroupsUpdateData = AdminUpdateGroupResponse;

export type GroupsPartialUpdateData = AdminUpdateGroupResponse;

export type GroupsFeesListData = AdminGroupFeeListResponse;

export type GroupsFeesCreateData = AdminGroupFeeResponse;

export type GroupsFeesRetrieveData = AdminGroupFeeResponse;

export type GroupsFeesUpdateData = AdminGroupFeeResponse;

export type GroupsFeesPartialUpdateData = AdminGroupFeeResponse;

export type GroupsFeesDestroyData = ActionResponse;

export interface GroupsPermissionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  groupName: string;
}

export type GroupsPermissionsListData = PaginatedGroupPermissionListResponse;

export type GroupsPermissionsCreateData = AdminMultiGroupPermissionResponse;

export type GroupsPermissionsRetrieveData = AdminGroupPermissionResponse;

export type GroupsPermissionsUpdateData = AdminGroupPermissionResponse;

export type GroupsPermissionsPartialUpdateData = AdminGroupPermissionResponse;

export type GroupsPermissionsDestroyData = ActionResponse;

export type GroupsSettingsRetrieveData = AdminGroupSettingsResponse;

export type GroupsSettingsUpdateData = AdminGroupSettingsResponse;

export type GroupsSettingsPartialUpdateData = AdminGroupSettingsResponse;

export interface GroupsTiersListParams {
  active?: boolean;
  level?: number;
  requirement?: string;
  /** @pattern ^\w+$ */
  groupName: string;
}

export type GroupsTiersListData = AdminGroupTierListResponse;

export type GroupsTiersCreateData = AdminGroupTierResponse;

export type GroupsTiersRetrieveData = AdminExtendedGroupTierResponse;

export type GroupsTiersUpdateData = AdminExtendedGroupTierResponse;

export type GroupsTiersPartialUpdateData = AdminExtendedGroupTierResponse;

export type GroupsTiersDestroyData = ActionResponse;

export type GroupsTiersFeesListData = AdminGroupTierFeeListResponse;

export type GroupsTiersFeesCreateData = AdminGroupTierFeeResponse;

export type GroupsTiersFeesRetrieveData = AdminGroupTierFeeResponse;

export type GroupsTiersFeesUpdateData = AdminGroupTierFeeResponse;

export type GroupsTiersFeesPartialUpdateData = AdminGroupTierFeeResponse;

export type GroupsTiersFeesDestroyData = ActionResponse;

export type GroupsTiersLimitsListData = AdminGroupTierLimitListResponse;

export type GroupsTiersLimitsCreateData = AdminGroupTierLimitResponse;

export type GroupsTiersLimitsRetrieveData = AdminGroupTierLimitResponse;

export type GroupsTiersLimitsUpdateData = AdminGroupTierLimitResponse;

export type GroupsTiersLimitsPartialUpdateData = AdminGroupTierLimitResponse;

export type GroupsTiersLimitsDestroyData = ActionResponse;

export interface GroupsTiersRequirementSetsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  groupName: string;
  /** @pattern ^\d+$ */
  tierId: string;
}

export type GroupsTiersRequirementSetsListData =
  PaginatedGroupTierRequirementSetListResponse;

export type GroupsTiersRequirementSetsCreateData =
  GroupTierRequirementSetResponse;

export type GroupsTiersRequirementSetsRetrieveData =
  GroupTierRequirementSetResponse;

export type GroupsTiersRequirementSetsUpdateData =
  GroupTierRequirementSetResponse;

export type GroupsTiersRequirementSetsPartialUpdateData =
  GroupTierRequirementSetResponse;

export type GroupsTiersRequirementSetsDestroyData = ActionResponse;

export interface GroupsTiersRequirementSetsItemsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  groupName: string;
  /** @pattern ^\d+$ */
  reqSetId: string;
  /** @pattern ^\d+$ */
  tierId: string;
}

export type GroupsTiersRequirementSetsItemsListData =
  PaginatedGroupTierRequirementSetItemListResponse;

export type GroupsTiersRequirementSetsItemsCreateData =
  GroupTierRequirementSetItemResponse;

export type GroupsTiersRequirementSetsItemsRetrieveData =
  GroupTierRequirementSetItemResponse;

export type GroupsTiersRequirementSetsItemsUpdateData =
  GroupTierRequirementSetItemResponse;

export type GroupsTiersRequirementSetsItemsPartialUpdateData =
  GroupTierRequirementSetItemResponse;

export type GroupsTiersRequirementSetsItemsDestroyData = ActionResponse;

export type GroupsTiersSettingsRetrieveData = GroupTierSettingsResponse;

export type GroupsTiersSettingsUpdateData = GroupTierSettingsResponse;

export type GroupsTiersSettingsPartialUpdateData = GroupTierSettingsResponse;

export interface LegalTermsListParams {
  group?: string;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
}

export type LegalTermsListData = PaginatedAdminLegalTermListResponse;

export type LegalTermsCreateData = AdminLegalTermResponse;

export type LegalTermsRetrieveData = AdminLegalTermResponse;

export type LegalTermsUpdateData = AdminLegalTermResponse;

export type LegalTermsPartialUpdateData = AdminLegalTermResponse;

export type LegalTermsDestroyData = ActionResponse;

export interface LegalTermsVersionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\d+$ */
  id: string;
}

export type LegalTermsVersionsListData =
  PaginatedAdminLegalTermVersionListResponse;

export type LegalTermsVersionsCreateData = AdminLegalTermVersionResponse;

export type LegalTermsVersionsRetrieveData = AdminLegalTermVersionResponse;

export type LegalTermsVersionsUpdateData = AdminLegalTermVersionResponse;

export type LegalTermsVersionsPartialUpdateData = AdminLegalTermVersionResponse;

export type LegalTermsVersionsDestroyData = ActionResponse;

export interface MetricsListParams {
  archived?: boolean;
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
  currency?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  section?: string;
  slug?: string;
  slug__in?: string;
  type?: string;
  user?: string;
}

export type MetricsListData = PaginatedAdminMetricListResponse;

export type MetricsCreateData = AdminMetricResponse;

export type MetricsRetrieveData = AdminMetricResponse;

export type MetricsDestroyData = ActionResponse;

export interface MetricsPointsListParams {
  /** @format date-time */
  date?: string;
  /** @format date-time */
  date__gt?: string;
  /** @format date-time */
  date__gte?: string;
  /** @format date-time */
  date__lt?: string;
  /** @format date-time */
  date__lte?: string;
  interval?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  identifier: string;
}

export type MetricsPointsListData = PaginatedAdminMetricPointListResponse;

export interface OauthClientsListParams {
  application?: string;
  client_id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  provider?: string;
}

export type OauthClientsListData = PaginatedAdminOauthClientListResponse;

export type OauthClientsCreateData = AdminOauthClientResponse;

export type OauthClientsRetrieveData = AdminOauthClientResponse;

export type OauthClientsUpdateData = AdminOauthClientResponse;

export type OauthClientsPartialUpdateData = AdminOauthClientResponse;

export type OauthClientsDestroyData = ActionResponse;

export interface PermissionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type PermissionsListData = PaginatedPermissionListResponse;

export type PermissionsRetrieveData = PermissionResponse;

export interface RequestsListParams {
  content_type?: string;
  key?: string;
  method?: string;
  method__in?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  path?: string;
  path__contains?: string;
  resource?: string;
  resource_id?: string;
  scheme?: string;
  status_code?: number;
  user?: string;
}

export type RequestsListData = PaginatedAdminRequestListResponse;

export type RequestsRetrieveData = AdminExtendedRequestResponse;

export interface SearchRetrieveParams {
  page?: number;
  page_size?: number;
  query?: string;
  resources?: string;
}

export interface SearchRetrieveData {
  highest_count?: number;
  overall_total?: number;
  next?: string;
  previous?: string;
  results?: {
    users?: object[];
    accounts?: object[];
    transactions?: object[];
  };
}

export interface ServicesListParams {
  active?: boolean;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  slug?: string;
  type?: string;
  /** Multiple values may be separated by commas. */
  type__in?: string[];
}

export type ServicesListData = PaginatedAdminServiceListResponse;

export type ServicesCreateData = AdminServiceResponse;

export type ServicesRetrieveData = AdminServiceResponse;

export type ServicesUpdateData = AdminServiceResponse;

export type ServicesPartialUpdateData = AdminServiceResponse;

export type ServicesDestroyData = ActionResponse;

export interface ServicesPermissionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\d+$ */
  serviceId: string;
}

export type ServicesPermissionsListData = PaginatedPermissionListResponse;

export type ServicesPermissionsCreateData = AdminMultiPermissionResponse;

export type ServicesPermissionsRetrieveData =
  AdminUpdateServicePermissionResponse;

export type ServicesPermissionsDestroyData = ActionResponse;

export interface StatementsListParams {
  account?: string;
  archived?: boolean;
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
  user?: string;
}

export type StatementsListData = PaginatedAdminStatementListResponse;

export type StatementsCreateData = AdminStatementResponse;

export type StatementsRetrieveData = AdminStatementResponse;

export type StatementsDestroyData = ActionResponse;

export interface SubtypesListParams {
  archived?: boolean;
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
  name?: string;
  partner__isnull?: boolean;
  tx_type?: string;
  usage_type?: string;
}

export type SubtypesListData = AdminTransactionSubtypeListResponse;

export type SubtypesCreateData = AdminTransactionSubtypeResponse;

export type SubtypesRetrieveData = AdminTransactionSubtypeResponse;

export type SubtypesUpdateData = AdminTransactionSubtypeResponse;

export type SubtypesPartialUpdateData = AdminTransactionSubtypeResponse;

export type SubtypesDestroyData = ActionResponse;

export interface TransactionCollectionsListParams {
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
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  transactions__account?: string;
  transactions__amount?: string;
  transactions__amount__abs?: string;
  transactions__amount__abs__gt?: string;
  transactions__amount__abs__gte?: string;
  transactions__amount__abs__lt?: string;
  transactions__amount__abs__lte?: string;
  transactions__amount__gt?: string;
  transactions__amount__gte?: string;
  transactions__amount__lt?: string;
  transactions__amount__lte?: string;
  transactions__currency?: string;
  transactions__status?: string;
  transactions__subtype?: string;
  transactions__tx_type?: string;
  /** @format date-time */
  updated?: string;
  /** @format date-time */
  updated__gt?: string;
  /** @format date-time */
  updated__gte?: string;
  /** @format date-time */
  updated__lt?: string;
  /** @format date-time */
  updated__lte?: string;
  user?: string;
}

export type TransactionCollectionsListData =
  PaginatedAdminTransactionCollectionListResponse;

export type TransactionCollectionsCreateData =
  AdminTransactionCollectionResponse;

export type TransactionCollectionsRetrieveData =
  AdminTransactionCollectionResponse;

export type TransactionCollectionsUpdateData =
  AdminTransactionCollectionResponse;

export type TransactionCollectionsPartialUpdateData =
  AdminTransactionCollectionResponse;

export interface TransactionCollectionsTransactionsListParams {
  account?: string;
  account__definition?: string;
  account__exclude?: string;
  account__name?: string;
  account__recon?: boolean;
  amount?: string;
  amount__abs?: string;
  amount__abs__gt?: string;
  amount__abs__gte?: string;
  amount__abs__lt?: string;
  amount__abs__lte?: string;
  amount__gt?: string;
  amount__gte?: string;
  amount__lt?: string;
  amount__lte?: string;
  collection?: string;
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
  currency?: string;
  /** @format date-time */
  executed?: string | null;
  /** @format date-time */
  executed__gt?: string | null;
  /** @format date-time */
  executed__gte?: string | null;
  /** @format date-time */
  executed__lt?: string | null;
  /** @format date-time */
  executed__lte?: string | null;
  group?: string;
  group__isnull?: boolean;
  id?: string;
  id__in?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  parent?: string;
  partner?: string;
  partner__isnull?: boolean;
  reference?: string;
  reference__gt?: string;
  reference__gte?: string;
  reference__lt?: string;
  reference__lte?: string;
  search?: string;
  status?: string;
  /** Multiple values may be separated by commas. */
  status__in?: string[];
  subtype?: string;
  subtype__exclude?: string;
  subtype__in?: string;
  tx_type?: string;
  /** @format date-time */
  updated?: string;
  /** @format date-time */
  updated__gt?: string;
  /** @format date-time */
  updated__gte?: string;
  /** @format date-time */
  updated__lt?: string;
  /** @format date-time */
  updated__lte?: string;
  user?: string;
  user__exclude?: string;
  user__isnull?: boolean;
  user__temporary?: boolean;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  identifier: string;
}

export type TransactionCollectionsTransactionsListData =
  PaginatedAdminTransactionCollectionTransactionListResponse;

export type TransactionCollectionsTransactionsCreateData =
  AdminTransactionCollectionTransactionResponse;

export interface TransactionTransitionsListParams {
  collection?: string;
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
  set?: string;
  status?: string;
  /** Multiple values may be separated by commas. */
  status__in?: string[];
  transaction?: string;
  /** @format date-time */
  updated?: string;
  /** @format date-time */
  updated__gt?: string;
  /** @format date-time */
  updated__gte?: string;
  /** @format date-time */
  updated__lt?: string;
  /** @format date-time */
  updated__lte?: string;
}

export type TransactionTransitionsListData =
  PaginatedAdminTransactionTransitionListResponse;

export type TransactionTransitionsRetrieveData =
  AdminExtendedTransactionTransitionResponse;

export type TransactionTransitionsUpdateData =
  AdminExtendedTransactionTransitionResponse;

export type TransactionTransitionsPartialUpdateData =
  AdminExtendedTransactionTransitionResponse;

export interface TransactionsListParams {
  account?: string;
  account__definition?: string;
  account__exclude?: string;
  account__name?: string;
  account__recon?: boolean;
  amount?: string;
  amount__abs?: string;
  amount__abs__gt?: string;
  amount__abs__gte?: string;
  amount__abs__lt?: string;
  amount__abs__lte?: string;
  amount__gt?: string;
  amount__gte?: string;
  amount__lt?: string;
  amount__lte?: string;
  collection?: string;
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
  currency?: string;
  /** @format date-time */
  executed?: string | null;
  /** @format date-time */
  executed__gt?: string | null;
  /** @format date-time */
  executed__gte?: string | null;
  /** @format date-time */
  executed__lt?: string | null;
  /** @format date-time */
  executed__lte?: string | null;
  group?: string;
  group__isnull?: boolean;
  id?: string;
  id__in?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  parent?: string;
  partner?: string;
  partner__isnull?: boolean;
  reference?: string;
  reference__gt?: string;
  reference__gte?: string;
  reference__lt?: string;
  reference__lte?: string;
  search?: string;
  status?: string;
  /** Multiple values may be separated by commas. */
  status__in?: string[];
  subtype?: string;
  subtype__exclude?: string;
  subtype__in?: string;
  tx_type?: string;
  /** @format date-time */
  updated?: string;
  /** @format date-time */
  updated__gt?: string;
  /** @format date-time */
  updated__gte?: string;
  /** @format date-time */
  updated__lt?: string;
  /** @format date-time */
  updated__lte?: string;
  user?: string;
  user__exclude?: string;
  user__isnull?: boolean;
  user__temporary?: boolean;
}

export type TransactionsListData = PaginatedAdminTransactionListResponse;

export type TransactionsCreateData = AdminMultiTransactionResponse;

export type TransactionsRetrieveData = AdminExtendedTransactionResponse;

export type TransactionsUpdateData = AdminExtendedTransactionResponse;

export type TransactionsPartialUpdateData = AdminExtendedTransactionResponse;

export interface TransactionsMessagesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  txCode: string;
}

export type TransactionsMessagesListData =
  PaginatedAdminTransactionMessageListResponse;

export type TransactionsMessagesCreateData = AdminTransactionMessageResponse;

export type TransactionsMessagesRetrieveData = AdminTransactionMessageResponse;

export type TransactionsCreditCreateData = AdminExtendedTransactionResponse;

export type TransactionsDebitCreateData = AdminExtendedTransactionResponse;

export type TransactionsTotalsRetrieveData = TotalTransactionResponse;

export type TransactionsTransferCreateData = AdminExtendedTransactionResponse;

export interface UsersListParams {
  account?: string;
  account__label?: string;
  account__name?: string;
  archived?: boolean;
  balance?: string;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  created__gt?: string;
  /** @format date-time */
  created__lt?: string;
  currency?: string;
  currency__code?: string;
  deactivated?: boolean;
  email?: string;
  email__contains?: string;
  first_name?: string;
  first_name__contains?: string;
  group?: string;
  group__isnull?: boolean;
  id?: string;
  id__contains?: string;
  id__in?: string;
  id_number?: string;
  id_number__contains?: string;
  language?: string;
  /** @format date-time */
  last_login?: string | null;
  /** @format date-time */
  last_login__gt?: string | null;
  /** @format date-time */
  last_login__lt?: string | null;
  last_name?: string;
  last_name__contains?: string;
  middle_name?: string;
  middle_name__contains?: string;
  mobile?: string;
  mobile__contains?: string;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  nationality?:
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AQ"
    | "AR"
    | "AS"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CC"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CU"
    | "CV"
    | "CW"
    | "CX"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FM"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HM"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IR"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KP"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MH"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MP"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NF"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PW"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SD"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SY"
    | "SZ"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VI"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW"
    | null;
  /**
   * Ordering
   *
   * * `last_login` - Last login
   * * `-last_login` - Last login (descending)
   * * `updated` - Updated
   * * `-updated` - Updated (descending)
   * * `created` - Created
   * * `-created` - Created (descending)
   */
  orderby?: (
    | "-created"
    | "-last_login"
    | "-updated"
    | "created"
    | "last_login"
    | "updated"
  )[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /**
   * * `AF` - Afghanistan
   * * `AX` - Åland Islands
   * * `AL` - Albania
   * * `DZ` - Algeria
   * * `AS` - American Samoa
   * * `AD` - Andorra
   * * `AO` - Angola
   * * `AI` - Anguilla
   * * `AQ` - Antarctica
   * * `AG` - Antigua and Barbuda
   * * `AR` - Argentina
   * * `AM` - Armenia
   * * `AW` - Aruba
   * * `AU` - Australia
   * * `AT` - Austria
   * * `AZ` - Azerbaijan
   * * `BS` - Bahamas
   * * `BH` - Bahrain
   * * `BD` - Bangladesh
   * * `BB` - Barbados
   * * `BY` - Belarus
   * * `BE` - Belgium
   * * `BZ` - Belize
   * * `BJ` - Benin
   * * `BM` - Bermuda
   * * `BT` - Bhutan
   * * `BO` - Bolivia
   * * `BQ` - Bonaire, Sint Eustatius and Saba
   * * `BA` - Bosnia and Herzegovina
   * * `BW` - Botswana
   * * `BV` - Bouvet Island
   * * `BR` - Brazil
   * * `IO` - British Indian Ocean Territory
   * * `BN` - Brunei
   * * `BG` - Bulgaria
   * * `BF` - Burkina Faso
   * * `BI` - Burundi
   * * `CV` - Cabo Verde
   * * `KH` - Cambodia
   * * `CM` - Cameroon
   * * `CA` - Canada
   * * `KY` - Cayman Islands
   * * `CF` - Central African Republic
   * * `TD` - Chad
   * * `CL` - Chile
   * * `CN` - China
   * * `CX` - Christmas Island
   * * `CC` - Cocos (Keeling) Islands
   * * `CO` - Colombia
   * * `KM` - Comoros
   * * `CG` - Congo
   * * `CD` - Congo (the Democratic Republic of the)
   * * `CK` - Cook Islands
   * * `CR` - Costa Rica
   * * `CI` - Côte d'Ivoire
   * * `HR` - Croatia
   * * `CU` - Cuba
   * * `CW` - Curaçao
   * * `CY` - Cyprus
   * * `CZ` - Czechia
   * * `DK` - Denmark
   * * `DJ` - Djibouti
   * * `DM` - Dominica
   * * `DO` - Dominican Republic
   * * `EC` - Ecuador
   * * `EG` - Egypt
   * * `SV` - El Salvador
   * * `GQ` - Equatorial Guinea
   * * `ER` - Eritrea
   * * `EE` - Estonia
   * * `SZ` - Eswatini
   * * `ET` - Ethiopia
   * * `FK` - Falkland Islands (Malvinas)
   * * `FO` - Faroe Islands
   * * `FJ` - Fiji
   * * `FI` - Finland
   * * `FR` - France
   * * `GF` - French Guiana
   * * `PF` - French Polynesia
   * * `TF` - French Southern Territories
   * * `GA` - Gabon
   * * `GM` - Gambia
   * * `GE` - Georgia
   * * `DE` - Germany
   * * `GH` - Ghana
   * * `GI` - Gibraltar
   * * `GR` - Greece
   * * `GL` - Greenland
   * * `GD` - Grenada
   * * `GP` - Guadeloupe
   * * `GU` - Guam
   * * `GT` - Guatemala
   * * `GG` - Guernsey
   * * `GN` - Guinea
   * * `GW` - Guinea-Bissau
   * * `GY` - Guyana
   * * `HT` - Haiti
   * * `HM` - Heard Island and McDonald Islands
   * * `VA` - Holy See
   * * `HN` - Honduras
   * * `HK` - Hong Kong
   * * `HU` - Hungary
   * * `IS` - Iceland
   * * `IN` - India
   * * `ID` - Indonesia
   * * `IR` - Iran
   * * `IQ` - Iraq
   * * `IE` - Ireland
   * * `IM` - Isle of Man
   * * `IL` - Israel
   * * `IT` - Italy
   * * `JM` - Jamaica
   * * `JP` - Japan
   * * `JE` - Jersey
   * * `JO` - Jordan
   * * `KZ` - Kazakhstan
   * * `KE` - Kenya
   * * `KI` - Kiribati
   * * `KW` - Kuwait
   * * `KG` - Kyrgyzstan
   * * `LA` - Laos
   * * `LV` - Latvia
   * * `LB` - Lebanon
   * * `LS` - Lesotho
   * * `LR` - Liberia
   * * `LY` - Libya
   * * `LI` - Liechtenstein
   * * `LT` - Lithuania
   * * `LU` - Luxembourg
   * * `MO` - Macao
   * * `MG` - Madagascar
   * * `MW` - Malawi
   * * `MY` - Malaysia
   * * `MV` - Maldives
   * * `ML` - Mali
   * * `MT` - Malta
   * * `MH` - Marshall Islands
   * * `MQ` - Martinique
   * * `MR` - Mauritania
   * * `MU` - Mauritius
   * * `YT` - Mayotte
   * * `MX` - Mexico
   * * `FM` - Micronesia
   * * `MD` - Moldova
   * * `MC` - Monaco
   * * `MN` - Mongolia
   * * `ME` - Montenegro
   * * `MS` - Montserrat
   * * `MA` - Morocco
   * * `MZ` - Mozambique
   * * `MM` - Myanmar
   * * `NA` - Namibia
   * * `NR` - Nauru
   * * `NP` - Nepal
   * * `NL` - Netherlands
   * * `NC` - New Caledonia
   * * `NZ` - New Zealand
   * * `NI` - Nicaragua
   * * `NE` - Niger
   * * `NG` - Nigeria
   * * `NU` - Niue
   * * `NF` - Norfolk Island
   * * `KP` - North Korea
   * * `MK` - North Macedonia
   * * `MP` - Northern Mariana Islands
   * * `NO` - Norway
   * * `OM` - Oman
   * * `PK` - Pakistan
   * * `PW` - Palau
   * * `PS` - Palestine, State of
   * * `PA` - Panama
   * * `PG` - Papua New Guinea
   * * `PY` - Paraguay
   * * `PE` - Peru
   * * `PH` - Philippines
   * * `PN` - Pitcairn
   * * `PL` - Poland
   * * `PT` - Portugal
   * * `PR` - Puerto Rico
   * * `QA` - Qatar
   * * `RE` - Réunion
   * * `RO` - Romania
   * * `RU` - Russia
   * * `RW` - Rwanda
   * * `BL` - Saint Barthélemy
   * * `SH` - Saint Helena, Ascension and Tristan da Cunha
   * * `KN` - Saint Kitts and Nevis
   * * `LC` - Saint Lucia
   * * `MF` - Saint Martin (French part)
   * * `PM` - Saint Pierre and Miquelon
   * * `VC` - Saint Vincent and the Grenadines
   * * `WS` - Samoa
   * * `SM` - San Marino
   * * `ST` - Sao Tome and Principe
   * * `SA` - Saudi Arabia
   * * `SN` - Senegal
   * * `RS` - Serbia
   * * `SC` - Seychelles
   * * `SL` - Sierra Leone
   * * `SG` - Singapore
   * * `SX` - Sint Maarten (Dutch part)
   * * `SK` - Slovakia
   * * `SI` - Slovenia
   * * `SB` - Solomon Islands
   * * `SO` - Somalia
   * * `ZA` - South Africa
   * * `GS` - South Georgia and the South Sandwich Islands
   * * `KR` - South Korea
   * * `SS` - South Sudan
   * * `ES` - Spain
   * * `LK` - Sri Lanka
   * * `SD` - Sudan
   * * `SR` - Suriname
   * * `SJ` - Svalbard and Jan Mayen
   * * `SE` - Sweden
   * * `CH` - Switzerland
   * * `SY` - Syria
   * * `TW` - Taiwan
   * * `TJ` - Tajikistan
   * * `TZ` - Tanzania
   * * `TH` - Thailand
   * * `TL` - Timor-Leste
   * * `TG` - Togo
   * * `TK` - Tokelau
   * * `TO` - Tonga
   * * `TT` - Trinidad and Tobago
   * * `TN` - Tunisia
   * * `TR` - Türkiye
   * * `TM` - Turkmenistan
   * * `TC` - Turks and Caicos Islands
   * * `TV` - Tuvalu
   * * `UG` - Uganda
   * * `UA` - Ukraine
   * * `AE` - United Arab Emirates
   * * `GB` - United Kingdom
   * * `UM` - United States Minor Outlying Islands
   * * `US` - United States of America
   * * `UY` - Uruguay
   * * `UZ` - Uzbekistan
   * * `VU` - Vanuatu
   * * `VE` - Venezuela
   * * `VN` - Vietnam
   * * `VG` - Virgin Islands (British)
   * * `VI` - Virgin Islands (U.S.)
   * * `WF` - Wallis and Futuna
   * * `EH` - Western Sahara
   * * `YE` - Yemen
   * * `ZM` - Zambia
   * * `ZW` - Zimbabwe
   */
  residency?:
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AQ"
    | "AR"
    | "AS"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CC"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CU"
    | "CV"
    | "CW"
    | "CX"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FM"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HM"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IR"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KP"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MH"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MP"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NF"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PW"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SD"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SY"
    | "SZ"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VI"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW"
    | null;
  retention_state?: string;
  search?: string;
  service?: string;
  status?: string;
  /** Multiple values may be separated by commas. */
  status__in?: string[];
  temporary?: boolean;
  /** @format date-time */
  updated?: string;
  /** @format date-time */
  updated__gt?: string;
  /** @format date-time */
  updated__lt?: string;
  user?: string;
  username?: string;
  username__contains?: string;
}

export type UsersListData = PaginatedAdminUserInfoListResponse;

export type UsersCreateData = AdminExtendedUserInfoResponse;

export type UsersRetrieveData = AdminExtendedUserInfoResponse;

export type UsersUpdateData = AdminExtendedUserInfoResponse;

export type UsersPartialUpdateData = AdminExtendedUserInfoResponse;

export interface UsersGroupsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  identifier: string;
}

export type UsersGroupsListData = PaginatedAdminUserGroupListResponse;

export type UsersGroupsCreateData = AdminUserGroupResponse;

export type UsersGroupsRetrieveData = AdminUserGroupResponse;

export type UsersGroupsDestroyData = ActionResponse;

export interface UsersLegalTermsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  identifier: string;
}

export type UsersLegalTermsListData = PaginatedAdminUserLegalTermListResponse;

export type UsersLegalTermsRetrieveData = AdminUserLegalTermResponse;

export interface UsersLegalTermsVersionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  identifier: string;
  /** @pattern ^\d+$ */
  termId: string;
}

export type UsersLegalTermsVersionsListData =
  PaginatedAdminUserLegalTermVersionListResponse;

export type UsersLegalTermsVersionsRetrieveData =
  AdminUserLegalTermVersionResponse;

export interface UsersMessagesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  identifier: string;
}

export type UsersMessagesListData = PaginatedAdminUserMessageListResponse;

export type UsersMessagesCreateData = AdminUserMessageResponse;

export type UsersMessagesRetrieveData = AdminUserMessageResponse;

export interface UsersPermissionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  identifier: string;
}

export type UsersPermissionsListData = PaginatedUserPermissionListResponse;

export type UsersPermissionsCreateData = AdminMultiUserPermissionResponse;

export type UsersPermissionsRetrieveData = AdminUserPermissionResponse;

export type UsersPermissionsUpdateData = AdminUserPermissionResponse;

export type UsersPermissionsPartialUpdateData = AdminUserPermissionResponse;

export type UsersPermissionsDestroyData = ActionResponse;

export type UsersSettingsRetrieveData = UserSettingsResponse;

export type UsersSettingsUpdateData = UserSettingsResponse;

export type UsersSettingsPartialUpdateData = UserSettingsResponse;

export interface UsersAddressesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  user?: string;
}

export type UsersAddressesListData = PaginatedAdminUserAddressListResponse;

export type UsersAddressesCreateData = AdminUserAddressResponse;

export type UsersAddressesRetrieveData = AdminUserAddressResponse;

export type UsersAddressesUpdateData = AdminUserAddressResponse;

export type UsersAddressesPartialUpdateData = AdminUserAddressResponse;

export type UsersAddressesDestroyData = ActionResponse;

export interface UsersBankAccountsListParams {
  account_currency?: string;
  action?: string;
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
  currency?: string;
  name?: string;
  name__contains?: string;
  number?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  user?: string;
}

export type UsersBankAccountsListData =
  PaginatedAdminUserBankAccountListResponse;

export type UsersBankAccountsCreateData = AdminUserBankAccountResponse;

export type UsersBankAccountsRetrieveData = AdminUserBankAccountResponse;

export type UsersBankAccountsUpdateData = AdminUserBankAccountResponse;

export type UsersBankAccountsPartialUpdateData = AdminUserBankAccountResponse;

export type UsersBankAccountsDestroyData = ActionResponse;

export type UsersBankAccountsAccountCurrenciesListData =
  AdminReducedAccountAssetListResponse;

export type UsersBankAccountsAccountCurrenciesCreateData =
  AdminReducedAccountAssetResponse;

export type UsersBankAccountsAccountCurrenciesRetrieveData =
  AccountAssetResponse;

export type UsersBankAccountsAccountCurrenciesDestroyData = ActionResponse;

export type UsersBankAccountsCurrenciesListData =
  AdminUserBankAccountAssetListResponse;

export type UsersBankAccountsCurrenciesCreateData =
  AdminUserBankAccountAssetResponse;

export type UsersBankAccountsCurrenciesRetrieveData =
  AdminUserBankAccountAssetResponse;

export type UsersBankAccountsCurrenciesDestroyData = ActionResponse;

export interface UsersCryptoAccountsListParams {
  account_currency?: string;
  action?: string;
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
  crypto_type?: string;
  currency?: string;
  name?: string;
  name__contains?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  user?: string;
}

export type UsersCryptoAccountsListData =
  PaginatedAdminCryptoAccountListResponse;

export type UsersCryptoAccountsCreateData = AdminCryptoAccountResponse;

export type UsersCryptoAccountsRetrieveData = AdminCryptoAccountResponse;

export type UsersCryptoAccountsUpdateData = AdminCryptoAccountResponse;

export type UsersCryptoAccountsPartialUpdateData = AdminCryptoAccountResponse;

export type UsersCryptoAccountsDestroyData = ActionResponse;

export type UsersCryptoAccountsAccountCurrenciesListData =
  AdminReducedAccountAssetListResponse;

export type UsersCryptoAccountsAccountCurrenciesCreateData =
  AdminReducedAccountAssetResponse;

export type UsersCryptoAccountsAccountCurrenciesRetrieveData =
  AccountAssetResponse;

export type UsersCryptoAccountsAccountCurrenciesDestroyData = ActionResponse;

export type UsersCryptoAccountsCurrenciesListData =
  AdminCryptoAccountAssetListResponse;

export type UsersCryptoAccountsCurrenciesCreateData =
  AdminCryptoAccountAssetResponse;

export type UsersCryptoAccountsCurrenciesRetrieveData =
  AdminCryptoAccountAssetResponse;

export type UsersCryptoAccountsCurrenciesDestroyData = ActionResponse;

export interface UsersDevicesListParams {
  imei?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  user?: string;
}

export type UsersDevicesListData = PaginatedAdminDeviceListResponse;

export type UsersDevicesCreateData = AdminDeviceResponse;

export type UsersDevicesAppsRetrieveData = AdminDeviceAppResponse;

export type UsersDevicesAppsUpdateData = AdminDeviceAppResponse;

export type UsersDevicesAppsPartialUpdateData = AdminDeviceAppResponse;

export type UsersDevicesAppsDestroyData = ActionResponse;

export type UsersDevicesRetrieveData = AdminDeviceResponse;

export type UsersDevicesUpdateData = AdminDeviceResponse;

export type UsersDevicesPartialUpdateData = AdminDeviceResponse;

export type UsersDevicesDestroyData = ActionResponse;

export interface UsersDevicesAppsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\d+$ */
  id: string;
}

export type UsersDevicesAppsListData = PaginatedAdminDeviceAppListResponse;

export type UsersDevicesAppsCreateData = AdminDeviceAppResponse;

export interface UsersDocumentsListParams {
  /**
   * Ordering
   *
   * * `created` - Created
   * * `-created` - Created (descending)
   * * `updated` - Updated
   * * `-updated` - Updated (descending)
   * * `expires` - Expires
   * * `-expires` - Expires (descending)
   */
  orderby?: (
    | "-created"
    | "-expires"
    | "-updated"
    | "created"
    | "expires"
    | "updated"
  )[];
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  user?: string;
}

export type UsersDocumentsListData = PaginatedAdminUserDocumentListResponse;

export type UsersDocumentsCreateData = AdminUserDocumentResponse;

export type UsersDocumentsRetrieveData = AdminUserDocumentResponse;

export type UsersDocumentsUpdateData = AdminUserDocumentResponse;

export type UsersDocumentsPartialUpdateData = AdminUserDocumentResponse;

export type UsersDocumentsDestroyData = ActionResponse;

export interface UsersEmailsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  temporary?: boolean;
  user?: string;
}

export type UsersEmailsListData = PaginatedAdminEmailListResponse;

export type UsersEmailsCreateData = AdminEmailResponse;

export type UsersEmailsRetrieveData = AdminEmailResponse;

export type UsersEmailsUpdateData = AdminEmailResponse;

export type UsersEmailsPartialUpdateData = AdminEmailResponse;

export type UsersEmailsDestroyData = ActionResponse;

export interface UsersMfaAuthenticatorsListParams {
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
  user?: string;
  verified?: boolean;
}

export type UsersMfaAuthenticatorsListData =
  PaginatedAdminMFAAuthenticatorListResponse;

export type UsersMfaAuthenticatorsRetrieveData = AdminMFAAuthenticatorResponse;

export type UsersMfaAuthenticatorsDestroyData = ActionResponse;

export interface UsersMobilesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  temporary?: boolean;
  user?: string;
}

export type UsersMobilesListData = PaginatedAdminMobileListResponse;

export type UsersMobilesCreateData = AdminMobileResponse;

export type UsersMobilesRetrieveData = AdminMobileResponse;

export type UsersMobilesUpdateData = AdminMobileResponse;

export type UsersMobilesPartialUpdateData = AdminMobileResponse;

export type UsersMobilesDestroyData = ActionResponse;

export type UsersOverviewRetrieveData = AdminOverviewUserResponse;

export interface UsersTokensListParams {
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
  expires__isnull?: boolean;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  token_key?: string;
  token_key__exclude?: string;
  token_key__in?: string;
  user?: string;
}

export type UsersTokensListData = PaginatedAdminAuthTokenListResponse;

export type UsersTokensCreateData = AdminExtendedAuthTokenResponse;

export type AdminUsersTokensListDestroyData = ActionResponse;

export type UsersTokensRetrieveData = AdminAuthTokenResponse;

export type UsersTokensUpdateData = AdminAuthTokenResponse;

export type UsersTokensPartialUpdateData = AdminAuthTokenResponse;

export type UsersTokensDestroyData = ActionResponse;

export interface UsersWalletAccountsListParams {
  account_currency?: string;
  action?: string;
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
  currency?: string;
  name?: string;
  name__contains?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
  user?: string;
}

export type UsersWalletAccountsListData =
  PaginatedAdminUserWalletAccountListResponse;

export type UsersWalletAccountsCreateData = AdminUserWalletAccountResponse;

export type UsersWalletAccountsRetrieveData = AdminUserWalletAccountResponse;

export type UsersWalletAccountsUpdateData = AdminUserWalletAccountResponse;

export type UsersWalletAccountsPartialUpdateData =
  AdminUserWalletAccountResponse;

export type UsersWalletAccountsDestroyData = ActionResponse;

export type UsersWalletAccountsAccountCurrenciesListData =
  AdminReducedAccountAssetListResponse;

export type UsersWalletAccountsAccountCurrenciesCreateData =
  AdminReducedAccountAssetResponse;

export type UsersWalletAccountsAccountCurrenciesRetrieveData =
  AccountAssetResponse;

export type UsersWalletAccountsAccountCurrenciesDestroyData = ActionResponse;

export type UsersWalletAccountsCurrenciesListData =
  AdminUserWalletAccountAssetListResponse;

export type UsersWalletAccountsCurrenciesCreateData =
  AdminUserWalletAccountAssetResponse;

export type UsersWalletAccountsCurrenciesRetrieveData =
  AdminUserWalletAccountAssetResponse;

export type UsersWalletAccountsCurrenciesDestroyData = ActionResponse;

export interface WalletAccountsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type WalletAccountsListData =
  PaginatedAdminCompanyWalletAccountListResponse;

export type WalletAccountsCreateData = AdminCompanyWalletAccountResponse;

export type WalletAccountsRetrieveData = AdminCompanyWalletAccountResponse;

export type WalletAccountsUpdateData = AdminCompanyWalletAccountResponse;

export type WalletAccountsPartialUpdateData = AdminCompanyWalletAccountResponse;

export type WalletAccountsDestroyData = ActionResponse;

export interface WalletAccountsCurrenciesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\d+$ */
  id: string;
}

export type WalletAccountsCurrenciesListData =
  PaginatedAdminCompanyWalletAccountAssetListResponse;

export type WalletAccountsCurrenciesCreateData =
  AdminCompanyWalletAccountAssetResponse;

export type WalletAccountsCurrenciesRetrieveData =
  AdminCompanyWalletAccountAssetResponse;

export type WalletAccountsCurrenciesDestroyData = ActionResponse;

export interface WebhookTasksListParams {
  /** @format date-time */
  completed?: string | null;
  /** @format date-time */
  completed__gt?: string | null;
  /** @format date-time */
  completed__gte?: string | null;
  completed__isnull?: boolean;
  /** @format date-time */
  completed__lt?: string | null;
  /** @format date-time */
  completed__lte?: string | null;
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
  /** @format date-time */
  failed?: string | null;
  /** @format date-time */
  failed__gt?: string | null;
  /** @format date-time */
  failed__gte?: string | null;
  failed__isnull?: boolean;
  /** @format date-time */
  failed__lt?: string | null;
  /** @format date-time */
  failed__lte?: string | null;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @format date-time */
  updated?: string;
  /** @format date-time */
  updated__gt?: string;
  /** @format date-time */
  updated__gte?: string;
  /** @format date-time */
  updated__lt?: string;
  /** @format date-time */
  updated__lte?: string;
  webhook?: number;
  webhook__event?: string;
  webhook__secret?: string;
  webhook__url?: string;
}

export type WebhookTasksListData = PaginatedAdminWebhookTaskListResponse;

export type WebhookTasksRetrieveData = AdminExtendedWebhookTaskResponse;

export interface WebhookTasksRequestsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  response_code?: number;
  /** @pattern ^\d+$ */
  webhhookTaskId: string;
}

export type WebhookTasksRequestsListData =
  PaginatedAdminWebhookRequestListResponse;

export type WebhookTasksRequestsRetrieveData = AdminWebhookRequestResponse;

export interface WebhooksListParams {
  event?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  secret?: string;
  url?: string;
}

export type WebhooksListData = PaginatedAdminWebhookListResponse;

export type WebhooksCreateData = AdminWebhookResponse;

export type WebhooksRetrieveData = AdminWebhookResponse;

export type WebhooksUpdateData = AdminWebhookResponse;

export type WebhooksPartialUpdateData = AdminWebhookResponse;

export type WebhooksDestroyData = ActionResponse;

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
  public baseUrl: string = "https://api.rehive.com";
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
 * @title Platform Admin API
 * @version 3 (3)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://api.rehive.com
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **Platform Admin API** is the core management component of the Rehive ecosystem. It provides adminsitrative access to platform resources.
 *
 * User authentication (login) must still be performed via the **Platform API** because the Admin API only provides an interface for authenticating on behalf of users. The documentation for this can be found below:
 *
 * - [API specification](https://api.rehive.com/?api=rehive-platform-api)
 * - [Swagger specification](https://api.rehive.com/swagger)
 *
 * For general usage, help, and recommendations please take a look at the [platform docs](https://docs.rehive.com/platform/get-started/introduction/).
 *
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  v3 = {
    /**
     * No description
     *
     * @tags access-control-rules
     * @name AccessControlRulesList
     * @summary List access control rules
     * @request GET:/3/admin/access-control-rules/
     * @secure
     */
    accessControlRulesList: (
      query: AccessControlRulesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccessControlRulesListData, any>({
        path: `/3/admin/access-control-rules/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags access-control-rules
     * @name AccessControlRulesCreate
     * @summary Create access control rule
     * @request POST:/3/admin/access-control-rules/
     * @secure
     */
    accessControlRulesCreate: (
      data: AdminCreateAccessControlRule,
      params: RequestParams = {},
    ) =>
      this.request<AccessControlRulesCreateData, any>({
        path: `/3/admin/access-control-rules/`,
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
     * @tags access-control-rules
     * @name AccessControlRulesRetrieve
     * @summary Retrieve access control rule
     * @request GET:/3/admin/access-control-rules/{id}/
     * @secure
     */
    accessControlRulesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<AccessControlRulesRetrieveData, any>({
        path: `/3/admin/access-control-rules/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags access-control-rules
     * @name AccessControlRulesUpdate
     * @summary Updated access control rule
     * @request PUT:/3/admin/access-control-rules/{id}/
     * @secure
     */
    accessControlRulesUpdate: (
      id: string,
      data: AdminCreateAccessControlRule,
      params: RequestParams = {},
    ) =>
      this.request<AccessControlRulesUpdateData, any>({
        path: `/3/admin/access-control-rules/${id}/`,
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
     * @tags access-control-rules
     * @name AccessControlRulesPartialUpdate
     * @summary Prtially upadate access control rule
     * @request PATCH:/3/admin/access-control-rules/{id}/
     * @secure
     */
    accessControlRulesPartialUpdate: (
      id: string,
      data: PatchedAdminCreateAccessControlRule,
      params: RequestParams = {},
    ) =>
      this.request<AccessControlRulesPartialUpdateData, any>({
        path: `/3/admin/access-control-rules/${id}/`,
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
     * @tags access-control-rules
     * @name AccessControlRulesDestroy
     * @summary Delete access control rule
     * @request DELETE:/3/admin/access-control-rules/{id}/
     * @secure
     */
    accessControlRulesDestroy: (id: string, params: RequestParams = {}) =>
      this.request<AccessControlRulesDestroyData, any>({
        path: `/3/admin/access-control-rules/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-currencies
     * @name AccountCurrenciesList
     * @summary List account asset
     * @request GET:/3/admin/account-currencies/
     * @secure
     */
    accountCurrenciesList: (
      query: AccountCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountCurrenciesListData, any>({
        path: `/3/admin/account-currencies/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-definitions
     * @name AccountDefinitionsList
     * @summary List account definitions
     * @request GET:/3/admin/account-definitions/
     * @secure
     */
    accountDefinitionsList: (
      query: AccountDefinitionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsListData, any>({
        path: `/3/admin/account-definitions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-definitions
     * @name AccountDefinitionsCreate
     * @summary Create account definitions
     * @request POST:/3/admin/account-definitions/
     * @secure
     */
    accountDefinitionsCreate: (
      data: AdminCreateUpdateAccountDefinition,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsCreateData, any>({
        path: `/3/admin/account-definitions/`,
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
     * @tags account-definitions
     * @name AccountDefinitionsRetrieve
     * @summary Retrieve account definition
     * @request GET:/3/admin/account-definitions/{definition_name}/
     * @secure
     */
    accountDefinitionsRetrieve: (
      definitionName: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsRetrieveData, any>({
        path: `/3/admin/account-definitions/${definitionName}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-definitions
     * @name AccountDefinitionsUpdate
     * @summary Updated account definition
     * @request PUT:/3/admin/account-definitions/{definition_name}/
     * @secure
     */
    accountDefinitionsUpdate: (
      definitionName: string,
      data: AdminCreateUpdateAccountDefinition,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsUpdateData, any>({
        path: `/3/admin/account-definitions/${definitionName}/`,
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
     * @tags account-definitions
     * @name AccountDefinitionsPartialUpdate
     * @summary Partially update account definition
     * @request PATCH:/3/admin/account-definitions/{definition_name}/
     * @secure
     */
    accountDefinitionsPartialUpdate: (
      definitionName: string,
      data: PatchedAdminCreateUpdateAccountDefinition,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsPartialUpdateData, any>({
        path: `/3/admin/account-definitions/${definitionName}/`,
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
     * @tags account-definitions
     * @name AccountDefinitionsGroupsList
     * @summary List account definitions groups
     * @request GET:/3/admin/account-definitions/{definition_name}/groups/
     * @secure
     */
    accountDefinitionsGroupsList: (
      { definitionName, ...query }: AccountDefinitionsGroupsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsGroupsListData, any>({
        path: `/3/admin/account-definitions/${definitionName}/groups/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-definitions
     * @name AccountDefinitionsGroupsCreate
     * @summary Create account definitions
     * @request POST:/3/admin/account-definitions/{definition_name}/groups/
     * @secure
     */
    accountDefinitionsGroupsCreate: (
      definitionName: string,
      data: AdminCreateAccountDefinitionGroup,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsGroupsCreateData, any>({
        path: `/3/admin/account-definitions/${definitionName}/groups/`,
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
     * @tags account-definitions
     * @name AccountDefinitionsGroupsRetrieve
     * @summary Retrieve account definitions group
     * @request GET:/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/
     * @secure
     */
    accountDefinitionsGroupsRetrieve: (
      definitionGroupName: string,
      definitionName: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsGroupsRetrieveData, any>({
        path: `/3/admin/account-definitions/${definitionName}/groups/${definitionGroupName}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-definitions
     * @name AccountDefinitionsGroupsUpdate
     * @summary Update account definitions group
     * @request PUT:/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/
     * @secure
     */
    accountDefinitionsGroupsUpdate: (
      definitionGroupName: string,
      definitionName: string,
      data: AdminUpdateAccountDefinitionGroup,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsGroupsUpdateData, any>({
        path: `/3/admin/account-definitions/${definitionName}/groups/${definitionGroupName}/`,
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
     * @tags account-definitions
     * @name AccountDefinitionsGroupsPartialUpdate
     * @summary Partially update account definitions group
     * @request PATCH:/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/
     * @secure
     */
    accountDefinitionsGroupsPartialUpdate: (
      definitionGroupName: string,
      definitionName: string,
      data: PatchedAdminUpdateAccountDefinitionGroup,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsGroupsPartialUpdateData, any>({
        path: `/3/admin/account-definitions/${definitionName}/groups/${definitionGroupName}/`,
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
     * @tags account-definitions
     * @name AccountDefinitionsGroupsCurrenciesList
     * @summary List account definition group currencies
     * @request GET:/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/currencies/
     * @secure
     */
    accountDefinitionsGroupsCurrenciesList: (
      {
        definitionGroupName,
        definitionName,
        ...query
      }: AccountDefinitionsGroupsCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsGroupsCurrenciesListData, any>({
        path: `/3/admin/account-definitions/${definitionName}/groups/${definitionGroupName}/currencies/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-definitions
     * @name AccountDefinitionsGroupsCurrenciesCreate
     * @summary Create account deffinition group currency
     * @request POST:/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/currencies/
     * @secure
     */
    accountDefinitionsGroupsCurrenciesCreate: (
      definitionGroupName: string,
      definitionName: string,
      data: AdminCreateAccountDefinitionGroupAsset,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsGroupsCurrenciesCreateData, any>({
        path: `/3/admin/account-definitions/${definitionName}/groups/${definitionGroupName}/currencies/`,
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
     * @tags account-definitions
     * @name AccountDefinitionsGroupsCurrenciesRetrieve
     * @summary Retrieve account definition group currency
     * @request GET:/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/currencies/{currency_code}/
     * @secure
     */
    accountDefinitionsGroupsCurrenciesRetrieve: (
      currencyCode: string,
      definitionGroupName: string,
      definitionName: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsGroupsCurrenciesRetrieveData, any>({
        path: `/3/admin/account-definitions/${definitionName}/groups/${definitionGroupName}/currencies/${currencyCode}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-definitions
     * @name AccountDefinitionsGroupsCurrenciesUpdate
     * @summary Update account definition group currency
     * @request PUT:/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/currencies/{currency_code}/
     * @secure
     */
    accountDefinitionsGroupsCurrenciesUpdate: (
      currencyCode: string,
      definitionGroupName: string,
      definitionName: string,
      data: AdminUpdateAccountDefinitionGroupAsset,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsGroupsCurrenciesUpdateData, any>({
        path: `/3/admin/account-definitions/${definitionName}/groups/${definitionGroupName}/currencies/${currencyCode}/`,
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
     * @tags account-definitions
     * @name AccountDefinitionsGroupsCurrenciesPartialUpdate
     * @summary Partially update account definition group currency
     * @request PATCH:/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/currencies/{currency_code}/
     * @secure
     */
    accountDefinitionsGroupsCurrenciesPartialUpdate: (
      currencyCode: string,
      definitionGroupName: string,
      definitionName: string,
      data: PatchedAdminUpdateAccountDefinitionGroupAsset,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsGroupsCurrenciesPartialUpdateData, any>({
        path: `/3/admin/account-definitions/${definitionName}/groups/${definitionGroupName}/currencies/${currencyCode}/`,
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
     * @tags accounts
     * @name AccountsList
     * @summary List accounts
     * @request GET:/3/admin/accounts/
     * @secure
     */
    accountsList: (query: AccountsListParams, params: RequestParams = {}) =>
      this.request<AccountsListData, any>({
        path: `/3/admin/accounts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCreate
     * @summary Create accounts
     * @request POST:/3/admin/accounts/
     * @secure
     */
    accountsCreate: (data: AdminCreateAccount, params: RequestParams = {}) =>
      this.request<AccountsCreateData, any>({
        path: `/3/admin/accounts/`,
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
     * @tags accounts
     * @name AccountsRetrieve
     * @summary Retrieve account
     * @request GET:/3/admin/accounts/{reference}/
     * @secure
     */
    accountsRetrieve: (reference: string, params: RequestParams = {}) =>
      this.request<AccountsRetrieveData, any>({
        path: `/3/admin/accounts/${reference}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsUpdate
     * @summary Update account
     * @request PUT:/3/admin/accounts/{reference}/
     * @secure
     */
    accountsUpdate: (
      reference: string,
      data: AdminUpdateExtendedAccount,
      params: RequestParams = {},
    ) =>
      this.request<AccountsUpdateData, any>({
        path: `/3/admin/accounts/${reference}/`,
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
     * @tags accounts
     * @name AccountsPartialUpdate
     * @summary Update account
     * @request PATCH:/3/admin/accounts/{reference}/
     * @secure
     */
    accountsPartialUpdate: (
      reference: string,
      data: PatchedAdminUpdateExtendedAccount,
      params: RequestParams = {},
    ) =>
      this.request<AccountsPartialUpdateData, any>({
        path: `/3/admin/accounts/${reference}/`,
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
     * @tags accounts
     * @name AccountsCurrenciesList
     * @summary List account currencies
     * @request GET:/3/admin/accounts/{reference}/currencies/
     * @secure
     */
    accountsCurrenciesList: (
      { reference, ...query }: AccountsCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesListData, any>({
        path: `/3/admin/accounts/${reference}/currencies/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCurrenciesCreate
     * @summary Create account currency
     * @request POST:/3/admin/accounts/{reference}/currencies/
     * @secure
     */
    accountsCurrenciesCreate: (
      reference: string,
      data: AdminCreateAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesCreateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/`,
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
     * @tags accounts
     * @name AccountsCurrenciesRetrieve
     * @summary Retrieve account currency
     * @request GET:/3/admin/accounts/{reference}/currencies/{code}/
     * @secure
     */
    accountsCurrenciesRetrieve: (
      code: string,
      reference: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesRetrieveData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCurrenciesUpdate
     * @summary Update account currency
     * @request PUT:/3/admin/accounts/{reference}/currencies/{code}/
     * @secure
     */
    accountsCurrenciesUpdate: (
      code: string,
      reference: string,
      data: AdminAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesUpdateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/`,
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
     * @tags accounts
     * @name AccountsCurrenciesPartialUpdate
     * @summary Partially update account currency
     * @request PATCH:/3/admin/accounts/{reference}/currencies/{code}/
     * @secure
     */
    accountsCurrenciesPartialUpdate: (
      code: string,
      reference: string,
      data: PatchedAdminAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesPartialUpdateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/`,
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
     * @tags accounts
     * @name AccountsCurrenciesFeesList
     * @summary List account currency fees
     * @request GET:/3/admin/accounts/{reference}/currencies/{code}/fees/
     * @secure
     */
    accountsCurrenciesFeesList: (
      code: string,
      reference: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesFeesListData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/fees/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCurrenciesFeesCreate
     * @summary Create account currency fees
     * @request POST:/3/admin/accounts/{reference}/currencies/{code}/fees/
     * @secure
     */
    accountsCurrenciesFeesCreate: (
      code: string,
      reference: string,
      data: AdminCreateAccountAccountAssetFee,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesFeesCreateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/fees/`,
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
     * @tags accounts
     * @name AccountsCurrenciesFeesRetrieve
     * @summary Retrieve account currency fee
     * @request GET:/3/admin/accounts/{reference}/currencies/{code}/fees/{fee_id}/
     * @secure
     */
    accountsCurrenciesFeesRetrieve: (
      code: string,
      feeId: string,
      reference: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesFeesRetrieveData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/fees/${feeId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCurrenciesFeesUpdate
     * @summary Update account currency fee
     * @request PUT:/3/admin/accounts/{reference}/currencies/{code}/fees/{fee_id}/
     * @secure
     */
    accountsCurrenciesFeesUpdate: (
      code: string,
      feeId: string,
      reference: string,
      data: AdminCreateAccountAccountAssetFee,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesFeesUpdateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/fees/${feeId}/`,
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
     * @tags accounts
     * @name AccountsCurrenciesFeesPartialUpdate
     * @summary Partially update account currency fee
     * @request PATCH:/3/admin/accounts/{reference}/currencies/{code}/fees/{fee_id}/
     * @secure
     */
    accountsCurrenciesFeesPartialUpdate: (
      code: string,
      feeId: string,
      reference: string,
      data: PatchedAdminCreateAccountAccountAssetFee,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesFeesPartialUpdateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/fees/${feeId}/`,
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
     * @tags accounts
     * @name AccountsCurrenciesFeesDestroy
     * @summary Delete account currency fee
     * @request DELETE:/3/admin/accounts/{reference}/currencies/{code}/fees/{fee_id}/
     * @secure
     */
    accountsCurrenciesFeesDestroy: (
      code: string,
      feeId: string,
      reference: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesFeesDestroyData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/fees/${feeId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCurrenciesLimitsList
     * @summary List account currency limits
     * @request GET:/3/admin/accounts/{reference}/currencies/{code}/limits/
     * @secure
     */
    accountsCurrenciesLimitsList: (
      { code, reference, ...query }: AccountsCurrenciesLimitsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesLimitsListData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/limits/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCurrenciesLimitsCreate
     * @summary List account currency limits
     * @request POST:/3/admin/accounts/{reference}/currencies/{code}/limits/
     * @secure
     */
    accountsCurrenciesLimitsCreate: (
      code: string,
      reference: string,
      data: AdminCreateAccountAccountAssetLimit,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesLimitsCreateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/limits/`,
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
     * @tags accounts
     * @name AccountsCurrenciesLimitsRetrieve
     * @summary Retrieve account asset limit
     * @request GET:/3/admin/accounts/{reference}/currencies/{code}/limits/{limit_id}/
     * @secure
     */
    accountsCurrenciesLimitsRetrieve: (
      code: string,
      limitId: string,
      reference: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesLimitsRetrieveData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/limits/${limitId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCurrenciesLimitsUpdate
     * @summary Update account currency limits
     * @request PUT:/3/admin/accounts/{reference}/currencies/{code}/limits/{limit_id}/
     * @secure
     */
    accountsCurrenciesLimitsUpdate: (
      code: string,
      limitId: string,
      reference: string,
      data: AdminCreateAccountAccountAssetLimit,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesLimitsUpdateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/limits/${limitId}/`,
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
     * @tags accounts
     * @name AccountsCurrenciesLimitsPartialUpdate
     * @summary Partially update account currency limits
     * @request PATCH:/3/admin/accounts/{reference}/currencies/{code}/limits/{limit_id}/
     * @secure
     */
    accountsCurrenciesLimitsPartialUpdate: (
      code: string,
      limitId: string,
      reference: string,
      data: PatchedAdminCreateAccountAccountAssetLimit,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesLimitsPartialUpdateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/limits/${limitId}/`,
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
     * @tags accounts
     * @name AccountsCurrenciesLimitsDestroy
     * @summary Delete account currency limits
     * @request DELETE:/3/admin/accounts/{reference}/currencies/{code}/limits/{limit_id}/
     * @secure
     */
    accountsCurrenciesLimitsDestroy: (
      code: string,
      limitId: string,
      reference: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesLimitsDestroyData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/limits/${limitId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCurrenciesSettingsRetrieve
     * @summary List account currency settings
     * @request GET:/3/admin/accounts/{reference}/currencies/{code}/settings/
     * @secure
     */
    accountsCurrenciesSettingsRetrieve: (
      code: string,
      reference: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesSettingsRetrieveData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/settings/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCurrenciesSettingsUpdate
     * @summary Update account currency settings
     * @request PUT:/3/admin/accounts/{reference}/currencies/{code}/settings/
     * @secure
     */
    accountsCurrenciesSettingsUpdate: (
      code: string,
      reference: string,
      data: AdminAccountAccountAssetSettingsUpdate,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesSettingsUpdateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/settings/`,
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
     * @tags accounts
     * @name AccountsCurrenciesSettingsPartialUpdate
     * @summary Partially update account currency settings
     * @request PATCH:/3/admin/accounts/{reference}/currencies/{code}/settings/
     * @secure
     */
    accountsCurrenciesSettingsPartialUpdate: (
      code: string,
      reference: string,
      data: PatchedAdminAccountAccountAssetSettingsUpdate,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesSettingsPartialUpdateData, any>({
        path: `/3/admin/accounts/${reference}/currencies/${code}/settings/`,
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
     * @tags auth
     * @name AuthDeactivateCreate
     * @summary Admin deactivate on behalf of a user
     * @request POST:/3/admin/auth/deactivate/
     * @secure
     */
    authDeactivateCreate: (data: AdminDeactivate, params: RequestParams = {}) =>
      this.request<AuthDeactivateCreateData, any>({
        path: `/3/admin/auth/deactivate/`,
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
     * @tags auth
     * @name AuthDeactivateVerifyCreate
     * @summary Admin verify deactivation on behalf of a user
     * @request POST:/3/admin/auth/deactivate/verify/
     * @secure
     */
    authDeactivateVerifyCreate: (
      data: VerifyDeactivate,
      params: RequestParams = {},
    ) =>
      this.request<AuthDeactivateVerifyCreateData, any>({
        path: `/3/admin/auth/deactivate/verify/`,
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
     * @tags auth
     * @name AuthLoginCreate
     * @summary Admin login on behalf of a user
     * @request POST:/3/admin/auth/login/
     * @secure
     */
    authLoginCreate: (data: AdminLogin, params: RequestParams = {}) =>
      this.request<AuthLoginCreateData, any>({
        path: `/3/admin/auth/login/`,
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
     * @tags auth
     * @name AuthPasswordResetCreate
     * @summary Admin reset password on behalf of a user
     * @request POST:/3/admin/auth/password/reset/
     * @secure
     */
    authPasswordResetCreate: (
      data: AdminPasswordReset,
      params: RequestParams = {},
    ) =>
      this.request<AuthPasswordResetCreateData, any>({
        path: `/3/admin/auth/password/reset/`,
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
     * @tags auth
     * @name AuthPasswordResetConfirmCreate
     * @summary Admin confirmation for reset password on behalf of a user
     * @request POST:/3/admin/auth/password/reset/confirm/
     * @secure
     */
    authPasswordResetConfirmCreate: (
      data: PasswordResetConfirm,
      params: RequestParams = {},
    ) =>
      this.request<AuthPasswordResetConfirmCreateData, any>({
        path: `/3/admin/auth/password/reset/confirm/`,
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
     * @tags auth
     * @name AuthRegisterCreate
     * @summary Admin register a new user on behalf of a user
     * @request POST:/3/admin/auth/register/
     * @secure
     */
    authRegisterCreate: (data: AdminRegister, params: RequestParams = {}) =>
      this.request<AuthRegisterCreateData, any>({
        path: `/3/admin/auth/register/`,
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
     * @tags auth
     * @name AuthRequestDeleteCreate
     * @summary Admin request delete on behalf of a user
     * @request POST:/3/admin/auth/request-delete/
     * @secure
     */
    authRequestDeleteCreate: (
      data: AdminRequestDelete,
      params: RequestParams = {},
    ) =>
      this.request<AuthRequestDeleteCreateData, any>({
        path: `/3/admin/auth/request-delete/`,
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
     * @tags auth
     * @name AuthRequestDeleteVerifyCreate
     * @summary Admin request delete on behalf of a user
     * @request POST:/3/admin/auth/request-delete/verify/
     * @secure
     */
    authRequestDeleteVerifyCreate: (
      data: VerifyRequestDelete,
      params: RequestParams = {},
    ) =>
      this.request<AuthRequestDeleteVerifyCreateData, any>({
        path: `/3/admin/auth/request-delete/verify/`,
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
     * @tags authenticator-rules
     * @name AuthenticatorRulesList
     * @summary List authenticator rules
     * @request GET:/3/admin/authenticator-rules/
     * @secure
     */
    authenticatorRulesList: (
      query: AuthenticatorRulesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AuthenticatorRulesListData, any>({
        path: `/3/admin/authenticator-rules/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags authenticator-rules
     * @name AuthenticatorRulesCreate
     * @summary Create authenticator rule
     * @request POST:/3/admin/authenticator-rules/
     * @secure
     */
    authenticatorRulesCreate: (
      data: AdminCreateAuthenticatorRule,
      params: RequestParams = {},
    ) =>
      this.request<AuthenticatorRulesCreateData, any>({
        path: `/3/admin/authenticator-rules/`,
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
     * @tags authenticator-rules
     * @name AuthenticatorRulesRetrieve
     * @summary Retrieve authenticator rule
     * @request GET:/3/admin/authenticator-rules/{identifier}/
     * @secure
     */
    authenticatorRulesRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AuthenticatorRulesRetrieveData, any>({
        path: `/3/admin/authenticator-rules/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags authenticator-rules
     * @name AuthenticatorRulesUpdate
     * @summary Update athenticator rule
     * @request PUT:/3/admin/authenticator-rules/{identifier}/
     * @secure
     */
    authenticatorRulesUpdate: (
      identifier: string,
      data: AdminUpdateAuthenticatorRule,
      params: RequestParams = {},
    ) =>
      this.request<AuthenticatorRulesUpdateData, any>({
        path: `/3/admin/authenticator-rules/${identifier}/`,
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
     * @tags authenticator-rules
     * @name AuthenticatorRulesPartialUpdate
     * @summary Partially update athenticator rule
     * @request PATCH:/3/admin/authenticator-rules/{identifier}/
     * @secure
     */
    authenticatorRulesPartialUpdate: (
      identifier: string,
      data: PatchedAdminUpdateAuthenticatorRule,
      params: RequestParams = {},
    ) =>
      this.request<AuthenticatorRulesPartialUpdateData, any>({
        path: `/3/admin/authenticator-rules/${identifier}/`,
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
     * @tags authenticator-rules
     * @name AuthenticatorRulesDestroy
     * @summary Delete authenticator rule
     * @request DELETE:/3/admin/authenticator-rules/{identifier}/
     * @secure
     */
    authenticatorRulesDestroy: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AuthenticatorRulesDestroyData, any>({
        path: `/3/admin/authenticator-rules/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-accounts
     * @name BankAccountsList
     * @summary List company bank accounts
     * @request GET:/3/admin/bank-accounts/
     * @secure
     */
    bankAccountsList: (
      query: BankAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<BankAccountsListData, any>({
        path: `/3/admin/bank-accounts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-accounts
     * @name BankAccountsCreate
     * @summary Create company bank account
     * @request POST:/3/admin/bank-accounts/
     * @secure
     */
    bankAccountsCreate: (
      data: AdminCompanyBankAccount,
      params: RequestParams = {},
    ) =>
      this.request<BankAccountsCreateData, any>({
        path: `/3/admin/bank-accounts/`,
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
     * @tags bank-accounts
     * @name BankAccountsRetrieve
     * @summary Retrieve company bank account
     * @request GET:/3/admin/bank-accounts/{id}/
     * @secure
     */
    bankAccountsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<BankAccountsRetrieveData, any>({
        path: `/3/admin/bank-accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-accounts
     * @name BankAccountsUpdate
     * @summary Update company bank account
     * @request PUT:/3/admin/bank-accounts/{id}/
     * @secure
     */
    bankAccountsUpdate: (
      id: string,
      data: AdminCompanyBankAccount,
      params: RequestParams = {},
    ) =>
      this.request<BankAccountsUpdateData, any>({
        path: `/3/admin/bank-accounts/${id}/`,
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
     * @tags bank-accounts
     * @name BankAccountsPartialUpdate
     * @summary Partially update company bank account
     * @request PATCH:/3/admin/bank-accounts/{id}/
     * @secure
     */
    bankAccountsPartialUpdate: (
      id: string,
      data: PatchedAdminCompanyBankAccount,
      params: RequestParams = {},
    ) =>
      this.request<BankAccountsPartialUpdateData, any>({
        path: `/3/admin/bank-accounts/${id}/`,
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
     * @tags bank-accounts
     * @name BankAccountsDestroy
     * @summary Delete company bank account
     * @request DELETE:/3/admin/bank-accounts/{id}/
     * @secure
     */
    bankAccountsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<BankAccountsDestroyData, any>({
        path: `/3/admin/bank-accounts/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-accounts
     * @name BankAccountsCurrenciesList
     * @summary List company bank account currencies
     * @request GET:/3/admin/bank-accounts/{id}/currencies/
     * @secure
     */
    bankAccountsCurrenciesList: (
      { id, ...query }: BankAccountsCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<BankAccountsCurrenciesListData, any>({
        path: `/3/admin/bank-accounts/${id}/currencies/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-accounts
     * @name BankAccountsCurrenciesCreate
     * @summary Create company bank account currency
     * @request POST:/3/admin/bank-accounts/{id}/currencies/
     * @secure
     */
    bankAccountsCurrenciesCreate: (
      id: string,
      data: AdminCreateCompanyBankAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<BankAccountsCurrenciesCreateData, any>({
        path: `/3/admin/bank-accounts/${id}/currencies/`,
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
     * @tags bank-accounts
     * @name BankAccountsCurrenciesRetrieve
     * @summary Retrieve company bank account currency
     * @request GET:/3/admin/bank-accounts/{id}/currencies/{code}/
     * @secure
     */
    bankAccountsCurrenciesRetrieve: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<BankAccountsCurrenciesRetrieveData, any>({
        path: `/3/admin/bank-accounts/${id}/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-accounts
     * @name BankAccountsCurrenciesDestroy
     * @summary Delete company bank account currency
     * @request DELETE:/3/admin/bank-accounts/{id}/currencies/{code}/
     * @secure
     */
    bankAccountsCurrenciesDestroy: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<BankAccountsCurrenciesDestroyData, any>({
        path: `/3/admin/bank-accounts/${id}/currencies/${code}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name CompanyRetrieve
     * @summary Retrieve company
     * @request GET:/3/admin/company/
     * @secure
     */
    companyRetrieve: (params: RequestParams = {}) =>
      this.request<CompanyRetrieveData, any>({
        path: `/3/admin/company/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name CompanyUpdate
     * @summary Update company
     * @request PUT:/3/admin/company/
     * @secure
     */
    companyUpdate: (data: AdminCompany, params: RequestParams = {}) =>
      this.request<CompanyUpdateData, any>({
        path: `/3/admin/company/`,
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
     * @tags company
     * @name CompanyPartialUpdate
     * @summary Partilly update company
     * @request PATCH:/3/admin/company/
     * @secure
     */
    companyPartialUpdate: (
      data: PatchedAdminCompany,
      params: RequestParams = {},
    ) =>
      this.request<CompanyPartialUpdateData, any>({
        path: `/3/admin/company/`,
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
     * @tags company
     * @name CompanyAddressRetrieve
     * @summary Retrieve company address
     * @request GET:/3/admin/company/address/
     * @secure
     */
    companyAddressRetrieve: (params: RequestParams = {}) =>
      this.request<CompanyAddressRetrieveData, any>({
        path: `/3/admin/company/address/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name CompanyAddressUpdate
     * @summary Update company addresses
     * @request PUT:/3/admin/company/address/
     * @secure
     */
    companyAddressUpdate: (
      data: AdminCompanyAddress,
      params: RequestParams = {},
    ) =>
      this.request<CompanyAddressUpdateData, any>({
        path: `/3/admin/company/address/`,
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
     * @tags company
     * @name CompanyAddressPartialUpdate
     * @summary Partially update company addresses
     * @request PATCH:/3/admin/company/address/
     * @secure
     */
    companyAddressPartialUpdate: (
      data: PatchedAdminCompanyAddress,
      params: RequestParams = {},
    ) =>
      this.request<CompanyAddressPartialUpdateData, any>({
        path: `/3/admin/company/address/`,
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
     * @tags company
     * @name CompanyLinksList
     * @summary List company links
     * @request GET:/3/admin/company/links/
     * @secure
     */
    companyLinksList: (
      query: CompanyLinksListParams,
      params: RequestParams = {},
    ) =>
      this.request<CompanyLinksListData, any>({
        path: `/3/admin/company/links/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name CompanyLinksCreate
     * @summary Create company link
     * @request POST:/3/admin/company/links/
     * @secure
     */
    companyLinksCreate: (
      data: AdminCreateCompanyLink,
      params: RequestParams = {},
    ) =>
      this.request<CompanyLinksCreateData, any>({
        path: `/3/admin/company/links/`,
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
     * @tags company
     * @name CompanyLinksRetrieve
     * @summary Retrieve company link
     * @request GET:/3/admin/company/links/{id}/
     * @secure
     */
    companyLinksRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<CompanyLinksRetrieveData, any>({
        path: `/3/admin/company/links/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name CompanyLinksUpdate
     * @summary Update company link
     * @request PUT:/3/admin/company/links/{id}/
     * @secure
     */
    companyLinksUpdate: (
      id: string,
      data: AdminUpdateCompanyLink,
      params: RequestParams = {},
    ) =>
      this.request<CompanyLinksUpdateData, any>({
        path: `/3/admin/company/links/${id}/`,
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
     * @tags company
     * @name CompanyLinksPartialUpdate
     * @summary Partially update company link
     * @request PATCH:/3/admin/company/links/{id}/
     * @secure
     */
    companyLinksPartialUpdate: (
      id: string,
      data: PatchedAdminUpdateCompanyLink,
      params: RequestParams = {},
    ) =>
      this.request<CompanyLinksPartialUpdateData, any>({
        path: `/3/admin/company/links/${id}/`,
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
     * @tags company
     * @name CompanyLinksDestroy
     * @summary Delete company link
     * @request DELETE:/3/admin/company/links/{id}/
     * @secure
     */
    companyLinksDestroy: (id: string, params: RequestParams = {}) =>
      this.request<CompanyLinksDestroyData, any>({
        path: `/3/admin/company/links/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name CompanySettingsRetrieve
     * @summary Retrieve company settings
     * @request GET:/3/admin/company/settings/
     * @secure
     */
    companySettingsRetrieve: (params: RequestParams = {}) =>
      this.request<CompanySettingsRetrieveData, any>({
        path: `/3/admin/company/settings/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name CompanySettingsUpdate
     * @summary Update company settings
     * @request PUT:/3/admin/company/settings/
     * @secure
     */
    companySettingsUpdate: (
      data: AdminUpdateCompanySettings,
      params: RequestParams = {},
    ) =>
      this.request<CompanySettingsUpdateData, any>({
        path: `/3/admin/company/settings/`,
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
     * @tags company
     * @name CompanySettingsPartialUpdate
     * @summary Partially update company settings
     * @request PATCH:/3/admin/company/settings/
     * @secure
     */
    companySettingsPartialUpdate: (
      data: PatchedAdminUpdateCompanySettings,
      params: RequestParams = {},
    ) =>
      this.request<CompanySettingsPartialUpdateData, any>({
        path: `/3/admin/company/settings/`,
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
     * @tags currencies
     * @name CurrenciesList
     * @summary List currencies
     * @request GET:/3/admin/currencies/
     * @secure
     */
    currenciesList: (query: CurrenciesListParams, params: RequestParams = {}) =>
      this.request<CurrenciesListData, any>({
        path: `/3/admin/currencies/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags currencies
     * @name CurrenciesCreate
     * @summary Create currency
     * @request POST:/3/admin/currencies/
     * @secure
     */
    currenciesCreate: (data: AdminCreateAsset, params: RequestParams = {}) =>
      this.request<CurrenciesCreateData, any>({
        path: `/3/admin/currencies/`,
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
     * @tags currencies
     * @name CurrenciesRetrieve
     * @summary Retrieve currency
     * @request GET:/3/admin/currencies/{code}/
     * @secure
     */
    currenciesRetrieve: (code: string, params: RequestParams = {}) =>
      this.request<CurrenciesRetrieveData, any>({
        path: `/3/admin/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags currencies
     * @name CurrenciesUpdate
     * @summary Update currency
     * @request PUT:/3/admin/currencies/{code}/
     * @secure
     */
    currenciesUpdate: (
      code: string,
      data: AdminUpdateAsset,
      params: RequestParams = {},
    ) =>
      this.request<CurrenciesUpdateData, any>({
        path: `/3/admin/currencies/${code}/`,
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
     * @tags currencies
     * @name CurrenciesPartialUpdate
     * @summary Partially update currency
     * @request PATCH:/3/admin/currencies/{code}/
     * @secure
     */
    currenciesPartialUpdate: (
      code: string,
      data: PatchedAdminUpdateAsset,
      params: RequestParams = {},
    ) =>
      this.request<CurrenciesPartialUpdateData, any>({
        path: `/3/admin/currencies/${code}/`,
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
     * @tags currencies
     * @name CurrenciesOverviewRetrieve
     * @summary Retrive currency overview
     * @request GET:/3/admin/currencies/{code}/overview/
     * @secure
     */
    currenciesOverviewRetrieve: (code: string, params: RequestParams = {}) =>
      this.request<CurrenciesOverviewRetrieveData, any>({
        path: `/3/admin/currencies/${code}/overview/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-types
     * @name DocumentTypesList
     * @summary List document types
     * @request GET:/3/admin/document-types/
     * @secure
     */
    documentTypesList: (
      query: DocumentTypesListParams,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTypesListData, any>({
        path: `/3/admin/document-types/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-types
     * @name DocumentTypesCreate
     * @summary Create document type
     * @request POST:/3/admin/document-types/
     * @secure
     */
    documentTypesCreate: (
      data: AdminDocumentType,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTypesCreateData, any>({
        path: `/3/admin/document-types/`,
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
     * @tags document-types
     * @name DocumentTypesRetrieve
     * @summary Retrieve document type
     * @request GET:/3/admin/document-types/{id}/
     * @secure
     */
    documentTypesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<DocumentTypesRetrieveData, any>({
        path: `/3/admin/document-types/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-types
     * @name DocumentTypesUpdate
     * @summary Update document type
     * @request PUT:/3/admin/document-types/{id}/
     * @secure
     */
    documentTypesUpdate: (
      id: string,
      data: AdminDocumentType,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTypesUpdateData, any>({
        path: `/3/admin/document-types/${id}/`,
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
     * @tags document-types
     * @name DocumentTypesPartialUpdate
     * @summary Partially update document type
     * @request PATCH:/3/admin/document-types/{id}/
     * @secure
     */
    documentTypesPartialUpdate: (
      id: string,
      data: PatchedAdminDocumentType,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTypesPartialUpdateData, any>({
        path: `/3/admin/document-types/${id}/`,
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
     * @tags document-types
     * @name DocumentTypesDestroy
     * @summary Delete document type
     * @request DELETE:/3/admin/document-types/{id}/
     * @secure
     */
    documentTypesDestroy: (id: string, params: RequestParams = {}) =>
      this.request<DocumentTypesDestroyData, any>({
        path: `/3/admin/document-types/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exports
     * @name ExportsList
     * @summary List exports
     * @request GET:/3/admin/exports/
     * @secure
     */
    exportsList: (query: ExportsListParams, params: RequestParams = {}) =>
      this.request<ExportsListData, any>({
        path: `/3/admin/exports/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exports
     * @name ExportsCreate
     * @summary Create export
     * @request POST:/3/admin/exports/
     * @secure
     */
    exportsCreate: (data: AdminCreateExport, params: RequestParams = {}) =>
      this.request<ExportsCreateData, any>({
        path: `/3/admin/exports/`,
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
     * @tags exports
     * @name ExportsRetrieve
     * @summary Retrieve export
     * @request GET:/3/admin/exports/{identifier}/
     * @secure
     */
    exportsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<ExportsRetrieveData, any>({
        path: `/3/admin/exports/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exports
     * @name ExportsDestroy
     * @summary Delete export
     * @request DELETE:/3/admin/exports/{identifier}/
     * @secure
     */
    exportsDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<ExportsDestroyData, any>({
        path: `/3/admin/exports/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsList
     * @summary List groups
     * @request GET:/3/admin/groups/
     * @secure
     */
    groupsList: (query: GroupsListParams, params: RequestParams = {}) =>
      this.request<GroupsListData, any>({
        path: `/3/admin/groups/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsCreate
     * @summary Create group
     * @request POST:/3/admin/groups/
     * @secure
     */
    groupsCreate: (data: AdminCreateGroup, params: RequestParams = {}) =>
      this.request<GroupsCreateData, any>({
        path: `/3/admin/groups/`,
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
     * @tags groups
     * @name GroupsRetrieve
     * @summary Retrieve group
     * @request GET:/3/admin/groups/{group_name}/
     * @secure
     */
    groupsRetrieve: (groupName: string, params: RequestParams = {}) =>
      this.request<GroupsRetrieveData, any>({
        path: `/3/admin/groups/${groupName}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsUpdate
     * @summary Update group
     * @request PUT:/3/admin/groups/{group_name}/
     * @secure
     */
    groupsUpdate: (
      groupName: string,
      data: AdminUpdateGroup,
      params: RequestParams = {},
    ) =>
      this.request<GroupsUpdateData, any>({
        path: `/3/admin/groups/${groupName}/`,
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
     * @tags groups
     * @name GroupsPartialUpdate
     * @summary Partially update group
     * @request PATCH:/3/admin/groups/{group_name}/
     * @secure
     */
    groupsPartialUpdate: (
      groupName: string,
      data: PatchedAdminUpdateGroup,
      params: RequestParams = {},
    ) =>
      this.request<GroupsPartialUpdateData, any>({
        path: `/3/admin/groups/${groupName}/`,
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
     * @tags groups
     * @name GroupsFeesList
     * @summary List group fees
     * @request GET:/3/admin/groups/{group_name}/fees/
     * @secure
     */
    groupsFeesList: (groupName: string, params: RequestParams = {}) =>
      this.request<GroupsFeesListData, any>({
        path: `/3/admin/groups/${groupName}/fees/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsFeesCreate
     * @summary Create group fee
     * @request POST:/3/admin/groups/{group_name}/fees/
     * @secure
     */
    groupsFeesCreate: (
      groupName: string,
      data: AdminCreateGroupFee,
      params: RequestParams = {},
    ) =>
      this.request<GroupsFeesCreateData, any>({
        path: `/3/admin/groups/${groupName}/fees/`,
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
     * @tags groups
     * @name GroupsFeesRetrieve
     * @summary Retrieve group fee
     * @request GET:/3/admin/groups/{group_name}/fees/{fee_id}/
     * @secure
     */
    groupsFeesRetrieve: (
      feeId: string,
      groupName: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsFeesRetrieveData, any>({
        path: `/3/admin/groups/${groupName}/fees/${feeId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsFeesUpdate
     * @summary update group fee
     * @request PUT:/3/admin/groups/{group_name}/fees/{fee_id}/
     * @secure
     */
    groupsFeesUpdate: (
      feeId: string,
      groupName: string,
      data: AdminUpdateGroupFee,
      params: RequestParams = {},
    ) =>
      this.request<GroupsFeesUpdateData, any>({
        path: `/3/admin/groups/${groupName}/fees/${feeId}/`,
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
     * @tags groups
     * @name GroupsFeesPartialUpdate
     * @summary Partially group fee
     * @request PATCH:/3/admin/groups/{group_name}/fees/{fee_id}/
     * @secure
     */
    groupsFeesPartialUpdate: (
      feeId: string,
      groupName: string,
      data: PatchedAdminUpdateGroupFee,
      params: RequestParams = {},
    ) =>
      this.request<GroupsFeesPartialUpdateData, any>({
        path: `/3/admin/groups/${groupName}/fees/${feeId}/`,
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
     * @tags groups
     * @name GroupsFeesDestroy
     * @summary Delete group fee
     * @request DELETE:/3/admin/groups/{group_name}/fees/{fee_id}/
     * @secure
     */
    groupsFeesDestroy: (
      feeId: string,
      groupName: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsFeesDestroyData, any>({
        path: `/3/admin/groups/${groupName}/fees/${feeId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsPermissionsList
     * @summary List group permissions
     * @request GET:/3/admin/groups/{group_name}/permissions/
     * @secure
     */
    groupsPermissionsList: (
      { groupName, ...query }: GroupsPermissionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<GroupsPermissionsListData, any>({
        path: `/3/admin/groups/${groupName}/permissions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsPermissionsCreate
     * @summary Create group permission
     * @request POST:/3/admin/groups/{group_name}/permissions/
     * @secure
     */
    groupsPermissionsCreate: (
      groupName: string,
      data: AdminCreateMultiGroupPermission,
      params: RequestParams = {},
    ) =>
      this.request<GroupsPermissionsCreateData, any>({
        path: `/3/admin/groups/${groupName}/permissions/`,
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
     * @tags groups
     * @name GroupsPermissionsRetrieve
     * @summary Retrieve group permission
     * @request GET:/3/admin/groups/{group_name}/permissions/{permission_id}/
     * @secure
     */
    groupsPermissionsRetrieve: (
      groupName: string,
      permissionId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsPermissionsRetrieveData, any>({
        path: `/3/admin/groups/${groupName}/permissions/${permissionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsPermissionsUpdate
     * @summary Update group permission
     * @request PUT:/3/admin/groups/{group_name}/permissions/{permission_id}/
     * @secure
     */
    groupsPermissionsUpdate: (
      groupName: string,
      permissionId: string,
      data: AdminGroupPermission,
      params: RequestParams = {},
    ) =>
      this.request<GroupsPermissionsUpdateData, any>({
        path: `/3/admin/groups/${groupName}/permissions/${permissionId}/`,
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
     * @tags groups
     * @name GroupsPermissionsPartialUpdate
     * @summary Partially update group permission
     * @request PATCH:/3/admin/groups/{group_name}/permissions/{permission_id}/
     * @secure
     */
    groupsPermissionsPartialUpdate: (
      groupName: string,
      permissionId: string,
      data: PatchedAdminGroupPermission,
      params: RequestParams = {},
    ) =>
      this.request<GroupsPermissionsPartialUpdateData, any>({
        path: `/3/admin/groups/${groupName}/permissions/${permissionId}/`,
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
     * @tags groups
     * @name GroupsPermissionsDestroy
     * @summary Delete group permission
     * @request DELETE:/3/admin/groups/{group_name}/permissions/{permission_id}/
     * @secure
     */
    groupsPermissionsDestroy: (
      groupName: string,
      permissionId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsPermissionsDestroyData, any>({
        path: `/3/admin/groups/${groupName}/permissions/${permissionId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsSettingsRetrieve
     * @summary Retrieve group settings
     * @request GET:/3/admin/groups/{group_name}/settings/
     * @secure
     */
    groupsSettingsRetrieve: (groupName: string, params: RequestParams = {}) =>
      this.request<GroupsSettingsRetrieveData, any>({
        path: `/3/admin/groups/${groupName}/settings/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsSettingsUpdate
     * @summary Update group settings
     * @request PUT:/3/admin/groups/{group_name}/settings/
     * @secure
     */
    groupsSettingsUpdate: (
      groupName: string,
      data: AdminUpdateGroupSettings,
      params: RequestParams = {},
    ) =>
      this.request<GroupsSettingsUpdateData, any>({
        path: `/3/admin/groups/${groupName}/settings/`,
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
     * @tags groups
     * @name GroupsSettingsPartialUpdate
     * @summary Partially update group settings
     * @request PATCH:/3/admin/groups/{group_name}/settings/
     * @secure
     */
    groupsSettingsPartialUpdate: (
      groupName: string,
      data: PatchedAdminUpdateGroupSettings,
      params: RequestParams = {},
    ) =>
      this.request<GroupsSettingsPartialUpdateData, any>({
        path: `/3/admin/groups/${groupName}/settings/`,
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
     * @tags groups
     * @name GroupsTiersList
     * @summary List group tiers
     * @request GET:/3/admin/groups/{group_name}/tiers/
     * @secure
     */
    groupsTiersList: (
      { groupName, ...query }: GroupsTiersListParams,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersListData, any>({
        path: `/3/admin/groups/${groupName}/tiers/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersCreate
     * @summary Create group tiers
     * @request POST:/3/admin/groups/{group_name}/tiers/
     * @secure
     */
    groupsTiersCreate: (
      groupName: string,
      data: AdminGroupTier,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersCreateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/`,
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
     * @tags groups
     * @name GroupsTiersRetrieve
     * @summary Retrieve group tiers
     * @request GET:/3/admin/groups/{group_name}/tiers/{tier_id}/
     * @secure
     */
    groupsTiersRetrieve: (
      groupName: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRetrieveData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersUpdate
     * @summary Update group tiers
     * @request PUT:/3/admin/groups/{group_name}/tiers/{tier_id}/
     * @secure
     */
    groupsTiersUpdate: (
      groupName: string,
      tierId: string,
      data: AdminExtendedGroupTier,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/`,
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
     * @tags groups
     * @name GroupsTiersPartialUpdate
     * @summary Partially update group tiers
     * @request PATCH:/3/admin/groups/{group_name}/tiers/{tier_id}/
     * @secure
     */
    groupsTiersPartialUpdate: (
      groupName: string,
      tierId: string,
      data: PatchedAdminExtendedGroupTier,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersPartialUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/`,
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
     * @tags groups
     * @name GroupsTiersDestroy
     * @summary Delete group tiers
     * @request DELETE:/3/admin/groups/{group_name}/tiers/{tier_id}/
     * @secure
     */
    groupsTiersDestroy: (
      groupName: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersDestroyData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersFeesList
     * @summary List group tier fees
     * @request GET:/3/admin/groups/{group_name}/tiers/{tier_id}/fees/
     * @secure
     */
    groupsTiersFeesList: (
      groupName: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersFeesListData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/fees/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersFeesCreate
     * @summary Create group tier fees
     * @request POST:/3/admin/groups/{group_name}/tiers/{tier_id}/fees/
     * @secure
     */
    groupsTiersFeesCreate: (
      groupName: string,
      tierId: string,
      data: AdminCreateGroupTierFee,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersFeesCreateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/fees/`,
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
     * @tags groups
     * @name GroupsTiersFeesRetrieve
     * @summary Retrieve group tier fee
     * @request GET:/3/admin/groups/{group_name}/tiers/{tier_id}/fees/{fee_id}/
     * @secure
     */
    groupsTiersFeesRetrieve: (
      feeId: string,
      groupName: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersFeesRetrieveData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/fees/${feeId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersFeesUpdate
     * @summary Update group tier fee
     * @request PUT:/3/admin/groups/{group_name}/tiers/{tier_id}/fees/{fee_id}/
     * @secure
     */
    groupsTiersFeesUpdate: (
      feeId: string,
      groupName: string,
      tierId: string,
      data: AdminUpdateGroupTierFee,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersFeesUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/fees/${feeId}/`,
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
     * @tags groups
     * @name GroupsTiersFeesPartialUpdate
     * @summary Partially update group tier fee
     * @request PATCH:/3/admin/groups/{group_name}/tiers/{tier_id}/fees/{fee_id}/
     * @secure
     */
    groupsTiersFeesPartialUpdate: (
      feeId: string,
      groupName: string,
      tierId: string,
      data: PatchedAdminUpdateGroupTierFee,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersFeesPartialUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/fees/${feeId}/`,
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
     * @tags groups
     * @name GroupsTiersFeesDestroy
     * @summary Delete group tier fee
     * @request DELETE:/3/admin/groups/{group_name}/tiers/{tier_id}/fees/{fee_id}/
     * @secure
     */
    groupsTiersFeesDestroy: (
      feeId: string,
      groupName: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersFeesDestroyData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/fees/${feeId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersLimitsList
     * @summary List group tier limits
     * @request GET:/3/admin/groups/{group_name}/tiers/{tier_id}/limits/
     * @secure
     */
    groupsTiersLimitsList: (
      groupName: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersLimitsListData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/limits/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersLimitsCreate
     * @summary Create group tier limits
     * @request POST:/3/admin/groups/{group_name}/tiers/{tier_id}/limits/
     * @secure
     */
    groupsTiersLimitsCreate: (
      groupName: string,
      tierId: string,
      data: AdminCreateGroupTierLimit,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersLimitsCreateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/limits/`,
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
     * @tags groups
     * @name GroupsTiersLimitsRetrieve
     * @summary Retrieve group tier limit
     * @request GET:/3/admin/groups/{group_name}/tiers/{tier_id}/limits/{limit_id}/
     * @secure
     */
    groupsTiersLimitsRetrieve: (
      groupName: string,
      limitId: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersLimitsRetrieveData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/limits/${limitId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersLimitsUpdate
     * @summary Update group tier limit
     * @request PUT:/3/admin/groups/{group_name}/tiers/{tier_id}/limits/{limit_id}/
     * @secure
     */
    groupsTiersLimitsUpdate: (
      groupName: string,
      limitId: string,
      tierId: string,
      data: AdminUpdateGroupTierLimit,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersLimitsUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/limits/${limitId}/`,
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
     * @tags groups
     * @name GroupsTiersLimitsPartialUpdate
     * @summary Partially update group tier limit
     * @request PATCH:/3/admin/groups/{group_name}/tiers/{tier_id}/limits/{limit_id}/
     * @secure
     */
    groupsTiersLimitsPartialUpdate: (
      groupName: string,
      limitId: string,
      tierId: string,
      data: PatchedAdminUpdateGroupTierLimit,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersLimitsPartialUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/limits/${limitId}/`,
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
     * @tags groups
     * @name GroupsTiersLimitsDestroy
     * @summary Delete group tier limit
     * @request DELETE:/3/admin/groups/{group_name}/tiers/{tier_id}/limits/{limit_id}/
     * @secure
     */
    groupsTiersLimitsDestroy: (
      groupName: string,
      limitId: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersLimitsDestroyData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/limits/${limitId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersRequirementSetsList
     * @summary List tier requirement sets
     * @request GET:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/
     * @secure
     */
    groupsTiersRequirementSetsList: (
      { groupName, tierId, ...query }: GroupsTiersRequirementSetsListParams,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsListData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersRequirementSetsCreate
     * @summary Create tier requirement set
     * @request POST:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/
     * @secure
     */
    groupsTiersRequirementSetsCreate: (
      groupName: string,
      tierId: string,
      data: CreateUpdateGroupTierRequirementSet,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsCreateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/`,
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
     * @tags groups
     * @name GroupsTiersRequirementSetsRetrieve
     * @summary Retrieve tier requirement set
     * @request GET:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/
     * @secure
     */
    groupsTiersRequirementSetsRetrieve: (
      groupName: string,
      reqSetId: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsRetrieveData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersRequirementSetsUpdate
     * @summary Update tier requirement set
     * @request PUT:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/
     * @secure
     */
    groupsTiersRequirementSetsUpdate: (
      groupName: string,
      reqSetId: string,
      tierId: string,
      data: CreateUpdateGroupTierRequirementSet,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/`,
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
     * @tags groups
     * @name GroupsTiersRequirementSetsPartialUpdate
     * @summary Partially update tier requirement set
     * @request PATCH:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/
     * @secure
     */
    groupsTiersRequirementSetsPartialUpdate: (
      groupName: string,
      reqSetId: string,
      tierId: string,
      data: PatchedCreateUpdateGroupTierRequirementSet,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsPartialUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/`,
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
     * @tags groups
     * @name GroupsTiersRequirementSetsDestroy
     * @summary Delete tier requirement set
     * @request DELETE:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/
     * @secure
     */
    groupsTiersRequirementSetsDestroy: (
      groupName: string,
      reqSetId: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsDestroyData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersRequirementSetsItemsList
     * @summary List tier requirement set items
     * @request GET:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/
     * @secure
     */
    groupsTiersRequirementSetsItemsList: (
      {
        groupName,
        reqSetId,
        tierId,
        ...query
      }: GroupsTiersRequirementSetsItemsListParams,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsItemsListData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/items/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersRequirementSetsItemsCreate
     * @summary Create tier requirement set item
     * @request POST:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/
     * @secure
     */
    groupsTiersRequirementSetsItemsCreate: (
      groupName: string,
      reqSetId: string,
      tierId: string,
      data: CreateGroupTierRequirementSetItem,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsItemsCreateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/items/`,
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
     * @tags groups
     * @name GroupsTiersRequirementSetsItemsRetrieve
     * @summary Retrieve tier requirement set item
     * @request GET:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/{req_item_id}/
     * @secure
     */
    groupsTiersRequirementSetsItemsRetrieve: (
      groupName: string,
      reqItemId: string,
      reqSetId: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsItemsRetrieveData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/items/${reqItemId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersRequirementSetsItemsUpdate
     * @summary Update tier requirement set item
     * @request PUT:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/{req_item_id}/
     * @secure
     */
    groupsTiersRequirementSetsItemsUpdate: (
      groupName: string,
      reqItemId: string,
      reqSetId: string,
      tierId: string,
      data: GroupTierRequirementSetItem,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsItemsUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/items/${reqItemId}/`,
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
     * @tags groups
     * @name GroupsTiersRequirementSetsItemsPartialUpdate
     * @summary Partially update tier requirement set item
     * @request PATCH:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/{req_item_id}/
     * @secure
     */
    groupsTiersRequirementSetsItemsPartialUpdate: (
      groupName: string,
      reqItemId: string,
      reqSetId: string,
      tierId: string,
      data: PatchedGroupTierRequirementSetItem,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsItemsPartialUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/items/${reqItemId}/`,
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
     * @tags groups
     * @name GroupsTiersRequirementSetsItemsDestroy
     * @summary Delete tier requirement set item
     * @request DELETE:/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/{req_item_id}/
     * @secure
     */
    groupsTiersRequirementSetsItemsDestroy: (
      groupName: string,
      reqItemId: string,
      reqSetId: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsItemsDestroyData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/items/${reqItemId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersSettingsRetrieve
     * @summary Retrieve group tier settings
     * @request GET:/3/admin/groups/{group_name}/tiers/{tier_id}/settings/
     * @secure
     */
    groupsTiersSettingsRetrieve: (
      groupName: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersSettingsRetrieveData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/settings/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersSettingsUpdate
     * @summary Update group tier settings
     * @request PUT:/3/admin/groups/{group_name}/tiers/{tier_id}/settings/
     * @secure
     */
    groupsTiersSettingsUpdate: (
      groupName: string,
      tierId: string,
      data: AdminUpdateGroupTierSettings,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersSettingsUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/settings/`,
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
     * @tags groups
     * @name GroupsTiersSettingsPartialUpdate
     * @summary Partially update group tier settings
     * @request PATCH:/3/admin/groups/{group_name}/tiers/{tier_id}/settings/
     * @secure
     */
    groupsTiersSettingsPartialUpdate: (
      groupName: string,
      tierId: string,
      data: PatchedAdminUpdateGroupTierSettings,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersSettingsPartialUpdateData, any>({
        path: `/3/admin/groups/${groupName}/tiers/${tierId}/settings/`,
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
     * @tags legal-terms
     * @name LegalTermsList
     * @summary List legal terms
     * @request GET:/3/admin/legal-terms/
     * @secure
     */
    legalTermsList: (query: LegalTermsListParams, params: RequestParams = {}) =>
      this.request<LegalTermsListData, any>({
        path: `/3/admin/legal-terms/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal-terms
     * @name LegalTermsCreate
     * @summary Create legal terms
     * @request POST:/3/admin/legal-terms/
     * @secure
     */
    legalTermsCreate: (
      data: AdminCreateUpdateLegalTerm,
      params: RequestParams = {},
    ) =>
      this.request<LegalTermsCreateData, any>({
        path: `/3/admin/legal-terms/`,
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
     * @tags legal-terms
     * @name LegalTermsRetrieve
     * @summary Retrieve legal terms
     * @request GET:/3/admin/legal-terms/{id}/
     * @secure
     */
    legalTermsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<LegalTermsRetrieveData, any>({
        path: `/3/admin/legal-terms/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal-terms
     * @name LegalTermsUpdate
     * @summary Update legal terms
     * @request PUT:/3/admin/legal-terms/{id}/
     * @secure
     */
    legalTermsUpdate: (
      id: string,
      data: AdminCreateUpdateLegalTerm,
      params: RequestParams = {},
    ) =>
      this.request<LegalTermsUpdateData, any>({
        path: `/3/admin/legal-terms/${id}/`,
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
     * @tags legal-terms
     * @name LegalTermsPartialUpdate
     * @summary Partially update legal terms
     * @request PATCH:/3/admin/legal-terms/{id}/
     * @secure
     */
    legalTermsPartialUpdate: (
      id: string,
      data: PatchedAdminCreateUpdateLegalTerm,
      params: RequestParams = {},
    ) =>
      this.request<LegalTermsPartialUpdateData, any>({
        path: `/3/admin/legal-terms/${id}/`,
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
     * @tags legal-terms
     * @name LegalTermsDestroy
     * @summary Delete legal terms
     * @request DELETE:/3/admin/legal-terms/{id}/
     * @secure
     */
    legalTermsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<LegalTermsDestroyData, any>({
        path: `/3/admin/legal-terms/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal-terms
     * @name LegalTermsVersionsList
     * @summary List legal terms versions
     * @request GET:/3/admin/legal-terms/{id}/versions/
     * @secure
     */
    legalTermsVersionsList: (
      { id, ...query }: LegalTermsVersionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<LegalTermsVersionsListData, any>({
        path: `/3/admin/legal-terms/${id}/versions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal-terms
     * @name LegalTermsVersionsCreate
     * @summary Create legal terms version
     * @request POST:/3/admin/legal-terms/{id}/versions/
     * @secure
     */
    legalTermsVersionsCreate: (
      id: string,
      data: AdminLegalTermVersion,
      params: RequestParams = {},
    ) =>
      this.request<LegalTermsVersionsCreateData, any>({
        path: `/3/admin/legal-terms/${id}/versions/`,
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
     * @tags legal-terms
     * @name LegalTermsVersionsRetrieve
     * @summary Retrieve legal terms version
     * @request GET:/3/admin/legal-terms/{term_id}/versions/{version_id}/
     * @secure
     */
    legalTermsVersionsRetrieve: (
      termId: string,
      versionId: string,
      params: RequestParams = {},
    ) =>
      this.request<LegalTermsVersionsRetrieveData, any>({
        path: `/3/admin/legal-terms/${termId}/versions/${versionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal-terms
     * @name LegalTermsVersionsUpdate
     * @summary Update legal terms version
     * @request PUT:/3/admin/legal-terms/{term_id}/versions/{version_id}/
     * @secure
     */
    legalTermsVersionsUpdate: (
      termId: string,
      versionId: string,
      data: AdminLegalTermVersion,
      params: RequestParams = {},
    ) =>
      this.request<LegalTermsVersionsUpdateData, any>({
        path: `/3/admin/legal-terms/${termId}/versions/${versionId}/`,
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
     * @tags legal-terms
     * @name LegalTermsVersionsPartialUpdate
     * @summary Partially update legal terms version
     * @request PATCH:/3/admin/legal-terms/{term_id}/versions/{version_id}/
     * @secure
     */
    legalTermsVersionsPartialUpdate: (
      termId: string,
      versionId: string,
      data: PatchedAdminLegalTermVersion,
      params: RequestParams = {},
    ) =>
      this.request<LegalTermsVersionsPartialUpdateData, any>({
        path: `/3/admin/legal-terms/${termId}/versions/${versionId}/`,
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
     * @tags legal-terms
     * @name LegalTermsVersionsDestroy
     * @summary Delete legal terms version
     * @request DELETE:/3/admin/legal-terms/{term_id}/versions/{version_id}/
     * @secure
     */
    legalTermsVersionsDestroy: (
      termId: string,
      versionId: string,
      params: RequestParams = {},
    ) =>
      this.request<LegalTermsVersionsDestroyData, any>({
        path: `/3/admin/legal-terms/${termId}/versions/${versionId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags metrics
     * @name MetricsList
     * @summary List metrics
     * @request GET:/3/admin/metrics/
     * @secure
     */
    metricsList: (query: MetricsListParams, params: RequestParams = {}) =>
      this.request<MetricsListData, any>({
        path: `/3/admin/metrics/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags metrics
     * @name MetricsCreate
     * @summary Create metric
     * @request POST:/3/admin/metrics/
     * @secure
     */
    metricsCreate: (data: AdminCreateMetric, params: RequestParams = {}) =>
      this.request<MetricsCreateData, any>({
        path: `/3/admin/metrics/`,
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
     * @tags metrics
     * @name MetricsRetrieve
     * @summary Retrieve metric
     * @request GET:/3/admin/metrics/{identifier}/
     * @secure
     */
    metricsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<MetricsRetrieveData, any>({
        path: `/3/admin/metrics/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags metrics
     * @name MetricsDestroy
     * @summary Delete metric
     * @request DELETE:/3/admin/metrics/{identifier}/
     * @secure
     */
    metricsDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<MetricsDestroyData, any>({
        path: `/3/admin/metrics/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags metrics
     * @name MetricsPointsList
     * @summary List metric points
     * @request GET:/3/admin/metrics/{identifier}/points/
     * @secure
     */
    metricsPointsList: (
      { identifier, ...query }: MetricsPointsListParams,
      params: RequestParams = {},
    ) =>
      this.request<MetricsPointsListData, any>({
        path: `/3/admin/metrics/${identifier}/points/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags oauth-clients
     * @name OauthClientsList
     * @request GET:/3/admin/oauth-clients/
     * @secure
     */
    oauthClientsList: (
      query: OauthClientsListParams,
      params: RequestParams = {},
    ) =>
      this.request<OauthClientsListData, any>({
        path: `/3/admin/oauth-clients/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags oauth-clients
     * @name OauthClientsCreate
     * @request POST:/3/admin/oauth-clients/
     * @secure
     */
    oauthClientsCreate: (data: AdminOauthClient, params: RequestParams = {}) =>
      this.request<OauthClientsCreateData, any>({
        path: `/3/admin/oauth-clients/`,
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
     * @tags oauth-clients
     * @name OauthClientsRetrieve
     * @request GET:/3/admin/oauth-clients/{identifier}/
     * @secure
     */
    oauthClientsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<OauthClientsRetrieveData, any>({
        path: `/3/admin/oauth-clients/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags oauth-clients
     * @name OauthClientsUpdate
     * @request PUT:/3/admin/oauth-clients/{identifier}/
     * @secure
     */
    oauthClientsUpdate: (
      identifier: string,
      data: AdminUpdateOauthClient,
      params: RequestParams = {},
    ) =>
      this.request<OauthClientsUpdateData, any>({
        path: `/3/admin/oauth-clients/${identifier}/`,
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
     * @tags oauth-clients
     * @name OauthClientsPartialUpdate
     * @request PATCH:/3/admin/oauth-clients/{identifier}/
     * @secure
     */
    oauthClientsPartialUpdate: (
      identifier: string,
      data: PatchedAdminUpdateOauthClient,
      params: RequestParams = {},
    ) =>
      this.request<OauthClientsPartialUpdateData, any>({
        path: `/3/admin/oauth-clients/${identifier}/`,
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
     * @tags oauth-clients
     * @name OauthClientsDestroy
     * @request DELETE:/3/admin/oauth-clients/{identifier}/
     * @secure
     */
    oauthClientsDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<OauthClientsDestroyData, any>({
        path: `/3/admin/oauth-clients/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags permissions
     * @name PermissionsList
     * @summary List permissions
     * @request GET:/3/admin/permissions/
     * @secure
     */
    permissionsList: (
      query: PermissionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<PermissionsListData, any>({
        path: `/3/admin/permissions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags permissions
     * @name PermissionsRetrieve
     * @summary Retrive permission
     * @request GET:/3/admin/permissions/{permission_id}/
     * @secure
     */
    permissionsRetrieve: (permissionId: string, params: RequestParams = {}) =>
      this.request<PermissionsRetrieveData, any>({
        path: `/3/admin/permissions/${permissionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags requests
     * @name RequestsList
     * @summary List requests
     * @request GET:/3/admin/requests/
     * @secure
     */
    requestsList: (query: RequestsListParams, params: RequestParams = {}) =>
      this.request<RequestsListData, any>({
        path: `/3/admin/requests/`,
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
     * @name RequestsRetrieve
     * @summary Retrieve request
     * @request GET:/3/admin/requests/{request_id}/
     * @secure
     */
    requestsRetrieve: (requestId: string, params: RequestParams = {}) =>
      this.request<RequestsRetrieveData, any>({
        path: `/3/admin/requests/${requestId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags search
     * @name SearchRetrieve
     * @summary Retrieve search
     * @request GET:/3/admin/search/
     * @secure
     */
    searchRetrieve: (query: SearchRetrieveParams, params: RequestParams = {}) =>
      this.request<SearchRetrieveData, any>({
        path: `/3/admin/search/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name ServicesList
     * @summary List services
     * @request GET:/3/admin/services/
     * @secure
     */
    servicesList: (query: ServicesListParams, params: RequestParams = {}) =>
      this.request<ServicesListData, any>({
        path: `/3/admin/services/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name ServicesCreate
     * @summary Create service
     * @request POST:/3/admin/services/
     * @secure
     */
    servicesCreate: (data: AdminService, params: RequestParams = {}) =>
      this.request<ServicesCreateData, any>({
        path: `/3/admin/services/`,
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
     * @tags services
     * @name ServicesRetrieve
     * @summary Retrieve service
     * @request GET:/3/admin/services/{service_id}/
     * @secure
     */
    servicesRetrieve: (serviceId: string, params: RequestParams = {}) =>
      this.request<ServicesRetrieveData, any>({
        path: `/3/admin/services/${serviceId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name ServicesUpdate
     * @summary Update service
     * @request PUT:/3/admin/services/{service_id}/
     * @secure
     */
    servicesUpdate: (
      serviceId: string,
      data: AdminUpdateService,
      params: RequestParams = {},
    ) =>
      this.request<ServicesUpdateData, any>({
        path: `/3/admin/services/${serviceId}/`,
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
     * @tags services
     * @name ServicesPartialUpdate
     * @summary Partially update service
     * @request PATCH:/3/admin/services/{service_id}/
     * @secure
     */
    servicesPartialUpdate: (
      serviceId: string,
      data: PatchedAdminUpdateService,
      params: RequestParams = {},
    ) =>
      this.request<ServicesPartialUpdateData, any>({
        path: `/3/admin/services/${serviceId}/`,
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
     * @tags services
     * @name ServicesDestroy
     * @summary Delete service
     * @request DELETE:/3/admin/services/{service_id}/
     * @secure
     */
    servicesDestroy: (serviceId: string, params: RequestParams = {}) =>
      this.request<ServicesDestroyData, any>({
        path: `/3/admin/services/${serviceId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name ServicesPermissionsList
     * @summary List service permissions
     * @request GET:/3/admin/services/{service_id}/permissions/
     * @secure
     */
    servicesPermissionsList: (
      { serviceId, ...query }: ServicesPermissionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ServicesPermissionsListData, any>({
        path: `/3/admin/services/${serviceId}/permissions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name ServicesPermissionsCreate
     * @summary Create service permissions
     * @request POST:/3/admin/services/{service_id}/permissions/
     * @secure
     */
    servicesPermissionsCreate: (
      serviceId: string,
      data: AdminCreateServicePermission,
      params: RequestParams = {},
    ) =>
      this.request<ServicesPermissionsCreateData, any>({
        path: `/3/admin/services/${serviceId}/permissions/`,
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
     * @tags services
     * @name ServicesPermissionsRetrieve
     * @summary Retrieve service permission
     * @request GET:/3/admin/services/{service_id}/permissions/{permission_id}/
     * @secure
     */
    servicesPermissionsRetrieve: (
      permissionId: string,
      serviceId: string,
      params: RequestParams = {},
    ) =>
      this.request<ServicesPermissionsRetrieveData, any>({
        path: `/3/admin/services/${serviceId}/permissions/${permissionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name ServicesPermissionsDestroy
     * @summary Delete service permission
     * @request DELETE:/3/admin/services/{service_id}/permissions/{permission_id}/
     * @secure
     */
    servicesPermissionsDestroy: (
      permissionId: string,
      serviceId: string,
      params: RequestParams = {},
    ) =>
      this.request<ServicesPermissionsDestroyData, any>({
        path: `/3/admin/services/${serviceId}/permissions/${permissionId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags statements
     * @name StatementsList
     * @request GET:/3/admin/statements/
     * @secure
     */
    statementsList: (query: StatementsListParams, params: RequestParams = {}) =>
      this.request<StatementsListData, any>({
        path: `/3/admin/statements/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags statements
     * @name StatementsCreate
     * @request POST:/3/admin/statements/
     * @secure
     */
    statementsCreate: (
      data: AdminCreateStatement,
      params: RequestParams = {},
    ) =>
      this.request<StatementsCreateData, any>({
        path: `/3/admin/statements/`,
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
     * @tags statements
     * @name StatementsRetrieve
     * @request GET:/3/admin/statements/{identifier}/
     * @secure
     */
    statementsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<StatementsRetrieveData, any>({
        path: `/3/admin/statements/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags statements
     * @name StatementsDestroy
     * @request DELETE:/3/admin/statements/{identifier}/
     * @secure
     */
    statementsDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<StatementsDestroyData, any>({
        path: `/3/admin/statements/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags subtypes
     * @name SubtypesList
     * @summary List subtypes
     * @request GET:/3/admin/subtypes/
     * @secure
     */
    subtypesList: (query: SubtypesListParams, params: RequestParams = {}) =>
      this.request<SubtypesListData, any>({
        path: `/3/admin/subtypes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags subtypes
     * @name SubtypesCreate
     * @summary Create subtype
     * @request POST:/3/admin/subtypes/
     * @secure
     */
    subtypesCreate: (
      data: AdminCreateTransactionSubtype,
      params: RequestParams = {},
    ) =>
      this.request<SubtypesCreateData, any>({
        path: `/3/admin/subtypes/`,
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
     * @tags subtypes
     * @name SubtypesRetrieve
     * @summary Retrieve subtype
     * @request GET:/3/admin/subtypes/{id}/
     * @secure
     */
    subtypesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<SubtypesRetrieveData, any>({
        path: `/3/admin/subtypes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags subtypes
     * @name SubtypesUpdate
     * @summary Update subtype
     * @request PUT:/3/admin/subtypes/{id}/
     * @secure
     */
    subtypesUpdate: (
      id: string,
      data: AdminUpdateTransactionSubtype,
      params: RequestParams = {},
    ) =>
      this.request<SubtypesUpdateData, any>({
        path: `/3/admin/subtypes/${id}/`,
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
     * @tags subtypes
     * @name SubtypesPartialUpdate
     * @summary Partially update subtype
     * @request PATCH:/3/admin/subtypes/{id}/
     * @secure
     */
    subtypesPartialUpdate: (
      id: string,
      data: PatchedAdminUpdateTransactionSubtype,
      params: RequestParams = {},
    ) =>
      this.request<SubtypesPartialUpdateData, any>({
        path: `/3/admin/subtypes/${id}/`,
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
     * @tags subtypes
     * @name SubtypesDestroy
     * @summary Delete subtype
     * @request DELETE:/3/admin/subtypes/{id}/
     * @secure
     */
    subtypesDestroy: (id: string, params: RequestParams = {}) =>
      this.request<SubtypesDestroyData, any>({
        path: `/3/admin/subtypes/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transaction-collections
     * @name TransactionCollectionsList
     * @summary List transaction-collections
     * @request GET:/3/admin/transaction-collections/
     * @secure
     */
    transactionCollectionsList: (
      query: TransactionCollectionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<TransactionCollectionsListData, any>({
        path: `/3/admin/transaction-collections/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transaction-collections
     * @name TransactionCollectionsCreate
     * @summary Create transaction-collections
     * @request POST:/3/admin/transaction-collections/
     * @secure
     */
    transactionCollectionsCreate: (
      data: AdminCreateTransactionCollection,
      params: RequestParams = {},
    ) =>
      this.request<TransactionCollectionsCreateData, any>({
        path: `/3/admin/transaction-collections/`,
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
     * @tags transaction-collections
     * @name TransactionCollectionsRetrieve
     * @summary Retrieve transaction-collection
     * @request GET:/3/admin/transaction-collections/{identifier}/
     * @secure
     */
    transactionCollectionsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<TransactionCollectionsRetrieveData, any>({
        path: `/3/admin/transaction-collections/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transaction-collections
     * @name TransactionCollectionsUpdate
     * @summary Update transaction-collection
     * @request PUT:/3/admin/transaction-collections/{identifier}/
     * @secure
     */
    transactionCollectionsUpdate: (
      identifier: string,
      data: AdminUpdateTransactionCollection,
      params: RequestParams = {},
    ) =>
      this.request<TransactionCollectionsUpdateData, any>({
        path: `/3/admin/transaction-collections/${identifier}/`,
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
     * @tags transaction-collections
     * @name TransactionCollectionsPartialUpdate
     * @summary Partially update transaction-collection
     * @request PATCH:/3/admin/transaction-collections/{identifier}/
     * @secure
     */
    transactionCollectionsPartialUpdate: (
      identifier: string,
      data: PatchedAdminUpdateTransactionCollection,
      params: RequestParams = {},
    ) =>
      this.request<TransactionCollectionsPartialUpdateData, any>({
        path: `/3/admin/transaction-collections/${identifier}/`,
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
     * @tags transaction-collections
     * @name TransactionCollectionsTransactionsList
     * @summary List transaction-collection transactions
     * @request GET:/3/admin/transaction-collections/{identifier}/transactions/
     * @secure
     */
    transactionCollectionsTransactionsList: (
      { identifier, ...query }: TransactionCollectionsTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<TransactionCollectionsTransactionsListData, any>({
        path: `/3/admin/transaction-collections/${identifier}/transactions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transaction-collections
     * @name TransactionCollectionsTransactionsCreate
     * @summary Create transaction-collection transaction
     * @request POST:/3/admin/transaction-collections/{identifier}/transactions/
     * @secure
     */
    transactionCollectionsTransactionsCreate: (
      identifier: string,
      data: AdminAppendTransactionCollectionMultiTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionCollectionsTransactionsCreateData, any>({
        path: `/3/admin/transaction-collections/${identifier}/transactions/`,
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
     * @tags transaction-transitions
     * @name TransactionTransitionsList
     * @summary List transaction transitions
     * @request GET:/3/admin/transaction-transitions/
     * @secure
     */
    transactionTransitionsList: (
      query: TransactionTransitionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<TransactionTransitionsListData, any>({
        path: `/3/admin/transaction-transitions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transaction-transitions
     * @name TransactionTransitionsRetrieve
     * @summary Retrieve transaction transition
     * @request GET:/3/admin/transaction-transitions/{identifier}/
     * @secure
     */
    transactionTransitionsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<TransactionTransitionsRetrieveData, any>({
        path: `/3/admin/transaction-transitions/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transaction-transitions
     * @name TransactionTransitionsUpdate
     * @summary Update transaction transition
     * @request PUT:/3/admin/transaction-transitions/{identifier}/
     * @secure
     */
    transactionTransitionsUpdate: (
      identifier: string,
      data: AdminUpdateTransactionTransition,
      params: RequestParams = {},
    ) =>
      this.request<TransactionTransitionsUpdateData, any>({
        path: `/3/admin/transaction-transitions/${identifier}/`,
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
     * @tags transaction-transitions
     * @name TransactionTransitionsPartialUpdate
     * @summary Partially update transaction transition
     * @request PATCH:/3/admin/transaction-transitions/{identifier}/
     * @secure
     */
    transactionTransitionsPartialUpdate: (
      identifier: string,
      data: PatchedAdminUpdateTransactionTransition,
      params: RequestParams = {},
    ) =>
      this.request<TransactionTransitionsPartialUpdateData, any>({
        path: `/3/admin/transaction-transitions/${identifier}/`,
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
     * @tags transactions
     * @name TransactionsList
     * @summary List transactions
     * @request GET:/3/admin/transactions/
     * @secure
     */
    transactionsList: (
      query: TransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsListData, any>({
        path: `/3/admin/transactions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transactions
     * @name TransactionsCreate
     * @summary Create transaction
     * @request POST:/3/admin/transactions/
     * @secure
     */
    transactionsCreate: (
      data: AdminCreateMultiTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsCreateData, any>({
        path: `/3/admin/transactions/`,
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
     * @tags transactions
     * @name TransactionsRetrieve
     * @summary Retrieve transaction
     * @request GET:/3/admin/transactions/{tx_code}/
     * @secure
     */
    transactionsRetrieve: (txCode: string, params: RequestParams = {}) =>
      this.request<TransactionsRetrieveData, any>({
        path: `/3/admin/transactions/${txCode}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transactions
     * @name TransactionsUpdate
     * @summary Update transaction
     * @request PUT:/3/admin/transactions/{tx_code}/
     * @secure
     */
    transactionsUpdate: (
      txCode: string,
      data: AdminUpdateExtendedTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsUpdateData, any>({
        path: `/3/admin/transactions/${txCode}/`,
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
     * @tags transactions
     * @name TransactionsPartialUpdate
     * @summary Partially update transaction
     * @request PATCH:/3/admin/transactions/{tx_code}/
     * @secure
     */
    transactionsPartialUpdate: (
      txCode: string,
      data: PatchedAdminUpdateExtendedTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsPartialUpdateData, any>({
        path: `/3/admin/transactions/${txCode}/`,
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
     * @tags transactions
     * @name TransactionsMessagesList
     * @summary List tansaction messages
     * @request GET:/3/admin/transactions/{tx_code}/messages/
     * @secure
     */
    transactionsMessagesList: (
      { txCode, ...query }: TransactionsMessagesListParams,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsMessagesListData, any>({
        path: `/3/admin/transactions/${txCode}/messages/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transactions
     * @name TransactionsMessagesCreate
     * @summary Create transaction message
     * @request POST:/3/admin/transactions/{tx_code}/messages/
     * @secure
     */
    transactionsMessagesCreate: (
      txCode: string,
      data: AdminCreateTransactionMessage,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsMessagesCreateData, any>({
        path: `/3/admin/transactions/${txCode}/messages/`,
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
     * @tags transactions
     * @name TransactionsMessagesRetrieve
     * @summary Retrieve transaction message
     * @request GET:/3/admin/transactions/{tx_code}/messages/{id}/
     * @secure
     */
    transactionsMessagesRetrieve: (
      id: string,
      txCode: string,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsMessagesRetrieveData, any>({
        path: `/3/admin/transactions/${txCode}/messages/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transactions
     * @name TransactionsCreditCreate
     * @summary Create transaction credit
     * @request POST:/3/admin/transactions/credit/
     * @secure
     */
    transactionsCreditCreate: (
      data: AdminCreateCreditTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsCreditCreateData, any>({
        path: `/3/admin/transactions/credit/`,
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
     * @tags transactions
     * @name TransactionsDebitCreate
     * @summary Create transaction debit
     * @request POST:/3/admin/transactions/debit/
     * @secure
     */
    transactionsDebitCreate: (
      data: AdminCreateDebitTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsDebitCreateData, any>({
        path: `/3/admin/transactions/debit/`,
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
     * @tags transactions
     * @name TransactionsTotalsRetrieve
     * @summary List transaction totals
     * @request GET:/3/admin/transactions/totals/
     * @secure
     */
    transactionsTotalsRetrieve: (params: RequestParams = {}) =>
      this.request<TransactionsTotalsRetrieveData, any>({
        path: `/3/admin/transactions/totals/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transactions
     * @name TransactionsTransferCreate
     * @summary Create transaction debit
     * @request POST:/3/admin/transactions/transfer/
     * @secure
     */
    transactionsTransferCreate: (
      data: AdminCreateTransferTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsTransferCreateData, any>({
        path: `/3/admin/transactions/transfer/`,
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
     * @tags users
     * @name UsersList
     * @summary List users
     * @request GET:/3/admin/users/
     * @secure
     */
    usersList: (query: UsersListParams, params: RequestParams = {}) =>
      this.request<UsersListData, any>({
        path: `/3/admin/users/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersCreate
     * @summary Create user
     * @request POST:/3/admin/users/
     * @secure
     */
    usersCreate: (data: AdminCreateUserInfo, params: RequestParams = {}) =>
      this.request<UsersCreateData, any>({
        path: `/3/admin/users/`,
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
     * @tags users
     * @name UsersRetrieve
     * @summary Retrieve user
     * @request GET:/3/admin/users/{identifier}/
     * @secure
     */
    usersRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UsersRetrieveData, any>({
        path: `/3/admin/users/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersUpdate
     * @summary Update user
     * @request PUT:/3/admin/users/{identifier}/
     * @secure
     */
    usersUpdate: (
      identifier: string,
      data: AdminUpdateUserInfo,
      params: RequestParams = {},
    ) =>
      this.request<UsersUpdateData, any>({
        path: `/3/admin/users/${identifier}/`,
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
     * @tags users
     * @name UsersPartialUpdate
     * @summary Patially update user
     * @request PATCH:/3/admin/users/{identifier}/
     * @secure
     */
    usersPartialUpdate: (
      identifier: string,
      data: PatchedAdminUpdateUserInfo,
      params: RequestParams = {},
    ) =>
      this.request<UsersPartialUpdateData, any>({
        path: `/3/admin/users/${identifier}/`,
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
     * @tags users
     * @name UsersGroupsList
     * @summary List user groups
     * @request GET:/3/admin/users/{identifier}/groups/
     * @secure
     */
    usersGroupsList: (
      { identifier, ...query }: UsersGroupsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersGroupsListData, any>({
        path: `/3/admin/users/${identifier}/groups/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersGroupsCreate
     * @summary Create account definitions
     * @request POST:/3/admin/users/{identifier}/groups/
     * @secure
     */
    usersGroupsCreate: (
      identifier: string,
      data: AdminCreateUserGroup,
      params: RequestParams = {},
    ) =>
      this.request<UsersGroupsCreateData, any>({
        path: `/3/admin/users/${identifier}/groups/`,
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
     * @tags users
     * @name UsersGroupsRetrieve
     * @summary Retrieve user group
     * @request GET:/3/admin/users/{identifier}/groups/{group_name}/
     * @secure
     */
    usersGroupsRetrieve: (
      groupName: string,
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersGroupsRetrieveData, any>({
        path: `/3/admin/users/${identifier}/groups/${groupName}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersGroupsDestroy
     * @summary Delete user group
     * @request DELETE:/3/admin/users/{identifier}/groups/{group_name}/
     * @secure
     */
    usersGroupsDestroy: (
      groupName: string,
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersGroupsDestroyData, any>({
        path: `/3/admin/users/${identifier}/groups/${groupName}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersLegalTermsList
     * @summary List user legal-terms
     * @request GET:/3/admin/users/{identifier}/legal-terms/
     * @secure
     */
    usersLegalTermsList: (
      { identifier, ...query }: UsersLegalTermsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersLegalTermsListData, any>({
        path: `/3/admin/users/${identifier}/legal-terms/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersLegalTermsRetrieve
     * @summary Retrieve user legal-term
     * @request GET:/3/admin/users/{identifier}/legal-terms/{term_id}/
     * @secure
     */
    usersLegalTermsRetrieve: (
      identifier: string,
      termId: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersLegalTermsRetrieveData, any>({
        path: `/3/admin/users/${identifier}/legal-terms/${termId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersLegalTermsVersionsList
     * @summary List user legal-term versions
     * @request GET:/3/admin/users/{identifier}/legal-terms/{term_id}/versions/
     * @secure
     */
    usersLegalTermsVersionsList: (
      { identifier, termId, ...query }: UsersLegalTermsVersionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersLegalTermsVersionsListData, any>({
        path: `/3/admin/users/${identifier}/legal-terms/${termId}/versions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersLegalTermsVersionsRetrieve
     * @summary Retrieve legal-term version
     * @request GET:/3/admin/users/{identifier}/legal-terms/{term_id}/versions/{version_id}/
     * @secure
     */
    usersLegalTermsVersionsRetrieve: (
      identifier: string,
      termId: string,
      versionId: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersLegalTermsVersionsRetrieveData, any>({
        path: `/3/admin/users/${identifier}/legal-terms/${termId}/versions/${versionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersMessagesList
     * @summary List user messages
     * @request GET:/3/admin/users/{identifier}/messages/
     * @secure
     */
    usersMessagesList: (
      { identifier, ...query }: UsersMessagesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersMessagesListData, any>({
        path: `/3/admin/users/${identifier}/messages/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersMessagesCreate
     * @summary Create user message
     * @request POST:/3/admin/users/{identifier}/messages/
     * @secure
     */
    usersMessagesCreate: (
      identifier: string,
      data: AdminCreateUserMessage,
      params: RequestParams = {},
    ) =>
      this.request<UsersMessagesCreateData, any>({
        path: `/3/admin/users/${identifier}/messages/`,
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
     * @tags users
     * @name UsersMessagesRetrieve
     * @summary Retrieve user message
     * @request GET:/3/admin/users/{identifier}/messages/{id}/
     * @secure
     */
    usersMessagesRetrieve: (
      id: string,
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersMessagesRetrieveData, any>({
        path: `/3/admin/users/${identifier}/messages/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersPermissionsList
     * @summary List user permissions
     * @request GET:/3/admin/users/{identifier}/permissions/
     * @secure
     */
    usersPermissionsList: (
      { identifier, ...query }: UsersPermissionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsListData, any>({
        path: `/3/admin/users/${identifier}/permissions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersPermissionsCreate
     * @summary Create user permission
     * @request POST:/3/admin/users/{identifier}/permissions/
     * @secure
     */
    usersPermissionsCreate: (
      identifier: string,
      data: AdminCreateMultiUserPermission,
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsCreateData, any>({
        path: `/3/admin/users/${identifier}/permissions/`,
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
     * @tags users
     * @name UsersPermissionsRetrieve
     * @summary Retrieve user permission
     * @request GET:/3/admin/users/{identifier}/permissions/{permission_id}/
     * @secure
     */
    usersPermissionsRetrieve: (
      identifier: string,
      permissionId: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsRetrieveData, any>({
        path: `/3/admin/users/${identifier}/permissions/${permissionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersPermissionsUpdate
     * @summary Update user permission
     * @request PUT:/3/admin/users/{identifier}/permissions/{permission_id}/
     * @secure
     */
    usersPermissionsUpdate: (
      identifier: string,
      permissionId: string,
      data: AdminUserPermission,
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsUpdateData, any>({
        path: `/3/admin/users/${identifier}/permissions/${permissionId}/`,
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
     * @tags users
     * @name UsersPermissionsPartialUpdate
     * @summary Partially update user permission
     * @request PATCH:/3/admin/users/{identifier}/permissions/{permission_id}/
     * @secure
     */
    usersPermissionsPartialUpdate: (
      identifier: string,
      permissionId: string,
      data: PatchedAdminUserPermission,
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsPartialUpdateData, any>({
        path: `/3/admin/users/${identifier}/permissions/${permissionId}/`,
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
     * @tags users
     * @name UsersPermissionsDestroy
     * @summary Delete user permission
     * @request DELETE:/3/admin/users/{identifier}/permissions/{permission_id}/
     * @secure
     */
    usersPermissionsDestroy: (
      identifier: string,
      permissionId: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsDestroyData, any>({
        path: `/3/admin/users/${identifier}/permissions/${permissionId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersSettingsRetrieve
     * @summary Retrieve user settings
     * @request GET:/3/admin/users/{identifier}/settings/
     * @secure
     */
    usersSettingsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UsersSettingsRetrieveData, any>({
        path: `/3/admin/users/${identifier}/settings/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersSettingsUpdate
     * @summary Update user settings
     * @request PUT:/3/admin/users/{identifier}/settings/
     * @secure
     */
    usersSettingsUpdate: (
      identifier: string,
      data: AdminUpdateUserSettings,
      params: RequestParams = {},
    ) =>
      this.request<UsersSettingsUpdateData, any>({
        path: `/3/admin/users/${identifier}/settings/`,
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
     * @tags users
     * @name UsersSettingsPartialUpdate
     * @summary Partially update user settings
     * @request PATCH:/3/admin/users/{identifier}/settings/
     * @secure
     */
    usersSettingsPartialUpdate: (
      identifier: string,
      data: PatchedAdminUpdateUserSettings,
      params: RequestParams = {},
    ) =>
      this.request<UsersSettingsPartialUpdateData, any>({
        path: `/3/admin/users/${identifier}/settings/`,
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
     * @tags users
     * @name UsersAddressesList
     * @summary List users addresses
     * @request GET:/3/admin/users/addresses/
     * @secure
     */
    usersAddressesList: (
      query: UsersAddressesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersAddressesListData, any>({
        path: `/3/admin/users/addresses/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersAddressesCreate
     * @summary Create user address
     * @request POST:/3/admin/users/addresses/
     * @secure
     */
    usersAddressesCreate: (
      data: AdminCreateUserAddress,
      params: RequestParams = {},
    ) =>
      this.request<UsersAddressesCreateData, any>({
        path: `/3/admin/users/addresses/`,
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
     * @tags users
     * @name UsersAddressesRetrieve
     * @summary Retrieve user address
     * @request GET:/3/admin/users/addresses/{id}/
     * @secure
     */
    usersAddressesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UsersAddressesRetrieveData, any>({
        path: `/3/admin/users/addresses/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersAddressesUpdate
     * @summary Update user address
     * @request PUT:/3/admin/users/addresses/{id}/
     * @secure
     */
    usersAddressesUpdate: (
      id: string,
      data: AdminUserAddress,
      params: RequestParams = {},
    ) =>
      this.request<UsersAddressesUpdateData, any>({
        path: `/3/admin/users/addresses/${id}/`,
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
     * @tags users
     * @name UsersAddressesPartialUpdate
     * @summary Partially update user address
     * @request PATCH:/3/admin/users/addresses/{id}/
     * @secure
     */
    usersAddressesPartialUpdate: (
      id: string,
      data: PatchedAdminUserAddress,
      params: RequestParams = {},
    ) =>
      this.request<UsersAddressesPartialUpdateData, any>({
        path: `/3/admin/users/addresses/${id}/`,
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
     * @tags users
     * @name UsersAddressesDestroy
     * @summary Delete user address
     * @request DELETE:/3/admin/users/addresses/{id}/
     * @secure
     */
    usersAddressesDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UsersAddressesDestroyData, any>({
        path: `/3/admin/users/addresses/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersBankAccountsList
     * @summary List users bank-accounts
     * @request GET:/3/admin/users/bank-accounts/
     * @secure
     */
    usersBankAccountsList: (
      query: UsersBankAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsListData, any>({
        path: `/3/admin/users/bank-accounts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersBankAccountsCreate
     * @summary Create user bank-account
     * @request POST:/3/admin/users/bank-accounts/
     * @secure
     */
    usersBankAccountsCreate: (
      data: AdminCreateUserBankAccount,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsCreateData, any>({
        path: `/3/admin/users/bank-accounts/`,
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
     * @tags users
     * @name UsersBankAccountsRetrieve
     * @summary Retrieve users bank-account
     * @request GET:/3/admin/users/bank-accounts/{id}/
     * @secure
     */
    usersBankAccountsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UsersBankAccountsRetrieveData, any>({
        path: `/3/admin/users/bank-accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersBankAccountsUpdate
     * @summary Update user bank-account
     * @request PUT:/3/admin/users/bank-accounts/{id}/
     * @secure
     */
    usersBankAccountsUpdate: (
      id: string,
      data: AdminUserBankAccount,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsUpdateData, any>({
        path: `/3/admin/users/bank-accounts/${id}/`,
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
     * @tags users
     * @name UsersBankAccountsPartialUpdate
     * @summary Partially update user bank-account
     * @request PATCH:/3/admin/users/bank-accounts/{id}/
     * @secure
     */
    usersBankAccountsPartialUpdate: (
      id: string,
      data: PatchedAdminUserBankAccount,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsPartialUpdateData, any>({
        path: `/3/admin/users/bank-accounts/${id}/`,
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
     * @tags users
     * @name UsersBankAccountsDestroy
     * @summary Delete user bank-account
     * @request DELETE:/3/admin/users/bank-accounts/{id}/
     * @secure
     */
    usersBankAccountsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UsersBankAccountsDestroyData, any>({
        path: `/3/admin/users/bank-accounts/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersBankAccountsAccountCurrenciesList
     * @summary List users bank-accounts account currencies
     * @request GET:/3/admin/users/bank-accounts/{id}/account-currencies/
     * @secure
     */
    usersBankAccountsAccountCurrenciesList: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsAccountCurrenciesListData, any>({
        path: `/3/admin/users/bank-accounts/${id}/account-currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersBankAccountsAccountCurrenciesCreate
     * @summary Create users bank-accounts account currency
     * @request POST:/3/admin/users/bank-accounts/{id}/account-currencies/
     * @secure
     */
    usersBankAccountsAccountCurrenciesCreate: (
      id: string,
      data: AdminCreateUserBankAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsAccountCurrenciesCreateData, any>({
        path: `/3/admin/users/bank-accounts/${id}/account-currencies/`,
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
     * @tags users
     * @name UsersBankAccountsAccountCurrenciesRetrieve
     * @summary Retrieve users bank-account account currency
     * @request GET:/3/admin/users/bank-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    usersBankAccountsAccountCurrenciesRetrieve: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsAccountCurrenciesRetrieveData, any>({
        path: `/3/admin/users/bank-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersBankAccountsAccountCurrenciesDestroy
     * @summary Delete users bank-account account currency
     * @request DELETE:/3/admin/users/bank-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    usersBankAccountsAccountCurrenciesDestroy: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsAccountCurrenciesDestroyData, any>({
        path: `/3/admin/users/bank-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersBankAccountsCurrenciesList
     * @summary List user bank-account currencies
     * @request GET:/3/admin/users/bank-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    usersBankAccountsCurrenciesList: (id: string, params: RequestParams = {}) =>
      this.request<UsersBankAccountsCurrenciesListData, any>({
        path: `/3/admin/users/bank-accounts/${id}/currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersBankAccountsCurrenciesCreate
     * @summary Create user bank-account currency
     * @request POST:/3/admin/users/bank-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    usersBankAccountsCurrenciesCreate: (
      id: string,
      data: AdminCreateUserBankAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsCurrenciesCreateData, any>({
        path: `/3/admin/users/bank-accounts/${id}/currencies/`,
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
     * @tags users
     * @name UsersBankAccountsCurrenciesRetrieve
     * @summary Retrieve user bank-account currency
     * @request GET:/3/admin/users/bank-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    usersBankAccountsCurrenciesRetrieve: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsCurrenciesRetrieveData, any>({
        path: `/3/admin/users/bank-accounts/${id}/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersBankAccountsCurrenciesDestroy
     * @summary Delete user bank-account currency
     * @request DELETE:/3/admin/users/bank-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    usersBankAccountsCurrenciesDestroy: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersBankAccountsCurrenciesDestroyData, any>({
        path: `/3/admin/users/bank-accounts/${id}/currencies/${code}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersCryptoAccountsList
     * @summary List users crypto-accounts
     * @request GET:/3/admin/users/crypto-accounts/
     * @secure
     */
    usersCryptoAccountsList: (
      query: UsersCryptoAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsListData, any>({
        path: `/3/admin/users/crypto-accounts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersCryptoAccountsCreate
     * @summary Create user crypto-account
     * @request POST:/3/admin/users/crypto-accounts/
     * @secure
     */
    usersCryptoAccountsCreate: (
      data: AdminCreateCryptoAccount,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsCreateData, any>({
        path: `/3/admin/users/crypto-accounts/`,
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
     * @tags users
     * @name UsersCryptoAccountsRetrieve
     * @summary Retrieve users crypto-account
     * @request GET:/3/admin/users/crypto-accounts/{id}/
     * @secure
     */
    usersCryptoAccountsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UsersCryptoAccountsRetrieveData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersCryptoAccountsUpdate
     * @summary Update user crypto-account
     * @request PUT:/3/admin/users/crypto-accounts/{id}/
     * @secure
     */
    usersCryptoAccountsUpdate: (
      id: string,
      data: AdminCryptoAccount,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsUpdateData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/`,
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
     * @tags users
     * @name UsersCryptoAccountsPartialUpdate
     * @summary Partially update user crypto-account
     * @request PATCH:/3/admin/users/crypto-accounts/{id}/
     * @secure
     */
    usersCryptoAccountsPartialUpdate: (
      id: string,
      data: PatchedAdminCryptoAccount,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsPartialUpdateData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/`,
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
     * @tags users
     * @name UsersCryptoAccountsDestroy
     * @summary Delete user crypto-account
     * @request DELETE:/3/admin/users/crypto-accounts/{id}/
     * @secure
     */
    usersCryptoAccountsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UsersCryptoAccountsDestroyData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersCryptoAccountsAccountCurrenciesList
     * @summary List users crypto-accounts account currencies
     * @request GET:/3/admin/users/crypto-accounts/{id}/account-currencies/
     * @secure
     */
    usersCryptoAccountsAccountCurrenciesList: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsAccountCurrenciesListData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/account-currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersCryptoAccountsAccountCurrenciesCreate
     * @summary Create users crypto-accounts account currency
     * @request POST:/3/admin/users/crypto-accounts/{id}/account-currencies/
     * @secure
     */
    usersCryptoAccountsAccountCurrenciesCreate: (
      id: string,
      data: AdminCreateCryptoAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsAccountCurrenciesCreateData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/account-currencies/`,
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
     * @tags users
     * @name UsersCryptoAccountsAccountCurrenciesRetrieve
     * @summary Retrieve users crypto-account account currency
     * @request GET:/3/admin/users/crypto-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    usersCryptoAccountsAccountCurrenciesRetrieve: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsAccountCurrenciesRetrieveData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersCryptoAccountsAccountCurrenciesDestroy
     * @summary Delete users crypto-account account currency
     * @request DELETE:/3/admin/users/crypto-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    usersCryptoAccountsAccountCurrenciesDestroy: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsAccountCurrenciesDestroyData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersCryptoAccountsCurrenciesList
     * @summary List user crypto-account currencies
     * @request GET:/3/admin/users/crypto-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    usersCryptoAccountsCurrenciesList: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsCurrenciesListData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersCryptoAccountsCurrenciesCreate
     * @summary Create user crypto-account currency
     * @request POST:/3/admin/users/crypto-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    usersCryptoAccountsCurrenciesCreate: (
      id: string,
      data: AdminCreateCryptoAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsCurrenciesCreateData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/currencies/`,
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
     * @tags users
     * @name UsersCryptoAccountsCurrenciesRetrieve
     * @summary Retrieve user crypto-account currency
     * @request GET:/3/admin/users/crypto-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    usersCryptoAccountsCurrenciesRetrieve: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsCurrenciesRetrieveData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersCryptoAccountsCurrenciesDestroy
     * @summary Delete user crypto-account currency
     * @request DELETE:/3/admin/users/crypto-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    usersCryptoAccountsCurrenciesDestroy: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersCryptoAccountsCurrenciesDestroyData, any>({
        path: `/3/admin/users/crypto-accounts/${id}/currencies/${code}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersDevicesList
     * @summary List users devices
     * @request GET:/3/admin/users/devices/
     * @secure
     */
    usersDevicesList: (
      query: UsersDevicesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersDevicesListData, any>({
        path: `/3/admin/users/devices/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersDevicesCreate
     * @summary Create user device
     * @request POST:/3/admin/users/devices/
     * @secure
     */
    usersDevicesCreate: (data: AdminCreateDevice, params: RequestParams = {}) =>
      this.request<UsersDevicesCreateData, any>({
        path: `/3/admin/users/devices/`,
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
     * @tags users
     * @name UsersDevicesAppsRetrieve
     * @summary Retrieve users device app
     * @request GET:/3/admin/users/devices/{device_id}/apps/{app_id}/
     * @secure
     */
    usersDevicesAppsRetrieve: (
      appId: string,
      deviceId: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersDevicesAppsRetrieveData, any>({
        path: `/3/admin/users/devices/${deviceId}/apps/${appId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersDevicesAppsUpdate
     * @summary Update user device app
     * @request PUT:/3/admin/users/devices/{device_id}/apps/{app_id}/
     * @secure
     */
    usersDevicesAppsUpdate: (
      appId: string,
      deviceId: string,
      data: AdminDeviceApp,
      params: RequestParams = {},
    ) =>
      this.request<UsersDevicesAppsUpdateData, any>({
        path: `/3/admin/users/devices/${deviceId}/apps/${appId}/`,
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
     * @tags users
     * @name UsersDevicesAppsPartialUpdate
     * @summary Partially update user device app
     * @request PATCH:/3/admin/users/devices/{device_id}/apps/{app_id}/
     * @secure
     */
    usersDevicesAppsPartialUpdate: (
      appId: string,
      deviceId: string,
      data: PatchedAdminDeviceApp,
      params: RequestParams = {},
    ) =>
      this.request<UsersDevicesAppsPartialUpdateData, any>({
        path: `/3/admin/users/devices/${deviceId}/apps/${appId}/`,
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
     * @tags users
     * @name UsersDevicesAppsDestroy
     * @summary Delete user device
     * @request DELETE:/3/admin/users/devices/{device_id}/apps/{app_id}/
     * @secure
     */
    usersDevicesAppsDestroy: (
      appId: string,
      deviceId: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersDevicesAppsDestroyData, any>({
        path: `/3/admin/users/devices/${deviceId}/apps/${appId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersDevicesRetrieve
     * @summary Retrieve users device
     * @request GET:/3/admin/users/devices/{id}/
     * @secure
     */
    usersDevicesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UsersDevicesRetrieveData, any>({
        path: `/3/admin/users/devices/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersDevicesUpdate
     * @summary Update user device
     * @request PUT:/3/admin/users/devices/{id}/
     * @secure
     */
    usersDevicesUpdate: (
      id: string,
      data: AdminDevice,
      params: RequestParams = {},
    ) =>
      this.request<UsersDevicesUpdateData, any>({
        path: `/3/admin/users/devices/${id}/`,
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
     * @tags users
     * @name UsersDevicesPartialUpdate
     * @summary Partially update user device
     * @request PATCH:/3/admin/users/devices/{id}/
     * @secure
     */
    usersDevicesPartialUpdate: (
      id: string,
      data: PatchedAdminDevice,
      params: RequestParams = {},
    ) =>
      this.request<UsersDevicesPartialUpdateData, any>({
        path: `/3/admin/users/devices/${id}/`,
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
     * @tags users
     * @name UsersDevicesDestroy
     * @summary Delete user device
     * @request DELETE:/3/admin/users/devices/{id}/
     * @secure
     */
    usersDevicesDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UsersDevicesDestroyData, any>({
        path: `/3/admin/users/devices/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersDevicesAppsList
     * @summary List users device apps
     * @request GET:/3/admin/users/devices/{id}/apps/
     * @secure
     */
    usersDevicesAppsList: (
      { id, ...query }: UsersDevicesAppsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersDevicesAppsListData, any>({
        path: `/3/admin/users/devices/${id}/apps/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersDevicesAppsCreate
     * @summary Create users device apps
     * @request POST:/3/admin/users/devices/{id}/apps/
     * @secure
     */
    usersDevicesAppsCreate: (
      id: string,
      data: AdminCreateDeviceApp,
      params: RequestParams = {},
    ) =>
      this.request<UsersDevicesAppsCreateData, any>({
        path: `/3/admin/users/devices/${id}/apps/`,
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
     * @tags users
     * @name UsersDocumentsList
     * @summary List users documents
     * @request GET:/3/admin/users/documents/
     * @secure
     */
    usersDocumentsList: (
      query: UsersDocumentsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersDocumentsListData, any>({
        path: `/3/admin/users/documents/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersDocumentsCreate
     * @summary Create users document
     * @request POST:/3/admin/users/documents/
     * @secure
     */
    usersDocumentsCreate: (
      data: AdminCreateUserDocument,
      params: RequestParams = {},
    ) =>
      this.request<UsersDocumentsCreateData, any>({
        path: `/3/admin/users/documents/`,
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
     * @tags users
     * @name UsersDocumentsRetrieve
     * @summary Retrieve users document
     * @request GET:/3/admin/users/documents/{id}/
     * @secure
     */
    usersDocumentsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UsersDocumentsRetrieveData, any>({
        path: `/3/admin/users/documents/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersDocumentsUpdate
     * @summary Update user document
     * @request PUT:/3/admin/users/documents/{id}/
     * @secure
     */
    usersDocumentsUpdate: (
      id: string,
      data: AdminUpdateUserDocument,
      params: RequestParams = {},
    ) =>
      this.request<UsersDocumentsUpdateData, any>({
        path: `/3/admin/users/documents/${id}/`,
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
     * @tags users
     * @name UsersDocumentsPartialUpdate
     * @summary Partially update user document
     * @request PATCH:/3/admin/users/documents/{id}/
     * @secure
     */
    usersDocumentsPartialUpdate: (
      id: string,
      data: PatchedAdminUpdateUserDocument,
      params: RequestParams = {},
    ) =>
      this.request<UsersDocumentsPartialUpdateData, any>({
        path: `/3/admin/users/documents/${id}/`,
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
     * @tags users
     * @name UsersDocumentsDestroy
     * @summary Delete user document
     * @request DELETE:/3/admin/users/documents/{id}/
     * @secure
     */
    usersDocumentsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UsersDocumentsDestroyData, any>({
        path: `/3/admin/users/documents/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersEmailsList
     * @summary List users emails
     * @request GET:/3/admin/users/emails/
     * @secure
     */
    usersEmailsList: (
      query: UsersEmailsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersEmailsListData, any>({
        path: `/3/admin/users/emails/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersEmailsCreate
     * @summary Create users email
     * @request POST:/3/admin/users/emails/
     * @secure
     */
    usersEmailsCreate: (data: AdminCreateEmail, params: RequestParams = {}) =>
      this.request<UsersEmailsCreateData, any>({
        path: `/3/admin/users/emails/`,
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
     * @tags users
     * @name UsersEmailsRetrieve
     * @summary Retrieve users email
     * @request GET:/3/admin/users/emails/{id}/
     * @secure
     */
    usersEmailsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UsersEmailsRetrieveData, any>({
        path: `/3/admin/users/emails/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersEmailsUpdate
     * @summary Update users email
     * @request PUT:/3/admin/users/emails/{id}/
     * @secure
     */
    usersEmailsUpdate: (
      id: string,
      data: AdminEmail,
      params: RequestParams = {},
    ) =>
      this.request<UsersEmailsUpdateData, any>({
        path: `/3/admin/users/emails/${id}/`,
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
     * @tags users
     * @name UsersEmailsPartialUpdate
     * @summary Partially update users email
     * @request PATCH:/3/admin/users/emails/{id}/
     * @secure
     */
    usersEmailsPartialUpdate: (
      id: string,
      data: PatchedAdminEmail,
      params: RequestParams = {},
    ) =>
      this.request<UsersEmailsPartialUpdateData, any>({
        path: `/3/admin/users/emails/${id}/`,
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
     * @tags users
     * @name UsersEmailsDestroy
     * @summary Delete users email
     * @request DELETE:/3/admin/users/emails/{id}/
     * @secure
     */
    usersEmailsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UsersEmailsDestroyData, any>({
        path: `/3/admin/users/emails/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersMfaAuthenticatorsList
     * @summary List mfa authenticators
     * @request GET:/3/admin/users/mfa/authenticators/
     * @secure
     */
    usersMfaAuthenticatorsList: (
      query: UsersMfaAuthenticatorsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersMfaAuthenticatorsListData, any>({
        path: `/3/admin/users/mfa/authenticators/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersMfaAuthenticatorsRetrieve
     * @summary Retrieve mfa authenticator
     * @request GET:/3/admin/users/mfa/authenticators/{identifier}/
     * @secure
     */
    usersMfaAuthenticatorsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersMfaAuthenticatorsRetrieveData, any>({
        path: `/3/admin/users/mfa/authenticators/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersMfaAuthenticatorsDestroy
     * @summary Delete mfa authenticator
     * @request DELETE:/3/admin/users/mfa/authenticators/{identifier}/
     * @secure
     */
    usersMfaAuthenticatorsDestroy: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersMfaAuthenticatorsDestroyData, any>({
        path: `/3/admin/users/mfa/authenticators/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersMobilesList
     * @summary List users mobiles
     * @request GET:/3/admin/users/mobiles/
     * @secure
     */
    usersMobilesList: (
      query: UsersMobilesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersMobilesListData, any>({
        path: `/3/admin/users/mobiles/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersMobilesCreate
     * @summary Create users mobile
     * @request POST:/3/admin/users/mobiles/
     * @secure
     */
    usersMobilesCreate: (data: AdminCreateMobile, params: RequestParams = {}) =>
      this.request<UsersMobilesCreateData, any>({
        path: `/3/admin/users/mobiles/`,
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
     * @tags users
     * @name UsersMobilesRetrieve
     * @summary Retrieve users mobile
     * @request GET:/3/admin/users/mobiles/{id}/
     * @secure
     */
    usersMobilesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UsersMobilesRetrieveData, any>({
        path: `/3/admin/users/mobiles/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersMobilesUpdate
     * @summary Update users mobile
     * @request PUT:/3/admin/users/mobiles/{id}/
     * @secure
     */
    usersMobilesUpdate: (
      id: string,
      data: AdminMobile,
      params: RequestParams = {},
    ) =>
      this.request<UsersMobilesUpdateData, any>({
        path: `/3/admin/users/mobiles/${id}/`,
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
     * @tags users
     * @name UsersMobilesPartialUpdate
     * @summary Partially update users mobile
     * @request PATCH:/3/admin/users/mobiles/{id}/
     * @secure
     */
    usersMobilesPartialUpdate: (
      id: string,
      data: PatchedAdminMobile,
      params: RequestParams = {},
    ) =>
      this.request<UsersMobilesPartialUpdateData, any>({
        path: `/3/admin/users/mobiles/${id}/`,
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
     * @tags users
     * @name UsersMobilesDestroy
     * @summary Delete users mobile
     * @request DELETE:/3/admin/users/mobiles/{id}/
     * @secure
     */
    usersMobilesDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UsersMobilesDestroyData, any>({
        path: `/3/admin/users/mobiles/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersOverviewRetrieve
     * @summary Retrieve users overview
     * @request GET:/3/admin/users/overview/
     * @secure
     */
    usersOverviewRetrieve: (params: RequestParams = {}) =>
      this.request<UsersOverviewRetrieveData, any>({
        path: `/3/admin/users/overview/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersTokensList
     * @summary List users tokens
     * @request GET:/3/admin/users/tokens/
     * @secure
     */
    usersTokensList: (
      query: UsersTokensListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersTokensListData, any>({
        path: `/3/admin/users/tokens/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersTokensCreate
     * @summary Create users token
     * @request POST:/3/admin/users/tokens/
     * @secure
     */
    usersTokensCreate: (
      data: AdminCreateAuthToken,
      params: RequestParams = {},
    ) =>
      this.request<UsersTokensCreateData, any>({
        path: `/3/admin/users/tokens/`,
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
     * @tags users
     * @name AdminUsersTokensListDestroy
     * @summary Delete tokens
     * @request DELETE:/3/admin/users/tokens/
     * @secure
     */
    adminUsersTokensListDestroy: (params: RequestParams = {}) =>
      this.request<AdminUsersTokensListDestroyData, any>({
        path: `/3/admin/users/tokens/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersTokensRetrieve
     * @summary Retrieve users token
     * @request GET:/3/admin/users/tokens/{token_key}/
     * @secure
     */
    usersTokensRetrieve: (tokenKey: string, params: RequestParams = {}) =>
      this.request<UsersTokensRetrieveData, any>({
        path: `/3/admin/users/tokens/${tokenKey}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersTokensUpdate
     * @summary Update users token
     * @request PUT:/3/admin/users/tokens/{token_key}/
     * @secure
     */
    usersTokensUpdate: (
      tokenKey: string,
      data: AdminUpdateAuthToken,
      params: RequestParams = {},
    ) =>
      this.request<UsersTokensUpdateData, any>({
        path: `/3/admin/users/tokens/${tokenKey}/`,
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
     * @tags users
     * @name UsersTokensPartialUpdate
     * @summary Patially update users token
     * @request PATCH:/3/admin/users/tokens/{token_key}/
     * @secure
     */
    usersTokensPartialUpdate: (
      tokenKey: string,
      data: PatchedAdminUpdateAuthToken,
      params: RequestParams = {},
    ) =>
      this.request<UsersTokensPartialUpdateData, any>({
        path: `/3/admin/users/tokens/${tokenKey}/`,
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
     * @tags users
     * @name UsersTokensDestroy
     * @summary Delete users token
     * @request DELETE:/3/admin/users/tokens/{token_key}/
     * @secure
     */
    usersTokensDestroy: (tokenKey: string, params: RequestParams = {}) =>
      this.request<UsersTokensDestroyData, any>({
        path: `/3/admin/users/tokens/${tokenKey}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersWalletAccountsList
     * @summary List users wallet-accounts
     * @request GET:/3/admin/users/wallet-accounts/
     * @secure
     */
    usersWalletAccountsList: (
      query: UsersWalletAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsListData, any>({
        path: `/3/admin/users/wallet-accounts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersWalletAccountsCreate
     * @summary Create users wallet-accounts
     * @request POST:/3/admin/users/wallet-accounts/
     * @secure
     */
    usersWalletAccountsCreate: (
      data: AdminCreateUserWalletAccount,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsCreateData, any>({
        path: `/3/admin/users/wallet-accounts/`,
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
     * @tags users
     * @name UsersWalletAccountsRetrieve
     * @summary Retrieve users wallet-account
     * @request GET:/3/admin/users/wallet-accounts/{id}/
     * @secure
     */
    usersWalletAccountsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UsersWalletAccountsRetrieveData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersWalletAccountsUpdate
     * @summary Update users wallet-account
     * @request PUT:/3/admin/users/wallet-accounts/{id}/
     * @secure
     */
    usersWalletAccountsUpdate: (
      id: string,
      data: AdminUserWalletAccount,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsUpdateData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/`,
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
     * @tags users
     * @name UsersWalletAccountsPartialUpdate
     * @summary Partially update users wallte-account
     * @request PATCH:/3/admin/users/wallet-accounts/{id}/
     * @secure
     */
    usersWalletAccountsPartialUpdate: (
      id: string,
      data: PatchedAdminUserWalletAccount,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsPartialUpdateData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/`,
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
     * @tags users
     * @name UsersWalletAccountsDestroy
     * @summary Delete users wallet-account
     * @request DELETE:/3/admin/users/wallet-accounts/{id}/
     * @secure
     */
    usersWalletAccountsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UsersWalletAccountsDestroyData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersWalletAccountsAccountCurrenciesList
     * @summary List users wallet-accounts account currencies
     * @request GET:/3/admin/users/wallet-accounts/{id}/account-currencies/
     * @secure
     */
    usersWalletAccountsAccountCurrenciesList: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsAccountCurrenciesListData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/account-currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersWalletAccountsAccountCurrenciesCreate
     * @summary Create users wallet-accounts account currency
     * @request POST:/3/admin/users/wallet-accounts/{id}/account-currencies/
     * @secure
     */
    usersWalletAccountsAccountCurrenciesCreate: (
      id: string,
      data: AdminCreateUserWalletAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsAccountCurrenciesCreateData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/account-currencies/`,
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
     * @tags users
     * @name UsersWalletAccountsAccountCurrenciesRetrieve
     * @summary Retrieve users wallet-account account currency
     * @request GET:/3/admin/users/wallet-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    usersWalletAccountsAccountCurrenciesRetrieve: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsAccountCurrenciesRetrieveData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersWalletAccountsAccountCurrenciesDestroy
     * @summary Delete users wallet-account account currency
     * @request DELETE:/3/admin/users/wallet-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    usersWalletAccountsAccountCurrenciesDestroy: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsAccountCurrenciesDestroyData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersWalletAccountsCurrenciesList
     * @summary List users wallet-accounts currencies
     * @request GET:/3/admin/users/wallet-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    usersWalletAccountsCurrenciesList: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsCurrenciesListData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersWalletAccountsCurrenciesCreate
     * @summary Create users wallet-accounts currency
     * @request POST:/3/admin/users/wallet-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    usersWalletAccountsCurrenciesCreate: (
      id: string,
      data: AdminCreateUserWalletAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsCurrenciesCreateData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/currencies/`,
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
     * @tags users
     * @name UsersWalletAccountsCurrenciesRetrieve
     * @summary Retrieve users wallet-account currency
     * @request GET:/3/admin/users/wallet-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    usersWalletAccountsCurrenciesRetrieve: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsCurrenciesRetrieveData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersWalletAccountsCurrenciesDestroy
     * @summary Delete users wallet-account currency
     * @request DELETE:/3/admin/users/wallet-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    usersWalletAccountsCurrenciesDestroy: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UsersWalletAccountsCurrenciesDestroyData, any>({
        path: `/3/admin/users/wallet-accounts/${id}/currencies/${code}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags wallet-accounts
     * @name WalletAccountsList
     * @summary List company wallet-accounts
     * @request GET:/3/admin/wallet-accounts/
     * @secure
     */
    walletAccountsList: (
      query: WalletAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<WalletAccountsListData, any>({
        path: `/3/admin/wallet-accounts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags wallet-accounts
     * @name WalletAccountsCreate
     * @summary Create company wallet-account
     * @request POST:/3/admin/wallet-accounts/
     * @secure
     */
    walletAccountsCreate: (
      data: AdminCompanyWalletAccount,
      params: RequestParams = {},
    ) =>
      this.request<WalletAccountsCreateData, any>({
        path: `/3/admin/wallet-accounts/`,
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
     * @tags wallet-accounts
     * @name WalletAccountsRetrieve
     * @summary Retrieve company wallet-account
     * @request GET:/3/admin/wallet-accounts/{id}/
     * @secure
     */
    walletAccountsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<WalletAccountsRetrieveData, any>({
        path: `/3/admin/wallet-accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags wallet-accounts
     * @name WalletAccountsUpdate
     * @summary Update company wallet-account
     * @request PUT:/3/admin/wallet-accounts/{id}/
     * @secure
     */
    walletAccountsUpdate: (
      id: string,
      data: AdminCompanyWalletAccount,
      params: RequestParams = {},
    ) =>
      this.request<WalletAccountsUpdateData, any>({
        path: `/3/admin/wallet-accounts/${id}/`,
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
     * @tags wallet-accounts
     * @name WalletAccountsPartialUpdate
     * @summary Partially update company wallet-account
     * @request PATCH:/3/admin/wallet-accounts/{id}/
     * @secure
     */
    walletAccountsPartialUpdate: (
      id: string,
      data: PatchedAdminCompanyWalletAccount,
      params: RequestParams = {},
    ) =>
      this.request<WalletAccountsPartialUpdateData, any>({
        path: `/3/admin/wallet-accounts/${id}/`,
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
     * @tags wallet-accounts
     * @name WalletAccountsDestroy
     * @summary Delete company wallet-account
     * @request DELETE:/3/admin/wallet-accounts/{id}/
     * @secure
     */
    walletAccountsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<WalletAccountsDestroyData, any>({
        path: `/3/admin/wallet-accounts/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags wallet-accounts
     * @name WalletAccountsCurrenciesList
     * @summary List company wallet-account currencies
     * @request GET:/3/admin/wallet-accounts/{id}/currencies/
     * @secure
     */
    walletAccountsCurrenciesList: (
      { id, ...query }: WalletAccountsCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<WalletAccountsCurrenciesListData, any>({
        path: `/3/admin/wallet-accounts/${id}/currencies/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags wallet-accounts
     * @name WalletAccountsCurrenciesCreate
     * @summary Create company wallet-account currency
     * @request POST:/3/admin/wallet-accounts/{id}/currencies/
     * @secure
     */
    walletAccountsCurrenciesCreate: (
      id: string,
      data: AdminCreateCompanyWalletAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<WalletAccountsCurrenciesCreateData, any>({
        path: `/3/admin/wallet-accounts/${id}/currencies/`,
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
     * @tags wallet-accounts
     * @name WalletAccountsCurrenciesRetrieve
     * @summary Retrieve company wallet-account currency
     * @request GET:/3/admin/wallet-accounts/{id}/currencies/{code}/
     * @secure
     */
    walletAccountsCurrenciesRetrieve: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<WalletAccountsCurrenciesRetrieveData, any>({
        path: `/3/admin/wallet-accounts/${id}/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags wallet-accounts
     * @name WalletAccountsCurrenciesDestroy
     * @summary Delete company wallet-account currency
     * @request DELETE:/3/admin/wallet-accounts/{id}/currencies/{code}/
     * @secure
     */
    walletAccountsCurrenciesDestroy: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<WalletAccountsCurrenciesDestroyData, any>({
        path: `/3/admin/wallet-accounts/${id}/currencies/${code}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-tasks
     * @name WebhookTasksList
     * @summary List webhook tasks
     * @request GET:/3/admin/webhook-tasks/
     * @secure
     */
    webhookTasksList: (
      query: WebhookTasksListParams,
      params: RequestParams = {},
    ) =>
      this.request<WebhookTasksListData, any>({
        path: `/3/admin/webhook-tasks/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-tasks
     * @name WebhookTasksRetrieve
     * @summary Retrieve webhook task
     * @request GET:/3/admin/webhook-tasks/{webhhook_task_id}/
     * @secure
     */
    webhookTasksRetrieve: (
      webhhookTaskId: string,
      params: RequestParams = {},
    ) =>
      this.request<WebhookTasksRetrieveData, any>({
        path: `/3/admin/webhook-tasks/${webhhookTaskId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-tasks
     * @name WebhookTasksRequestsList
     * @summary List webhook task requests
     * @request GET:/3/admin/webhook-tasks/{webhhook_task_id}/requests/
     * @secure
     */
    webhookTasksRequestsList: (
      { webhhookTaskId, ...query }: WebhookTasksRequestsListParams,
      params: RequestParams = {},
    ) =>
      this.request<WebhookTasksRequestsListData, any>({
        path: `/3/admin/webhook-tasks/${webhhookTaskId}/requests/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-tasks
     * @name WebhookTasksRequestsRetrieve
     * @summary Retrieve webhook task request
     * @request GET:/3/admin/webhook-tasks/{webhhook_task_id}/requests/{webhook_request_id}/
     * @secure
     */
    webhookTasksRequestsRetrieve: (
      webhhookTaskId: string,
      webhookRequestId: string,
      params: RequestParams = {},
    ) =>
      this.request<WebhookTasksRequestsRetrieveData, any>({
        path: `/3/admin/webhook-tasks/${webhhookTaskId}/requests/${webhookRequestId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhooks
     * @name WebhooksList
     * @summary List webhooks
     * @request GET:/3/admin/webhooks/
     * @secure
     */
    webhooksList: (query: WebhooksListParams, params: RequestParams = {}) =>
      this.request<WebhooksListData, any>({
        path: `/3/admin/webhooks/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhooks
     * @name WebhooksCreate
     * @summary Create webhook
     * @request POST:/3/admin/webhooks/
     * @secure
     */
    webhooksCreate: (data: AdminWebhook, params: RequestParams = {}) =>
      this.request<WebhooksCreateData, any>({
        path: `/3/admin/webhooks/`,
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
     * @name WebhooksRetrieve
     * @summary Retrieve webhook
     * @request GET:/3/admin/webhooks/{webhhook_id}/
     * @secure
     */
    webhooksRetrieve: (webhhookId: string, params: RequestParams = {}) =>
      this.request<WebhooksRetrieveData, any>({
        path: `/3/admin/webhooks/${webhhookId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhooks
     * @name WebhooksUpdate
     * @summary Update webhook
     * @request PUT:/3/admin/webhooks/{webhhook_id}/
     * @secure
     */
    webhooksUpdate: (
      webhhookId: string,
      data: AdminWebhook,
      params: RequestParams = {},
    ) =>
      this.request<WebhooksUpdateData, any>({
        path: `/3/admin/webhooks/${webhhookId}/`,
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
     * @tags webhooks
     * @name WebhooksPartialUpdate
     * @summary Partially update webhook
     * @request PATCH:/3/admin/webhooks/{webhhook_id}/
     * @secure
     */
    webhooksPartialUpdate: (
      webhhookId: string,
      data: PatchedAdminWebhook,
      params: RequestParams = {},
    ) =>
      this.request<WebhooksPartialUpdateData, any>({
        path: `/3/admin/webhooks/${webhhookId}/`,
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
     * @tags webhooks
     * @name WebhooksDestroy
     * @summary Delete webhook
     * @request DELETE:/3/admin/webhooks/{webhhook_id}/
     * @secure
     */
    webhooksDestroy: (webhhookId: string, params: RequestParams = {}) =>
      this.request<WebhooksDestroyData, any>({
        path: `/3/admin/webhooks/${webhhookId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
