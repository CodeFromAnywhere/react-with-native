import * as React from "react";
import { ButtonType } from "./Button.type";

const Button = ({ native, ...props }: ButtonType) => {
  return <button {...props} />;
};

export default Button;
