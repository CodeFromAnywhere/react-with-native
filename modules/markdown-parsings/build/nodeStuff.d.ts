import { BundleConfig } from "bundle-types";
/**
 * finds all md files in a folder and creates a single markdown file string
 *
 * handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way
 *
 * NB: it recursively structures the files and folders with headings
 */
export declare const bundleFolderWithMarkdown: (folderPath: string) => Promise<string>;
/**
 * converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.
 *
 * markdown for reading (so there are no links)
 */
export declare const operationToMd: (config: {
    operationName: string;
    manualProjectRoot?: string | undefined;
    /**
     * if true, just returns the outline of the operation (function + interface names, size, deps)
     */
    isSummary?: boolean | undefined;
    /**
     * if true, it will merge all docs into the readme, not linking to them (by default, docs will be linked to)
     */
    mergeDocsInline?: boolean | undefined;
    /**
     * string (default): returns md string
     *
     * save: saves the result in the operation `README.md` and `CONTRIBUTING.md` and other default md files
     */
    returnType?: "string" | "save" | undefined;
}) => Promise<string | undefined>;
/**

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles

 */
export declare const bundleToBookMd: (config: {
    bundleConfig: BundleConfig;
    title?: string | undefined;
    coverImagePath?: string | undefined;
    isModulesIncluded?: boolean | undefined;
    manualProjectRoot?: string | undefined;
}) => Promise<void>;
/**
 *
 * creates a summary for a whole bundle
 *
 * NB: Related to `bundleToBookMd`
 */
export declare const bundleToMd: ({ bundleConfigId, includeModules, }: {
    bundleConfigId: string;
    /** if true, also includes the private modules */
    includeModules?: boolean | undefined;
}) => string;
/**
 * summarizes the whole OS project into a markdown string
 */
export declare const projectToMd: ({ includeTodo, }: {
    includeTodo?: boolean | undefined;
    includeOperationDetails?: boolean | undefined;
}) => string;
//# sourceMappingURL=nodeStuff.d.ts.map