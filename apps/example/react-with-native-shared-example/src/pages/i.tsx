import * as React from "react";
import { I, Text } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

const IScreen = () => {
  return (
    <Template
      component={
        <Text>
          React <I>with</I> Native
        </Text>
      }
      info={info}
    />
  );
};

const INSTALATION = `
`;

const IMPORTS = `
`;

const USAGE = `
<Text>React <I>with</I> Native</Text>`;

const info: TemplateType = {
  title: "I",
  instalation: "yarn add react-with-native",
  imports: 'import { I } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: "<Text>React <I>with</I> Native</Text>",
    },
  ],
};

export default IScreen;
