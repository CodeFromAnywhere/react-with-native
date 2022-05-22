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
