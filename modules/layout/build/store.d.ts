/// <reference types="react" />
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends keyof {
    "menu.expanded": import("nested-menu").ExpandedObject;
    "menu.showMenu": boolean;
    "menu.isMobileMenuEnabled": boolean;
}>(key: K_1) => import("react-with-native-store").UseStoreResult<{
    "menu.expanded": import("nested-menu").ExpandedObject;
    "menu.showMenu": boolean;
    "menu.isMobileMenuEnabled": boolean;
}[K_1]>;
//# sourceMappingURL=store.d.ts.map