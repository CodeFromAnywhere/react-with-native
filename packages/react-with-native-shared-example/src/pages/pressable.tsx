import * as React from "react";
import { Text, Pressable } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

const PressableScreen = () => {
  const handleModal = () => {
    alert("I'm a RWN component");
  };
  return (
    <Template
      component={
        <Pressable
          className="p-4 bg-yellow-400 rounded-full"
          onClick={handleModal}
        >
          <Text>Press me :)</Text>
        </Pressable>
      }
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "Pressable",
  instalation: "yarn add react-with-native",
  imports: 'import { Pressable } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: `
      <Pressable
        className="p-4 bg-yellow-400 rounded-full"
        onClick={handleModal}
      >
        <Text>Press me :)</Text>
      </Pressable>`,
    },
  ],
};

export default PressableScreen;
