import * as React from "react";
import { joinClassNames } from "../../util/util";
import { FormType } from "./Form.type";

/**
 * Form is just a html form on web. On react-native, it's a View
 */
export const Form = ({
  native,
  className,
  textClassName,
  ...props
}: FormType) => {
  return (
    <form {...props} className={joinClassNames(className, textClassName)} />
  );
};
