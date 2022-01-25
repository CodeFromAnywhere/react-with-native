import * as React from "react";
import { AsideType } from "./Aside.type";

const PureAside = ({ native, ...props }: AsideType, ref: any) => {
  return <aside {...props} ref={ref} />;
};

// this is needed if you want to pass refs to it sometimes
const Aside = React.forwardRef(PureAside);

export default Aside;
