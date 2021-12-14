import * as React from "react";

const Li = ({ children, attributes }: { children: any; attributes?: any }) => {
  return (
    <li className="text-sm" {...attributes}>
      {children}
    </li>
  );
};
export default Li;
