import { TsFunction, TsInterface, TsVariable } from "code-types";
export declare type ImportStatement = {
    type: "variable" | "function" | "interface";
    name: string;
    srcRelativeFileId: string;
};
export declare const isTestFn: (x: ImportStatement) => boolean;
export declare const mapToImportStatement: (item: TsFunction | TsVariable | TsInterface, type: ImportStatement["type"]) => ImportStatement;
//# sourceMappingURL=util.d.ts.map