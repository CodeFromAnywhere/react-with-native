import * as React from "react";
import { joinClassNames } from "../../util/util";
import { ButtonType } from "./Button.type";

const Button = ({ native, className, textClassName, ...props }: ButtonType) => {
  return (
    <button {...props} className={joinClassNames(className, textClassName)} />
  );
};

export default Button;
