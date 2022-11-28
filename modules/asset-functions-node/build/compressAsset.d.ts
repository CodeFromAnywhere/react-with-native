import { CompressionConfig } from "asset-type";
/**

Audio, image, video can be compressed. This should be done to logical defaults, can be turned off, or can be specifically set to other dimensions using a doc-comment on the model.

- audio: bitrate
- video: fps and resolution
- image: resolution

Returns the new absolute path of the compressed asset (which can be the same as the initial path)
*/
export declare const compressAsset: (absolutePath: string, compressionConfig: CompressionConfig) => Promise<string>;
//# sourceMappingURL=compressAsset.d.ts.map