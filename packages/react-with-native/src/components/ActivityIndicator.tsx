import * as React from "react";
import { UIActivityIndicatorType } from "./ActivityIndicator.type";

const ActivityIndicator = (props: UIActivityIndicatorType) => {
  const sizeClass =
    typeof props.size === "number"
      ? ""
      : props.size === "large"
      ? "w-16 h-16"
      : "w-6 h-6";
  const sizeStyle =
    typeof props.size === "number"
      ? { width: props.size, height: props.size }
      : undefined;

  const borderClass =
    props.color === "white" ? "border-white" : "border-gray-900";
  return (
    <div
      style={sizeStyle}
      className={`${sizeClass} border-b-2 ${borderClass} rounded-full animate-spin ${props.className}`}
    ></div>
  );
};

export default ActivityIndicator;
