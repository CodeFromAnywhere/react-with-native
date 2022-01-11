import * as React from "react";
import { Div } from "react-with-native";
import Template from "../template";

const DivScreen = () => {
  return (
    <Template
      component={
        <Div className={"flex flex-1 h-60 w-96"}>
          <Div className={"flex-1 bg-red-500"}></Div>
          <Div className={"flex-1 bg-yellow-500"}></Div>
          <Div className={"flex-1 bg-blue-500"}></Div>
          <Div className={"flex-1 bg-green-500"}></Div>
        </Div>
      }
      title={"Div"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Div } from "react-with-native";`;

const USAGE = `
<Div className={"flex flex-1 h-60 w-96"}>
  <Div className={"flex-1 bg-red-500"}></Div>
  <Div className={"flex-1 bg-yellow-500"}></Div>
  <Div className={"flex-1 bg-blue-500"}></Div>
  <Div className={"flex-1 bg-green-500"}></Div>
</Div>`;

export default DivScreen;
