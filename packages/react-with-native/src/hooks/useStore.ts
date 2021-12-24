import { useEffect, useState } from "react";
import { StoreConfig, StoreOptions, AnyObject, Keys } from "./useStore.type";
import { setItem, getItem } from "./useStore.util";

const getKey = (key: string, baseKey: string) => `${baseKey}.${key}`;

const useStoreCreator =
  <T extends AnyObject>(config?: StoreConfig<T>) =>
  <K extends Keys<T>>(key: K, options?: StoreOptions) => {
    const [rawValue, setRawValue] = useState();

    const baseKey = config?.baseKey || "useStore";
    const fullKey = getKey(key, baseKey);

    useEffect(() => {
      getItem(fullKey).then((value) => {
        setRawValue(value);
      });
    }, [key]);

    const defaultValues = config?.defaultValues;

    //@ts-ignore
    const value: typeof defaultValues extends undefined ? T[K] | null : T[K] =
      rawValue !== undefined
        ? rawValue
        : config?.defaultValues[key] !== undefined
        ? config.defaultValues[key]
        : null;

    const dispatch = (value: T[K]) => setItem(fullKey, value);

    if (options?.return === "value") {
      return [value];
    } else if (options?.return === "dispatch") {
      return [dispatch];
    } else {
      return [value, dispatch];
    }
  };
export default useStoreCreator;
