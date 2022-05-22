import { AlertButton, AlertOptions } from "react-native";

export type AlertState = {
  title: string;
  message?: string;
  buttons?: AlertButton[];
  options?: AlertOptions;
};
