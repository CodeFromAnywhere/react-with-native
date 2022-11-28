import { TsBuildError, TsComment, TsExport, TsFunction, TsImport, TsInterface, TsLintWarning, TsVariable } from "code-types";
export declare const shouldDeleteTsModel: (tsModel: TsFunction | TsComment | TsInterface | TsBuildError | TsLintWarning | TsExport | TsImport | TsVariable, operationName: string, operationRelativePaths: string[]) => boolean;
/**
 * From all Ts Index Models, removes the instances that refer to a ts file that doesn't exist anymore in the operation.
 */
export declare const cleanupTsDatabase: (operationName: string, manualProjectRoot?: string) => Promise<{
    amountRemoved: number;
} | undefined>;
//# sourceMappingURL=cleanupTsDatabase.d.ts.map