import { MouseEvent } from "react";
import { ActionSheetIOSOptions } from "react-native";

export type Item<T> = {
  value: T;
  label: string;
  icon?: any;
  onClick?: (value: T) => void;
};

export type ChildrenType<T> = ({
  onClick,
  className,
  value,
}: {
  onClick: (e: MouseEvent<Element>) => void;
  className?: string;
  value: Item<T>;
}) => any;

export type SelectProps<T> = {
  containerClassName?: string;
  title: string;
  options: Item<T>[];
  onChange: (value: Item<T> | null) => void;
  value?: Item<T>;
  className?: string;
  children?: ChildrenType<T>;
  ios?: ActionSheetIOSOptions;
};
