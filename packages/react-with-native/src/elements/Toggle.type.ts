import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { SwitchProps } from "react-native";

export type ToggleType = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onChange"
> & {
  onChange: (value: boolean) => void;
  native?: Omit<SwitchProps, "onValueChange">;
};
