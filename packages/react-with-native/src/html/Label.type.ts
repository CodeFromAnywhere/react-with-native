import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { TextProps } from "react-native";

export type LabelType = DetailedHTMLProps<
  HTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  htmlFor?: string;
  native?: TextProps;
};
