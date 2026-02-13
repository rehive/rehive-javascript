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
export interface Account {
  reference: string;
  /** @maxLength 200 */
  name?: string;
  definition: string | null;
  /** @maxLength 200 */
  label?: string | null;
  primary: boolean;
  recon: boolean;
  currencies: ReducedAccountAccountAsset[];
  metadata: Record<string, any>;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AccountAccountAsset {
  id: string;
  balance: number;
  available_balance: number;
  currency: ReducedAsset;
  limits: AccountAssetLimit[];
  fees: AdminAccountAssetFee[];
  metadata: Record<string, any>;
  active: boolean;
  settings: AccountAssetSettings;
  subtypes: TransactionSubtype[];
  created: number;
  updated: number;
}

export interface AccountAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AccountAccountAsset;
}

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

export interface AccountAssetFee {
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

export interface AccountAssetLimitResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AccountAssetLimit;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AccountDefinition {
  /** @maxLength 200 */
  name: string;
  /** @maxLength 200 */
  label?: string | null;
  recon?: boolean;
  groups: AccountDefinitionGroup[];
  updated: number;
  created: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AccountDefinitionGroup {
  group: ReducedGroup;
  default: boolean;
  primary: boolean;
  currencies: AccountDefinitionGroupAsset[];
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AccountDefinitionGroupAsset {
  currency: ReducedAsset;
  created: number;
  updated: number;
}

export interface AccountDefinitionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AccountDefinition;
}

export interface AccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: Account;
}

/** This serializer can be used if only a `status` is required in the response. */
export interface ActionResponse {
  status: string;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Asset {
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
  metadata: Record<string, any>;
  created: number;
  updated: number;
}

export interface AssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: Asset;
}

/**
 * Extended user information shown based on the default user info serializer.
 * Contain additional information about user permissions and settings.
 */
export interface Auth {
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

export interface AuthResponse {
  status: string;
  /**
   * Extended user information shown based on the default user info serializer.
   * Contain additional information about user permissions and settings.
   */
  data: Auth;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AuthToken {
  /** @maxLength 8 */
  token_key: string;
  expires: number;
  created: number;
}

export type AuthTokenList = AuthToken[];

export interface AuthTokenListResponse {
  status: string;
  data: AuthTokenList;
}

export interface AuthTokenResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: AuthToken;
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
export interface Company {
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
  logo: string | null;
  /** @format uri */
  icon: string | null;
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
  status: "pending" | "active" | "restricted" | "suspended";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CompanyBankAccount {
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
  /** * `withdraw` - Withdraw */
  action: "withdraw";
  created: number;
  updated: number;
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

export interface CompanyResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: Company;
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
export interface CompanyWalletAccount {
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
  /** * `withdraw` - Withdraw */
  action: "withdraw";
  created: number;
  updated: number;
}

export interface CreateAccountAccountAsset {
  currency: string;
  active?: boolean;
}

export interface CreateAuthToken {
  /** @maxLength 128 */
  password: string;
  /** @min 0 */
  duration?: number | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateCompany {
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
  address?: AdminCompanyAddress;
  settings?: CompanySettings;
  services?: ReducedService[];
  public?: boolean;
  metadata?: Record<string, any>;
  /**
   * * `test` - Test
   * * `production` - Production
   * @default "test"
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
  /**
   * @maxItems 1
   * @minItems 0
   */
  links?: string[];
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
export interface CreateCreditTransaction {
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
  /** @default false */
  inclusive?: boolean;
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * @default "Pending"
   */
  status?: "Initiating" | "Quoted" | "Pending";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateCryptoAccount {
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
  currencies: ReducedAsset[];
  account_currencies: ReducedAccountAsset[];
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  /**
   * * `withdraw` - Withdraw
   * @default "withdraw"
   */
  action?: "withdraw";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateCryptoAccountAccountAsset {
  account_currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateCryptoAccountAsset {
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
export interface CreateDebitTransaction {
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
  /** @default false */
  inclusive?: boolean;
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * @default "Pending"
   */
  status?: "Initiating" | "Quoted" | "Pending";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateDevice {
  id: number;
  /** @maxLength 64 */
  imei: string;
  /** @maxLength 30 */
  name?: string | null;
  apps: DeviceApp[];
  metadata?: Record<string, any>;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateDeviceApp {
  id: number;
  /** @maxLength 30 */
  name?: string | null;
  /** * `expo` - Expo */
  type: "expo";
  /** @maxLength 100 */
  token?: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateEmail {
  id: number;
  /**
   * @format email
   * @maxLength 254
   */
  email: string;
  primary?: boolean;
  verified: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateExport {
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
}

export interface CreateJWT {
  nonce?: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateMFAAuthenticator {
  id: string;
  /**
   * * `totp` - Totp
   * * `sms` - Sms
   * * `static` - Static
   */
  type: "totp" | "sms" | "static";
  verified: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateMetric {
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
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateMobile {
  id: number;
  /** @maxLength 24 */
  number: string;
  primary: boolean;
  verified: boolean;
  created: number;
  updated: number;
}

export interface CreateMultiTransaction {
  transactions: ExplicitCreateTransaction[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateStatement {
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
export interface CreateTransactionCollection {
  /** @maxLength 64 */
  id?: string;
  transactions: CreateTransactionCollectionTransaction[];
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   */
  status?: "Initiating" | "Quoted" | "Pending";
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
export interface CreateTransactionCollectionTransaction {
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
  user?: string | null;
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
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateTransferTransaction {
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
  /** @default false */
  inclusive?: boolean;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateUserBankAccountAccountAsset {
  account_currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateUserBankAccountAsset {
  currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateUserWalletAccountAccountAsset {
  account_currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CreateUserWalletAccountAsset {
  currency: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CryptoAccount {
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
  currencies: ReducedAsset[];
  account_currencies: ReducedAccountAsset[];
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   */
  action: "withdraw" | "deposit";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CryptoAccountAsset {
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
  created: number;
  updated: number;
}

export type CryptoAccountAssetList = CryptoAccountAsset[];

export interface CryptoAccountAssetListResponse {
  status: string;
  data: CryptoAccountAssetList;
}

export interface CryptoAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: CryptoAccountAsset;
}

export type CryptoAccountList = CryptoAccount[];

export interface CryptoAccountListResponse {
  status: string;
  data: CryptoAccountList;
}

export interface CryptoAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: CryptoAccount;
}

export interface Deactivate {
  user: string;
  company: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Device {
  id: number;
  imei: string;
  /** @maxLength 30 */
  name?: string | null;
  apps: ReducedDeviceApp[];
  metadata?: Record<string, any>;
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

export interface DeviceAppResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: DeviceApp;
}

export type DeviceList = Device[];

export interface DeviceListResponse {
  status: string;
  data: DeviceList;
}

export interface DeviceResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: Device;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface DocumentType {
  id: number;
  /** @maxLength 50 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  related_resources: (
    | "user"
    | "useraddress"
    | "userbankaccount"
    | "userwalletaccount"
    | "usercryptoaccount"
  )[];
  metadata: Record<string, any>;
  created: number;
  updated: number;
}

export interface DocumentTypeResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: DocumentType;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Email {
  id: number;
  /** @format email */
  email: string;
  primary?: boolean;
  verified: boolean;
  created: number;
  updated: number;
}

export type EmailList = Email[];

export interface EmailListResponse {
  status: string;
  data: EmailList;
}

export interface EmailResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: Email;
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
export interface ExplicitCreateTransaction {
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
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * @default "Pending"
   */
  status?: "Initiating" | "Quoted" | "Pending";
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Export {
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
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ExportPage {
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

export interface ExportResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: Export;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ExtendedAccount {
  reference: string;
  /** @maxLength 200 */
  name?: string;
  definition: string | null;
  /** @maxLength 200 */
  label?: string | null;
  primary: boolean;
  recon: boolean;
  currencies: AccountAccountAsset[];
  metadata: Record<string, any>;
  created: number;
  updated: number;
}

export interface ExtendedAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: ExtendedAccount;
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
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ExtendedExport {
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
  pages: ExportPage[];
  /**
   * * `json` - JSON
   * * `csv` - CSV
   */
  file_format: "json" | "csv";
  created: number;
  updated: number;
}

export interface ExtendedExportResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: ExtendedExport;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ExtendedGroupTier {
  id: number;
  level: number;
  name: string | null;
  description: string | null;
  active: boolean;
  settings: GroupTierSettings;
  created: number;
  updated: number;
}

export interface ExtendedGroupTierResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: ExtendedGroupTier;
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
export interface ExtendedTransaction {
  id: string;
  collection: string;
  parent: string | null;
  partner: PartnerTransaction | null;
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
  fees: TransactionFee[];
  inclusive: boolean;
  executed: number | null;
  expires: number;
  created: number;
  updated: number;
}

export interface ExtendedTransactionResponse {
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
  data: ExtendedTransaction;
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

export interface ExtendedUserInfoResponse {
  status: string;
  /**
   * Extended user information shown based on the default user info serializer.
   * Contain additional information about user permissions and settings.
   */
  data: ExtendedUserInfo;
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
export interface GroupFee {
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

export interface GroupFeeResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: GroupFee;
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

export interface GroupPermissionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: GroupPermission;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface GroupSettings {
  allow_transactions?: boolean;
  allow_debit_transactions?: boolean;
  allow_credit_transactions?: boolean;
  disallowed_transaction_subtypes: GroupDisallowedTransactionSubtype[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface GroupTier {
  id: number;
  level: number;
  name: string | null;
  description: string | null;
  active: boolean;
  /** @deprecated */
  limits: GroupTierLimit[];
  /** @deprecated */
  fees: GroupTierFee[];
  settings: GroupTierSettings;
  created: number;
  updated: number;
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

export interface GroupTierFeeResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: GroupTierFee;
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

export interface GroupTierLimitResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: GroupTierLimit;
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

export interface JWT {
  token: string;
}

export interface JWTResponse {
  status: string;
  data: JWT;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface LegalTerm {
  id: number;
  /**
   * * `system` - System
   * * `company` - Company
   */
  type: "system" | "company";
  name: string;
  description: string | null;
  versions: ReducedLegalTermVersion[];
  created: number;
  updated: number;
}

export interface LegalTermResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: LegalTerm;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface LegalTermVersion {
  id: number;
  version: number;
  accepted: boolean;
  accepted_date: number;
  note: string | null;
  content: string | null;
  /** @format uri */
  url: string | null;
  created: number;
  updated: number;
}

export interface LegalTermVersionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: LegalTermVersion;
}

export interface Login {
  user: string;
  company: string;
  /** @maxLength 128 */
  password: string;
  /** @min 0 */
  session_duration?: number | null;
  /**
   * * `cookie` - Cookie
   * * `token` - Token
   * @default "token"
   */
  auth_method?: "cookie" | "token";
}

export interface Logout {
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
export interface MFAAuthenticator {
  id: string;
  /**
   * * `totp` - Totp
   * * `sms` - Sms
   * * `static` - Static
   */
  type: "totp" | "sms" | "static";
  details: MFADeviceDetail;
  verified: boolean;
  created: number;
  updated: number;
}

export interface MFAAuthenticatorResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: MFAAuthenticator;
}

export interface MFADeliver {
  challenge?: string;
  authenticator?: string;
}

export type MFADeviceDetail =
  | MFATOTPDeviceDetail
  | MFATwilioDeviceDetail
  | MFAStaticDeviceDetail;

export interface MFAStaticDeviceDetail {
  /** @default "Default Static" */
  name?: string;
  tokens: MFAStaticDeviceToken[];
}

export interface MFAStaticDeviceToken {
  token: string;
  available: boolean;
}

export interface MFATOTPDeviceDetail {
  /** @default "Default TOTP" */
  name?: string;
  /**
   * * `SHA1` - SHA1
   * * `SHA256` - SHA256
   * * `SHA512` - SHA512
   */
  algorithm: "SHA1" | "SHA256" | "SHA512";
  otpauth_url: string;
  issuer: string;
  account: string;
  key: string;
}

export interface MFATwilioDeviceDetail {
  /** @default "Default SMS" */
  name?: string;
  mobile: string;
}

export interface MFAVerify {
  token: string;
  challenge?: string;
  authenticator?: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface MaskedMFAAuthenticator {
  id: string;
  /**
   * * `totp` - Totp
   * * `sms` - Sms
   * * `static` - Static
   */
  type: "totp" | "sms" | "static";
  details: MaskedMFADeviceDetail;
  verified: boolean;
  created: number;
  updated: number;
}

export interface MaskedMFAAuthenticatorResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: MaskedMFAAuthenticator;
}

export type MaskedMFADeviceDetail =
  | MaskedMFATOTPDeviceDetail
  | MaskedMFATwilioDeviceDetail
  | MaskedMFAStaticDeviceDetail;

export interface MaskedMFAStaticDeviceDetail {
  /** @default "Default Static" */
  name?: string;
  tokens: MaskedMFAStaticDeviceToken[];
}

export interface MaskedMFAStaticDeviceToken {
  token: string;
  available: boolean;
}

export interface MaskedMFATOTPDeviceDetail {
  /** @default "Default TOTP" */
  name?: string;
  /**
   * * `SHA1` - SHA1
   * * `SHA256` - SHA256
   * * `SHA512` - SHA512
   */
  algorithm: "SHA1" | "SHA256" | "SHA512";
  otpauth_url: string;
  issuer: string;
  account: string;
  key: string;
}

export interface MaskedMFATwilioDeviceDetail {
  /** @default "Default SMS" */
  name?: string;
  mobile: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Metric {
  id: string;
  name: string | null;
  slug: string | null;
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
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface MetricPoint {
  id: number;
  value: number;
  date: number;
}

export interface MetricResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: Metric;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Mobile {
  id: number;
  number: string;
  primary?: boolean;
  verified: boolean;
  created: number;
  updated: number;
}

export type MobileList = Mobile[];

export interface MobileListResponse {
  status: string;
  data: MobileList;
}

export interface MobileResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: Mobile;
}

export interface MultiTransaction {
  transactions: Transaction[];
}

export interface MultiTransactionResponse {
  status: string;
  data: MultiTransaction;
}

export interface OauthAuthorize {
  session: string;
  /** @format uri */
  url: string;
}

export interface OauthAuthorizeResponse {
  status: string;
  data: OauthAuthorize;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface OauthClient {
  id: string;
  /**
   * * `apple` - Apple
   * * `google` - Google
   */
  provider: "apple" | "google";
  application: string;
  client_id: string;
  created: number;
  updated: number;
}

export interface OauthClientResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: OauthClient;
}

export interface OauthLogin {
  session: string;
  /** @min 0 */
  session_duration?: number | null;
  /**
   * * `cookie` - Cookie
   * * `token` - Token
   * @default "token"
   */
  auth_method?: "cookie" | "token";
}

export interface OauthRegister {
  session: string;
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
  /**
   * * `cookie` - Cookie
   * * `token` - Token
   * @default "token"
   */
  auth_method?: "cookie" | "token";
}

export interface OauthSession {
  client: string;
  session: string;
}

export interface OauthSessionResponse {
  status: string;
  data: OauthSession;
}

export interface OauthVerify {
  /** @format uri */
  uri?: string;
  code?: string;
  session?: string;
  user_exists: boolean;
}

export interface OauthVerifyResponse {
  status: string;
  data: OauthVerify;
}

export interface PaginatedAccountAccountAssetList {
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
  results?: AccountAccountAsset[];
}

export interface PaginatedAccountAccountAssetListResponse {
  status: string;
  data: PaginatedAccountAccountAssetList;
}

export interface PaginatedAccountAssetFeeList {
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
  results?: AccountAssetFee[];
}

export interface PaginatedAccountAssetFeeListResponse {
  status: string;
  data: PaginatedAccountAssetFeeList;
}

export interface PaginatedAccountAssetLimitList {
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
  results?: AccountAssetLimit[];
}

export interface PaginatedAccountAssetLimitListResponse {
  status: string;
  data: PaginatedAccountAssetLimitList;
}

export interface PaginatedAccountAssetList {
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
  results?: AccountAsset[];
}

export interface PaginatedAccountAssetListResponse {
  status: string;
  data: PaginatedAccountAssetList;
}

export interface PaginatedAccountDefinitionList {
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
  results?: AccountDefinition[];
}

export interface PaginatedAccountDefinitionListResponse {
  status: string;
  data: PaginatedAccountDefinitionList;
}

export interface PaginatedAccountList {
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
  results?: Account[];
}

export interface PaginatedAccountListResponse {
  status: string;
  data: PaginatedAccountList;
}

export interface PaginatedAssetList {
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
  results?: Asset[];
}

export interface PaginatedAssetListResponse {
  status: string;
  data: PaginatedAssetList;
}

export interface PaginatedCompanyBankAccountList {
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
  results?: CompanyBankAccount[];
}

export interface PaginatedCompanyBankAccountListResponse {
  status: string;
  data: PaginatedCompanyBankAccountList;
}

export interface PaginatedCompanyWalletAccountList {
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
  results?: CompanyWalletAccount[];
}

export interface PaginatedCompanyWalletAccountListResponse {
  status: string;
  data: PaginatedCompanyWalletAccountList;
}

export interface PaginatedDeviceAppList {
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
  results?: DeviceApp[];
}

export interface PaginatedDeviceAppListResponse {
  status: string;
  data: PaginatedDeviceAppList;
}

export interface PaginatedDocumentTypeList {
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
  results?: DocumentType[];
}

export interface PaginatedDocumentTypeListResponse {
  status: string;
  data: PaginatedDocumentTypeList;
}

export interface PaginatedExportList {
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
  results?: Export[];
}

export interface PaginatedExportListResponse {
  status: string;
  data: PaginatedExportList;
}

export interface PaginatedGroupFeeList {
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
  results?: GroupFee[];
}

export interface PaginatedGroupFeeListResponse {
  status: string;
  data: PaginatedGroupFeeList;
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

export interface PaginatedGroupTierFeeList {
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
  results?: GroupTierFee[];
}

export interface PaginatedGroupTierFeeListResponse {
  status: string;
  data: PaginatedGroupTierFeeList;
}

export interface PaginatedGroupTierLimitList {
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
  results?: GroupTierLimit[];
}

export interface PaginatedGroupTierLimitListResponse {
  status: string;
  data: PaginatedGroupTierLimitList;
}

export interface PaginatedGroupTierList {
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
  results?: GroupTier[];
}

export interface PaginatedGroupTierListResponse {
  status: string;
  data: PaginatedGroupTierList;
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

export interface PaginatedLegalTermList {
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
  results?: LegalTerm[];
}

export interface PaginatedLegalTermListResponse {
  status: string;
  data: PaginatedLegalTermList;
}

export interface PaginatedLegalTermVersionList {
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
  results?: LegalTermVersion[];
}

export interface PaginatedLegalTermVersionListResponse {
  status: string;
  data: PaginatedLegalTermVersionList;
}

export interface PaginatedMaskedMFAAuthenticatorList {
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
  results?: MaskedMFAAuthenticator[];
}

export interface PaginatedMaskedMFAAuthenticatorListResponse {
  status: string;
  data: PaginatedMaskedMFAAuthenticatorList;
}

export interface PaginatedMetricList {
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
  results?: Metric[];
}

export interface PaginatedMetricListResponse {
  status: string;
  data: PaginatedMetricList;
}

export interface PaginatedMetricPointList {
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
  results?: MetricPoint[];
}

export interface PaginatedMetricPointListResponse {
  status: string;
  data: PaginatedMetricPointList;
}

export interface PaginatedOauthClientList {
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
  results?: OauthClient[];
}

export interface PaginatedOauthClientListResponse {
  status: string;
  data: PaginatedOauthClientList;
}

export interface PaginatedPublicCompanyLegalTermList {
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
  results?: PublicCompanyLegalTerm[];
}

export interface PaginatedPublicCompanyLegalTermListResponse {
  status: string;
  data: PaginatedPublicCompanyLegalTermList;
}

export interface PaginatedPublicCompanyLegalTermVersionList {
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
  results?: PublicCompanyLegalTermVersion[];
}

export interface PaginatedPublicCompanyLegalTermVersionListResponse {
  status: string;
  data: PaginatedPublicCompanyLegalTermVersionList;
}

export interface PaginatedPublicCompanyList {
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
  results?: PublicCompany[];
}

export interface PaginatedPublicCompanyListResponse {
  status: string;
  data: PaginatedPublicCompanyList;
}

export interface PaginatedPublicGroupList {
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
  results?: PublicGroup[];
}

export interface PaginatedPublicGroupListResponse {
  status: string;
  data: PaginatedPublicGroupList;
}

export interface PaginatedPublicLegalTermList {
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
  results?: PublicLegalTerm[];
}

export interface PaginatedPublicLegalTermListResponse {
  status: string;
  data: PaginatedPublicLegalTermList;
}

export interface PaginatedPublicLegalTermVersionList {
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
  results?: PublicLegalTermVersion[];
}

export interface PaginatedPublicLegalTermVersionListResponse {
  status: string;
  data: PaginatedPublicLegalTermVersionList;
}

export interface PaginatedStatementList {
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
  results?: Statement[];
}

export interface PaginatedStatementListResponse {
  status: string;
  data: PaginatedStatementList;
}

export interface PaginatedTransactionCollectionList {
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
  results?: TransactionCollection[];
}

export interface PaginatedTransactionCollectionListResponse {
  status: string;
  data: PaginatedTransactionCollectionList;
}

export interface PaginatedTransactionList {
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
  results?: Transaction[];
}

export interface PaginatedTransactionListResponse {
  status: string;
  data: PaginatedTransactionList;
}

export interface PaginatedTransactionMessageList {
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
  results?: TransactionMessage[];
}

export interface PaginatedTransactionMessageListResponse {
  status: string;
  data: PaginatedTransactionMessageList;
}

export interface PaginatedUserDocumentList {
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
  results?: UserDocument[];
}

export interface PaginatedUserDocumentListResponse {
  status: string;
  data: PaginatedUserDocumentList;
}

export interface PaginatedUserGroupList {
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
  results?: UserGroup[];
}

export interface PaginatedUserGroupListResponse {
  status: string;
  data: PaginatedUserGroupList;
}

export interface PaginatedUserMessageList {
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
  results?: UserMessage[];
}

export interface PaginatedUserMessageListResponse {
  status: string;
  data: PaginatedUserMessageList;
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

export interface PaginatedUserWalletAccountAssetList {
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
  results?: UserWalletAccountAsset[];
}

export interface PaginatedUserWalletAccountAssetListResponse {
  status: string;
  data: PaginatedUserWalletAccountAssetList;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PartnerTransaction {
  id: string;
  user: PartnerUserInfo;
}

/**
 * A condensed user serializer showing only the necessary user information to
 * identify a partner user (without exposing any extra).
 *
 * This only works when a transaction instance is sent to it.
 */
export interface PartnerUserInfo {
  id: string;
  identifier: string;
  username: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  /** @format uri */
  profile: string | null;
  temporary: boolean;
}

export interface PasswordChange {
  /** @maxLength 128 */
  old_password: string;
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
  /**
   * * `all` - All
   * * `temporary` - Temporary
   * * `none` - None
   * @default "temporary"
   */
  clear_session_option?: "all" | "temporary" | "none";
}

/** Serializer for requesting a password reset e-mail. */
export interface PasswordReset {
  /** @default false */
  force?: boolean;
  user: string;
  company: string;
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
export interface PatchedAccountAccountAsset {
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
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedCryptoAccount {
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
  currencies?: ReducedAsset[];
  account_currencies?: ReducedAccountAsset[];
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   */
  action?: "withdraw" | "deposit";
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedDevice {
  id?: number;
  imei?: string;
  /** @maxLength 30 */
  name?: string | null;
  apps?: ReducedDeviceApp[];
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
export interface PatchedDeviceApp {
  id?: number;
  /** @maxLength 30 */
  name?: string | null;
  /** * `expo` - Expo */
  type?: "expo";
  token?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedEmail {
  id?: number;
  /** @format email */
  email?: string;
  primary?: boolean;
  verified?: boolean;
  created?: number;
  updated?: number;
}

/**
 * Extended user information shown based on the default user info serializer.
 * Contain additional information about user permissions and settings.
 */
export interface PatchedExtendedUserInfo {
  id?: string;
  /**
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username?: string | null;
  /** @format email */
  email?: string | null;
  mobile?: string | null;
  /** @maxLength 50 */
  first_name?: string | null;
  /** @maxLength 50 */
  middle_name?: string | null;
  /** @maxLength 50 */
  last_name?: string | null;
  /** @format uri */
  profile?: string | null;
  groups?: ReducedGroup[];
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
  settings?: UserSettings;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedMobile {
  id?: number;
  number?: string;
  primary?: boolean;
  verified?: boolean;
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
export interface PatchedUpdateExtendedTransaction {
  id?: string;
  collection?: string;
  parent?: string | null;
  partner?: PartnerTransaction | null;
  index?: number;
  /**
   * * `credit` - Credit
   * * `debit` - Debit
   */
  tx_type?: "credit" | "debit";
  subtype?: string | null;
  note?: string;
  metadata?: Record<string, any>;
  /**
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   */
  status?: "Quoted" | "Pending";
  reference?: string | null;
  amount?: number;
  fee?: number;
  total_amount?: number;
  balance?: number;
  label?: string;
  account?: string;
  currency?: ReducedAsset;
  account_currency?: TransactionAccountAsset;
  fees?: TransactionFee[];
  inclusive?: boolean;
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
export interface PatchedUpdateLegalTermVersion {
  id?: number;
  version?: number;
  accepted?: boolean;
  note?: string | null;
  content?: string | null;
  /** @format uri */
  url?: string | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedUserAddress {
  id?: number;
  /**
   * * `permanent` - Permanent
   * * `contact` - Contact
   * * `shipping` - Shipping
   * * `billing` - Billing
   * * `business` - Business
   */
  type?: "permanent" | "contact" | "shipping" | "billing" | "business";
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
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedUserBankAccount {
  id?: number;
  /** @maxLength 200 */
  name?: string | null;
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
  owner?: BankOwner | null;
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
  branch_address?: UserBankBranchAddress;
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
  account_currencies?: ReducedAccountAsset[];
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   */
  action?: "withdraw" | "deposit";
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedUserWalletAccount {
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
  account_currencies?: ReducedAccountAsset[];
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   */
  action?: "withdraw" | "deposit";
  created?: number;
  updated?: number;
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
export interface PublicCompany {
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
  metadata?: Record<string, any>;
  settings: PublicCompanySettings;
  services: ReducedService[];
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
  status: "pending" | "active" | "restricted" | "suspended";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PublicCompanyLegalTerm {
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
  versions: PublicReducedCompanyLegalTermVersion[];
  created: number;
  updated: number;
}

export interface PublicCompanyLegalTermResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: PublicCompanyLegalTerm;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PublicCompanyLegalTermVersion {
  id: number;
  version: number;
  note: string | null;
  content: string | null;
  /** @format uri */
  url: string | null;
  created: number;
  updated: number;
}

export interface PublicCompanyLegalTermVersionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: PublicCompanyLegalTermVersion;
}

export interface PublicCompanyResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: PublicCompany;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PublicCompanySettings {
  allow_session_durations?: boolean;
  /** @format uri */
  terms_and_conditions_url: string;
  /** @format uri */
  privacy_policy_url: string;
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
export interface PublicGroup {
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
  /** @maxLength 255 */
  description?: string | null;
  /** @format uri */
  icon: string | null;
  default?: boolean;
}

export interface PublicGroupResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: PublicGroup;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PublicLegalTerm {
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
  versions: PublicReducedLegalTermVersion[];
  created: number;
  updated: number;
}

export interface PublicLegalTermResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: PublicLegalTerm;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PublicLegalTermVersion {
  id: number;
  version: number;
  note: string | null;
  content: string | null;
  /** @format uri */
  url: string | null;
  created: number;
  updated: number;
}

export interface PublicLegalTermVersionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: PublicLegalTermVersion;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PublicReducedCompanyLegalTermVersion {
  id: number;
  version: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PublicReducedLegalTermVersion {
  id: number;
  version: number;
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
export interface ReducedAccountAccountAsset {
  id: string;
  balance: number;
  available_balance: number;
  currency: ReducedAsset;
  active: boolean;
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

export type ReducedAccountAssetList = ReducedAccountAsset[];

export interface ReducedAccountAssetListResponse {
  status: string;
  data: ReducedAccountAssetList;
}

export interface ReducedAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: ReducedAccountAsset;
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
export interface ReducedLegalTermVersion {
  id: number;
  version: number;
  accepted: boolean;
  created: number;
  updated: number;
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

export interface Refresh {
  /** @min 0 */
  session_duration?: number | null;
}

export interface Refreshed {
  /** Fetch a refresh token to use for refreshing authentication. */
  refresh_token: string;
  expires: number;
  created: number;
}

export interface RefreshedResponse {
  status: string;
  data: Refreshed;
}

export interface Register {
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
  /** @maxLength 100 */
  company: string;
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
  /** @maxLength 100 */
  timezone?: string | null;
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
  /**
   * * `cookie` - Cookie
   * * `token` - Token
   * @default "token"
   */
  auth_method?: "cookie" | "token";
}

/** Override company validation on the register serializer. */
export interface RegisterCompany {
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
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  company: CreateCompany;
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
  /** @maxLength 100 */
  timezone?: string | null;
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
  /** @minItems 0 */
  legal_term_versions?: number[];
  /**
   * * `cookie` - Cookie
   * * `token` - Token
   * @default "token"
   */
  auth_method?: "cookie" | "token";
}

export interface RequestDelete {
  user: string;
  company: string;
}

export interface ResendVerifyEmail {
  /** @format email */
  email: string;
  company: string;
}

export interface ResendVerifyMobile {
  mobile: string;
  company: string;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface Statement {
  id: string;
  account: ReducedAccount;
  timezone: string;
  start_date: number;
  end_date: number;
  /** @format uri */
  file: string | null;
  /**
   * * `queued` - Queued
   * * `processing` - Processing
   * * `complete` - Complete
   * * `failed` - Failed
   */
  status: "queued" | "processing" | "complete" | "failed";
  created: number;
  updated: number;
}

export interface StatementResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: Statement;
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
 * A mixin that handles the application of permissions to properties on a
 * serializer using the built-in permissions system.
 *
 * NOTE : This only works if the following conditions are met:
 *     - The request context must contain a user.
 *     - The class this mixin is attached must be a serializer.
 *     - The class this mixin is attached to must have a Meta.model defined.
 *     - The Meta.model class must have a PERMISSION_TYPE defined.
 */
export interface Transaction {
  id: string;
  collection: string;
  parent: string | null;
  partner: PartnerTransaction | null;
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
  inclusive: boolean;
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
export interface TransactionCollection {
  id: string;
  transactions: TransactionCollectionTransaction[];
  /**
   * * `Initiating` - Initiating
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   * * `Complete` - Complete
   * * `Failed` - Failed
   */
  status: "Initiating" | "Quoted" | "Pending" | "Complete" | "Failed";
  created: number;
  updated: number;
}

export interface TransactionCollectionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: TransactionCollection;
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
export interface TransactionCollectionTransaction {
  id: string;
  parent: string | null;
  partner: PartnerTransaction | null;
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
  inclusive: boolean;
  executed: number | null;
  created: number;
  updated: number;
  expires: number;
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
export interface TransactionMessage {
  id: number;
  /**
   * * `info` - Info
   * * `warning` - Warning
   * * `error` - Error
   */
  level: "info" | "warning" | "error";
  message: string;
  created: number;
  updated: number;
}

export interface TransactionMessageResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: TransactionMessage;
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

export type TransactionSubtypeList = TransactionSubtype[];

export interface TransactionSubtypeListResponse {
  status: string;
  data: TransactionSubtypeList;
}

export interface TransactionSubtypeResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: TransactionSubtype;
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
export interface UpdateExtendedTransaction {
  id: string;
  collection: string;
  parent: string | null;
  partner: PartnerTransaction | null;
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
   * * `Quoted` - Quoted
   * * `Pending` - Pending
   */
  status?: "Quoted" | "Pending";
  reference: string | null;
  amount: number;
  fee: number;
  total_amount: number;
  balance: number;
  label: string;
  account: string;
  currency: ReducedAsset;
  account_currency: TransactionAccountAsset;
  fees: TransactionFee[];
  inclusive: boolean;
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
export interface UpdateLegalTermVersion {
  id: number;
  version: number;
  accepted: boolean;
  note: string | null;
  content: string | null;
  /** @format uri */
  url: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserAddress {
  id: number;
  /**
   * * `permanent` - Permanent
   * * `contact` - Contact
   * * `shipping` - Shipping
   * * `billing` - Billing
   * * `business` - Business
   */
  type?: "permanent" | "contact" | "shipping" | "billing" | "business";
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
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  created: number;
  updated: number;
}

export type UserAddressList = UserAddress[];

export interface UserAddressListResponse {
  status: string;
  data: UserAddressList;
}

export interface UserAddressResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: UserAddress;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserBankAccount {
  id: number;
  /** @maxLength 200 */
  name?: string | null;
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
  owner?: BankOwner | null;
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
  branch_address?: UserBankBranchAddress;
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
  metadata?: Record<string, any>;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  currencies: ReducedAsset[];
  account_currencies: ReducedAccountAsset[];
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   */
  action: "withdraw" | "deposit";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserBankAccountAsset {
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
  created: number;
  updated: number;
}

export type UserBankAccountAssetList = UserBankAccountAsset[];

export interface UserBankAccountAssetListResponse {
  status: string;
  data: UserBankAccountAssetList;
}

export interface UserBankAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: UserBankAccountAsset;
}

export type UserBankAccountList = UserBankAccount[];

export interface UserBankAccountListResponse {
  status: string;
  data: UserBankAccountList;
}

export interface UserBankAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: UserBankAccount;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserBankBranchAddress {
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
export interface UserCreateBankAccount {
  id: number;
  /** @maxLength 200 */
  name?: string | null;
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
  owner?: BankOwner | null;
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
  branch_address?: UserBankBranchAddress;
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
  metadata?: Record<string, any>;
  /**
   * * `obsolete` - Obsolete
   * * `declined` - Declined
   * * `pending` - Pending
   * * `incomplete` - Incomplete
   * * `verified` - Verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  currencies: ReducedAsset[];
  account_currencies: ReducedAccountAsset[];
  /**
   * * `withdraw` - Withdraw
   * @default "withdraw"
   */
  action?: "withdraw";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserCreateDocument {
  id: number;
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
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  note: string | null;
  expires?: number | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserCreateWalletAccount {
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
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  currencies: ReducedAsset[];
  account_currencies: ReducedAccountAsset[];
  /**
   * * `withdraw` - Withdraw
   * @default "withdraw"
   */
  action?: "withdraw";
  created: number;
  updated: number;
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
export interface UserDocument {
  id: number;
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
  metadata?: Record<string, any>;
  note: string | null;
  expires?: number | null;
  created: number;
  updated: number;
}

export interface UserDocumentResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: UserDocument;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserGroup {
  /** @maxLength 80 */
  name: string;
  /** @maxLength 80 */
  label?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @format uri */
  icon: string | null;
  tier: GroupTier;
  tiers: ReducedGroupTier[];
  settings: GroupSettings;
  /**
   * * `system` - System
   * * `admin` - Admin
   * * `user` - User
   */
  section: "system" | "admin" | "user";
}

export interface UserGroupResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: UserGroup;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserMessage {
  id: number;
  /**
   * * `info` - Info
   * * `warning` - Warning
   * * `error` - Error
   */
  level: "info" | "warning" | "error";
  message: string;
  created: number;
  updated: number;
}

export interface UserMessageResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: UserMessage;
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

export interface UserPermissionResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: UserPermission;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserWalletAccount {
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
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  currencies: ReducedAsset[];
  account_currencies: ReducedAccountAsset[];
  /**
   * * `withdraw` - Withdraw
   * * `deposit` - Deposit
   */
  action: "withdraw" | "deposit";
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserWalletAccountAsset {
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
  created: number;
  updated: number;
}

export interface UserWalletAccountAssetResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: UserWalletAccountAsset;
}

export type UserWalletAccountList = UserWalletAccount[];

export interface UserWalletAccountListResponse {
  status: string;
  data: UserWalletAccountList;
}

export interface UserWalletAccountResponse {
  status: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data: UserWalletAccount;
}

export interface VerifyDeactivate {
  key: string;
}

export interface VerifyEmail {
  key: string;
}

export interface VerifyMobile {
  /** @maxLength 24 */
  otp: string;
}

export interface VerifyRequestDelete {
  key: string;
}

export interface AccountCurrenciesListParams {
  account?: string;
  account__definition?: string;
  account__name?: string;
  account__name__contains?: string;
  active?: boolean;
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
}

export type AccountCurrenciesListData = PaginatedAccountAssetListResponse;

export interface AccountDefinitionsListParams {
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

export type AccountDefinitionsListData = PaginatedAccountDefinitionListResponse;

export type AccountDefinitionsRetrieveData = AccountDefinitionResponse;

export interface AccountsListParams {
  active?: boolean;
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

export type AccountsListData = PaginatedAccountListResponse;

export type AccountsCreateData = AccountResponse;

export type AccountsRetrieveData = ExtendedAccountResponse;

export interface AccountsCurrenciesListParams {
  account?: string;
  account__definition?: string;
  account__name?: string;
  account__name__contains?: string;
  active?: boolean;
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
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  reference: string;
}

export type AccountsCurrenciesListData =
  PaginatedAccountAccountAssetListResponse;

export type AccountsCurrenciesCreateData = AccountAccountAssetResponse;

export type AccountsCurrenciesRetrieveData = AccountAccountAssetResponse;

export type AccountsCurrenciesUpdateData = AccountAccountAssetResponse;

export type AccountsCurrenciesPartialUpdateData = AccountAccountAssetResponse;

export interface AccountsCurrenciesFeesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  code: string;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  reference: string;
}

export type AccountsCurrenciesFeesListData =
  PaginatedAccountAssetFeeListResponse;

export type AccountsCurrenciesFeesRetrieveData = AdminAccountAssetFeeResponse;

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
  PaginatedAccountAssetLimitListResponse;

export type AccountsCurrenciesLimitsRetrieveData = AccountAssetLimitResponse;

export type AuthRetrieveData = AuthResponse;

export type AuthRegisterCompanyData = ExtendedAuthenticatedResponse;

export type AuthDeactivateData = ActionResponse;

export type AuthDeactivateVerifyData = ActionResponse;

export type AuthEmailVerifyData = ActionResponse;

export type AuthEmailVerifyResendData = ActionResponse;

export type AuthJwtCreateData = JWTResponse;

export type AuthLoginData = AuthenticatedResponse;

export type AuthLogoutData = ActionResponse;

export interface AuthMfaAuthenticatorsListParams {
  id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
  verified?: boolean;
}

export type AuthMfaAuthenticatorsListData =
  PaginatedMaskedMFAAuthenticatorListResponse;

export type AuthMfaAuthenticatorsCreateData = MFAAuthenticatorResponse;

export type AuthMfaAuthenticatorsRetrieveData = MaskedMFAAuthenticatorResponse;

export type AuthMfaAuthenticatorsDestroyData = ActionResponse;

export type AuthMfaDeliverData = ActionResponse;

export type AuthMfaVerifyData = ActionResponse;

export type AuthMobileVerifyData = ActionResponse;

export type AuthMobileVerifyResendData = ActionResponse;

export type AuthOauthAuthorizeCreateData = OauthAuthorizeResponse;

export type AuthOauthLoginCreateData = AuthenticatedResponse;

export type AuthOauthRegisterCreateData = ExtendedAuthenticatedResponse;

export type AuthOauthSessionCreateData = OauthSessionResponse;

export type AuthOauthVerifyCreateData = OauthVerifyResponse;

export type AuthPasswordChangeData = ActionResponse;

export type AuthPasswordResetData = ActionResponse;

export type AuthPasswordResetConfirmData = ActionResponse;

export type AuthRefreshCreateData = RefreshedResponse;

export type AuthRegisterData = ExtendedAuthenticatedResponse;

export type AuthRequestDeleteData = ActionResponse;

export type AuthRequestDeleteVerifyData = ActionResponse;

export interface AuthTokensListParams {
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
  token_key?: string;
  token_key__exclude?: string;
  token_key__in?: string;
}

export type AuthTokensListData = AuthTokenListResponse;

export type AuthTokensCreateData = ExtendedAuthenticatedResponse;

export type AuthTokensListDestroyData = ActionResponse;

export type AuthTokensRetrieveData = AuthTokenResponse;

export type AuthTokensDestroyData = ActionResponse;

export type CompanyRetrieveData = CompanyResponse;

export interface CompanyBankAccountsListParams {
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
  id?: string;
  name?: string;
  name__contains?: string;
  number?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type CompanyBankAccountsListData =
  PaginatedCompanyBankAccountListResponse;

export interface CompanyCurrenciesListParams {
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

export type CompanyCurrenciesListData = PaginatedAssetListResponse;

export type CompanyCurrenciesRetrieveData = AssetResponse;

export interface CompanyWalletAccountsListParams {
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
  id?: string;
  name?: string;
  name__contains?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type CompanyWalletAccountsListData =
  PaginatedCompanyWalletAccountListResponse;

export interface DocumentTypesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type DocumentTypesListData = PaginatedDocumentTypeListResponse;

export type DocumentTypesRetrieveData = DocumentTypeResponse;

export interface ExportsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  resource?: string;
  status?: string;
}

export type ExportsListData = PaginatedExportListResponse;

export type ExportsCreateData = ExportResponse;

export type ExportsRetrieveData = ExtendedExportResponse;

export interface GroupsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type GroupsListData = PaginatedUserGroupListResponse;

export type GroupsRetrieveData = UserGroupResponse;

export interface GroupsFeesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  groupName: string;
}

export type GroupsFeesListData = PaginatedGroupFeeListResponse;

export type GroupsFeesRetrieveData = GroupFeeResponse;

export interface GroupsPermissionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  groupName: string;
}

export type GroupsPermissionsListData = PaginatedGroupPermissionListResponse;

export type GroupsPermissionsRetrieveData = GroupPermissionResponse;

export interface GroupsTiersListParams {
  active?: boolean;
  level?: number;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  requirement?: string;
  /** @pattern ^\w+$ */
  groupName: string;
}

export type GroupsTiersListData = PaginatedGroupTierListResponse;

export type GroupsTiersRetrieveData = ExtendedGroupTierResponse;

export interface GroupsTiersFeesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  groupName: string;
  /** @pattern ^\d+$ */
  tierId: string;
}

export type GroupsTiersFeesListData = PaginatedGroupTierFeeListResponse;

export type GroupsTiersFeesRetrieveData = GroupTierFeeResponse;

export interface GroupsTiersLimitsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  groupName: string;
  /** @pattern ^\d+$ */
  tierId: string;
}

export type GroupsTiersLimitsListData = PaginatedGroupTierLimitListResponse;

export type GroupsTiersLimitsRetrieveData = GroupTierLimitResponse;

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

export type GroupsTiersRequirementSetsRetrieveData =
  GroupTierRequirementSetResponse;

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

export type GroupsTiersRequirementSetsItemsRetrieveData =
  GroupTierRequirementSetItemResponse;

export interface MetricsListParams {
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
  slug?: string;
  slug__in?: string;
  type?: string;
}

export type MetricsListData = PaginatedMetricListResponse;

export type MetricsCreateData = MetricResponse;

export type MetricsRetrieveData = MetricResponse;

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

export type MetricsPointsListData = PaginatedMetricPointListResponse;

export interface PermissionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type PermissionsListData = PaginatedUserPermissionListResponse;

export type PermissionsRetrieveData = UserPermissionResponse;

export interface PublicCompaniesListParams {
  id?: string;
  id__contains?: string;
  name?: string;
  name__contains?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type PublicCompaniesListData = PaginatedPublicCompanyListResponse;

export type PublicCompaniesRetrieveData = PublicCompanyResponse;

export interface PublicCompaniesGroupsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  id: string;
}

export type PublicCompaniesGroupsListData = PaginatedPublicGroupListResponse;

export type PublicCompaniesGroupsRetrieveData = PublicGroupResponse;

export interface PublicCompaniesLegalTermsListParams {
  group?: string;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
  /** @pattern ^\w+$ */
  id: string;
}

export type PublicCompaniesLegalTermsListData =
  PaginatedPublicCompanyLegalTermListResponse;

export type PublicCompaniesLegalTermsRetrieveData =
  PublicCompanyLegalTermResponse;

export interface PublicCompaniesLegalTermsVersionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  id: string;
  /** @pattern ^\d+$ */
  termId: string;
}

export type PublicCompaniesLegalTermsVersionsListData =
  PaginatedPublicCompanyLegalTermVersionListResponse;

export type PublicCompaniesLegalTermsVersionsRetrieveData =
  PublicCompanyLegalTermVersionResponse;

export interface PublicCompaniesOauthClientsListParams {
  application?: string;
  client_id?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  provider?: string;
  /** @pattern ^\w+$ */
  id: string;
}

export type PublicCompaniesOauthClientsListData =
  PaginatedOauthClientListResponse;

export type PublicCompaniesOauthClientsRetrieveData = OauthClientResponse;

export interface PublicLegalTermsListParams {
  group?: string;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
}

export type PublicLegalTermsListData = PaginatedPublicLegalTermListResponse;

export type PublicLegalTermsRetrieveData = PublicLegalTermResponse;

export interface PublicLegalTermsVersionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\d+$ */
  termId: string;
}

export type PublicLegalTermsVersionsListData =
  PaginatedPublicLegalTermVersionListResponse;

export type PublicLegalTermsVersionsRetrieveData =
  PublicLegalTermVersionResponse;

export interface StatementsListParams {
  account?: string;
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
}

export type StatementsListData = PaginatedStatementListResponse;

export type StatementsCreateData = StatementResponse;

export type StatementsRetrieveData = StatementResponse;

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

export type SubtypesListData = TransactionSubtypeListResponse;

export type SubtypesRetrieveData = TransactionSubtypeResponse;

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
}

export type TransactionCollectionsListData =
  PaginatedTransactionCollectionListResponse;

export type TransactionCollectionsCreateData = TransactionCollectionResponse;

export type TransactionCollectionsRetrieveData = TransactionCollectionResponse;

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
}

export type TransactionsListData = PaginatedTransactionListResponse;

export type TransactionsCreateData = MultiTransactionResponse;

export type TransactionsRetrieveData = ExtendedTransactionResponse;

export type TransactionsUpdateData = ExtendedTransactionResponse;

export type TransactionsPartialUpdateData = ExtendedTransactionResponse;

export interface TransactionsMessagesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^[a-zA-Z0-9\_\-]+$ */
  txCode: string;
}

export type TransactionsMessagesListData =
  PaginatedTransactionMessageListResponse;

export type TransactionsMessagesRetrieveData = TransactionMessageResponse;

export type TransactionsCreditCreateData = ExtendedTransactionResponse;

export type TransactionsDebitCreateData = ExtendedTransactionResponse;

export type TransactionTotalsRetrieveData = TotalTransactionResponse;

export type TransactionsTransferCreateData = ExtendedTransactionResponse;

export type UserRetrieveData = ExtendedUserInfoResponse;

export type UserUpdateData = ExtendedUserInfoResponse;

export type UserPartialUpdateData = ExtendedUserInfoResponse;

export type UserAddressesListData = UserAddressListResponse;

export type UserAddressesCreateData = UserAddressResponse;

export type UserAddressesRetrieveData = UserAddressResponse;

export type UserAddressesUpdateData = UserAddressResponse;

export type UserAddressesPartialUpdateData = UserAddressResponse;

export type UserAddressesDestroyData = ActionResponse;

export interface UserBankAccountsListParams {
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
  status?: string;
}

export type UserBankAccountsListData = UserBankAccountListResponse;

export type UserBankAccountsCreateData = UserBankAccountResponse;

export type UserBankAccountsRetrieveData = UserBankAccountResponse;

export type UserBankAccountsUpdateData = UserBankAccountResponse;

export type UserBankAccountsPartialUpdateData = UserBankAccountResponse;

export type UserBankAccountsDestroyData = ActionResponse;

export type UserBankAccountsAccountCurrenciesListData =
  ReducedAccountAssetListResponse;

export type UserBankAccountsAccountCurrenciesCreateData =
  ReducedAccountAssetResponse;

export type UserBankAccountsAccountCurrenciesRetrieveData =
  AccountAssetResponse;

export type UserBankAccountsAccountCurrenciesDestroyData = ActionResponse;

export type UserBankAccountsCurrenciesListData =
  UserBankAccountAssetListResponse;

export type UserBankAccountsCurrenciesCreateData = UserBankAccountAssetResponse;

export type UserBankAccountsCurrenciesRetrieveData =
  UserBankAccountAssetResponse;

export type UserBankAccountsCurrenciesDestroyData = ActionResponse;

export interface UserCryptoAccountsListParams {
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
  status?: string;
}

export type UserCryptoAccountsListData = CryptoAccountListResponse;

export type UserCryptoAccountsCreateData = CryptoAccountResponse;

export type UserCryptoAccountsRetrieveData = CryptoAccountResponse;

export type UserCryptoAccountsUpdateData = CryptoAccountResponse;

export type UserCryptoAccountsPartialUpdateData = CryptoAccountResponse;

export type UserCryptoAccountsDestroyData = ActionResponse;

export type UserCryptoAccountsAccountCurrenciesListData =
  ReducedAccountAssetListResponse;

export type UserCryptoAccountsAccountCurrenciesCreateData =
  ReducedAccountAssetResponse;

export type UserCryptoAccountsAccountCurrenciesRetrieveData =
  AccountAssetResponse;

export type UserCryptoAccountsAccountCurrenciesDestroyData = ActionResponse;

export type UserCryptoAccountsCurrenciesListData =
  CryptoAccountAssetListResponse;

export type UserCryptoAccountsCurrenciesCreateData = CryptoAccountAssetResponse;

export type UserCryptoAccountsCurrenciesRetrieveData =
  CryptoAccountAssetResponse;

export type UserCryptoAccountsCurrenciesDestroyData = ActionResponse;

export interface UserDevicesListParams {
  imei?: string;
}

export type UserDevicesListData = DeviceListResponse;

export type UserDevicesCreateData = DeviceResponse;

export type UserDevicesAppsRetrieveData = DeviceAppResponse;

export type UserDevicesAppsUpdateData = DeviceAppResponse;

export type UserDevicesAppsPartialUpdateData = DeviceAppResponse;

export type UserDevicesAppsDestroyData = ActionResponse;

export type UserDevicesRetrieveData = DeviceResponse;

export type UserDevicesUpdateData = DeviceResponse;

export type UserDevicesPartialUpdateData = DeviceResponse;

export type UserDevicesDestroyData = ActionResponse;

export interface UserDevicesAppsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\d+$ */
  id: string;
}

export type UserDevicesAppsListData = PaginatedDeviceAppListResponse;

export type UserDevicesAppsCreateData = DeviceAppResponse;

export interface UserDocumentsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UserDocumentsListData = PaginatedUserDocumentListResponse;

export type UserDocumentsCreateData = UserDocumentResponse;

export type UserDocumentsRetrieveData = UserDocumentResponse;

export type UserDocumentsDestroyData = ActionResponse;

export type UserEmailsListData = EmailListResponse;

export type UserEmailsCreateData = EmailResponse;

export type UserEmailsRetrieveData = EmailResponse;

export type UserEmailsUpdateData = EmailResponse;

export type UserEmailsPartialUpdateData = EmailResponse;

export type UserEmailsDestroyData = ActionResponse;

export interface UserLegalTermsListParams {
  group?: string;
  name?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
}

export type UserLegalTermsListData = PaginatedLegalTermListResponse;

export type UserLegalTermsRetrieveData = LegalTermResponse;

export interface UserLegalTermsVersionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\d+$ */
  id: string;
}

export type UserLegalTermsVersionsListData =
  PaginatedLegalTermVersionListResponse;

export type UserLegalTermsVersionsRetrieveData = LegalTermVersionResponse;

export type UserLegalTermsVersionsUpdateData = LegalTermVersionResponse;

export type UserLegalTermsVersionsPartialUpdateData = LegalTermVersionResponse;

export interface UserMessagesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UserMessagesListData = PaginatedUserMessageListResponse;

export type UserMessagesRetrieveData = UserMessageResponse;

export type UserMobilesListData = MobileListResponse;

export type UserMobilesCreateData = MobileResponse;

export type UserMobilesRetrieveData = MobileResponse;

export type UserMobilesUpdateData = MobileResponse;

export type UserMobilesPartialUpdateData = MobileResponse;

export type UserMobilesDestroyData = ActionResponse;

export interface UserWalletAccountsListParams {
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
  status?: string;
}

export type UserWalletAccountsListData = UserWalletAccountListResponse;

export type UserWalletAccountsCreateData = UserWalletAccountResponse;

export type UserWalletAccountsRetrieveData = UserWalletAccountResponse;

export type UserWalletAccountsUpdateData = UserWalletAccountResponse;

export type UserWalletAccountsPartialUpdateData = UserWalletAccountResponse;

export type UserWalletAccountsDestroyData = ActionResponse;

export type UserWalletAccountsAccountCurrenciesListData =
  ReducedAccountAssetListResponse;

export type UserWalletAccountsAccountCurrenciesCreateData =
  ReducedAccountAssetResponse;

export type UserWalletAccountsAccountCurrenciesRetrieveData =
  AccountAssetResponse;

export type UserWalletAccountsAccountCurrenciesDestroyData = ActionResponse;

export interface UserWalletAccountsCurrenciesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\d+$ */
  id: string;
}

export type UserWalletAccountsCurrenciesListData =
  PaginatedUserWalletAccountAssetListResponse;

export type UserWalletAccountsCurrenciesCreateData =
  UserWalletAccountAssetResponse;

export type UserWalletAccountsCurrenciesRetrieveData =
  UserWalletAccountAssetResponse;

export type UserWalletAccountsCurrenciesDestroyData = ActionResponse;

// Import the shared http client instead of generating a new one
export * from "../../shared/http-client.js";
import { HttpClient } from "../../shared/http-client.js";

// Note: We don't need a specialized HttpClient class since we're using the shared one
// The shared HttpClient is imported and re-exported above

/**
 * @title Platform API
 * @version 3 (3)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://api.rehive.com
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **Platform API** is the core component of the Rehive ecosystem. It provides authentication for platform users as well as access user-scoped resources.
 *
 * The **Platform Admin API** documentation can be found below:
 *
 * - [API specification](https://api.rehive.com/?api=rehive-platform-admin-api)
 * - [Swagger specification](https://api.rehive.com/admin/swagger)
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
     * @tags account-currencies
     * @name AccountCurrenciesList
     * @summary List account currencies
     * @request GET:/3/account-currencies/
     * @secure
     */
    accountCurrenciesList: (
      query: AccountCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountCurrenciesListData, any>({
        path: `/3/account-currencies/`,
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
     * @request GET:/3/account-definitions/
     * @secure
     */
    accountDefinitionsList: (
      query: AccountDefinitionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsListData, any>({
        path: `/3/account-definitions/`,
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
     * @name AccountDefinitionsRetrieve
     * @summary Retrieve account definition
     * @request GET:/3/account-definitions/{definition_name}/
     * @secure
     */
    accountDefinitionsRetrieve: (
      definitionName: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountDefinitionsRetrieveData, any>({
        path: `/3/account-definitions/${definitionName}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsList
     * @summary List accounts
     * @request GET:/3/accounts/
     * @secure
     */
    accountsList: (query: AccountsListParams, params: RequestParams = {}) =>
      this.request<AccountsListData, any>({
        path: `/3/accounts/`,
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
     * @summary Create account
     * @request POST:/3/accounts/
     * @secure
     */
    accountsCreate: (data: Account, params: RequestParams = {}) =>
      this.request<AccountsCreateData, any>({
        path: `/3/accounts/`,
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
     * @tags accounts
     * @name AccountsRetrieve
     * @summary Retrieve account
     * @request GET:/3/accounts/{reference}/
     * @secure
     */
    accountsRetrieve: (reference: string, params: RequestParams = {}) =>
      this.request<AccountsRetrieveData, any>({
        path: `/3/accounts/${reference}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name AccountsCurrenciesList
     * @summary List account currencies
     * @request GET:/3/accounts/{reference}/currencies/
     * @secure
     */
    accountsCurrenciesList: (
      { reference, ...query }: AccountsCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesListData, any>({
        path: `/3/accounts/${reference}/currencies/`,
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
     * @request POST:/3/accounts/{reference}/currencies/
     * @secure
     */
    accountsCurrenciesCreate: (
      reference: string,
      data: CreateAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesCreateData, any>({
        path: `/3/accounts/${reference}/currencies/`,
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
     * @tags accounts
     * @name AccountsCurrenciesRetrieve
     * @summary Retrieve account currency
     * @request GET:/3/accounts/{reference}/currencies/{code}/
     * @secure
     */
    accountsCurrenciesRetrieve: (
      code: string,
      reference: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesRetrieveData, any>({
        path: `/3/accounts/${reference}/currencies/${code}/`,
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
     * @request PUT:/3/accounts/{reference}/currencies/{code}/
     * @secure
     */
    accountsCurrenciesUpdate: (
      code: string,
      reference: string,
      data: AccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesUpdateData, any>({
        path: `/3/accounts/${reference}/currencies/${code}/`,
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
     * @tags accounts
     * @name AccountsCurrenciesPartialUpdate
     * @summary Partially update account currency
     * @request PATCH:/3/accounts/{reference}/currencies/{code}/
     * @secure
     */
    accountsCurrenciesPartialUpdate: (
      code: string,
      reference: string,
      data: PatchedAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesPartialUpdateData, any>({
        path: `/3/accounts/${reference}/currencies/${code}/`,
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
     * @tags accounts
     * @name AccountsCurrenciesFeesList
     * @summary List account currency fees
     * @request GET:/3/accounts/{reference}/currencies/{code}/fees/
     * @secure
     */
    accountsCurrenciesFeesList: (
      { code, reference, ...query }: AccountsCurrenciesFeesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesFeesListData, any>({
        path: `/3/accounts/${reference}/currencies/${code}/fees/`,
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
     * @name AccountsCurrenciesFeesRetrieve
     * @summary Retrieve account currency fees
     * @request GET:/3/accounts/{reference}/currencies/{code}/fees/{fee_id}/
     * @secure
     */
    accountsCurrenciesFeesRetrieve: (
      code: string,
      feeId: string,
      reference: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesFeesRetrieveData, any>({
        path: `/3/accounts/${reference}/currencies/${code}/fees/${feeId}/`,
        method: "GET",
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
     * @request GET:/3/accounts/{reference}/currencies/{code}/limits/
     * @secure
     */
    accountsCurrenciesLimitsList: (
      { code, reference, ...query }: AccountsCurrenciesLimitsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesLimitsListData, any>({
        path: `/3/accounts/${reference}/currencies/${code}/limits/`,
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
     * @name AccountsCurrenciesLimitsRetrieve
     * @summary Retrieve account currency limit
     * @request GET:/3/accounts/{reference}/currencies/{code}/limits/{limit_id}/
     * @secure
     */
    accountsCurrenciesLimitsRetrieve: (
      code: string,
      limitId: string,
      reference: string,
      params: RequestParams = {},
    ) =>
      this.request<AccountsCurrenciesLimitsRetrieveData, any>({
        path: `/3/accounts/${reference}/currencies/${code}/limits/${limitId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthRetrieve
     * @summary Retrieve auth
     * @request GET:/3/auth/
     * @secure
     */
    authRetrieve: (params: RequestParams = {}) =>
      this.request<AuthRetrieveData, any>({
        path: `/3/auth/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthRegisterCompany
     * @summary Register company
     * @request POST:/3/auth/company/register/
     * @secure
     */
    authRegisterCompany: (data: RegisterCompany, params: RequestParams = {}) =>
      this.request<AuthRegisterCompanyData, any>({
        path: `/3/auth/company/register/`,
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
     * @tags auth
     * @name AuthDeactivate
     * @summary Deactivate
     * @request POST:/3/auth/deactivate/
     * @secure
     */
    authDeactivate: (data: Deactivate, params: RequestParams = {}) =>
      this.request<AuthDeactivateData, any>({
        path: `/3/auth/deactivate/`,
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
     * @tags auth
     * @name AuthDeactivateVerify
     * @summary Verify deactivation
     * @request POST:/3/auth/deactivate/verify/
     * @secure
     */
    authDeactivateVerify: (
      data: VerifyDeactivate,
      params: RequestParams = {},
    ) =>
      this.request<AuthDeactivateVerifyData, any>({
        path: `/3/auth/deactivate/verify/`,
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
     * @tags auth
     * @name AuthEmailVerify
     * @summary Verify email
     * @request POST:/3/auth/email/verify/
     * @secure
     */
    authEmailVerify: (data: VerifyEmail, params: RequestParams = {}) =>
      this.request<AuthEmailVerifyData, any>({
        path: `/3/auth/email/verify/`,
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
     * @tags auth
     * @name AuthEmailVerifyResend
     * @summary Resend email verify
     * @request POST:/3/auth/email/verify/resend/
     * @secure
     */
    authEmailVerifyResend: (
      data: ResendVerifyEmail,
      params: RequestParams = {},
    ) =>
      this.request<AuthEmailVerifyResendData, any>({
        path: `/3/auth/email/verify/resend/`,
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
     * @tags auth
     * @name AuthJwtCreate
     * @request POST:/3/auth/jwt/
     * @secure
     */
    authJwtCreate: (data: CreateJWT, params: RequestParams = {}) =>
      this.request<AuthJwtCreateData, any>({
        path: `/3/auth/jwt/`,
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
     * @tags auth
     * @name AuthLogin
     * @summary Login
     * @request POST:/3/auth/login/
     * @secure
     */
    authLogin: (data: Login, params: RequestParams = {}) =>
      this.request<AuthLoginData, any>({
        path: `/3/auth/login/`,
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
     * @tags auth
     * @name AuthLogout
     * @summary Logout
     * @request POST:/3/auth/logout/
     * @secure
     */
    authLogout: (data: Logout, params: RequestParams = {}) =>
      this.request<AuthLogoutData, any>({
        path: `/3/auth/logout/`,
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
     * @tags auth
     * @name AuthMfaAuthenticatorsList
     * @summary List MFA authenticators
     * @request GET:/3/auth/mfa/authenticators/
     * @secure
     */
    authMfaAuthenticatorsList: (
      query: AuthMfaAuthenticatorsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AuthMfaAuthenticatorsListData, any>({
        path: `/3/auth/mfa/authenticators/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthMfaAuthenticatorsCreate
     * @summary Create MFA authenticator
     * @request POST:/3/auth/mfa/authenticators/
     * @secure
     */
    authMfaAuthenticatorsCreate: (
      data: CreateMFAAuthenticator,
      params: RequestParams = {},
    ) =>
      this.request<AuthMfaAuthenticatorsCreateData, any>({
        path: `/3/auth/mfa/authenticators/`,
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
     * @tags auth
     * @name AuthMfaAuthenticatorsRetrieve
     * @summary Retreieve MFA authenticator
     * @request GET:/3/auth/mfa/authenticators/{identifier}/
     * @secure
     */
    authMfaAuthenticatorsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AuthMfaAuthenticatorsRetrieveData, any>({
        path: `/3/auth/mfa/authenticators/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthMfaAuthenticatorsDestroy
     * @summary Delete MFA authenticator
     * @request DELETE:/3/auth/mfa/authenticators/{identifier}/
     * @secure
     */
    authMfaAuthenticatorsDestroy: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AuthMfaAuthenticatorsDestroyData, any>({
        path: `/3/auth/mfa/authenticators/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthMfaDeliver
     * @summary Deliver MFA
     * @request POST:/3/auth/mfa/deliver/
     * @secure
     */
    authMfaDeliver: (data: MFADeliver, params: RequestParams = {}) =>
      this.request<AuthMfaDeliverData, any>({
        path: `/3/auth/mfa/deliver/`,
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
     * @tags auth
     * @name AuthMfaVerify
     * @summary Verify MFA
     * @request POST:/3/auth/mfa/verify/
     * @secure
     */
    authMfaVerify: (data: MFAVerify, params: RequestParams = {}) =>
      this.request<AuthMfaVerifyData, any>({
        path: `/3/auth/mfa/verify/`,
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
     * @tags auth
     * @name AuthMobileVerify
     * @summary Verify mobile
     * @request POST:/3/auth/mobile/verify/
     * @secure
     */
    authMobileVerify: (data: VerifyMobile, params: RequestParams = {}) =>
      this.request<AuthMobileVerifyData, any>({
        path: `/3/auth/mobile/verify/`,
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
     * @tags auth
     * @name AuthMobileVerifyResend
     * @summary Resend mobile verify
     * @request POST:/3/auth/mobile/verify/resend/
     * @secure
     */
    authMobileVerifyResend: (
      data: ResendVerifyMobile,
      params: RequestParams = {},
    ) =>
      this.request<AuthMobileVerifyResendData, any>({
        path: `/3/auth/mobile/verify/resend/`,
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
     * @tags auth
     * @name AuthOauthAuthorizeCreate
     * @request POST:/3/auth/oauth/authorize/
     * @secure
     */
    authOauthAuthorizeCreate: (
      data: OauthAuthorize,
      params: RequestParams = {},
    ) =>
      this.request<AuthOauthAuthorizeCreateData, any>({
        path: `/3/auth/oauth/authorize/`,
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
     * @tags auth
     * @name AuthOauthLoginCreate
     * @request POST:/3/auth/oauth/login/
     * @secure
     */
    authOauthLoginCreate: (data: OauthLogin, params: RequestParams = {}) =>
      this.request<AuthOauthLoginCreateData, any>({
        path: `/3/auth/oauth/login/`,
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
     * @tags auth
     * @name AuthOauthRegisterCreate
     * @request POST:/3/auth/oauth/register/
     * @secure
     */
    authOauthRegisterCreate: (
      data: OauthRegister,
      params: RequestParams = {},
    ) =>
      this.request<AuthOauthRegisterCreateData, any>({
        path: `/3/auth/oauth/register/`,
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
     * @tags auth
     * @name AuthOauthSessionCreate
     * @request POST:/3/auth/oauth/session/
     * @secure
     */
    authOauthSessionCreate: (data: OauthSession, params: RequestParams = {}) =>
      this.request<AuthOauthSessionCreateData, any>({
        path: `/3/auth/oauth/session/`,
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
     * @tags auth
     * @name AuthOauthVerifyCreate
     * @request POST:/3/auth/oauth/verify/
     * @secure
     */
    authOauthVerifyCreate: (data: OauthVerify, params: RequestParams = {}) =>
      this.request<AuthOauthVerifyCreateData, any>({
        path: `/3/auth/oauth/verify/`,
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
     * @tags auth
     * @name AuthPasswordChange
     * @summary Change password
     * @request POST:/3/auth/password/change/
     * @secure
     */
    authPasswordChange: (data: PasswordChange, params: RequestParams = {}) =>
      this.request<AuthPasswordChangeData, any>({
        path: `/3/auth/password/change/`,
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
     * @tags auth
     * @name AuthPasswordReset
     * @summary Reset password
     * @request POST:/3/auth/password/reset/
     * @secure
     */
    authPasswordReset: (data: PasswordReset, params: RequestParams = {}) =>
      this.request<AuthPasswordResetData, any>({
        path: `/3/auth/password/reset/`,
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
     * @tags auth
     * @name AuthPasswordResetConfirm
     * @summary Confirm password reset
     * @request POST:/3/auth/password/reset/confirm/
     * @secure
     */
    authPasswordResetConfirm: (
      data: PasswordResetConfirm,
      params: RequestParams = {},
    ) =>
      this.request<AuthPasswordResetConfirmData, any>({
        path: `/3/auth/password/reset/confirm/`,
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
     * @tags auth
     * @name AuthRefreshCreate
     * @request POST:/3/auth/refresh/
     * @secure
     */
    authRefreshCreate: (data: Refresh, params: RequestParams = {}) =>
      this.request<AuthRefreshCreateData, any>({
        path: `/3/auth/refresh/`,
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
     * @tags auth
     * @name AuthRegister
     * @summary Register
     * @request POST:/3/auth/register/
     * @secure
     */
    authRegister: (data: Register, params: RequestParams = {}) =>
      this.request<AuthRegisterData, any>({
        path: `/3/auth/register/`,
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
     * @tags auth
     * @name AuthRequestDelete
     * @summary Request delete
     * @request POST:/3/auth/request-delete/
     * @secure
     */
    authRequestDelete: (data: RequestDelete, params: RequestParams = {}) =>
      this.request<AuthRequestDeleteData, any>({
        path: `/3/auth/request-delete/`,
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
     * @tags auth
     * @name AuthRequestDeleteVerify
     * @summary Verify request delete
     * @request POST:/3/auth/request-delete/verify/
     * @secure
     */
    authRequestDeleteVerify: (
      data: VerifyRequestDelete,
      params: RequestParams = {},
    ) =>
      this.request<AuthRequestDeleteVerifyData, any>({
        path: `/3/auth/request-delete/verify/`,
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
     * @tags auth
     * @name AuthTokensList
     * @summary List auth tokens
     * @request GET:/3/auth/tokens/
     * @secure
     */
    authTokensList: (query: AuthTokensListParams, params: RequestParams = {}) =>
      this.request<AuthTokensListData, any>({
        path: `/3/auth/tokens/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthTokensCreate
     * @summary Create auth token
     * @request POST:/3/auth/tokens/
     * @secure
     */
    authTokensCreate: (data: CreateAuthToken, params: RequestParams = {}) =>
      this.request<AuthTokensCreateData, any>({
        path: `/3/auth/tokens/`,
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
     * @tags auth
     * @name AuthTokensListDestroy
     * @summary Delete auth tokens
     * @request DELETE:/3/auth/tokens/
     * @secure
     */
    authTokensListDestroy: (params: RequestParams = {}) =>
      this.request<AuthTokensListDestroyData, any>({
        path: `/3/auth/tokens/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthTokensRetrieve
     * @summary Retrieve auth token
     * @request GET:/3/auth/tokens/{token_key}/
     * @secure
     */
    authTokensRetrieve: (tokenKey: string, params: RequestParams = {}) =>
      this.request<AuthTokensRetrieveData, any>({
        path: `/3/auth/tokens/${tokenKey}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthTokensDestroy
     * @summary Delete auth token
     * @request DELETE:/3/auth/tokens/{token_key}/
     * @secure
     */
    authTokensDestroy: (tokenKey: string, params: RequestParams = {}) =>
      this.request<AuthTokensDestroyData, any>({
        path: `/3/auth/tokens/${tokenKey}/`,
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
     * @request GET:/3/company/
     * @secure
     */
    companyRetrieve: (params: RequestParams = {}) =>
      this.request<CompanyRetrieveData, any>({
        path: `/3/company/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name CompanyBankAccountsList
     * @summary List bank accounts
     * @request GET:/3/company/bank-accounts/
     * @secure
     */
    companyBankAccountsList: (
      query: CompanyBankAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<CompanyBankAccountsListData, any>({
        path: `/3/company/bank-accounts/`,
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
     * @name CompanyCurrenciesList
     * @summary List currencies
     * @request GET:/3/company/currencies/
     * @secure
     */
    companyCurrenciesList: (
      query: CompanyCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<CompanyCurrenciesListData, any>({
        path: `/3/company/currencies/`,
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
     * @name CompanyCurrenciesRetrieve
     * @summary Retrieve currency
     * @request GET:/3/company/currencies/{code}/
     * @secure
     */
    companyCurrenciesRetrieve: (code: string, params: RequestParams = {}) =>
      this.request<CompanyCurrenciesRetrieveData, any>({
        path: `/3/company/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name CompanyWalletAccountsList
     * @summary List wallet accounts
     * @request GET:/3/company/wallet-accounts/
     * @secure
     */
    companyWalletAccountsList: (
      query: CompanyWalletAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<CompanyWalletAccountsListData, any>({
        path: `/3/company/wallet-accounts/`,
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
     * @name DocumentTypesList
     * @summary List document types
     * @request GET:/3/document-types/
     * @secure
     */
    documentTypesList: (
      query: DocumentTypesListParams,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTypesListData, any>({
        path: `/3/document-types/`,
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
     * @name DocumentTypesRetrieve
     * @summary Retrieve document type
     * @request GET:/3/document-types/{id}/
     * @secure
     */
    documentTypesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<DocumentTypesRetrieveData, any>({
        path: `/3/document-types/${id}/`,
        method: "GET",
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
     * @request GET:/3/exports/
     * @secure
     */
    exportsList: (query: ExportsListParams, params: RequestParams = {}) =>
      this.request<ExportsListData, any>({
        path: `/3/exports/`,
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
     * @request POST:/3/exports/
     * @secure
     */
    exportsCreate: (data: CreateExport, params: RequestParams = {}) =>
      this.request<ExportsCreateData, any>({
        path: `/3/exports/`,
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
     * @tags exports
     * @name ExportsRetrieve
     * @summary Retrieve export
     * @request GET:/3/exports/{identifier}/
     * @secure
     */
    exportsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<ExportsRetrieveData, any>({
        path: `/3/exports/${identifier}/`,
        method: "GET",
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
     * @request GET:/3/groups/
     * @secure
     */
    groupsList: (query: GroupsListParams, params: RequestParams = {}) =>
      this.request<GroupsListData, any>({
        path: `/3/groups/`,
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
     * @name GroupsRetrieve
     * @summary Retrieve group
     * @request GET:/3/groups/{group_name}/
     * @secure
     */
    groupsRetrieve: (groupName: string, params: RequestParams = {}) =>
      this.request<GroupsRetrieveData, any>({
        path: `/3/groups/${groupName}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsFeesList
     * @summary List fees
     * @request GET:/3/groups/{group_name}/fees/
     * @secure
     */
    groupsFeesList: (
      { groupName, ...query }: GroupsFeesListParams,
      params: RequestParams = {},
    ) =>
      this.request<GroupsFeesListData, any>({
        path: `/3/groups/${groupName}/fees/`,
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
     * @name GroupsFeesRetrieve
     * @summary Retrieve fee
     * @request GET:/3/groups/{group_name}/fees/{fee_id}/
     * @secure
     */
    groupsFeesRetrieve: (
      feeId: string,
      groupName: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsFeesRetrieveData, any>({
        path: `/3/groups/${groupName}/fees/${feeId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsPermissionsList
     * @summary List permissions
     * @request GET:/3/groups/{group_name}/permissions/
     * @secure
     */
    groupsPermissionsList: (
      { groupName, ...query }: GroupsPermissionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<GroupsPermissionsListData, any>({
        path: `/3/groups/${groupName}/permissions/`,
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
     * @name GroupsPermissionsRetrieve
     * @summary Retrieve permission
     * @request GET:/3/groups/{group_name}/permissions/{permission_id}/
     * @secure
     */
    groupsPermissionsRetrieve: (
      groupName: string,
      permissionId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsPermissionsRetrieveData, any>({
        path: `/3/groups/${groupName}/permissions/${permissionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersList
     * @summary List tiers
     * @request GET:/3/groups/{group_name}/tiers/
     * @secure
     */
    groupsTiersList: (
      { groupName, ...query }: GroupsTiersListParams,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersListData, any>({
        path: `/3/groups/${groupName}/tiers/`,
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
     * @name GroupsTiersRetrieve
     * @summary Retrieve tier
     * @request GET:/3/groups/{group_name}/tiers/{tier_id}/
     * @secure
     */
    groupsTiersRetrieve: (
      groupName: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRetrieveData, any>({
        path: `/3/groups/${groupName}/tiers/${tierId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersFeesList
     * @summary List tier fees
     * @request GET:/3/groups/{group_name}/tiers/{tier_id}/fees/
     * @secure
     */
    groupsTiersFeesList: (
      { groupName, tierId, ...query }: GroupsTiersFeesListParams,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersFeesListData, any>({
        path: `/3/groups/${groupName}/tiers/${tierId}/fees/`,
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
     * @name GroupsTiersFeesRetrieve
     * @summary Retrieve tier fee
     * @request GET:/3/groups/{group_name}/tiers/{tier_id}/fees/{fee_id}/
     * @secure
     */
    groupsTiersFeesRetrieve: (
      feeId: string,
      groupName: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersFeesRetrieveData, any>({
        path: `/3/groups/${groupName}/tiers/${tierId}/fees/${feeId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags groups
     * @name GroupsTiersLimitsList
     * @summary List tier limits
     * @request GET:/3/groups/{group_name}/tiers/{tier_id}/limits/
     * @secure
     */
    groupsTiersLimitsList: (
      { groupName, tierId, ...query }: GroupsTiersLimitsListParams,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersLimitsListData, any>({
        path: `/3/groups/${groupName}/tiers/${tierId}/limits/`,
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
     * @name GroupsTiersLimitsRetrieve
     * @summary Retrieve tier limit
     * @request GET:/3/groups/{group_name}/tiers/{tier_id}/limits/{limit_id}/
     * @secure
     */
    groupsTiersLimitsRetrieve: (
      groupName: string,
      limitId: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersLimitsRetrieveData, any>({
        path: `/3/groups/${groupName}/tiers/${tierId}/limits/${limitId}/`,
        method: "GET",
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
     * @request GET:/3/groups/{group_name}/tiers/{tier_id}/requirement-sets/
     * @secure
     */
    groupsTiersRequirementSetsList: (
      { groupName, tierId, ...query }: GroupsTiersRequirementSetsListParams,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsListData, any>({
        path: `/3/groups/${groupName}/tiers/${tierId}/requirement-sets/`,
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
     * @name GroupsTiersRequirementSetsRetrieve
     * @summary Retrieve tier requirement set
     * @request GET:/3/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/
     * @secure
     */
    groupsTiersRequirementSetsRetrieve: (
      groupName: string,
      reqSetId: string,
      tierId: string,
      params: RequestParams = {},
    ) =>
      this.request<GroupsTiersRequirementSetsRetrieveData, any>({
        path: `/3/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/`,
        method: "GET",
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
     * @request GET:/3/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/
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
        path: `/3/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/items/`,
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
     * @name GroupsTiersRequirementSetsItemsRetrieve
     * @summary Retrieve tier requirement set item
     * @request GET:/3/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/{req_item_id}/
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
        path: `/3/groups/${groupName}/tiers/${tierId}/requirement-sets/${reqSetId}/items/${reqItemId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags metrics
     * @name MetricsList
     * @summary List metric
     * @request GET:/3/metrics/
     * @secure
     */
    metricsList: (query: MetricsListParams, params: RequestParams = {}) =>
      this.request<MetricsListData, any>({
        path: `/3/metrics/`,
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
     * @request POST:/3/metrics/
     * @secure
     */
    metricsCreate: (data: CreateMetric, params: RequestParams = {}) =>
      this.request<MetricsCreateData, any>({
        path: `/3/metrics/`,
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
     * @tags metrics
     * @name MetricsRetrieve
     * @summary Retrieve metric
     * @request GET:/3/metrics/{identifier}/
     * @secure
     */
    metricsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<MetricsRetrieveData, any>({
        path: `/3/metrics/${identifier}/`,
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
     * @request DELETE:/3/metrics/{identifier}/
     * @secure
     */
    metricsDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<MetricsDestroyData, any>({
        path: `/3/metrics/${identifier}/`,
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
     * @request GET:/3/metrics/{identifier}/points/
     * @secure
     */
    metricsPointsList: (
      { identifier, ...query }: MetricsPointsListParams,
      params: RequestParams = {},
    ) =>
      this.request<MetricsPointsListData, any>({
        path: `/3/metrics/${identifier}/points/`,
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
     * @name PermissionsList
     * @summary List permissions
     * @request GET:/3/permissions/
     * @secure
     */
    permissionsList: (
      query: PermissionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<PermissionsListData, any>({
        path: `/3/permissions/`,
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
     * @summary Retrieve permission
     * @request GET:/3/permissions/{permission_id}/
     * @secure
     */
    permissionsRetrieve: (permissionId: string, params: RequestParams = {}) =>
      this.request<PermissionsRetrieveData, any>({
        path: `/3/permissions/${permissionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags public
     * @name PublicCompaniesList
     * @summary List public companies
     * @request GET:/3/public/companies/
     * @secure
     */
    publicCompaniesList: (
      query: PublicCompaniesListParams,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompaniesListData, any>({
        path: `/3/public/companies/`,
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
     * @name PublicCompaniesRetrieve
     * @summary Retrieve public company
     * @request GET:/3/public/companies/{id}/
     * @secure
     */
    publicCompaniesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<PublicCompaniesRetrieveData, any>({
        path: `/3/public/companies/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags public
     * @name PublicCompaniesGroupsList
     * @summary List public company groups
     * @request GET:/3/public/companies/{id}/groups/
     * @secure
     */
    publicCompaniesGroupsList: (
      { id, ...query }: PublicCompaniesGroupsListParams,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompaniesGroupsListData, any>({
        path: `/3/public/companies/${id}/groups/`,
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
     * @name PublicCompaniesGroupsRetrieve
     * @summary Retrieve public company group
     * @request GET:/3/public/companies/{id}/groups/{group_name}/
     * @secure
     */
    publicCompaniesGroupsRetrieve: (
      groupName: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompaniesGroupsRetrieveData, any>({
        path: `/3/public/companies/${id}/groups/${groupName}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags public
     * @name PublicCompaniesLegalTermsList
     * @summary List public company legal terms
     * @request GET:/3/public/companies/{id}/legal-terms/
     * @secure
     */
    publicCompaniesLegalTermsList: (
      { id, ...query }: PublicCompaniesLegalTermsListParams,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompaniesLegalTermsListData, any>({
        path: `/3/public/companies/${id}/legal-terms/`,
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
     * @name PublicCompaniesLegalTermsRetrieve
     * @summary Retrieve public company legal terms
     * @request GET:/3/public/companies/{id}/legal-terms/{term_id}/
     * @secure
     */
    publicCompaniesLegalTermsRetrieve: (
      id: string,
      termId: string,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompaniesLegalTermsRetrieveData, any>({
        path: `/3/public/companies/${id}/legal-terms/${termId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags public
     * @name PublicCompaniesLegalTermsVersionsList
     * @summary List public company legal term versions
     * @request GET:/3/public/companies/{id}/legal-terms/{term_id}/versions/
     * @secure
     */
    publicCompaniesLegalTermsVersionsList: (
      { id, termId, ...query }: PublicCompaniesLegalTermsVersionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompaniesLegalTermsVersionsListData, any>({
        path: `/3/public/companies/${id}/legal-terms/${termId}/versions/`,
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
     * @name PublicCompaniesLegalTermsVersionsRetrieve
     * @summary Retrieve public company legal term version
     * @request GET:/3/public/companies/{id}/legal-terms/{term_id}/versions/{version_id}/
     * @secure
     */
    publicCompaniesLegalTermsVersionsRetrieve: (
      id: string,
      termId: string,
      versionId: string,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompaniesLegalTermsVersionsRetrieveData, any>({
        path: `/3/public/companies/${id}/legal-terms/${termId}/versions/${versionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags public
     * @name PublicCompaniesOauthClientsList
     * @request GET:/3/public/companies/{id}/oauth-clients/
     * @secure
     */
    publicCompaniesOauthClientsList: (
      { id, ...query }: PublicCompaniesOauthClientsListParams,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompaniesOauthClientsListData, any>({
        path: `/3/public/companies/${id}/oauth-clients/`,
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
     * @name PublicCompaniesOauthClientsRetrieve
     * @request GET:/3/public/companies/{id}/oauth-clients/{identifier}/
     * @secure
     */
    publicCompaniesOauthClientsRetrieve: (
      id: string,
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<PublicCompaniesOauthClientsRetrieveData, any>({
        path: `/3/public/companies/${id}/oauth-clients/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags public
     * @name PublicLegalTermsList
     * @summary List public legal terms
     * @request GET:/3/public/legal-terms/
     * @secure
     */
    publicLegalTermsList: (
      query: PublicLegalTermsListParams,
      params: RequestParams = {},
    ) =>
      this.request<PublicLegalTermsListData, any>({
        path: `/3/public/legal-terms/`,
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
     * @name PublicLegalTermsRetrieve
     * @summary Retrieve public legal terms
     * @request GET:/3/public/legal-terms/{term_id}/
     * @secure
     */
    publicLegalTermsRetrieve: (termId: string, params: RequestParams = {}) =>
      this.request<PublicLegalTermsRetrieveData, any>({
        path: `/3/public/legal-terms/${termId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags public
     * @name PublicLegalTermsVersionsList
     * @summary List public legal term versions
     * @request GET:/3/public/legal-terms/{term_id}/versions/
     * @secure
     */
    publicLegalTermsVersionsList: (
      { termId, ...query }: PublicLegalTermsVersionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<PublicLegalTermsVersionsListData, any>({
        path: `/3/public/legal-terms/${termId}/versions/`,
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
     * @name PublicLegalTermsVersionsRetrieve
     * @summary Retrieve public legal term version
     * @request GET:/3/public/legal-terms/{term_id}/versions/{version_id}/
     * @secure
     */
    publicLegalTermsVersionsRetrieve: (
      termId: string,
      versionId: string,
      params: RequestParams = {},
    ) =>
      this.request<PublicLegalTermsVersionsRetrieveData, any>({
        path: `/3/public/legal-terms/${termId}/versions/${versionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags statements
     * @name StatementsList
     * @request GET:/3/statements/
     * @secure
     */
    statementsList: (query: StatementsListParams, params: RequestParams = {}) =>
      this.request<StatementsListData, any>({
        path: `/3/statements/`,
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
     * @request POST:/3/statements/
     * @secure
     */
    statementsCreate: (data: CreateStatement, params: RequestParams = {}) =>
      this.request<StatementsCreateData, any>({
        path: `/3/statements/`,
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
     * @tags statements
     * @name StatementsRetrieve
     * @request GET:/3/statements/{identifier}/
     * @secure
     */
    statementsRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<StatementsRetrieveData, any>({
        path: `/3/statements/${identifier}/`,
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
     * @request DELETE:/3/statements/{identifier}/
     * @secure
     */
    statementsDestroy: (identifier: string, params: RequestParams = {}) =>
      this.request<StatementsDestroyData, any>({
        path: `/3/statements/${identifier}/`,
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
     * @request GET:/3/subtypes/
     * @secure
     */
    subtypesList: (query: SubtypesListParams, params: RequestParams = {}) =>
      this.request<SubtypesListData, any>({
        path: `/3/subtypes/`,
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
     * @name SubtypesRetrieve
     * @summary Retrieve subtype
     * @request GET:/3/subtypes/{id}/
     * @secure
     */
    subtypesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<SubtypesRetrieveData, any>({
        path: `/3/subtypes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transaction-collections
     * @name TransactionCollectionsList
     * @summary List transaction collections
     * @request GET:/3/transaction-collections/
     * @secure
     */
    transactionCollectionsList: (
      query: TransactionCollectionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<TransactionCollectionsListData, any>({
        path: `/3/transaction-collections/`,
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
     * @summary Create transaction collection
     * @request POST:/3/transaction-collections/
     * @secure
     */
    transactionCollectionsCreate: (
      data: CreateTransactionCollection,
      params: RequestParams = {},
    ) =>
      this.request<TransactionCollectionsCreateData, any>({
        path: `/3/transaction-collections/`,
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
     * @tags transaction-collections
     * @name TransactionCollectionsRetrieve
     * @summary Retrieve transaction collection
     * @request GET:/3/transaction-collections/{identifier}/
     * @secure
     */
    transactionCollectionsRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<TransactionCollectionsRetrieveData, any>({
        path: `/3/transaction-collections/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags transactions
     * @name TransactionsList
     * @summary List transactions
     * @request GET:/3/transactions/
     * @secure
     */
    transactionsList: (
      query: TransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsListData, any>({
        path: `/3/transactions/`,
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
     * @request POST:/3/transactions/
     * @secure
     */
    transactionsCreate: (
      data: CreateMultiTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsCreateData, any>({
        path: `/3/transactions/`,
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
     * @tags transactions
     * @name TransactionsRetrieve
     * @summary Retrieve transaction
     * @request GET:/3/transactions/{tx_code}/
     * @secure
     */
    transactionsRetrieve: (txCode: string, params: RequestParams = {}) =>
      this.request<TransactionsRetrieveData, any>({
        path: `/3/transactions/${txCode}/`,
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
     * @request PUT:/3/transactions/{tx_code}/
     * @secure
     */
    transactionsUpdate: (
      txCode: string,
      data: UpdateExtendedTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsUpdateData, any>({
        path: `/3/transactions/${txCode}/`,
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
     * @tags transactions
     * @name TransactionsPartialUpdate
     * @summary Partially update transaction
     * @request PATCH:/3/transactions/{tx_code}/
     * @secure
     */
    transactionsPartialUpdate: (
      txCode: string,
      data: PatchedUpdateExtendedTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsPartialUpdateData, any>({
        path: `/3/transactions/${txCode}/`,
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
     * @tags transactions
     * @name TransactionsMessagesList
     * @summary List transaction messages
     * @request GET:/3/transactions/{tx_code}/messages/
     * @secure
     */
    transactionsMessagesList: (
      { txCode, ...query }: TransactionsMessagesListParams,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsMessagesListData, any>({
        path: `/3/transactions/${txCode}/messages/`,
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
     * @name TransactionsMessagesRetrieve
     * @summary Retrieve transaction message
     * @request GET:/3/transactions/{tx_code}/messages/{id}/
     * @secure
     */
    transactionsMessagesRetrieve: (
      id: string,
      txCode: string,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsMessagesRetrieveData, any>({
        path: `/3/transactions/${txCode}/messages/${id}/`,
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
     * @summary Create credit transaction
     * @request POST:/3/transactions/credit/
     * @secure
     */
    transactionsCreditCreate: (
      data: CreateCreditTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsCreditCreateData, any>({
        path: `/3/transactions/credit/`,
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
     * @tags transactions
     * @name TransactionsDebitCreate
     * @summary Create debit transaction
     * @request POST:/3/transactions/debit/
     * @secure
     */
    transactionsDebitCreate: (
      data: CreateDebitTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsDebitCreateData, any>({
        path: `/3/transactions/debit/`,
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
     * @tags transactions
     * @name TransactionTotalsRetrieve
     * @summary Retrieve transaction totals
     * @request GET:/3/transactions/totals/
     * @secure
     */
    transactionTotalsRetrieve: (params: RequestParams = {}) =>
      this.request<TransactionTotalsRetrieveData, any>({
        path: `/3/transactions/totals/`,
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
     * @summary Create transfer
     * @request POST:/3/transactions/transfer/
     * @secure
     */
    transactionsTransferCreate: (
      data: CreateTransferTransaction,
      params: RequestParams = {},
    ) =>
      this.request<TransactionsTransferCreateData, any>({
        path: `/3/transactions/transfer/`,
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
     * @tags user
     * @name UserRetrieve
     * @summary Retrieve user
     * @request GET:/3/user/
     * @secure
     */
    userRetrieve: (params: RequestParams = {}) =>
      this.request<UserRetrieveData, any>({
        path: `/3/user/`,
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
     * @request PUT:/3/user/
     * @secure
     */
    userUpdate: (data: ExtendedUserInfo, params: RequestParams = {}) =>
      this.request<UserUpdateData, any>({
        path: `/3/user/`,
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
     * @request PATCH:/3/user/
     * @secure
     */
    userPartialUpdate: (
      data: PatchedExtendedUserInfo,
      params: RequestParams = {},
    ) =>
      this.request<UserPartialUpdateData, any>({
        path: `/3/user/`,
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
     * @name UserAddressesList
     * @summary List addresses
     * @request GET:/3/user/addresses/
     * @secure
     */
    userAddressesList: (params: RequestParams = {}) =>
      this.request<UserAddressesListData, any>({
        path: `/3/user/addresses/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserAddressesCreate
     * @summary Create address
     * @request POST:/3/user/addresses/
     * @secure
     */
    userAddressesCreate: (data: UserAddress, params: RequestParams = {}) =>
      this.request<UserAddressesCreateData, any>({
        path: `/3/user/addresses/`,
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
     * @tags user
     * @name UserAddressesRetrieve
     * @summary Retrieve address
     * @request GET:/3/user/addresses/{id}/
     * @secure
     */
    userAddressesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserAddressesRetrieveData, any>({
        path: `/3/user/addresses/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserAddressesUpdate
     * @summary Update address
     * @request PUT:/3/user/addresses/{id}/
     * @secure
     */
    userAddressesUpdate: (
      id: string,
      data: UserAddress,
      params: RequestParams = {},
    ) =>
      this.request<UserAddressesUpdateData, any>({
        path: `/3/user/addresses/${id}/`,
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
     * @name UserAddressesPartialUpdate
     * @summary Partially update address
     * @request PATCH:/3/user/addresses/{id}/
     * @secure
     */
    userAddressesPartialUpdate: (
      id: string,
      data: PatchedUserAddress,
      params: RequestParams = {},
    ) =>
      this.request<UserAddressesPartialUpdateData, any>({
        path: `/3/user/addresses/${id}/`,
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
     * @name UserAddressesDestroy
     * @summary Delete address
     * @request DELETE:/3/user/addresses/{id}/
     * @secure
     */
    userAddressesDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UserAddressesDestroyData, any>({
        path: `/3/user/addresses/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserBankAccountsList
     * @summary List bank accounts
     * @request GET:/3/user/bank-accounts/
     * @secure
     */
    userBankAccountsList: (
      query: UserBankAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsListData, any>({
        path: `/3/user/bank-accounts/`,
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
     * @name UserBankAccountsCreate
     * @summary Create bank account
     * @request POST:/3/user/bank-accounts/
     * @secure
     */
    userBankAccountsCreate: (
      data: UserCreateBankAccount,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsCreateData, any>({
        path: `/3/user/bank-accounts/`,
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
     * @tags user
     * @name UserBankAccountsRetrieve
     * @summary Retrieve bank account
     * @request GET:/3/user/bank-accounts/{id}/
     * @secure
     */
    userBankAccountsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserBankAccountsRetrieveData, any>({
        path: `/3/user/bank-accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserBankAccountsUpdate
     * @summary Update bank account
     * @request PUT:/3/user/bank-accounts/{id}/
     * @secure
     */
    userBankAccountsUpdate: (
      id: string,
      data: UserBankAccount,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsUpdateData, any>({
        path: `/3/user/bank-accounts/${id}/`,
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
     * @name UserBankAccountsPartialUpdate
     * @summary Partially update bank account
     * @request PATCH:/3/user/bank-accounts/{id}/
     * @secure
     */
    userBankAccountsPartialUpdate: (
      id: string,
      data: PatchedUserBankAccount,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsPartialUpdateData, any>({
        path: `/3/user/bank-accounts/${id}/`,
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
     * @name UserBankAccountsDestroy
     * @summary Delete bank account
     * @request DELETE:/3/user/bank-accounts/{id}/
     * @secure
     */
    userBankAccountsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UserBankAccountsDestroyData, any>({
        path: `/3/user/bank-accounts/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserBankAccountsAccountCurrenciesList
     * @summary List bank-accounts account currencies
     * @request GET:/3/user/bank-accounts/{id}/account-currencies/
     * @secure
     */
    userBankAccountsAccountCurrenciesList: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsAccountCurrenciesListData, any>({
        path: `/3/user/bank-accounts/${id}/account-currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserBankAccountsAccountCurrenciesCreate
     * @summary Create bank-accounts account currency
     * @request POST:/3/user/bank-accounts/{id}/account-currencies/
     * @secure
     */
    userBankAccountsAccountCurrenciesCreate: (
      id: string,
      data: CreateUserBankAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsAccountCurrenciesCreateData, any>({
        path: `/3/user/bank-accounts/${id}/account-currencies/`,
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
     * @tags user
     * @name UserBankAccountsAccountCurrenciesRetrieve
     * @summary Retrieve bank-account account currency
     * @request GET:/3/user/bank-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    userBankAccountsAccountCurrenciesRetrieve: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsAccountCurrenciesRetrieveData, any>({
        path: `/3/user/bank-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserBankAccountsAccountCurrenciesDestroy
     * @summary Delete bank-account account currency
     * @request DELETE:/3/user/bank-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    userBankAccountsAccountCurrenciesDestroy: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsAccountCurrenciesDestroyData, any>({
        path: `/3/user/bank-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserBankAccountsCurrenciesList
     * @summary List bank account currencies
     * @request GET:/3/user/bank-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    userBankAccountsCurrenciesList: (id: string, params: RequestParams = {}) =>
      this.request<UserBankAccountsCurrenciesListData, any>({
        path: `/3/user/bank-accounts/${id}/currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserBankAccountsCurrenciesCreate
     * @summary Create bank account currency
     * @request POST:/3/user/bank-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    userBankAccountsCurrenciesCreate: (
      id: string,
      data: CreateUserBankAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsCurrenciesCreateData, any>({
        path: `/3/user/bank-accounts/${id}/currencies/`,
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
     * @tags user
     * @name UserBankAccountsCurrenciesRetrieve
     * @summary Retrieve bank account currency
     * @request GET:/3/user/bank-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    userBankAccountsCurrenciesRetrieve: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsCurrenciesRetrieveData, any>({
        path: `/3/user/bank-accounts/${id}/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserBankAccountsCurrenciesDestroy
     * @summary Delete bank account currency
     * @request DELETE:/3/user/bank-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    userBankAccountsCurrenciesDestroy: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserBankAccountsCurrenciesDestroyData, any>({
        path: `/3/user/bank-accounts/${id}/currencies/${code}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCryptoAccountsList
     * @summary List crypto accounts
     * @request GET:/3/user/crypto-accounts/
     * @secure
     */
    userCryptoAccountsList: (
      query: UserCryptoAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsListData, any>({
        path: `/3/user/crypto-accounts/`,
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
     * @name UserCryptoAccountsCreate
     * @summary Create crypto account
     * @request POST:/3/user/crypto-accounts/
     * @secure
     */
    userCryptoAccountsCreate: (
      data: CreateCryptoAccount,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsCreateData, any>({
        path: `/3/user/crypto-accounts/`,
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
     * @tags user
     * @name UserCryptoAccountsRetrieve
     * @summary Retrieve crypto account
     * @request GET:/3/user/crypto-accounts/{id}/
     * @secure
     */
    userCryptoAccountsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserCryptoAccountsRetrieveData, any>({
        path: `/3/user/crypto-accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCryptoAccountsUpdate
     * @summary Update crypto account
     * @request PUT:/3/user/crypto-accounts/{id}/
     * @secure
     */
    userCryptoAccountsUpdate: (
      id: string,
      data: CryptoAccount,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsUpdateData, any>({
        path: `/3/user/crypto-accounts/${id}/`,
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
     * @name UserCryptoAccountsPartialUpdate
     * @summary Partially update crypto account
     * @request PATCH:/3/user/crypto-accounts/{id}/
     * @secure
     */
    userCryptoAccountsPartialUpdate: (
      id: string,
      data: PatchedCryptoAccount,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsPartialUpdateData, any>({
        path: `/3/user/crypto-accounts/${id}/`,
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
     * @name UserCryptoAccountsDestroy
     * @summary Delete crypto account
     * @request DELETE:/3/user/crypto-accounts/{id}/
     * @secure
     */
    userCryptoAccountsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UserCryptoAccountsDestroyData, any>({
        path: `/3/user/crypto-accounts/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCryptoAccountsAccountCurrenciesList
     * @summary List crypto-accounts account currencies
     * @request GET:/3/user/crypto-accounts/{id}/account-currencies/
     * @secure
     */
    userCryptoAccountsAccountCurrenciesList: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsAccountCurrenciesListData, any>({
        path: `/3/user/crypto-accounts/${id}/account-currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCryptoAccountsAccountCurrenciesCreate
     * @summary Create crypto-accounts account currency
     * @request POST:/3/user/crypto-accounts/{id}/account-currencies/
     * @secure
     */
    userCryptoAccountsAccountCurrenciesCreate: (
      id: string,
      data: CreateCryptoAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsAccountCurrenciesCreateData, any>({
        path: `/3/user/crypto-accounts/${id}/account-currencies/`,
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
     * @tags user
     * @name UserCryptoAccountsAccountCurrenciesRetrieve
     * @summary Retrieve crypto-account account currency
     * @request GET:/3/user/crypto-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    userCryptoAccountsAccountCurrenciesRetrieve: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsAccountCurrenciesRetrieveData, any>({
        path: `/3/user/crypto-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCryptoAccountsAccountCurrenciesDestroy
     * @summary Delete crypto-account account currency
     * @request DELETE:/3/user/crypto-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    userCryptoAccountsAccountCurrenciesDestroy: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsAccountCurrenciesDestroyData, any>({
        path: `/3/user/crypto-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCryptoAccountsCurrenciesList
     * @summary List crypto account currencies
     * @request GET:/3/user/crypto-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    userCryptoAccountsCurrenciesList: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsCurrenciesListData, any>({
        path: `/3/user/crypto-accounts/${id}/currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCryptoAccountsCurrenciesCreate
     * @summary Create crypto account currency
     * @request POST:/3/user/crypto-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    userCryptoAccountsCurrenciesCreate: (
      id: string,
      data: CreateCryptoAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsCurrenciesCreateData, any>({
        path: `/3/user/crypto-accounts/${id}/currencies/`,
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
     * @tags user
     * @name UserCryptoAccountsCurrenciesRetrieve
     * @summary Retrieve crypto account currency
     * @request GET:/3/user/crypto-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    userCryptoAccountsCurrenciesRetrieve: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsCurrenciesRetrieveData, any>({
        path: `/3/user/crypto-accounts/${id}/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCryptoAccountsCurrenciesDestroy
     * @summary Delete crypto account currency
     * @request DELETE:/3/user/crypto-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    userCryptoAccountsCurrenciesDestroy: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserCryptoAccountsCurrenciesDestroyData, any>({
        path: `/3/user/crypto-accounts/${id}/currencies/${code}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDevicesList
     * @summary List devices
     * @request GET:/3/user/devices/
     * @secure
     */
    userDevicesList: (
      query: UserDevicesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserDevicesListData, any>({
        path: `/3/user/devices/`,
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
     * @name UserDevicesCreate
     * @summary Create device
     * @request POST:/3/user/devices/
     * @secure
     */
    userDevicesCreate: (data: CreateDevice, params: RequestParams = {}) =>
      this.request<UserDevicesCreateData, any>({
        path: `/3/user/devices/`,
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
     * @tags user
     * @name UserDevicesAppsRetrieve
     * @summary Retrieve device app
     * @request GET:/3/user/devices/{device_id}/apps/{app_id}/
     * @secure
     */
    userDevicesAppsRetrieve: (
      appId: string,
      deviceId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserDevicesAppsRetrieveData, any>({
        path: `/3/user/devices/${deviceId}/apps/${appId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDevicesAppsUpdate
     * @summary Update device app
     * @request PUT:/3/user/devices/{device_id}/apps/{app_id}/
     * @secure
     */
    userDevicesAppsUpdate: (
      appId: string,
      deviceId: string,
      data: DeviceApp,
      params: RequestParams = {},
    ) =>
      this.request<UserDevicesAppsUpdateData, any>({
        path: `/3/user/devices/${deviceId}/apps/${appId}/`,
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
     * @name UserDevicesAppsPartialUpdate
     * @summary Partially update device app
     * @request PATCH:/3/user/devices/{device_id}/apps/{app_id}/
     * @secure
     */
    userDevicesAppsPartialUpdate: (
      appId: string,
      deviceId: string,
      data: PatchedDeviceApp,
      params: RequestParams = {},
    ) =>
      this.request<UserDevicesAppsPartialUpdateData, any>({
        path: `/3/user/devices/${deviceId}/apps/${appId}/`,
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
     * @name UserDevicesAppsDestroy
     * @summary Delete device app
     * @request DELETE:/3/user/devices/{device_id}/apps/{app_id}/
     * @secure
     */
    userDevicesAppsDestroy: (
      appId: string,
      deviceId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserDevicesAppsDestroyData, any>({
        path: `/3/user/devices/${deviceId}/apps/${appId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDevicesRetrieve
     * @summary Retrieve device
     * @request GET:/3/user/devices/{id}/
     * @secure
     */
    userDevicesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserDevicesRetrieveData, any>({
        path: `/3/user/devices/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDevicesUpdate
     * @summary Update device
     * @request PUT:/3/user/devices/{id}/
     * @secure
     */
    userDevicesUpdate: (id: string, data: Device, params: RequestParams = {}) =>
      this.request<UserDevicesUpdateData, any>({
        path: `/3/user/devices/${id}/`,
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
     * @name UserDevicesPartialUpdate
     * @summary Partially update device
     * @request PATCH:/3/user/devices/{id}/
     * @secure
     */
    userDevicesPartialUpdate: (
      id: string,
      data: PatchedDevice,
      params: RequestParams = {},
    ) =>
      this.request<UserDevicesPartialUpdateData, any>({
        path: `/3/user/devices/${id}/`,
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
     * @name UserDevicesDestroy
     * @summary Delete device
     * @request DELETE:/3/user/devices/{id}/
     * @secure
     */
    userDevicesDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UserDevicesDestroyData, any>({
        path: `/3/user/devices/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDevicesAppsList
     * @summary List device apps
     * @request GET:/3/user/devices/{id}/apps/
     * @secure
     */
    userDevicesAppsList: (
      { id, ...query }: UserDevicesAppsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserDevicesAppsListData, any>({
        path: `/3/user/devices/${id}/apps/`,
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
     * @name UserDevicesAppsCreate
     * @summary Create device app
     * @request POST:/3/user/devices/{id}/apps/
     * @secure
     */
    userDevicesAppsCreate: (
      id: string,
      data: CreateDeviceApp,
      params: RequestParams = {},
    ) =>
      this.request<UserDevicesAppsCreateData, any>({
        path: `/3/user/devices/${id}/apps/`,
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
     * @tags user
     * @name UserDocumentsList
     * @summary List documents
     * @request GET:/3/user/documents/
     * @secure
     */
    userDocumentsList: (
      query: UserDocumentsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserDocumentsListData, any>({
        path: `/3/user/documents/`,
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
     * @name UserDocumentsCreate
     * @summary Create document
     * @request POST:/3/user/documents/
     * @secure
     */
    userDocumentsCreate: (
      data: UserCreateDocument,
      params: RequestParams = {},
    ) =>
      this.request<UserDocumentsCreateData, any>({
        path: `/3/user/documents/`,
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
     * @tags user
     * @name UserDocumentsRetrieve
     * @summary Retrieve document
     * @request GET:/3/user/documents/{id}/
     * @secure
     */
    userDocumentsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserDocumentsRetrieveData, any>({
        path: `/3/user/documents/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDocumentsDestroy
     * @request DELETE:/3/user/documents/{id}/
     * @secure
     */
    userDocumentsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UserDocumentsDestroyData, any>({
        path: `/3/user/documents/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserEmailsList
     * @summary List emails
     * @request GET:/3/user/emails/
     * @secure
     */
    userEmailsList: (params: RequestParams = {}) =>
      this.request<UserEmailsListData, any>({
        path: `/3/user/emails/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserEmailsCreate
     * @summary Create email
     * @request POST:/3/user/emails/
     * @secure
     */
    userEmailsCreate: (data: CreateEmail, params: RequestParams = {}) =>
      this.request<UserEmailsCreateData, any>({
        path: `/3/user/emails/`,
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
     * @tags user
     * @name UserEmailsRetrieve
     * @summary Retrieve email
     * @request GET:/3/user/emails/{id}/
     * @secure
     */
    userEmailsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserEmailsRetrieveData, any>({
        path: `/3/user/emails/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserEmailsUpdate
     * @summary Update email
     * @request PUT:/3/user/emails/{id}/
     * @secure
     */
    userEmailsUpdate: (id: string, data: Email, params: RequestParams = {}) =>
      this.request<UserEmailsUpdateData, any>({
        path: `/3/user/emails/${id}/`,
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
     * @name UserEmailsPartialUpdate
     * @summary Partially update email
     * @request PATCH:/3/user/emails/{id}/
     * @secure
     */
    userEmailsPartialUpdate: (
      id: string,
      data: PatchedEmail,
      params: RequestParams = {},
    ) =>
      this.request<UserEmailsPartialUpdateData, any>({
        path: `/3/user/emails/${id}/`,
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
     * @name UserEmailsDestroy
     * @summary Delete email
     * @request DELETE:/3/user/emails/{id}/
     * @secure
     */
    userEmailsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UserEmailsDestroyData, any>({
        path: `/3/user/emails/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserLegalTermsList
     * @summary List legal terms
     * @request GET:/3/user/legal-terms/
     * @secure
     */
    userLegalTermsList: (
      query: UserLegalTermsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserLegalTermsListData, any>({
        path: `/3/user/legal-terms/`,
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
     * @name UserLegalTermsRetrieve
     * @summary Retrieve legal term
     * @request GET:/3/user/legal-terms/{id}/
     * @secure
     */
    userLegalTermsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserLegalTermsRetrieveData, any>({
        path: `/3/user/legal-terms/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserLegalTermsVersionsList
     * @summary List legal term version
     * @request GET:/3/user/legal-terms/{id}/versions/
     * @secure
     */
    userLegalTermsVersionsList: (
      { id, ...query }: UserLegalTermsVersionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserLegalTermsVersionsListData, any>({
        path: `/3/user/legal-terms/${id}/versions/`,
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
     * @name UserLegalTermsVersionsRetrieve
     * @summary Retrieve legal term version
     * @request GET:/3/user/legal-terms/{term_id}/versions/{version_id}/
     * @secure
     */
    userLegalTermsVersionsRetrieve: (
      termId: string,
      versionId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserLegalTermsVersionsRetrieveData, any>({
        path: `/3/user/legal-terms/${termId}/versions/${versionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserLegalTermsVersionsUpdate
     * @summary Update legal term version
     * @request PUT:/3/user/legal-terms/{term_id}/versions/{version_id}/
     * @secure
     */
    userLegalTermsVersionsUpdate: (
      termId: string,
      versionId: string,
      data: UpdateLegalTermVersion,
      params: RequestParams = {},
    ) =>
      this.request<UserLegalTermsVersionsUpdateData, any>({
        path: `/3/user/legal-terms/${termId}/versions/${versionId}/`,
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
     * @name UserLegalTermsVersionsPartialUpdate
     * @summary Partially update legal term version
     * @request PATCH:/3/user/legal-terms/{term_id}/versions/{version_id}/
     * @secure
     */
    userLegalTermsVersionsPartialUpdate: (
      termId: string,
      versionId: string,
      data: PatchedUpdateLegalTermVersion,
      params: RequestParams = {},
    ) =>
      this.request<UserLegalTermsVersionsPartialUpdateData, any>({
        path: `/3/user/legal-terms/${termId}/versions/${versionId}/`,
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
     * @name UserMessagesList
     * @summary List messages
     * @request GET:/3/user/messages/
     * @secure
     */
    userMessagesList: (
      query: UserMessagesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserMessagesListData, any>({
        path: `/3/user/messages/`,
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
     * @name UserMessagesRetrieve
     * @summary Retrieve message
     * @request GET:/3/user/messages/{id}/
     * @secure
     */
    userMessagesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserMessagesRetrieveData, any>({
        path: `/3/user/messages/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserMobilesList
     * @summary List mobiles
     * @request GET:/3/user/mobiles/
     * @secure
     */
    userMobilesList: (params: RequestParams = {}) =>
      this.request<UserMobilesListData, any>({
        path: `/3/user/mobiles/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserMobilesCreate
     * @summary Create mobile
     * @request POST:/3/user/mobiles/
     * @secure
     */
    userMobilesCreate: (data: CreateMobile, params: RequestParams = {}) =>
      this.request<UserMobilesCreateData, any>({
        path: `/3/user/mobiles/`,
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
     * @tags user
     * @name UserMobilesRetrieve
     * @summary Retrieve mobile
     * @request GET:/3/user/mobiles/{id}/
     * @secure
     */
    userMobilesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserMobilesRetrieveData, any>({
        path: `/3/user/mobiles/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserMobilesUpdate
     * @summary Update mobile
     * @request PUT:/3/user/mobiles/{id}/
     * @secure
     */
    userMobilesUpdate: (id: string, data: Mobile, params: RequestParams = {}) =>
      this.request<UserMobilesUpdateData, any>({
        path: `/3/user/mobiles/${id}/`,
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
     * @name UserMobilesPartialUpdate
     * @summary Partially update mobile
     * @request PATCH:/3/user/mobiles/{id}/
     * @secure
     */
    userMobilesPartialUpdate: (
      id: string,
      data: PatchedMobile,
      params: RequestParams = {},
    ) =>
      this.request<UserMobilesPartialUpdateData, any>({
        path: `/3/user/mobiles/${id}/`,
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
     * @name UserMobilesDestroy
     * @summary Delete mobile
     * @request DELETE:/3/user/mobiles/{id}/
     * @secure
     */
    userMobilesDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UserMobilesDestroyData, any>({
        path: `/3/user/mobiles/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserWalletAccountsList
     * @summary List wallet accounts
     * @request GET:/3/user/wallet-accounts/
     * @secure
     */
    userWalletAccountsList: (
      query: UserWalletAccountsListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsListData, any>({
        path: `/3/user/wallet-accounts/`,
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
     * @name UserWalletAccountsCreate
     * @summary Create wallet account
     * @request POST:/3/user/wallet-accounts/
     * @secure
     */
    userWalletAccountsCreate: (
      data: UserCreateWalletAccount,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsCreateData, any>({
        path: `/3/user/wallet-accounts/`,
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
     * @tags user
     * @name UserWalletAccountsRetrieve
     * @summary Retrieve wallet account
     * @request GET:/3/user/wallet-accounts/{id}/
     * @secure
     */
    userWalletAccountsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<UserWalletAccountsRetrieveData, any>({
        path: `/3/user/wallet-accounts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserWalletAccountsUpdate
     * @summary Update wallet account
     * @request PUT:/3/user/wallet-accounts/{id}/
     * @secure
     */
    userWalletAccountsUpdate: (
      id: string,
      data: UserWalletAccount,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsUpdateData, any>({
        path: `/3/user/wallet-accounts/${id}/`,
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
     * @name UserWalletAccountsPartialUpdate
     * @summary Partially update wallet account
     * @request PATCH:/3/user/wallet-accounts/{id}/
     * @secure
     */
    userWalletAccountsPartialUpdate: (
      id: string,
      data: PatchedUserWalletAccount,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsPartialUpdateData, any>({
        path: `/3/user/wallet-accounts/${id}/`,
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
     * @name UserWalletAccountsDestroy
     * @summary Delete wallet account
     * @request DELETE:/3/user/wallet-accounts/{id}/
     * @secure
     */
    userWalletAccountsDestroy: (id: string, params: RequestParams = {}) =>
      this.request<UserWalletAccountsDestroyData, any>({
        path: `/3/user/wallet-accounts/${id}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserWalletAccountsAccountCurrenciesList
     * @summary List wallet-accounts account currencies
     * @request GET:/3/user/wallet-accounts/{id}/account-currencies/
     * @secure
     */
    userWalletAccountsAccountCurrenciesList: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsAccountCurrenciesListData, any>({
        path: `/3/user/wallet-accounts/${id}/account-currencies/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserWalletAccountsAccountCurrenciesCreate
     * @summary Create wallet-accounts account currency
     * @request POST:/3/user/wallet-accounts/{id}/account-currencies/
     * @secure
     */
    userWalletAccountsAccountCurrenciesCreate: (
      id: string,
      data: CreateUserWalletAccountAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsAccountCurrenciesCreateData, any>({
        path: `/3/user/wallet-accounts/${id}/account-currencies/`,
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
     * @tags user
     * @name UserWalletAccountsAccountCurrenciesRetrieve
     * @summary Retrieve wallet-account account currency
     * @request GET:/3/user/wallet-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    userWalletAccountsAccountCurrenciesRetrieve: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsAccountCurrenciesRetrieveData, any>({
        path: `/3/user/wallet-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserWalletAccountsAccountCurrenciesDestroy
     * @summary Delete wallet-account account currency
     * @request DELETE:/3/user/wallet-accounts/{id}/account-currencies/{account_currency_id}/
     * @secure
     */
    userWalletAccountsAccountCurrenciesDestroy: (
      accountCurrencyId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsAccountCurrenciesDestroyData, any>({
        path: `/3/user/wallet-accounts/${id}/account-currencies/${accountCurrencyId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserWalletAccountsCurrenciesList
     * @summary List wallet account currencies
     * @request GET:/3/user/wallet-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    userWalletAccountsCurrenciesList: (
      { id, ...query }: UserWalletAccountsCurrenciesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsCurrenciesListData, any>({
        path: `/3/user/wallet-accounts/${id}/currencies/`,
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
     * @name UserWalletAccountsCurrenciesCreate
     * @summary Create wallet account currency
     * @request POST:/3/user/wallet-accounts/{id}/currencies/
     * @deprecated
     * @secure
     */
    userWalletAccountsCurrenciesCreate: (
      id: string,
      data: CreateUserWalletAccountAsset,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsCurrenciesCreateData, any>({
        path: `/3/user/wallet-accounts/${id}/currencies/`,
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
     * @tags user
     * @name UserWalletAccountsCurrenciesRetrieve
     * @summary Retrieve wallet account currency
     * @request GET:/3/user/wallet-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    userWalletAccountsCurrenciesRetrieve: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsCurrenciesRetrieveData, any>({
        path: `/3/user/wallet-accounts/${id}/currencies/${code}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserWalletAccountsCurrenciesDestroy
     * @summary Delete wallet account currency
     * @request DELETE:/3/user/wallet-accounts/{id}/currencies/{code}/
     * @deprecated
     * @secure
     */
    userWalletAccountsCurrenciesDestroy: (
      code: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<UserWalletAccountsCurrenciesDestroyData, any>({
        path: `/3/user/wallet-accounts/${id}/currencies/${code}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
