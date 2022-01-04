import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { TextProps } from "react-native";

export type TextAreaType = DetailedHTMLProps<
TextareaHTMLAttributes<HTMLTextAreaElement>,
HTMLTextAreaElement
> & {
  native?: TextProps;
};