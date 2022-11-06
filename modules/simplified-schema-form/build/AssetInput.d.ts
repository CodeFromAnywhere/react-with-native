import { AssetInputType } from "name-conventions";
import { BackendAsset } from "asset-type";
import { RenderableFunctionParameter } from "./SimplifiedSchemaForm";
export declare const AssetInput: (props: {
    parameter: RenderableFunctionParameter;
    isDebug?: boolean | undefined;
    parameterValue: BackendAsset[] | undefined;
    assetInputType: AssetInputType;
    onChange: (newValue: BackendAsset[]) => void;
}) => JSX.Element;
//# sourceMappingURL=AssetInput.d.ts.map