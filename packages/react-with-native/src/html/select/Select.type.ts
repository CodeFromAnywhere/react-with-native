import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import type { TextInputProps } from "react-native";

export type SelectOptionType = {
  value: string | number;
  label: string | number;
};
export type SelectType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  native?: TextInputProps;
  options: SelectOptionType[];
  customOptionSelector?: (option: SelectOptionType) => JSX.Element;
};
