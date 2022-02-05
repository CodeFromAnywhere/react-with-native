import * as React from "react";
import { Picker } from "react-native";
import { useTailwind } from "tailwind-rn";
import { SelectOptionType, SelectType } from "./Select.type";

const Select = ({ native, options, ...props }: SelectType) => {
  const tailwind = useTailwind();
  const { style } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <Picker style={[{ fontWeight: "bold" }, tailwindStyle, style]}>
      {(options || []).map((option: SelectOptionType) => {
        <Picker.Item
          value={String(option.value)}
          label={String(option.label)}
        />;
      })}
    </Picker>
  );
};

export default Select;
