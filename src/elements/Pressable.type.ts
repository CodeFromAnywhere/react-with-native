import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PressableProps } from "react-native";

export type PressableComponentType = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  native?: PressableProps;
};
