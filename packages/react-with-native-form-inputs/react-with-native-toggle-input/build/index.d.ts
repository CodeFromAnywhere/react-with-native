import { PluginInputType, PluginComponent } from "react-with-native-form";
declare const ToggleInput: PluginComponent<ToggleInputType>;
export declare class ToggleInputType implements PluginInputType {
    /**
     * value type
     */
    value: boolean;
    /**
     * input generic configuration
     */
    config?: {
        errorClassName?: string;
        extraClassName?: string;
        replaceClassName?: string;
    };
    /**
     * field specific configuration
     */
    extra?: {
        disabled?: boolean;
        label?: string | JSX.Element;
    };
}
export default ToggleInput;
//# sourceMappingURL=index.d.ts.map