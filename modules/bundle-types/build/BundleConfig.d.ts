import { SlugModelType } from "common-types";
import { FrontBackBundle, InformationStrategy, OperationPrivacy, ProjectRelativeFilePath, ProjectRelativeFolderPath } from "./types";
/**
 */
export interface BundleConfig extends SlugModelType {
    /**
     * Human readable name of the monorepo (A kebab-case version of this will be used as root foldername)
     */
    name: string;
    bundles: FrontBackBundle[];
    /**
     * Generated, private by default. If they're already here, uses private/public setting as given.
     *
     * When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps
     */
    dependencies: OperationPrivacy[];
    /**
     * optional. Could also find the main file from here and use that as README.md
     *
     * Must be a relative path from project root
     */
    docsRelativeFolderPath?: ProjectRelativeFolderPath;
    /**
     * optional. path to a readme file for the monorepo root.
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
    informationStrategy?: InformationStrategy;
    gitRepoUrl?: string;
    /**
     * specify the branch to use of your git repo (defaults to "main")
     */
    branchName?: string;
}
//# sourceMappingURL=BundleConfig.d.ts.map