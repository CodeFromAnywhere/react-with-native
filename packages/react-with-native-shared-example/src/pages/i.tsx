import * as React from "react";
import { Div, I, Text } from 'react-with-native';

const IScreen = () => {
  return (
    <Div className={"flex absolute inset-0 justify-center items-center"} >
        <Text>React <I>with</I> Native</Text>
    </Div>
  );
}

export default IScreen;