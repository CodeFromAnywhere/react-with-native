import * as React from "react";
import { AlertStatic } from "react-native";

export const AlertContext = React.createContext<AlertStatic["alert"] | null>(
  null
);

export const useAlert = () => {
  const alert = React.useContext(AlertContext);
  return alert;
};
