import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { TextInput } from "react-native";
import { TextAreaType } from "./TextArea.type";
import { wrapInTextIfNeeded } from "../../util/util";

const TextArea = ({
  native,
  children,
  className,
  textClassName,
}: TextAreaType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(className) : {};

  return (
    <TextInput
      multiline={true}
      style={[{ textAlignVertical: "top" }, tailwindStyle, style]}
      {...nativeWithoutStyle}
    >
      {wrapInTextIfNeeded(children, textClassName)}
    </TextInput>
  );
};

export default TextArea;
