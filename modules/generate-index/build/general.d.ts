#!/usr/bin/env node
import { TsExport } from "code-types";
/**
 * map function that adds an alias parameter to exports that have duplication in their name
 */
export declare function renameExportUnique({ index, self, value, isSdk, requireAlias, }: {
    value: TsExport;
    index: number;
    self: TsExport[];
    isSdk?: boolean;
    /**
     * if true, alias will always be made
     */
    requireAlias?: boolean;
}): TsExport;
/**
 * provides details needed to create an import
 */
export declare const getExportDetails: (exp: TsExport, thisOperationName: string) => {
    nameOrAlias: string;
    fileOrOperation: string | null;
} | undefined;
//# sourceMappingURL=general.d.ts.map