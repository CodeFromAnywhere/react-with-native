import * as React from "react";
import { ActivityIndicator } from "react-with-native";
import Template from "../template";

const ActivityIndicatorScreen = () => {
  return (
    <Template
      component={<ActivityIndicator />}
      title={"Activity Indicator"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { ActivityIndicator } from "react-with-native";`;

const USAGE = `
<ActivityIndicator/>`;

export default ActivityIndicatorScreen;
