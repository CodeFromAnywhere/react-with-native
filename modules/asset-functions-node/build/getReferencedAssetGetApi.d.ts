import { Context } from "server/typings/common";
/**

Function to get a referenced asset that has been referenced from any db-model or any ts, tsx or md file, anywhere in the project.

Assets should only be exposed if you have access to the model they are referenced in or to the md file they are referenced in.

Exposes all assets like `/asset?path=/text/interests/programming/storage-of-data/best-storage-methods.md&asset=./audio-is-amazing.m4a`


# Security

Assets are only exposed if they are referenced in a markdown file that is accessible to the user. So when looking up the asset, make sure there's a link to it via `[]()` or `![]()` in the markdown that is connected to it in the URL. If not, don't expose it!

This can be used for any ui that has the functions backend available.

The advantage is that we don't need to build it, this works in `dev` mode. there is no asset duplication.

since the name is `getReferencedAssetGetApi` this should be exposed on `getReferencedAsset`

IMPLEMENTATION NOW:

- check referencing file to find the reference.
    - for markdown, typescript: `](./xyz)`
    - for json: `"relativePath": "./xyz"`

- If this occurs, calculate abosolute asset path from referencing file folder + relative path

- If this asset exists, expose it.

*/
export declare const getReferencedAssetGetApi: (ctx: Context) => Promise<{
    isSuccessful: boolean;
    isUnauthorized?: boolean | undefined;
    message: string;
}>;
//# sourceMappingURL=getReferencedAssetGetApi.d.ts.map