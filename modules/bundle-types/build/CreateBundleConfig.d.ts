import { OperationPrivacy, ProjectRelativeFilePath, ProjectRelativeFolderPath } from "./types";
import { InformationStrategy } from "./InformationStrategy";
import { FrontBackBundle } from "./FrontBackBundle";
import { Slug } from "model-types";
export declare type CreateBundleConfig = {
    /**
     * If true, the structure of operation locations is kept the same but still inside packages/apps/modules.
     */
    keepStructure?: boolean;
    /**
     * Default information strategy
     */
    informationStrategy?: InformationStrategy;
    /**
     * Information strategy per model
     *
     * For example, this would ensure your diaries are not copied over to the bundle:
     *
     * ```json
     * { "Diary": "ignore" }
     * ```
     *
     * If you want to be certain something isn't included, instead of putting it into the model specific information strategy, you can also just put it in an operation that isn't required in the bundle.
     *
     * This parameter is especially useful if you want to change a information stategy for one model in specific.
     */
    modelInformationStrategy?: {
        [modelName: string]: InformationStrategy;
    };
    /**
     * After applying the `informationStrategy`, and `modelInformationStrategy`, these datasets will be added or overwriting the data
     */
    additional_datasetSlugs?: Slug[];
    /**
     * After applying the `informationStrategy`, and `modelInformationStrategy`, these datasets will be found in the then available data in the bundle, and will be filtered out.
     */
    filter_datasetSlugs?: Slug[];
    /**
     * If true, this bundleconfig will be skipped when using `generateAllBundles`
     */
    isDraft?: boolean;
    /**
     * if true, todos are also copied into their original location, which is in `packages` if it's not in an operation, or in the operation in any of the folders if it's an operation.
     *
     * The markdown-reader will then add them to a todo menu.
     *
     * NB: Only works in conjunction with `keepStructure`
     */
    keepTodos?: boolean;
    bundles: FrontBackBundle[];
    /**
     * Generated, private by default. If they're already here, uses private/public setting as given.
     *
     * When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps
     */
    dependencies?: OperationPrivacy[];
    /**
     * optional. Could also find the main file from here and use that as README.md
     *
     * Must be a relative path from project root. Can be multiple!
     */
    docsRelativeFolderPath?: ProjectRelativeFolderPath | ProjectRelativeFolderPath[];
    /**
     * Optional. path to a readme file for the monorepo root.
     *
     * If not given, and if you did provide a path for docs, the main docs intro file will be taken
     *
     * Must be a relative path from project  root
     */
    readmeRelativeFilePath?: ProjectRelativeFilePath;
    /**
     * if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated
     *
     * can be handy if you're working with someone else...
     */
    foldersFromRepo?: string[];
};
/**
 * CreateBundleConfig after applying the defaults
 */
export declare type FinalCreateBundleConfig = CreateBundleConfig & Required<Pick<CreateBundleConfig, "informationStrategy" | "foldersFromRepo">>;
//# sourceMappingURL=CreateBundleConfig.d.ts.map