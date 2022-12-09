import { AlertButton, AlertOptions } from "react-native";
import { AlertStatic } from "react-native";

export type AlertState = {
  title: string;
  message?: string | JSX.Element;
  buttons?: AlertButton[];
  options?: AlertOptions;
};

/**
 * Replaces `AlertStatic["alert"]`
 */
export type AlertFn = (
  title: string,
  message?: string | JSX.Element,
  buttons?: AlertButton[],
  options?: AlertOptions
) => void;
