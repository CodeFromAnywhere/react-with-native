import * as React from "react";
import { Text } from "../react-native/Text/Text";

// NB: figure out a way to do the styles of the text right.
export const wrapInTextIfNeeded = (children: any, textClassName?: string) => {
  return typeof children === "string" ? (
    <Text className={textClassName}>{children}</Text>
  ) : (
    children
  );
};

export const joinClassNames = (...args: (string | undefined)[]) => {
  return args.filter((x) => !!x).join(" ");
};
