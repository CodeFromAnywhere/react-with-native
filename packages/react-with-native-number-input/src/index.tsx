import { AnyInput, PluginInputProps } from "react-with-native-form";
import TextInput from "react-with-native-text-input";

const NumberInput = ({
  extra,
  onChange,
  value,
  ...props
}: PluginInputProps<NumberInputType>) => {
  const newExtra: NumberInputType["extra"] = { ...extra, type: "number" };
  return (
    <TextInput
      {...props}
      value={String(value)}
      onChange={(value) => {
        onChange(Number(value));
      }}
      extra={newExtra}
    />
  );
};

export interface NumberInputType extends AnyInput {
  /**
   * value type
   */
  value: number;

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
export default NumberInput;
