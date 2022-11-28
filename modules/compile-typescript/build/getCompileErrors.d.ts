import { TsBuildError } from "code-types";
import { Creation } from "model-types";
/**
 * gets compileErrors of an operation. if it has no errors, it also check all dependants to see if they have errors, possibly because we changed this one
 *
 * 1) get buildErrors for all src files of current operation
   2) if build doesn't succeed, only check for build errors in current operation
   3) if build succeeds, check iffor build errors in all files in all operations that depend on this one. this means we need compile to be ran for every operation

   TODO: Later, only check all build errors of all dependants if and only if an export blueprint (io) has changed and if this export was imported there
 */
export declare const getCompileErrors: (operationBasePath: string, onlyDependants?: boolean, manualProjectRoot?: string) => Promise<Creation<TsBuildError>[]>;
//# sourceMappingURL=getCompileErrors.d.ts.map