import * as React from "react";
import { TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { wrapInTextIfNeeded } from "../../util/util";
import { ButtonType } from "./Button.type";

export const Button = ({
  native,
  textClassName,
  className,
  children,
  onClick,
  style,
}: ButtonType) => {
  native = native!;
  const tailwind = useTailwind();
  const { style: nativeStyle, onPress, ...otherNative } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};

  //NB: figure out how I make it work without casting to any because it would need an event which we dont have in rn
  const onPressHandler = onPress ? onPress : () => (onClick as any)?.();
  return (
    <TouchableOpacity
      style={[tailwindStyle, style, nativeStyle]}
      onPress={onPressHandler}
      {...otherNative}
    >
      {wrapInTextIfNeeded(children, textClassName)}
    </TouchableOpacity>
  );
};
