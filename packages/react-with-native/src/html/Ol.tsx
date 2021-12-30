import React from "react";
import { OlType } from "./Ol.type";

const Ol = ({ native, ...props }: OlType) => {
  return <ol {...props} />;
};

export default Ol;
