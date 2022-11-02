# React with native alert

react-with-native-alert (ui-es5 operation)



# Outline

## Docs

- [README](#readme)

## Functions

- [AlertProvider](#AlertProvider)
- [useAlert](#useAlert)

## Variables

- [AlertContext](#alertcontext)
- [AlertProvider](#alertprovider)
- [useAlert](#usealert)



# Docs

## README

### Alert

#### `NB: Experimental package!`

#### Setup

```bash
yarn add react-with-native-alert
```

On react

```bash
yarn add @headlessui/react
```

Then, wrap your app in the `AlertProvider`.

```tsx
import { AlertProvider } from "react-with-native-alert";

<AlertProvider>{... your app ...}</AlertProvider>
```


#### Usage

```tsx
import { useAlert } from "react-with-native-alert";

const YourPage = () => {
  const alert = useAlert();

  return <button onClick={() => alert("Hello")}>Click me</button>;
};
```


# Functions

## AlertProvider

### Parameters (1)

#### Parameter 1: { children }: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| children  | object |  |



## useAlert

### Returns: object

# Variables

## AlertContext (exported const)

## AlertProvider (exported const)

## useAlert (exported const)

