import * as sdk from './openapi-ts/sdk.gen.js';
import { createClient } from './openapi-ts/client/index.js';
import { bindSdk, type BoundSdk } from '../../shared/bind-sdk.js';
import { buildClientConfig, type ApiFactoryConfig } from '../../shared/create-api-client.js';

export type BusinessApi = BoundSdk<typeof sdk>;

export function createBusinessApi(config: ApiFactoryConfig): BusinessApi {
  const client = createClient(
    buildClientConfig(config, 'https://business.services.rehive.com/api/'),
  );
  return bindSdk(sdk, client);
}
