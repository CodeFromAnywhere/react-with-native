import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { SwitchProps } from "react-native";
export declare type ToggleType = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> & {
    onChange: (value: boolean) => void;
    native?: Omit<SwitchProps, "onValueChange">;
};
//# sourceMappingURL=Toggle.type.d.ts.map