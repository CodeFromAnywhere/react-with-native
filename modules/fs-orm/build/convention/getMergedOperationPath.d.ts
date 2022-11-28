import { MergedQueryConfig } from "../types";
/**
 *
 *
 * NB: returns 3 things:
 * - false: no operation path
 * - undefined: operation path undefined
 * - path: the specific operation path
 */
export declare const getMergedConfigOperationPath: (mergedConfig: MergedQueryConfig, manualProjectRoot?: string) => Promise<false | string | undefined>;
//# sourceMappingURL=getMergedOperationPath.d.ts.map