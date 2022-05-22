import * as React from "react";
import { View, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { wrapInTextIfNeeded } from "../../util/util";
import { ScrollableDivType } from "./ScrollableDiv.type";

const PureDiv = (
  {
    native,
    textClassName,
    className,
    children,
    scroll,
    style,
  }: ScrollableDivType,
  ref: any
) => {
  const tailwind = useTailwind();
  const { ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  const ViewOrScrollView = scroll ? ScrollView : View;
  return (
    <ViewOrScrollView
      style={[tailwindStyle, style]}
      {...nativeWithoutStyle}
      ref={ref}
    >
      {wrapInTextIfNeeded(children, textClassName)}
    </ViewOrScrollView>
  );
};
const ScrollableDiv = React.forwardRef(PureDiv);

export default ScrollableDiv;
