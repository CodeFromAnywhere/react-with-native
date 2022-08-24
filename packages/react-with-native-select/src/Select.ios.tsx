import { ActionSheetIOS } from "react-native";
import { Item, SelectProps } from "./types";
import { Button, Div, Text } from "react-with-native";
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
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: options.map((o) => o.label),
        ...ios,
      },
      (buttonIndex) => {
        const selected = options[buttonIndex];

        // selected.onClick?.();
        onChange?.(selected);
      }
    );
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
