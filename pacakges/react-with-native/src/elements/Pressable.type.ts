import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PressableProps } from "react-native";

export type PressableType = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  native?: PressableProps;
};
