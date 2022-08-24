import { ToastOptions as ToastifyToastOptions } from "react-toastify";
import * as Notifications from "expo-notifications";

export type ToastOptions = ToastifyToastOptions;

export const toast = (
  content: { title: string; body: string },
  options?: ToastOptions
) => {
  Notifications.scheduleNotificationAsync({
    content,
    trigger: { seconds: 1 },
  });
};

export const ToastContainer = () => {
  return null;
};
