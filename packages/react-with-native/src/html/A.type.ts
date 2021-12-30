import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { TextProps } from "react-native";

export type AType = DetailedHTMLProps<
AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  native?: TextProps;
};