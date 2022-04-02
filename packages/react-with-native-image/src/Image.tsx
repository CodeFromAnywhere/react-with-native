import * as React from "react";
import { ImageType } from "./Image.type";
import NextImage from "next/image";

export const Image = ({ native, ...props }: ImageType) => {
  //@ts-ignore
  return <img {...props} />;
};

export default Image;
