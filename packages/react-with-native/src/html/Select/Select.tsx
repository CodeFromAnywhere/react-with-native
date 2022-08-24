import React from "react";
import type { SelectOptionType, SelectType } from "./Select.type";

export const Select = ({
  native,
  options,
  customOptionSelector,
  ...props
}: SelectType) => {
  // default option selector
  const defaultOptionSelector = (options || []).map(
    (option: SelectOptionType) => {
      <option value={option.value}>{option.label}</option>;
    }
  );

  // return component with custom option selector or default
  return (
    <select {...props}>
      {customOptionSelector ? customOptionSelector : defaultOptionSelector}
    </select>
  );
};
