import * as React from "react";
import { SvgType } from "./Svg.type";

const Svg = ({ src, width, height, className }: SvgType) => {
  const Icon: any = src;
  return <Icon width={width} height={height} className={className} />;
};

export default Svg;
