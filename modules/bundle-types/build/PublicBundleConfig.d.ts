import { BundleMarkdownReaderConfig } from "./BundleMarkdownReaderConfig";
export declare type PublicBundleConfig = {
    /**
     * Human readable name of the monorepo (A kebab-case version of this will be used as root foldername)
     */
    name: string;
    /**
     * Used to determine which call to actions are relevant (must be hostname without schema (name + tld))
     */
    deploymentHostname?: string;
    /**
     * a description about this bundle
     */
    description?: string;
    emoji?: string;
    primaryColor?: string;
    /**NB: later we may also want to automate the server and frontend deployment setup. for that we need credentials and automation*/
    gitRepoUrl?: string;
    /**
     * if true, your gitrepo is marked as pubilc and thus users will be linked to it sometimes
     */
    isGitRepoPublic?: boolean;
    /**
     * configurate your markdown reader
     */
    bundleMarkdownReaderConfig?: BundleMarkdownReaderConfig;
};
//# sourceMappingURL=PublicBundleConfig.d.ts.map