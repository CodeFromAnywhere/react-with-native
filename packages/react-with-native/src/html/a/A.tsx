import React from "react";
import { AType } from "./A.type";

const A = ({ native, ...props }: AType) => {
  return <a {...props} />;
};

export default A;
