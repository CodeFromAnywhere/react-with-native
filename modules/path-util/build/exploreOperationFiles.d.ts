import { CategorizedOperationFiles } from "k-types";
/**
 * explores files in an operation within a specified location or from a specified type
 */
export declare const exploreOperationFiles: ({ operationBasePath, type, location, ignoreIndexFiles, }: {
    operationBasePath: string;
    ignoreIndexFiles?: boolean | undefined;
    /**
     * if given, only search for files of a specific containing data type
     */
    type?: "code" | "data" | "text" | undefined;
    /**
     * if given, only search in this location
     *
     * root will only search in root folder
     */
    location?: "src" | "assets" | "docs" | "root" | undefined;
}) => Promise<CategorizedOperationFiles>;
//# sourceMappingURL=exploreOperationFiles.d.ts.map