# React with native alert

react-with-native-alert (ui-es5 operation)


## Alert

TODO: NB: seems not to work right now in a new template! Fix it




## Docs

- [README](#readme)



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


# Api reference

## <AlertProvider />

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

