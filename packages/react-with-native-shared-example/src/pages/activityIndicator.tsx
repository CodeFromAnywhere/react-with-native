import * as React from "react";
import { Div, ActivityIndicator } from "react-with-native";

const ActivityIndicatorScreen = () => {
  return (
    <Div className={"flex absolute inset-0 justify-center items-center"}>
        <ActivityIndicator />
    </Div>
  );
};

export default ActivityIndicatorScreen;
