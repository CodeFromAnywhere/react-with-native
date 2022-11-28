import { CategorizedFilePaths, FolderSummary, SizeSummary } from "code-types";
/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 */
export declare function byteCount(s: string): number;
/**
 * gets a size summary for a file path
 *
 * Does not calculate this for files that are too big (bigger than 1MB)
 */
export declare const getSizeSummary: (filePath: string) => Promise<SizeSummary>;
export declare const sumSizeSummary: (filePaths: string[]) => Promise<SizeSummary>;
/**
 * calculates folder summary from a categorized file paths object
 */
export declare const getFolderSummary: (categorizedFiles: CategorizedFilePaths) => Promise<FolderSummary>;
//# sourceMappingURL=getFolderSummary.d.ts.map