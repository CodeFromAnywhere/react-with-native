import { DetailedHTMLProps, OlHTMLAttributes } from "react";
import { ViewProps } from "react-native";

export type OlType = DetailedHTMLProps<
OlHTMLAttributes<HTMLOListElement>,
HTMLOListElement
> & {
  native?: ViewProps;
};