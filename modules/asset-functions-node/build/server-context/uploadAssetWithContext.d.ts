import { UploadAssetResult } from "asset-type";
import { FunctionContext } from "function-context-type";
/**
 * This is the format that I receive for a file with server.js, even though they say it's a formidable.file, which it's not...
 */
export declare type ReceivedFile = {
    size: number;
    path: string;
    name: string;
    type: string;
    hash: any;
    lastModifiedDate: Date;
};
/**
 * Uploads an asset to the server, and puts it in a temporary location in the assets folder of `function-server`. It returns the filename of the file in the temporary location.
 *
 * It can only be accessed through that random name. This random name has 32 characters so cannot be easily guessed. This should be secure enough. The file should be moved to the final destination in the actual function that needs the file.
 *
 * NB: this function only works by providing a file as blobs under the "file" property name!
 */
export declare const uploadAssetWithContext: (functionContext: FunctionContext) => Promise<UploadAssetResult>;
//# sourceMappingURL=uploadAssetWithContext.d.ts.map