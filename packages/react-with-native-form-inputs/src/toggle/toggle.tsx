import { PluginInputType, PluginComponent } from "react-with-native-form";
import { Toggle, Label, Div } from "react-with-native";

export const ToggleInput: PluginComponent<ToggleInputType> = ({
  onChange,
  value,
  extra,
  config,
  uniqueFieldId,
  errors,
}) => {
  config = config || {};

  const defaultClass = "";
  const hasError = errors && errors.length > 0;
  const errorClass = hasError
    ? config.errorClassName
      ? config.errorClassName
      : " border border-red-400"
    : "";

  const classWithError = config.replaceClassName
    ? `${config.replaceClassName} ${errorClass}`
    : `${defaultClass} ${config.extraClassName} ${errorClass}`;

  return (
    <Div className="flex flex-row items-center">
      <Toggle
        id={uniqueFieldId}
        // class not working with border on checkbox
        className={classWithError}
        checked={value}
        onChange={(value: ToggleInputType["value"]) => onChange(value)}
      />
      {extra?.label ? (
        <Label
          className={`pl-3 select-none ${hasError ? "text-red-500" : ""}`}
          htmlFor={uniqueFieldId}
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
