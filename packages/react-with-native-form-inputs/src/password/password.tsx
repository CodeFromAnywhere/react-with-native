import { PluginComponent } from "react-with-native-form";
import { TextInputType, TextInput } from "../text/text";

export const PasswordInput: PluginComponent<PasswordInputType> = ({
  extra,
  ...props
}) => {
  const newExtra: PasswordInputType["extra"] = { ...extra, isPassword: true };
  return <TextInput {...props} extra={newExtra} />;
};
PasswordInput.defaultInitialValue = "";

export interface PasswordInputType extends TextInputType {}
