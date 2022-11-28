import { SourceFile } from "ts-morph";
import { Creation } from "model-types";
import { TsInterface } from "code-types";
export declare const findAndUpsertTsInterfaces: (config: {
    /**
     * If not provided, will load the project at the operation base path of the filepath, and get the source file at the filePath
     */
    sourceFile?: SourceFile | undefined;
    operationName: string;
    /**
     * path of the file to find TsInterfaces in
     */
    filePath: string;
    projectRoot?: string | undefined;
}) => Promise<undefined | Creation<TsInterface>[]>;
//# sourceMappingURL=findAndUpsertTsInterfaces.d.ts.map