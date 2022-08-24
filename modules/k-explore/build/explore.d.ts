import { TextJson } from "code-types";
export declare type BaseConfig = undefined | {
    basePath?: string | string[];
};
export declare const typescriptExtensionsConst: readonly ["ts", "tsx"];
export declare const markdownExtensionsConst: readonly ["md", "mdx"];
export declare const jsonExtensionsConst: readonly ["json"];
export declare const typescriptExtensions: string[];
export declare const markdownExtensions: string[];
export declare const jsonExtensions: string[];
export declare type TypescriptExtension = typeof typescriptExtensions[number];
export declare type MarkdownExtension = typeof markdownExtensions[number];
export declare type JsonExtension = typeof jsonExtensions[number];
export declare type SearchableExtension = TypescriptExtension | MarkdownExtension | JsonExtension;
/**
 * these filetypes should never be opened with explore. They should be processed and either indexed or converted. This creates a md or json with the proper metadata, which, in turn, can be explored.
 */
export declare type DropboxExtension = "doc" | "docx" | "csv" | "xls" | "xlsx" | "epub" | "pdf";
export declare type SearchLevel = "folder" | "fileName" | "filePath" | "outline" | "full";
export declare type FileType = "code" | "data" | "text";
export declare const extensions: {
    [key in FileType]: readonly SearchableExtension[];
};
export declare const allowedSearchContentExtensions: string[];
export declare const fileTypes: FileType[];
/**
 * returns the file type or null if it's unknown
 */
export declare const determineFileType: (filePath: string) => FileType | null;
export declare type SearchConfig = {
    /**
     * if true, the folder paths that contain matches will also be returned
     *
     * e.g. if there's a match in `/x/y/z/a.ts`, the result will include `/x`, `/x/y`, and `/x/y/z` as well, on top of just `/x/y/z/a.ts`
     */
    includeFoldersWithResults?: boolean;
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
     * if given, files are filtered on their extension
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
     * DEPRECATED: please use `includeMetaData` instead
     *
     * if true, filestats will be included in result
     */
    includeStats?: boolean;
    /**
     * if true, metadata will be included in the result
     */
    includeMetaData?: boolean;
};
/**
 * this is the safe and friendly version of findFilesRecursively: it
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
export declare const generatedFolders: string[];
/**
 * Finds all package.json's everywhere. also in /tools, but this is to be expected.
 *
 * TODO: `stopRecursionAfterMatch` never worked, so I just removed it... the behavior now is that it also explores folders that are in a folder with a `package.json`, unless that foldername is ignored. For now it's fine, but this could easily create an ineficiency if there's a lot of data in an operation or something...
 *
 * TODO: We should be careful with ignoring all these folders... what if we use those folders outside of operations? This could have unexpected behavior. We either need to lint for these foldernames not to be used, or we need to make sure to only ignore it if we encounter a package.json
 */
export declare const findAllPackages: (config?: {
    basePath: string | string[] | undefined;
}) => Promise<TextJson[]>;
export declare const findAllDotGitFolders: (config: BaseConfig) => Promise<TextJson[]>;
/**
 find all active git folders (folders having `.git`)
 */
export declare const exploreGitRepoFolders: (config: BaseConfig) => Promise<string[]>;
/**
 find all active operations (folders having `package.json` but also `tsconfig.json`)
 */
export declare const exploreOperationFolders: (config: BaseConfig) => Promise<string[]>;
export declare const explorePreset: (preset: "packages" | "markdown" | "todo" | "docs" | "src" | "git", config?: BaseConfig) => Promise<TextJson[]>;
/**
 * DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now
 */
export declare const exploreMultiple: (searchConfigs: SearchConfig[]) => Promise<TextJson[]>;
//# sourceMappingURL=explore.d.ts.map