import { FunctionParameter } from "code-types";
import { ReferencableModelData } from "./types";
/**
 * Component to render a parameter that holds an array
 *
 * This is simply a wrapper around another `SimplifiedSchemaForm` where the `onChange` and `values` are slightly different
 *
 * This component renders a `SimplifiedSchemaForm` for every item in the array, and adds buttons to insert/remove new items.
 */
export declare const ArrayForm: (props: {
    itemNameOrId?: string | undefined;
    parameterNameStack?: string[] | undefined;
    projectRelativeStorageFilePath?: string | undefined;
    parameter: FunctionParameter;
    /**
     * In this case this must be an array or undefined
     */
    parameterValue: any[] | undefined;
    onChangeParameter: (newValue: any) => void;
    isDebug?: boolean | undefined;
    referencableModelData?: ReferencableModelData | undefined;
    id: string;
}) => JSX.Element | null;
//# sourceMappingURL=ArrayForm.d.ts.map