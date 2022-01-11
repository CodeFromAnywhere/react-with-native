import React from "react";
import { Div, H2 } from "react-with-native";

function Category({ children, title } : { children: React.ReactNode, title: string}) {
  return (
    <Div className="p-4">
      <H2 className="text-lg">{title}</H2>  
      {children}
    </Div>
  );
}

export default Category;