import * as React from "react";
import { Image as RNImage } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "react-with-native";
import type { NativeImageType } from "./Image.type";

export const Image = ({ native, className, style, src }: NativeImageType) => {
  const tailwind = useTailwind();
  native = native!; //TODO: How can I make the native prop required, if you render a native component?

  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};

  if (typeof src === "number")
    return <RNImage style={[tailwindStyle, style]} {...native} source={src} />;

  return (
    <RNImage style={[tailwindStyle, style]} {...native} source={{ uri: src }} />
  );
};

export default Image;
