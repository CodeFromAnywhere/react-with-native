import { SlugModelType } from "model-types";
import { FolderSummary } from "./FolderSummary";
import { OperationClassification } from "./OperationClassification";
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
export declare type GeneralOperationIndex = {
    updatedAt: number;
    lastPullTimeAt?: number;
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