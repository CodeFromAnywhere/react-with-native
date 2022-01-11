import DataForm, {
  setConfig,
  makeInputField,
  Field,
  Keys,
  DataFormProps,
} from "react-with-native-form";
import TextInput, { TextInputType } from "react-with-native-text-input";
import PasswordInput, { PasswordInputType } from "react-with-native-password-input";
import ToggleInput, { ToggleInputType } from "react-with-native-toggle-input";

const text = {
  component: TextInput,
  config: {},
};

const password = {
  component: PasswordInput,
  config: {},
};

const toggle = {
  component: ToggleInput,
  config: {},
};

const plugins = {
  text,
  password,
  toggle,
};

export const makeField = <T extends Keys<AllInputs>>(
  type: T,
  config: Omit<Field<AllInputs, T>, "type">
) => makeInputField<AllInputs, T>(type, config);

export interface AllInputs {
  text: TextInputType;
  password: PasswordInputType;
  toggle: ToggleInputType;
}

type alias = { [key: string]: any; };

const Form = <TState extends alias = any>(
  props: DataFormProps<AllInputs, TState>
) =>
  setConfig<AllInputs, TState>(DataForm, {
    plugins,
  })(props);

export default Form;
