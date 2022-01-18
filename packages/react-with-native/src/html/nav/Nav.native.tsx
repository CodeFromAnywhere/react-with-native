import * as React from "react";
import { View } from "react-native";
import tailwind from "tailwind-rn";
import { NavType } from "./Nav.type";

const Nav = ({ native, ...props }: NavType) => {
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};

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
      {props.children}
    </View>
  );
};

export default Nav;
