/**
 * Possible types for new asset upload in the frontend
 */
export declare type NewAssetType = "google-images" | "giphy" | "unsplashed" | "youtube" | "project-media" | "p2p-media" | "files" | "camera" | "recordAudio" | "recordVideo" | "recordScreen";
export declare type UploadAssetResult = {
    isSuccessful: boolean;
    message?: string;
    temporaryDestination?: string;
};
/**
 
CompressionOption should be able to be applied on the model parameter through frontmatter

- default (default option): Default OS wide compression. User can make customize it within a logical limit
- none: no compression applied by default (user can optionally compress it)
- high: compressed bigtime by default (user cannot make it be compressed less)
- low: compressed just a little (user cannot make it be compressed less, but can optionally compress it more)

 */
export declare type CompressionOption = "custom" | "none" | "default" | "tiny" | "big";
//# sourceMappingURL=frontend-types.d.ts.map