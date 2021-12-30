import * as React from "react";
import { View } from "react-native";
import tailwind from "tailwind-rn";
import { LiType } from "./Li.type";

const Li = ({ native, children, ...props }: LiType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <View style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {children}
    </View>
  );
};

export default Li;
