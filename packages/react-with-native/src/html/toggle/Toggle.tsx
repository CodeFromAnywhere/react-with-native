import React from "react";
import { ToggleType } from "./Toggle.type";

const Toggle = ({ native, onChange, checked, ...props }: ToggleType) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      {...props}
    />
  );
};

export default Toggle;
