import { MouseEvent } from "react";
import { ActionSheetIOSOptions } from "react-native";

export type Item<T> = {
  value: T;
  label: string;
  icon?: any;
  onClick?: (id?: string|number) => void;
};

export type ChildrenType<T> = ({
  onClick,
  className,
  value,
}: {
  onClick: (e: MouseEvent<Element>, id?: string|number) => void;
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
