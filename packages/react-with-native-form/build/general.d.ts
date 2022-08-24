import { RefObject } from "react";
import { inputClass } from "react-with-native-ui";
import deepEqual from "fast-deep-equal/react";
declare const inputClassWithoutWidth = "text-sm px-3 text-gray-700 border-gray-300 border rounded-md focus:outline-none";
export { deepEqual };
export { inputClassWithoutWidth, inputClass };
export declare function notEmpty<TValue>(value: TValue | null | undefined): value is TValue;
export declare const makeInputField: <TInputs, T extends Extract<keyof TInputs, string>>(type: T, config: Omit<Field<TInputs, T>, "type">) => () => {
    field: string;
    title?: string | undefined;
    shouldHide?: ((state: any) => boolean) | undefined;
    titleFromState?: ((state: any) => string) | undefined;
    hasError?: ((value: TInputs[T] extends PluginInputType ? TInputs[T]["value"] : any, state: Partial<PossibleState>) => boolean | string | Error[]) | undefined;
    startSection?: boolean | undefined;
    sectionTitle?: string | undefined;
    description?: string | undefined;
    initialValue?: (TInputs[T] extends PluginInputType ? TInputs[T]["value"] : any) | undefined;
    extra?: (TInputs[T] extends PluginInputType ? TInputs[T]["extra"] : any) | undefined;
    type: T;
};
/**
 * type of every specific field in a form
 */
export declare type Field<TInputs, T extends Keys<TInputs> = Keys<TInputs>> = {
    /**
     * type of the field (any plugin type), defaults to first plugin
     */
    type?: Keys<TInputs>;
    /**
     * unique identifier of the field
     */
    field: string;
    /**
     * title of the field
     */
    title?: string;
    shouldHide?: (state: any) => boolean;
    titleFromState?: (state: any) => string;
    /**
     * returns either false if there's no error or a string of an error message if there is one
     */
    hasError?: (value: TInputs[T] extends PluginInputType ? TInputs[T]["value"] : any, state: Partial<PossibleState>) => boolean | string | Error[];
    startSection?: boolean;
    sectionTitle?: string;
    description?: string;
    /**
     * initalValue (can be declared here or on Form defaultValues prop). This has priority
     */
    initialValue?: TInputs[T] extends PluginInputType ? TInputs[T]["value"] : any;
    /**
     * any extra properties that can be given to a specific input
     */
    extra?: TInputs[T] extends PluginInputType ? TInputs[T]["extra"] : any;
};
export declare type Keys<TObject> = Extract<keyof TObject, string>;
export interface ExtendedField<TInputs, T extends Keys<TInputs>> extends Field<TInputs, T> {
    /**
     * this is added to any field
     */
    reference?: RefObject<HTMLDivElement>;
}
export declare type SubmitProps = {
    onSubmit: () => void;
    loading: boolean;
    available: boolean;
    submitButtonText?: string;
    submitButtonColor?: string;
    state?: any;
};
export declare type DefaultConfig = {
    extraClassName?: string;
    replaceClassName?: string;
};
declare type RejectValue = string | Error[];
export declare type Error = {
    message: string | true;
    propertyPath: string;
};
export interface PluginInputType {
    /**
     * universal configuration options of the input
     */
    config?: {
        [key: string]: any;
    };
    /**
     * type of the value of the input
     */
    value: any;
    /**
     * extra possible field specific settings of the input
     */
    extra?: any;
    /**
     *
     */
    component?: any;
}
export declare type Plugin<TInput extends PluginInputType> = {
    component: PluginComponent<TInput>;
    config?: TInput["config"];
};
export declare type OnChange<TInput extends PluginInputType> = (value: TInput["value"]) => void;
export declare type PluginComponent<TInput extends PluginInputType> = ((props: {
    onChange: OnChange<TInput>;
    /**
     * value is never undefined, unless you didn't declare defaultInitialValue
     */
    value: TInput["value"];
    extra: TInput["extra"];
    config: TInput["config"];
    /**
     * Format: {randomId}.{fieldName}
     */
    uniqueFieldId: string;
    fieldName: string;
    /**
     * if there are multiple errors for this single field (from the backend), they can be given here. Key is in format `{fieldName}.{subfieldName}`, value should be the string containing the error
     */
    errors?: Error[];
    errorClassName?: string;
}) => JSX.Element) & {
    defaultInitialValue: TInput["value"];
    hideContainerError?: boolean;
};
declare type Plugins<TInputs> = {
    [key in keyof TInputs]: Plugin<any>;
};
export declare type RenderInputContainerType = undefined | ((props: InputContainerProps) => JSX.Element);
export declare type InputContainerProps = {
    children: any;
    description?: string;
    sectionTitle?: string;
    startSection?: boolean;
    title?: string;
    next?: any;
    isLast?: boolean;
    error?: string | boolean;
    extra?: PluginInputType["extra"];
    config?: PluginInputType["config"];
    errorClassName?: string;
};
export declare type DataFormConfig<TInputs> = {
    submitButtonText?: string;
    submitButtonColor?: string;
    title?: string;
    backButton?: () => void;
    plugins?: Plugins<TInputs>;
    onError?: (message: string) => void;
    renderSubmitComponent?: (props: {
        onSubmit: () => void;
        loading: boolean;
        available: boolean;
        submitButtonText?: string;
        submitButtonColor?: string;
    }) => JSX.Element;
    renderInputContainer?: RenderInputContainerType;
    renderTitle?: (props: {
        title?: string;
        backButton?: () => void;
    }) => JSX.Element;
    stickySubmit?: boolean;
    submitClassName?: string;
    errorClassName?: string;
    successClassName?: string;
};
/**
 * the possible states, like { password: string, text: string }
 */
export declare type PossibleValues<TInputs> = {
    [K in keyof TInputs]: TInputs[K] extends PluginInputType ? TInputs[K]["value"] : never;
};
export declare type PossibleState = {
    [key: string]: any;
};
export declare type ResolveType = (message: string) => void;
export declare type RejectType = (stringOrErrorArray: RejectValue) => void;
export declare type DataFormProps<TInputs, TState extends {
    [key: string]: any;
}> = {
    /**
     * array of fields created with makeField
     */
    fields: Array<(<T extends Keys<TInputs>>() => Field<TInputs, T>)>;
    /**
     * optionally, you can pass partial default values here.
     */
    initialValues?: Partial<TState>;
    /**
     * DEPRECATED, you can pass partial default values here. Please use initialValues
     */
    defaultValues?: Partial<TState>;
    /**
     * callback that's called when submit button has been pressed
     */
    onSubmit: (values: TState, resolve: ResolveType, reject: RejectType) => void;
    /**
     * optionally, you can use the onClickSubmit externally
     */
    withSubmitProps?: (props: SubmitProps) => void;
    /**
     * if true no submit button will be rendered. handy in combination with withSubmitProps
     */
    noSubmit?: boolean;
} & DataFormConfig<TInputs>;
export declare const DefaultInputContainer: ({ children, startSection, sectionTitle, title, description, error, errorClassName, }: InputContainerProps) => JSX.Element;
export declare const Input: <TInputs extends AllPluginInputTypes, T extends keyof TInputs>({ type, plugin, title, onChange, value, isLast, startSection, sectionTitle, next, extra, errors, reference, description, config, uniqueFieldId, renderInputContainer, errorClassName, fieldName, }: {
    plugin: PluginComponent<TInputs[T]>;
    type: string;
    fieldName: string;
    config: TInputs[T]["config"];
    extra: TInputs[T]["extra"];
    next: any;
    title?: string | undefined;
    onChange: OnChange<TInputs[T]>;
    value: TInputs[T]["value"];
    errors?: Error[] | undefined;
    isLast: boolean;
    startSection?: boolean | undefined;
    sectionTitle?: string | undefined;
    reference?: RefObject<HTMLDivElement> | undefined;
    description?: string | undefined;
    /**
     * format: {uniqueGeneratedNumber}.{fieldName}
     */
    uniqueFieldId: string;
    renderInputContainer?: RenderInputContainerType;
    errorClassName?: string | undefined;
}) => JSX.Element;
export declare function isObject(object: any): object is object;
export declare const errorOnField: (fieldName: string) => (error: Error) => boolean;
export declare const DataForm: <TInputs, TState extends {
    [key: string]: any;
}>({ fields, defaultValues, initialValues, onSubmit, withSubmitProps, noSubmit, submitButtonText, submitButtonColor, title, backButton, plugins, renderSubmitComponent, renderInputContainer, stickySubmit, renderTitle, submitClassName, errorClassName, successClassName, }: DataFormProps<TInputs, TState>) => JSX.Element;
export declare type AllPluginInputTypes = {
    [key: string]: PluginInputType;
};
export declare const setConfig: <TInputs, TState>(DataForm: (props: DataFormProps<TInputs, TState>) => JSX.Element, config: DataFormConfig<TInputs>) => (props: DataFormProps<TInputs, TState>) => JSX.Element;
//# sourceMappingURL=general.d.ts.map