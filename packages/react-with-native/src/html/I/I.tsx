import React from "react";
import { IType } from "./I.type";

export const I = ({ native, ...props }: IType) => {
  return <i {...props} />;
};
