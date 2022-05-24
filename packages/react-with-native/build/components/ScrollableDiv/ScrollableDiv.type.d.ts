import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { StyleProp, ViewProps, ViewStyle, ScrollViewProps } from "react-native";
export declare type ScrollableDivType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    native?: ViewProps | ScrollViewProps;
    textClassName?: string;
    scroll?: boolean;
    style?: StyleProp<ViewStyle>;
};
//# sourceMappingURL=ScrollableDiv.type.d.ts.map