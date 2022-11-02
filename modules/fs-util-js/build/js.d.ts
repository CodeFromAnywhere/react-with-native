export declare const getFolderJs: <T extends string | undefined>(filePath: T) => string | undefined;
export declare const isPathRelative: (path: string) => boolean;
export declare const removeTrailingSlash: (p: string) => string;
export declare const getSubExtension: (fileName: string) => string | undefined;
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