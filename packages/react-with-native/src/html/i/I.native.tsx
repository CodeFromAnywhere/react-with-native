import * as React from "react";
import { Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { IType } from "./I.type";

const I = ({ native, children, ...props }: IType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <Text
      style={[{ fontStyle: "italic" }, tailwindStyle, style]}
      {...nativeWithoutStyle}
    >
      {children}
    </Text>
  );
};

export default I;
