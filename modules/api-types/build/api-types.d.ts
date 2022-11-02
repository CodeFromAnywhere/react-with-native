import { sdk } from "sdk-api";
import { UseQueryResult } from "react-query";
export declare type ExecuteFunctionResult = {
    /**
     * A boolean indicating whether or not the backend function was executed succesfully
     */
    isSuccessful: boolean;
    /**
     * If true, this indicates that the backend could not be reached for one reason or another. The reason can be found in `message`
     */
    isNotConnected?: boolean;
    /**
     * If true, this means that the result is coming from a cache
     */
    isCached?: boolean;
    /**
     * If true, the function was not executed because you were not authorized
     */
    isUnauthorized?: boolean;
    /**
     * Optionally there could be a message here with more information about the failure
     */
    message?: string;
    /**
     * If the input of the api was invalid, the invalidation will return the errors here.
     */
    errors?: {
        fieldStack: string[];
        error: string;
    }[];
};
/**
 * Removes promise from a type
 *
 * Examples:
 *
 * ```ts
type X = WithoutPromise<Promise<string>> //X is string
type Y = WithoutPromise<string> // Y is string
```
 */
export declare type WithoutPromise<T> = T extends Promise<infer U> ? U : T;
export declare type FnReturn<Fn extends keyof SdkType> = WithoutPromise<ReturnType<SdkType[Fn]>>;
export interface RealApiReturnType<Fn extends keyof SdkType> extends ExecuteFunctionResult {
    /**
     * The original result of the backend function that you are calling
     *
     * If the function fails executing, this can be undefined
     */
    result?: FnReturn<Fn>;
}
export declare type SdkType = typeof sdk;
export declare type ApiConfig = {
    /**
     * optionally provide an api URL (uses sdk-env-public key if not provded)
     */
    apiUrl?: string;
    /**
     * optionally provide an authtoken (uses storage key if not provided)
     */
    authToken?: string;
    /**
     * optionally provide a max ms to execute the api fetch
     */
    timeout?: number;
};
export declare type ApiTypeWithConfig = {
    [Fn in keyof SdkType]: (config: ApiConfig, ...parameters: Parameters<SdkType[Fn]>) => Promise<RealApiReturnType<Fn>>;
};
export declare type ApiTypeWithoutConfig = {
    [Fn in keyof SdkType]: (...parameters: Parameters<SdkType[Fn]>) => Promise<RealApiReturnType<Fn>>;
};
/**
 * CRAZY.
 *
 * This object generates a valid type interface for a useQuery function for the whole api.
 *
 * It should be nice to somehow centralize the keyof SdkType as a variale as well instead of just the hookname, but I don't know how to do that. Thus I found a way to find the original function name again based on the THookName. Pretty sick!
 */
export declare type QueryType = {
    [THookName in `use${Capitalize<keyof SdkType>}`]: (...parameters: THookName extends `use${infer T}` ? Uncapitalize<T> extends keyof SdkType ? Parameters<SdkType[Uncapitalize<T>]> : never : never) => THookName extends `use${infer T}` ? Uncapitalize<T> extends keyof SdkType ? UseQueryResult<RealApiReturnType<Uncapitalize<T>>, unknown> : never : never;
};
//# sourceMappingURL=api-types.d.ts.map