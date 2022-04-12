# react-with-native

- Exposes all html elements with their most suitable react-native counterpart, e.g. `button, div, strong, label, p, h1, h2`, etc.
- Exposes all `react-native` components with their most suitable html counterpart, e.g. `View, Text, TextInput, Pressable`,`Scrollview` etc.

## Installation

### Next.js

- `yarn add react-with-native`

- This is to be able to import svg files in this project (also in any dependencies)

```
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
```

> `yarn add -D @svgr/webpack`

- Make sure you also have tailwind installed.

### Expo

- To add the SVG Transformer, follow [these instructions](https://github.com/kristerkari/react-native-svg-transformer#installation-and-configuration).

- Make sure to [install tailwind-rn](https://github.com/vadimdemedes/tailwind-rn) and wrap your app in a tailwind provider.

# Div

## Div Props

| Prop       |   Type   | Default |                                  Description                                   |
| ---------- | :------: | :-----: | :----------------------------------------------------------------------------: |
| scrollable | boolean  |  false  | Scrollable div (ScrollView for native)(E.g. `<Div scrollable>conten... </Div>` |
| onChange   | Function |    -    |                    onChange (E.g. onChange={customOnChange}                    |
| style      |  Object  |  null   |                         Styling the div/View component                         |
| className  |  String  |  null   |                 tailwind classes (E.g. "flex-1 bg-slate-500")                  |

## What's not shared?

- creating screens and pages should still be done with react-navigation on react-native and using the pages folder in next.js. However, you can use the `useNavigation` or `useRouter` hook from `react-with-native`. These are wrappers to expose the other api too.

- react-native and react have 2 completely different libraries for maps. A wrapper for those is currently out of scope for this library.

For the rest, almost anything can be done!
