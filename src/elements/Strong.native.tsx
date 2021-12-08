import React from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";
import { StrongType } from "./Strong.type";

const Strong = ({ native, children, ...props }: StrongType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = tailwind(props.className);
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
