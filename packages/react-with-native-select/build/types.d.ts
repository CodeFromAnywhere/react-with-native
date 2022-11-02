import type { MouseEvent } from "react";
import type { ActionSheetIOSOptions } from "react-native";
export declare type Item<T> = {
    value: T;
    label: string;
};
export declare type ID = string | number | undefined;
export declare type ChildrenType<T> = ({ onClick, className, value, }: {
    onClick: (e?: MouseEvent<Element>, id?: ID) => void;
    className?: string;
    value: Item<T>;
}) => any;
export declare type SelectProps<T> = {
    containerClassName?: string;
    /**
     * only for web (uses datalist html element)
     */
    autoSuggest?: boolean;
    title: string;
    options: Item<T>[];
    onChange?: (value: Item<T> | null) => void;
    value?: Item<T> | null;
    className?: string;
    children?: ChildrenType<T>;
    ios?: ActionSheetIOSOptions;
    selectFirstOption?: boolean;
    /**
     * don't use a placeholder that you give or the default one
     */
    noPlaceholder?: boolean;
    /**
     * works for autosuggest
     */
    placeholder?: string;
};
//# sourceMappingURL=types.d.ts.map