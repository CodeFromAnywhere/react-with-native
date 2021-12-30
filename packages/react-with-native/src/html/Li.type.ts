import { DetailedHTMLProps, LiHTMLAttributes } from "react";
import { ViewProps } from "react-native";

export type LiType = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & {
  native?: ViewProps;
};