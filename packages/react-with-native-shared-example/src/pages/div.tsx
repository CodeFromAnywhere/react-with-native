import * as React from "react";
import { Div } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

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
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "Div",
  instalation: "yarn add react-with-native",
  imports: 'import { Div } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: `
    <Div className={"flex flex-1 h-60 w-96"}>
      <Div className={"flex-1 bg-red-500"}></Div>
      <Div className={"flex-1 bg-yellow-500"}></Div>
      <Div className={"flex-1 bg-blue-500"}></Div>
      <Div className={"flex-1 bg-green-500"}></Div>
    </Div>`,
    },
  ],
};

export default DivScreen;
