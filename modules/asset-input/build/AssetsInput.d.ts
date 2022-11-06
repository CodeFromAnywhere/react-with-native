/// <reference types="react" />
import { NewAssetType, BackendAsset } from "asset-type";
export declare const singleTypes: NewAssetType[];
/**

Usage possible in: form, writer-ui, anywhere else (custom)

Supports

- audio recording
- file upload (multiple possible)
- camera (taking a picture)
- video camera (taking a video)

 */
export declare const AssetsInput: (props: {
    /**
     * if true, you can select multiple assets
     */
    allowMultiple?: boolean | undefined;
    value?: BackendAsset[] | undefined;
    /**
     * specify the input types (defaults to all)
     */
    inputTypes?: NewAssetType[] | undefined;
    /**
     * onChange function to set new assets with
     */
    onChange: (value: BackendAsset[]) => void;
    projectRelativeReferencingFilePath: string;
    defaultAssetName: string;
}) => JSX.Element;
//# sourceMappingURL=AssetsInput.d.ts.map