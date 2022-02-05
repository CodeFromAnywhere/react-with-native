import * as React from "react";
import { Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { wrapInTextIfNeeded } from "../../util/util";
import { ButtonType } from "./Button.type";

const Button = ({ native, textClassName, className, children }: ButtonType) => {
  native = native!;
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};

  return (
    <Pressable
      style={typeof style === "function" ? style : [tailwindStyle, style]}
      {...nativeWithoutStyle}
    >
      {wrapInTextIfNeeded(children, textClassName)}
    </Pressable>
  );
};

export default Button;
