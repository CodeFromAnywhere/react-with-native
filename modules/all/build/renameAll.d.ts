/** renames all files to a new name (optionally a func, based on the old path) */
export declare const renameAll: ({ filePaths, newFileName, newFilePath, }: {
    filePaths: string[];
    /**
     * if given, all files will be replaces by this filename
     */
    newFileName?: string | undefined;
    /**
     * if given, this will be used to determine the new path
     */
    newFilePath?: ((oldPath: string) => string) | undefined;
}) => Promise<void>;
//# sourceMappingURL=renameAll.d.ts.map