import * as React from "react";
import { Li, Ul } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

const LiScreen = () => {
  return (
    <Template
      component={
        <Ul>
          <Li>Li</Li>
          <Li>Li</Li>
          <Li>Li</Li>
        </Ul>
      }
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "Li",
  instalation: "yarn add react-with-native",
  imports: 'import { Li } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: "<Li>Li</Li>",
    },
  ],
};

export default LiScreen;
