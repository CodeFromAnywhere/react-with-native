import { OperationClassification, TsFunction } from "code-types";
export declare type FunctionsPerClassification = {
    [operationClassification in OperationClassification]: TsFunction[];
};
/**
 * returns all sdk functions grouped by operation classification
 */
export declare const getSdkFunctions: (config?: {
    manualProjectRoot?: string | undefined;
} | undefined) => Promise<FunctionsPerClassification | undefined>;
/**
 * Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised
 */
export declare const newSdkOperation: (operationName: string, tsFunctions: TsFunction[], config?: {
    manualProjectRoot?: string | undefined;
    skipYarnInstall?: boolean | undefined;
} | undefined) => Promise<void>;
export declare const newSdkKeysOperation: (operationName: string, tsFunctions: TsFunction[], config?: {
    manualProjectRoot?: string | undefined;
    skipYarnInstall?: boolean | undefined;
} | undefined) => Promise<void>;
/**
Creates
- sdk
- sdk-api (for just operations that have been determined to be exposed): add `export type { SdkApiType }`
- sdk-js (functions that can be executed in the browser on the client side)
- sdk-keys (all sdk keys)
- sdk-api-keys
- sdk-js-keys

Overwrites them if they already exist with minimal interruption time of the system
*/
export declare const generateFunctionSdks: (config?: {
    manualProjectRoot?: string | undefined;
    skipYarnInstall?: boolean | undefined;
} | undefined) => Promise<void>;
//# sourceMappingURL=generateFunctionSdks.d.ts.map