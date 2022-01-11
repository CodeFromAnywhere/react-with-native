import * as React from "react";
import { Text } from "react-with-native";
import Template from "../template";

const TextScreen = () => {
  return (
    <Template
      component={<Text>This is a react with native Text component</Text>}
      title={"Text"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Text } from "react-with-native";`;

const USAGE = `
<Text>This is a react with native Text component</Text>`;

export default TextScreen;
