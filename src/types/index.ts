export interface Challenge {
  id: string;
  type: string;
  durability: string;
  authenticator_types: string[];
  created: number;
}

export interface UserSession {
  user: {
    id: string;
  };
  challenges: Challenge[];
  token: string;
  refresh_token: string;
  expires: number;
}

export interface AuthState {
  sessions: UserSession[];
  activeSessionIndex: number;
}

export type SessionListener = (session: UserSession | null) => void;
export type ErrorListener = (error: Error | null) => void;

export interface StorageAdapter {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
}

export interface LoginParams {
  user: string;
  company: string;
  password: string;
  session_duration?: number;
  auth_method?: string;
}

export interface LoginResponse {
  status: string;
  data: {
    token: string;
    refresh_token: string;
    user: {
      id: string;
    };
    challenges: Challenge[];
    expires: number;
    created: number;
  };
}

export interface RefreshParams {
  session_duration?: number;
}

export interface RefreshResponse {
  status: string;
  data: {
    refresh_token: string;
    expires: number;
    created: number;
  };
}

export interface LogoutParams {
  clear_session_option: 'all' | 'temporary' | 'none';
}

export interface LogoutResponse {
  status: string;
}

export interface RegisterParams {
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  mobile?: string;
  company: string;
  id_number?: string | null;
  birth_date?: string | null;
  language?: string;
  gender?: 'male' | 'female' | 'other' | 'not_specified' | null;
  title?: 'mr' | 'mrs' | 'ms' | 'mx' | null;
  marital_status?: 'single' | 'married' | 'divorced' | 'widowed' | null;
  nationality?: string | null;
  timezone?: string;
  password: string;
  password1: string;
  password2: string;
  terms_and_conditions?: boolean;
  privacy_policy?: boolean;
  session_duration?: number;
  groups?: string[];
  legal_term_versions?: number[];
  auth_method?: string;
}

export interface RegisterResponse {
  status: string;
  data: {
    token: string;
    refresh_token: string;
    user: {
      id: string;
    };
    challenges: Challenge[];
    expires: number;
    created: number;
  };
}

export interface RetrieveUserResponse {
  data: {
    id: string;
    username: string;
    email: string;
    mobile: string;
    first_name: string;
    last_name: string;
    profile: string;
    temporary: boolean;
    id_number: string;
    birth_date: string;
    account: string;
    balance: number;
    available_balance: number;
    company: string;
    owner: boolean;
    language: string;
    nationality: string;
    gender: string;
    title: string;
    marital_status: string;
    fathers_name: string;
    mothers_name: string;
    grandfathers_name: string;
    grandmothers_name: string;
    central_bank_number: string;
    metadata: Record<string, any>;
    timezone: string;
    website: string;
    business_name: string;
    verified: boolean;
    verification: {
      email: boolean;
      mobile: boolean;
    };
    status: string;
    created: number;
    updated: number;
    settings: {
      allow_transactions: boolean;
      allow_debit_transactions: boolean;
      allow_credit_transactions: boolean;
    };
  };
  status: string;
}

export interface TokenManagerConfig {
  baseUrl?: string;
  storage?: StorageAdapter;
  enableCrossTabSync?: boolean;
}

export interface PlatformServiceMethods {
  loginUser(data: LoginParams): Promise<LoginResponse>;
  registerUser(data: RegisterParams): Promise<RegisterResponse>;
  logoutUser(data: LogoutParams): Promise<LogoutResponse>;
  refreshUserToken(data?: RefreshParams): Promise<RefreshResponse>;
  retrieveUser(): Promise<RetrieveUserResponse>;
}