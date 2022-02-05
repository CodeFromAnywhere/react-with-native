import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import type { TextProps } from "react-native";

export type TextAreaType = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  native?: TextProps;
  textClassName?: string;
};
