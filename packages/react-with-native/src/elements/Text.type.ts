import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TextProps } from "react-native";

export type TextType = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  native?: TextProps;
};
