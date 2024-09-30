declare module "rehive" {
	interface RehiveConfig {
		apiToken?: string;
		customAPIURL?: string;
		apiVersion?: string;
		network?: "staging" | "production";
		storageMethod?: "local" | "session" | undefined;
	}

	interface ApiResponse {
		status_code?: number;
		ok?: boolean;
		status: "success" | "error";
		message?: string;
		data?: any;
		[key: string]: any;
	}

	interface Filter {
		[key: string]: string;
	}
	interface ApiFilter {
		next?: string;
		previous?: string;
	}
	interface Currency {
		code: string;
		display_code: string;
		description: string;
		symbol: string;
		unit: string;
		divisibility: number;
		icon: string;
	}

	interface Group {
		name: string;
		label: string;
		section: string;
	}

	interface Metadata {
		additionalProp1?: string;
		additionalProp2?: string;
		additionalProp3?: string;
	}

	interface TransactionSubtype {
		id: number;
		name: string;
		label: string;
		tx_type: "credit" | "debit";
	}

	interface DisallowedTransactionSubtype {
		subtype: TransactionSubtype | number;
		currency: Currency | string;
	}

	interface Settings {
		allow_transactions: boolean;
		allow_debit_transactions: boolean;
		allow_credit_transactions: boolean;
		disallowed_transaction_subtypes: DisallowedTransactionSubtype[];
	}
	interface UpdateSettingResponse {
		status: "success";
		data: {
			allow_transactions: boolean;
			allow_debit_transactions: boolean;
			allow_credit_transactions: boolean;
			disallowed_transaction_subtypes: DisallowedTransactionSubtype[];
		};
	}

	interface Verification {
		email: boolean;
		mobile: boolean;
	}
	interface User {
		id: string;
		username: string;
		email: string;
		mobile: string;
		first_name: string;
		middle_name: string;
		last_name: string;
		profile: string;
		groups: Group[];
		temporary: boolean;
		id_number: string;
		birth_date: string; // In YYYY-MM-DD format
		currency: Currency;
		account: string;
		balance: number;
		available_balance: number;
		company: string;
		owner: boolean;
		language: string;
		nationality: string;
		residency: string;
		gender: "male" | "female" | "other";
		title: string; // Example: "mr", "ms", etc.
		marital_status: "single" | "married" | "divorced" | "widowed";
		fathers_name: string;
		mothers_name: string;
		grandfathers_name: string;
		grandmothers_name: string;
		central_bank_number: string;
		metadata: Metadata;
		timezone: string;
		website: string;
		business_name: string;
		verification: Verification;
		status: statusType;
		created: number; // Unix timestamp
		updated: number; // Unix timestamp
		settings: Settings;
		[key: string]: any;
	}
	interface PaginatedUserResponse {
		status: "success";
		data: {
			count: number;
			next: string;
			previous: string;
			results: UserInAdminData[];
		};
	}
	interface UserResponse {
		status: "success";
		data: UserInAdminData;
	}

	interface UserInAdminData {
		id: string;
		username: string;
		email: string;
		mobile: string;
		first_name: string;
		middle_name: string;
		last_name: string;
		profile: string;
		groups: Group[];
		temporary: boolean;
		id_number: string;
		birth_date: string; // 'YYYY-MM-DD'
		currency: Currency;
		account: string;
		balance: number;
		available_balance: number;
		company: string;
		owner: boolean;
		language: string;
		nationality: string; // Country code
		residency: string; // Country code
		gender: "male" | "female" | "other";
		title: "mr" | "mrs" | "ms" | "dr";
		marital_status: "single" | "married" | "divorced" | "widowed";
		fathers_name: string;
		mothers_name: string;
		grandfathers_name: string;
		grandmothers_name: string;
		central_bank_number: string;
		metadata: {
			property1: null;
			property2: null;
		};
		timezone: string;
		website: string;
		business_name: string;
		verified: boolean;
		verification: Verification;
		status: statusType;
		created: number;
		updated: number;
		deactivated: boolean;
		retention_state: string;
		archived: boolean;
		last_login: number;
	}
	interface RegisterCredentials {
		first_name: string;
		last_name: string;
		email: string;
		company: string;
		password: string;
		terms_and_conditions: boolean;
	}
	interface RegisterResponse {
		status: string;
		data: {
			token: string;
			user: User;
			challenges: Challenge[];
			expires: number;
			created: number;
		};
	}
	interface Challenge {
		id: string;
		type: "authentication";
		durability: "ephemeral" | "persistent";
		authenticator_types: string[];
		created: number;
	}

	interface LoginResponse {
		status: "success" | "error";
		status_code?: number;
		message?: string;
		data?: {
			token: string;
			user: User;
			challenges?: Challenge[];
		};
	}

	interface LoginCredentials {
		user: string;
		company: string;
		password: string;
	}
	interface changePassword {
		old_password: string;
		new_password: string;
	}
	interface ResetConfirmData {
		new_password: string;
		uid: string;
		token: string;
	}
	interface ResendMobileVerificationData {
		mobile: string;
		company: string;
	}
	interface BankAccountData {
		name: string;
		number: string;
		type: string;
		bank_name: string;
		bank_code: string;
		branch_code: string;
		swift?: string;
		iban?: string;
		bic?: string;
	}
	interface CryptoAccountData {
		address: string;
		crypto_type: string;
		metadata?: Metadata;
	}

	interface DocumentData {
		file: string;
		document_type: number;
		metadata: Metadata;
		expires?: number;
	}
	interface TransactionFilters {
		[key: string]: string | number | boolean;
	}

	interface GetTransactionParams {
		id?: string;
		filters?: TransactionFilters;
	}
	interface CreateDebitORCreditData {
		amount: number;
		currency: string;
		account: string;
		reference: string;
		subtype: string;
		note: string;
		metadata: Metadata;
	}
	interface CreateUserData {
		user: string;
		document_type: string;
		metadata: Metadata;
		note: string;
		status: string;
	}

	interface BankAccountCurrencyData {
		currency: string;
		[key: string]: any;
	}
	interface AuthResponse {
		status: string;
		status_code?: number;
		message?: string;
		data?: any;
	}
	type AuthMethod = "cookie" | "token";

	interface CreateAuthTokenData {
		password: string;
		duration?: number | null;
		auth_method?: AuthMethod;
	}

	interface AuthPasswordChangeData {
		old_password: string;
		new_password: string;
		clear_session_option?: ClearSessionOption;
	}

	interface AuthPasswordResetData {
		force?: boolean;
		user: string;
		company: string;
	}

	interface AuthPasswordResetConfirmData {
		new_password: string;
		uid: string;
		token: string;
		clear_session_option?: ClearSessionOption;
	}

	interface AuthEmailResendVerificationData {
		email: string;
		company: string;
	}

	interface AuthMobileResendVerificationData {
		mobile: string;
		company: string;
	}

	interface AuthMobileVerifyData {
		otp: string;
	}

	interface AuthEmailVerifyData {
		key: string;
	}

	interface AuthMFADeliverData {
		challenge?: string;
		authenticator?: string;
	}
	interface AuthMFAVerifyData {
		token: string;
		challenge?: string;
		authenticator?: string;
	}

	interface AuthMFAStatus {
		status: string;
	}

	interface AuthTokenGetResponse {
		tokens: CreateAuthTokenData[];
	}

	interface AuthMFAResponse {
		status: string;
		data?: any;
	}
	interface AuthenticatorDetails {
		name: string;
		algorithm: string;
		otpauth_url: string;
		issuer: string;
		account: string;
		key: string;
	}

	interface AuthenticatorResponse {
		status: string;
		data: {
			id: string;
			type: AuthenticatorType;
			details: AuthenticatorDetails;
			verified: boolean;
			created: number;
			updated: number;
		};
	}

	interface AuthMFAEnableData {
		[key: string]: any;
	}

	interface AuthMFADisableData {
		[key: string]: any;
	}

	type AuthenticatorType = "totp" | "sms" | "static";

	interface UserFilters {
		id?: string;
		filters?: { [key: string]: string };
	}
	interface PaginatedUserPermissions {
		status: "success";
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: AdminUserPermission[];
		};
	}

	interface AdminUserPermission {
		id: number;
		section: "system" | "admin" | "user";
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
			| "legalterm"
			| "mfa"
			| "mfarule"
			| "mobile"
			| "notification"
			| "permission"
			| "request"
			| "service"
			| "token"
			| "transaction"
			| "transactionsubtypes"
			| "user"
			| "webhook";
		level: "view" | "add" | "change" | "delete";
		properties?: { [key: string]: any } | null;
	}
	interface UserPermissionCreateResponse {
		status: string;
		data: {
			permissions: AdminUserPermission[];
		};
	}
	interface UserPermissionResponse {
		status: string;
		data: {
			permissions: AdminUserPermission[];
		};
	}
	interface AuthorGroup {
		name: string;
		label: string;
		section: "system" | "admin" | "user";
	}

	interface Author {
		id: string;
		username: string;
		email: string;
		mobile: string;
		first_name: string;
		middle_name: string;
		last_name: string;
		profile: string;
		groups: AuthorGroup[];
		temporary: boolean;
	}
	type sectionType = "system" | "admin" | "user";
	type levelType = "info" | "warning" | "error";
	interface MessageResult {
		id: number;
		section: sectionType;
		level: levelType;
		message: string;
		archived: boolean;
		author: Author;
		created: number;
		updated: number;
	}

	interface PaginatedMessageResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: MessageResult[];
		};
	}
	interface MessageResponse {
		status: string;
		data: MessageResult;
	}
	interface MessageData {
		section: sectionType;
		level: levelType;
		message: string;
		archived: boolean;
	}
	interface TierLimit {
		id: number;
		value: number;
		type: string; // "max" or others
		tx_type: string; // "credit" or "debit"
		subtype: string;
		account_definition: string;
		currency: string;
	}

	interface TierFee {
		id: number;
		name: string;
		tx_type: string; // "credit" or "debit"
		subtype: string;
		account_definition: string;
		currency: string;
		value: number;
		percentage: number;
		description: string;
	}

	interface Subtype {
		id: number;
		name: string;
		label: string;
		tx_type: string; // "credit" or "debit"
	}

	interface Currency {
		code: string;
		display_code: string;
		description: string;
		symbol: string;
		unit: string;
		divisibility: number;
		icon: string;
	}

	interface TierSettings {
		allow_transactions: boolean;
		allow_debit_transactions: boolean;
		allow_credit_transactions: boolean;
		disallowed_transaction_subtypes: DisallowedTransactionSubtype[];
	}

	interface Tier {
		id: number;
		level: number;
		name: string;
		description: string;
		limits: TierLimit[];
		fees: TierFee[];
		settings: TierSettings;
		archived: boolean;
		created: number;
		updated: number;
	}

	interface Settings {
		allow_transactions: boolean;
		allow_debit_transactions: boolean;
		allow_credit_transactions: boolean;
		disallowed_transaction_subtypes: DisallowedTransactionSubtype[];
		password_reset_url: string;
		password_set_url: string;
		email_verification_url: string;
		deactivate_verification_url: string;
		request_delete_verification_url: string;
	}

	interface Data {
		name: string;
		label: string;
		description: string;
		icon: string;
		default: boolean;
		public: boolean;
		listed: boolean;
		permissions: number;
		tier: Tier;
		tiers: {
			id: number;
			level: number;
			name: string;
			description: string;
		}[];
		settings: Settings;
		archived: boolean;
		created: number;
		updated: number;
	}

	interface GroupsResponse {
		status: string;
		data: Data;
	}
	interface PaginatedGroupsResponse {
		status: string;
		data: Data[];
	}
	interface Group {
		name: string;
		label: string;
		section: string;
	}

	type addressType =
		| "permanent"
		| "contact"
		| "shipping"
		| "billing"
		| "business";
	type statusType =
		| "obsolete"
		| "declined"
		| "pending"
		| "incomplete"
		| "verified";
	interface AddressResult {
		id: number;
		type: addressType; // "permanent" or other types
		user: User;
		line_1: string;
		line_2: string;
		city: string;
		state_province: string;
		country: string; // ISO 3166 country code e.g., "AF"
		postal_code: string;
		status: statusType; // e.g., "obsolete"
		archived: boolean;
		created: number;
		updated: number;
	}

	interface PaginatedAddressResponse {
		count: number;
		next: string | null;
		previous: string | null;
		results: AddressResult[];
	}

	interface AddressResponse {
		status: string;
		data: AddressResult;
	}
	interface Owner {
		first_name: string;
		middle_name?: string;
		last_name: string;
		phone_number: string;
		email_address: string;
		company_name: string;
		ein_tin: string;
		address: Address;
		cpf_cpnj: string;
	}

	interface Currency {
		code: string;
		display_code: string;
		description: string;
		symbol: string;
		unit: string;
		divisibility: number;
		icon: string;
	}

	interface BankAccount {
		id: number;
		user: User;
		name: string;
		owner: Owner;
		number: string;
		type: string;
		beneficiary_type: "individual" | "company";
		clabe: string;
		bank_name: string;
		bank_code: string;
		branch_code: string;
		branch_address: Address;
		routing_number: string;
		swift: string;
		iban: string;
		bic: string;
		code: string;
		status: statusType; // e.g., "obsolete"
		metadata: Record<string, any>; // or specific metadata fields
		archived: boolean;
		currencies: Currency[];
		action: string; // e.g., "withdraw"
		created: number;
		updated: number;
	}

	interface BankAccountListResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: BankAccount[];
		};
	}

	interface BankAccountResponse {
		status: string;
		data: BankAccount;
	}

	interface CreateBankAccountPayload {
		user: string;
		name: string;
		owner: Owner;
		number: string;
		type: string;
		beneficiary_type: string;
		clabe: string;
		bank_name: string;
		bank_code: string;
		branch_code: string;
		branch_address: Address;
		routing_number: string;
		swift: string;
		iban: string;
		bic: string;
		status: string;
		metadata: Record<string, any>;
		archived: boolean;
		action: string;
	}
	interface Account {
		reference: string;
		name: string;
		label: string;
		primary: boolean;
	}
	interface BankAccountCurrency {
		id: string;
		balance: number;
		available_balance: number;
		account: Account;
		currency: Currency;
		active: boolean;
		archived: boolean;
	}
	interface AllBankAccountCurrencyResponse {
		status: string;
		data: BankAccountCurrency[];
	}
	interface GetBankAccountCurrencyResponse {
		status: string;
		data: BankAccountCurrency;
	}

	interface CryptoAccount {
		id: number;
		address: string;
		name: string;
		code: string;
		crypto_type: string;
		network: string;
		metadata: Metadata;
		user: User;
		status: string;
		currencies: Currency[];
		account_currencies: BankAccountCurrency[];
		archived: boolean;
		action: string;
		created: number;
		updated: number;
	}

	interface PaginatedCryptoAccountListResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: CryptoAccount[];
		};
	}
	interface CryptoAccountListResponse {
		status: string;
		data: CryptoAccount;
	}
	interface CryptoAccountData {
		address: string;
		name: string;
		crypto_type: string;
		network: string;
		metadata?: Metadata;
		user: string;
		status: string;
		archived: boolean;
		action: string;
	}
	interface FileType {
		id: number;
		name: string;
		description: string;
	}
	interface UserDocument {
		id: number;
		user: User;
		file: string;
		type: FileType;
		status: statusType;
		metadata: Metadata;
		note: string;
		archived: boolean;
		expires: number;
		created: number;
		updated: number;
	}
	interface UserDocumentPayload {
		user: string;
		file: string;
		type: number;
		status: statusType;
		metadata: Metadata;
		note: string;
		archived: boolean;
		expires: number;
	}
	interface PaginatedUserDocuments {
		status: string;
		data: {
			count: number;
			next: string;
			previous: string;
			results: UserDocument[];
		};
	}
	interface UserDocuments {
		status: string;
		data: UserDocument;
	}
	interface EmailResult {
		user: User;
		id: number;
		email: string;
		primary: boolean;
		verified: boolean;
		archived: boolean;
		temporary: boolean;
		created: number;
		updated: number;
	}
	interface EmailCreatePayload {
		user: string;
		email: string;
		primary: boolean;
		verified: boolean;
	}

	interface PaginatedEmailListResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: EmailResult[];
		};
	}
	interface SingleEmailResponse {
		status: string;
		data: EmailResult;
	}
	interface MobileListResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: MobileDetails[];
		};
	}
	interface SingleMobileResponse {
		status: string;
		data: MobileDetails;
	}
	interface MobileNumberPayload {
		user: string;
		number: string;
		primary: boolean;
		verified: boolean;
		archived: boolean;
	}

	interface MobileDetails {
		user: User;
		id: number;
		number: string;
		primary: boolean;
		verified: boolean;
		archived: boolean;
		temporary: boolean;
		created: number;
		updated: number;
	}
	interface TransactionListResponse {
		status: string;
		data: {
			count: number;
			next: string;
			previous: string;
			results: Transaction[];
		};
	}
	interface TransactionTotal {
		status: string;
		data: {
			total_amount: number;
			amount: number;
			fees: number;
			count: number;
			currency: string;
		};
	}
	interface SingleTransactionResponse {
		status: string;
		data: Transaction;
	}

	type TransactionStatus =
		| "Initiating"
		| "Quoted"
		| "Pending"
		| "Complete"
		| "Failed";

	interface TransactionPayload {
		transactions: Transaction[];
	}

	interface Transaction {
		id: string;
		collection: string;
		parent: string;
		partner: Partner;
		index: number;
		tx_type: string;
		subtype: string;
		note: string;
		metadata: Metadata;

		status: TransactionStatus;
		reference: string;
		amount: number;
		fee: number;
		total_amount: number;
		balance: number;
		account: string;
		label: string;
		currency: Currency | string;
		user: User;
		inclusive: boolean;
		archived: boolean;
		executed: number;
		expires: number;
		created: number;
		updated: number;
	}
	interface TransactionCreditOrDebitPayload {
		id: string;
		amount: number;
		currency: string;
		account: string;
		subtype: string;
		reference: string;
		note: string;
		metadata: Metadata;
		user: string;
		inclusive: boolean;
		status: TransactionStatus;
		fees: Array<{
			description: string;
			amount: number;
		}>;
		expires: number;
	}

	interface Partner {
		id: string;
		user: User;
		account: string;
	}

	interface MetricObj {
		id?: string;
		filters?: Record<string, string>;
	}
	interface Filters {
		[key: string]: any;
	}

	type ClearSessionOption = "all" | "temporary" | "none";
	interface UpdateUserData {
		username: string;
		first_name?: string;
		middle_name?: string;
		last_name?: string;
		profile?: string;
		id_number?: string;
		birth_date?: string; // ISO format 'YYYY-MM-DD'
		language?: string;
		nationality?: string; // Country code (e.g., 'AF')
		residency?: string; // Country code (e.g., 'AF')
		gender?: "male" | "female" | "other";
		title?: "mr" | "mrs" | "ms" | "dr";
		marital_status?: "single" | "married" | "divorced" | "widowed";
		fathers_name?: string;
		mothers_name?: string;
		grandfathers_name?: string;
		grandmothers_name?: string;
		central_bank_number?: string;
		timezone?: string;
		website?: string;
		business_name?: string;
	}
	interface Address {
		id?: number;
		type: "permanent" | "temporary";
		line_1: string;
		line_2?: string;
		city: string;
		state_province: string;
		country: string;
		postal_code: string;
		status?: string;
		created?: number;
		updated?: number;
	}

	interface GetAllAddressApiResponse {
		status: "success" | "error";
		data: Address[];
	}
	interface GetSingleAddressApiResponse {
		status: "success" | "error";
		data: Address;
	}

	interface Owner {
		first_name: string;
		middle_name?: string; // Optional
		last_name: string;
		phone_number: string;
		email_address: string;
		company_name: string;
		ein_tin: string;
		address: Address;
		cpf_cpnj: string;
	}

	interface Currency {
		code: string;
		display_code: string;
		description: string;
		symbol: string;
		unit: string;
		divisibility: number;
		icon: string;
	}

	interface AccountCurrency {
		id: string;
		balance: number;
		available_balance: number;
		account: {
			reference: string;
			name: string;
			label: string;
			primary: boolean;
		};
		currency: Currency;
		active: boolean;
	}

	interface BankAccount {
		id: number;
		name: string;
		number: string;
		type: string;
		beneficiary_type: "individual" | "company";
		clabe: string;
		owner: Owner;
		bank_name: string;
		bank_code: string;
		branch_code: string;
		branch_address: Address;
		routing_number: string;
		swift: string;
		iban: string;
		bic: string;
		code: string;
		metadata: Record<string, any>; // or specific metadata fields
		status: statusType;
		currencies: Currency[];
		account_currencies: AccountCurrency[];
		action: string;
		created: number;
		updated: number;
	}
	interface GetAllBankAccountsApiResponse {
		status: "success" | "error";
		data: BankAccount[];
	}
	interface GetSingleBankAccountApiResponse {
		status: "success" | "error";
		data: BankAccount;
	}
	interface DocumentCreateData {
		file: string;
		type: number;
		metadata?: Metadata;
		expires?: number;
	}
	interface FileType {
		id: number;
		name: string;
		description: string;
	}

	interface DocumentCreateResponse {
		status: "success" | "error";
		data: {
			id: number;
			file: string;
			type: FileType;
			status: string;
			metadata: Metadata;
			note?: string;
			expires?: number;
			created?: number;
			updated?: number;
		};
	}
	interface Email {
		id: number;
		email: string;
		primary: boolean;
		verified: boolean;
		created: number;
		updated: number;
	}
	interface EmailResponse {
		status: string;

		data: Email;
	}
	interface AllEmailResponse {
		status: "success" | "error";

		data: Email[];
	}
	interface Mobile {
		id: number;
		number: string;
		primary: true;
		verified: true;
		created: number;
		updated: number;
	}
	interface MobileResponse {
		status: "success" | "error";

		data: Mobile;
	}
	interface AllMobileResponse {
		status: "success" | "error";

		data: Mobile[];
	}

	interface LegalTerms {
		id: number;
		type: string;
		name: string;
		description: string;
		versions: {
			id: number;
			version: number;
			accepted: boolean;
			created: number;
			updated: number;
		}[];
		created: number;
		updated: number;
	}
	interface PaginatedLegalTermsResponse {
		status: "success" | "error";
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: LegalTerms[];
		};
	}
	interface LegalTermResponse {
		status: "success" | "error";
		data: LegalTerms;
	}
	interface Version {
		id: number;
		version: number;
		accepted: boolean;
		accepted_date: number;
		note: string;
		content: string;
		created: number;
		updated: number;
	}
	interface VersionResponse {
		status: "success" | "error";
		data: Version;
	}
	interface PaginatedVersionResponse {
		status: "success" | "error";
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: Version[];
		};
	}

	interface TransactionCollection {
		id: string;
		transactions: Array<{
			id: string;
			parent: string;
			partner: string;
			index: number;
			inferred: boolean;
			tx_type: "credit" | "debit";
			subtype: string;
			note: string;
			metadata: Metadata;
			status: TransactionStatus;
			reference: string;
			amount: number;
			fee: number;
			total_amount: number;
			balance: number;
			account: string;
			label: string;
			currency: Currency;
			user: User;
			inclusive: boolean;
			archived: boolean;
			executed: number;
			created: number;
			updated: number;
			expires: number;
		}>;
		status: TransactionStatus;
		archived: boolean;
		created: number;
		updated: number;
	}

	interface TransactionCollectionResponse {
		status: "success" | "error";
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: TransactionCollection[];
		};
	}
	interface SingleTransactionCollectionResponse {
		status: "success" | "error";
		data: TransactionCollection;
	}
	interface UpdateCollectionPayload {
		status: "Quoted" | "Pending" | "Complete" | "Failed";
		checks: Array<"type" | "verification" | "limits" | "balance"> | null;
		archived: boolean;
	}

	interface AccountResponse {
		status: "success";
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: CurrencyAccount[];
		};
	}
	interface SingleAccountResponse {
		status: "success";
		data: CurrencyAccount;
	}
	interface Limit {
		id: number;
		value: number;
		type: string;
		tx_type: string;
		subtype: string;
		created: number;
		updated: number;
	}

	interface Fee {
		id: number;
		name: string;
		description: string;
		value: number;
		percentage: number;
		tx_type: string;
		subtype: string;
		created: number;
		updated: number;
		account: string;
		asset: string;
		debit_account: string;
		credit_account: string;
		debit_subtype: string;
		credit_subtype: string;
		inferred: boolean;
		archived: boolean;
	}

	interface AccountAdminCurrency {
		id: string;
		balance: number;
		available_balance: number;
		currency: Currency;
		limits: Limit[];
		fees: Fee[];
		active: boolean;
		settings: Settings;
		subtypes: Subtype[];
		archived: boolean;
		created: number;
		updated: number;
	}
	interface AllAdminCurrencyResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: Account[];
		};
	}
	interface GetSingleAdminCurrencyResponse {
		status: string;
		data: Account;
	}
	interface CreateAdminCurrencyPayload {
		reference: string;
		name: string;
		label: string;
		primary: boolean;
		recon: boolean;
		user: string;
		metadata: {
			property1: any;
			property2: any;
		};
		archived: boolean;
	}
	interface UpdateAdminCurrencyPayload {
		name?: string;
		label?: string;
		primary?: boolean;
		recon?: boolean;
		user?: string;
		metadata?: {
			property1?: any;
			property2?: any;
		};
		archived?: boolean;
	}
	interface CurrencyLimit {
		id: number;
		value: number;
		type: string;
		tx_type: string;
		subtype: string;
		created: number;
		updated: number;
	}

	interface AllCurrencyLimitResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: CurrencyLimit[];
		};
	}
	interface SingleCurrencyLimitResponse {
		status: string;
		data: CurrencyLimit;
	}
	interface CurrencyLimitCreationPayload {
		value: number;
		type: string;
		tx_type: string;
		subtype: string;
	}

	interface AccountCurrencyFee {
		id: number;
		name: string;
		description: string;
		value: number;
		percentage: number;
		tx_type: string;
		subtype: string;
		created: number;
		updated: number;
		account: string;
		asset: string;
		debit_account: string;
		credit_account: string;
		debit_subtype: string;
		credit_subtype: string;
		inferred: boolean;
		archived: boolean;
	}

	interface AllAccountCurrencyFeesResponse {
		status: string;
		data: AccountCurrencyFee[];
	}
	interface SingleAccountCurrencyFeesResponse {
		status: string;
		data: AccountCurrencyFee;
	}
	interface AccountCurrencyFeeCreationPayload {
		name: string;
		value: number;
		percentage: number;
		tx_type: string;
		subtype: string;
		description: string;
		debit_account: string;
		credit_account: string;
		debit_subtype: string;
		credit_subtype: string;
		inferred: boolean;
	}
	interface DisallowedCurrencyTransactionSubtype {
		id: number;
		name: string;
		label: string;
		tx_type: string;
	}
	interface CurrencyListSettings {
		allow_transactions: boolean;
		allow_debit_transactions: boolean;
		allow_credit_transactions: boolean;
		disallowed_transaction_subtypes: DisallowedCurrencyTransactionSubtype[];
	}

	interface CurrencyListSettingsResponse {
		status: string;
		data: CurrencyListSettings;
	}
	interface UpdateCurrencySettingsPayload {
		allow_transactions: boolean;
		allow_debit_transactions: boolean;
		allow_credit_transactions: boolean;
		disallowed_transaction_subtypes: number[];
	}

	interface AccountGroup {
		group: {
			name: string;
			label: string;
			section: string;
		};
		default: boolean;
		primary: boolean;
		currencies: AccountCurrency[];
		archived: boolean;
		created: number;
		updated: number;
	}

	interface AccountDefinition {
		name: string;
		label: string;
		recon: boolean;
		groups: AccountGroup[];
		archived: boolean;
		created: number;
		updated: number;
	}

	interface AllAccountDefinitionResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: AccountDefinition[];
		};
	}
	interface SingleAccountDefinitionResponse {
		status: string;
		data: AccountDefinition;
	}
	interface CreateDefinitionPayload {
		name: string;
		label: string;
		recon: boolean;
		archived: boolean;
	}

	interface CurrencyInfo {
		currency: Currency;
		archived: boolean;
		created: number;
		updated: number;
	}

	interface Group {
		name: string;
		label: string;
		section: string;
	}

	interface AccountDefinitionGroup {
		group: Group;
		default: boolean;
		primary: boolean;
		currencies: CurrencyInfo[];
		archived: boolean;
		created: number;
		updated: number;
	}

	interface AccountDefinitionsGroupsResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: AccountDefinitionGroup[];
		};
	}
	interface SingleAccountDefinitionsGroupsResponse {
		status: string;
		data: AccountDefinitionGroup;
	}
	interface AccountGroupPayload {
		group: string;
		default: boolean;
		primary: boolean;
		currencies: string[];
		archived: boolean;
	}

	interface GroupCurrency {
		currency: Currency;
		archived: boolean;
		created: number;
		updated: number;
	}

	interface AccountDefinitionGroupCurrenciesResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: GroupCurrency[];
		};
	}
	interface SingleAccountDefinitionGroupCurrenciesResponse {
		status: string;
		data: GroupCurrency;
	}
	interface Query {
		property1: any;
		property2: any;
	}
	interface Metric {
		id: string;
		name: string;
		slug: string;
		metadata: Metadata;
		type: string;
		currency: Currency;
		timezone: string;
		query: Query;
		method: string;
		created: number;
		updated: number;
		user: User;
		section: string;
		archived: boolean;
	}

	interface AllAdminListMetricsResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: Metric[];
		};
	}
	interface SingleAdminListMetricsResponse {
		status: string;
		data: Metric;
	}
	type methodType = "accumulate" | "set";
	type MetricType =
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
	interface CreateMetricsPayload {
		name: string;
		slug: string;
		type: MetricType;
		method: methodType;
		currency: string;
		timezone: string;
		query: Query;
		metadata: Metadata;
		user: string;
		section: "admin";
	}
	interface MetricPoint {
		id: number;
		value: number;
		date: number;
	}

	interface MetricPointsListResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: MetricPoint[];
		};
	}

	interface ExportResult {
		id: string;
		section: string;
		resource: string;
		query: Query;
		status: string;
		progress: number;
		count: number;
		page_size: number;
		file_format: string;
		created: number;
		updated: number;
		user: User;
		archived: boolean;
	}

	interface AllExportsResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: ExportResult[];
		};
	}
	interface SingleExportsResponse {
		status: string;
		data: ExportResult;
	}
	type resourceType = "account" | "account_currency" | "transaction" | "user";
	interface CreateExportPayload {
		resource: resourceType;
		page_size: number;
		query: {
			property1: any | null;
			property2: any | null;
		};
		file_format: "json" | "csv";
		user: string;
		section: string; // Section name, e.g., "admin" or "user"
	}
	type actionType = "allow" | "deny";
	interface AccessControlRule {
		id: number;
		action: actionType;
		type: "ip" | string;
		value: string;
		label: string;
		user: User;
		group: Group;
		created: number;
		updated: number;
	}
	interface CreateAccessControlRulePayload {
		action: actionType;
		type: "ip" | string;
		value: string;
		label: string;
		user: string;
		group: string;
	}

	interface AllAccessControlRulesResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: AccessControlRule[];
		};
	}
	interface SingleAccessControlRulesResponse {
		status: string;
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: AccessControlRule[];
		};
	}
	interface AdminCurrency {
		code: string;
		display_code: string;
		description: string;
		symbol: string;
		unit: string;
		divisibility: number;
		icon: string;
		manager: {
			id: string;
			first_name: string;
			middle_name?: string;
			last_name: string;
			service: {
				id: number;
				slug: string;
				name: string;
				url: string;
				type: "system" | "custom";
			};
		};
		manager_conditions: Array<{
			property1: any;
			property2: any;
		}>;
		metadata: {
			property1: any;
			property2: any;
		};
		archived: boolean;
		created: number;
		updated: number;
	}

	interface AdminCurrencyListResponse {
		status: "success" | "error";
		data: {
			count: number;
			next: string | null;
			previous: string | null;
			results: AdminCurrency[];
		};
	}
	interface SingleAdminCurrencyResponse {
		status: "success" | "error";
		data: AdminCurrency;
	}
	interface CreateCurrencyPayload {
		code: string;
		display_code: string;
		description: string;
		symbol: string;
		unit: string;
		divisibility: number;
		icon: string;
		manager: string;
		manager_conditions: Metadata[];
		metadata: Metadata;
		archived: boolean;
	}
	interface CurrencyOverviewResponse {
		status: string;
		data: CurrencyOverviewData;
	}

	interface CurrencyOverviewData {
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
	interface CurrencyAccount {
		reference: string;
		name: string;
		definition: string;
		label: string;
		primary: boolean;
		recon: boolean;
		user: User;
		currencies: Currency[];
		metadata: Record<string, any>;
		archived: boolean;
		created: number;
		updated: number;
	}
	interface CreateCurrencyAccountPayload {
		reference: string;
		name: string;
		label: string;
		primary: boolean;
		recon: boolean;
		user: string;
		metadata: Metadata;
		archived: boolean;
	}

	class Rehive {
		constructor(config?: RehiveConfig);
		public: {
			companies: {
				get(id?: string): Promise<any>;
			};
		};
		auth: {
			register(
				credentials: RegisterCredentials,
			): Promise<RegisterResponse>;
			registerCompany(
				credentials: RegisterCredentials,
			): Promise<RegisterResponse>;
			login(credentials: {
				email: string;
				password: string;
			}): Promise<LoginResponse>;
			logout(
				clearSessionOption?: ClearSessionOption,
			): Promise<AuthResponse>;
			logoutAll(): Promise<void>;
			password: {
				change(data: AuthPasswordChangeData): Promise<AuthResponse>;
				reset(data: AuthPasswordResetData): Promise<AuthResponse>;
				resetConfirm(
					data: AuthPasswordResetConfirmData,
				): Promise<AuthResponse>;
			};
			email: {
				resendEmailVerification(
					data: AuthEmailResendVerificationData,
				): Promise<AuthResponse>;
				verify(data: AuthEmailVerifyData): Promise<AuthResponse>;
			};
			mobile: {
				resendMobileVerification(
					data: AuthMobileResendVerificationData,
				): Promise<AuthResponse>;
				verify(data: AuthMobileVerifyData): Promise<AuthResponse>;
			};
			tokens: {
				get(tokenKey: string): Promise<AuthTokenGetResponse>;
				create(data: CreateAuthTokenData): Promise<RegisterResponse>;
				delete(tokenKey: string): Promise<AuthResponse>;
				verify(token: string): Promise<AuthResponse>;
			};
			mfa: {
				verify(data: AuthMFAVerifyData): Promise<AuthResponse>;
				deliver(data: AuthMFADeliverData): Promise<AuthResponse>;
				authenticators: {
					get(obj?: {
						id?: string;
						filters?: any;
					}): Promise<AuthenticatorResponse>;
					getNext(): Promise<AuthMFAResponse>;
					getPrevious(): Promise<AuthMFAResponse>;
					create(data: {
						type: AuthenticatorType;
					}): Promise<AuthenticatorResponse>;
					delete(id: string): Promise<AuthenticatorResponse>;
				};
				status: {
					get(): Promise<AuthMFAStatus>;
				};
				sms: {
					get(): Promise<AuthResponse>;
					enable(data: AuthMFAEnableData): Promise<AuthResponse>;
					send(data: AuthMFAEnableData): Promise<AuthResponse>;
					disable(data: AuthMFADisableData): Promise<AuthResponse>;
				};
				token: {
					get(): Promise<{ token: string }>;
					enable(data: { token: string }): Promise<AuthResponse>;
					disable(): Promise<AuthResponse>;
				};
			};
		};
		user: {
			get(): Promise<ApiResponse>;
			update(id: string, data: UpdateUserData): Promise<ApiResponse>;
			addresses: {
				get(
					id?: string,
				): Promise<
					GetAllAddressApiResponse | GetSingleAddressApiResponse
				>;
				update(
					id: string,
					data: Address,
				): Promise<GetSingleAddressApiResponse>;
				create(data: Address): Promise<GetSingleAddressApiResponse>;
				delete(id: string): Promise<ApiResponse>;
			};
			bankAccounts: {
				get(
					bankId?: string,
				): Promise<
					| GetSingleBankAccountApiResponse
					| GetAllBankAccountsApiResponse
				>;
				create(
					data: BankAccount,
				): Promise<GetSingleBankAccountApiResponse>;
				update(
					bankId: string,
					data: BankAccount,
				): Promise<GetSingleBankAccountApiResponse>;
				delete(bankId: string): Promise<ApiResponse>;
			};
			cryptoAccounts: {
				get(cryptoAccountId?: string): Promise<any>;
				create(data: any): Promise<any>;
				update(accountId: string, data: any): Promise<any>;
				delete(id: string): Promise<any>;
			};
			documents: {
				get(obj?: {
					id?: string;
					filters?: Record<string, any>;
				}): Promise<DocumentCreateResponse>;
				getPrevious(): Promise<DocumentCreateResponse>;
				create(
					data: DocumentCreateData,
				): Promise<DocumentCreateResponse>;
			};
			emails: {
				get(id?: string): Promise<EmailResponse | AllEmailResponse>;
				create(data: {
					email: string;
					primary: boolean;
				}): Promise<EmailResponse>;
				update(
					emailId: string,
					data: { primary: boolean },
				): Promise<EmailResponse>;
				delete(id: string): Promise<ApiResponse>;
			};
			mobiles: {
				get(id?: string): Promise<AllMobileResponse | MobileResponse>;
				create(data: { number: string }): Promise<MobileResponse>;
				update(
					mobileNumberId: string,
					data: { primary: boolean },
				): Promise<MobileResponse>;
				delete(id: string): Promise<ApiResponse>;
			};
			legalTerms: {
				get(obj?: {
					id?: string;
					filters?: Record<string, any>;
				}): Promise<LegalTermResponse | PaginatedLegalTermsResponse>;
				getNext(): Promise<PaginatedLegalTermsResponse>;
				getPrevious(): Promise<PaginatedLegalTermsResponse>;
				versions: {
					get(
						termId: string,
						obj?: { id?: string; filters?: Record<string, any> },
					): Promise<VersionResponse | PaginatedVersionResponse>;
					getNext(): Promise<PaginatedVersionResponse>;
					getPrevious(): Promise<PaginatedVersionResponse>;
					update(
						termId: string,
						versionId: string,
						data: {
							accepted: boolean;
						},
					): Promise<VersionResponse>;
				};
			};
		};

		admin: {
			users: {
				get: (obj?: {
					id?: string;
					filters?: Filters;
				}) => Promise<UserResponse | PaginatedUserResponse>;
				getNext: () => Promise<PaginatedUserResponse>;
				getPrevious: () => Promise<PaginatedUserResponse>;
				create: (data: UserInAdminData) => Promise<UserResponse>;
				update: (
					id: string,
					data: UserInAdminData,
				) => Promise<UserResponse>;
				delete: (id: string) => Promise<ApiResponse>;
				overview: {
					get: (obj?: { filters?: Filters }) => Promise<ApiResponse>;
				};
				settings: {
					get: (id: string) => Promise<Settings>;
					update: (
						id: string,
						data: Settings,
					) => Promise<UpdateSettingResponse>;
				};
				kyc: {
					get: (id: string) => Promise<any>;
					update: (id: string, data: any) => Promise<any>;
				};

				permissions: {
					get: (
						per_id?: string,
						obj?: { id?: string; filters?: UserFilters },
					) => Promise<
						PaginatedUserPermissions | UserPermissionResponse
					>;
					getNext: () => Promise<PaginatedUserPermissions>;
					getPrevious: () => Promise<PaginatedUserPermissions>;
					create: (
						uuid: string,
						data: AdminUserPermission,
					) => Promise<UserPermissionResponse>;
					delete: (uuid: string, id: string) => Promise<any>;
				};
				messages: {
					get: (
						uuid: string,
						obj?: { id?: string; filters?: UserFilters },
					) => Promise<PaginatedMessageResponse | MessageResponse>;
					getNext: () => Promise<PaginatedMessageResponse>;
					getPrevious: () => Promise<PaginatedMessageResponse>;
					create: (
						uuid: string,
						data: MessageData,
					) => Promise<MessageResponse>;
				};
				groups: {
					get: (
						id: string,
						groupName?: string,
					) => Promise<PaginatedGroupsResponse | GroupsResponse>;
					getNext: () => Promise<PaginatedGroupsResponse>;
					getPrevious: () => Promise<PaginatedGroupsResponse>;
					create: (
						uuid: string,
						data: any,
					) => Promise<GroupsResponse>;
					delete: (
						uuid: string,
						name: string,
					) => Promise<ApiResponse>;
				};
				addresses: {
					get: (obj?: {
						id?: string;
						filters?: UserFilters;
					}) => Promise<PaginatedAddressResponse | AddressResponse>;
					getNext: () => Promise<PaginatedAddressResponse>;
					getPrevious: () => Promise<PaginatedAddressResponse>;
					create: (data: AddressResult) => Promise<AddressResponse>;
					update: (
						id: string,
						data: AddressResult,
					) => Promise<AddressResponse>;
					delete: (id: string) => Promise<ApiResponse>;
				};
				bankAccounts: {
					get(id: string): Promise<BankAccountListResponse>;
					create(
						data: CreateBankAccountPayload,
					): Promise<BankAccountResponse>;
					update(
						id: string,
						data: Partial<CreateBankAccountPayload>,
					): Promise<BankAccountResponse>;
					delete(id: string): Promise<ApiResponse>;
					currencies: {
						get(
							id: string,
							obj?: { code?: string; filters?: any },
						): Promise<
							| AllBankAccountCurrencyResponse
							| GetBankAccountCurrencyResponse
						>;
						getNext(): Promise<AllBankAccountCurrencyResponse>;
						getPrevious(): Promise<AllBankAccountCurrencyResponse>;
						create(
							id: string,
						): Promise<GetBankAccountCurrencyResponse>;
						delete(
							id: string,
							currCode: string,
						): Promise<ApiResponse>;
					};
				};
				cryptoAccounts: {
					get: (obj?: {
						id?: string;
						filters?: any;
					}) => Promise<
						| PaginatedCryptoAccountListResponse
						| CryptoAccountListResponse
					>;
					getNext: () => Promise<PaginatedCryptoAccountListResponse>;
					getPrevious: () => Promise<PaginatedCryptoAccountListResponse>;
					create: (data: any) => Promise<CryptoAccountListResponse>;
					update: (
						id: string,
						data: CryptoAccountData,
					) => Promise<CryptoAccountListResponse>;
					delete: (id: string) => Promise<ApiResponse>;
				};
				documents: {
					get: (obj?: {
						id?: string;
						filters?: any;
					}) => Promise<PaginatedUserDocuments | UserDocuments>;
					getNext: () => Promise<PaginatedUserDocuments>;
					getPrevious: () => Promise<PaginatedUserDocuments>;
					create: (
						data: UserDocumentPayload,
					) => Promise<UserDocuments>;
					update: (
						id: string,
						data: UserDocumentPayload,
					) => Promise<any>;
					delete: (id: string) => Promise<ApiResponse>;
				};
				emails: {
					get: (obj?: {
						id?: string;
						filters?: any;
					}) => Promise<
						PaginatedEmailListResponse | SingleEmailResponse
					>;
					getNext: () => Promise<PaginatedEmailListResponse>;
					getPrevious: () => Promise<PaginatedEmailListResponse>;
					create: (
						data: EmailCreatePayload,
					) => Promise<SingleEmailResponse>;
					update: (
						id: string,
						data: EmailCreatePayload,
					) => Promise<SingleEmailResponse>;
					delete: (id: string) => Promise<ApiResponse>;
				};
				mobiles: {
					get: (obj?: {
						id?: string;
						filters?: any;
					}) => Promise<MobileListResponse | SingleMobileResponse>;
					getNext: () => Promise<PaginatedMessageResponse>;
					getPrevious: () => Promise<PaginatedMessageResponse>;
					create: (
						data: MobileNumberPayload,
					) => Promise<SingleMobileResponse>;
					update: (
						id: string,
						data: MobileNumberPayload,
					) => Promise<SingleMobileResponse>;
					delete: (id: string) => Promise<ApiResponse>;
				};
			};
			transactions: {
				get(obj?: {
					id?: string;
					filters?: Record<string, string>;
				}): Promise<
					TransactionListResponse | SingleTransactionResponse
				>;
				getNext(): Promise<TransactionListResponse>;
				getPrevious(): Promise<TransactionListResponse>;
				totals: {
					get(obj?: {
						filters?: Record<string, string>;
					}): Promise<TransactionTotal>;
				};
				update(
					id: string,
					data: TransactionPayload,
				): Promise<SingleTransactionResponse>;
				createCredit(
					data: TransactionCreditOrDebitPayload,
				): Promise<SingleTransactionResponse>;
				createDebit(
					data: TransactionCreditOrDebitPayload,
				): Promise<any>;
				createTransfer(data: Record<string, any>): Promise<any>;
			};
			transaction_collections: {
				get(obj?: {
					id?: string;
					filters?: Record<string, string>;
				}): Promise<
					| TransactionCollectionResponse
					| SingleTransactionCollectionResponse
				>;
				getNext(): Promise<TransactionCollectionResponse>;
				getPrevious(): Promise<TransactionCollectionResponse>;
				create(
					data: TransactionCollection,
				): Promise<SingleTransactionCollectionResponse>;
				update(
					reference: string,
					data: UpdateCollectionPayload,
				): Promise<SingleTransactionCollectionResponse>;
				delete(id: string): Promise<ApiResponse>;
			};

			accounts: {
				create: (
					data: CreateCurrencyAccountPayload,
				) => Promise<SingleAccountResponse | AccountResponse>;
				update: (
					reference: string,
					data: CreateCurrencyAccountPayload,
				) => Promise<SingleAccountResponse>;
				get(obj?: {
					reference?: string;
					filters?: Record<string, string>;
				}): Promise<SingleAccountResponse | AccountResponse>;
				getNext(): Promise<AccountResponse>;
				getPrevious(): Promise<AccountResponse>;
				currencies: {
					get: (
						reference: string,
						obj?: any,
					) => Promise<
						| GetSingleAdminCurrencyResponse
						| AllAdminCurrencyResponse
					>;
					getNext: () => Promise<AllAdminCurrencyResponse>;
					getPrevious: () => Promise<AllAdminCurrencyResponse>;
					create: (
						reference: string,
						data: CreateAdminCurrencyPayload,
					) => Promise<GetSingleAdminCurrencyResponse>;
					update: (
						reference: string,
						code: string,
						data: UpdateAdminCurrencyPayload,
					) => Promise<GetSingleAdminCurrencyResponse>;
					limits: {
						get: (
							reference: string,
							code: string,
							obj?: any,
						) => Promise<
							| SingleCurrencyLimitResponse
							| AllCurrencyLimitResponse
						>;
						create: (
							reference: string,
							code: string,
							data: CurrencyLimitCreationPayload,
						) => Promise<SingleCurrencyLimitResponse>;
						update: (
							reference: string,
							code: string,
							id: string,
							data: CurrencyLimitCreationPayload,
						) => Promise<SingleCurrencyLimitResponse>;
						delete: (
							reference: string,
							code: string,
							id: string,
						) => Promise<ApiResponse>;
					};
					fees: {
						get: (
							reference: string,
							code: string,
							obj?: any,
						) => Promise<
							| SingleAccountCurrencyFeesResponse
							| AllAccountCurrencyFeesResponse
						>;
						create: (
							reference: string,
							code: string,
							data: AccountCurrencyFeeCreationPayload,
						) => Promise<SingleAccountCurrencyFeesResponse>;
						update: (
							reference: string,
							code: string,
							id: string,
							data: AccountCurrencyFeeCreationPayload,
						) => Promise<SingleAccountCurrencyFeesResponse>;
						delete: (
							reference: string,
							code: string,
							id: string,
						) => Promise<ApiResponse>;
					};
					settings: {
						get: (
							reference: string,
							code: string,
						) => Promise<CurrencyListSettingsResponse>;
						update: (
							reference: string,
							code: string,
							data: UpdateCurrencySettingsPayload,
						) => Promise<CurrencyListSettingsResponse>;
					};
				};
			};
			account: {
				definitions: {
					get: (obj?: {
						name?: string;
						filters?: Record<string, string>;
					}) => Promise<
						| AllAccountDefinitionResponse
						| SingleAccountDefinitionResponse
					>;
					getNext: () => Promise<AllAccountDefinitionResponse>;
					getPrevious: () => Promise<AllAccountDefinitionResponse>;
					create: (
						data: CreateDefinitionPayload,
					) => Promise<SingleAccountDefinitionResponse>;
					update: (
						accountName: string,
						data: CreateDefinitionPayload,
					) => Promise<SingleAccountDefinitionResponse>;
					delete: (accountName: string) => Promise<ApiResponse>;

					groups: {
						get: (
							accountName: string,
							obj?: {
								name?: string;
								filters?: Record<string, string>;
							},
						) => Promise<
							| SingleAccountDefinitionsGroupsResponse
							| AccountDefinitionsGroupsResponse
						>;
						getNext: () => Promise<AccountDefinitionsGroupsResponse>;
						getPrevious: () => Promise<AccountDefinitionsGroupsResponse>;
						create: (
							accountName: string,
							data: AccountGroupPayload,
						) => Promise<SingleAccountDefinitionsGroupsResponse>;
						update: (
							accountName: string,
							groupName: string,
							data: AccountGroupPayload,
						) => Promise<SingleAccountDefinitionsGroupsResponse>;
						delete: (
							accountName: string,
							groupName: string,
						) => Promise<ApiResponse>;

						currencies: {
							get: (
								accountName: string,
								groupName: string,
								obj?: {
									code?: string;
									filters?: Record<string, string>;
								},
							) => Promise<
								| AccountDefinitionGroupCurrenciesResponse
								| SingleAccountDefinitionGroupCurrenciesResponse
							>;
							getNext: () => Promise<AccountDefinitionGroupCurrenciesResponse>;
							getPrevious: () => Promise<AccountDefinitionGroupCurrenciesResponse>;
							create: (
								accountName: string,
								groupName: string,
								data: {
									currency: string;
									archived: boolean;
								},
							) => Promise<SingleAccountDefinitionGroupCurrenciesResponse>;
							update: (
								accountName: string,
								groupName: string,
								currencyCode: string,
								data: {
									archived: boolean;
								},
							) => Promise<SingleAccountDefinitionGroupCurrenciesResponse>;
							delete: (
								accountName: string,
								groupName: string,
								currencyCode: string,
							) => Promise<ApiResponse>;
						};
					};
				};
			};
			auth: {
				login: (data: {
					email: string;
					password: string;
					session_duration: number;
				}) => Promise<LoginResponse>;
				register: (
					data: RegisterCredentials,
				) => Promise<RegisterResponse>;
			};
			metrics: {
				get: (
					obj?: MetricObj,
				) => Promise<
					AllAdminListMetricsResponse | SingleAdminListMetricsResponse
				>;
				getNext: () => Promise<AllAdminListMetricsResponse>;
				create: (
					data: CreateMetricsPayload,
				) => Promise<SingleAdminListMetricsResponse>;
				delete: (id: string) => Promise<ApiResponse>;
				points: {
					get: (
						id: string,
						obj?: MetricObj,
					) => Promise<MetricPointsListResponse>;
					getNext: () => Promise<MetricPointsListResponse>;
					getPrevious: () => Promise<MetricPointsListResponse>;
				};
			};
			exports: {
				sets: {
					get: (
						obj?: MetricObj,
					) => Promise<AllExportsResponse | SingleExportsResponse>;
					getNext: () => Promise<AllExportsResponse>;
					getPrevious: () => Promise<AllExportsResponse>;
					create: (
						data: CreateExportPayload,
					) => Promise<SingleExportsResponse>;
					delete: (id: string) => Promise<ApiResponse>;
				};
			};
			access_control_rules: {
				get: (
					obj?: MetricObj,
				) => Promise<
					| SingleAccessControlRulesResponse
					| AllAccessControlRulesResponse
				>;
				getNext: () => Promise<AllAccessControlRulesResponse>;
				getPrevious: () => Promise<AllAccessControlRulesResponse>;
				create: (data: CreateAccessControlRulePayload) => Promise<any>;
				update: (
					id: string,
					data: CreateAccessControlRulePayload,
				) => Promise<any>;
				delete: (id: string) => Promise<ApiResponse>;
			};
			currencies: {
				get: (
					obj?: any,
				) => Promise<
					AdminCurrencyListResponse | SingleAdminCurrencyResponse
				>;
				getNext: () => Promise<AdminCurrencyListResponse>;
				getPrevious: () => Promise<AdminCurrencyListResponse>;
				create: (
					data: CreateCurrencyPayload,
				) => Promise<SingleAdminCurrencyResponse>;
				update: (
					code: string,
					data: CreateCurrencyPayload,
				) => Promise<SingleAdminCurrencyResponse>;
				delete: (code: string) => Promise<ApiResponse>;
				overview: {
					get: (code: string) => Promise<CurrencyOverviewResponse>;
					//done
				};
				bankAccounts: {
					get: (code: string, obj?: any) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (code: string, data: any) => Promise<any>;
					delete: (code: string, id: string) => Promise<any>;
				};
			};
			company: {
				get: () => Promise<any>;
				update: (data: any) => Promise<any>;
				settings: {
					get: () => Promise<any>;
					update: (data: any) => Promise<any>;
				};
				address: {
					get: () => Promise<any>;
					update: (data: any) => Promise<any>;
				};
				links: {
					get: (obj?: any) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (data: any) => Promise<any>;
					update: (id: string, data: any) => Promise<any>;
					delete: (id: string) => Promise<any>;
				};
			};
			bankAccounts: {
				get: (obj?: any) => Promise<any>;
				create: (data: any) => Promise<any>;
				update: (id: string, data: any) => Promise<any>;
				delete: (id: string) => Promise<any>;
				currencies: {
					get: (bankId: string, currency?: string) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (bankId: string, data: any) => Promise<any>;
					delete: (bankId: string, currency: string) => Promise<any>;
				};
			};
			webhooks: {
				get: (obj?: any) => Promise<any>;
				getNext: () => Promise<any>;
				getPrevious: () => Promise<any>;
				create: (data: any) => Promise<any>;
				update: (webhooksId: string, data: any) => Promise<any>;
				delete: (id: string) => Promise<any>;
			};
			webhookTasks: {
				get: (obj?: any) => Promise<any>;
				getNext: () => Promise<any>;
				getPrevious: () => Promise<any>;
				create: (data: any) => Promise<any>;
				update: (webhooksId: string, data: any) => Promise<any>;
				delete: (id: string) => Promise<any>;
				requests: {
					get: (webhookTaskID: string, obj?: any) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
				};
			};
			subtypes: {
				get: (obj?: any) => Promise<any>;
				getNext: () => Promise<any>;
				getPrevious: () => Promise<any>;
				create: (data: any) => Promise<any>;
				update: (id: string, data: any) => Promise<any>;
				delete: (id: string) => Promise<any>;
			};
			notifications: {
				get: (obj?: any) => Promise<any>;
				update: (notificationId: string, data: any) => Promise<any>;
			};
			services: {
				get: (obj?: any) => Promise<any>;
				getNext: () => Promise<any>;
				getPrevious: () => Promise<any>;
				update: (id: string, data: any) => Promise<any>;
				create: (data: any) => Promise<any>;
				delete: (id: string) => Promise<any>;
			};
			requests: {
				get: (obj?: any) => Promise<any>;
				getNext: () => Promise<any>;
				getPrevious: () => Promise<any>;
			};
			groups: {
				get(obj?: { name?: string; filters?: any }): Promise<any>;
				getNext(): Promise<any>;
				getPrevious(): Promise<any>;
				create(data: any): Promise<any>;
				update(name: string, data: any): Promise<any>;
				delete(name: string): Promise<any>;
				fees: {
					get(
						groupName: string,
						obj?: { id?: string; filters?: any },
					): Promise<any>;
					getNext(): Promise<any>;
					getPrevious(): Promise<any>;
					create(groupName: string, data: any): Promise<any>;
					update(
						groupName: string,
						feeId: string,
						data: any,
					): Promise<any>;
					delete(groupName: string, feeId: string): Promise<any>;
				};
				permissions: {
					get(
						name: string,
						obj?: { id?: string; filters?: any },
					): Promise<any>;
					getNext(): Promise<any>;
					getPrevious(): Promise<any>;
					create(name: string, data: any): Promise<any>;
					delete(name: string, id: string): Promise<any>;
				};

				settings: {
					get(name: string): Promise<any>;
					update(name: string, data: any): Promise<any>;
				};

				tiers: {
					get(name: string, obj?: { id?: string }): Promise<any>;
					create(name: string, data: any): Promise<any>;
					update(
						name: string,
						tierId: string,
						data: any,
					): Promise<any>;
					delete(name: string, tierId: string): Promise<any>;
					get(name: string, tierId: string): Promise<any>;

					fees: {
						get(
							name: string,
							tierId: string,
							obj?: { id?: string },
						): Promise<any>;
						create(
							name: string,
							tierId: string,
							data: any,
						): Promise<any>;
						update(
							name: string,
							tierId: string,
							feeId: string,
							data: any,
						): Promise<any>;
						delete(
							name: string,
							tierId: string,
							feeId: string,
						): Promise<any>;
					};

					limits: {
						get(
							name: string,
							tierId: string,
							obj?: { id?: string },
						): Promise<any>;
						create(
							name: string,
							tierId: string,
							data: any,
						): Promise<any>;
						update(
							name: string,
							tierId: string,
							limitId: string,
							data: any,
						): Promise<any>;
						delete(
							name: string,
							tierId: string,
							limitId: string,
						): Promise<any>;
					};

					requirements: {
						get(
							name: string,
							tierId: string,
							obj?: { id?: string },
						): Promise<any>;
						create(
							name: string,
							tierId: string,
							data: any,
						): Promise<any>;
						update(
							name: string,
							tierId: string,
							requirementId: string,
							data: any,
						): Promise<any>;
						delete(
							name: string,
							tierId: string,
							requirementId: string,
						): Promise<any>;
					};
					requirementSets: {
						get(
							groupName: string,
							tierId: string,
							requirementSetId?: string,
						): Promise<any>;
						create(
							groupName: string,
							tiersId: string,
							data: any,
						): Promise<any>;
						update(
							groupName: string,
							tierId: string,
							requirementSetId: string,
							data: any,
						): Promise<any>;
						delete(
							groupName: string,
							tierId: string,
							requirementSetId: string,
						): Promise<any>;
						items: {
							get(
								groupName: string,
								tierId: string,
								requirementSetId?: string,
								itemId?: string,
							): Promise<any>;
							create(
								groupName: string,
								tiersId: string,
								requirementSetId: string,
								data: any,
							): Promise<any>;
							delete(
								groupName: string,
								tierId: string,
								requirementSetId: string,
								itemId: string,
							): Promise<any>;
						};
					};
					settings: {
						get(name: string, tierId: string): Promise<any>;
						update(
							name: string,
							tierId: string,
							data: any,
						): Promise<any>;
					};
				};
				accountConfigurations: {
					get(
						name: string,
						obj?: { name?: string; filters?: any },
					): Promise<any>;
					getNext(): Promise<any>;
					getPrevious(): Promise<any>;
					create(name: string, data: any): Promise<any>;
					update(
						name: string,
						accConfigName: string,
						data: any,
					): Promise<any>;
					currencies: {
						get(
							name: string,
							accConfigName: string,
							obj?: any,
						): Promise<any>;
						getNext(): Promise<any>;
						getPrevious(): Promise<any>;
						create(
							name: string,
							accConfigName: string,
							data: any,
						): Promise<any>;
						delete(
							name: string,
							accConfigName: string,
							currencyCode: string,
						): Promise<any>;
					};
				};
			};
			accountCurrencies: {
				get(obj?: any): Promise<any>;
			};
			documentTypes: {
				get(obj?: { id?: string; filters?: any }): Promise<any>;
				create(data: any): Promise<any>;
				update(typeId: string, data: any): Promise<any>;
				delete(typeId: string): Promise<any>;
			};
		};
		documentTypes: {
			get(typeId: string): Promise<any>;
		};
		permissions: {
			get(obj: any): Promise<any>;
			getNext(): Promise<any>;
			getPrevious(): Promise<any>;
		};
		transactions: {
			transactions: {
				get(obj?: { id?: string; filters?: any }): Promise<any>;
				getNext(): Promise<any>;
				getPrevious(): Promise<any>;
				totals: {
					get(filters?: any): Promise<any>;
				};
				createDebit(data: any): Promise<any>;
				createCredit(data: any): Promise<any>;
				createTransfer(data: any): Promise<any>;
			};
		};
		transaction_collections: {
			get(obj?: { id?: string; filters?: any }): Promise<any>;
			getNext(): Promise<any>;
			getPrevious(): Promise<any>;
			create(data: any): Promise<any>;
		};
		accounts: {
			get(obj?: { reference?: string; filters?: any }): Promise<any>;
			getNext(): Promise<any>;
			getPrevious(): Promise<any>;
			create(data: any): Promise<any>;
			currencies: {
				get(
					reference: string,
					obj?: { code?: string; filters?: any },
				): Promise<any>;
				getNext(): Promise<any>;
				getPrevious(): Promise<any>;
				update(
					reference: string,
					currencyCode: string,
					data: any,
				): Promise<any>;
			};
		};
		company: {
			get(): Promise<any>;
			currencies: {
				get(obj?: { code?: string; filters?: any }): Promise<any>;
				getNext(): Promise<any>;
				getPrevious(): Promise<any>;
			};
			bankAccounts: {
				get(): Promise<any>;
			};
		};
		groups: {
			get(obj?: { name?: string; filters?: any }): Promise<any>;
			getNext(): Promise<any>;
			getPrevious(): Promise<any>;
			tiers: {
				requirementSets: {
					get(
						groupName: string,
						tierId: string,
						requirementSetId?: string,
					): Promise<any>;
					items: {
						get(
							groupName: string,
							tierId: string,
							requirementSetId?: string,
							itemId?: string,
						): Promise<any>;
					};
				};
			};
		};
	}

	export = Rehive;
}
