import * as React from "react";
import { Li } from "react-with-native";
import Template from "../template";

const LiScreen = () => {
  return (
    <Template
      component={
        <>
          <Li>Li</Li>
          <Li>Li</Li>
          <Li>Li</Li>
        </>
      }
      title={"Li"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Li } from "react-with-native";`;

const USAGE = `
<Li>Li</Li>`;

export default LiScreen;
