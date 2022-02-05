import * as React from "react";
import { Pressable as ReactNativePressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { PressableType } from "./Pressable.type";

const Pressable = ({
  native,
  className,
  children,
  onClick,
  ...props
}: PressableType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(className) : {};
  return (
    <ReactNativePressable
      style={typeof style === "function" ? style : [tailwindStyle, style]}
      onPress={onClick}
      {...nativeWithoutStyle}
    >
      {children}
    </ReactNativePressable>
  );
};

export default Pressable;
