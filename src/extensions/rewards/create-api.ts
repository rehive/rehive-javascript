import * as sdk from './openapi-ts/sdk.gen.js';
import { createClient } from './openapi-ts/client/index.js';
import { bindSdk, type BoundSdk } from '../../shared/bind-sdk.js';
import { buildClientConfig, type ApiFactoryConfig } from '../../shared/create-api-client.js';

export type RewardsApi = BoundSdk<typeof sdk>;

export function createRewardsApi(config: ApiFactoryConfig): RewardsApi {
  const client = createClient(
    buildClientConfig(config, 'https://reward.services.rehive.com/api/'),
  );
  return bindSdk(sdk, client);
}
