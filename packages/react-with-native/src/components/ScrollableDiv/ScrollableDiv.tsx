import * as React from "react";
import { joinClassNames } from "../../util/util";
import { ScrollableDivType } from "./ScrollableDiv.type";

const PureDiv = (
  { native, className, textClassName, scroll, ...props }: ScrollableDivType,
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

const ScrollableDiv = React.forwardRef(PureDiv);

export default ScrollableDiv;
