import { createAuth, type Auth, type AuthConfig } from '../auth/create-auth.js';
import { createUserApi, type UserApi } from '../platform/user/create-api.js';
import { createAdminApi, type AdminApi } from '../platform/admin/create-api.js';
import { createConversionApi, type ConversionApi } from '../extensions/conversion/create-api.js';
import { createMassSendApi, type MassSendApi } from '../extensions/mass-send/create-api.js';
import { createNotificationsApi, type NotificationsApi } from '../extensions/notifications/create-api.js';
import { createProductsApi, type ProductsApi } from '../extensions/products/create-api.js';
import { createRewardsApi, type RewardsApi } from '../extensions/rewards/create-api.js';
import { createStellarApi, type StellarApi } from '../extensions/stellar/create-api.js';
import { createStellarTestnetApi, type StellarTestnetApi } from '../extensions/stellar-testnet/create-api.js';
import { createBusinessApi, type BusinessApi } from '../extensions/business/create-api.js';
import { createPaymentRequestsApi, type PaymentRequestsApi } from '../extensions/payment-requests/create-api.js';
import { createBridgeApi, type BridgeApi } from '../extensions/bridge/create-api.js';
import { createAppApi, type AppApi } from '../extensions/app/create-api.js';

export interface RehiveConfig extends AuthConfig {}

export class RehiveClient {
  public readonly auth: Auth;
  public readonly user: UserApi;
  public readonly admin: AdminApi;

  constructor(config: RehiveConfig = {}) {
    this.auth = createAuth(config);
    this.user = createUserApi({ auth: this.auth, baseUrl: config.baseUrl });
    this.admin = createAdminApi({ auth: this.auth, baseUrl: config.baseUrl });
  }

  public readonly extensions = {
    conversion: (cfg?: { baseUrl?: string }): ConversionApi =>
      createConversionApi({ auth: this.auth, ...cfg }),
    massSend: (cfg?: { baseUrl?: string }): MassSendApi =>
      createMassSendApi({ auth: this.auth, ...cfg }),
    notifications: (cfg?: { baseUrl?: string }): NotificationsApi =>
      createNotificationsApi({ auth: this.auth, ...cfg }),
    products: (cfg?: { baseUrl?: string }): ProductsApi =>
      createProductsApi({ auth: this.auth, ...cfg }),
    rewards: (cfg?: { baseUrl?: string }): RewardsApi =>
      createRewardsApi({ auth: this.auth, ...cfg }),
    stellar: (cfg?: { baseUrl?: string }): StellarApi =>
      createStellarApi({ auth: this.auth, ...cfg }),
    stellarTestnet: (cfg?: { baseUrl?: string }): StellarTestnetApi =>
      createStellarTestnetApi({ auth: this.auth, ...cfg }),
    business: (cfg?: { baseUrl?: string }): BusinessApi =>
      createBusinessApi({ auth: this.auth, ...cfg }),
    paymentRequests: (cfg?: { baseUrl?: string }): PaymentRequestsApi =>
      createPaymentRequestsApi({ auth: this.auth, ...cfg }),
    bridge: (cfg?: { baseUrl?: string }): BridgeApi =>
      createBridgeApi({ auth: this.auth, ...cfg }),
    app: (cfg?: { baseUrl?: string }): AppApi =>
      createAppApi({ auth: this.auth, ...cfg }),
    fetch: async (url: string, options: RequestInit = {}): Promise<Response> => {
      const token = await this.auth.getToken();
      const headers = new Headers(options.headers);
      if (token) {
        headers.set('Authorization', `Token ${token}`);
      }
      return fetch(url, { ...options, headers });
    },
  };
}
