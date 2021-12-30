import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TextProps } from "react-native";

export type PType = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  native?: TextProps;
};
