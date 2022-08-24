import * as React from "react";
import { Image as RNImage } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import type { NativeImgType } from "./Img.type";

export const Image = ({ native, className, style, src }: NativeImgType) => {
  const tailwind = useTailwind();
  native = native!; //TODO: How can I make the native prop required, if you render a native component?

  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};

  if (typeof src === "number")
    return <RNImage style={[tailwindStyle, style]} {...native} source={src} />;

  return (
    <RNImage style={[tailwindStyle, style]} {...native} source={{ uri: src }} />
  );
};
