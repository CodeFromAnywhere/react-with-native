import * as React from "react";
import Text from "../react-native/text/Text";

// NB: figure out a way to do the styles of the text right.
export const wrapInTextIfNeeded = (children: any) => {
  console.log({ children, type: typeof children });
  return typeof children === "string" ? <Text>{children}</Text> : children;
};
