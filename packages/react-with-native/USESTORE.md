# useStore

Simple localStorage/asyncStorage-based and fully typed redux replacement with global persisted storage by default for react and react-native apps.

## Installation

`yarn add react-with-native`

for react native, also install this:

`yarn add @react-native-async-storage/async-storage`

## Usage

First create a wrapper and save it somewhere

```
import { useStoreCreator, StoreOptions } from 'react-with-native';
import { Address, Cart, Account } from '../types/types';

const defaultValues: StoreType = {
  account: null,
  cart: null,
  currentTaxonCode: null,
  invoiceAddress: null,
  shippingAddress: null,
};

type StoreType = {
  shippingAddress: Address | null;
  invoiceAddress: Address | null;
  cart: Cart | null;
  currentTaxonCode: string | null;
  account: Account | null;
};

export default function useStore(key: keyof StoreType, options?: StoreOptions) {
  return useStoreCreator({
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
