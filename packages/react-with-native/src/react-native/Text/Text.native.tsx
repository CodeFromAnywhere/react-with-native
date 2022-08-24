import * as React from "react";
import { Text as RNText } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { TextType } from "./Text.type";

export const Text = ({ native, className, children }: TextType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    <RNText style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </RNText>
  );
};
