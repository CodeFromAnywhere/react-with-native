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
