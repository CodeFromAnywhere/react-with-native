import * as React from "react";
import { Div, Text } from 'react-with-native';

const TextScreen = () => {
  return (
    <Div className={"flex absolute inset-0 justify-center items-center"}>
      <Text>This is a react with native Text component</Text>
      <Text className={"text-base"}>This is a react with native Text component</Text>
      <Text className={"text-lg"}>This is a react with native Text component</Text>
    </Div>
  );
}

export default TextScreen;