import React from "react";
import { Div } from "react-with-native";

function Section({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) {
  return <Div className={`w-full flex ${className || ""}`}>{children}</Div>;
}

export default Section;
