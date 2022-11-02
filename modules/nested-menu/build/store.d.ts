export declare type ExpandedObject = {
    [queryPath: string]: boolean;
};
declare type StoreType = {
    "menu.expanded": ExpandedObject;
};
export declare const nestedMenuStoreInitialValues: StoreType;
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends "menu.expanded">(key: K_1) => import("react-with-native-store").UseStoreResult<StoreType[K_1]>;
export {};
//# sourceMappingURL=store.d.ts.map