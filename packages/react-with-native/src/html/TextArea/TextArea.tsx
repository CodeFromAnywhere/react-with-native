import React from "react";
import { joinClassNames } from "../../util/util";
import { TextAreaType } from "./TextArea.type";

export const TextArea = ({
  native,
  className,
  textClassName,
  ...props
}: TextAreaType) => {
  return (
    <textarea {...props} className={joinClassNames(className, textClassName)} />
  );
};
