import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { TextInputProps } from "react-native";

export type InputType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  native?: TextInputProps;
};
