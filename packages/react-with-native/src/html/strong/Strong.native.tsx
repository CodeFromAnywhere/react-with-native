import * as React from "react";
import { Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { StrongType } from "./Strong.type";

const Strong = ({ native, children, ...props }: StrongType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <Text
      style={[{ fontWeight: "bold" }, tailwindStyle, style]}
      {...nativeWithoutStyle}
    >
      {children}
    </Text>
  );
};

export default Strong;
