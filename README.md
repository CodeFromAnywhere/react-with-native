# React With Native

### Why?

1. To solve react-native-web's severe limitations.
2. To share 90% of your cosebase between your next.js app and react native app but still have the full functionality of Next.js and React Native while keeping their bundles as small as possible.
3. To provide an easy way to extend your React (Next.js) app so it can also be rendered in React Native.
4. Because most companies come from the react side and want an app later, not the other way around.

### Libraries

### React with native core and separate libraries:

- `react-with-native`: the core elements [docs](./packages/react-with-native)
- `react-with-native-alert`: alert component [docs](./packages/react-with-native-alert)
- `react-with-native-modal`: modal component [docs](./packages/react-with-native-modal)
- `react-with-native-notification`: notification component [docs](./packages/react-with-native-notification)
- `react-with-native-rte`: rte component [docs](./packages/react-with-native-rte)
- `react-with-native-select`: select component [docs](./packages/react-with-native-alert)
- `react-with-native-store`: redux replacement [docs](./packages/react-with-native-store)

### Form builder with input elements:

- `react-with-native-form`: form builder [docs](./packages/react-with-native-form)
- `react-with-native-date-input`: date input [docs](./packages/react-with-native-date-input)
- `react-with-native-map-input`: map input [docs](./packages/react-with-native-map-input)
- `react-with-native-password-input`: password input [docs](./packages/react-with-native-password-input)
- `react-with-native-text-input`: text input [docs](./packages/react-with-native-text-input)
- `react-with-native-toggle-input`: toggle input [docs](./packages/react-with-native-toggle-input)

### CLI

- `react-with-native-cli`: cli for fast project transformation [docs](./packages/react-with-native-cli)

### Examples

- React Next.js project [docs](./packages/react-with-native-next-example)
- React Native Expo project [docs](./packages/react-with-native-expo-example)
- Shared example code [docs](./packages/react-with-native-example-shared)

### NB

- Tailwind is a peer dependency! Without it, `react-with-native` still works, but lots of components won't have a default styling and you need to supply your own classNames via `replaceClassName`
