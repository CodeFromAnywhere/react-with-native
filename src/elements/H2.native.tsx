import * as React from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";
import { H2Type } from "./H2.type";

const H2 = ({ native, children, ...props }: H2Type) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = tailwind(props.className);
  return (
    <Text style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </Text>
  );
};

export default H2;
