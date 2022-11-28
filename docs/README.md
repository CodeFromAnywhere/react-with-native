---
headerBig: true
headerTitle: React with Native
headerSubTitle: The best way to build fully cross-platform apps!
headerImage: ![](./header.png)
---

# React with Native

## Why?

1. To solve `react-native-web](https://necolas.github.io/react-native-web/)'s severe limitations.
2. To share 90% of your cosebase between your next.js app and react native app but still have the full functionality of Next.js and React Native while keeping their bundles as small as possible.
3. To provide an easy way to extend your React (Next.js) app so it can also be rendered in React Native.
4. Because most companies come from the react side and want an app later, not the other way around.

## How?

We simply create wrappers for all html tags and react(native) components to make them compatible with the other platform. We use `.native.tsx`, `.ios.tsx` and `.android.tsx` files to let metro bundler import the correct files.

## Demo

Check [our demo](https://demo.reactwithnative.com) here. There is almost no app-specific code! This code would run on react as well as react-native.
