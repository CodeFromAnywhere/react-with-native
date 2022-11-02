export declare type StoreConfig<T extends object> = {
    /**
     * If given, this will be the initial value
     */
    initialValues: T;
    /**
     If given, this will be the base-key for your storage item.  If not provided, there will be no base-key.
     
     Please make sure your keys are not used by anything else to prevent unintended behavior!
  
     The storage key will become {baseKey}.{yourKey}
  
     DEPRECATED: I think it's better to just manually put a dot in your name. This only hides away the actual implementation, a baseKey isn't needed!
     */
    baseKey?: string;
    debug?: boolean;
};
declare type Keys<T> = Extract<keyof T, string>;
export declare type UseStoreType<TStore> = <K extends Keys<TStore>>(key: K) => UseStoreResult<TStore[K]>;
export declare type UseStoreResult<T> = [
    T,
    (value: T) => Promise<void>,
    {
        hydrated: boolean;
    }
];
/**
 * Function to create the StoreProvider
 *
 * NB: this function uses a local variable on the main scope of javascript in order to create the Context components dynamically. Beware!
 */
export declare const createStoreProvider: <TStore extends object>(config: StoreConfig<TStore>) => ({ children }: {
    children: any;
}) => JSX.Element;
/**
 * Function to create a hook for accessing the store
 */
export declare const createUseStore: <TStore extends object>(initialValues: TStore) => <K extends Extract<keyof TStore, string>>(key: K) => UseStoreResult<TStore[K]>;
/**

One function is all you need to make a new store!

Example:


```ts

import { createStore } from "react-with-native-store";
import { TypeA, TypeB } from "your-types";

export const writerInitialValues: {
  itemA: TypeA;
  itemB: TypeB;
} = {
  itemA: "",
  itemB: {},
};
export const { useStore, StoreProvider } = createStore(writerInitialValues);


```

Simple as pie 🍰

 */
export declare const createStore: <K extends object>(initialValues: K) => {
    StoreProvider: ({ children }: {
        children: any;
    }) => JSX.Element;
    useStore: <K_1 extends Extract<keyof K, string>>(key: K_1) => UseStoreResult<K[K_1]>;
};
export {};
//# sourceMappingURL=general.d.ts.map