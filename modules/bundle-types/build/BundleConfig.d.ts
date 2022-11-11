import { SlugModelType, Json } from "model-types";
import { CustomisableBundleConfig } from "./CustomisableBundleConfig";
import { CreateBundleConfig } from "./CreateBundleConfig";
import { PublicBundleConfig } from "./PublicBundleConfig";
export interface EnvironmentVariableObject {
    [key: string]: Json;
}
/**
 * ---
 * dbStorageMethod: jsonSingle
 * ---
 *
 * Configuration options for bundles. Used with `generateBundle`
 *
 * Everything in this model will be copied over to the created bundle, except for `createBundleConfig` and `customisableBundleConfig`.
 */
export interface BundleConfig extends SlugModelType, PublicBundleConfig {
    /**
     * CustomisableBundleConfig is customisable for individual bundle creations
     *
     * NB: This is NOT copied into the bundle itself
     */
    customisableBundleConfig: CustomisableBundleConfig;
    /**
     * Config needed for creating the bundle, not for the bundle itself
     *
     * NB: NOT Copied to the bundle itself
     */
    createBundleConfig: CreateBundleConfig;
    paymentPlanId?: string;
}
//# sourceMappingURL=BundleConfig.d.ts.map