import * as React from "react";
import { Strong, Text } from "react-with-native";
import Template from "../template";

const StrongScreen = () => {
  return (
    <Template
      component={
        <Text>
          React <Strong>with</Strong> Native
        </Text>
      }
      title={"Strong"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Strong } from "react-with-native";`;

const USAGE = `
<Text>React <Strong>with</Strong> Native</Text>`;

export default StrongScreen;
