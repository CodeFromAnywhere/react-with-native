import * as React from "react";
import { useEffect, useState, createContext } from "react";
import { StoreConfig, StoreOptions, Dispatch, Keys } from "./types";
import { setItem, getItem } from "./Util";

const getKey = (key: string, baseKey: string) => `${baseKey}.${key}`;

export const StoreContext = createContext<any>(null);

type UseStoreType<TStore> = <K extends Keys<TStore>>(
  key: K,
  options?: StoreOptions
) => [TStore[K] | null, Dispatch<TStore[K]>];

export const StoreContextProvider = <TStore extends object>({
  children,
  config,
}: {
  children: any;
  config: StoreConfig<TStore>;
}) => {
  const [storeInitialized, setStoreInitialized] = useState(false);
  const [store, setStore] = useState<TStore>(config?.defaultValues);
  const baseKey = config?.baseKey || "useStore";

  // On mount, get the current value from storage
  useEffect(() => {
    Object.keys(config.defaultValues).map((key) => {
      const fullKey = getKey(key, baseKey);

      getItem(fullKey).then((value) => {
        setStore((store) => ({ ...store, [key]: value }));
      });
    });
  }, []);

  const useStore: UseStoreType<TStore> = <K extends Keys<TStore>>(
    key: K,
    options?: StoreOptions
  ) => {
    const fullKey = getKey(key, baseKey);

    const defaultValues = config?.defaultValues;

    //@ts-ignore
    const value: typeof defaultValues extends undefined
      ? TStore[K] | null
      : TStore[K] =
      options?.return === "dispatch"
        ? null
        : store[key] !== undefined
        ? store[key]
        : config?.defaultValues[key] !== undefined
        ? config.defaultValues[key]
        : null;

    const dispatch: Dispatch<TStore[K]> =
      options?.return === "value"
        ? async (_) => {}
        : async (value) => {
            //NB: Also return new value that we set
            // console.log(`Rendering dispatch`, { newValue: value });
            setStore((store) => ({ ...store, [key]: value }));
            await setItem(fullKey, value);
          };

    return [value, dispatch];
  };

  return (
    <StoreContext.Provider value={useStore}>{children}</StoreContext.Provider>
  );
};
