import React from "react";
import { StrongType } from "./Strong.type";

export const Strong = ({ native, ...props }: StrongType) => {
  return <strong {...props} />;
};
