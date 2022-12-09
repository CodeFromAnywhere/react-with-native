/// <reference types="react" />
import { AlertButton, AlertOptions } from "react-native";
export type AlertState = {
    title: string;
    message?: string | JSX.Element;
    buttons?: AlertButton[];
    options?: AlertOptions;
};
/**
 * Replaces `AlertStatic["alert"]`
 */
export type AlertFn = (title: string, message?: string | JSX.Element, buttons?: AlertButton[], options?: AlertOptions) => void;
//# sourceMappingURL=types.d.ts.map