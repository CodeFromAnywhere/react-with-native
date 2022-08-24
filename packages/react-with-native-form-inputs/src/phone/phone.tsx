import { PluginComponent } from "react-with-native-form";
import { TextInputType, TextInput } from "../text/text";

export const PhoneInput: PluginComponent<PhoneInputType> = ({
  extra,
  ...props
}) => {
  const newExtra: PhoneInputType["extra"] = { ...extra, type: "phone" };
  return <TextInput {...props} extra={newExtra} />;
};

PhoneInput.defaultInitialValue = "";
export interface PhoneInputType extends TextInputType {}
