import { OperationIndex, GeneralOperationIndex } from "k-types";
export declare const writeKeyToOperationIndexJson: <K extends "createdAt" | "buildSucceeded" | "dependenciesBuildsFailed" | "indexImportExportError" | "lintProblems" | "indexInteracesErrors" | "indexErrors" | keyof import("k-types").OperationSize | keyof GeneralOperationIndex>(absolutePath: string, key: K, value: OperationIndex[K]) => Promise<void>;
/**
 * relies on import index
 */
export declare const recalculateOperationIndexJson: (fullPath: string) => Promise<void>;
//# sourceMappingURL=operation-util.d.ts.map