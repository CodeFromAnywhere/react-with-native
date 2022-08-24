import { PluginInputType, PluginComponent } from "react-with-native-form";

import { UI } from "react-with-native-ui";
import { Input } from "react-with-native";

export const TextInput: PluginComponent<TextInputType> = ({
  onChange,
  value,
  extra,
  config,
  errors,
}) => {
  config = config || {};
  const hasError = errors && errors.length > 0;

  const inputClassWithError = `my-2 ${UI.textInput}${
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
      type={
        extra?.type ? extra.type : extra?.isPassword ? "password" : undefined
      }
      className={inputClassWithError}
      //why doesn't it get applied corectly?
      style={{
        padding: 5,
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 5,
        marginBottom: 5,
      }}
      value={value}
      onChange={(event) => onChangeText(event.target.value)}
      placeholder={placeholder}
      maxLength={extra?.maxLength}
      autoComplete={extra?.autoComplete}
      required={extra?.required}
      disabled={extra?.disabled}
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

TextInput.defaultInitialValue = "";

export class TextInputType implements PluginInputType {
  /**
   * value type
   */
  value!: string;

  /**
   * input generic configuration
   */
  config?: {
    extraClassName?: string;
    replaceClassName?: string;
    errorClassName?: string;
  };
  /**
   * field specific configuration
   */
  extra?: {
    maxLength?: number;
    placeholder?: string;
    isPassword?: boolean;
    autoComplete?: string;
    required?: boolean;
    disabled?: boolean;
    type?: string;
  };
}
