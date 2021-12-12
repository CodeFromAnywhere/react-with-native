import * as React from "react";

const Ol = ({ children, attributes }: { children: any; attributes?: any }) => {
  return (
    <ol className={`list-decimal list-inside m-3`} {...attributes}>
      {children}
    </ol>
  );
};
export default Ol;
