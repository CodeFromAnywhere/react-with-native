import { PluginInputType, PluginComponent } from "react-with-native-form";
export declare const TextAreaInput: PluginComponent<TextAreaInputType>;
export declare class TextAreaInputType implements PluginInputType {
    value: string;
    config?: {
        errorClassName?: string;
        extraClassName?: string;
        replaceClassName?: string;
    };
    extra?: {
        rows?: number;
        maxLength?: number;
        placeholder?: string;
    };
}
//# sourceMappingURL=textArea.d.ts.map