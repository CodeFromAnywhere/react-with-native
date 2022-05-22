import * as React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { wrapInTextIfNeeded } from "../../util/util";
import { DivType } from "./Div.type";

const PureDiv = (
  { native, textClassName, className, children, style }: DivType,
  ref: any
) => {
  const tailwind = useTailwind();
  const { ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    <View style={[tailwindStyle, style]} {...nativeWithoutStyle} ref={ref}>
      {wrapInTextIfNeeded(children, textClassName)}
    </View>
  );
};
const Div = React.forwardRef(PureDiv);

export default Div;
