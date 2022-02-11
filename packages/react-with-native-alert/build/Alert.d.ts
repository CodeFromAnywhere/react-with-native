import type { AlertStatic } from "react-native";
declare type Parameters<T> = T extends (...args: infer T) => any ? T : never;
declare type AlertPropsArray = Parameters<AlertStatic["alert"]>;
export declare const Alert: ({ props: [title, message, buttons, options], }: {
    props: AlertPropsArray;
}) => JSX.Element;
export declare const alert: AlertStatic["alert"];
export default alert;
//# sourceMappingURL=Alert.d.ts.map