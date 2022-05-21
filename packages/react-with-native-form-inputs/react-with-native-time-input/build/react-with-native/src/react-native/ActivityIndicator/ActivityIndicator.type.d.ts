import { ViewProps } from "react-native";
export declare type ActivityIndicatorType = {
    /**
     * Whether to show the indicator (true, the default) or hide it (false).
     */
    animating?: boolean | undefined;
    /**
     * The foreground color of the spinner (default is gray).
     */
    color?: string | undefined;
    /**
     * Whether the indicator should hide when not animating (true by default).
     */
    hidesWhenStopped?: boolean | undefined;
    /**
     * Size of the indicator.
     * Small has a height of 20, large has a height of 36.
     *
     * enum('small', 'large')
     */
    size?: number | "small" | "large" | undefined;
    /**
     * only for react
     */
    className?: string;
} & {
    native?: ViewProps;
};
//# sourceMappingURL=ActivityIndicator.type.d.ts.map