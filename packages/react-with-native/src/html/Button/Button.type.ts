import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import type { TouchableOpacityProps } from "react-native";

export type ButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  native?: TouchableOpacityProps;
  textClassName?: string;
};
