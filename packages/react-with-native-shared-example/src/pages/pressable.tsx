import * as React from "react";
import { Text, Pressable } from "react-with-native";
import Template from "../template";

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
      title={"Pressable"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Pressable } from "react-with-native";`;

const USAGE = `
<Pressable
  className="p-4 bg-yellow-400 rounded-full"
  onClick={handleModal}
>
  <Text>Press me :)</Text>
</Pressable>`;

export default PressableScreen;
