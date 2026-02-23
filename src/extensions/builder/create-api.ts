import * as sdk from './openapi-ts/sdk.gen.js';
import { createClient } from './openapi-ts/client/index.js';
import { bindSdk, type BoundSdk } from '../../shared/bind-sdk.js';
import { buildClientConfig, type ApiFactoryConfig } from '../../shared/create-api-client.js';

export type BuilderApi = BoundSdk<typeof sdk>;

export function createBuilderApi(config: ApiFactoryConfig): BuilderApi {
  const client = createClient(
    buildClientConfig(config, 'https://builder.services.rehive.com/api/'),
  );
  return bindSdk(sdk, client);
}
