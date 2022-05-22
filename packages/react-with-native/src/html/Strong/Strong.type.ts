import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { TextProps } from "react-native";

export type StrongType = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  native?: TextProps;
};
