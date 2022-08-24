import * as React from "react";
import { Switch } from "react-native";
import { ToggleType } from "./Toggle.type";

export const Toggle = ({ native, checked, onChange }: ToggleType) => {
  return (
    <Switch
      value={checked}
      onValueChange={(value) => onChange(value)}
      {...native}
    />
  );
};
