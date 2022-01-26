import * as React from "react";
import { ImageType } from "./Image.type";
import NextImage from "next/image";
const Image = ({ native, ...props }: ImageType) => {
  return <NextImage {...props} />;
};

export default Image;
