import * as React from "react";
import { joinClassNames } from "../../util/util";
import { NavType } from "./Nav.type";

const PureNav = (
  { native, className, textClassName, ...props }: NavType,
  ref: any
) => {
  return (
    <nav
      {...props}
      ref={ref}
      className={joinClassNames(className, textClassName)}
    />
  );
};

export const Nav = React.forwardRef(PureNav);
