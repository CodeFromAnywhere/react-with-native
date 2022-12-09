import { Asset } from "asset-type";
export declare const getSrc: (asset: Asset, projectRelativeReferencingFilePath: string, isNextStaticProductionBuild?: boolean) => {
    src: string | undefined;
    downloadUrl: string | undefined;
};
export declare const useAsset: (asset: Asset | undefined, projectRelativeReferencingFilePath?: string | null, isNextStaticProductionBuild?: boolean) => {
    rawText: string | null;
    type: import("asset-type").AssetType | undefined;
    downloadUrl: string | undefined;
    src: string | undefined;
    extension: string | undefined;
} | undefined;
//# sourceMappingURL=useAsset.d.ts.map