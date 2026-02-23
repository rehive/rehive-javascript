import * as sdk from './openapi-ts/sdk.gen.js';
import { createClient } from './openapi-ts/client/index.js';
import { bindSdk, type BoundSdk } from '../../shared/bind-sdk.js';
import { buildClientConfig, type ApiFactoryConfig } from '../../shared/create-api-client.js';

export type UserApi = BoundSdk<typeof sdk>;

export function createUserApi(config: ApiFactoryConfig): UserApi {
  const client = createClient(buildClientConfig(config, config.auth.baseUrl));
  return bindSdk(sdk, client);
}
