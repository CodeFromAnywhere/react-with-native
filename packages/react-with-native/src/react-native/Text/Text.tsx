import * as React from "react";
import { TextType } from "./Text.type";

export const Text = ({ native, ...props }: TextType) => {
  return <p {...props} />;
};
