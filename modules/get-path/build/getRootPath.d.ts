/**
 * can only be accessed in the OS
 */
export declare const osRootFoldersConst: readonly ["assets", "backups", "bundled", "bundles", "distributions"];
/**
 * can be accessed in projects as well as in the OS
 */
export declare const projectRootFoldersConst: readonly ["text", "tools", "information"];
export declare const projectRootFolders: string[];
export declare const osRootFolders: string[];
export declare type OSRootFolder = typeof osRootFoldersConst[number];
export declare type ProjectRootFolder = typeof projectRootFoldersConst[number];
export declare const getRootPath: (name?: OSRootFolder | ProjectRootFolder, config?: {
    manualProjectRoot?: string;
}) => string | undefined;
//# sourceMappingURL=getRootPath.d.ts.map