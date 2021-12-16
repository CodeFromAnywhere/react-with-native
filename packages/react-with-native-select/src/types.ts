import { ActionSheetIOSOptions } from "react-native";

export type Item<T> = {
  value: T;
  label: string;
  icon?: any;
  onClick?: () => void;
};

export type SelectProps<T> = {
  title: string;
  options: Item<T>[];
  onChange: (value: Item<T> | null) => void;
  value?: Item<T>;
  className?: string;
  children?: any;
  ios?: ActionSheetIOSOptions;
};
