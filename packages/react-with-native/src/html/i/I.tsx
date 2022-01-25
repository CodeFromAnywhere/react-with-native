import React from "react";
import { IType } from "./I.type";

const I = ({ native, ...props }: IType) => {
  return <i {...props} />;
};

export default I;
