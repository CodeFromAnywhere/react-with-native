import * as React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { SpanType } from "./Span.type";

const Span = ({ native, ...props }: SpanType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return (
    <View style={[tailwindStyle, style]} {...nativeWithoutStyle}>
      {props.children}
    </View>
  );
};

export default Span;
