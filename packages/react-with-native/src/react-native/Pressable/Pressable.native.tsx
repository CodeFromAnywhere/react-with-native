import * as React from "react";
import { Pressable as ReactNativePressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { PressableType } from "./Pressable.type";
import { wrapInTextIfNeeded } from "../../util/util";
import { trimClassName } from "../../util/trimClassName";
export const Pressable = ({
  native,
  className,
  textClassName,
  children,
  onClick,
}: PressableType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    <ReactNativePressable
      style={typeof style === "function" ? style : [tailwindStyle, style]}
      onPress={onClick}
      {...nativeWithoutStyle}
    >
      {wrapInTextIfNeeded(children, textClassName)}
    </ReactNativePressable>
  );
};
