import * as React from "react";
import { AlertStatic, Alert } from "react-native";

export const AlertContext = React.createContext<AlertStatic["alert"] | null>(
  Alert.alert
);

export const useAlert = () => {
  const alert = React.useContext(AlertContext);
  return alert;
};
