import { createAuth, type Auth, type AuthConfig } from '../auth/create-auth.js';
import { createUserApi, type UserApi } from '../platform/user/create-api.js';
import { createAdminApi, type AdminApi } from '../platform/admin/create-api.js';
import { createAuthenticatedFetch } from '../shared/create-api-client.js';
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
  public readonly extensions: {
    conversion: (cfg?: { baseUrl?: string }) => ConversionApi;
    massSend: (cfg?: { baseUrl?: string }) => MassSendApi;
    notifications: (cfg?: { baseUrl?: string }) => NotificationsApi;
    products: (cfg?: { baseUrl?: string }) => ProductsApi;
    rewards: (cfg?: { baseUrl?: string }) => RewardsApi;
    stellar: (cfg?: { baseUrl?: string }) => StellarApi;
    stellarTestnet: (cfg?: { baseUrl?: string }) => StellarTestnetApi;
    business: (cfg?: { baseUrl?: string }) => BusinessApi;
    paymentRequests: (cfg?: { baseUrl?: string }) => PaymentRequestsApi;
    bridge: (cfg?: { baseUrl?: string }) => BridgeApi;
    app: (cfg?: { baseUrl?: string }) => AppApi;
    fetch: (url: string, options?: RequestInit) => Promise<Response>;
  };

  constructor(config: RehiveConfig = {}) {
    this.auth = createAuth(config);
    this.user = createUserApi({ auth: this.auth, baseUrl: config.baseUrl });
    this.admin = createAdminApi({ auth: this.auth, baseUrl: config.baseUrl });
    this.extensions = {
      conversion: (cfg?) => createConversionApi({ auth: this.auth, ...cfg }),
      massSend: (cfg?) => createMassSendApi({ auth: this.auth, ...cfg }),
      notifications: (cfg?) => createNotificationsApi({ auth: this.auth, ...cfg }),
      products: (cfg?) => createProductsApi({ auth: this.auth, ...cfg }),
      rewards: (cfg?) => createRewardsApi({ auth: this.auth, ...cfg }),
      stellar: (cfg?) => createStellarApi({ auth: this.auth, ...cfg }),
      stellarTestnet: (cfg?) => createStellarTestnetApi({ auth: this.auth, ...cfg }),
      business: (cfg?) => createBusinessApi({ auth: this.auth, ...cfg }),
      paymentRequests: (cfg?) => createPaymentRequestsApi({ auth: this.auth, ...cfg }),
      bridge: (cfg?) => createBridgeApi({ auth: this.auth, ...cfg }),
      app: (cfg?) => createAppApi({ auth: this.auth, ...cfg }),
      fetch: createAuthenticatedFetch(this.auth),
    };
  }
}
