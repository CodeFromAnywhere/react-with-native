import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { GestureResponderEvent, PressableProps } from "react-native";

export type PressableType = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> & {
  /**
   * GestureResponderEvent for react native
   */
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | GestureResponderEvent
  ) => void;
  native?: PressableProps;
  textClassName?: string;
};
