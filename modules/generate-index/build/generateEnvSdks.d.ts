import { BundleConfig } from "bundle-types";
/**
 * generates sdk-env-public and sdk-env-private
 *
 * returns the paths of the geneated operations
 */
export declare const generateEnvSdks: (bundleConfig: BundleConfig, config?: {
    manualProjectRoot?: string | undefined;
    skipYarnInstall?: boolean | undefined;
} | undefined) => Promise<(string | undefined)[]>;
/**

# Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

sensible-config:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig
 */
export declare const newEnvSdk: (bundleConfig: BundleConfig, type: "public" | "private", config?: {
    manualProjectRoot?: string | undefined;
    skipYarnInstall?: boolean | undefined;
} | undefined) => Promise<string | undefined>;
//# sourceMappingURL=generateEnvSdks.d.ts.map