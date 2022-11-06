import { FunctionParameter } from "code-types";
import { ReferencedModelDataItem } from "./getReferencedModelDataItem";
/**
 * This component renders an input to select an item to reference from another model (or multiple)
 */
export declare const ReferenceInput: (props: {
    parameter: FunctionParameter;
    parameterValue: any;
    onChangeParameter: (newValue: any) => void;
    referencedModelDataItem: ReferencedModelDataItem;
    defaultInputFields: {
        uniqueFieldId: string;
        fieldName: string;
    };
    isDebug?: boolean | undefined;
}) => JSX.Element;
//# sourceMappingURL=ReferenceInput.d.ts.map