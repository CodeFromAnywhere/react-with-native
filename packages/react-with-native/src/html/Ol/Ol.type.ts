import { DetailedHTMLProps, OlHTMLAttributes } from "react";
import type { ViewProps } from "react-native";

export type OlType = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
> & {
  native?: ViewProps;
  textClassName?: string;
};
