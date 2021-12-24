# useStore

Simple localStorage/asyncStorage-based and fully typed redux replacement with global persisted storage by default for react and react-native apps.

## Installation

`yarn add react-with-native`

for react native, also install this:

`yarn add @react-native-async-storage/async-storage`

## Usage

First create a wrapper and save it somewhere

```

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

function useStore<K extends Keys<StoreType>>(key: K, options?: StoreOptions) {
  return useStoreCreator<StoreType>({
    defaultValues,
  })(key, options);
}

export const Component = () => {
  const [cart, setCart] = useStore("cart");
};


```

It can be used like this

```
import useStore from "..";

const YourComponent = () => {
  const [account, setAccount] = useStore('account');

  // your code
};
```
