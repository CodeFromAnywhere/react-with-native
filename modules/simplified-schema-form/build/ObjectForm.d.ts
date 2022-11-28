import { ReferencableModelData, RenderableFunctionParameter } from "./types";
/**
 * Component to render a parameter that holds an object
 *
 * This is simply a wrapper around another SimplifiedSchemaForm where the onChange and values are slightly different
 */
export declare const ObjectForm: (props: {
    itemNameOrId?: string | undefined;
    parameterNameStack?: string[] | undefined;
    projectRelativeStorageFilePath?: string | undefined;
    parameter: RenderableFunctionParameter;
    /**
     * In this case this must be an object or undefined
     */
    parameterValue: {
        [key: string]: any;
    } | undefined;
    onChangeParameter: (newValue: any) => void;
    isDebug?: boolean | undefined;
    referencableModelData?: ReferencableModelData | undefined;
    referencedModelDataIsLoading?: boolean | undefined;
    /**
     * Unique id for this ObjectForm
     */
    id: string;
    modelName?: string | undefined;
}) => JSX.Element | null;
//# sourceMappingURL=ObjectForm.d.ts.map