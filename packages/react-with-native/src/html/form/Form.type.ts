import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import type { ViewProps } from "react-native";

export type FormType = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {
  native?: ViewProps;
  textClassName?: string;
};
