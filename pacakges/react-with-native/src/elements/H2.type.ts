import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TextProps } from "react-native";

export type H2Type = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  native?: TextProps;
};
