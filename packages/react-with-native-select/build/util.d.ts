import { Item } from "./types";
export declare const getRealValue: <T extends unknown>({ value, selectFirstOption, options, title, }: {
    title: string;
    options: Item<T>[];
    value?: Item<T> | null | undefined;
    selectFirstOption?: boolean | undefined;
}) => Item<T>;
//# sourceMappingURL=util.d.ts.map