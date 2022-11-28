import { SearchableExtension } from "filename-conventions";
/**
 * gets all identifiers of files, which are the relative path to a file without the extension
 */
export declare const getFileIds: ({ operationFolderPath, pathSuffix, extension, }: {
    operationFolderPath: string;
    extension?: string | string[] | undefined;
    pathSuffix: string;
}) => Promise<string[]>;
//# sourceMappingURL=getFileIds.d.ts.map