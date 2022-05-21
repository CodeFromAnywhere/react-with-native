import { PluginInputType, PluginComponent } from "react-with-native-form";
declare const NumberInput: PluginComponent<NumberInputType>;
export declare class NumberInputType implements PluginInputType {
    /**
     * value type
     */
    value: number | null;
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
        autoComplete?: string;
        required?: boolean;
        disabled?: boolean;
        type?: string;
    };
}
export default NumberInput;
//# sourceMappingURL=index.d.ts.map