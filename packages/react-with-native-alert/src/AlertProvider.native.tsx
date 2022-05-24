import { createContext } from "react";

import { Alert, AlertStatic } from "react-native";
// import { AlertContext } from "./Alert";

export const AlertContext = createContext<AlertStatic["alert"] | null>(null);

export const AlertProvider = ({ children }: { children: any }) => {
  const alert: AlertStatic["alert"] = Alert.alert;

  return (
    <AlertContext.Provider value={alert}>{children}</AlertContext.Provider>
  );
};
