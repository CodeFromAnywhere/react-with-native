import * as React from "react";
import { SvgType } from "./Svg.type";

export const Svg = ({ src, width, height, className, style }: SvgType) => {
  const Icon: any = src;
  return (
    <Icon width={width} height={height} className={className} style={style} />
  );
};
