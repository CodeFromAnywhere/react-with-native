import { ActionSheetIOS } from "react-native";
import { Item, SelectProps } from "./types";
import { Button, Div } from "react-with-native";
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
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: options.map((o) => o.label),
        ...ios,
      },
      (buttonIndex) => {
        const selected = options[buttonIndex];

        selected.onClick?.();
        onChange?.(selected);
      }
    );
  };
  console;
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
