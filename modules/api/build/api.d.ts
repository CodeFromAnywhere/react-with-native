/** NB: this is removed at compilation so it's not a dependency and doesn't end up in the bundle */
import type { ApiConfig, ApiTypeWithoutConfig, ApiTypeWithConfig, RealApiReturnType } from "api-types";
/**
 *
 */
export declare const AUTH_TOKEN_STORAGE_KEY = "api.authToken";
export declare const API_NO_RESPONSE_TIME_KEY = "api.timeoutAt";
/**
 * Used for calling the actual api for a function with some config
 *
 * NB: this is not a typed function as we are just overwriting it so we don't need any inference on this
 */
export declare const untypedApiFunction: (fnName: string, config: ApiConfig, ...parameters: any) => Promise<RealApiReturnType<any>>;
/**
 * This object contains a api function for every function in the backend
 *
 * The difference from `api` is that it allows you to also insert custom api configurations
 */
export declare const apiWithConfig: ApiTypeWithConfig;
/**
 * This object contains an api function for every function in the backend
 *
 *
 * NB: only use this if you can access localStorage of the browser or the app. This means this won't work in node or in getStaticProps functions or so
 */
export declare const api: ApiTypeWithoutConfig;
//# sourceMappingURL=api.d.ts.map