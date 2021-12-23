import * as React from "react";

const Ul = ({ children, attributes }: { children: any; attributes?: any }) => {
  return (
    <ul className={`text-sm list-disc list-inside m-3`} {...attributes}>
      {children}
    </ul>
  );
};
export default Ul;
