import { ChildrenType, Item } from "./types";
declare const SelectMenu: <T extends unknown>({ options, value, onChange, children, className, }: {
    options: Item<T>[];
    value: Item<T>;
    onChange?: ((value: Item<T>) => void) | undefined;
    children: ChildrenType<T>;
    className?: string | undefined;
}) => JSX.Element | null;
export default SelectMenu;
//# sourceMappingURL=SelectMenu.d.ts.map