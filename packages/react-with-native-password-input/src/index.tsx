import { InputProps } from "react-with-native-form";
import TextInput, { TextInputType } from "react-with-native-text-input";

const PasswordInput = ({ extra, ...props }: InputProps<PasswordInputType>) => {
  const newExtra = { ...extra, isPassword: true };
  return <TextInput {...props} extra={newExtra} />;
};

export interface PasswordInputType extends TextInputType {}
export default PasswordInput;
