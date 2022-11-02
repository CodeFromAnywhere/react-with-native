import type { ApiConfig, ApiTypeWithoutConfig, ApiTypeWithConfig, RealApiReturnType, QueryType } from "api-types";
/**
 *
 */
export declare const AUTH_TOKEN_STORAGE_KEY = "api.authToken";
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
/**

This object contains a react-query `useQuery` hook for every api function

 */
export declare const queries: QueryType;
//# sourceMappingURL=api.d.ts.map