import * as React from "react";
import { TouchableOpacity as ReactNativeTouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import { TouchableOpacityType } from "./TouchableOpacity.type";
import { wrapInTextIfNeeded } from "../../util/util";
import { trimClassName } from "../../util/trimClassName";
export const TouchableOpacity = ({
  native,
  className,
  textClassName,
  children,
  onClick,
}: TouchableOpacityType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    <ReactNativeTouchableOpacity
      style={[tailwindStyle, style]}
      onPress={onClick}
      {...nativeWithoutStyle}
    >
      {wrapInTextIfNeeded(children, textClassName)}
    </ReactNativeTouchableOpacity>
  );
};
