import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import type { TextProps } from "react-native";

export type LabelType = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  htmlFor?: string;
  native?: TextProps;
};
