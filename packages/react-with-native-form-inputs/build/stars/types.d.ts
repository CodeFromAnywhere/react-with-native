import { PluginInputType } from "react-with-native-form";
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
//# sourceMappingURL=types.d.ts.map