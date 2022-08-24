/**

TODO:

Support for arrays: Arrays can be empty, so rendering a form for an array should start with rendering the title and a plus-button (assuming the array is undefined or empty in value)

If you have an object that can be recursed on but it's not required, don't recurse yet until you expand it.

 */
/// <reference types="react" />
import { FunctionParameter } from "code-types";
/**
 * this is part of the database convention
 *
 * TODO: place in the right location
 */
export declare const isCalculatedParameter: (parameterName: string) => boolean;
export declare const renderParameterTitle: (parameter: FunctionParameter, isDebug: boolean | undefined) => JSX.Element;
export declare const getReferencedModelData: (parameterName: string, referencedModelData: {
    [modelName: string]: any[];
}) => {
    descriptor: string | undefined;
    keyInModel: string | undefined;
    interfaceName: string | undefined;
    isReferenceMultipleParameter: boolean;
    isReferenceSingleParameter: boolean;
    isReferenceParameter: boolean;
    referencedData: any[] | undefined;
} | undefined;
/**
recursive component that renders a form for a SimplifiedSchema


TODO: CLEANUP: Think about the different steps involved because some may be able to be reused, for example, in interactive-cli forms, chatbot interfaces, siri-like agents... etc.

 */
export declare const SimplifiedSchemaForm: ({ id, onChange, parameters, values, referencedModelData, referencedModelDataIsLoading, isDbModel, title, isDebug, }: {
    /**
     * if given, this form gets a clear container and title
     */
    title?: string | undefined;
    /** unique id for this form */
    id: string;
    /**
     * If true, we assume a model-ready endpoint is used, so it will be rendered more cleanly (some fields are automatic)
     */
    isDbModel?: boolean | undefined;
    /**
     * sometimes you have multiple schemas that you want to put in a form, for example if you have a function that takes multiple parameters
     */
    parameters: FunctionParameter[];
    /**
     * the value is a json with the structure of the simplified schema. with this you can also prefill the form
     */
    values: undefined | any[];
    onChange: (values: any[]) => void;
    /**
     * model data (can be filtered) that can be referenced in the schema. This is used to fill the form select inputs so a value can be selected.
     */
    referencedModelData: {
        [modelName: string]: any[];
    };
    referencedModelDataIsLoading?: boolean | undefined;
    /** show more info for devs */
    isDebug?: boolean | undefined;
}) => JSX.Element | null;
//# sourceMappingURL=SimplifiedSchemaForm.d.ts.map