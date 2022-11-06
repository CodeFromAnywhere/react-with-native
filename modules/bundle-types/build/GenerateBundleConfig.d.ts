import { EnvironmentVariableObject } from "./BundleConfig";
import { InformationStrategy } from "./InformationStrategy";
/**
 * configuration that can be applied when generating a new bundle
 *
 * It can be put in the BundleConfig, but it can also be set manually for an individual Bundle Generation.
 *
 */
export declare type GenerateBundleConfig = {
    /**
     * if true, will not clone/pull/push and deploy. No internet is needed, will also not use any `.git` folder.
     */
    isOffline?: boolean;
    /** skips the step where it gets the new stuff from github */
    skipPull?: boolean;
    /** skips the step where it pushes the new bundle to remote */
    skipPush?: boolean;
    /** skips the step where it saves to the db */
    skipUpsert?: boolean;
    debug?: boolean;
    /** descriptioin for git commit, if pushing. Default is "monorepo update" */
    description?: string;
    informationStrategy?: InformationStrategy;
    /**
     * optionally, specify a custom branch name to pull from / push to / checkout (default is "main")
     */
    branchName?: string;
    gitRepoUrl?: string;
    publicEnvironmentVariables?: EnvironmentVariableObject;
    privateEnvironmentVariables?: EnvironmentVariableObject;
    /**
     * Configuration for your commit (needed for vercel deployment)
     */
    gitUserEmail?: string;
    gitUserName?: string;
};
//# sourceMappingURL=GenerateBundleConfig.d.ts.map