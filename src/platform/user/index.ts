import { Api as GeneratedUserApi } from './rehive-platform-user-api.js';

/**
 * Rehive Platform User API with improved Developer Experience (DX).
 * 
 * This wrapper class addresses a common DX issue with the generated Platform APIs.
 * The swagger-typescript-api generator creates APIs with nested namespaces based on the
 * OpenAPI paths. Since Rehive platform endpoints start with "/3/", they get grouped
 * under a "v3" namespace, requiring developers to write:
 * 
 *   await platformApi.v3.authLogin(data)
 * 
 * This wrapper automatically proxies all v3 methods to the root level, allowing:
 * 
 *   await platformApi.authLogin(data)  // Much cleaner!
 * 
 * The proxying happens dynamically at construction time, so all generated methods
 * are available without the v3 prefix while maintaining full TypeScript support.
 */
export class RehivePlatformUserApi<SecurityDataType = unknown> extends GeneratedUserApi<SecurityDataType> {
  [key: string]: any; // Allow dynamic property assignment for proxied methods
  
  constructor(config?: any) {
    super(config);
    
    // Dynamically proxy all v3 methods to the root level for cleaner DX
    if (this.v3) {
      Object.keys(this.v3).forEach(key => {
        if (typeof (this.v3 as any)[key] === 'function') {
          // Create a root-level method that calls the v3 method
          this[key] = (this.v3 as any)[key];
        }
      });
    }
  }
}

// Re-export the generated API for those who want the raw version
export { Api as RawPlatformUserApi } from './rehive-platform-user-api.js';

// Re-export types
export * from './rehive-platform-user-api.js';