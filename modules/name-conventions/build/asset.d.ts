import { SimplifiedSchemaType } from "code-types";
export declare type AssetInputType = {
    type: "image" | "video" | "audio" | "file" | "asset";
    isMultiple: boolean;
};
export declare const getAssetInputType: (parameterName: string, valueType: SimplifiedSchemaType) => AssetInputType | undefined;
//# sourceMappingURL=asset.d.ts.map