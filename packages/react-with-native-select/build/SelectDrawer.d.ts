import { ChildrenType, ID, Item } from "./types";
declare const SelectDrawer: <T extends unknown>({ options, value, onChange, title, children, className, hasReset, id, }: {
    value: Item<T>;
    options: Item<T>[];
    onChange?: ((value: Item<T> | null) => void) | undefined;
    title: string;
    children?: ChildrenType<T> | undefined;
    className?: string | undefined;
    hasReset?: boolean | undefined;
    id?: ID;
}) => JSX.Element;
export default SelectDrawer;
//# sourceMappingURL=SelectDrawer.d.ts.map