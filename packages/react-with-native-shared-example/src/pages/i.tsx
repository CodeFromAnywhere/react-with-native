import * as React from "react";
import { I, Text } from "react-with-native";
import Template from "../template";

const IScreen = () => {
  return (
    <Template
      component={
        <Text>
          React <I>with</I> Native
        </Text>
      }
      title={"I"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { I } from "react-with-native";`;

const USAGE = `
<Text>React <I>with</I> Native</Text>`;

export default IScreen;
