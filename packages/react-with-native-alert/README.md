# React with native alert

react-with-native-alert (`OperationClassification` ui-cjs)


## Alert

TODO: NB: seems not to work right now in a new template! Fix it




# Docs

<details><summary>README.md</summary>
    
  # Alert

## `NB: Experimental package!`

## Setup

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

## Usage

```tsx
import { useAlert } from "react-with-native-alert";

const YourPage = () => {
  const alert = useAlert();

  return <button onClick={() => alert("Hello")}>Click me</button>;
};
```

  </details>

# Api reference

## `<AlertProvider />`

| Input      |    |    |
| ---------- | -- | -- |
| { children } | { children: {  }, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## 📄 AlertProvider (exported const)

## useAlert()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 useAlert (exported const)

# Internal

<details><summary>Show internal (1)</summary>
    
  # 📄 AlertContext (exported const)


  </details>

