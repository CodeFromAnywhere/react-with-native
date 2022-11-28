import { sdk } from "sdk-api";
import { UseQueryResult } from "react-query";
import type { IsRawApiResultFunction, IsRegularFunction } from "./function-naming-convention-types";
import { Shift, WithoutPromise } from "./util";
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
export declare type FnReturn<Fn extends keyof SdkType> = WithoutPromise<ReturnType<SdkType[Fn]>>;
/**
 * Wraps the return type of the function in the `ExecuteFunctionResult` object + result parameter.
 */
export interface ApiReturnType<TFunctionName extends keyof SdkType> extends ExecuteFunctionResult {
    /**
     * The original result of the backend function that you are calling
     *
     * If the function fails executing, this can be undefined
     */
    result?: FnReturn<TFunctionName>;
}
/**
 * Handy type interface for rendering response
 */
export interface StandardizedApiReturnType extends ExecuteFunctionResult {
    result?: {
        isSuccessful?: boolean;
        message?: string;
        [key: string]: any;
    };
}
/**
 * Taking into account the `xyzWithContextRaw` convention
 */
export declare type RealApiReturnType<TFunctionName extends keyof SdkType> = IsRawApiResultFunction<TFunctionName> extends true ? FnReturn<TFunctionName> : ApiReturnType<TFunctionName>;
/**
 * API SDK type
 */
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
/**
 * Removes the first parameter of the function type interface if the name of the function has a convention that enables it to be omitted from the API (because it is supplied on the backend)
 *
 * We remove the first (and not the last) because we often have optional parameters, so it's easier to remove the first to keep that possibility.
 */
export declare type ParametersWithoutContext<TFunctionName extends keyof SdkType> = IsRegularFunction<TFunctionName> extends true ? Parameters<SdkType[TFunctionName]> : Shift<Parameters<SdkType[TFunctionName]>>;
export declare type ApiTypeWithConfig = {
    [TFunctionName in keyof SdkType]: (config: ApiConfig, ...parameters: ParametersWithoutContext<TFunctionName>) => Promise<RealApiReturnType<TFunctionName>>;
};
export declare type ApiTypeWithoutConfig = {
    [TFunctionName in keyof SdkType]: (...parameters: ParametersWithoutContext<TFunctionName>) => Promise<RealApiReturnType<TFunctionName>>;
};
/**
 * This object generates a valid type interface for a useQuery function for the whole api.
 *
 * It should be nice to somehow centralize the keyof SdkType as a variale as well instead of just the hookname, but I don't know how to do that. Thus I found a way to find the original function name again based on the THookName. Pretty sick!
 */
export declare type QueryType = {
    [THookName in `use${Capitalize<keyof SdkType>}`]: (...parameters: THookName extends `use${infer T}` ? Uncapitalize<T> extends keyof SdkType ? ParametersWithoutContext<Uncapitalize<T>> : never : never) => THookName extends `use${infer T}` ? Uncapitalize<T> extends keyof SdkType ? UseQueryResult<RealApiReturnType<Uncapitalize<T>>, unknown> : never : never;
};
//# sourceMappingURL=api-types.d.ts.map