import * as React from "react";
import { ActivityIndicator as RNActivityIndicator } from "react-native";
import { UIActivityIndicatorType } from "./ActivityIndicator.type";

const ActivityIndicator = ({
  className,
  ...props
}: UIActivityIndicatorType) => {
  return <RNActivityIndicator {...props} {...props.native} />;
};
export default ActivityIndicator;
