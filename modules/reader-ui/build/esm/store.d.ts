/// <reference types="react" />
export declare const useStore: <K_1 extends "menu.isMobileMenuEnabled" | "menu.expanded" | "menu.showMenu">(key: K_1) => import("react-with-native-store").UseStoreResult<{
    "menu.expanded": import("nested-menu").ExpandedObject;
    "menu.showMenu": boolean;
    "menu.isMobileMenuEnabled": boolean;
}[K_1]>, StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element;
