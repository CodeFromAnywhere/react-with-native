import { PluginComponent, PluginInputType } from "react-with-native-form";
import { Select, Item } from "react-with-native-select";
import { UI } from "react-with-native-ui";

export const SelectInput: PluginComponent<SelectInputType> = ({
  value,
  extra,
  onChange,
}) => {
  //console.log({ value, extraOptions: extra.options });
  return (
    <Select
      autoSuggest={extra.autoSuggest}
      // containerClassName={UI.input}
      className={UI.selectInput}
      title={extra.title || ""}
      options={extra.options}
      value={value}
      onChange={(value) => {
        if (value) {
          onChange(value);
        }
      }}
    />
  );
};

SelectInput.defaultInitialValue = null;

export class SelectInputType implements PluginInputType {
  value!: Item<string> | null;
  config?: {
    errorClassName?: string;
    extraClassName?: string;
    replaceClassName?: string;
  };
  extra!: {
    autoSuggest?: boolean;
    multiple?: boolean;
    title?: string;
    options: Item<string>[];
  };
}
