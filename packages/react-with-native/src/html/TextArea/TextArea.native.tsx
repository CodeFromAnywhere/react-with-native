import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { TextInput } from "react-native";
import { TextAreaType } from "./TextArea.type";
import { wrapInTextIfNeeded } from "../../util/util";
import { trimClassName } from "../../util/trimClassName";

const TextArea = ({
  native,
  children,
  className,
  textClassName,
  rows,
}: TextAreaType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};

  return (
    <TextInput
      multiline={true}
      style={[
        { textAlignVertical: "top", height: rows ? rows * 30 : 200 },
        tailwindStyle,
        style,
      ]}
      {...nativeWithoutStyle}
    >
      {wrapInTextIfNeeded(children, textClassName)}
    </TextInput>
  );
};

export default TextArea;
