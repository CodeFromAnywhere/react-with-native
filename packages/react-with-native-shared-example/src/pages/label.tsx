import * as React from "react";
import { Label } from "react-with-native";
import Template from "../template";

const LabelScreen = () => {
  return (
    <Template
      component={<Label>label</Label>}
      title={"Label"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Label } from "react-with-native";`;

const USAGE = `
<Label>label</Label>`;

export default LabelScreen;
