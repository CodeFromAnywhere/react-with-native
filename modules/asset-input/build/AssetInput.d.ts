/// <reference types="react" />
import { NewAssetType, BackendAsset } from "asset-type";
/**

Usage possible in: form, writer-ui, anywhere else (custom)

Supports

- audio recording
- file upload (multiple possible)
- camera (taking a picture)
- video camera (taking a video)

 */
export declare const AssetInput: (props: {
    /**
     * If true, an unique token will be attached as a suffix to the filename of the asset after uploading. This will not be shown to the user in the user-interface, because it will be removed from the input state.
     *
     * The token is 32 characters and makes it impossible for a villain to get unauthorised access to the asset without knowing the address, eventhough the asset can be public.
     *
     * NB: this is not 100% secure, because the asset is still exposed via a GET address, this is only secure if the user has a private device. The token will still be stored in the browser history!
     */
    attachTokenToFilename?: boolean | undefined;
    /**
     * default asset name if it doesn't come from a file...
     *
     * This value may change (e.g. based on form state... The AssetInput ensures that unchanged names update accordingly as well!)
     */
    defaultAssetName: string;
    /**
     * if true, you can select multiple assets
     */
    allowMultiple?: boolean | undefined;
    /**
     * specify the input types (defaults to all)
     */
    inputTypes?: NewAssetType[] | undefined;
    value?: BackendAsset[] | undefined;
    /**
     * onChange function to set new assets with
     *
     * NB: is only called after uploading is complete
     */
    onChange: (value: BackendAsset[]) => void;
    projectRelativeReferencingFilePath: string;
    /**
     * Must be provided in case the asset is stored in a database
     */
    modelName?: string | undefined;
}) => JSX.Element;
//# sourceMappingURL=AssetInput.d.ts.map