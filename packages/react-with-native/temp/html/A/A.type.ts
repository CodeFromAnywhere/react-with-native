import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import type { TextProps } from "react-native";

export type AType = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  native?: TextProps;
  textClassName?: string;
};
