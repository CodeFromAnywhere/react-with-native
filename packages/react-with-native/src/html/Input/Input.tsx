import React from "react";
import { InputType } from "./Input.type";

export const Input = ({ native, ...props }: InputType) => {
  return <input {...props} />;
};
