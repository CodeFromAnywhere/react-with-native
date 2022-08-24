import * as React from "react";
import { Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { LabelType } from "./Label.type";

export const Label = ({ native, children, className, style }: LabelType) => {
  const tailwind = useTailwind();
  const { style: nativeStyle, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    <Text style={[tailwindStyle, style, nativeStyle]} {...nativeWithoutStyle}>
      {children}
    </Text>
  );
};
