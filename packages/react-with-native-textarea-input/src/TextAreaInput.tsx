import { AnyInput, PluginInputProps } from "react-with-native-form";
import React from "react";
import { TextArea } from "react-with-native";

const TextAreaInput = ({
  value,
  extra,
  config,
  onChange,
  hasError,
}: PluginInputProps<TextAreaInputType>) => {
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
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
};

export interface TextAreaInputType extends AnyInput {
  type: "textarea";
  value: string;
  defaultValue: string;
  config?: {
    errorClassName?: string;
    extraClassName?: string;
    replaceClassName?: string;
  };
  extra: {
    rows?: number;
    maxLength?: number;
    placeholder?: string;
  };
}

export default TextAreaInput;
