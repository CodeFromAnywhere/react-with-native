import { PluginComponent, PluginInputType } from "react-with-native-form";
import { Item } from "react-with-native-select";
export declare const SelectInput: PluginComponent<SelectInputType>;
export declare class SelectInputType implements PluginInputType {
    value: Item<string> | null;
    config?: {
        errorClassName?: string;
        extraClassName?: string;
        replaceClassName?: string;
    };
    extra: {
        autoSuggest?: boolean;
        multiple?: boolean;
        title?: string;
        options: Item<string>[];
    };
}
//# sourceMappingURL=select.d.ts.map