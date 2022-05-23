import { PluginComponent, PluginInputType } from "react-with-native-form";
export declare const StarsInput: PluginComponent<StarsInputType>;
export declare class StarsInputType implements PluginInputType {
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
        /**
         * allow half stars
         */
        half?: boolean;
    };
}
export default StarsInput;
//# sourceMappingURL=StarsInput%20copy.d.ts.map