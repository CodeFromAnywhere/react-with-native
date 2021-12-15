# react-with-native-notification

Wrapper of react-toastify for web and expo-notifications on iOS and Android

## Installation

For a react project:

`yarn add react-with-native-notification react-toastify`

For a react-native expo project

`expo install react-with-native-notification expo-notifications`

## Usage

In your apps root:

```
import { ToastContainer } from "react-with-native-notification";

# and in somewhere high up your tree:

<ToastContainer />
```

When you want to fire a notification:

```
import { toast } from "react-with-native-notification";

<Button onClick={() => toast("Hello world")}>Click me!</Button>
```
