import React from "react";
import { InputType } from "./Input.type";

const Input = ({ native, ...props }: InputType) => {
  return <input {...props} />;
};

export default Input;
