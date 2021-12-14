import * as React from "react";
import { Image as RNImage } from "react-native";
import tailwind from "tailwind-rn";
import { ImageType } from "./Image.type";
const Image = ({ native, ...props }: ImageType) => {
  native = native!; //TODO: How can I make the native prop required, if you render a native component?

  const tailwindStyle = props.className ? tailwind(props.className) : {};
  return <RNImage style={[tailwindStyle]} {...native} />;
};

export default Image;
