import { FolderSummary } from "./FolderSummary";
/**
 * ---
 * defaultDbStorageMethod: jsonSingle
 * ---
 *
 * contains all calculated info about an operation that needs to be retreived often:
 * some package-only things, but also a collection of all indexes of all files
 */
export declare type OperationIndex = {
    /**
     * here for compatibility, should implement...
     */
    id?: string;
    createdAt: number;
    buildSucceeded: boolean;
    dependenciesBuildsFailed: boolean;
    indexImportExportError: string;
    lintProblems: string[];
    indexInteracesErrors: string[];
    indexErrors: string[];
    size: FolderSummary;
} & GeneralOperationIndex;
/**
 * # Classification
 *
 * TODO: think about what the differences are and how we need to change processes to make it all work good
 *
 * ### Possible values
 *
 * js: only js (no node) (well, ts of course)
 *
 * node: includes other node packages, operations, core-imports, or globals.
 *
 * server: exposes something on some port when it is ran and uses node code
 *
 * web: uses react and exposes something on some port when it is ran
 *
 * app: uses react-native and exposes something on some port when it is ran
 *
 * ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)
 *
 * ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)
 */
export declare type OperationClassification = "js" | "node" | "server" | "web" | "app" | "ui-es6" | "ui-es5";
export declare type GeneralOperationIndex = {
    updatedAt: number;
    /**
     * name of the package in package.json
     */
    packageName: string;
    /**
     * name of the operation folder
     */
    folderName: string;
    /**
     * relative path to the operation (does not include operation folder itself)
     *
     * relative from project root
     */
    relativeOperationLocationPath: string;
    classification: OperationClassification;
    /**
     * package dependency names (non-operation)
     */
    packageDependencies: string[];
    /**
     * operation dependency names
     */
    operationDependencies: string[];
    /**
     * core dependencies (e.g. `path` and `fs`)
     */
    coreDependencies: string[];
};
/**
 * filepaths categorized based on the filetype. With king os there are only these filetypes:
 *
 * - code: ts, tsx
 * - data: json
 * - text: md, mdx
 */
export declare type CategorizedFilePaths = {
    code: string[];
    data: string[];
    text: string[];
};
//# sourceMappingURL=OperationIndex.d.ts.map