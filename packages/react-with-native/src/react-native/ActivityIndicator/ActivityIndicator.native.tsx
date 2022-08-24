import * as React from "react";
import { ActivityIndicator as RNActivityIndicator } from "react-native";
import { ActivityIndicatorType } from "./ActivityIndicator.type";

export const ActivityIndicator = ({
  className,
  ...props
}: ActivityIndicatorType) => {
  return <RNActivityIndicator {...props} {...props.native} />;
};
