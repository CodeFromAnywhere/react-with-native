import React from "react";
import { DivType } from "./Div.type";

const Div = ({ native, ...props }: DivType) => {
  return <div {...props} />;
};

export default Div;
