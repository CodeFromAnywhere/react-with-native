export declare const findAllFoldersWithName: (config: {
    basePath: string;
    folderName: string;
    ignoreOperations?: boolean | undefined;
}) => Promise<string[]>;
/**
 * Returns absolute paths for all docs folders (not the files inside)
 */
export declare const findAllDocsFolderPaths: (ignoreOperations?: boolean) => Promise<string[]>;
export declare const findAllTodoFolderPaths: (basePath: string, ignoreOperations?: boolean) => Promise<string[]>;
//# sourceMappingURL=find-folders.d.ts.map