import * as React from "react";
import tailwind from "tailwind-rn";
import { TextInput } from "react-native";
import { TextAreaType } from "./TextArea.type";

const TextArea = ({ native, children, ...props }: TextAreaType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};

  return (
    <TextInput
      multiline={true}
      style={[{ textAlignVertical: 'top' }, tailwindStyle, style]}
      {...nativeWithoutStyle}
    >
      {children}
    </TextInput>
  );
};

export default TextArea;
