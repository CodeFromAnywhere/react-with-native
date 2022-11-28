import { BackendAsset } from "asset-type";
/**
Processes an asset by moving the file in the right location, if needed...

- Alt is kept, nothing to do with it
- Giving a different name will change the new path
- relativePath is checked if it exists (if temporaryDestination is undefined). It is used to obtain the extension.
- temporaryDestination must be checked. if it exists, must replace the file on relativePath calculated from name

After processing, this function should return a `BackendAsset` without the non-storable parameters

BEWARE: `absoluteReferencingFilePath`, and for db-models also `modelName`, need to be given here! Otherwise this won't work!

 */
export declare const processAsset: (backendAsset?: BackendAsset | BackendAsset[]) => Promise<undefined | BackendAsset>;
//# sourceMappingURL=processAsset.d.ts.map