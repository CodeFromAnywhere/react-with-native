import type { MouseEvent } from "react";
import type { ActionSheetIOSOptions } from "react-native";
export declare type Item<T> = {
    value: T;
    label: string;
    icon?: any;
    onClick?: (id?: ID) => void;
};
export declare type ID = string | number | undefined;
export declare type ChildrenType<T> = ({ onClick, className, value, }: {
    onClick: (e?: MouseEvent<Element>, id?: ID) => void;
    className?: string;
    value: Item<T>;
}) => any;
export declare type SelectProps<T, TMultiple extends boolean = false> = {
    containerClassName?: string;
    title: string;
    options: Item<T>[];
    onChange?: (value: (TMultiple extends true ? Item<T>[] : Item<T>) | null) => void;
    value?: TMultiple extends true ? Item<T>[] : Item<T> | null;
    multiple?: TMultiple;
    className?: string;
    children?: ChildrenType<T>;
    ios?: ActionSheetIOSOptions;
    hasReset?: boolean;
    selectFirstOption?: boolean;
    id?: ID;
};
//# sourceMappingURL=types.d.ts.map