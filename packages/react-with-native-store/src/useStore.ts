import { useEffect, useState } from "react";
import { StoreConfig, StoreOptions, Dispatch, Keys } from "./useStore.type";
import { setItem, getItem } from "./useStore.util";

const getKey = (key: string, baseKey: string) => `${baseKey}.${key}`;

//problem: if we set the value somewhere else, it doesn't get updated. It only gets updated if you set it yourself.
// a solution would be to select the data every render. maybe it's already the case?
const useStoreCreator =
  <TStore>(config?: StoreConfig<TStore>) =>
  <K extends Keys<TStore>>(
    key: K,
    options?: StoreOptions
  ): [TStore[K] | null, Dispatch<TStore[K]>] => {
    // console.log("running useStore");
    const [rawValue, setRawValue] = useState<any>();

    const baseKey = config?.baseKey || "useStore";
    const fullKey = getKey(key, baseKey);

    useEffect(() => {
      // console.log("running useEffect", key);
      getItem(fullKey).then((value) => {
        setRawValue(value);
      });
    }, [key]);

    const defaultValues = config?.defaultValues;

    //@ts-ignore
    const value: typeof defaultValues extends undefined
      ? TStore[K] | null
      : TStore[K] =
      options?.return === "dispatch"
        ? null
        : rawValue !== undefined
        ? rawValue
        : config?.defaultValues[key] !== undefined
        ? config.defaultValues[key]
        : null;

    const dispatch: Dispatch<TStore[K]> =
      options?.return === "value"
        ? async (_) => {}
        : async (value) => {
            //NB: Also return new value that we set
            // console.log(`Rendering dispatch`, { newValue: value });
            setRawValue(value);
            await setItem(fullKey, value);
          };

    return [value, dispatch];
  };
export default useStoreCreator;

// testing purposes

// const defaultValues: StoreType = {
//   cart: null,
//   currentTaxonCode: null,
//   invoiceAddress: null,
//   shippingAddress: null,
// };

// type Address = {
//   a: string;
//   b: string;
//   c: number;
// };

// type Cart = {
//   x: string;
//   y: string;
//   z: number;
// };

// type StoreType = {
//   shippingAddress: Address | null;
//   invoiceAddress: Address | null;
//   cart: Cart | null;
//   currentTaxonCode: string | null;
// };

// function useStore<K extends Keys<StoreType>>(key: K, options?: StoreOptions) {
//   return useStoreCreator<StoreType>({
//     defaultValues,
//   })(key, options);
// }

// export const Component = () => {
//   const [cart, setCart] = useStore("cart");
// };
