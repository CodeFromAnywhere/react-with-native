import * as React from "react";
import { Label } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

const LabelScreen = () => {
  return <Template component={<Label>label</Label>} info={info} />;
};

const info: TemplateType = {
  title: "Label",
  instalation: "yarn add react-with-native",
  imports: 'import { Label } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: "<Label>label</Label>",
    },
  ],
};

export default LabelScreen;
