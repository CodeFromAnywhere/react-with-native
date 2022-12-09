import * as React from "react";
import { AlertFn } from "./types";

export const AlertContext = React.createContext<AlertFn | null>(null);

export const useAlert = () => {
  const alert = React.useContext(AlertContext);
  return alert;
};
