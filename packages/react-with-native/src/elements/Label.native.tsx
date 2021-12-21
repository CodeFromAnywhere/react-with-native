import * as React from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";
import { LabelType } from "./Label.type";

const Label = ({ native, children, className }: LabelType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(className) : {};
  return (
    <Text style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </Text>
  );
};

export default Label;
