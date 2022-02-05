import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { ViewProps } from "react-native";

export type UlType = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  native?: ViewProps;
  textClassName?: string;
};
