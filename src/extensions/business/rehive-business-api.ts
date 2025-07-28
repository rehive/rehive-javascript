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
export interface AdminBusiness {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner: string;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  inc_number?: string | null;
  colors?: Record<string, any>;
  categories: BusinessCategory[];
  /** @format uri */
  logo?: string | null;
  /** @format uri */
  icon?: string | null;
  account: string;
  currency: Currency;
  timezone: string;
  destinations: AdminBusinessAutomatedPayoutDestination[];
  /** @maxLength 30 */
  vat_number?: string | null;
  /** @maxLength 200 */
  address_line_1?: string | null;
  /** @maxLength 200 */
  address_line_2?: string | null;
  /** @maxLength 100 */
  address_city?: string | null;
  /** @maxLength 100 */
  address_state_province?: string | null;
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
   * * `FM` - Micronesia (Federated States of)
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
   * * `TR` - Turkey
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
  address_country?:
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
  address_postal_code?: string | null;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminBusinessAutomatedPayoutDestination {
  currency: Currency;
  /**
   * * `native` - native
   * * `bank` - bank
   * * `bitcoin` - bitcoin
   */
  type: "native" | "bank" | "bitcoin";
  percentage: number;
  account: string | null;
  bitcoin_account: string | null;
  bank_account: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminBusinessCategory {
  /** @format uuid */
  id: string;
  /** @maxLength 50 */
  name: string;
  /** @format uuid */
  parent?: string;
  /** @format uri */
  image?: string;
  created: number;
  updated: number;
  /** @maxLength 255 */
  description?: string | null;
}

export interface AdminBusinessCategoryResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminBusinessCategory;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminBusinessDocument {
  id: string;
  /** @format uri */
  file: string;
  /**
   * * `incorporation_certificate` - incorporation_certificate
   * * `tax_certificate` - tax_certificate
   * * `financial_statement` - financial_statement
   * * `trade_certificate` - trade_certificate
   * * `shareholder_identification` - shareholder_identification
   */
  type:
    | "incorporation_certificate"
    | "tax_certificate"
    | "financial_statement"
    | "trade_certificate"
    | "shareholder_identification";
  /**
   * * `obsolete` - obsolete
   * * `declined` - declined
   * * `pending` - pending
   * * `incomplete` - incomplete
   * * `verified` - verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  /** @maxLength 250 */
  note?: string | null;
  expires?: number | null;
  created: number;
  updated: number;
}

export interface AdminBusinessDocumentResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminBusinessDocument;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminBusinessPayout {
  id: string;
  reference: string | null;
  /**
   * * `queued` - queued
   * * `processing` - processing
   * * `failed` - failed
   * * `complete` - complete
   * * `quarantined` - quarantined
   */
  status: "queued" | "processing" | "failed" | "complete" | "quarantined";
  currency: Currency;
  amount: number;
  destinations: AdminBusinessPayoutDestination[];
  errors: string[] | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminBusinessPayoutDestination {
  currency: Currency;
  /**
   * * `native` - native
   * * `bank` - bank
   * * `bitcoin` - bitcoin
   */
  type: "native" | "bank" | "bitcoin";
  percentage: number;
  account: string | null;
  bitcoin_account: string | null;
  bank_account: string | null;
  allocation: number | null;
  amount: number;
  conversion_collection: string | null;
  transfer_collection: string | null;
  withdraw_collection: string | null;
}

export interface AdminBusinessPayoutResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminBusinessPayout;
}

export interface AdminBusinessPayoutTransaction {
  id: string;
  collection: string;
  parent: string;
  partner: Record<string, any>;
  tx_type: string;
  subtype: string;
  note: string;
  metadata: Record<string, any>;
  status: string;
  reference: string;
  amount: number;
  total_amount: number;
  balance: number;
  currency: Record<string, any>;
  account: string;
  created: number;
  updated: number;
}

export interface AdminBusinessResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminBusiness;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminBusinessUser {
  id: string;
  business: ShortBusiness;
  /** @format email */
  email: string | null;
  mobile: string | null;
  roles: ("manager" | "customer")[];
  user: User;
  first_name: string;
  last_name: string;
  username: string;
  profile: string;
  created: number;
  updated: number;
}

export interface AdminBusinessUserResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminBusinessUser;
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
  /** @maxItems 10 */
  manager_groups?: string[] | null;
  payout_minimums: AdminCompanyPayoutMinimum[];
  /**
   * @min 12
   * @max 168
   */
  payout_exclusion_period?: number;
  /**
   * @min 0
   * @max 6
   */
  payout_day?: number;
  /**
   * @min 0
   * @max 23
   */
  payout_hour?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCompanyPayoutMinimum {
  currency: Currency;
  amount: number;
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
export interface AdminCreateBusinessDocument {
  id: string;
  /** @format uri */
  file: string;
  /**
   * * `incorporation_certificate` - incorporation_certificate
   * * `tax_certificate` - tax_certificate
   * * `financial_statement` - financial_statement
   * * `trade_certificate` - trade_certificate
   * * `shareholder_identification` - shareholder_identification
   */
  type:
    | "incorporation_certificate"
    | "tax_certificate"
    | "financial_statement"
    | "trade_certificate"
    | "shareholder_identification";
  /**
   * * `obsolete` - obsolete
   * * `declined` - declined
   * * `pending` - pending
   * * `incomplete` - incomplete
   * * `verified` - verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  /** @maxLength 250 */
  note?: string | null;
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
export interface AdminCreateBusinessPayout {
  id: string;
  /** @maxLength 100 */
  reference?: string | null;
  /**
   * * `queued` - queued
   * * `processing` - processing
   * * `failed` - failed
   * * `complete` - complete
   * * `quarantined` - quarantined
   */
  status: "queued" | "processing" | "failed" | "complete" | "quarantined";
  amount: number;
  destinations?: AdminCreateBusinessPayoutDestination[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateBusinessPayoutDestination {
  currency: string;
  /**
   * * `native` - native
   * * `bank` - bank
   * * `bitcoin` - bitcoin
   */
  type: "native" | "bank" | "bitcoin";
  /**
   * @min 1
   * @max 100
   */
  percentage: number;
  /** @maxLength 30 */
  account?: string | null;
  /** @maxLength 50 */
  bitcoin_account?: string | null;
  /** @maxLength 50 */
  bank_account?: string | null;
  allocation: number | null;
  amount: number;
  conversion_collection: string | null;
  transfer_collection: string | null;
  withdraw_collection: string | null;
  /** @format date-time */
  created: string;
  /** @format date-time */
  updated: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminCreateBusinessUser {
  business: string;
  user?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** @maxLength 24 */
  mobile?: string | null;
  roles: ("manager" | "customer")[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateBusiness {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner: string;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  inc_number?: string | null;
  colors?: Record<string, any>;
  categories: BusinessCategory[];
  /** @format uri */
  logo?: string | null;
  /** @format uri */
  icon?: string | null;
  account: string;
  currency: Currency;
  timezone: string;
  destinations: AdminBusinessAutomatedPayoutDestination[];
  /** @maxLength 30 */
  vat_number?: string | null;
  /** @maxLength 200 */
  address_line_1?: string | null;
  /** @maxLength 200 */
  address_line_2?: string | null;
  /** @maxLength 100 */
  address_city?: string | null;
  /** @maxLength 100 */
  address_state_province?: string | null;
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
   * * `FM` - Micronesia (Federated States of)
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
   * * `TR` - Turkey
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
  address_country?:
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
  address_postal_code?: string | null;
  /**
   * * `declined` - Declined
   * * `pending` - Pending
   * * `verified` - Verified
   */
  status?: "declined" | "pending" | "verified";
  metadata?: Record<string, any>;
  created: number;
  updated: number;
}

export interface AdminUpdateBusinessResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: AdminUpdateBusiness;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateBusinessUser {
  business: string;
  /**
   * @maxItems 2
   * @minItems 0
   */
  roles: ("manager" | "customer")[];
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
  /** @maxItems 10 */
  manager_groups?: string[] | null;
  payout_minimums?: AdminUpdateCompanyPayoutMinimum[];
  /**
   * @min 12
   * @max 168
   */
  payout_exclusion_period?: number;
  /**
   * @min 0
   * @max 6
   */
  payout_day?: number;
  /**
   * @min 0
   * @max 23
   */
  payout_hour?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface AdminUpdateCompanyPayoutMinimum {
  currency: string;
  amount: number;
}

export interface BusinessCategories {
  categories: BusinessCategory[];
}

export interface BusinessCategoriesResponse {
  /** @example "success" */
  status?: string;
  data?: BusinessCategories;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface BusinessCategory {
  id: string;
  name: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  parent?: BusinessCategoryParent;
  /** @format uri */
  image: string | null;
  created: number;
  updated: number;
  description: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface BusinessCategoryParent {
  /** @format uuid */
  id: string;
  name: string;
  parent: number | null;
  created: number;
  updated: number;
  description: string | null;
}

export interface BusinessCategoryResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: BusinessCategory;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface BusinessCategoryUpdate {
  id: string;
  name: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  parent?: BusinessCategoryParent;
  /** @format uri */
  image: string | null;
  created: number;
  updated: number;
  description: string | null;
}

export interface BusinessCategoryUpdateResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: BusinessCategoryUpdate;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface BusinessUser {
  id: string;
  /** @format email */
  email: string | null;
  mobile: string | null;
  roles: ("manager" | "customer")[];
  user: User;
  first_name: string;
  last_name: string;
  username: string;
  profile: string;
  created: number;
  updated: number;
}

export interface BusinessUserResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: BusinessUser;
}

export interface BusinsessCategoryCreate {
  categories: string[];
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface CustomerBusiness {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxLength 100 */
  website?: string | null;
  colors?: Record<string, any>;
  categories: BusinessCategory[];
  /** @format uri */
  logo?: string | null;
  /** @format uri */
  icon?: string | null;
  currency: Currency;
  /** @maxLength 200 */
  address_line_1?: string | null;
  /** @maxLength 200 */
  address_line_2?: string | null;
  /** @maxLength 100 */
  address_city?: string | null;
  /** @maxLength 100 */
  address_state_province?: string | null;
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
   * * `FM` - Micronesia (Federated States of)
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
   * * `TR` - Turkey
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
  address_country?:
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
  address_postal_code?: string | null;
  metadata: Record<string, any>;
  created: number;
  updated: number;
}

export interface CustomerBusinessResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: CustomerBusiness;
}

export interface CustomerEnroll {
  business: string;
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
export interface ManagerBusiness {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner: string;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  inc_number?: string | null;
  colors?: Record<string, any>;
  categories: BusinessCategory[];
  /** @format uri */
  logo?: string | null;
  /** @format uri */
  icon?: string | null;
  account: string;
  currency: Currency;
  timezone: string;
  destinations: ManagerBusinessAutomatedPayoutDestination[];
  /** @maxLength 30 */
  vat_number?: string | null;
  /** @maxLength 200 */
  address_line_1?: string | null;
  /** @maxLength 200 */
  address_line_2?: string | null;
  /** @maxLength 100 */
  address_city?: string | null;
  /** @maxLength 100 */
  address_state_province?: string | null;
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
   * * `FM` - Micronesia (Federated States of)
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
   * * `TR` - Turkey
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
  address_country?:
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
  address_postal_code?: string | null;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerBusinessAutomatedPayoutDestination {
  currency: Currency;
  /**
   * * `native` - native
   * * `bank` - bank
   * * `bitcoin` - bitcoin
   */
  type: "native" | "bank" | "bitcoin";
  percentage: number;
  account: string | null;
  bitcoin_account: string | null;
  bank_account: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerBusinessDocument {
  id: string;
  /** @format uri */
  file: string;
  /**
   * * `incorporation_certificate` - incorporation_certificate
   * * `tax_certificate` - tax_certificate
   * * `financial_statement` - financial_statement
   * * `trade_certificate` - trade_certificate
   * * `shareholder_identification` - shareholder_identification
   */
  type:
    | "incorporation_certificate"
    | "tax_certificate"
    | "financial_statement"
    | "trade_certificate"
    | "shareholder_identification";
  /**
   * * `obsolete` - obsolete
   * * `declined` - declined
   * * `pending` - pending
   * * `incomplete` - incomplete
   * * `verified` - verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  note: string | null;
  expires?: number | null;
  created: number;
  updated: number;
}

export interface ManagerBusinessDocumentResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerBusinessDocument;
}

export interface ManagerBusinessInvoice {
  id: string;
  user: Record<string, any>;
  account: string;
  request_reference?: string;
  request_currency: Record<string, any>;
  request_amount: number;
  primary_payment_processor: Record<string, any>;
  description?: string;
  status: string;
  return_url?: string;
  redirect_url: string;
  payer_user: Record<string, any>;
  payer_email?: string;
  payer_mobile_number?: string;
  payment_processor_quotes: Record<string, any>;
  expiration_date?: number;
  due_date?: number;
  send_request_on?: number;
  send_reminders?: boolean;
  metadata?: Record<string, any>;
  refunded: boolean;
  created: number;
  updated: number;
}

export interface ManagerBusinessInvoiceLog {
  user_agent: string;
  ip_address: string;
  email: string;
  mobile_number: string;
}

export interface ManagerBusinessInvoiceRefund {
  identifier: string;
  amount: number;
  currency: Record<string, any>;
  status: string;
  type: string;
  transaction_collection: string;
  request: string;
  reason?: string;
  created: number;
  updated: number;
}

export interface ManagerBusinessInvoiceResponse {
  /** @example "success" */
  status?: string;
  data?: ManagerBusinessInvoice;
}

export interface ManagerBusinessInvoiceTransaction {
  rehive_code: string;
  settled: boolean;
  payment_processor_quote: number;
  details: Record<string, any>;
}

export interface ManagerBusinessMetric {
  id: string;
  name: string;
  resource: string;
  function: string;
  expression: string;
  currency: Record<string, any>;
  timezone: string;
  query: Record<string, any>;
  metadata: Record<string, any>;
  created: number;
  updated: number;
}

export interface ManagerBusinessMetricPoint {
  id: string;
  value: number;
  date: number;
}

export interface ManagerBusinessMetricResponse {
  /** @example "success" */
  status?: string;
  data?: ManagerBusinessMetric;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerBusinessPayout {
  id: string;
  reference: string | null;
  /**
   * * `queued` - queued
   * * `processing` - processing
   * * `failed` - failed
   * * `complete` - complete
   * * `quarantined` - quarantined
   */
  status: "queued" | "processing" | "failed" | "complete" | "quarantined";
  currency: Currency;
  amount: number;
  destinations: ManagerBusinessPayoutDestination[];
  errors: string[] | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerBusinessPayoutDestination {
  currency: Currency;
  /**
   * * `native` - native
   * * `bank` - bank
   * * `bitcoin` - bitcoin
   */
  type: "native" | "bank" | "bitcoin";
  percentage: number;
  account: string | null;
  bitcoin_account: string | null;
  bank_account: string | null;
  allocation: number | null;
  amount: number;
  conversion_collection: string | null;
  transfer_collection: string | null;
  withdraw_collection: string | null;
}

export interface ManagerBusinessPayoutResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerBusinessPayout;
}

export interface ManagerBusinessPayoutTransaction {
  id: string;
  collection: string;
  parent: string;
  partner: Record<string, any>;
  tx_type: string;
  subtype: string;
  note: string;
  metadata: Record<string, any>;
  status: string;
  reference: string;
  amount: number;
  total_amount: number;
  balance: number;
  currency: Record<string, any>;
  account: string;
  created: number;
  updated: number;
}

export interface ManagerBusinessResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerBusiness;
}

export interface ManagerBusinessTransaction {
  id: string;
  collection: string;
  parent: string;
  partner: Record<string, any>;
  tx_type: string;
  subtype: string;
  note: string;
  metadata: Record<string, any>;
  status: string;
  reference: string;
  amount: number;
  total_amount: number;
  balance: number;
  currency: Record<string, any>;
  account: string;
  created: number;
  updated: number;
}

export interface ManagerBusinessTransactionResponse {
  /** @example "success" */
  status?: string;
  data?: ManagerBusinessTransaction;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCompany {
  id: string;
  manager_groups: string[] | null;
  payout_minimums: ManagerCompanyPayoutMinimum[];
  payout_exclusion_period: number;
  payout_day: number;
  payout_hour: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCompanyPayoutMinimum {
  currency: Currency;
  amount: number;
}

export interface ManagerCompanyResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: ManagerCompany;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateBusiness {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner: string;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  inc_number?: string | null;
  colors?: Record<string, any>;
  categories: BusinessCategory[];
  /** @format uri */
  logo?: string | null;
  /** @format uri */
  icon?: string | null;
  account: string;
  currency: string;
  timezone: string;
  destinations?: ManagerCreateUpdateBusinessAutomatedPayoutDestination[];
  /** @maxLength 30 */
  vat_number?: string | null;
  /** @maxLength 200 */
  address_line_1?: string | null;
  /** @maxLength 200 */
  address_line_2?: string | null;
  /** @maxLength 100 */
  address_city?: string | null;
  /** @maxLength 100 */
  address_state_province?: string | null;
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
   * * `FM` - Micronesia (Federated States of)
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
   * * `TR` - Turkey
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
  address_country?:
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
  address_postal_code?: string | null;
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

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateBusinessDocument {
  id: string;
  /** @format uri */
  file: string;
  /**
   * * `incorporation_certificate` - incorporation_certificate
   * * `tax_certificate` - tax_certificate
   * * `financial_statement` - financial_statement
   * * `trade_certificate` - trade_certificate
   * * `shareholder_identification` - shareholder_identification
   */
  type:
    | "incorporation_certificate"
    | "tax_certificate"
    | "financial_statement"
    | "trade_certificate"
    | "shareholder_identification";
  /**
   * * `obsolete` - obsolete
   * * `declined` - declined
   * * `pending` - pending
   * * `incomplete` - incomplete
   * * `verified` - verified
   */
  status: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  /** @maxLength 250 */
  note?: string | null;
  expires?: number | null;
  created: number;
  updated: number;
}

export interface ManagerCreateBusinessInvoice {
  id: string;
  user: Record<string, any>;
  account: string;
  request_reference?: string;
  request_currency: Record<string, any>;
  request_amount: number;
  primary_payment_processor: Record<string, any>;
  description?: string;
  status: string;
  return_url?: string;
  redirect_url: string;
  payer_user: Record<string, any>;
  payer_email?: string;
  payer_mobile_number?: string;
  payment_processor_quotes: Record<string, any>;
  expiration_date?: number;
  due_date?: number;
  send_request_on?: number;
  send_reminders?: boolean;
  metadata?: Record<string, any>;
  refunded: boolean;
  created: number;
  updated: number;
}

export interface ManagerCreateBusinessInvoiceRefund {
  identifier: string;
  amount: number;
  currency: string;
  status: string;
  type: string;
  transaction_collection: string;
  request: string;
  reason?: string;
  created: number;
  updated: number;
}

export interface ManagerCreateBusinessInvoiceRefundResponse {
  /** @example "success" */
  status?: string;
  data?: ManagerCreateBusinessInvoiceRefund;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateBusinessPayout {
  id: string;
  /** @maxLength 100 */
  reference?: string | null;
  /**
   * * `queued` - queued
   * * `processing` - processing
   * * `failed` - failed
   * * `complete` - complete
   * * `quarantined` - quarantined
   */
  status: "queued" | "processing" | "failed" | "complete" | "quarantined";
  amount: number;
  destinations?: ManagerCreateBusinessPayoutDestination[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateBusinessPayoutDestination {
  currency: string;
  /**
   * * `native` - native
   * * `bank` - bank
   * * `bitcoin` - bitcoin
   */
  type: "native" | "bank" | "bitcoin";
  /**
   * @min 1
   * @max 100
   */
  percentage: number;
  /** @maxLength 30 */
  account?: string | null;
  /** @maxLength 50 */
  bitcoin_account?: string | null;
  /** @maxLength 50 */
  bank_account?: string | null;
  allocation: number | null;
  amount: number;
  conversion_collection: string | null;
  transfer_collection: string | null;
  withdraw_collection: string | null;
  /** @format date-time */
  created: string;
  /** @format date-time */
  updated: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateBusinessUser {
  user?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** @maxLength 24 */
  mobile?: string | null;
  roles: ("manager" | "customer")[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerCreateUpdateBusinessAutomatedPayoutDestination {
  currency: string;
  /**
   * * `native` - native
   * * `bank` - bank
   * * `bitcoin` - bitcoin
   */
  type: "native" | "bank" | "bitcoin";
  /**
   * @min 1
   * @max 100
   */
  percentage: number;
  /** @maxLength 30 */
  account?: string | null;
  /** @maxLength 50 */
  bitcoin_account?: string | null;
  /** @maxLength 50 */
  bank_account?: string | null;
  /** @format date-time */
  created: string;
  /** @format date-time */
  updated: string;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerUpdateBusiness {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner: string;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  inc_number?: string | null;
  colors?: Record<string, any>;
  categories: BusinessCategory[];
  /** @format uri */
  logo?: string | null;
  /** @format uri */
  icon?: string | null;
  account: string;
  currency: Currency;
  timezone: string;
  destinations?: ManagerCreateUpdateBusinessAutomatedPayoutDestination[];
  /** @maxLength 30 */
  vat_number?: string | null;
  /** @maxLength 200 */
  address_line_1?: string | null;
  /** @maxLength 200 */
  address_line_2?: string | null;
  /** @maxLength 100 */
  address_city?: string | null;
  /** @maxLength 100 */
  address_state_province?: string | null;
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
   * * `FM` - Micronesia (Federated States of)
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
   * * `TR` - Turkey
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
  address_country?:
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
  address_postal_code?: string | null;
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

export interface ManagerUpdateBusinessInvoice {
  id: string;
  user: Record<string, any>;
  account: string;
  request_reference?: string;
  request_currency: Record<string, any>;
  request_amount: number;
  primary_payment_processor: Record<string, any>;
  description?: string;
  status: string;
  return_url?: string;
  redirect_url: string;
  payer_user: Record<string, any>;
  payer_email?: string;
  payer_mobile_number?: string;
  payment_processor_quotes: Record<string, any>;
  expiration_date?: number;
  due_date?: number;
  send_request_on?: number;
  send_reminders?: boolean;
  metadata?: Record<string, any>;
  refunded: boolean;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ManagerUpdateBusinessUser {
  /**
   * @maxItems 2
   * @minItems 0
   */
  roles: ("manager" | "customer")[];
}

export interface PaginatedAdminBusinessCategoryList {
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
  results?: AdminBusinessCategory[];
}

export interface PaginatedAdminBusinessCategoryListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminBusinessCategoryList;
}

export interface PaginatedAdminBusinessDocumentList {
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
  results?: AdminBusinessDocument[];
}

export interface PaginatedAdminBusinessDocumentListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminBusinessDocumentList;
}

export interface PaginatedAdminBusinessList {
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
  results?: AdminBusiness[];
}

export interface PaginatedAdminBusinessListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminBusinessList;
}

export interface PaginatedAdminBusinessPayoutList {
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
  results?: AdminBusinessPayout[];
}

export interface PaginatedAdminBusinessPayoutListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminBusinessPayoutList;
}

export interface PaginatedAdminBusinessPayoutTransactionList {
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
  results?: AdminBusinessPayoutTransaction[];
}

export interface PaginatedAdminBusinessPayoutTransactionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminBusinessPayoutTransactionList;
}

export interface PaginatedAdminBusinessUserList {
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
  results?: AdminBusinessUser[];
}

export interface PaginatedAdminBusinessUserListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedAdminBusinessUserList;
}

export interface PaginatedBusinessCategoryList {
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
  results?: BusinessCategory[];
}

export interface PaginatedBusinessCategoryListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedBusinessCategoryList;
}

export interface PaginatedBusinessUserList {
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
  results?: BusinessUser[];
}

export interface PaginatedBusinessUserListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedBusinessUserList;
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

export interface PaginatedCustomerBusinessList {
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
  results?: CustomerBusiness[];
}

export interface PaginatedCustomerBusinessListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedCustomerBusinessList;
}

export interface PaginatedManagerBusinessDocumentList {
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
  results?: ManagerBusinessDocument[];
}

export interface PaginatedManagerBusinessDocumentListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessDocumentList;
}

export interface PaginatedManagerBusinessInvoiceList {
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
  results?: ManagerBusinessInvoice[];
}

export interface PaginatedManagerBusinessInvoiceListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessInvoiceList;
}

export interface PaginatedManagerBusinessInvoiceLogList {
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
  results?: ManagerBusinessInvoiceLog[];
}

export interface PaginatedManagerBusinessInvoiceLogListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessInvoiceLogList;
}

export interface PaginatedManagerBusinessInvoiceRefundList {
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
  results?: ManagerBusinessInvoiceRefund[];
}

export interface PaginatedManagerBusinessInvoiceRefundListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessInvoiceRefundList;
}

export interface PaginatedManagerBusinessInvoiceTransactionList {
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
  results?: ManagerBusinessInvoiceTransaction[];
}

export interface PaginatedManagerBusinessInvoiceTransactionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessInvoiceTransactionList;
}

export interface PaginatedManagerBusinessList {
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
  results?: ManagerBusiness[];
}

export interface PaginatedManagerBusinessListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessList;
}

export interface PaginatedManagerBusinessMetricList {
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
  results?: ManagerBusinessMetric[];
}

export interface PaginatedManagerBusinessMetricListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessMetricList;
}

export interface PaginatedManagerBusinessMetricPointList {
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
  results?: ManagerBusinessMetricPoint[];
}

export interface PaginatedManagerBusinessMetricPointListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessMetricPointList;
}

export interface PaginatedManagerBusinessPayoutList {
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
  results?: ManagerBusinessPayout[];
}

export interface PaginatedManagerBusinessPayoutListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessPayoutList;
}

export interface PaginatedManagerBusinessPayoutTransactionList {
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
  results?: ManagerBusinessPayoutTransaction[];
}

export interface PaginatedManagerBusinessPayoutTransactionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessPayoutTransactionList;
}

export interface PaginatedManagerBusinessTransactionList {
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
  results?: ManagerBusinessTransaction[];
}

export interface PaginatedManagerBusinessTransactionListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedManagerBusinessTransactionList;
}

export interface PaginatedUserBusinessList {
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
  results?: UserBusiness[];
}

export interface PaginatedUserBusinessListResponse {
  /** @example "success" */
  status?: string;
  data?: PaginatedUserBusinessList;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminBusinessCategory {
  /** @format uuid */
  id?: string;
  /** @maxLength 50 */
  name?: string;
  /** @format uuid */
  parent?: string;
  /** @format uri */
  image?: string;
  created?: number;
  updated?: number;
  /** @maxLength 255 */
  description?: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminBusinessDocument {
  id?: string;
  /** @format uri */
  file?: string;
  /**
   * * `incorporation_certificate` - incorporation_certificate
   * * `tax_certificate` - tax_certificate
   * * `financial_statement` - financial_statement
   * * `trade_certificate` - trade_certificate
   * * `shareholder_identification` - shareholder_identification
   */
  type?:
    | "incorporation_certificate"
    | "tax_certificate"
    | "financial_statement"
    | "trade_certificate"
    | "shareholder_identification";
  /**
   * * `obsolete` - obsolete
   * * `declined` - declined
   * * `pending` - pending
   * * `incomplete` - incomplete
   * * `verified` - verified
   */
  status?: "obsolete" | "declined" | "pending" | "incomplete" | "verified";
  metadata?: Record<string, any>;
  /** @maxLength 250 */
  note?: string | null;
  expires?: number | null;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedAdminUpdateBusiness {
  id?: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner?: string;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  inc_number?: string | null;
  colors?: Record<string, any>;
  categories?: BusinessCategory[];
  /** @format uri */
  logo?: string | null;
  /** @format uri */
  icon?: string | null;
  account?: string;
  currency?: Currency;
  timezone?: string;
  destinations?: AdminBusinessAutomatedPayoutDestination[];
  /** @maxLength 30 */
  vat_number?: string | null;
  /** @maxLength 200 */
  address_line_1?: string | null;
  /** @maxLength 200 */
  address_line_2?: string | null;
  /** @maxLength 100 */
  address_city?: string | null;
  /** @maxLength 100 */
  address_state_province?: string | null;
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
   * * `FM` - Micronesia (Federated States of)
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
   * * `TR` - Turkey
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
  address_country?:
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
  address_postal_code?: string | null;
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
export interface PatchedAdminUpdateBusinessUser {
  business?: string;
  /**
   * @maxItems 2
   * @minItems 0
   */
  roles?: ("manager" | "customer")[];
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
  /** @maxItems 10 */
  manager_groups?: string[] | null;
  payout_minimums?: AdminUpdateCompanyPayoutMinimum[];
  /**
   * @min 12
   * @max 168
   */
  payout_exclusion_period?: number;
  /**
   * @min 0
   * @max 6
   */
  payout_day?: number;
  /**
   * @min 0
   * @max 23
   */
  payout_hour?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerUpdateBusiness {
  id?: string;
  /** @maxLength 200 */
  name?: string | null;
  /** @maxLength 255 */
  description?: string | null;
  owner?: string;
  /** @maxLength 100 */
  website?: string | null;
  /** @maxLength 100 */
  inc_number?: string | null;
  colors?: Record<string, any>;
  categories?: BusinessCategory[];
  /** @format uri */
  logo?: string | null;
  /** @format uri */
  icon?: string | null;
  account?: string;
  currency?: Currency;
  timezone?: string;
  destinations?: ManagerCreateUpdateBusinessAutomatedPayoutDestination[];
  /** @maxLength 30 */
  vat_number?: string | null;
  /** @maxLength 200 */
  address_line_1?: string | null;
  /** @maxLength 200 */
  address_line_2?: string | null;
  /** @maxLength 100 */
  address_city?: string | null;
  /** @maxLength 100 */
  address_state_province?: string | null;
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
   * * `FM` - Micronesia (Federated States of)
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
   * * `TR` - Turkey
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
  address_country?:
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
  address_postal_code?: string | null;
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

export interface PatchedManagerUpdateBusinessInvoice {
  id?: string;
  user?: Record<string, any>;
  account?: string;
  request_reference?: string;
  request_currency?: Record<string, any>;
  request_amount?: number;
  primary_payment_processor?: Record<string, any>;
  description?: string;
  status?: string;
  return_url?: string;
  redirect_url?: string;
  payer_user?: Record<string, any>;
  payer_email?: string;
  payer_mobile_number?: string;
  payment_processor_quotes?: Record<string, any>;
  expiration_date?: number;
  due_date?: number;
  send_request_on?: number;
  send_reminders?: boolean;
  metadata?: Record<string, any>;
  refunded?: boolean;
  created?: number;
  updated?: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface PatchedManagerUpdateBusinessUser {
  /**
   * @maxItems 2
   * @minItems 0
   */
  roles?: ("manager" | "customer")[];
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface ShortBusiness {
  id: string;
  /** @maxLength 200 */
  name?: string | null;
  created: number;
  updated: number;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface User {
  id: string;
  first_name: string | null;
  last_name: string | null;
  username: string | null;
  profile: string | null;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserBusiness {
  id: string;
  name: string | null;
  description: string | null;
  website: string | null;
  inc_number: string | null;
  colors: Record<string, any>;
  categories: BusinessCategory[];
  /** @format uri */
  logo: string | null;
  /** @format uri */
  icon: string | null;
  timezone: string;
  vat_number: string | null;
  address_line_1: string | null;
  address_line_2: string | null;
  address_city: string | null;
  address_state_province: string | null;
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
   * * `FM` - Micronesia (Federated States of)
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
   * * `TR` - Turkey
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
  address_country:
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
    | null;
  address_postal_code: string | null;
  metadata: Record<string, any>;
  created: number;
  updated: number;
}

export interface UserBusinessResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: UserBusiness;
}

/**
 * A ModelSerializer that takes additional arguments for
 * "fields", "omit" and "expand" in order to
 * control which fields are displayed, and whether to replace simple
 * values with complex, nested serializations
 */
export interface UserCompany {
  id: string;
  manager_groups: string[] | null;
}

export interface UserCompanyResponse {
  /** @example "success" */
  status?: string;
  /**
   * A ModelSerializer that takes additional arguments for
   * "fields", "omit" and "expand" in order to
   * control which fields are displayed, and whether to replace simple
   * values with complex, nested serializations
   */
  data?: UserCompany;
}

export interface Webhook {
  id: string;
  /**
   * * `transaction.create` - transaction.create
   * * `currency.create` - currency.create
   * * `currency.update` - currency.update
   * * `user.update` - User Update
   */
  event:
    | "transaction.create"
    | "currency.create"
    | "currency.update"
    | "user.update";
  company: string;
  data: Record<string, any>;
}

export type ActivateCreateData = ActionResponse;

export interface AdminBusinessCategoriesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type AdminBusinessCategoriesListData =
  PaginatedAdminBusinessCategoryListResponse;

export type AdminBusinessCategoriesCreateData = AdminBusinessCategoryResponse;

export type AdminBusinessCategoriesRetrieveData = AdminBusinessCategoryResponse;

export type AdminBusinessCategoriesUpdateData = AdminBusinessCategoryResponse;

export type AdminBusinessCategoriesPartialUpdateData =
  AdminBusinessCategoryResponse;

export type AdminBusinessCategoriesDestroyData = AdminBusinessCategoryResponse;

export interface AdminBusinessUsersListParams {
  business?: string;
  email?: string;
  mobile?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  roles?: string;
  user?: string;
}

export type AdminBusinessUsersListData = PaginatedAdminBusinessUserListResponse;

export type AdminBusinessUsersCreateData = AdminBusinessUserResponse;

export type AdminBusinessUsersRetrieveData = AdminBusinessUserResponse;

export type AdminBusinessUsersUpdateData = AdminBusinessUserResponse;

export type AdminBusinessUsersPartialUpdateData = AdminBusinessUserResponse;

export interface AdminBusinessesListParams {
  categories?: string;
  identifier?: string;
  owner?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
}

export type AdminBusinessesListData = PaginatedAdminBusinessListResponse;

export type AdminBusinessesRetrieveData = AdminBusinessResponse;

export type AdminBusinessesUpdateData = AdminUpdateBusinessResponse;

export type AdminBusinessesPartialUpdateData = AdminUpdateBusinessResponse;

export type AdminBusinessesCategoriesRetrieveData =
  BusinessCategoryUpdateResponse;

export type AdminBusinessesCategoriesDestroyData =
  BusinessCategoryUpdateResponse;

export interface AdminBusinessesDocumentsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
}

export type AdminBusinessesDocumentsListData =
  PaginatedAdminBusinessDocumentListResponse;

export type AdminBusinessesDocumentsCreateData = AdminBusinessDocumentResponse;

export type AdminBusinessesDocumentsRetrieveData =
  AdminBusinessDocumentResponse;

export type AdminBusinessesDocumentsUpdateData = AdminBusinessDocumentResponse;

export type AdminBusinessesDocumentsPartialUpdateData =
  AdminBusinessDocumentResponse;

export type AdminBusinessesDocumentsDestroyData = AdminBusinessDocumentResponse;

export interface AdminBusinessesPayoutsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
}

export type AdminBusinessesPayoutsListData =
  PaginatedAdminBusinessPayoutListResponse;

export type AdminBusinessesPayoutsCreateData = AdminBusinessPayoutResponse;

export type AdminBusinessesPayoutsRetrieveData = AdminBusinessPayoutResponse;

export interface AdminBusinessesPayoutsTransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  payoutId: string;
}

export type AdminBusinessesPayoutsTransactionsListData =
  PaginatedAdminBusinessPayoutTransactionListResponse;

export interface AdminBusinessesCategoriesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type AdminBusinessesCategoriesListData =
  PaginatedBusinessCategoryListResponse;

export type AdminBusinessesCategoriesCreateData = BusinessCategoriesResponse;

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

export type AdminWebhookCreateData = ActionResponse;

export interface CustomerBusinessesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type CustomerBusinessesListData = PaginatedCustomerBusinessListResponse;

export type CustomerBusinessesRetrieveData = CustomerBusinessResponse;

export type CustomerEnrollCreateData = CustomerBusinessResponse;

export type DeactivateCreateData = ActionResponse;

export interface ManagerBusinessCategoriesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type ManagerBusinessCategoriesListData =
  PaginatedBusinessCategoryListResponse;

export type ManagerBusinessCategoriesRetrieveData = BusinessCategoryResponse;

export interface ManagerBusinessesListParams {
  categories?: string;
  identifier?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
}

export type ManagerBusinessesListData = PaginatedManagerBusinessListResponse;

export type ManagerBusinessesCreateData = ManagerBusinessResponse;

export type ManagerBusinessesRetrieveData = ManagerBusinessResponse;

export type ManagerBusinessesUpdateData = ManagerBusinessResponse;

export type ManagerBusinessesPartialUpdateData = ManagerBusinessResponse;

export type ManagerBusinessesCategoriesRetrieveData =
  BusinessCategoryUpdateResponse;

export type ManagerBusinessesCategoriesDestroyData =
  BusinessCategoryUpdateResponse;

export interface ManagerBusinessesDocumentsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
}

export type ManagerBusinessesDocumentsListData =
  PaginatedManagerBusinessDocumentListResponse;

export type ManagerBusinessesDocumentsCreateData =
  ManagerBusinessDocumentResponse;

export type ManagerBusinessesDocumentsRetrieveData =
  ManagerBusinessDocumentResponse;

export interface ManagerBusinessesInvoicesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
}

export type ManagerBusinessesInvoicesListData =
  PaginatedManagerBusinessInvoiceListResponse;

export type ManagerBusinessesInvoicesCreateData =
  ManagerBusinessInvoiceResponse;

export type ManagerBusinessesInvoicesRetrieveData =
  ManagerBusinessInvoiceResponse;

export type ManagerBusinessesInvoicesUpdateData =
  ManagerBusinessInvoiceResponse;

export type ManagerBusinessesInvoicesPartialUpdateData =
  ManagerBusinessInvoiceResponse;

export interface ManagerBusinessesInvoicesLogsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  invoiceId: string;
}

export type ManagerBusinessesInvoicesLogsListData =
  PaginatedManagerBusinessInvoiceLogListResponse;

export interface ManagerBusinessesInvoicesRefundsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  invoiceId: string;
}

export type ManagerBusinessesInvoicesRefundsListData =
  PaginatedManagerBusinessInvoiceRefundListResponse;

export type ManagerBusinessesInvoicesRefundsCreateData =
  ManagerCreateBusinessInvoiceRefundResponse;

export interface ManagerBusinessesInvoicesTransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  invoiceId: string;
}

export type ManagerBusinessesInvoicesTransactionsListData =
  PaginatedManagerBusinessInvoiceTransactionListResponse;

export interface ManagerBusinessesMetricsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
}

export type ManagerBusinessesMetricsListData =
  PaginatedManagerBusinessMetricListResponse;

export type ManagerBusinessesMetricsRetrieveData =
  ManagerBusinessMetricResponse;

export interface ManagerBusinessesMetricsPointsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  metricId: string;
}

export type ManagerBusinessesMetricsPointsListData =
  PaginatedManagerBusinessMetricPointListResponse;

export interface ManagerBusinessesPayoutsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
}

export type ManagerBusinessesPayoutsListData =
  PaginatedManagerBusinessPayoutListResponse;

export type ManagerBusinessesPayoutsCreateData = ManagerBusinessPayoutResponse;

export type ManagerBusinessesPayoutsRetrieveData =
  ManagerBusinessPayoutResponse;

export interface ManagerBusinessesPayoutsTransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  payoutId: string;
}

export type ManagerBusinessesPayoutsTransactionsListData =
  PaginatedManagerBusinessPayoutTransactionListResponse;

export interface ManagerBusinessesTransactionsListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^\w+$ */
  businessId: string;
}

export type ManagerBusinessesTransactionsListData =
  PaginatedManagerBusinessTransactionListResponse;

export type ManagerBusinessesTransactionsRetrieveData =
  ManagerBusinessTransactionResponse;

export interface ManagerBusinessesUsersListParams {
  email?: string;
  mobile?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  roles?: string;
  user?: string;
  /** @pattern ^\w+$ */
  businessId: string;
}

export type ManagerBusinessesUsersListData = PaginatedBusinessUserListResponse;

export type ManagerBusinessesUsersCreateData = BusinessUserResponse;

export type ManagerBusinessesUsersRetrieveData = BusinessUserResponse;

export type ManagerBusinessesUsersUpdateData = BusinessUserResponse;

export type ManagerBusinessesUsersPartialUpdateData = BusinessUserResponse;

export interface ManagerBusinessesCategoriesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** @pattern ^([a-zA-Z0-9\_\-]+)$ */
  identifier: string;
}

export type ManagerBusinessesCategoriesListData =
  PaginatedBusinessCategoryListResponse;

export type ManagerBusinessesCategoriesCreateData = BusinessCategoryResponse;

export type ManagerCompanyRetrieveData = ManagerCompanyResponse;

export interface UserBusinessCategoriesListParams {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

export type UserBusinessCategoriesListData =
  PaginatedBusinessCategoryListResponse;

export type UserBusinessCategoriesRetrieveData = BusinessCategoryResponse;

export interface UserBusinessesListParams {
  categories?: string;
  identifier?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  status?: string;
}

export type UserBusinessesListData = PaginatedUserBusinessListResponse;

export type UserBusinessesRetrieveData = UserBusinessResponse;

export type UserCompanyRetrieveData = UserCompanyResponse;

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
  public baseUrl: string = "https://business.services.rehive.com/api/";
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
 * @title Business Service API
 * @version 1 (1)
 * @termsOfService https://rehive.com/terms/
 * @baseUrl https://business.services.rehive.com/api/
 * @externalDocs https://docs.rehive.com
 * @contact Rehive Support <support@rehive.com> (https://rehive.com/support/)
 *
 *
 * The **Business Service API** is used for managing businesses in Rehive.
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
     * @name AdminBusinessCategoriesList
     * @summary List categories
     * @request GET:/admin/business-categories/
     * @secure
     */
    adminBusinessCategoriesList: (
      query: AdminBusinessCategoriesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessCategoriesListData, any>({
        path: `/admin/business-categories/`,
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
     * @name AdminBusinessCategoriesCreate
     * @summary Create category
     * @request POST:/admin/business-categories/
     * @secure
     */
    adminBusinessCategoriesCreate: (
      data: AdminBusinessCategory,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessCategoriesCreateData, any>({
        path: `/admin/business-categories/`,
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
     * @name AdminBusinessCategoriesRetrieve
     * @summary Retrieve category
     * @request GET:/admin/business-categories/{identifier}/
     * @secure
     */
    adminBusinessCategoriesRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessCategoriesRetrieveData, any>({
        path: `/admin/business-categories/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBusinessCategoriesUpdate
     * @summary Update category
     * @request PUT:/admin/business-categories/{identifier}/
     * @secure
     */
    adminBusinessCategoriesUpdate: (
      identifier: string,
      data: AdminBusinessCategory,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessCategoriesUpdateData, any>({
        path: `/admin/business-categories/${identifier}/`,
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
     * @name AdminBusinessCategoriesPartialUpdate
     * @summary Partially update category
     * @request PATCH:/admin/business-categories/{identifier}/
     * @secure
     */
    adminBusinessCategoriesPartialUpdate: (
      identifier: string,
      data: PatchedAdminBusinessCategory,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessCategoriesPartialUpdateData, any>({
        path: `/admin/business-categories/${identifier}/`,
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
     * @name AdminBusinessCategoriesDestroy
     * @summary Delete category
     * @request DELETE:/admin/business-categories/{identifier}/
     * @secure
     */
    adminBusinessCategoriesDestroy: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessCategoriesDestroyData, any>({
        path: `/admin/business-categories/${identifier}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBusinessUsersList
     * @summary List business users
     * @request GET:/admin/business-users/
     * @secure
     */
    adminBusinessUsersList: (
      query: AdminBusinessUsersListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessUsersListData, any>({
        path: `/admin/business-users/`,
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
     * @name AdminBusinessUsersCreate
     * @summary Create business user
     * @request POST:/admin/business-users/
     * @secure
     */
    adminBusinessUsersCreate: (
      data: AdminCreateBusinessUser,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessUsersCreateData, any>({
        path: `/admin/business-users/`,
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
     * @name AdminBusinessUsersRetrieve
     * @summary Retrieve business user
     * @request GET:/admin/business-users/{user_id}/
     * @secure
     */
    adminBusinessUsersRetrieve: (userId: string, params: RequestParams = {}) =>
      this.request<AdminBusinessUsersRetrieveData, any>({
        path: `/admin/business-users/${userId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBusinessUsersUpdate
     * @summary Update business user
     * @request PUT:/admin/business-users/{user_id}/
     * @secure
     */
    adminBusinessUsersUpdate: (
      userId: string,
      data: AdminUpdateBusinessUser,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessUsersUpdateData, any>({
        path: `/admin/business-users/${userId}/`,
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
     * @name AdminBusinessUsersPartialUpdate
     * @summary Partially update business user
     * @request PATCH:/admin/business-users/{user_id}/
     * @secure
     */
    adminBusinessUsersPartialUpdate: (
      userId: string,
      data: PatchedAdminUpdateBusinessUser,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessUsersPartialUpdateData, any>({
        path: `/admin/business-users/${userId}/`,
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
     * @name AdminBusinessesList
     * @summary List businesses
     * @request GET:/admin/businesses/
     * @secure
     */
    adminBusinessesList: (
      query: AdminBusinessesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesListData, any>({
        path: `/admin/businesses/`,
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
     * @name AdminBusinessesRetrieve
     * @summary Retrieve business
     * @request GET:/admin/businesses/{business_id}/
     * @secure
     */
    adminBusinessesRetrieve: (businessId: string, params: RequestParams = {}) =>
      this.request<AdminBusinessesRetrieveData, any>({
        path: `/admin/businesses/${businessId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBusinessesUpdate
     * @summary Update business
     * @request PUT:/admin/businesses/{business_id}/
     * @secure
     */
    adminBusinessesUpdate: (
      businessId: string,
      data: AdminUpdateBusiness,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesUpdateData, any>({
        path: `/admin/businesses/${businessId}/`,
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
     * @name AdminBusinessesPartialUpdate
     * @summary Partially update business
     * @request PATCH:/admin/businesses/{business_id}/
     * @secure
     */
    adminBusinessesPartialUpdate: (
      businessId: string,
      data: PatchedAdminUpdateBusiness,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesPartialUpdateData, any>({
        path: `/admin/businesses/${businessId}/`,
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
     * @name AdminBusinessesCategoriesRetrieve
     * @summary Retrieve business category
     * @request GET:/admin/businesses/{business_id}/categories/{category_id}/
     * @secure
     */
    adminBusinessesCategoriesRetrieve: (
      businessId: string,
      categoryId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesCategoriesRetrieveData, any>({
        path: `/admin/businesses/${businessId}/categories/${categoryId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBusinessesCategoriesDestroy
     * @summary Delete business category
     * @request DELETE:/admin/businesses/{business_id}/categories/{category_id}/
     * @secure
     */
    adminBusinessesCategoriesDestroy: (
      businessId: string,
      categoryId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesCategoriesDestroyData, any>({
        path: `/admin/businesses/${businessId}/categories/${categoryId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBusinessesDocumentsList
     * @summary List business documents
     * @request GET:/admin/businesses/{business_id}/documents/
     * @secure
     */
    adminBusinessesDocumentsList: (
      { businessId, ...query }: AdminBusinessesDocumentsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesDocumentsListData, any>({
        path: `/admin/businesses/${businessId}/documents/`,
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
     * @name AdminBusinessesDocumentsCreate
     * @summary Create business document
     * @request POST:/admin/businesses/{business_id}/documents/
     * @secure
     */
    adminBusinessesDocumentsCreate: (
      businessId: string,
      data: AdminCreateBusinessDocument,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesDocumentsCreateData, any>({
        path: `/admin/businesses/${businessId}/documents/`,
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
     * @name AdminBusinessesDocumentsRetrieve
     * @summary Retrieve business document
     * @request GET:/admin/businesses/{business_id}/documents/{document_id}/
     * @secure
     */
    adminBusinessesDocumentsRetrieve: (
      businessId: string,
      documentId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesDocumentsRetrieveData, any>({
        path: `/admin/businesses/${businessId}/documents/${documentId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBusinessesDocumentsUpdate
     * @summary Update business document
     * @request PUT:/admin/businesses/{business_id}/documents/{document_id}/
     * @secure
     */
    adminBusinessesDocumentsUpdate: (
      businessId: string,
      documentId: string,
      data: AdminBusinessDocument,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesDocumentsUpdateData, any>({
        path: `/admin/businesses/${businessId}/documents/${documentId}/`,
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
     * @name AdminBusinessesDocumentsPartialUpdate
     * @summary Partially update business document
     * @request PATCH:/admin/businesses/{business_id}/documents/{document_id}/
     * @secure
     */
    adminBusinessesDocumentsPartialUpdate: (
      businessId: string,
      documentId: string,
      data: PatchedAdminBusinessDocument,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesDocumentsPartialUpdateData, any>({
        path: `/admin/businesses/${businessId}/documents/${documentId}/`,
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
     * @name AdminBusinessesDocumentsDestroy
     * @summary Delete business document
     * @request DELETE:/admin/businesses/{business_id}/documents/{document_id}/
     * @secure
     */
    adminBusinessesDocumentsDestroy: (
      businessId: string,
      documentId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesDocumentsDestroyData, any>({
        path: `/admin/businesses/${businessId}/documents/${documentId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBusinessesPayoutsList
     * @summary List business payouts
     * @request GET:/admin/businesses/{business_id}/payouts/
     * @secure
     */
    adminBusinessesPayoutsList: (
      { businessId, ...query }: AdminBusinessesPayoutsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesPayoutsListData, any>({
        path: `/admin/businesses/${businessId}/payouts/`,
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
     * @name AdminBusinessesPayoutsCreate
     * @summary Create business payout
     * @request POST:/admin/businesses/{business_id}/payouts/
     * @secure
     */
    adminBusinessesPayoutsCreate: (
      businessId: string,
      data: AdminCreateBusinessPayout,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesPayoutsCreateData, any>({
        path: `/admin/businesses/${businessId}/payouts/`,
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
     * @name AdminBusinessesPayoutsRetrieve
     * @summary Retrieve business payout
     * @request GET:/admin/businesses/{business_id}/payouts/{payout_id}/
     * @secure
     */
    adminBusinessesPayoutsRetrieve: (
      businessId: string,
      payoutId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesPayoutsRetrieveData, any>({
        path: `/admin/businesses/${businessId}/payouts/${payoutId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AdminBusinessesPayoutsTransactionsList
     * @summary List business payout transactions
     * @request GET:/admin/businesses/{business_id}/payouts/{payout_id}/transactions/
     * @secure
     */
    adminBusinessesPayoutsTransactionsList: (
      {
        businessId,
        payoutId,
        ...query
      }: AdminBusinessesPayoutsTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesPayoutsTransactionsListData, any>({
        path: `/admin/businesses/${businessId}/payouts/${payoutId}/transactions/`,
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
     * @name AdminBusinessesCategoriesList
     * @summary List business categories
     * @request GET:/admin/businesses/{identifier}/categories/
     * @secure
     */
    adminBusinessesCategoriesList: (
      { identifier, ...query }: AdminBusinessesCategoriesListParams,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesCategoriesListData, any>({
        path: `/admin/businesses/${identifier}/categories/`,
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
     * @name AdminBusinessesCategoriesCreate
     * @summary Create business category
     * @request POST:/admin/businesses/{identifier}/categories/
     * @secure
     */
    adminBusinessesCategoriesCreate: (
      identifier: string,
      data: BusinsessCategoryCreate,
      params: RequestParams = {},
    ) =>
      this.request<AdminBusinessesCategoriesCreateData, any>({
        path: `/admin/businesses/${identifier}/categories/`,
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
     * @summary Partially update company
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
  customer = {
    /**
     * No description
     *
     * @tags customer
     * @name CustomerBusinessesList
     * @summary List businesses
     * @request GET:/customer/businesses/
     * @secure
     */
    customerBusinessesList: (
      query: CustomerBusinessesListParams,
      params: RequestParams = {},
    ) =>
      this.request<CustomerBusinessesListData, any>({
        path: `/customer/businesses/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer
     * @name CustomerBusinessesRetrieve
     * @summary Retrieve business
     * @request GET:/customer/businesses/{business_id}/
     * @secure
     */
    customerBusinessesRetrieve: (
      businessId: string,
      params: RequestParams = {},
    ) =>
      this.request<CustomerBusinessesRetrieveData, any>({
        path: `/customer/businesses/${businessId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer
     * @name CustomerEnrollCreate
     * @summary Enroll customer
     * @request POST:/customer/enroll/
     * @secure
     */
    customerEnrollCreate: (data: CustomerEnroll, params: RequestParams = {}) =>
      this.request<CustomerEnrollCreateData, any>({
        path: `/customer/enroll/`,
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
     * @name ManagerBusinessCategoriesList
     * @summary List categories
     * @request GET:/manager/business-categories/
     * @secure
     */
    managerBusinessCategoriesList: (
      query: ManagerBusinessCategoriesListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessCategoriesListData, any>({
        path: `/manager/business-categories/`,
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
     * @name ManagerBusinessCategoriesRetrieve
     * @summary Retrieve business category
     * @request GET:/manager/business-categories/{identifier}/
     * @secure
     */
    managerBusinessCategoriesRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessCategoriesRetrieveData, any>({
        path: `/manager/business-categories/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerBusinessesList
     * @summary List businesses
     * @request GET:/manager/businesses/
     * @secure
     */
    managerBusinessesList: (
      query: ManagerBusinessesListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesListData, any>({
        path: `/manager/businesses/`,
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
     * @name ManagerBusinessesCreate
     * @summary Create business
     * @request POST:/manager/businesses/
     * @secure
     */
    managerBusinessesCreate: (
      data: ManagerCreateBusiness,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesCreateData, any>({
        path: `/manager/businesses/`,
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
     * @name ManagerBusinessesRetrieve
     * @summary Retrieve business
     * @request GET:/manager/businesses/{business_id}/
     * @secure
     */
    managerBusinessesRetrieve: (
      businessId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesRetrieveData, any>({
        path: `/manager/businesses/${businessId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerBusinessesUpdate
     * @summary Update business
     * @request PUT:/manager/businesses/{business_id}/
     * @secure
     */
    managerBusinessesUpdate: (
      businessId: string,
      data: ManagerUpdateBusiness,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesUpdateData, any>({
        path: `/manager/businesses/${businessId}/`,
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
     * @name ManagerBusinessesPartialUpdate
     * @summary Partially update business
     * @request PATCH:/manager/businesses/{business_id}/
     * @secure
     */
    managerBusinessesPartialUpdate: (
      businessId: string,
      data: PatchedManagerUpdateBusiness,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesPartialUpdateData, any>({
        path: `/manager/businesses/${businessId}/`,
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
     * @name ManagerBusinessesCategoriesRetrieve
     * @summary Retrieve business category
     * @request GET:/manager/businesses/{business_id}/categories/{category_id}/
     * @secure
     */
    managerBusinessesCategoriesRetrieve: (
      businessId: string,
      categoryId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesCategoriesRetrieveData, any>({
        path: `/manager/businesses/${businessId}/categories/${categoryId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerBusinessesCategoriesDestroy
     * @summary Delete business category
     * @request DELETE:/manager/businesses/{business_id}/categories/{category_id}/
     * @secure
     */
    managerBusinessesCategoriesDestroy: (
      businessId: string,
      categoryId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesCategoriesDestroyData, any>({
        path: `/manager/businesses/${businessId}/categories/${categoryId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerBusinessesDocumentsList
     * @summary List business documents
     * @request GET:/manager/businesses/{business_id}/documents/
     * @secure
     */
    managerBusinessesDocumentsList: (
      { businessId, ...query }: ManagerBusinessesDocumentsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesDocumentsListData, any>({
        path: `/manager/businesses/${businessId}/documents/`,
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
     * @name ManagerBusinessesDocumentsCreate
     * @summary Create business document
     * @request POST:/manager/businesses/{business_id}/documents/
     * @secure
     */
    managerBusinessesDocumentsCreate: (
      businessId: string,
      data: ManagerCreateBusinessDocument,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesDocumentsCreateData, any>({
        path: `/manager/businesses/${businessId}/documents/`,
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
     * @name ManagerBusinessesDocumentsRetrieve
     * @summary Retrieve business document
     * @request GET:/manager/businesses/{business_id}/documents/{document_id}/
     * @secure
     */
    managerBusinessesDocumentsRetrieve: (
      businessId: string,
      documentId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesDocumentsRetrieveData, any>({
        path: `/manager/businesses/${businessId}/documents/${documentId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerBusinessesInvoicesList
     * @summary List business invoices
     * @request GET:/manager/businesses/{business_id}/invoices/
     * @secure
     */
    managerBusinessesInvoicesList: (
      { businessId, ...query }: ManagerBusinessesInvoicesListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesInvoicesListData, any>({
        path: `/manager/businesses/${businessId}/invoices/`,
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
     * @name ManagerBusinessesInvoicesCreate
     * @summary Create business invoice
     * @request POST:/manager/businesses/{business_id}/invoices/
     * @secure
     */
    managerBusinessesInvoicesCreate: (
      businessId: string,
      data: ManagerCreateBusinessInvoice,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesInvoicesCreateData, any>({
        path: `/manager/businesses/${businessId}/invoices/`,
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
     * @name ManagerBusinessesInvoicesRetrieve
     * @summary Retrieve business invoice
     * @request GET:/manager/businesses/{business_id}/invoices/{invoice_id}/
     * @secure
     */
    managerBusinessesInvoicesRetrieve: (
      businessId: string,
      invoiceId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesInvoicesRetrieveData, any>({
        path: `/manager/businesses/${businessId}/invoices/${invoiceId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerBusinessesInvoicesUpdate
     * @summary Update business invoice
     * @request PUT:/manager/businesses/{business_id}/invoices/{invoice_id}/
     * @secure
     */
    managerBusinessesInvoicesUpdate: (
      businessId: string,
      invoiceId: string,
      data: ManagerUpdateBusinessInvoice,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesInvoicesUpdateData, any>({
        path: `/manager/businesses/${businessId}/invoices/${invoiceId}/`,
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
     * @name ManagerBusinessesInvoicesPartialUpdate
     * @summary Partially update business invoice
     * @request PATCH:/manager/businesses/{business_id}/invoices/{invoice_id}/
     * @secure
     */
    managerBusinessesInvoicesPartialUpdate: (
      businessId: string,
      invoiceId: string,
      data: PatchedManagerUpdateBusinessInvoice,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesInvoicesPartialUpdateData, any>({
        path: `/manager/businesses/${businessId}/invoices/${invoiceId}/`,
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
     * @name ManagerBusinessesInvoicesLogsList
     * @summary List business invoice logs
     * @request GET:/manager/businesses/{business_id}/invoices/{invoice_id}/logs/
     * @secure
     */
    managerBusinessesInvoicesLogsList: (
      {
        businessId,
        invoiceId,
        ...query
      }: ManagerBusinessesInvoicesLogsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesInvoicesLogsListData, any>({
        path: `/manager/businesses/${businessId}/invoices/${invoiceId}/logs/`,
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
     * @name ManagerBusinessesInvoicesRefundsList
     * @summary List business invoice refunds
     * @request GET:/manager/businesses/{business_id}/invoices/{invoice_id}/refunds/
     * @secure
     */
    managerBusinessesInvoicesRefundsList: (
      {
        businessId,
        invoiceId,
        ...query
      }: ManagerBusinessesInvoicesRefundsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesInvoicesRefundsListData, any>({
        path: `/manager/businesses/${businessId}/invoices/${invoiceId}/refunds/`,
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
     * @name ManagerBusinessesInvoicesRefundsCreate
     * @summary Create business invoice refund
     * @request POST:/manager/businesses/{business_id}/invoices/{invoice_id}/refunds/
     * @secure
     */
    managerBusinessesInvoicesRefundsCreate: (
      businessId: string,
      invoiceId: string,
      data: ManagerCreateBusinessInvoiceRefund,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesInvoicesRefundsCreateData, any>({
        path: `/manager/businesses/${businessId}/invoices/${invoiceId}/refunds/`,
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
     * @name ManagerBusinessesInvoicesTransactionsList
     * @summary List business invoice transactions
     * @request GET:/manager/businesses/{business_id}/invoices/{invoice_id}/transactions/
     * @secure
     */
    managerBusinessesInvoicesTransactionsList: (
      {
        businessId,
        invoiceId,
        ...query
      }: ManagerBusinessesInvoicesTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesInvoicesTransactionsListData, any>({
        path: `/manager/businesses/${businessId}/invoices/${invoiceId}/transactions/`,
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
     * @name ManagerBusinessesMetricsList
     * @summary List business metrics
     * @request GET:/manager/businesses/{business_id}/metrics/
     * @secure
     */
    managerBusinessesMetricsList: (
      { businessId, ...query }: ManagerBusinessesMetricsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesMetricsListData, any>({
        path: `/manager/businesses/${businessId}/metrics/`,
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
     * @name ManagerBusinessesMetricsRetrieve
     * @summary Retrieve business metric
     * @request GET:/manager/businesses/{business_id}/metrics/{metric_id}/
     * @secure
     */
    managerBusinessesMetricsRetrieve: (
      businessId: string,
      metricId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesMetricsRetrieveData, any>({
        path: `/manager/businesses/${businessId}/metrics/${metricId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerBusinessesMetricsPointsList
     * @summary List business metric points
     * @request GET:/manager/businesses/{business_id}/metrics/{metric_id}/points/
     * @secure
     */
    managerBusinessesMetricsPointsList: (
      {
        businessId,
        metricId,
        ...query
      }: ManagerBusinessesMetricsPointsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesMetricsPointsListData, any>({
        path: `/manager/businesses/${businessId}/metrics/${metricId}/points/`,
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
     * @name ManagerBusinessesPayoutsList
     * @summary List business payouts
     * @request GET:/manager/businesses/{business_id}/payouts/
     * @secure
     */
    managerBusinessesPayoutsList: (
      { businessId, ...query }: ManagerBusinessesPayoutsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesPayoutsListData, any>({
        path: `/manager/businesses/${businessId}/payouts/`,
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
     * @name ManagerBusinessesPayoutsCreate
     * @summary Create business payout
     * @request POST:/manager/businesses/{business_id}/payouts/
     * @secure
     */
    managerBusinessesPayoutsCreate: (
      businessId: string,
      data: ManagerCreateBusinessPayout,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesPayoutsCreateData, any>({
        path: `/manager/businesses/${businessId}/payouts/`,
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
     * @name ManagerBusinessesPayoutsRetrieve
     * @summary Retrieve business payout
     * @request GET:/manager/businesses/{business_id}/payouts/{payout_id}/
     * @secure
     */
    managerBusinessesPayoutsRetrieve: (
      businessId: string,
      payoutId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesPayoutsRetrieveData, any>({
        path: `/manager/businesses/${businessId}/payouts/${payoutId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerBusinessesPayoutsTransactionsList
     * @summary List business payout transactions
     * @request GET:/manager/businesses/{business_id}/payouts/{payout_id}/transactions/
     * @secure
     */
    managerBusinessesPayoutsTransactionsList: (
      {
        businessId,
        payoutId,
        ...query
      }: ManagerBusinessesPayoutsTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesPayoutsTransactionsListData, any>({
        path: `/manager/businesses/${businessId}/payouts/${payoutId}/transactions/`,
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
     * @name ManagerBusinessesTransactionsList
     * @summary List business transactions
     * @request GET:/manager/businesses/{business_id}/transactions/
     * @secure
     */
    managerBusinessesTransactionsList: (
      { businessId, ...query }: ManagerBusinessesTransactionsListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesTransactionsListData, any>({
        path: `/manager/businesses/${businessId}/transactions/`,
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
     * @name ManagerBusinessesTransactionsRetrieve
     * @summary Retrieve business transaction
     * @request GET:/manager/businesses/{business_id}/transactions/{transaction_id}/
     * @secure
     */
    managerBusinessesTransactionsRetrieve: (
      businessId: string,
      transactionId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesTransactionsRetrieveData, any>({
        path: `/manager/businesses/${businessId}/transactions/${transactionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerBusinessesUsersList
     * @summary List business users
     * @request GET:/manager/businesses/{business_id}/users/
     * @secure
     */
    managerBusinessesUsersList: (
      { businessId, ...query }: ManagerBusinessesUsersListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesUsersListData, any>({
        path: `/manager/businesses/${businessId}/users/`,
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
     * @name ManagerBusinessesUsersCreate
     * @summary Create business user
     * @request POST:/manager/businesses/{business_id}/users/
     * @secure
     */
    managerBusinessesUsersCreate: (
      businessId: string,
      data: ManagerCreateBusinessUser,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesUsersCreateData, any>({
        path: `/manager/businesses/${businessId}/users/`,
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
     * @name ManagerBusinessesUsersRetrieve
     * @summary Retrieve business user
     * @request GET:/manager/businesses/{business_id}/users/{user_id}/
     * @secure
     */
    managerBusinessesUsersRetrieve: (
      businessId: string,
      userId: string,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesUsersRetrieveData, any>({
        path: `/manager/businesses/${businessId}/users/${userId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manager
     * @name ManagerBusinessesUsersUpdate
     * @summary Update business user
     * @request PUT:/manager/businesses/{business_id}/users/{user_id}/
     * @secure
     */
    managerBusinessesUsersUpdate: (
      businessId: string,
      userId: string,
      data: ManagerUpdateBusinessUser,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesUsersUpdateData, any>({
        path: `/manager/businesses/${businessId}/users/${userId}/`,
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
     * @name ManagerBusinessesUsersPartialUpdate
     * @summary Partially update business user
     * @request PATCH:/manager/businesses/{business_id}/users/{user_id}/
     * @secure
     */
    managerBusinessesUsersPartialUpdate: (
      businessId: string,
      userId: string,
      data: PatchedManagerUpdateBusinessUser,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesUsersPartialUpdateData, any>({
        path: `/manager/businesses/${businessId}/users/${userId}/`,
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
     * @name ManagerBusinessesCategoriesList
     * @summary List business categories
     * @request GET:/manager/businesses/{identifier}/categories/
     * @secure
     */
    managerBusinessesCategoriesList: (
      { identifier, ...query }: ManagerBusinessesCategoriesListParams,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesCategoriesListData, any>({
        path: `/manager/businesses/${identifier}/categories/`,
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
     * @name ManagerBusinessesCategoriesCreate
     * @summary Create business category
     * @request POST:/manager/businesses/{identifier}/categories/
     * @secure
     */
    managerBusinessesCategoriesCreate: (
      identifier: string,
      data: BusinsessCategoryCreate,
      params: RequestParams = {},
    ) =>
      this.request<ManagerBusinessesCategoriesCreateData, any>({
        path: `/manager/businesses/${identifier}/categories/`,
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
  };
  user = {
    /**
     * No description
     *
     * @tags user
     * @name UserBusinessCategoriesList
     * @summary List categories
     * @request GET:/user/business-categories/
     * @secure
     */
    userBusinessCategoriesList: (
      query: UserBusinessCategoriesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserBusinessCategoriesListData, any>({
        path: `/user/business-categories/`,
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
     * @name UserBusinessCategoriesRetrieve
     * @summary Retrieve category
     * @request GET:/user/business-categories/{identifier}/
     * @secure
     */
    userBusinessCategoriesRetrieve: (
      identifier: string,
      params: RequestParams = {},
    ) =>
      this.request<UserBusinessCategoriesRetrieveData, any>({
        path: `/user/business-categories/${identifier}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserBusinessesList
     * @summary List businesses
     * @request GET:/user/businesses/
     * @secure
     */
    userBusinessesList: (
      query: UserBusinessesListParams,
      params: RequestParams = {},
    ) =>
      this.request<UserBusinessesListData, any>({
        path: `/user/businesses/`,
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
     * @name UserBusinessesRetrieve
     * @summary Retrieve business
     * @request GET:/user/businesses/{identifier}/
     * @secure
     */
    userBusinessesRetrieve: (identifier: string, params: RequestParams = {}) =>
      this.request<UserBusinessesRetrieveData, any>({
        path: `/user/businesses/${identifier}/`,
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
