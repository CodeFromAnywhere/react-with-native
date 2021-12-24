import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TextProps } from "react-native";

export type LabelType = DetailedHTMLProps<
  HTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  htmlFor?: string;
  native?: TextProps;
};
