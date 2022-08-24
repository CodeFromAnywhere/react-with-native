import * as React from "react";
import { Picker } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { SelectOptionType, SelectType } from "./Select.type";

export const Select = ({ native, options, className }: SelectType) => {
  const tailwind = useTailwind();
  const { style } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return null;
  // <Picker style={[{ fontWeight: "bold" }, tailwindStyle, style]}>
  //   {(options || []).map((option: SelectOptionType) => {
  //     <Picker.Item
  //       value={String(option.value)}
  //       label={String(option.label)}
  //     />;
  //   })}
  // </Picker>
};
