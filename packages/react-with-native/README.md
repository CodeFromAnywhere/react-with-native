# react-with-native

- Exposes all html elements with their most suitable react-native counterpart, e.g. `button, div, strong, label, p, h1, h2`, etc.
- Exposes all `react-native` components with their most suitable html counterpart, e.g. `View, Text, TextInput, Pressable`, etc.

## Installation

### Next

- This is to be able to import svg files in this project (also in any dependencies)

```
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
```

> `yarn add -D @svgr/webpack`

### Expo

- Follow these installation instructions:

https://github.com/kristerkari/react-native-svg-transformer#installation-and-configuration
