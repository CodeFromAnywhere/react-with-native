import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import type { TextInputProps } from "react-native";
export declare type SelectOptionType = {
    value: string | number;
    label: string | number;
};
export declare type SelectType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
    native?: TextInputProps;
    options: SelectOptionType[];
    customOptionSelector?: (option: SelectOptionType) => JSX.Element;
};
//# sourceMappingURL=Select.type.d.ts.map