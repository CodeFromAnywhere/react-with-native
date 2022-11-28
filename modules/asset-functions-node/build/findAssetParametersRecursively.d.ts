import { AssetInputType } from "name-conventions";
export declare type AssetParameter = {
    assetInputType: AssetInputType;
    parameterName: string;
    /**
     * where the object parameter is located
     */
    stack?: string[];
};
/**
 * Recursively finds all asset parameters in an object (for example in a database model item)
 */
export declare const findAssetParametersRecursively: (object: {
    [key: string]: any;
}, stack?: string[]) => AssetParameter[];
//# sourceMappingURL=findAssetParametersRecursively.d.ts.map