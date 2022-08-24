import {
  toast as toastifyToast,
  ToastOptions as ToastifyToastOptions,
} from "react-toastify";
import { ToastContainer as ToastifyToastContainer } from "react-toastify";

export type ToastOptions = ToastifyToastOptions;
/**
 * title is only shown on native
 */
export const toast = (
  message: { title: string; body: string },
  options?: ToastOptions
) => {
  toastifyToast(message.body, options);
};

export const ToastContainer = ToastifyToastContainer;
