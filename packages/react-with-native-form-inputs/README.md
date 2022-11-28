# React with native form inputs

react-with-native-form-inputs (`OperationClassification` ui-cjs)



# Docs

<details><summary>README.md</summary>
    
  # Form inputs

## `NB: Experimental package!`

Form inputs provide a set of default form input types that can be used together with rwn form or without it. Please note that we have quite some peer dependencies for these inputs, and the inputs can't be installed separately. We are still looking for ways to reduce the amount of dependencies. If you don't want this, you can just create your own inputs. You could use our inputs as examples and go from there.

All input types are still subject to breaking changes!


### Installation

```bash
yarn add react-with-native-form-inputs
```

NB: Make sure have [react-with-native](/react-with-native) installed.

Make sure you also install these `peerDependencies` and `devDependencies`:

react:

```bash
yarn add react-datepicker react-dropzone react-map-gl react-autosuggest react-stars rc-time-picker react-datetime
yarn add -D @types/react-datepicker @types/react-autosuggest @types/react-stars
```

Add the needed CSS to your root `App.tsx` or `_app.tsx`

```tsx
import "react-datetime/css/react-datetime.css";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
```

react-native:

```bash
yarn add react-native-modal-datetime-picker @react-native-community/datetimepicker
```


### Usage

See the [API](#API) for which input types are included.
These form inputs can be used to create the default input types for [react-with-native-form](/react-with-native/form), but you can also use them outside of this form component.

For an example on how to use them in the form, see [react-with-native-form](/react-with-native/form).

To use them outside of the form, every input type has the same props:

```tsx
type PluginInputComponentProps = {
  onChange: OnChange<TInput>;
  /**
   * value is never undefined, unless you didn't declare defaultInitialValue
   */
  value: TInput["value"];
  extra: TInput["extra"];
  config: TInput["config"];
  /**
   * Format: {randomId}.{fieldName}
   */
  uniqueFieldId: string;
  fieldName: string;

  /**
   * if there are multiple errors for this single field (from the backend), they can be given here. Key is in format `{fieldName}.{subfieldName}`, value should be the string containing the error
   */
  errors?: Error[];
  errorClassName?: string;
};
```


#### Creating your own inputs

react-with-native-form can use your own input types, as long as they adhere to the standard. When creating a new input type, just copy the below template and go from there. Make sure you don't have any red lines when you're done, and you should be fine! For examples, check [our own inputs](https://github.com/Code-From-Anywhere/react-with-native/tree/main/packages/react-with-native-form-inputs/src)

```tsx
import { Div, Input } from "react-with-native";
import { PluginComponent } from "react-with-native-form";

const YourInput: PluginComponent<YourInputType> = ({
  onChange,
  value,
  extra,
  config,
}) => {
  return <Input value={value} onChange={onChange} className="bg-yellow-500" />;
};

// specify the default initial value here
YourInput.defaultInitialValue = "";
// this can hide the error that is usually shown on the container of the input
YourInput.hideContainerError = false;

export class YourInputType implements PluginInputType {
  /**
   * value type
   */
  value!: string;

  /**
   * input generic configuration
   */
  config?: {};
  /**
   * field specific configuration
   */
  extra?: {};
}
```


#### API

These are the inputs that are currently exposed. The type interface is also exposed like `xxxInputType`

- DateInput
- DatetimeInput
- FileInput
- MapInput
- NumberInput
- PasswordInput
- PhoneInput
- SelectInput
- StarsInput
- TextInput
- TextAreaInput
- TimeInput
- ToggleInput

If you want to know the exact type interface of the input (which differs per input type), please look inside of [the package](https://github.com/Code-From-Anywhere/react-with-native/tree/main/packages/react-with-native-form-inputs/src) and find the line `export xxxInputType` to see the type definition.

  </details>

# Api reference

## `<SelectInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 SelectInput (exported const)

## `<SelectMultipleInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<ToggleInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 SelectMultipleInput (exported const)

## 📄 ToggleInput (exported const)

## `<NumberInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<PasswordInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<TextInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 NumberInput (exported const)

## 📄 PasswordInput (exported const)

## 📄 TextInput (exported const)

# Internal

<details><summary>Show internal (25)</summary>
    
  # castToNumber()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## `<DateInput />`

CSS Modules, react-datepicker-cssmodules.css


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<DatetimeInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<FileInput />`

import Icon from "./icon.svg";


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## isNumber()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## `<LabelsInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<MapInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<PhoneInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<StarsInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<TextAreaInput />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<TimeInput />`

CSS Modules, react-datepicker-cssmodules.css


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 🔹 MapLocation

Properties: 

 | Name | Type | Description |
|---|---|---|
| latitude  | number |  |
| longitude  | number |  |
| zoom  | number |  |



## 🔹 Suggestion

Properties: 

 | Name | Type | Description |
|---|---|---|
| bbox  | array |  |
| center  | array |  |
| id  | string |  |
| place_name  | string |  |
| place_type  | array |  |
| text  | string |  |



## 🔹 ViewPort

Properties: 

 | Name | Type | Description |
|---|---|---|
| width  | string |  |
| height  | string |  |
| latitude  | number |  |
| longitude  | number |  |
| zoom  | number |  |



## 📄 castToNumber (exported const)

## 📄 DateInput (exported const)

## 📄 DatetimeInput (exported const)

## 📄 FileInput (exported const)

## 📄 isNumber (exported const)

## 📄 LabelsInput (exported const)

## 📄 MapInput (exported const)

## 📄 PhoneInput (exported const)

## 📄 StarsInput (exported const)

## 📄 TextAreaInput (exported const)

## 📄 TimeInput (exported const)

  </details>

