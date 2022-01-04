import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ViewProps } from "react-native";

export type AsideType = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
& {
  native?: ViewProps;
};
