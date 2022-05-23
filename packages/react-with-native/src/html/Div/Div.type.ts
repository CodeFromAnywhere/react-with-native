import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export type DivType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  native?: ViewProps;
  scroll?: boolean;
  textClassName?: string;
  style?: StyleProp<ViewStyle>;
};
