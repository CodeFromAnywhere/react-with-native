import { useState } from "react";
import { PluginInputType, PluginComponent } from "react-with-native-form";
import { TextInput } from "../text/text";

export const isNumber = (numberString: string | null | undefined) => {
  if (
    numberString === null ||
    numberString === undefined ||
    numberString === ""
  )
    return false;

  if (isNaN(Number(numberString))) return false;

  return true;
};

export const castToNumber = (
  numberString: string | null | undefined
): null | undefined | number => {
  if (numberString === null) return null;
  if (numberString === undefined) return undefined;
  if (numberString === "") return undefined;

  const number = Number(numberString);

  if (isNaN(number)) return undefined;

  return number;
};

export const NumberInput: PluginComponent<NumberInputType> = ({
  extra,
  onChange,
  value,
  ...props
}) => {
  const stringifiedValue =
    value === null || value === undefined ? "" : String(value);

  const [numberStringValue, setNumberStringValue] = useState(stringifiedValue);

  const newExtra: NumberInputType["extra"] = { type: "text", ...extra };

  return (
    <TextInput
      {...props}
      value={numberStringValue}
      onChange={(value) => {
        setNumberStringValue(value);

        if (isNumber(value)) {
          const casted = castToNumber(value);
          onChange(casted);
        }
      }}
      extra={newExtra}
    />
  );
};

export class NumberInputType implements PluginInputType {
  /**
   * value type
   */
  value!: number | null | undefined;

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
    autoComplete?: string;
    required?: boolean;
    disabled?: boolean;
    type?: string;
  };
}
NumberInput.defaultInitialValue = null;
