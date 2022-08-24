/**
 * Removes everything inside a folder except some files and folders that can, optionally, be ignored for removal. does not remove the folder itself
 *
 * NB: make this work with subdirectories!
 */
export declare const removeAllExcept: (folderPath: string, config?: {
    /**
     * array of relative folder paths and file paths that should not be removed (include the extensions!)
     */
    ignore?: string[];
    typeToRemove?: "file" | "folder";
}) => Promise<{
    name: string;
    removed: boolean;
}[]>;
//# sourceMappingURL=removeAllExcept.d.ts.map