import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import type { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export type ButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  native?: TouchableOpacityProps;
  textClassName?: string;
  style?: StyleProp<ViewStyle>;
};
