import { Item, SelectProps } from "./types";
import { Button, Div, Text } from "react-with-native";
import { Alert } from "react-native";
import { getRealValue } from "./util";

export const Select = <T extends unknown>({
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
    console.log("Coming soon"); //ok
  };

  const buttonTitle = value?.label || title || "Select a value";

  return (
    <Div className={className}>
      {children ? (
        children({ onClick, className, value: realValue })
      ) : (
        <Button onClick={onClick}>
          <Text>{buttonTitle}</Text>
        </Button>
      )}
    </Div>
  );
};
