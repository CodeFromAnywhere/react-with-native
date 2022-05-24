---
sidebar_position: 1
---

# Introduction

## Why?

1. To solve react-native-web's severe limitations.
2. To share 90% of your cosebase between your next.js app and react native app but still have the full functionality of Next.js and React Native while keeping their bundles as small as possible.
3. To provide an easy way to extend your React (Next.js) app so it can also be rendered in React Native.
4. Because most companies come from the react side and want an app later, not the other way around.

## How?

We simply create wrappers for all html tags and react(native) components to make them compatible with the other platform. We use `.native.tsx`, `.ios.tsx` and `.android.tsx` files to let metro bundler import the correct files.

## Demo

Check [our demo](https://demo.reactwithnative.com) here. It runs on [Sensible](https://sensiblestack.com) using all functionalities of react-with-native. There is almost no app-specific code!

The website can also be shown as a mobile app (please check our [GitHub repo](https://github.com/Code-From-Anywhere/react-with-native) and view the demoing instructions to run the demo in the simulator)
