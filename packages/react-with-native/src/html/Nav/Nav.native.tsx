import * as React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { wrapInTextIfNeeded } from "../../util/util";
import { NavType } from "./Nav.type";

const Nav = ({ native, textClassName, className, children }: NavType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(className) : {};

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

export default Nav;
