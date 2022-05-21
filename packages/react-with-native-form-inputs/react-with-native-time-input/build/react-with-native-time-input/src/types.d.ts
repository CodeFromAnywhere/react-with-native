import { PluginInputType } from "react-with-native-form";
import { Moment } from "moment";
export declare class TimeInputType implements PluginInputType {
    /**
     * value type
     */
    value: Date | Moment;
    /**
     * time
     */
    time?: Boolean | null;
    /**
     * input generic configuration
     */
    config?: {};
    /**
     * field specific configuration
     */
    extra?: {};
}
//# sourceMappingURL=types.d.ts.map