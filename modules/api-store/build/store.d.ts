/// <reference types="react" />
export declare const apiStoreInitialValues: {
    "api.authToken": string;
};
/**
 * This is only needed if api storage is ALL you need.
 */
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends "api.authToken">(key: K_1) => import("react-with-native-store").UseStoreResult<{
    "api.authToken": string;
}[K_1]>;
//# sourceMappingURL=store.d.ts.map