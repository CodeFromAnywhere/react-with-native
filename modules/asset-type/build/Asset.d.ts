import { BackendAsset } from "./BackendAsset";
/**
Asset you can upload

This is not a database model, it can exist in properties of any db model or type interface.

Only `alt` and `relativePath` are stored, the other parameters are optionally required for uploading and user interfaces, and are not always there

NB: don't use this in your model, use `StoredAsset` instead.
 */
export interface Asset extends BackendAsset {
    /**
     * path to the local blob if uploading
     */
    blobPath?: string;
    /**
     * can be calculated from the path, or come directly from the blob
     */
    type?: AssetType;
    /**
     * if the file was selected from the system, this should be the original filename, including extension
     */
    originalFilename?: string;
    /**
     * can be calculated from the file stats.
     */
    sizeBytes?: number;
    /**
     * Blob that is available after selecting from the local file system
     */
    blob?: Blob;
    /**
     * number between 0 and 1 indicating uploadProgress
     */
    uploadProgress?: number;
}
/**
 * Possible Asset Types
 *
 * Later, maybe also support:
 * "markdown","json","typescript"
 */
export declare type AssetType = "video" | "audio" | "image" | "text" | "other";
//# sourceMappingURL=Asset.d.ts.map