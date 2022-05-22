import React from "react";
import { joinClassNames } from "../../util/util";
import { OlType } from "./Ol.type";

const Ol = ({ native, className, textClassName, ...props }: OlType) => {
  return <ol {...props} className={joinClassNames(className, textClassName)} />;
};

export default Ol;
