import React from "react";
import { Div } from "react-with-native";
import Navbar from "../components/navbar/Navbar";

function SiteLayout({ children }: { children: any }) {
  return (
    <Div className="flex flex-col">
      <Navbar />
      {children}
    </Div>
  );
}

export default SiteLayout;
