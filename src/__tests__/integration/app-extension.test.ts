import { RehiveClient } from '../../client/rehive-client.js';
import { MemoryStorageAdapter } from '../../auth/core/storage-adapters.js';

// Mock the app extension API
jest.mock('../../extensions/app/rehive-app-api.js', () => {
  class MockAppApi {
    private securityData: any;
    
    setSecurityData(data: any) {
      this.securityData = data;
    }

    public = {
      publicCompanyRetrieve: jest.fn().mockResolvedValue({
        status: 'success',
        data: {
          id: 'demo-company',
          config: {
            android_play_store_url: 'https://play.google.com/store/apps/details?id=com.demo.app',
            apple_app_store_url: 'https://apps.apple.com/app/demo/id123456789'
          }
        }
      }),
      publicCompanyLocalesList: jest.fn().mockResolvedValue({
        status: 'success',
        data: {
          count: 2,
          next: null,
          previous: null,
          results: [
            { id: '1', name: 'English (US)', translation: { locale: 'en_US' }, created: 1234567890, updated: 1234567890 },
            { id: '2', name: 'Spanish (ES)', translation: { locale: 'es_ES' }, created: 1234567890, updated: 1234567890 }
          ]
        }
      }),
      publicCompanyLocalesRetrieve: jest.fn().mockResolvedValue({
        status: 'success',
        data: {
          id: '1',
          name: 'English (US)',
          translation: {
            locale: 'en_US',
            app_name: 'Demo App',
            app_description: 'A demo application'
          },
          created: 1234567890,
          updated: 1234567890
        }
      })
    };

    user = {
      userRetrieve: jest.fn().mockResolvedValue({
        status: 'success',
        data: {
          id: 'user-123',
          email: 'test@example.com'
        }
      }),
      userCompanyRetrieve: jest.fn().mockResolvedValue({
        status: 'success',
        data: {
          id: 'company-123',
          config: {
            android_play_store_url: 'https://play.google.com/store/apps/details?id=com.company.app',
            apple_app_store_url: 'https://apps.apple.com/app/company/id987654321'
          }
        }
      }),
      userLocalesList: jest.fn().mockResolvedValue({
        status: 'success',
        data: {
          count: 1,
          next: null,
          previous: null,
          results: [
            { id: '1', locale: 'en_US', is_default: true }
          ]
        }
      })
    };

    admin = {
      adminAndroidAppsList: jest.fn().mockResolvedValue({
        status: 'success',
        data: {
          count: 1,
          next: null,
          previous: null,
          results: [
            { 
              id: 'android-app-123',
              package: 'com.demo.app',
              name: 'Demo Android App',
              short_description: 'A demo app',
              created: '2024-01-01T00:00:00Z'
            }
          ]
        }
      }),
      adminIosAppsList: jest.fn().mockResolvedValue({
        status: 'success',
        data: {
          count: 1,
          next: null,
          previous: null,
          results: [
            {
              id: 'ios-app-123',
              bundle_identifier: 'com.demo.app',
              name: 'Demo iOS App',
              subtitle: 'A demo app',
              created: '2024-01-01T00:00:00Z'
            }
          ]
        }
      }),
      adminCompanyRetrieve: jest.fn().mockResolvedValue({
        status: 'success',
        data: {
          id: 'admin-company',
          config: {
            android_play_store_url: 'https://play.google.com/store/apps/details?id=com.admin.app',
            apple_app_store_url: 'https://apps.apple.com/app/admin/id111111111'
          }
        }
      })
    };
  }

  return {
    Api: MockAppApi
  };
});

describe('App Extension Integration', () => {
  let storage: MemoryStorageAdapter;

  beforeEach(() => {
    storage = new MemoryStorageAdapter();
  });

  describe('Public app extension endpoints', () => {
    it('should access public company endpoints without authentication', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com'
      });

      // Create app extension instance - no authentication needed for public endpoints
      const app = rehive.extensions.app();
      expect(app).toBeDefined();
      expect(typeof app.setSecurityData).toBe('function');

      // Test public endpoints
      const companyDetails = await app.public.publicCompanyRetrieve({});
      expect(companyDetails.status).toBe('success');
      expect(companyDetails.data?.id).toBe('demo-company');
      expect(companyDetails.data?.config?.android_play_store_url).toBeDefined();
      expect(companyDetails.data?.config?.apple_app_store_url).toBeDefined();

      // Test public company locales list
      const localesList = await app.public.publicCompanyLocalesList({
        companyId: 'demo'
      });
      expect(localesList.status).toBe('success');
      expect(localesList.data?.results).toHaveLength(2);
      expect(localesList.data?.results?.[0].name).toBe('English (US)');
      expect(localesList.data?.results?.[0].translation?.locale).toBe('en_US');

      // Test retrieve specific locale
      const localeDetails = await app.public.publicCompanyLocalesRetrieve(
        'demo',
        '1',
        {}
      );
      expect(localeDetails.status).toBe('success');
      expect(localeDetails.data?.name).toBe('English (US)');
      expect(localeDetails.data?.translation?.locale).toBe('en_US');
      expect(localeDetails.data?.translation?.app_name).toBe('Demo App');
    });

    it('should work with custom base URL for public endpoints', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com'
      });

      // Create app extension with custom URL
      const appStaging = rehive.extensions.app({
        baseUrl: 'https://staging-app.services.rehive.com/api/'
      });

      expect(appStaging).toBeDefined();
      
      const companyDetails = await appStaging.public.publicCompanyRetrieve({});
      expect(companyDetails.status).toBe('success');
      expect(companyDetails.data?.id).toBe('demo-company');
    });
  });

  describe('Authenticated app extension usage', () => {
    it('should use app extension with permanent token for admin endpoints', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'permanent-admin-token'
      });

      const app = rehive.extensions.app();
      expect(app).toBeDefined();

      // Test admin endpoints for Android apps
      const androidApps = await app.admin.adminAndroidAppsList({});
      expect(androidApps.status).toBe('success');
      expect(androidApps.data?.results).toHaveLength(1);
      expect(androidApps.data?.results?.[0].package).toBe('com.demo.app');

      // Test admin endpoints for iOS apps
      const iosApps = await app.admin.adminIosAppsList({});
      expect(iosApps.status).toBe('success');
      expect(iosApps.data?.results).toHaveLength(1);
      expect(iosApps.data?.results?.[0].bundle_identifier).toBe('com.demo.app');

      // Test admin company endpoint
      const adminCompany = await app.admin.adminCompanyRetrieve({});
      expect(adminCompany.status).toBe('success');
      expect(adminCompany.data?.config?.android_play_store_url).toBeDefined();
    });

    it('should access user endpoints with authentication', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'user-token'
      });

      const app = rehive.extensions.app();

      // Test user company endpoint
      const userCompany = await app.user.userCompanyRetrieve({});
      expect(userCompany.status).toBe('success');
      expect(userCompany.data?.config?.android_play_store_url).toBeDefined();

      // Test user locales
      const userLocales = await app.user.userLocalesList({});
      expect(userLocales.status).toBe('success');
      expect(userLocales.data?.results).toHaveLength(1);
    });
  });

  describe('App extension error handling', () => {
    it('should handle app extension API errors', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        storage,
        enableCrossTabSync: false
      });

      // Create app extension without authentication
      const app = rehive.extensions.app();

      // Mock error response for authenticated endpoint without auth
      jest.spyOn(app.user, 'userCompanyRetrieve').mockRejectedValue({
        status: 401,
        message: 'Authentication required',
        error: {
          status: 'error',
          message: 'Authentication required'
        }
      });

      try {
        await app.user.userCompanyRetrieve({});
        fail('Expected API call to fail');
      } catch (error: any) {
        expect(error.status).toBe(401);
        expect(error.message).toBe('Authentication required');
      }
    });
  });

  describe('App extension with multiple instances', () => {
    it('should support multiple app extension instances', async () => {
      const rehive = new RehiveClient({
        baseUrl: 'https://api.test.com',
        token: 'server-token'
      });

      // Create multiple app instances
      const appProd = rehive.extensions.app();
      const appStaging = rehive.extensions.app({
        baseUrl: 'https://staging-app.services.rehive.com/api/'
      });
      const appDev = rehive.extensions.app({
        baseUrl: 'https://dev-app.services.rehive.com/api/'
      });

      expect(appProd).toBeDefined();
      expect(appStaging).toBeDefined();
      expect(appDev).toBeDefined();

      // All should work independently with public endpoints
      const prodResult = await appProd.public.publicCompanyRetrieve({});
      const stagingResult = await appStaging.public.publicCompanyRetrieve({});
      const devResult = await appDev.public.publicCompanyRetrieve({});

      expect(prodResult.status).toBe('success');
      expect(stagingResult.status).toBe('success');
      expect(devResult.status).toBe('success');
    });
  });
});