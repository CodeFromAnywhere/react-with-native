import * as React from "react";
import { Linking, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { wrapInTextIfNeeded } from "../../util/util";
import { AType } from "./A.type";

const A = ({ native, children, href, textClassName, ...props }: AType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};

  return (
    <Pressable
      style={[style, tailwindStyle]}
      onPress={() => href && Linking.openURL(href)}
      {...nativeWithoutStyle}
    >
      {wrapInTextIfNeeded(children, textClassName)}
    </Pressable>
  );
};

export default A;
