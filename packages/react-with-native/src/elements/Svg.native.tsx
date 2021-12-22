import * as React from "react";
import tailwind from "tailwind-rn";
import { SvgType } from "./Svg.type";

const Svg = ({ src, width, height, className }: SvgType) => {
  const tailwindStyle = className ? tailwind(className) : {};

  const Icon: any = src;
  return <Icon width={width} height={height} />;
};

export default Svg;
