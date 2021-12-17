import { OnChange, AnyInput, inputClass, Plugin } from "react-with-native-form";
import { Input } from "react-with-native";

const TextInput: Plugin<TextInputType> = ({
  onChange,
  value,
  extra,
  config,
  hasError,
}: {
  onChange: OnChange<TextInputType["value"]>;
  value: TextInputType["value"];
  extra: TextInputType["extra"];
  config: TextInputType["config"];
  hasError: boolean;
}) => {
  const inputClassWithError = `${inputClass}${
    hasError
      ? config.errorClassName
        ? config.errorClassName
        : " border border-red-400"
      : ""
  }`;

  const onChangeText = (value: TextInputType["value"]) => onChange(value);
  const placeholder = extra?.placeholder;
  const maxLength = extra?.maxLength;
  return (
    <Input
      className={inputClassWithError}
      value={value}
      onChange={(event) => onChangeText(event.target.value)}
      placeholder={placeholder}
      maxLength={extra?.maxLength}
      native={{ value, onChangeText, placeholder, maxLength }}
    />
  );
};

export interface TextInputType extends AnyInput {
  /**
   * value type
   */
  value: string;

  /**
   * input generic configuration
   */
  config: {
    errorClassName?: string;
    extraClassName?: string;
    replaceClassName?: string;
  };
  /**
   * field specific configuration
   */
  extra: { maxLength?: number; placeholder?: string };
}

export default TextInput;
