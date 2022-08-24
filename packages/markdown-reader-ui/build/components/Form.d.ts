/// <reference types="react" />
import { Field, DataFormProps } from "react-with-native-form";
import { TextInputType, PasswordInputType, DateInputType, DatetimeInputType, NumberInputType, SelectInputType, StarsInputType, PhoneInputType, TextAreaInputType, TimeInputType, ToggleInputType, SelectMultipleInputType, LabelsInputType } from "react-with-native-form-inputs";
export declare const makeField: <T extends keyof Inputs>(type: T, config: Omit<Field<Inputs, T>, "type">) => () => {
    field: string;
    title?: string | undefined;
    shouldHide?: ((state: any) => boolean) | undefined;
    titleFromState?: ((state: any) => string) | undefined;
    hasError?: ((value: Inputs[T] extends import("react-with-native-form").PluginInputType ? Inputs[T]["value"] : any, state: Partial<import("react-with-native-form").PossibleState>) => string | boolean | import("react-with-native-form").Error[]) | undefined;
    startSection?: boolean | undefined;
    sectionTitle?: string | undefined;
    description?: string | undefined;
    initialValue?: (Inputs[T] extends import("react-with-native-form").PluginInputType ? Inputs[T]["value"] : any) | undefined;
    extra?: (Inputs[T] extends import("react-with-native-form").PluginInputType ? Inputs[T]["extra"] : any) | undefined;
    type: T;
};
export interface Inputs {
    text: TextInputType;
    password: PasswordInputType;
    date: DateInputType;
    datetime: DatetimeInputType;
    number: NumberInputType;
    select: SelectInputType;
    selectMultiple: SelectMultipleInputType;
    stars: StarsInputType;
    phone: PhoneInputType;
    textArea: TextAreaInputType;
    time: TimeInputType;
    toggle: ToggleInputType;
    labels: LabelsInputType;
}
export declare type InputValues = {
    [key in keyof Inputs]: Inputs[key]["value"];
};
export declare const Form: <TState extends {
    [key: string]: any;
} = any>(props: DataFormProps<Inputs, TState>) => JSX.Element;
//# sourceMappingURL=Form.d.ts.map