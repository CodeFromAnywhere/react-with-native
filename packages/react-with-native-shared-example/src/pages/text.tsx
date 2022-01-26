import * as React from "react";
import { Text } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

const TextScreen = () => {
  return (
    <Template
      component={<Text>This is a react with native Text component</Text>}
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "Text",
  instalation: "yarn add react-with-native",
  imports: 'import { Text } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: "<Text>This is a react with native Text component</Text>",
    },
  ],
};

export default TextScreen;
