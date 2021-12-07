import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ViewProps } from "react-native";

export type H2Type = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  native?: ViewProps;
};
