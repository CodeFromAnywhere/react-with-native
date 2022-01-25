import * as React from "react";
import { H2 } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

const H2Screen = () => {
  return <Template component={<H2>Text here!</H2>} info={info} />;
};

const info: TemplateType = {
  title: "H2",
  instalation: "yarn add react-with-native",
  imports: 'import { H2 } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: "<H2>Text here!</H2>",
    },
  ],
};

export default H2Screen;
