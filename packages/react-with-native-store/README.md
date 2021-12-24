# useStore

Simple localStorage/asyncStorage-based and fully typed redux replacement with global persisted storage by default for react and react-native apps.

## Installation

`yarn add react-with-native-store`

for expo, also install this:

`yarn add @react-native-async-storage/async-storage`

for bare react-native, also follow [these instructions](https://react-native-async-storage.github.io/async-storage/docs/install/)

## Usage

First create a wrapper and save it somewhere

```
import { StoreOptions, Keys, useStoreCreator } from 'react-with-native-store';
import { Address, Cart } from '../types/types';//your types

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



```

It can be used like this

```
import useStore from "..";

const YourComponent = () => {
  const [account, setAccount] = useStore('account');

  // your code
};
```
