import { Context } from "server/typings/common";
/**
 Useful for getting assets directly, for example for the `SelectMedia` component for `project`-media

 Requires more access rights
 */
export declare const getAssetDirectlyGetApi: (ctx: Context) => {
    isSuccessful: boolean;
    isUnauthorized?: boolean;
    message: string;
} | void;
//# sourceMappingURL=getAssetDirectlyGetApi.d.ts.map