/// <reference types="react" />
import { Asset } from "asset-type";
export declare const defaultClassName = "w-20 aspect-auto";
export declare const AssetView: (props: {
    asset: Asset;
    className?: string | undefined;
    /**
     * Must be provided for relative assets to know the location
     */
    projectRelativeReferencingFilePath?: string | undefined;
    hideDownloadLink?: boolean | undefined;
}) => JSX.Element;
//# sourceMappingURL=AssetView.d.ts.map