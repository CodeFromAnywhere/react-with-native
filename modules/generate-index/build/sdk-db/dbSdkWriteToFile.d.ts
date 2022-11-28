#!/usr/bin/env node
import { TsExport } from "code-types";
import { ModelWithStorageMethod } from "../types";
/**
 * generates dbSdk.ts script
 */
export declare const dbSdkWriteToFile: ({ exportArray, outputPath, operationName, exportSeparate, allDbModels, }: {
    allDbModels?: ModelWithStorageMethod[] | undefined;
    exportArray: TsExport[];
    outputPath: string;
    operationName: string;
    exportSeparate?: boolean | undefined;
}) => Promise<void>;
//# sourceMappingURL=dbSdkWriteToFile.d.ts.map