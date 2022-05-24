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
        multiple?: boolean;
        title?: string;
        options: Item<string>[];
    };
}
export default SelectInput;
//# sourceMappingURL=index.d.ts.map