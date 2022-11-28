import { FolderSummary } from "./FolderSummary";
import { TsComment } from "./TsComment";
/**
 * All interesting metadata about any path (files and folders)
 */
export declare type PathMetaData = FileContentInfo & PathParse & PathStats;
/**
 * Stuff you can find by reading the file
 */
export declare type FileContentInfo = {
    /**
     * a comment about this file or folder. Can be parsed from:
     * - an associated markdown file and/or the top of the file (If they're both there, they're concatenated)
     * - for folders, looks for README.md
     */
    mainComment?: TsComment;
    /**
     * filename including extension, if the path is not a folder
     */
    fullFileName?: string;
    /**
     * categorized sizes for the file(s)
     */
    sizes: FolderSummary;
};
/**
 * Information which can be found by fs.stat
 */
export declare type PathStats = {
    /**
     * unix time this file was last updated (or for folders: unix time of last modifiation of any file in this folder, recursively)
     *
     * TODO: renames also count as updates, I guess. Needs to be clear!
     */
    updatedAt: number;
    /**
     * unix time this file was created (or for folders: unix time of creation of the first file in this folder)
     *
     * TODO: figure out if we can get the creation date of the folder itself?
     */
    createdAt: number;
};
/**
 * object to represent a folder or file path in different ways
 *
 * NB: doesn't include the absolute path so the indexes can be exported easily witout creating incorrect paths
 */
export declare type PathParse = {
    /**
     * relative file or folder path from the project root
     */
    relativePathFromProjectRoot: string;
};
export declare type OperationPathParse = PathParse & {
    /**
     * relative file path from the project-root to the operation (DOES include operation folder)
     *
     * e.g. /tools/cognition/typescript/index-typescript
     */
    relativeOperationBasePathFromProjectRoot: string;
    /**
     * relative file path from the operation src
     *
     * e.g. general.ts
     */
    operationRelativeTypescriptFilePath: string;
    /**
     * file id (same as operationRelativeTypescriptFilePath but without extension)
     *
     * e.g. "general"
     *
     * TODO: figure out if this can be omitted
     */
    srcFileId: string;
    /**
     * operation package.json name
     */
    operationName?: string;
    /**
     * operation folder name (by convention, must be identical to operationName, but it could have some mistakes)
     */
    operationFolderName: string;
};
//# sourceMappingURL=PathMetaData.d.ts.map