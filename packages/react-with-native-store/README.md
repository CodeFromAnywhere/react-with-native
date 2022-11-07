# React with native store

react-with-native-store (ui-es5 operation)



# Outline

## Docs

- [README](#readme)
- [Usage in monorepo](#usage-in-monorepo)

## Functions

- [createStoreProvider](#createStoreProvider)
- [createStore](#createStore)
- [createUseStore](#createUseStore)
- [getItem](#getItem)
- [setItem](#setItem)

## Variables

- [createStoreProvider](#createstoreprovider)
- [createStore](#createstore)
- [createUseStore](#createusestore)
- [getItem](#getitem)
- [setItem](#setitem)



# Docs

## README

### Store

These 164 lines of code without dependencies make it possible to get a simple localStorage/asyncStorage-based and fully typed redux replacement with global persisted storage by default for react and react-native apps.

Every key has its own context so you won't get too many rerenders.

This is not as powerful as redux itself (you can't define custom selectors, so rerenders will happen in all components where you use the same key), but compared to bare redux, there is way less boilerplate and it's fully typed out of the box.

I think that especially for apps with little state this could be a very good choice, and because we have tools like React Query now, most apps won't need a lot of global persisted state anymore.


#### Installation

```bash
yarn add react-with-native-store
```

for expo, also install this:

```
yarn add @react-native-async-storage/async-storage
```

For bare react-native, also follow [these instructions](https://react-native-async-storage.github.io/async-storage/docs/install/)


#### Usage

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


## Usage in monorepo

If you are working with a monorepo, here are some tips for you. I had to learn it the hard way and after a lot of trial and error I came to this conclusion.


### Don't always use the hook/Provider directly

It can be a hassle having to use 17 different providers and hooks if you have smaller parts of your complete store in accross different packages. It's better only to use a single provider in your app, that combines all different stores you created across different packages. You should therefore not import the provider 17 times, but just:

- combine `XyzStoreType` of all your different packages into the complete `StoreType`
- combine all `xyzInitialValues` of all yoiur different packages into the complete `initialValues`
- use the result of the above with `createStore` to get your `useStore` and `StoreProvider`
- In your app, you can just use one hook and one provider. Much easier!


### Declare your storage where you need 'em

- In the different packages you don't need to provide the provider there, as long as you have the combined provider all the way up your app. In the different packages, you can create another `useStore` which is simply a subset of the complete store, and is only used in this package


# Functions

## createStoreProvider()

Function to create the StoreProvider

NB: this function uses a local variable on the main scope of javascript in order to create the Context components dynamically. Beware!


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## createStore()

One function is all you need to make a new store!

Example:


```ts

import { createStore } from "react-with-native-store";
import { TypeA, TypeB } from "your-types";

export const writerInitialValues: {
itemA: TypeA;
itemB: TypeB;
} = {
itemA: "",
itemB: {},
};
export const { useStore, StoreProvider } = createStore(writerInitialValues);


```

Simple as pie 🍰


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { StoreProvider: {  }, <br />useStore: {  }, <br /> }   |    |



## createUseStore()

Function to create a hook for accessing the store


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## getItem()

If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function


| Input      |    |    |
| ---------- | -- | -- |
| key | string |  |
| **Output** |    |    |



## setItem()

If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function

BEWARE! Updating this won't update your react components!


| Input      |    |    |
| ---------- | -- | -- |
| key | string |  |,| value | {  } |  |
| **Output** |    |    |


# Variables

## 📄 createStoreProvider (exported const)

Function to create the StoreProvider

NB: this function uses a local variable on the main scope of javascript in order to create the Context components dynamically. Beware!


## 📄 createStore (exported const)

One function is all you need to make a new store!

Example:


```ts

import { createStore } from "react-with-native-store";
import { TypeA, TypeB } from "your-types";

export const writerInitialValues: {
itemA: TypeA;
itemB: TypeB;
} = {
itemA: "",
itemB: {},
};
export const { useStore, StoreProvider } = createStore(writerInitialValues);


```

Simple as pie 🍰


## 📄 createUseStore (exported const)

Function to create a hook for accessing the store


## 📄 getItem (exported const)

If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function


## 📄 setItem (exported const)

If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function

BEWARE! Updating this won't update your react components!

