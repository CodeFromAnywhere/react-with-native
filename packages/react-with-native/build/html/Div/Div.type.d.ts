import { DetailedHTMLProps, HTMLAttributes, PropsWithoutRef, RefAttributes } from "react";
import type { StyleProp, ViewProps, ViewStyle } from "react-native";
export declare type DivType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    native?: ViewProps;
    scroll?: boolean;
    textClassName?: string;
    style?: StyleProp<ViewStyle>;
};
export declare type FinalDivType<T> = PropsWithoutRef<DivType> & RefAttributes<T>;
//# sourceMappingURL=Div.type.d.ts.map