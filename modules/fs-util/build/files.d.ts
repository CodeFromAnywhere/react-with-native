#!/usr/bin/env node
import { Path } from "./types";
import type { PathLike } from "./fs";
/**
 * writes all values in an object to the file that should be specified as key of that value
 */
export declare const writeToFiles: (fileObject: {
    [filePath: string]: any;
}) => Promise<void>;
/**
 * uses fs.access to determine if something can be accessed
 *
 * Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).
 */
export declare const canAccess: (p: PathLike, mode: number) => Promise<boolean>;
/**
 * uses fs.access to determine if something can be accessed
 *
 * Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).
 */
export declare const canAccessSync: (p: PathLike, mode: number) => boolean;
/**
 * File is visible to the calling process
 */
export declare const canSee: (p: PathLike) => Promise<boolean>;
/**
 * File is readable to the calling process
 */
export declare const canRead: (p: PathLike) => Promise<boolean>;
/**
 * File is writable to the calling process
 */
export declare const canWrite: (p: PathLike) => Promise<boolean>;
/**
 * File is executable to the calling process
 */
export declare const canExecute: (p: PathLike) => Promise<boolean>;
/**
 * File is visible to the calling process
 */
export declare const canSeeSync: (p: PathLike) => Promise<boolean>;
/**
 * File is readable to the calling process
 */
export declare const canReadSync: (p: PathLike) => boolean;
/**
 * File is writable to the calling process
 */
export declare const canWriteSync: (p: PathLike) => boolean;
/**
 * File is executable to the calling process
 */
export declare const canExecuteSync: (p: PathLike) => boolean;
/**
 gets combinations for paths

 input: [["operation1","operation2"], "index/value-export", ["index.ts","test.ts","cli.ts"]]
 output: ["operation1/index/value-export/index.ts","operation2/index/value-export/index.ts","operation1/index/value-export/test.ts","operation2/index/value-export/test.ts","operation1/index/value-export/cli.ts","operation2/index/value-export/cli.ts"]
 */
export declare const getPathCombinations: (...chunksSegments: (string[] | string)[]) => string[];
/**
 * write json to a file
 *
 * makes the dir and file if they don't exist
 */
export declare const writeJsonToFile: <T>(p: Path, data: T) => Promise<boolean>;
export declare const removeTrailingSlash: (p: string) => string;
export declare const getSubExtension: (fileName: Path) => string | undefined;
/**
 * removes everything after the last slash to get folder path
 *
 * input: /Users/king/Documents/some/folder/xyz
 * output: xyz
 *
 * input: /Users/king/Documents/some/folder/xyz.txt
 * output: folder
 */
export declare const getLastFolder: (pathString: Path) => string;
/**
 if the path exists:
    - if the pathString is a folder, that is returned.
    - if the pathstring is not a folder, returns the pathstring without the file suffix
    
if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)
 */
export declare const getFolder: (pathString: Path) => string;
/**
 * removes everything before the last slash to get folder path
 */
export declare const getFileName: (pathString: Path) => string;
/**
 * removes extension from the filename
 *
 */
export declare const withoutExtension: (fileName: Path) => string;
/**
 * returns the extension of the filename or path
 *
 * NB: not sure, but could be nice to replace this with path.extname(pathString)
 */
export declare const getExtension: (fileNameOrPath: string) => string;
//# sourceMappingURL=files.d.ts.map