import * as React from "react";
import { TextInput } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { InputType } from "./Input.type";

export const Input = ({
  native,
  children,
  className,
  style,
  ...props
}: InputType) => {
  const tailwind = useTailwind();
  const { style: nativeStyle, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    <TextInput
      style={[tailwindStyle, style, nativeStyle]}
      {...nativeWithoutStyle}
    >
      {nativeWithoutStyle.children || children}
    </TextInput>
  );
};
