import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import type { TextInputProps } from "react-native";

export type TextAreaType = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  native?: TextInputProps;
  textClassName?: string;
};
