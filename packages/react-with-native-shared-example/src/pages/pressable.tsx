import * as React from "react";
import { Div, Text, Pressable } from 'react-with-native';

const PressableScreen = () => {
    const handleModal = () => {alert("I'm a RWN component");};
  return (
    <Div className={"flex absolute inset-0 justify-center items-center"}>
      <Pressable
          className="p-4 bg-yellow-400 rounded-full"
          onClick={handleModal}
        >
          <Text>Press me :)</Text>
        </Pressable>
    </Div>
  );
}

export default PressableScreen;