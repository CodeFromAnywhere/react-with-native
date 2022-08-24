import React from "react";
import { LabelType } from "./Label.type";

export const Label = ({ native, ...props }: LabelType) => {
  return <label {...props} />;
};
