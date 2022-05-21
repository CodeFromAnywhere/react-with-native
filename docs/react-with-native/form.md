# Forms

Plug-and-play yet unopinionated and extensible forms constructor for React and React Native apps with high-class typescript support!

# Installation

```bash
yarn add react-with-native-form
```

Please note:

- You need to create your own inputs, or you can use our default inputs, see [Form inputs](/react-with-native/form-inputs) for installation instructions
- You need [react-with-native](/react-with-native) for this.

# Usage

Create a wrapper like this:

```tsx
import DataForm, {
  setConfig,
  makeInputField,
  Field,
  Keys,
  DataFormProps,
  Plugin,
} from "react-with-native-form";

import {
  TextInput,
  TextInputType,
  PasswordInput,
  PasswordInputType,
} from "react-with-native-form-inputs";

const text = { component: TextInput };
const password = { component: PasswordInput };
const plugins = { text, password };

export const makeField = <T extends Keys<AllInputs>>(
  type: T,
  config: Omit<Field<AllInputs, T>, "type">
) => makeInputField<AllInputs, T>(type, config);

export interface AllInputs {
  text: TextInputType;
  password: PasswordInputType;
}

export const Form = <TState extends { [key: string]: any } = any>(
  props: DataFormProps<AllInputs, TState>
) =>
  setConfig<AllInputs, TState>(DataForm, {
    plugins,
  })(props);
```

Now you can create a form like this:

```tsx
import { Form, makeField } from "../components/form";

const fields = [
  makeField("text", {
    field: "username",
    title: "Username",
  }),
  makeField("password", {
    field: "password",
    title: "Password",
  }),
];

// Now your form can be rendered like this
// Make sure to provide the generic based on the inputs type interfaces
// otherwise your form won't be typesafe!

const MyPage = () => {
  return (
    <Form<{
      username: TextInputField["value"];
      password: PasswordInputType["value"];
    }>
      title="Login"
      fields={fields}
      onSubmit={(values, resolve, reject) => {
        //do something with those values
      }}
    />
  );
};
```
