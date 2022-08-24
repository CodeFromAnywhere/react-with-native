import * as React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { wrapInTextIfNeeded } from "../../util/util";
import { FormType } from "./Form.type";

export const Form = ({
  native,
  textClassName,
  className,
  children,
  style,
}: FormType) => {
  const tailwind = useTailwind();
  const { style: nativeStyle, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    <View style={[tailwindStyle, style, nativeStyle]} {...nativeWithoutStyle}>
      {wrapInTextIfNeeded(children, textClassName)}
    </View>
  );
};
