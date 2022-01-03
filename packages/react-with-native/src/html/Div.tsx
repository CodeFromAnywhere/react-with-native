import * as React from "react";
import { DivType } from "./Div.type";

const PureDiv = ({ native, ...props }: DivType, ref: any) => {
  return <div {...props} ref={ref} />;
};

const Div = React.forwardRef(PureDiv);

export default Div;
