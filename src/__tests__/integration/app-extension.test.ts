const mockPublicCompanyRetrieve = jest.fn();
const mockPublicCompanyLocalesList = jest.fn();
const mockAdminAndroidAppsList = jest.fn();
const mockAdminIosAppsList = jest.fn();

jest.mock('../../platform/user/openapi-ts/sdk.gen.js', () => ({
  authLogin: jest.fn(),
  authRegister: jest.fn(),
  authRegisterCompany: jest.fn(),
  authLogout: jest.fn(),
  authRefreshCreate: jest.fn(),
}));

jest.mock('../../platform/user/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({})),
}));

jest.mock('../../platform/admin/openapi-ts/sdk.gen.js', () => ({}));
jest.mock('../../platform/admin/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({})),
}));

jest.mock('../../extensions/app/openapi-ts/sdk.gen.js', () => ({
  publicCompanyRetrieve: (...args: any[]) => mockPublicCompanyRetrieve(...args),
  publicCompanyLocalesList: (...args: any[]) => mockPublicCompanyLocalesList(...args),
  adminAndroidAppsList: (...args: any[]) => mockAdminAndroidAppsList(...args),
  adminIosAppsList: (...args: any[]) => mockAdminIosAppsList(...args),
}));

jest.mock('../../extensions/app/openapi-ts/client/index.js', () => ({
  createClient: jest.fn(() => ({})),
}));

import { RehiveClient } from '../../client/rehive-client.js';

describe('App Extension Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockPublicCompanyRetrieve.mockResolvedValue({
      status: 'success',
      data: {
        id: 'demo-company',
        config: {
          android_play_store_url: 'https://play.google.com/store/apps/details?id=com.demo.app',
          apple_app_store_url: 'https://apps.apple.com/app/demo/id123456789',
        },
      },
    });

    mockPublicCompanyLocalesList.mockResolvedValue({
      status: 'success',
      data: {
        count: 2,
        results: [
          { id: '1', name: 'English (US)', translation: { locale: 'en_US' } },
          { id: '2', name: 'Spanish (ES)', translation: { locale: 'es_ES' } },
        ],
      },
    });

    mockAdminAndroidAppsList.mockResolvedValue({
      status: 'success',
      data: {
        count: 1,
        results: [{ id: 'android-app-123', package: 'com.demo.app' }],
      },
    });

    mockAdminIosAppsList.mockResolvedValue({
      status: 'success',
      data: {
        count: 1,
        results: [{ id: 'ios-app-123', bundle_identifier: 'com.demo.app' }],
      },
    });
  });

  it('should create app extension and call public endpoints', async () => {
    const rehive = new RehiveClient({
      baseUrl: 'https://api.test.com',
      storage: 'memory',
    });

    const app = rehive.extensions.app();
    expect(app).toBeDefined();
    expect(typeof app.publicCompanyRetrieve).toBe('function');

    const result: any = await app.publicCompanyRetrieve({});
    expect(result.status).toBe('success');
    expect(result.data?.id).toBe('demo-company');
  });

  it('should create app extension with custom base URL', async () => {
    const rehive = new RehiveClient({
      baseUrl: 'https://api.test.com',
      storage: 'memory',
    });

    const appStaging = rehive.extensions.app({
      baseUrl: 'https://staging-app.services.rehive.com/api/',
    });
    expect(appStaging).toBeDefined();

    const result: any = await appStaging.publicCompanyRetrieve({});
    expect(result.status).toBe('success');
  });

  it('should call admin endpoints with authentication', async () => {
    const rehive = new RehiveClient({
      baseUrl: 'https://api.test.com',
      token: 'permanent-admin-token',
    });

    const app = rehive.extensions.app();

    const androidApps: any = await app.adminAndroidAppsList({});
    expect(androidApps.status).toBe('success');
    expect(androidApps.data?.results).toHaveLength(1);

    const iosApps: any = await app.adminIosAppsList({});
    expect(iosApps.status).toBe('success');
    expect(iosApps.data?.results).toHaveLength(1);
  });

  it('should support multiple app extension instances', () => {
    const rehive = new RehiveClient({
      baseUrl: 'https://api.test.com',
      token: 'server-token',
    });

    const appProd = rehive.extensions.app();
    const appStaging = rehive.extensions.app({
      baseUrl: 'https://staging-app.services.rehive.com/api/',
    });

    expect(appProd).toBeDefined();
    expect(appStaging).toBeDefined();
  });
});
