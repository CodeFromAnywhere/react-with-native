import * as React from "react";
import tailwind from "tailwind-rn";
import { SvgType } from "./Svg.type";
import { SvgXml } from 'react-native-svg';

const Svg = ({ src, width, height, className }: SvgType) => {
  const tailwindStyle = className ? tailwind(className) : {};
  return (
    <SvgXml width={width} style={tailwindStyle} height={height} xml={src} />
  );
};

export default Svg;
