import { FolderPath, Markdown, Path } from "./types";
/**
 * DEPRECATED:
 *
 * works fine but this requires us to know exactly what we want from the file, so it requires a very clear convention.
 * better would be to introspect the code and just require whatever's there
 * returns T[] where every T is one of:
 * - the default export (importStrategy "default")
 * - the export with the name of the extension
 * - an object with a subset of exports
 *
 */
export declare const importFromFiles: <T>({ files, importStrategy, list, guard, }: {
    files: Path[];
    importStrategy?: "default" | "fileName" | "list" | undefined;
    list?: string[] | undefined;
    guard?: ((moduleExports: any) => boolean) | undefined;
}) => T[];
/**
 * DEPRECATED:
 *
 * this is sensible-specific
 */
export declare const findSensibleFiles: (slug: string, basePath: string) => FolderPath[];
/**
 * DEPRECATED:
 *
 * SHOULD BE REPLACED
 *
 * this is sensible-specific
 */
export declare const findFiles: (slug: string, basePath: string) => FolderPath[];
/**
 * DEPRECATED
 */
export declare const isArrayGuard: (moduleExports: any) => boolean;
/**
 * DEPRECATED: `k-explore` can be used
 */
export declare const findAllMd: (folderPath: Path, onlyInCurrentFolder?: boolean) => Markdown[];
/**
 * DEPRECATED: in favor of mergeObjectsArray from "js-util"
 */
export declare const mergeObjectsArray: <T extends {
    [key: string]: any;
}>(objectsArray: T[]) => T;
/**
 * DEPRECATED: in favour of `explore` from "k-explore"
 */
export declare const findFilesRecursively: ({ match, basePath, relativePath, onlyInSubFolders, onlyInCurrentFolder, }: {
    match: (fileName: string, extension: string) => boolean;
    basePath: Path;
    relativePath?: string | undefined;
    /**
     * only find files in folders of this location, not in this location itself
     */
    onlyInSubFolders?: boolean | undefined;
    onlyInCurrentFolder?: boolean | undefined;
}) => FolderPath[];
//# sourceMappingURL=deprecated.d.ts.map