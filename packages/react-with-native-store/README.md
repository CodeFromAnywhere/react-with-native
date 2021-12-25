# react-with-native-store

These 163 lines of code without dependencies make it possible to get a simple localStorage/asyncStorage-based and fully typed redux replacement with global persisted storage by default for react and react-native apps.

Every key has its own context so you won't get too many rerenders.

This is not as powerful as redux itself (you ca't define custom selectors, so rerenders will happen in all components where you use the same key), but compared to bare redux, there is way less boilerplate and it's fully typed out of the box.

I think that especially for apps with little state this could be a very good choice, and because we have tools like React Query now, most apps won't need a lot of global persisted state anymore.

# To-do

There are a few things I would like to add in the future, but I don't know yet how easy it will be. If you have any other ideas or would like to contribute, don't hestitate to contact me.

1. Make it possible to only fetch some value from deeper inside one of the objects using an option that takes the result and selects a value from it. The value and dispatch then both adapt to this change.

2. Make it possible to enter any string as key and use a generic to type them, so that you don't have to declare them in a global place. The default value is then assumed to be, and will return 'null'.

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
