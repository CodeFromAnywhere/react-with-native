import { AnyInput, PluginInputProps } from "react-with-native-form";
import React from "react";
import Select, { Item } from "react-with-native-select";

const SelectInput = <T extends unknown = string>({
  value,
  extra,
  onChange,
}: PluginInputProps<SelectInputType<T>>) => {
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

export interface SelectInputType<T = string> extends AnyInput {
  type: "select";
  value: Item<T>;
  defaultValue: Item<T>;
  config?: {
    errorClassName?: string;
    extraClassName?: string;
    replaceClassName?: string;
  };
  extra: {
    title: string;
    options: Item<T>[];
  };
}

export default SelectInput;
