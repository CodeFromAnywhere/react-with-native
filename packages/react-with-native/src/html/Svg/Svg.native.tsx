import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { SvgType } from "./Svg.type";

const Svg = ({ src, width, height, className }: SvgType) => {
  const tailwind = useTailwind();
  const tailwindStyle = className ? tailwind(className) : {};

  const Icon: any = src;
  return <Icon width={width} height={height} />;
};

export default Svg;
