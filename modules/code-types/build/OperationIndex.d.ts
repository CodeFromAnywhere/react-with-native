import { SlugModelType } from "model-types";
import { FolderSummary } from "./FolderSummary";
/**
 * ---
 * dbStorageMethod: jsonSingle
 * operationRelativePath: db/operation-index.json
 * ---
 *
 * contains all calculated info about an operation that needs to be retreived often:
 * some package-only things, but also a collection of all indexes of all files
 *
 * should be able to be found in operaiton folder in /db/operation-index.json
 */
export interface OperationIndex extends GeneralOperationIndex, SlugModelType {
    /**
     * here for compatibility, should implement...
     */
    id: string;
    createdAt: number;
    buildSucceeded: boolean;
    dependenciesBuildsFailed: boolean;
    indexImportExportError: string;
    lintProblems: string[];
    indexInteracesErrors: string[];
    indexErrors: string[];
    size: FolderSummary;
}
export declare const operationClassificationConst: readonly ["js", "ts", "node", "server", "web", "app", "ui-es6", "ui-es5", "ui-esm"];
/**
 * # Classification
 *
 * TODO: think about what the differences are and how we need to change processes to make it all work good
 *
 * ## Possible values
 *
 * js: only js (no node) (well, ts of course, but it gets built into js)
 *
 * ts: non-built ts code
 *
 * node: includes other node packages, operations, core-imports, or globals.
 *
 * server: exposes something on some port when it is ran and uses node code
 *
 * web: has next.config.js and thus exposes something on some port when it is ran. next.js + react-based...
 *
 * app: uses react-native and exposes something on some port when it is ran
 *
 * DEPRECATED: ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled. highly discouraged, please use ui-es5, or, if needed, ui-esm)
 *
 * ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)
 *
 * ui-esm: ui which builds to ESM module resolved Javascript
 */
export declare type OperationClassification = typeof operationClassificationConst[number];
export declare type GeneralOperationIndex = {
    updatedAt: number;
    name: string;
    slug: string;
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