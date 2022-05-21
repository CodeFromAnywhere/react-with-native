# Introduction

## Why?

1. To solve react-native-web's severe limitations.
2. To share 90% of your cosebase between your next.js app and react native app but still have the full functionality of Next.js and React Native while keeping their bundles as small as possible.
3. To provide an easy way to extend your React (Next.js) app so it can also be rendered in React Native.
4. Because most companies come from the react side and want an app later, not the other way around.

## How?

We simply create wrappers for all html tags and react(native) components to make them compatible with the other platform. We use `.native.tsx`, `.ios.tsx` and `.android.tsx` files to let metro bundler import the correct files.

## Tailwind

Tailwind is a peer dependency! Without it, `react-with-native` still works, but lots of components won't have a default styling and you need to supply your own classNames via `replaceClassName`

## Differences from react-native and react

- you need to apply your text-related classNames to the text itself directly or if your children are a string you can add textClassName as a prop.
