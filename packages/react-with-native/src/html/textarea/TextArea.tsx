import React from "react";
import { TextAreaType } from "./TextArea.type";

const TextArea = ({ native, ...props }: TextAreaType) => {
  return <textarea {...props} />;
};

export default TextArea;
