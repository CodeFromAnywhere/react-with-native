import React from "react";
import { joinClassNames } from "../../util/util";
import { UlType } from "./Ul.type";

const Ul = ({ native, className, textClassName, ...props }: UlType) => {
  return <ul {...props} className={joinClassNames(className, textClassName)} />;
};

export default Ul;
