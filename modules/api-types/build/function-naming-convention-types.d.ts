import { StringEndsWith } from "./util";
export declare const contextFunctionConventionSuffix = "WithContext";
export declare const rawFunctionConventionSuffix = "WithContextRaw";
export declare const getFunctionConventionSuffix = "GetApi";
/**
 * API conventions:
 *
 * - `xyzGetApi` is only available via GET, the rest is only available with POST.
 * - `xyzWithContext` is taking `FunctionContext` as its first parameter
 * - `xyzWithContextRaw` is taking `FunctionContext` as its first parameter, and is expected to return the raw return type the function returns.
 */
export declare const apiConventions: {
    contextFunctionConventionSuffix: string;
    rawFunctionConventionSuffix: string;
    getFunctionConventionSuffix: string;
};
export declare type IsWithContextFunction<TFunctionName extends string> = StringEndsWith<TFunctionName, typeof contextFunctionConventionSuffix>;
export declare type IsWithContextRawFunction<TFunctionName extends string> = StringEndsWith<TFunctionName, typeof rawFunctionConventionSuffix>;
export declare type IsGetApiFunction<TFunctionName extends string> = StringEndsWith<TFunctionName, typeof getFunctionConventionSuffix>;
/**
 * based on the function name, the api result should be raw without the wrapped `ApiReturnType` object
 */
export declare type IsRawApiResultFunction<TFunctionName extends string> = IsWithContextRawFunction<TFunctionName> extends true ? true : IsGetApiFunction<TFunctionName> extends true ? true : false;
/**
 * Function is a regular function without any `api` altering conventions
 */
export declare type IsRegularFunction<TFunctionName extends string> = IsWithContextFunction<TFunctionName> extends true ? false : IsGetApiFunction<TFunctionName> extends true ? false : IsWithContextRawFunction<TFunctionName> extends true ? false : true;
//# sourceMappingURL=function-naming-convention-types.d.ts.map