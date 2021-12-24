# react-with-native

- Exposes all html elements with their most suitable react-native counterpart, e.g. `button, div, strong, label, p, h1, h2`, etc.
- Exposes all `react-native` components with their most suitable html counterpart, e.g. `View, Text, TextInput, Pressable`, etc.
- Exposes `useNavigation` and `useRouter` which are 1:1 wrappers around `useNavigation` from `react-navigation` and `useRouter` from `next/router` respectively, and provide the most suitable result on web and native.
- Exposes `useStore` which is a simple redux replacement (see [docs](./USESTORE.md))
