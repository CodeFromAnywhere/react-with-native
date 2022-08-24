import { BundleConfig } from "bundle-types";
export declare type BundleSummary = {
    /**
     * Haven't found a good usecase for this yet
     */
    packageNames: string[];
    moduleNames: string[];
    appNames: string[];
};
/**
 * Summarizes a bundle config so it can be used easily in things like explore project
 */
export declare const getBundleSummary: (bundleConfig: BundleConfig) => BundleSummary;
//# sourceMappingURL=getBundleSummary.d.ts.map