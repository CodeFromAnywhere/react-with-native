import { toast as toastifyToast, ToastOptions } from "react-toastify";
import { ToastContainer } from "react-toastify";

/**
 * title is only shown on native
 */
export const toast = (
  message: { title: string; body: string },
  options?: ToastOptions<{}>
) => {
  toastifyToast(message.body, options);
};

export { ToastContainer };

export type { ToastOptions };
