import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithoutRef,
  RefAttributes,
} from "react";
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

export type FinalDivType<T> = PropsWithoutRef<DivType> & RefAttributes<T>;
