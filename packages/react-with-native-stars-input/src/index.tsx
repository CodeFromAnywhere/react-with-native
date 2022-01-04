import { AnyInput, inputClass, PluginInputProps } from "react-with-native-form";
import { Input } from "react-with-native";
import ReactStars from"react-stars";

const StarsInput = ({
  onChange,
  value,
  extra,
  config,
  hasError,
}: PluginInputProps<StarsInputType>) => {
  config = config || {};

  const inputClassWithError = `${inputClass}${
    hasError
      ? config.errorClassName
        ? config.errorClassName
        : " border border-red-400"
      : ""
  }`;

  // later, this can be extrahered into a react-with-native-stars component, because now this will only work on web
  return (
    <ReactStars
          className={`m-3`}
          count={5}
          value={typeof value === "number" ? value : 0}
          onChange={onChange}
          half={false}
          size={24}
          color2={"#ffd700"}
        />

  );
};

export interface StarsInputType extends AnyInput {
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
    /**
     * allow half stars
     */
    half?:boolean;
  };
}

export default StarsInput;
