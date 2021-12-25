import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { StoreConfig, StoreOptions, Dispatch, Keys } from "./types";
import { setItem, getItem } from "./Util";

const getKey = (key: string, baseKey: string) => `${baseKey}.${key}`;
const contextKey = (key: string) => `${key}Context`;

export type UseStoreType<TStore> = <K extends Keys<TStore>>(
  key: K,
  options?: StoreOptions
) => [TStore[K], Dispatch<TStore[K]>];

const StoreContextProvider = <TStore extends object, K extends Keys<TStore>>({
  DynamicContext,
  children,
  config,
  storeKey,
}: {
  DynamicContext: React.Context<any>;
  children: any;
  config: StoreConfig<TStore>;
  storeKey: K;
}) => {
  const [store, setStore] = useState<TStore[K]>(
    config?.defaultValues[storeKey]
  ); //null or some object or string or whatever
  const baseKey = config?.baseKey || "useStore";

  // On mount, get the current value from storage
  useEffect(() => {
    const fullKey = getKey(storeKey, baseKey);
    getItem(fullKey).then((value) => {
      console.log("Initialized storevalue for ", storeKey);
      setStore(value);
    });
  }, []);

  const defaultValues = config?.defaultValues;

  const useStoreHook: UseStoreType<TStore> = <K2 extends Keys<TStore>>(
    key: K2,
    options?: StoreOptions
  ) => {
    const fullKey = getKey(key, baseKey);

    const defaultValue = defaultValues[key];
    // @ts-ignore
    const value: TStore[K2] =
      options?.return === "dispatch"
        ? null
        : store !== undefined
        ? store
        : defaultValue !== undefined
        ? defaultValue
        : null;

    const dispatch: Dispatch<TStore[K2]> =
      options?.return === "value"
        ? async (_) => {}
        : async (value) => {
            //should do a deep equal here, and only set the store and item if the value actually has changed
            //@ts-ignore
            setStore(value);
            await setItem(fullKey, value);
          };

    return [value, dispatch];
  };

  return (
    <DynamicContext.Provider value={useStoreHook}>
      {children}
    </DynamicContext.Provider>
  );
};

let contexts: { [key: string]: React.Context<any> } = {};

export const getContextProvider =
  <TStore extends object>(config: StoreConfig<TStore>) =>
  ({ children }: { children: any }) => {
    const keys = Object.keys(config.defaultValues) as Keys<TStore>[];

    contexts = keys.reduce((acc, key) => {
      const Context = React.createContext(null);
      return {
        ...acc,
        [contextKey(key)]: Context,
      };
    }, {});

    return keys.reduce((acc, key) => {
      const context = contexts[contextKey(key)];
      return (
        <StoreContextProvider
          config={config}
          storeKey={key}
          DynamicContext={context}
        >
          {acc}
        </StoreContextProvider>
      );
    }, children);
  };

export const getContext = (key: string) => contexts[contextKey(key)];
