import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ViewProps } from "react-native";

export type SpanType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  native?: ViewProps;
};
