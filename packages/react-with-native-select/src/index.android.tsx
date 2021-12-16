import {} from "react-native";
import { Item, SelectProps } from "./types";
import { Div } from "react-with-native";
const Select = <T extends unknown>({
  options,
  onChange,
  value,
  title,
  className,
  children,
  ios,
}: SelectProps<T>) => {
  const realValue: Item<T> = value || { label: title, value: undefined as T };

  const onClick = () => {
    //should implement this
    console.log("Coming soon");
  };
  return (
    <Div className={className}>
      {children({ onClick, className, value: realValue })}
    </Div>
  );
};

export default Select;
