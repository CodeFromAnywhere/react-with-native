import * as React from "react";
import { Div, Strong, Text } from 'react-with-native';

const StrongScreen = () => {
  return (
    <Div className={"flex absolute inset-0 justify-center items-center"} >
        <Text>React <Strong>with</Strong> Native</Text>
    </Div>
  );
}

export default StrongScreen;