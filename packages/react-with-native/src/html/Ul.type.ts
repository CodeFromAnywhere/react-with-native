import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ViewProps } from "react-native";

export type UlType = DetailedHTMLProps<
HTMLAttributes<HTMLUListElement>,
HTMLUListElement
> & {
  native?: ViewProps;
};