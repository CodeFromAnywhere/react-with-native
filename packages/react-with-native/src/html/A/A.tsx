import React from "react";
import { joinClassNames } from "../../util/util";
import { AType } from "./A.type";

const A = ({ native, className, textClassName, ...props }: AType) => {
  return <a {...props} className={joinClassNames(className, textClassName)} />;
};

export type { AType };
export default A;
