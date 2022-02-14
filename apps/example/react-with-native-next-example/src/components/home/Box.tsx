import React from "react";
import { Div } from "react-with-native";

function Box({ children, className }: { children: any; className?: string }) {
  return (
    <Div className={`box-content p-4 rounded ${className || ""}`}>
      {children}
    </Div>
  );
}

export default Box;
