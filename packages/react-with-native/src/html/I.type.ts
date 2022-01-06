import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { TextProps } from "react-native";

export type IType = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  native?: TextProps;
};
