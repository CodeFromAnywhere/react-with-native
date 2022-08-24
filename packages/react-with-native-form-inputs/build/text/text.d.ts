import { PluginInputType, PluginComponent } from "react-with-native-form";
export declare const TextInput: PluginComponent<TextInputType>;
export declare class TextInputType implements PluginInputType {
    /**
     * value type
     */
    value: string;
    /**
     * input generic configuration
     */
    config?: {
        extraClassName?: string;
        replaceClassName?: string;
        errorClassName?: string;
    };
    /**
     * field specific configuration
     */
    extra?: {
        maxLength?: number;
        placeholder?: string;
        isPassword?: boolean;
        autoComplete?: string;
        required?: boolean;
        disabled?: boolean;
        type?: string;
    };
}
//# sourceMappingURL=text.d.ts.map