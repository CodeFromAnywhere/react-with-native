import * as React from "react";
import { SvgType } from "./Svg.type";

const Svg = ({ src, width, height, className }: SvgType) => {
  return <img src={src} width={width} height={height} className={className} />;
};

export default Svg;
