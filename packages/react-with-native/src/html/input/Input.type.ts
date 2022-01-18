import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { TextInputProps } from "react-native";

export type InputType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  native?: TextInputProps;
};
