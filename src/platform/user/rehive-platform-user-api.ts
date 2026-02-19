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

// Preserve legacy exported request-body aliases used across the SDK.
export type { LoginWritable as Login } from './openapi-ts/types.gen.js';
export type { RegisterWritable as Register } from './openapi-ts/types.gen.js';
export type { RegisterCompanyWritable as RegisterCompany } from './openapi-ts/types.gen.js';

export class Api<SecurityDataType extends unknown> extends OpenApiCompatApi<SecurityDataType> {
  public v3: Record<string, any> = {};
  [key: string]: any;

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    super({
      apiConfig,
      createClient,
      defaultBaseUrl: 'https://api.rehive.com',
      sdk,
    });

    this.bindOperationsToGroup('v3');
  }
}
