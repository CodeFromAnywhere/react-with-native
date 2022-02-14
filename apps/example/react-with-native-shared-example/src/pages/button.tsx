import * as React from "react";
import { Button } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

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
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "Button",
  instalation: "yarn add react-with-native",
  imports: 'import { Button } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: `
      <Button
        onClick={handleModal}
        className="text-blue-500"
        native={{ title, onPress: handleModal, color: "blue" }}
      >
        {title}
      </Button>`,
    },
  ],
};

export default ButtonScreen;
