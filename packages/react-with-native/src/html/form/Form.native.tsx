import * as React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { FormType } from "./Form.type";

const Form = ({ native, ...props }: FormType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <View style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {props.children}
    </View>
  );
};

export default Form;
