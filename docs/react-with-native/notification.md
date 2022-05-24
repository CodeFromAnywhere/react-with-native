# Notifications

## `NB: Experimental package!`

`react-with-native-notification` is a wrapper of react-toastify for web and expo-notifications on iOS and Android

## Installation

For a react project:

```bash
yarn add react-with-native-notification react-toastify
```

Also, add this to your root `App.tsx` or `_app.tsx`

```tsx
import "react-toastify/dist/ReactToastify.css";
```

For a react-native expo project

```bash
expo install react-with-native-notification expo-notifications
```

Also, make sure to follow the [installation instructions](https://docs.expo.dev/versions/latest/sdk/notifications/) from the expo docs. You may have to request for permission first. It may not work within expo itself due to permission problems.

## Usage

In your apps root:

```tsx
import { ToastContainer } from "react-with-native-notification";

// and in somewhere high up your tree:

<ToastContainer />;
```

When you want to fire a notification:

```tsx
import { toast } from "react-with-native-notification";

<Button onClick={() => toast("Hello world")}>Click me!</Button>;
```
