declare module "rehive" {
	interface RehiveConfig {
		apiToken?: string;
		customAPIURL?: string;
		apiVersion?: string;
		network?: "staging" | "production";
		storageMethod?: "local" | "session" | undefined;
	}

	interface Headers {
		"Content-Type"?: string;
		Accept: string;
		Authorization?: string;
	}
	interface ApiResponse {
		status_code?: number;
		ok?: boolean;
		status: "success" | "error";
		message?: string;
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
		subtype: TransactionSubtype;
		currency: Currency;
	}

	interface Settings {
		allow_transactions: boolean;
		allow_debit_transactions: boolean;
		allow_credit_transactions: boolean;
		disallowed_transaction_subtypes: DisallowedTransactionSubtype[];
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
		status: "active" | "inactive" | "obsolete";
		created: number; // Unix timestamp
		updated: number; // Unix timestamp
		settings: Settings;
	}
	interface RegisterCredentials {
		first_name: string;
		last_name: string;
		email: string;
		company: string;
		password: string;
		terms_and_conditions: boolean;
	}

	interface LoginResponse {
		status: "success" | "error";
		status_code?: number;
		message?: string;
		data?: {
			token: string;
			user: User;
			challenges?: any;
			mfa?: any;
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

	interface AuthTokenData {
		[key: string]: any;
	}

	interface AuthPasswordChangeData {
		old_password: string;
		new_password: string;
	}

	interface AuthPasswordResetData {
		email: string;
	}

	interface AuthPasswordResetConfirmData {
		token: string;
		new_password: string;
	}

	interface AuthEmailResendVerificationData {
		email: string;
	}

	interface AuthMobileResendVerificationData {
		mobile_number: string;
	}

	interface AuthMobileVerifyData {
		mobile_number: string;
		verification_code: string;
	}

	interface AuthEmailVerifyData {
		email: string;
		verification_code: string;
	}

	interface AuthMFAData {
		[key: string]: any;
	}

	interface AuthMFAStatus {
		status: string;
	}

	interface AuthMFAUpdateData {
		[key: string]: any;
	}

	interface AuthTokenGetResponse {
		tokens: AuthTokenData[];
	}

	interface AuthMFAResponse {
		status: string;
		data?: any;
	}

	interface AuthMFACreateData {
		[key: string]: any;
	}

	interface AuthMFADeleteData {
		id: string;
	}

	interface AuthMFAEnableData {
		[key: string]: any;
	}

	interface AuthMFADisableData {
		[key: string]: any;
	}

	interface AuthMFATokenGetResponse {
		token: string;
	}

	interface AuthMFATokenEnableData {
		token: string;
	}

	interface AuthMFATokenDisableData {}
	interface UserFilters {
		id?: string;
		filters?: { [key: string]: string };
	}

	interface PermissionFilters {
		id?: string;
		filters?: { [key: string]: string };
	}

	interface MessageFilters {
		id?: string;
		filters?: { [key: string]: string };
	}

	interface UserGroupFilters {
		name?: string;
		filters?: { [key: string]: string };
	}
	type Serialize = (filters: { [key: string]: string }) => string;

	interface LimitObj {
		id?: string;
	}

	interface MetricObj {
		id?: string;
		filters?: Record<string, string>;
	}
	interface Filters {
		[key: string]: any;
	}
	interface LimitObj {
		id?: string;
	}

	class Rehive {
		constructor(config?: RehiveConfig);
		public: {
			companies: {
				get(id?: string): Promise<any>;
			};
		};
		auth: {
			register(credentials: {
				email: string;
				password: string;
				company: string;
				first_name: string;
				last_name: string;
			}): Promise<any>;
			registerCompany(credentials: any): Promise<any>;
			login(credentials: { email: string; password: string }): Promise<any>;
			logout(): Promise<void>;
			logoutAll(): Promise<void>;
			password: {
				change(data: AuthPasswordChangeData): Promise<AuthResponse>;
				reset(data: AuthPasswordResetData): Promise<AuthResponse>;
				resetConfirm(data: AuthPasswordResetConfirmData): Promise<AuthResponse>;
			};
			email: {
				resendEmailVerification(
					data: AuthEmailResendVerificationData
				): Promise<AuthResponse>;
				verify(data: AuthEmailVerifyData): Promise<AuthResponse>;
			};
			mobile: {
				resendMobileVerification(
					data: AuthMobileResendVerificationData
				): Promise<AuthResponse>;
				verify(data: AuthMobileVerifyData): Promise<AuthResponse>;
			};
			tokens: {
				get(tokenKey?: string): Promise<AuthTokenGetResponse>;
				create(data: AuthTokenData): Promise<AuthResponse>;
				delete(tokenKey: string): Promise<AuthResponse>;
				verify(token: string): Promise<AuthResponse>;
			};
			mfa: {
				verify(data: AuthMFAData): Promise<AuthResponse>;
				deliver(data: AuthMFAData): Promise<AuthResponse>;
				authenticators: {
					get(obj?: { id?: string; filters?: any }): Promise<AuthMFAResponse>;
					getNext(): Promise<AuthMFAResponse>;
					getPrevious(): Promise<AuthMFAResponse>;
					create(data: AuthMFACreateData): Promise<AuthMFAResponse>;
					delete(id: string): Promise<AuthMFAResponse>;
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
					get(): Promise<AuthMFATokenGetResponse>;
					enable(data: AuthMFATokenEnableData): Promise<AuthResponse>;
					disable(): Promise<AuthResponse>;
				};
			};
		};
		user: {
			get(): Promise<any>;
			update(data: Partial<any>): Promise<any>;
			addresses: {
				get(id?: string): Promise<any>;
				update(data: any): Promise<any>;
				create(data: any): Promise<any>;
				delete(id: string): Promise<any>;
			};
			bankAccounts: {
				get(bankId?: string): Promise<any>;
				create(data: any): Promise<any>;
				update(bankId: string, data: any): Promise<any>;
				delete(bankId: string): Promise<any>;
			};
			cryptoAccounts: {
				get(cryptoAccountId?: string): Promise<any>;
				create(data: any): Promise<any>;
				update(accountId: string, data: any): Promise<any>;
				delete(id: string): Promise<any>;
			};
			documents: {
				get(obj?: { id?: string; filters?: Record<string, any> }): Promise<any>;
				getPrevious(): Promise<any>;
				create(data: any): Promise<any>;
			};
			emails: {
				get(id?: string): Promise<any>;
				create(data: any): Promise<any>;
				update(emailId: string, data: any): Promise<any>;
				delete(id: string): Promise<any>;
			};
			mobiles: {
				get(id?: string): Promise<any>;
				create(data: any): Promise<any>;
				update(mobileNumberId: string, data: any): Promise<any>;
				delete(id: string): Promise<any>;
			};
			legalTerms: {
				get(obj?: { id?: string; filters?: Record<string, any> }): Promise<any>;
				getNext(): Promise<any>;
				getPrevious(): Promise<any>;
				versions: {
					get(
						termId: string,
						obj?: { id?: string; filters?: Record<string, any> }
					): Promise<any>;
					getNext(): Promise<any>;
					getPrevious(): Promise<any>;
					update(termId: string, versionId: string, data: any): Promise<any>;
				};
			};
		};

		admin: {
			users: {
				get: (obj?: { id?: string; filters?: Filters }) => Promise<any>;
				getNext: () => Promise<any>;
				getPrevious: () => Promise<any>;
				create: (data: any) => Promise<any>;
				update: (id: string, data: any) => Promise<any>;
				delete: (id: string) => Promise<any>;
				overview: {
					get: (obj?: { filters?: Filters }) => Promise<any>;
				};
				settings: {
					get: (id: string) => Promise<any>;
					update: (id: string, data: any) => Promise<any>;
				};
				kyc: {
					get: (id: string) => Promise<any>;
					update: (id: string, data: any) => Promise<any>;
				};

				permissions: {
					get: (
						uuid: string,
						obj?: { id?: string; filters?: UserFilters }
					) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (uuid: string, data: any) => Promise<any>;
					delete: (uuid: string, id: string) => Promise<any>;
				};
				messages: {
					get: (
						uuid: string,
						obj?: { id?: string; filters?: UserFilters }
					) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (uuid: string, data: any) => Promise<any>;
				};
				groups: {
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (uuid: string, data: any) => Promise<any>;
					delete: (uuid: string, name: string) => Promise<any>;
				};
				addresses: {
					get: (obj?: { id?: string; filters?: UserFilters }) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (data: any) => Promise<any>;
					update: (id: string, data: any) => Promise<any>;
					delete: (id: string) => Promise<any>;
				};
				bankAccounts: {
					create: (data: any) => Promise<any>;
					update: (id: string, data: any) => Promise<any>;
					delete: (id: string) => Promise<any>;
					currencies: {
						get: (
							id: string,
							obj?: { code?: string; filters?: any }
						) => Promise<any>;
						getNext: () => Promise<any>;
						getPrevious: () => Promise<any>;
						create: (id: string, data: any) => Promise<any>;
						update: (id: string, currCode: string, data: any) => Promise<any>;
						delete: (id: string, currCode: string) => Promise<any>;
					};
					accountCurrencies: {
						get(id: string, obj?: any): Promise<any>;
						getNext(): Promise<any>;
						getPrevious(): Promise<any>;
						create(id: string, data: any): Promise<any>;
						delete(id: string, accCurrId: string): Promise<any>;
					};
				};
				cryptoAccounts: {
					get: (obj?: { id?: string; filters?: any }) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (data: any) => Promise<any>;
					update: (id: string, data: any) => Promise<any>;
					delete: (id: string) => Promise<any>;
					currencies: {
						get(id: string, obj?: any): Promise<any>;
						getNext(): Promise<any>;
						getPrevious(): Promise<any>;
						create(id: string, data: any): Promise<any>;
						delete(id: string, currCode: string): Promise<any>;
					};
					accountCurrencies: {
						get(id: string, obj?: any): Promise<any>;
						getNext(): Promise<any>;
						getPrevious(): Promise<any>;
						create(id: string, data: any): Promise<any>;
						delete(id: string, accCurrId: string): Promise<any>;
					};
				};
				documents: {
					get: (obj?: { id?: string; filters?: any }) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (data: any) => Promise<any>;
					update: (id: string, data: any) => Promise<any>;
					delete: (id: string) => Promise<any>;
				};
				emails: {
					get: (obj?: { id?: string; filters?: any }) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (data: any) => Promise<any>;
					update: (id: string, data: any) => Promise<any>;
					delete: (id: string) => Promise<any>;
				};
				mobiles: {
					get: (obj?: { id?: string; filters?: any }) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (data: any) => Promise<any>;
					update: (id: string, data: any) => Promise<any>;
					delete: (id: string) => Promise<any>;
				};
				mfa: {
					authenticators: {
						get: (obj?: { id?: string; filters?: any }) => Promise<any>;
						getNext: () => Promise<any>;
						getPrevious: () => Promise<any>;
						delete: (authId: string) => Promise<any>;
					};
					get: (id: string) => Promise<any>;
					sms: {
						delete: (id: string) => Promise<any>;
					};
					token: {
						delete: (id: string) => Promise<any>;
					};
				};
			};
			transactions: {
				get(obj?: {
					id?: string;
					filters?: Record<string, string>;
				}): Promise<any>;
				getNext(): Promise<any>;
				getPrevious(): Promise<any>;
				totals: {
					get(obj?: { filters?: Record<string, string> }): Promise<any>;
				};
				update(id: string, data: Record<string, any>): Promise<any>;
				createCredit(data: Record<string, any>): Promise<any>;
				createDebit(data: Record<string, any>): Promise<any>;
				createTransfer(data: Record<string, any>): Promise<any>;
				messages: {
					get(
						txnId: string,
						obj?: { id?: string; filters?: Record<string, string> }
					): Promise<any>;
					getNext(): Promise<any>;
					getPrevious(): Promise<any>;
					create(txnId: string, data: Record<string, any>): Promise<any>;
				};
			};
			transaction_collections: {
				get(obj?: {
					id?: string;
					filters?: Record<string, string>;
				}): Promise<any>;
				getNext(): Promise<any>;
				getPrevious(): Promise<any>;
				create(data: Record<string, any>): Promise<any>;
				update(reference: string, data: Record<string, any>): Promise<any>;
				delete(id: string): Promise<any>;
			};

			accounts: {
				create: (data: any) => Promise<any>;
				update: (reference: string, data: any) => Promise<any>;
				get(obj?: {
					reference?: string;
					filters?: Record<string, string>;
				}): Promise<any>;
				getNext(): Promise<any>;
				getPrevious(): Promise<any>;
				currencies: {
					get: (reference: string, obj?: any) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (reference: string, data: any) => Promise<any>;
					update: (reference: string, code: string, data: any) => Promise<any>;
					limits: {
						get: (reference: string, code: string, obj?: any) => Promise<any>;
						create: (
							reference: string,
							code: string,
							data: any
						) => Promise<any>;
						update: (
							reference: string,
							code: string,
							id: string,
							data: any
						) => Promise<any>;
						delete: (
							reference: string,
							code: string,
							id: string
						) => Promise<any>;
					};
					fees: {
						get: (reference: string, code: string, obj?: any) => Promise<any>;
						create: (
							reference: string,
							code: string,
							data: any
						) => Promise<any>;
						update: (
							reference: string,
							code: string,
							id: string,
							data: any
						) => Promise<any>;
						delete: (
							reference: string,
							code: string,
							id: string
						) => Promise<any>;
					};
					settings: {
						get: (reference: string, code: string) => Promise<any>;
						update: (
							reference: string,
							code: string,
							data: any
						) => Promise<any>;
					};
				};
			};
			account: {
				definitions: {
					get: (obj?: {
						name?: string;
						filters?: Record<string, string>;
					}) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (data: any) => Promise<any>;
					update: (accountName: string, data: any) => Promise<any>;
					delete: (accountName: string) => Promise<any>;

					groups: {
						get: (
							accountName: string,
							obj?: { name?: string; filters?: Record<string, string> }
						) => Promise<any>;
						getNext: () => Promise<any>;
						getPrevious: () => Promise<any>;
						create: (accountName: string, data: any) => Promise<any>;
						update: (
							accountName: string,
							groupName: string,
							data: any
						) => Promise<any>;
						delete: (accountName: string, groupName: string) => Promise<any>;

						currencies: {
							get: (
								accountName: string,
								groupName: string,
								obj?: { code?: string; filters?: Record<string, string> }
							) => Promise<any>;
							getNext: () => Promise<any>;
							getPrevious: () => Promise<any>;
							create: (
								accountName: string,
								groupName: string,
								data: any
							) => Promise<any>;
							update: (
								accountName: string,
								groupName: string,
								currencyCode: string,
								data: any
							) => Promise<any>;
							delete: (
								accountName: string,
								groupName: string,
								currencyCode: string
							) => Promise<any>;
						};
					};
				};
				currencies: {
					get: (obj?: {
						reference?: string;
						filters?: Record<string, string>;
					}) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
				};
			};
			auth: {
				login: (data: { email: string; password: string }) => Promise<any>;
				register: (data: {
					email: string;
					password: string;
					company: string;
					first_name: string;
					last_name: string;
				}) => Promise<any>;
			};
			metrics: {
				get: (obj?: MetricObj) => Promise<any>;
				getNext: () => Promise<any>;
				create: (data: any) => Promise<any>;
				delete: (id: string) => Promise<any>;
				points: {
					get: (id: string, obj?: MetricObj) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
				};
			};
			exports: {
				sets: {
					get: (obj?: MetricObj) => Promise<any>;
					getNext: () => Promise<any>;
					getPrevious: () => Promise<any>;
					create: (data: any) => Promise<any>;
					delete: (id: string) => Promise<any>;
				};
			};
			accessControlRules: {
				get: (obj?: MetricObj) => Promise<any>;
				getNext: () => Promise<any>;
				getPrevious: () => Promise<any>;
				create: (data: any) => Promise<any>;
				update: (id: string, data: any) => Promise<any>;
				delete: (id: string) => Promise<any>;
			};
			currencies: {
				get: (obj?: any) => Promise<any>;
				getNext: () => Promise<any>;
				getPrevious: () => Promise<any>;
				create: (data: any) => Promise<any>;
				update: (code: string, data: any) => Promise<any>;
				delete: (code: string) => Promise<any>;
				overview: {
					get: (code: string) => Promise<any>;
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
						obj?: { id?: string; filters?: any }
					): Promise<any>;
					getNext(): Promise<any>;
					getPrevious(): Promise<any>;
					create(groupName: string, data: any): Promise<any>;
					update(groupName: string, feeId: string, data: any): Promise<any>;
					delete(groupName: string, feeId: string): Promise<any>;
				};
				permissions: {
					get(name: string, obj?: { id?: string; filters?: any }): Promise<any>;
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
					update(name: string, tierId: string, data: any): Promise<any>;
					delete(name: string, tierId: string): Promise<any>;
					get(name: string, tierId: string): Promise<any>;

					fees: {
						get(
							name: string,
							tierId: string,
							obj?: { id?: string }
						): Promise<any>;
						create(name: string, tierId: string, data: any): Promise<any>;
						update(
							name: string,
							tierId: string,
							feeId: string,
							data: any
						): Promise<any>;
						delete(name: string, tierId: string, feeId: string): Promise<any>;
					};

					limits: {
						get(
							name: string,
							tierId: string,
							obj?: { id?: string }
						): Promise<any>;
						create(name: string, tierId: string, data: any): Promise<any>;
						update(
							name: string,
							tierId: string,
							limitId: string,
							data: any
						): Promise<any>;
						delete(name: string, tierId: string, limitId: string): Promise<any>;
					};

					requirements: {
						get(
							name: string,
							tierId: string,
							obj?: { id?: string }
						): Promise<any>;
						create(name: string, tierId: string, data: any): Promise<any>;
						update(
							name: string,
							tierId: string,
							requirementId: string,
							data: any
						): Promise<any>;
						delete(
							name: string,
							tierId: string,
							requirementId: string
						): Promise<any>;
					};
					requirementSets: {
						get(
							groupName: string,
							tierId: string,
							requirementSetId?: string
						): Promise<any>;
						create(groupName: string, tiersId: string, data: any): Promise<any>;
						update(
							groupName: string,
							tierId: string,
							requirementSetId: string,
							data: any
						): Promise<any>;
						delete(
							groupName: string,
							tierId: string,
							requirementSetId: string
						): Promise<any>;
						items: {
							get(
								groupName: string,
								tierId: string,
								requirementSetId?: string,
								itemId?: string
							): Promise<any>;
							create(
								groupName: string,
								tiersId: string,
								requirementSetId: string,
								data: any
							): Promise<any>;
							delete(
								groupName: string,
								tierId: string,
								requirementSetId: string,
								itemId: string
							): Promise<any>;
						};
					};
					settings: {
						get(name: string, tierId: string): Promise<any>;
						update(name: string, tierId: string, data: any): Promise<any>;
					};
				};
				accountConfigurations: {
					get(
						name: string,
						obj?: { name?: string; filters?: any }
					): Promise<any>;
					getNext(): Promise<any>;
					getPrevious(): Promise<any>;
					create(name: string, data: any): Promise<any>;
					update(name: string, accConfigName: string, data: any): Promise<any>;
					currencies: {
						get(name: string, accConfigName: string, obj?: any): Promise<any>;
						getNext(): Promise<any>;
						getPrevious(): Promise<any>;
						create(
							name: string,
							accConfigName: string,
							data: any
						): Promise<any>;
						delete(
							name: string,
							accConfigName: string,
							currencyCode: string
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
			// ..
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
					obj?: { code?: string; filters?: any }
				): Promise<any>;
				getNext(): Promise<any>;
				getPrevious(): Promise<any>;
				update(
					reference: string,
					currencyCode: string,
					data: any
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
						requirementSetId?: string
					): Promise<any>;
					items: {
						get(
							groupName: string,
							tierId: string,
							requirementSetId?: string,
							itemId?: string
						): Promise<any>;
					};
				};
			};
		};
	}

	export = Rehive;
}
