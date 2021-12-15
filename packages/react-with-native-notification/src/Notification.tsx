import { toast as toastifyToast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export { ToastContainer } from "react-toastify";

/**
 * title is only shown on native
 */
export const toast = (
  message: { title: string; body: string },
  options: ToastOptions<{}>
) => {
  toastifyToast(message.body, options);
};
