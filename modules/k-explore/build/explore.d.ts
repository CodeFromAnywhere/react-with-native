import { TextJson } from "code-types";
import { SearchableExtension, SearchLevel } from "filename-conventions";
export declare type BaseConfig = undefined | {
    basePath?: string | string[];
};
/**
 * returns the file type or null if it's unknown
 */
export declare const determineFileType: (filePath: string) => import("filename-conventions").FileType | null;
export declare type SearchConfig = {
    /**
     * if true, the folder paths that contain matches will also be returned
     *
     * e.g. if there's a match in `/x/y/z/a.ts`, the result will include `/x`, `/x/y`, and `/x/y/z` as well, on top of just `/x/y/z/a.ts`
     */
    includeFoldersWithResults?: boolean;
    /**
     * if true, readme files will return the first in every folder
     */
    readmeOnTop?: boolean;
    /**
     * defaults to fileName
     */
    searchLevel?: SearchLevel;
    /**
     * basePath (defaults to king os base directory)
     * if some of the basepaths don't exist or are not accessible, it will not search them (it filters them out)
     */
    basePath?: string | string[];
    /**
     * if given, files are filtered on their extension. must be an extension without dot (.) so md, ts, or html.
     */
    extension?: SearchableExtension | SearchableExtension[];
    /**
     * search query
     */
    search?: string | string[];
    /**
     * if given, the files will be filtered because they require containing one of these subextensions
     */
    subExtension?: string | string[];
    /**
     * if we are ignoring fileNames or folders and this fileName fits that, return
     */
    ignore?: string | string[];
    /**
     * if true, doesn't recurse on children if parent is a match
     * (only applies to SearchLevel "folder")
     */
    doNotExploreMatch?: boolean;
    /**
     * if true, doesn't explore child folders (so only the stuff that's in the basePath)
     */
    doNotExploreChildFolders?: boolean;
    /**
     * takes a callback that takes the array of dirents for the folder that is being explored and should return a boolean that, if true, makes the exploration of this folder be cancelled
     */
    cancelRecursionOn?: (pathArray: string[]) => boolean;
    /**
     * whether it should log what it's doing
     */
    debug?: boolean;
    /**
     * if true, the search has to match the file/contents exactly
     */
    exact?: boolean;
    /**
     * if true, filestats will be included in result
     */
    includeStats?: boolean;
    /**
     * TODO: Implement this
     *
     * if true, metadata will be included in the result
     */
    includeMetaData?: boolean;
};
/**
 * This is the safe and friendly version of `findFilesRecursively`
 */
export declare const explore: ({ basePath, searchLevel, debug, ...other }: SearchConfig) => Promise<TextJson[]>;
/**
Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...
*/
export declare const findFilesRecursively: (config: Omit<SearchConfig, "basePath"> & {
    basePath: string;
}) => Promise<TextJson[]>;
export declare const findAllDotGitFolders: (config: BaseConfig) => Promise<TextJson[]>;
/**
 find all active git folders (folders having `.git`)
 */
export declare const exploreGitRepoFolders: (config: BaseConfig) => Promise<string[]>;
export declare const explorePreset: (preset: "packages" | "markdown" | "todo" | "docs" | "src" | "git", config?: BaseConfig) => Promise<TextJson[]>;
/**
 * DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now
 */
export declare const exploreMultiple: (searchConfigs: SearchConfig[]) => Promise<TextJson[]>;
//# sourceMappingURL=explore.d.ts.map