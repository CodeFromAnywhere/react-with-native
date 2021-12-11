import React from "react";
import { H2Type } from "./H2.type";

const H2 = ({ native, ...props }: H2Type) => {
  return <h2 {...props} />;
};

export default H2;
