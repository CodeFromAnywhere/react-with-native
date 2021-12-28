import * as React from "react";

//renders a native ActionSheet on iOS, a custom actionsheet on Android (using expo-actionsheet)
import { ActionSheetIOS } from "react-native";
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
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: options.map((o) => o.label),
        ...ios,
      },
      (buttonIndex) => {
        const selected = options[buttonIndex];

        selected.onClick?.();
        onChange(selected);
      }
    );
  };
  return (
    <Div className={className}>
      {children({ onClick, className, value: realValue })}
    </Div>
  );
};

export default Select;
