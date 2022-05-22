import { PluginInputType, PluginComponent } from "react-with-native-form";
import { TextArea } from "react-with-native";

export const TextAreaInput: PluginComponent<TextAreaInputType> = ({
  value,
  extra,
  config,
  onChange,
  errors,
}) => {
  const hasError = errors && errors.length > 0;
  //
  return (
    <TextArea
      rows={extra?.rows}
      maxLength={extra?.maxLength}
      className={
        config?.replaceClassName ||
        `block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
          hasError ? config?.errorClassName || "border-red-600" : ""
        } ${config?.extraClassName}`
      }
      value={value}
      onChange={(event: any) => {
        onChange(event.target.value);
      }}
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

export default TextAreaInput;
