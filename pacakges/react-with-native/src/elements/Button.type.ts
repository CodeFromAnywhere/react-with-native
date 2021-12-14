import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ButtonProps } from "react-native";

export type ButtonType = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  native?: ButtonProps;
};
