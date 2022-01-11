import * as React from "react";
import { Button } from "react-with-native";
import Template from "../template";

const ButtonScreen = () => {
  const handleModal = () => {
    alert("I'm a RWN button");
  };
  const title = "Click me";
  return (
    <Template
      component={
        <Button
          onClick={handleModal}
          className="text-blue-500"
          native={{ title, onPress: handleModal, color: "blue" }}
        >
          {title}
        </Button>
      }
      title={"Button"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Button } from "react-with-native";`;

const USAGE = `
  <Button
    onClick={handleModal}
    className="text-blue-500"
    native={{ title, onPress: handleModal, color: "blue" }}
  >
    {title}
  </Button>`;

export default ButtonScreen;
