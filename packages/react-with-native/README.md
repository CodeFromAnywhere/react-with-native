# React with native

react-with-native (ui-es5 operation)



## Docs

- [React with native](#react-with-native)



# Docs

## React with native

### react-with-native

react-with-native exposes:

- the most popular html elements but wraps them to add the most suitable react-native counterpart.
- the most popular react-native components with their most suitable html counterpart
- some useful utility functions and components

`react-with-native` is integrated into [sensible stack](https://sensiblestack.com) by default, but you can install it into any project.


#### Installation

<details><summary>Tip for new projects!</summary>
Maybe it's better to use [Sensible](https://sensiblestack.com)! Sensible is a boilerplate that gets you up to speed quickly for full stack apps and it uses react-with-native out of the box! This will save you a lot of time.</details>

```bash
yarn add react-with-native
```


##### Tailwind

[Tailwind](https://tailwindcss.com) must be installed on both the web and on your react-native project.

- [react-native instructions](https://github.com/vadimdemedes/tailwind-rn)
- [react instructions](https://tailwindcss.com/docs/installation)

After installation, make sure you add all `react-with-native-*` to the content of your `tailwind.config.js` files, like this:

> `tailwind.config.js`

```js
const { getTailwindModules } = require("react-with-native");

const tailwindModules = getTailwindModules({
  //if you are using a sensible monorepo, put the packages with tailwind-based ui here
  packages: ["rwn-ui"],

  //if you are using any tailwind-based modules, put them here.
  modules: [
    "react-with-native",
    "react-with-native-alert",
    "react-with-native-form",
    "react-with-native-form-inputs",
    "react-with-native-modal",
    "react-with-native-notification",
    "react-with-native-router",
    "react-with-native-select",
    "react-with-native-store",
    "react-with-native-ui"
  ],
  //if you have a yarn workspace, put true here
  isWorkspace: false,
});

module.exports = {
  content: ["./src/**/*.{ts,tsx}", ...tailwindModules],
  ...your other config
};

```

In react project it's also possible to generate the css using the tailwind cli and import it into your code. With react-native this is not possible as far as I know.


##### For Next.js

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


##### Expo

To add the SVG Transformer, follow [these instructions](https://github.com/kristerkari/react-native-svg-transformer#installation-and-configuration).


#### API

##### HTML

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


##### react-native

- `<ActivityIndicator>`
- `<Pressable>`
- `<Text>`
- `<TouchableOpacity>`
- `<View>`


##### Components

- `<ScrollableDiv scroll={boolean}>`
- `<Toggle {...HTMLInputProps} native={...SwitchProps} onChange={(value: boolean) => void} />`


##### Utilities

- `trimClassName` removes classNames that aren't supported by react-native
- `joinClassNames` merges an array of className strings
- `wrapInTextIfNeeded` wraps a Text coponent around a string if you're react-native so the app can render.
- `getTailwindModules` provides the needed `node_modules` paths to include in your `tailwind.config.js`


#### Differences from react-native and react

- you need to apply your text-related classNames to the text itself directly or if your children are a string you can add textClassName as a prop.


# Api reference

## 📄 Div (exported const)

## <P />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 P (exported const)

## <Span />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 Span (exported const)

## <Button />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 Button (exported const)

## <Input />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 Input (exported const)

## <Svg />

| Input      |    |    |
| ---------- | -- | -- |
| { src, width, height, className, style } | `SvgType` |  |
| **Output** | `JSX.Element`   |    |



## 📄 Svg (exported const)

## <Ul />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 Ul (exported const)

## <A />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 A (exported const)

## <Form />

Form is just a html form on web. On react-native, it's a View


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <H2 />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Label />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Li />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <TextArea />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 Form (exported const)

Form is just a html form on web. On react-native, it's a View


## 📄 H2 (exported const)

## 📄 Label (exported const)

## 📄 Li (exported const)

## 📄 TextArea (exported const)

## <ActivityIndicator />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Aside />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Image />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Strong />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Text />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Toggle />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 ActivityIndicator (exported const)

## 📄 Aside (exported const)

## 📄 Image (exported const)

## 📄 Strong (exported const)

## 📄 Text (exported const)

## 📄 Toggle (exported const)

# Internal

<details><summary>Show internal (21)</summary>
  
  # getTailwindModules()




| Input      |    |    |
| ---------- | -- | -- |
| options | { packages?: string[], <br />modules?: string[], <br />isWorkspace?: boolean, <br /> } |  |
| **Output** |    |    |



## <I />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## joinClassNames()

| Input      |    |    |
| ---------- | -- | -- |
| args | {  }[] |  |
| **Output** |    |    |



## <Nav />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Ol />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Pressable />

button on web, pressable on react-native


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Select />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <TouchableOpacity />

button on web, pressable on react-native


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## trimClassName()

in react-native not all classNames are supported


| Input      |    |    |
| ---------- | -- | -- |
| className | string |  |
| **Output** | `String`   |    |



## wrapInTextIfNeeded()

NB: figure out a way to do the styles of the text right.


| Input      |    |    |
| ---------- | -- | -- |
| children | {  } |  |,| textClassName (optional) | string |  |
| **Output** |    |    |



## 🔹 SvgType

Properties: 

 | Name | Type | Description |
|---|---|---|
| src  | object |  |
| width (optional) | number |  |
| height (optional) | number |  |
| className (optional) | string |  |
| style (optional) | object |  |



## 📄 getTailwindModules (exported const)

## 📄 I (exported const)

## 📄 joinClassNames (exported const)

## 📄 Nav (exported const)

## 📄 Ol (exported const)

## 📄 Pressable (exported const)

button on web, pressable on react-native


## 📄 Select (exported const)

## 📄 TouchableOpacity (exported const)

button on web, pressable on react-native


## 📄 trimClassName (exported const)

in react-native not all classNames are supported


## 📄 wrapInTextIfNeeded (exported const)

  </details>

