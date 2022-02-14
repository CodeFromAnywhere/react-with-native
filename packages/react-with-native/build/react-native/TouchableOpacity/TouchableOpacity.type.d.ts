import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { GestureResponderEvent, TouchableOpacityProps } from "react-native";
export declare type TouchableOpacityType = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    /**
     * GestureResponderEvent for react native
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | GestureResponderEvent) => void;
    native?: TouchableOpacityProps;
    textClassName?: string;
};
//# sourceMappingURL=TouchableOpacity.type.d.ts.map