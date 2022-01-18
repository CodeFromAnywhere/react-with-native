import * as React from "react";
import { TextInput } from "react-native";
import tailwind from "tailwind-rn";
import { InputType } from "./Input.type";

const Input = ({ native, children, ...props }: InputType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
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
