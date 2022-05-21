import { PluginInputType, PluginComponent } from "react-with-native-form";
import TextInput from "../text";

const NumberInput: PluginComponent<NumberInputType> = ({
  extra,
  onChange,
  value,
  ...props
}) => {
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

export class NumberInputType implements PluginInputType {
  /**
   * value type
   */
  value!: number | null;

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

export default NumberInput;
