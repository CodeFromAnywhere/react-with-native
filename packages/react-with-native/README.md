# React with native

react-with-native (ui-es5 operation)

HTML elements with React Native capabilities.

Size: 1295 LOC, 3252 data characters, 
 
Imported dependencies:

- From Core Libraries: Switch, DetailedHTMLProps, InputHTMLAttributes, SwitchProps, Linking, Pressable, DetailedHTMLProps, AnchorHTMLAttributes, TextProps, View, DetailedHTMLProps, HTMLAttributes, ViewProps, TouchableOpacity, DetailedHTMLProps, ButtonHTMLAttributes, StyleProp, TouchableOpacityProps, ViewStyle, View, ScrollView, DetailedHTMLProps, HTMLAttributes, StyleProp, ViewProps, ViewStyle, View, DetailedHTMLProps, FormHTMLAttributes, StyleProp, ViewProps, ViewStyle, Text, DetailedHTMLProps, HTMLAttributes, TextProps, Text, DetailedHTMLProps, HTMLAttributes, TextProps, Image, ImagePropsAndroid, ImagePropsBase, ImagePropsIOS, ImageSourcePropType, ImageStyle, StyleProp, TextInput, DetailedHTMLProps, InputHTMLAttributes, TextInputProps, StyleProp, ViewStyle, TextStyle, Text, DetailedHTMLProps, LabelHTMLAttributes, StyleProp, TextProps, TextStyle, View, DetailedHTMLProps, LiHTMLAttributes, ViewProps, View, DetailedHTMLProps, HTMLAttributes, ViewProps, View, DetailedHTMLProps, OlHTMLAttributes, ViewProps, Text, DetailedHTMLProps, HTMLAttributes, TextProps, Picker, DetailedHTMLProps, SelectHTMLAttributes, TextInputProps, View, DetailedHTMLProps, HTMLAttributes, ViewProps, Text, DetailedHTMLProps, HTMLAttributes, TextProps, TextInput, DetailedHTMLProps, TextareaHTMLAttributes, TextInputProps, View, DetailedHTMLProps, HTMLAttributes, ViewProps, ActivityIndicator, ViewProps, Pressable, DetailedHTMLProps, HTMLAttributes, GestureResponderEvent, PressableProps, Text, DetailedHTMLProps, HTMLAttributes, TextProps, TouchableOpacity, DetailedHTMLProps, HTMLAttributes, GestureResponderEvent, TouchableOpacityProps
- From Packages: useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, ImageProps, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind, useTailwind
- From Operations: none

# Outline

## Functions

- [Select](#Select)
- [getTailwindModules](#getTailwindModules)
- [trimClassName](#trimClassName)
- [wrapInTextIfNeeded](#wrapInTextIfNeeded)
- [joinClassNames](#joinClassNames)



# Functions

## Select

Max. indexation depth: 1, 



## Returns: unknown

## getTailwindModules

Max. indexation depth: 4, 



## Returns: unknown

### Arguments

#### options: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| packages (optional) | array | if you are using a sensible monorepo, put the packages with tailwind-based ui here |
| modules (optional) | array |  |
| isWorkspace (optional) | boolean | if this is a yarn workspace, put true here |


## trimClassName

Max. indexation depth: 1, 

in react-native not all classNames are supported

### Returns: string







### Arguments

#### className: string







## wrapInTextIfNeeded

Max. indexation depth: 2, 

NB: figure out a way to do the styles of the text right.

## Returns: unknown

### Arguments

#### children: object





Properties: 

 | Name | Type | Description |
|---|---|---|



#### textClassName (optional): string







## joinClassNames

Max. indexation depth: 1, 



## Returns: unknown

### Arguments

#### args: array

- null: object





