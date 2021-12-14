import * as React from "react";
import { TextType } from "./Text.type";

const Text = ({ native, ...props }: TextType) => {
  return <p {...props} />;
};

export default Text;
