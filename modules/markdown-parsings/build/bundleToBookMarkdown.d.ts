import { BundleConfig } from "bundle-types";
/**

 Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)
 
 Output should be all md files concatenated in the right order with the right titles
 
  */
export declare const bundleToBookMarkdown: (config: {
    bundleConfig: BundleConfig;
    title?: string | undefined;
    coverImagePath?: string | undefined;
    isModulesIncluded?: boolean | undefined;
    manualProjectRoot?: string | undefined;
}) => Promise<void>;
//# sourceMappingURL=bundleToBookMarkdown.d.ts.map