import * as React from "react";
import { NavType } from "./Nav.type";

const PureNav = ({ native, ...props }: NavType, ref: any) => {
  return <nav {...props} ref={ref} />;
};

const Nav = React.forwardRef(PureNav);
export default Nav;
