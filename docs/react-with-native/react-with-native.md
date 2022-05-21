# react-with-native

react-with-native exposes:

- the most popular html elements but wraps them to add the most suitable react-native counterpart.
- the most popular react-native components with their most suitable html counterpart
- some useful utility functions and components

`react-with-native` is integrated into [sensible stack](https://sensiblestack.com) by default, but you can install it into any project.

## Installation

```bash
yarn add react-with-native
```

### For Next.js

Add the following to your webpack config in `next.config.js`:

```js
config.module.rules.push({
  test: /\.svg$/,
  use: ["@svgr/webpack"],
});
```

```bash
yarn add -D @svgr/webpack
```

Make sure you also have [tailwind](https://tailwindcss.com) installed.

### Expo

To add the SVG Transformer, follow [these instructions](https://github.com/kristerkari/react-native-svg-transformer#installation-and-configuration).

Make sure to [install tailwind-rn](https://github.com/vadimdemedes/tailwind-rn) and wrap your app in a tailwind provider.

## API

### HTML

- `<A>`
- `<Aside>`
- `<Button>`
- `<Div>`
- `<Form>`
- `<H2>`
- `<I>`
- `<Img>`
- `<Input>`
- `<Label>`
- `<Li>`
- `<Ol>`
- `<Ul>`
- `<Nav>`
- `<P>`
- `<Select>`
- `<Span>`
- `<Strong>`
- `<Svg>` (experimental)
- `<TextArea>`

### react-native

- `<ActivityIndicator>`
- `<Pressable>`
- `<Text>`
- `<TouchableOpacity>`
- `<View>`

### Components

- `<ScrollableDiv scroll={boolean}>`
- `<Toggle {...HTMLInputProps} native={...SwitchProps} onChange={(value: boolean) => void} />`

### Utilities

- `trimClassName` removes classNames that aren't supported by react-native
- `joinClassNames` merges an array of className strings
- `wrapInTextIfNeeded` wraps a Text coponent around a string if you're react-native so the app can render.
