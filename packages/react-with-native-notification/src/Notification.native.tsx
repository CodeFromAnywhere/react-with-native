import { ToastOptions } from "react-toastify";
import * as Notifications from "expo-notifications";

export const toast = (
  content: { title: string; body: string },
  options?: ToastOptions<{}>
) => {
  Notifications.scheduleNotificationAsync({
    content,
    trigger: {
      seconds: 0,
    },
  });
};

export const ToastContainer = () => {
  return null;
};

export type { ToastOptions };
