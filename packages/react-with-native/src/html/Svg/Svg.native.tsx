import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { SvgType } from "./Svg.type";

export const Svg = ({ src, width, height, className, style }: SvgType) => {
  const tailwind = useTailwind();
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};

  const Icon: any = src;
  return <Icon width={width} height={height} style={[style, tailwindStyle]} />;
};
