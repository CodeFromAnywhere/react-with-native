import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { ButtonProps } from "react-native";

export type ButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  native?: ButtonProps;
};
