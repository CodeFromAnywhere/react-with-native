import * as React from "react";

//renders a native ActionSheet on iOS, a custom actionsheet on Android (using expo-actionsheet)
import { ActionSheetIOS } from "react-native";
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
