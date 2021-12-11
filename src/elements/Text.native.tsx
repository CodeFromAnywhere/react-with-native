import * as React from "react";
import { Text as RNText } from "react-native";
import tailwind from "tailwind-rn";
import { TextType } from "./Text.type";

const Text = ({ native, ...props }: TextType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <RNText style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {props.children}
    </RNText>
  );
};

export default Text;
