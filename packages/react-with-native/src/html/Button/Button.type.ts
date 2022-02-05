import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import type { PressableProps } from "react-native";

export type ButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  native?: PressableProps;
  textClassName?: string;
};
//
