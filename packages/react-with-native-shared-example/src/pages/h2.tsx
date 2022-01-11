import * as React from "react";
import { H2 } from "react-with-native";
import Template from "../template";

const H2Screen = () => {
  return (
    <Template
      component={<H2>Text here!</H2>}
      title={"H2"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { H2 } from "react-with-native";`;

const USAGE = `
<H2>Text here!</H2>`;

export default H2Screen;
