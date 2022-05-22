import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export type FormType = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {
  native?: ViewProps;
  textClassName?: string;
  style?: StyleProp<ViewStyle>;
};
