# React With Native

### Why?

1. To solve react-native-web's severe limitations.
2. To share 90% of your cosebase between your next.js app and react native app but still have the full functionality of Next.js and React Native while keeping their bundles as small as possible.
3. To provide an easy way to extend your React (Next.js) app so it can also be rendered in React Native.
4. Because most companies come from the react side and want an app later, not the other way around.

### Libraries

- `react-with-native`: the core elements
- `react-with-native-*`: many components
- `react-with-native-form`: form builder
- `react-with-native-*-input`: input components that can be attached to the form builder

### NB

- Tailwind is a peer dependency! Without it, `react-with-native` still works, but lots of components won't have a default styling and you need to supply your own classNames via `replaceClassName`
