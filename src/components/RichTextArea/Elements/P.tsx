import * as React from "react";

const P = ({ children, attributes }: { children: any; attributes?: any }) => {
  return (
    <p className="pb-2 pt-2 text-md md:text-[18px]" {...attributes}>
      {children}
    </p>
  );
};
export default P;
