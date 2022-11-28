/**
 * returns the  type of file the asset is referenced from, and the `baseFolderPath` where the `asset` should be stored
 */
export declare const getStorageLocationInfo: (absoluteReferencingFilePath: string, modelName?: string) => {
    type: "typescript" | "database" | "markdown";
    absoluteAssetBaseFolderPath: string;
};
//# sourceMappingURL=getStorageLocationInfo.d.ts.map