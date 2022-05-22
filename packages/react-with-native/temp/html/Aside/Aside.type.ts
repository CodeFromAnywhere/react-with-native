import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { ViewProps } from "react-native";

export type AsideType = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  native?: ViewProps;
  textClassName?: string;
};
