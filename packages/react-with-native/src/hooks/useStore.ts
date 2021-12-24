import { StoreConfig, StoreOptions, Keys } from "./useStore.type";
import { setItem, getItem } from "./useStore.util";

const getKey = (key: string, baseKey: string) => `${baseKey}.${key}`;

const useStoreCreator =
  <T extends unknown>(config?: StoreConfig<T>) =>
  async <K extends Keys<T>>(key: K, options?: StoreOptions) => {
    const baseKey = config?.baseKey || "useStore";
    const fullKey = getKey(key, baseKey);
    const rawValue = await getItem(fullKey);
    const value: T[K] =
      rawValue !== undefined
        ? rawValue
        : config?.defaultValues[key] !== undefined
        ? config.defaultValues[key]
        : undefined;

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
