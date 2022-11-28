export declare const getFolderJs: <T extends string | undefined>(filePath: T) => T;
export declare const getFileOrFolderName: <T extends string | undefined>(fileOrFolderPath: T) => T;
export declare const isPathRelative: (path: string) => boolean;
export declare const removeTrailingSlash: (p: string) => string;
/**
 * Provide a filename including its extension, to get the subextension.
 */
export declare const getSubExtension: (filename: string) => string | undefined;
/**
 * removes extension from the filename
 *
 */
export declare const withoutExtension: (fileName: string) => string;
/**
 * returns the extension of the filename or path WITHOUT dot
 *
 * NB: not sure, but could be nice to replace this with path.extname(pathString)
 */
export declare const getExtension: (fileNameOrPath: string) => string;
//# sourceMappingURL=js.d.ts.map