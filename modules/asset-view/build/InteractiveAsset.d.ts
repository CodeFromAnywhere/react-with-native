/// <reference types="react" />
import { Asset } from "asset-type";
/**

shows an `Asset` with interactivity

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration

 */
export declare const InteractiveAsset: (props: {
    asset: Asset;
    /**
     * See `AssetInput` for more info
     */
    attachTokenToFilename?: boolean | undefined;
    projectRelativeReferencingFilePath: string;
    remove: () => void;
    onChange: (newAsset: Asset) => void;
}) => JSX.Element;
//# sourceMappingURL=InteractiveAsset.d.ts.map