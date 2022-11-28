#!/usr/bin/env node
export declare type ImportStatement = {
    type: "variable" | "function" | "interface";
    name: string;
    srcRelativeFileId: string;
};
export declare const isTestFn: (x: ImportStatement) => boolean;
/**
 * generates index for some exports and writes it to an outputPath
 */
export declare const generateIndex: ({ importStatements, outputPath, operationBasePath, operationName, files, }: {
    /**
     * if given, just exports * from those
     */
    files?: string[] | undefined;
    operationBasePath: string;
    importStatements: ImportStatement[];
    outputPath: string;
    operationName: string;
}) => Promise<void>;
//# sourceMappingURL=generateIndex.d.ts.map