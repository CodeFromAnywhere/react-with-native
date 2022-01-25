import React from "react";
import { Div } from "react-with-native";

function MobileMenu({ children }: { children: any }) {
  return (
    <Div
      className={
        "z-50 flex flex-1 w-1/2 p-4 justify-center right-3 top-3 absolute bg-dark_section shadow rounded"
      }
    >
      {children}
    </Div>
  );
}

export default MobileMenu;
