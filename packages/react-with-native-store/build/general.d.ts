/// <reference types="react" />
export declare type StoreConfig<T extends object> = {
    initialValues: T;
    baseKey?: string;
    debug?: boolean;
};
declare type Keys<T> = Extract<keyof T, string>;
export declare type UseStoreType<TStore> = <K extends Keys<TStore>>(key: K) => [TStore[K], (value: TStore[K]) => Promise<void>, {
    hydrated: boolean;
}];
export declare const createStoreProvider: <TStore extends object>(config: StoreConfig<TStore>) => ({ children }: {
    children: any;
}) => JSX.Element;
export declare const createUseStore: <TState extends object>(initialValues: TState) => <K extends Extract<keyof TState, string>>(key: K) => [TState[K], (value: TState[K]) => Promise<void>, {
    hydrated: boolean;
}];
export {};
//# sourceMappingURL=general.d.ts.map