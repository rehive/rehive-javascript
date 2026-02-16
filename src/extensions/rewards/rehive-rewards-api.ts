/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA OPENAPI-TS COMPAT LAYER       ##
 * ##                                                           ##
 * ## SOURCE: @hey-api/openapi-ts                              ##
 * ---------------------------------------------------------------
 */

import { createClient } from './openapi-ts/client/index.js';
import * as sdk from './openapi-ts/sdk.gen.js';
import {
  OpenApiCompatApi,
  type ApiConfig,
  type FullRequestParams,
  type RequestParams,
  type HttpResponse,
  ContentType,
} from '../../shared/openapi-compat.js';

export * from './openapi-ts/index.js';
export type { ApiConfig, FullRequestParams, RequestParams, HttpResponse };
export { ContentType };

export class Api<SecurityDataType extends unknown> extends OpenApiCompatApi<SecurityDataType> {
  [key: string]: any;

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    super({
      apiConfig,
      createClient,
      defaultBaseUrl: 'https://reward.services.rehive.com/api/',
      sdk,
    });

    this.bindOperationsByPrefix();
  }
}
