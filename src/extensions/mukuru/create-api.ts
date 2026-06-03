import * as sdk from './openapi-ts/sdk.gen.js';
import { createClient } from './openapi-ts/client/index.js';
import { bindSdk, type BoundSdk } from '../../shared/bind-sdk.js';
import { buildClientConfig, type ApiFactoryConfig } from '../../shared/create-api-client.js';

export type MukuruApi = BoundSdk<typeof sdk>;

export function createMukuruApi(config: ApiFactoryConfig): MukuruApi {
  const client = createClient(
    buildClientConfig(config, 'https://mukuru.services.rehive.com/api/'),
  );
  return bindSdk(sdk, client);
}
