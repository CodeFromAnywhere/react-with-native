import * as React from "react";
import { TextInput } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { InputType } from "./Input.type";

const Input = ({ native, children, className }: InputType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    <TextInput
      style={[{ fontWeight: "bold" }, tailwindStyle, style]}
      {...nativeWithoutStyle}
    >
      {nativeWithoutStyle.children || children}
    </TextInput>
  );
};

export default Input;
