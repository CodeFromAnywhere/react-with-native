import { PluginInputProps } from "react-with-native-form";
import TextInput, { TextInputType } from "react-with-native-text-input";

const PhoneInput = ({
  extra,
  ...props
}: PluginInputProps<PhoneInputType>) => {
  const newExtra: PhoneInputType["extra"] = { ...extra, type:"phone" };
  return <TextInput {...props} extra={newExtra} />;
};

export interface PhoneInputType extends TextInputType {}
export default PhoneInput;
