import * as React from "react";
import { Text as RNText } from "react-native";
import { useTailwind } from "tailwind-rn";
import { TextType } from "./Text.type";

const Text = ({ native, ...props }: TextType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <RNText style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {props.children}
    </RNText>
  );
};

export default Text;
