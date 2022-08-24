import * as React from "react";
import { Linking, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { wrapInTextIfNeeded } from "../../util/util";
import { AType } from "./A.type";

export const A = ({
  native,
  children,
  href,
  className,
  textClassName,
}: AType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};

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
