import * as React from "react";
import { P, Strong } from "react-with-native";
import Template from "../template";

const PScreen = () => {
  return (
    <Template
      component={
        <P className="w-1/2">
          The <Strong>Netherlands</Strong>, informally Holland, is a
          country located in Western Europe with territories in the Caribbean.
          It is the largest of four constituent countries of the Kingdom of the
          Netherlands.
        </P>
      }
      title={"P"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { P } from "react-with-native";`;

const USAGE = `
<P>The <Strong>Netherlands</Strong>, informally Holland, is 
a country located in Western Europe with territories in the Caribbean. 
It is the largest of four constituent countries of the Kingdom of the 
Netherlands.</P>`;

export default PScreen;
