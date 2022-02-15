import { Item, SelectProps } from "./types";
import { Div } from "react-with-native";
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
    console.log("Coming soon");
  };
  return (
    <Div className={className}>
      {children?.({ onClick, className, value: realValue })}
    </Div>
  );
};

export default Select;
