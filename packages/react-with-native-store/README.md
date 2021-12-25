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
  getContext,
  UseStoreType,
  getContextProvider,
  contextKey,
} from 'react-with-native-store';
import { Address, Cart, Account } from '../your/types';


//define your default values here
export const defaultValues: StoreType = {
  account: null,
  billingAddress: null,
  cart: null,
  shippingAddress: null,
};

//define your store type here. beware, only keys are callable, subkeys aren't
type StoreType = {
  shippingAddress: Address | null;
  billingAddress: Address | null;
  account: Account | null;
  cart: Cart | null;
};

export const StoreContextProvider = getContextProvider({
  defaultValues,
  baseKey: 'AVDD', //optional
});

const useStore = <K extends Keys<StoreType>>(
  key: K,
  options?: StoreOptions
) => {
  if (!Object.keys(defaultValues).includes(key)) {
    throw new Error(`Using undefined key in useStore: ${key}`);
  }
  const useStoreHook = useContext<UseStoreType<StoreType>>(getContext(key));
  return useStoreHook(key, options);
};


export default useStore;

```

Then wrap your app in the StoreContextProvider

```
import { StoreContextProvider } from 'react-with-native-store';


const App = () => (
  <StoreContextProvider>
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

# To-do

1. Make it possible to only fetch some value from deeper inside one of the objects using an option that takes the result and selects a value from it. The value and dispatch then both adapt to this change.

2. Make it possible to enter any string as key and use a generic to type them, so that you don't have to declare them in a global place. The default value is then assumed to be, and will return 'null'.
