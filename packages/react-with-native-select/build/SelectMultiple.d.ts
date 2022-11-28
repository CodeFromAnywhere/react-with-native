import { Item } from "./types";
export declare type SelectMultipleInputProps<T extends unknown> = {
    value: Item<T | null>[];
    className?: string;
    onChange: (value: Item<T | null>[]) => void;
    uniqueFieldId?: string;
    autoSuggest?: boolean;
    title?: string;
    options: Item<T | null>[];
    placeholder?: string;
    noPlaceholder?: boolean;
};
export declare const SelectMultipleInput: <T extends unknown>(props: SelectMultipleInputProps<T>) => JSX.Element;
//# sourceMappingURL=SelectMultiple.d.ts.map