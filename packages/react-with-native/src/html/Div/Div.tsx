import * as React from "react";
import { joinClassNames } from "../../util/util";
import { DivType } from "./Div.type";

const PureDiv = (
  { native, className, textClassName, ...props }: DivType,
  ref: any
) => {
  return (
    <div
      {...props}
      ref={ref}
      className={joinClassNames(className, textClassName)}
    />
  );
};

const Div = React.forwardRef(PureDiv);

export default Div;
