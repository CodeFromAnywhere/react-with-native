# Store

These 164 lines of code without dependencies make it possible to get a simple localStorage/asyncStorage-based and fully typed redux replacement with global persisted storage by default for react and react-native apps.

Every key has its own context so you won't get too many rerenders.

This is not as powerful as redux itself (you can't define custom selectors, so rerenders will happen in all components where you use the same key), but compared to bare redux, there is way less boilerplate and it's fully typed out of the box.

I think that especially for apps with little state this could be a very good choice, and because we have tools like React Query now, most apps won't need a lot of global persisted state anymore.

## Installation

```bash
yarn add react-with-native-store
```

for expo, also install this:

```
yarn add @react-native-async-storage/async-storage
```

For bare react-native, also follow [these instructions](https://react-native-async-storage.github.io/async-storage/docs/install/)

## Usage

First create a wrapper and save it somewhere

```tsx
import { createStoreProvider, createUseStore } from "react-with-native-store";

type StoreType = {
  name: string | null;
  email: string | null;
};

export const initialValues: StoreType = {
  name: null,
  email: null,
};

export const StoreProvider = createStoreProvider({ initialValues });
export const useStore = createUseStore(initialValues);
export default useStore;
```

Then wrap your app in the StoreProvider

```tsx
import { StoreProvider } from "../store";

const App = () => (
  <StoreProvider>
    {/* Other components */}
    <Component />
  </StoreProvider>
);
```

Finally, you can use useStore everywhere!

```tsx
import useStore from "../store";

const YourComponent = () => {
  const [name, setName] = useStore("name");

  // your code
};
```

Enjoy!
