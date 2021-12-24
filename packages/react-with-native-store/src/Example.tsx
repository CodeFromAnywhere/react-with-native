import * as React from "react";
import { useContext } from "react";
import {
  StoreContextProvider,
  StoreContext,
  UseStoreType,
} from "./StoreProvider";
import { StoreOptions, Keys } from "./types";

// testing purposes

const defaultValues: StoreType = {
  cart: null,
  currentTaxonCode: null,
  invoiceAddress: null,
  shippingAddress: null,
};

type Address = {
  a: string;
  b: string;
  c: number;
};

type Cart = {
  x: string;
  y: string;
  z: number;
};

type StoreType = {
  shippingAddress: Address | null;
  invoiceAddress: Address | null;
  cart: Cart | null;
  currentTaxonCode: string | null;
};

const useStore = <K extends Keys<StoreType>>(
  key: K,
  options?: StoreOptions
) => {
  const useStoreHook = useContext<UseStoreType<StoreType>>(StoreContext);
  return useStoreHook(key, options);
};

export default useStore;

const App = () => (
  <StoreContextProvider config={{ defaultValues }}>
    {/* Other components */}
    <Component />
  </StoreContextProvider>
);

export const Component = () => {
  const [cart, setCart] = useStore("cart");

  return <div>Hey, {JSON.stringify(cart)}</div>;
};
