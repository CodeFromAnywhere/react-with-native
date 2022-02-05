import { DetailedHTMLProps, LiHTMLAttributes } from "react";
import type { ViewProps } from "react-native";

export type LiType = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & {
  native?: ViewProps;
  textClassName?: string;
};
