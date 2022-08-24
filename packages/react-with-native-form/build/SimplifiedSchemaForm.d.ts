/// <reference types="react" />
import { FunctionParameter } from "k-types";
/**
 Think about the different steps involved because some may be able to be reused, for example, in interactive-cli forms, chatbot interfaces, siri-like agents... etc.
 */
export declare const SimplifiedSchemaForm: ({ onChange, parameters, values, referencedModelData, }: {
    /**
     * sometimes you have multiple schemas that you want to put in a form, for example if you have a function that takes multiple parameters
     */
    parameters: FunctionParameter[];
    /**
     * the value is a json with the structure of the simplified schema. with this you can also prefill the form
     */
    values: any[];
    onChange: (values: any[]) => void;
    /**
     * model data (can be filtered) that can be referenced in the schema. This is used to fill the form select inputs so a value can be selected.
     */
    referencedModelData: {
        [modelName: string]: any[];
    };
}) => (JSX.Element | undefined)[];
//# sourceMappingURL=SimplifiedSchemaForm.d.ts.map