import * as React from "react";
import { ActivityIndicatorType } from "./ActivityIndicator.type";

export const ActivityIndicator = (props: ActivityIndicatorType) => {
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
    props.color === "white"
      ? "border-white dark:border-gray-900"
      : "border-gray-900 dark:border-white";

  const className = `${sizeClass} border-b-2 ${borderClass} rounded-full animate-spin ${
    props.className || ""
  }`;

  return <div style={sizeStyle} className={className} />;
};
