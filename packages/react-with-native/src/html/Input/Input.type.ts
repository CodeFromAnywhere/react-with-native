import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type {
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

export type InputType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  native?: TextInputProps;
  style?: StyleProp<TextStyle>;
};
