import * as React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { wrapInTextIfNeeded } from "../../util/util";
import { NavType } from "./Nav.type";

export const Nav = ({
  native,
  textClassName,
  className,
  children,
}: NavType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};

  return (
    <View
      style={[
        tailwindStyle,
        style,
        {
          flexDirection: "row",
          alignItems: "center",
          elevation: 0,
        },
      ]}
      {...nativeWithoutStyle}
    >
      {wrapInTextIfNeeded(children, textClassName)}
    </View>
  );
};
