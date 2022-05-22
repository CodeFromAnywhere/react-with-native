import * as React from "react";
import { ImgType } from "./Img.type";
import NextImage from "next/image";

export const Image = ({ native, ...props }: ImgType) => {
  //@ts-ignore
  return <img {...props} />;
};

export default Image;
