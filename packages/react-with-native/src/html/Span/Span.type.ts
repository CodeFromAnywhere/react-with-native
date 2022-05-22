import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { ViewProps } from "react-native";

export type SpanType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  native?: ViewProps;
  textClassName?: string;
};
