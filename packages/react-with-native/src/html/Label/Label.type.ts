import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import type { StyleProp, TextProps, TextStyle } from "react-native";

export type LabelType = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  htmlFor?: string;
  native?: TextProps;
  style?: StyleProp<TextStyle>;
};
