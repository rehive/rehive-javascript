import * as sdk from './openapi-ts/sdk.gen.js';
import { createClient } from './openapi-ts/client/index.js';
import { bindSdk, type BoundSdk } from '../../shared/bind-sdk.js';
import { buildClientConfig, type ApiFactoryConfig } from '../../shared/create-api-client.js';

export type NotificationsApi = BoundSdk<typeof sdk>;

export function createNotificationsApi(config: ApiFactoryConfig): NotificationsApi {
  const client = createClient(
    buildClientConfig(config, 'https://notification.services.rehive.com/api/'),
  );
  return bindSdk(sdk, client);
}
