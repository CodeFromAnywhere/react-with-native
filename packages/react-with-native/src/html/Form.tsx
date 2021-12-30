import * as React from "react";
import { FormType } from "./Form.type";

/**
 * Form is just a html form on web. On react-native, it's a View
 */
const Form = ({ native, ...props }: FormType) => {
  return <form {...props} />;
};

export default Form;
