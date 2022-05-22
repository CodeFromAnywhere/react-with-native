import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { TextProps } from "react-native";

export type PType = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  native?: TextProps;
};
