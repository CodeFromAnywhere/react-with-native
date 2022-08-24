import React from "react";
import { H2Type } from "./H2.type";

export const H2 = ({ native, ...props }: H2Type) => {
  return <h2 {...props} />;
};
