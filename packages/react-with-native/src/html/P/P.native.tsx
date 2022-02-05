import * as React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { PType } from "./P.type";

const P = ({ native, children, ...props }: PType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={[{ flexShrink: 1 }, tailwindStyle, style]}
        {...nativeWithoutStyle}
      >
        {children}
      </Text>
    </View>
  );
};

export default P;
