import { PluginInputType, PluginComponent } from "react-with-native-form";
export declare const isNumber: (numberString: string | null | undefined) => boolean;
export declare const castToNumber: (numberString: string | null | undefined) => null | undefined | number;
export declare const NumberInput: PluginComponent<NumberInputType>;
export declare class NumberInputType implements PluginInputType {
    /**
     * value type
     */
    value: number | null | undefined;
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
//# sourceMappingURL=number.d.ts.map