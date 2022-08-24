import React from "react";
import { ToggleType } from "./Toggle.type";

export const Toggle = ({ native, onChange, checked, ...props }: ToggleType) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      {...props}
    />
  );
};
