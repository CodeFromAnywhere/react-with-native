import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { ViewProps } from "react-native";

export type FormType = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {
  native?: ViewProps;
};
