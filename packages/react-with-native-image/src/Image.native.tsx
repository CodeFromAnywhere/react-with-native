import * as React from "react";
import { Image as RNImage } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "react-with-native";
import type { ImageType } from "./Image.type";

export const Image = ({ native, className, style, src }: ImageType) => {
  const tailwind = useTailwind();
  native = native!; //TODO: How can I make the native prop required, if you render a native component?

  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    <RNImage style={[tailwindStyle, style]} {...native} source={{ uri: src }} />
  );
};

export default Image;
