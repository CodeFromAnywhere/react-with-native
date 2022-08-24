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
        autoSuggest?: boolean;
        title?: string;
        options: Item<string>[];
    };
}
//# sourceMappingURL=selectMultiple.d.ts.map