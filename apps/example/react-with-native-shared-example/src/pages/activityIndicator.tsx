import * as React from "react";
import { ActivityIndicator } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

const ActivityIndicatorScreen = () => {
  return <Template component={<ActivityIndicator />} info={info} />;
};

const info: TemplateType = {
  title: "Activity Indicator",
  instalation: "yarn add react-with-native",
  imports: 'import { ActivityIndicator } from "react-with-native',
  usage: [
    {
      title: "Usage",
      code: "<ActivityIndicator/>",
    },
  ],
};

export default ActivityIndicatorScreen;
