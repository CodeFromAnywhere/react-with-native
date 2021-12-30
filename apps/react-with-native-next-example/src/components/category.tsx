import React from "react";
import { Div, H2 } from "react-with-native";

function Category({ children, title }) {
  return (
    <Div className="p-4 text-gray-700">
      <H2 className="main">{title}</H2>  
      {children}    
    </Div>
  );
}

export default Category;