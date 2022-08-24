import { PluginInputType, PluginComponent } from "react-with-native-form";
import { TextArea } from "react-with-native";
import { UI } from "react-with-native-ui";

export const TextAreaInput: PluginComponent<TextAreaInputType> = ({
  value,
  extra,
  config,
  onChange,
  errors,
}) => {
  const hasError = errors && errors.length > 0;
  const errorClass = hasError ? config?.errorClassName || "border-red-600" : "";

  return (
    <TextArea
      rows={extra?.rows}
      maxLength={extra?.maxLength}
      className={
        config?.replaceClassName ||
        `${UI.input} ${errorClass} ${config?.extraClassName}`
      }
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      native={{ onChangeText: onChange, value }}
    />
  );
};
TextAreaInput.defaultInitialValue = "";
export class TextAreaInputType implements PluginInputType {
  value!: string;
  config?: {
    errorClassName?: string;
    extraClassName?: string;
    replaceClassName?: string;
  };
  extra?: {
    rows?: number;
    maxLength?: number;
    placeholder?: string;
  };
}
