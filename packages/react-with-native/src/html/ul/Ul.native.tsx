import * as React from "react";
import { View } from "react-native";
import tailwind from "tailwind-rn";
import { UlType } from "./Ul.type";

const Ul = ({ native, children, ...props }: UlType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <View style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </View>
  );
};

export default Ul;