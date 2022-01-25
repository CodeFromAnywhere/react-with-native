import React from "react";
import { LabelType } from "./Label.type";

const Label = ({ native, ...props }: LabelType) => {
  return <label {...props} />;
};

export default Label;
