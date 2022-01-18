import React from "react";
import { PType } from "./P.type";

const P = ({ native, ...props }: PType) => {
  return <p {...props} />;
};

export default P;
