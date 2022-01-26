import React from "react";
import { LiType } from "./Li.type";

const Li = ({ native, ...props }: LiType) => {
  return <li {...props} />;
};

export default Li;
