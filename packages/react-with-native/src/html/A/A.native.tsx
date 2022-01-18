import * as React from "react";
import { Linking, Pressable } from "react-native";
import tailwind from "tailwind-rn";
import { AType } from "./A.type";

const A = ({ native, children, href, ...props }: AType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <Pressable
      style={[style, tailwindStyle]}
      onPress={() => href && Linking.openURL(href)}
      {...nativeWithoutStyle}
    >
      {children}
    </Pressable>
  );
};

export default A;
