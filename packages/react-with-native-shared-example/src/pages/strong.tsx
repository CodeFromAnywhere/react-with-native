import * as React from "react";
import { Strong, Text } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

const StrongScreen = () => {
  return (
    <Template
      component={
        <Text>
          React <Strong>with</Strong> Native
        </Text>
      }
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "Strong",
  instalation: "yarn add react-with-native",
  imports: 'import { Strong } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: "<Text>React <Strong>with</Strong> Native</Text>",
    },
  ],
};

export default StrongScreen;
