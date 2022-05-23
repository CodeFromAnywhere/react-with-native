import { Alert, AlertStatic } from "react-native";
import { AlertContext } from "./Alert";

export const AlertProvider = ({ children }: { children: any }) => {
  const alert: AlertStatic["alert"] = Alert.alert;

  console.log({ children });
  return (
    <AlertContext.Provider value={alert}>{children}</AlertContext.Provider>
  );
};
