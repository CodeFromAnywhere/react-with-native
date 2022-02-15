import { Item } from "./types";
export default function SelectDropDown<T>({ title, value, onChange, options, className, children, }: {
    title?: string;
    value: Item<T>;
    onChange?: (value: Item<T>) => void;
    options: Item<T>[];
    className?: string;
    children?: any;
}): JSX.Element;
//# sourceMappingURL=SelectDropdown.d.ts.map