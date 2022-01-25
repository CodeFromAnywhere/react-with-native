import * as React from "react";
import { View } from "react-native";
import tailwind from "tailwind-rn";
import { OlType } from "./Ol.type";

const Ol = ({ native, children, ...props }: OlType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <View style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </View>
  );
};

export default Ol;
