import * as React from "react";
import { joinClassNames } from "../../util/util";
import { AsideType } from "./Aside.type";

const PureAside = (
  { native, className, textClassName, ...props }: AsideType,
  ref: any
) => {
  return (
    <aside
      {...props}
      ref={ref}
      className={joinClassNames(className, textClassName)}
    />
  );
};

// this is needed if you want to pass refs to it sometimes
export const Aside = React.forwardRef(PureAside);
