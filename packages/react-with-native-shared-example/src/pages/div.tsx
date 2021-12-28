import * as React from "react";
import { Div } from "react-with-native";

const DivScreen = () => {
  return (
    <Div className={"flex flex-1"}>
      <Div className={"flex-1 bg-red-500"}></Div>
      <Div className={"flex-1 bg-yellow-500"}></Div>
      <Div className={"flex-1 bg-blue-500"}></Div>
      <Div className={"flex-1 bg-green-500"}></Div>
    </Div>
  );
};

export default DivScreen;