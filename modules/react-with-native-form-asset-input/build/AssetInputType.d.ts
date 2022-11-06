import { PluginInputType } from "react-with-native-form";
import { BackendAsset, NewAssetType } from "asset-type";
import { InputSize, InputTheme } from "./AssetTheme";
export declare class AssetInputType implements PluginInputType {
    /**
     * value type
     */
    value: BackendAsset[];
    /**
     * input generic configuration
     */
    config?: {
        extraClassName?: string;
        replaceClassName?: string;
        errorClassName?: string;
    };
    /**
     * field specific configuration
     */
    extra: {
        /**
         * See `AssetInput` for more info
         */
        attachTokenToFilename?: boolean;
        /**
         * Where will the asset eventually be saved? Needed for rendering already uploaded assets
         */
        projectRelativeReferencingFilePath: string;
        defaultAssetName: string;
        inputTypes?: NewAssetType[];
        allowMultiple?: boolean;
        theme: keyof typeof InputTheme;
        size: keyof typeof InputSize;
    };
}
//# sourceMappingURL=AssetInputType.d.ts.map