import { PluginInputType, PluginComponent } from "react-with-native-form";
import { Toggle, Label, Div } from "react-with-native";

const ToggleInput: PluginComponent<ToggleInputType> = ({
  onChange,
  value,
  extra,
  config,
  hasError,
  id,
}) => {
  config = config || {};

  const defaultClass = "";

  const errorClass = hasError
    ? config.errorClassName
      ? config.errorClassName
      : " border border-red-400"
    : "";

  const classWithError = config.replaceClassName
    ? `${config.replaceClassName} ${errorClass}`
    : `${defaultClass} ${config.extraClassName} ${errorClass}`;

  return (
    <Div>
      <Toggle
        id={id}
        // class not working with border on checkbox
        className={classWithError}
        checked={value}
        onChange={(value: ToggleInputType["value"]) => onChange(value)}
      />
      {extra?.label ? (
        <Label
          className={`pl-3 select-none ${hasError ? "text-red-500" : ""}`}
          htmlFor={id}
        >
          {extra.label}
        </Label>
      ) : null}
    </Div>
  );
};

ToggleInput.defaultInitialValue = false;

export class ToggleInputType implements PluginInputType {
  /**
   * value type
   */
  value!: boolean;
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
  extra?: { disabled?: boolean; label?: string | JSX.Element };
}

export default ToggleInput;
