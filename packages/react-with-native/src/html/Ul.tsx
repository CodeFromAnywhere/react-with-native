import React from "react";
import { UlType } from "./Ul.type";

const Ul = ({ native, ...props }: UlType) => {
  return <ul {...props} />;
};

export default Ul;
