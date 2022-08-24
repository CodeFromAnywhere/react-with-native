import React from "react";
import { PType } from "./P.type";

export const P = ({ native, ...props }: PType) => {
  return <p {...props} />;
};
