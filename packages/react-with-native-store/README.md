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

import { useContext } from 'react';
import {
  StoreOptions,
  Keys,
  StoreContext,
  UseStoreType,
} from 'react-with-native-store';
import { Address, Cart } from '../types/types';


const defaultValues: StoreType = {
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
};

const useStore = <K extends Keys<StoreType>>(
  key: K,
  options?: StoreOptions
) => {
  const useStoreHook = useContext<UseStoreType<StoreType>>(StoreContext);
  return useStoreHook(key, options);
};

export default useStore;

```

Then wrap your app in the StoreContextProvider

```
import { StoreContextProvider } from 'react-with-native-store';


const App = () => (
  <StoreContextProvider config={{ defaultValues }}>
    {/* Other components */}
    <Component />
  </StoreContextProvider>
);

```

Finally, you can use useStore everywhere!

```
import useStore from "./your/wrapper/file/location";

const YourComponent = () => {
const [account, setAccount] = useStore('account');

// your code
};

```

Enjoy!
