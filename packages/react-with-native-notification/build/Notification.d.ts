/// <reference types="react" />
import { ToastOptions as ToastifyToastOptions } from "react-toastify";
export declare type ToastOptions = ToastifyToastOptions;
/**
 * title is only shown on native
 */
export declare const toast: (message: {
    title: string;
    body: string;
}, options?: ToastOptions) => void;
export declare const ToastContainer: import("react").FC<import("react-toastify").ToastContainerProps>;
//# sourceMappingURL=Notification.d.ts.map