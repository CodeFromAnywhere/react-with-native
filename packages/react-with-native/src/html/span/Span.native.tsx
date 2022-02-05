import * as React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { wrapInTextIfNeeded } from "../../util/util";
import { SpanType } from "./Span.type";

const Span = ({ native, className, children, textClassName }: SpanType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(className) : {};
  return (
    <View style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {wrapInTextIfNeeded(children, textClassName)}
    </View>
  );
};

export default Span;
