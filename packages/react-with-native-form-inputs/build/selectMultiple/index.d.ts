import { PluginComponent, PluginInputType } from "react-with-native-form";
import { Item } from "react-with-native-select";
export declare const SelectMultipleInput: PluginComponent<SelectMultipleInputType>;
export declare class SelectMultipleInputType implements PluginInputType {
    value: Item<string>[];
    config?: {
        errorClassName?: string;
        extraClassName?: string;
        replaceClassName?: string;
    };
    extra: {
        title?: string;
        options: Item<string>[];
    };
}
export default SelectMultipleInput;
//# sourceMappingURL=index.d.ts.map