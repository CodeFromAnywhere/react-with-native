import { AugmentedAnyModelType, ModelLocation, Storing } from "model-types";
/**
 * Three things need to happen in order to store an item
 *
 * 1) keys that can be inferred from the file path are omitted
 * 2) referenced data is omitted
 * 3) calculated data is omitted
 */
export declare const makeStoringItem: <T extends AugmentedAnyModelType>(item: T) => Storing<T>;
export declare const getItemModelLocation: <T extends {
    [key: string]: any;
}>(item: T) => ModelLocation;
//# sourceMappingURL=storing-items.d.ts.map