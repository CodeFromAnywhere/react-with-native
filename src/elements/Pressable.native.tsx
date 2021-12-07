import React from "react";
import { Pressable as ReactNativePressable } from "react-native";
import tailwind from "tailwind-rn";
import { PressableComponentType } from "./Pressable.type";

const Pressable = ({ native, ...props }: PressableComponentType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = tailwind(props.className);
  return (
    <ReactNativePressable
      style={typeof style === "function" ? style : [tailwindStyle, style]}
      {...nativeWithoutStyle}
    >
      {props.children}
    </ReactNativePressable>
  );
};

export default Pressable;
