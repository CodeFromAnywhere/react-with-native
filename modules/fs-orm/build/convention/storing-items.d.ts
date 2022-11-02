import { ModelLocation, Storing } from "model-types";
export declare const makeStoringItem: <T extends {
    [key: string]: any;
}>(item: T) => Storing<T>;
export declare const getItemModelLocation: <T extends {
    [key: string]: any;
}>(item: T) => ModelLocation;
//# sourceMappingURL=storing-items.d.ts.map