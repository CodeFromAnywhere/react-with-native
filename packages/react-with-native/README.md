# react-with-native

- Exposes all html elements with their most suitable react-native counterpart, e.g. `button, div, strong, label, p, h1, h2`, etc.
- Exposes all `react-native` components with their most suitable html counterpart, e.g. `View, Text, TextInput, Pressable`, etc.
- Exposes `useNavigation` and `useRouter` which are 1:1 wrappers around `useNavigation` from `react-navigation` and `useRouter` from `next/router` respectively, and provide the most suitable result on web and native.

## Installation

### Next

- This is to be able to import svg files in this project (also in any dependencies)

```
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
```

> ```yarn add -D @svgr/webpack```

### Expo

- Follow these installation instructions:

https://github.com/kristerkari/react-native-svg-transformer#installation-and-configuration