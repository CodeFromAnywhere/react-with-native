import * as React from "react";
import { A } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

const AScreen = () => {
  return (
    <Template
      component={
        <A href="https://github.com/Code-From-Anywhere/react-with-native" />
      }
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "A",
  instalation: "yarn add react-with-native",
  imports: 'import { A } from "react-with-native',
  usage: [
    {
      title: "Usage",
      code: '<A href="https://github.com/Code-From-Anywhere/react-with-native"/>',
    },
  ],
};

export default AScreen;
