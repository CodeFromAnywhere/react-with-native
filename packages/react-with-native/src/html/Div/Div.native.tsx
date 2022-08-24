import * as React from "react";
import { View, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { wrapInTextIfNeeded } from "../../util/util";
import { DivType } from "./Div.type";

const PureDiv = (
  { native, textClassName, className, children, style, scroll }: DivType,
  ref: any
) => {
  const tailwind = useTailwind();
  const { ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  const CorrectView = scroll ? ScrollView : View;
  return (
    <CorrectView
      style={[tailwindStyle, style]}
      {...nativeWithoutStyle}
      ref={ref}
    >
      {wrapInTextIfNeeded(children, textClassName)}
    </CorrectView>
  );
};
export const Div = React.forwardRef(PureDiv);
