import { CategorizedFilePaths } from "code-types";
/**
 * explores files in an operation within a specified location or from a specified type
 */
export declare const categorizeFiles: ({ basePath, type, ignoreIndexFiles, }: {
    basePath: string | string[];
    /**
     * ignore index files or not
     */
    ignoreIndexFiles?: boolean | undefined;
    /**
     * if given, only search for files of a specific containing data type
     */
    type?: "code" | "data" | "text" | undefined;
}) => Promise<CategorizedFilePaths>;
//# sourceMappingURL=categorizeFiles.d.ts.map