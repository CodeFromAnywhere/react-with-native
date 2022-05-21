import { Item, SelectProps } from "./types";
import { Button, Div } from "react-with-native";
import { Alert } from "react-native";
import { getRealValue } from "./util";
const Select = <T extends unknown>({
  options,
  onChange,
  value,
  title,
  className,
  children,
  selectFirstOption,
  ios,
}: SelectProps<T>) => {
  const realValue = getRealValue({ value, selectFirstOption, options, title });

  const onClick = () => {
    //should implement this
    Alert.alert("Coming soon");
    console.log("Coming soon");
  };
  return (
    <Div className={className}>
      {children ? (
        children({ onClick, className, value: realValue })
      ) : (
        <Button title={value?.label || "Select a value"} onClick={onClick} />
      )}
    </Div>
  );
};

export default Select;
