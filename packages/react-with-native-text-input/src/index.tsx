import {
  OnChange,
  AnyInput,
  inputClass,
  PluginComponent,
  PluginsProp,
  Field,
  InputProps,
} from "react-with-native-form";
import { Input } from "react-with-native";

const TextInput = ({
  onChange,
  value,
  extra,
  config,
  hasError,
}: InputProps<TextInputType>) => {
  config = config || {};

  const inputClassWithError = `${inputClass}${
    hasError
      ? config.errorClassName
        ? config.errorClassName
        : " border border-red-400"
      : ""
  }`;
  //test...
  const onChangeText = (value: TextInputType["value"]) => onChange(value);
  const placeholder = extra?.placeholder;
  const maxLength = extra?.maxLength;
  return (
    <Input
      type={extra?.isPassword ? "password" : undefined}
      className={inputClassWithError}
      value={value}
      onChange={(event) => onChangeText(event.target.value)}
      placeholder={placeholder}
      maxLength={extra?.maxLength}
      native={{
        value,
        onChangeText,
        placeholder,
        maxLength,
        secureTextEntry: extra?.isPassword,
      }}
    />
  );
};

export interface TextInputType extends AnyInput {
  type: "text";
  /**
   * value type
   */
  value: string;

  defaultValue: "";

  /**
   * input generic configuration
   */
  config?: {
    errorClassName?: string;
    extraClassName?: string;
    replaceClassName?: string;
  };
  /**
   * field specific configuration
   */
  extra?: { maxLength?: number; placeholder?: string; isPassword?: boolean };
}

export default TextInput;
