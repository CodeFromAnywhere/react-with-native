import React from "react";
import { joinClassNames } from "../../util/util";
import { LiType } from "./Li.type";

const Li = ({ native, className, textClassName, ...props }: LiType) => {
  return <li {...props} className={joinClassNames(className, textClassName)} />;
};

export default Li;
