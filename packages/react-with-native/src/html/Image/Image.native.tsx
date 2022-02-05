import * as React from "react";
import { Image as RNImage } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { ImageType } from "./Image.type";
const Image = ({ native, className }: ImageType) => {
  const tailwind = useTailwind();
  native = native!; //TODO: How can I make the native prop required, if you render a native component?

  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return <RNImage style={[tailwindStyle]} {...native} />;
};

export default Image;
