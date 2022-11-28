import { BackendAsset } from "asset-type";
import { AugmentedAnyModelType } from "model-types";
/**
 * Get remote url for a `BackendAsset` in an `AugmentedAnyModelType` database model item.
 *
 * If you provide an array it'll take the first asset.
 */
export declare const itemGetBackendAssetUrl: (config: {
    item: AugmentedAnyModelType;
    backendAsset?: BackendAsset | BackendAsset[] | undefined;
    isDownload?: boolean | undefined;
}) => string | undefined;
//# sourceMappingURL=itemGetBackendAssetUrl.d.ts.map