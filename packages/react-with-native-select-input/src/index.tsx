import { PluginComponent, PluginInputType } from "react-with-native-form";
import React from "react";
import Select, { Item } from "react-with-native-select";

const SelectInput: PluginComponent<SelectInputType> = ({
  value,
  extra,
  onChange,
}) => {
  return (
    <Select
      className="w-full"
      title={extra.title}
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
    title?: string;
    options: Item<string>[];
  };
}

export default SelectInput;
