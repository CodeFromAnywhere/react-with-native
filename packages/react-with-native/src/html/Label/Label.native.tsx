import * as React from "react";
import { Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { LabelType } from "./Label.type";

const Label = ({ native, children, className }: LabelType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    <Text style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </Text>
  );
};

export default Label;
