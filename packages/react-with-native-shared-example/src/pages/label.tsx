import * as React from "react";
import { Div, Label } from 'react-with-native';

const LabelScreen = () => {
  return (
    <Div className={"flex absolute inset-0 justify-center items-center"} >
    <Label>
        What's the difference between me and text? :O
    </Label>
    </Div>
  );
}

export default LabelScreen;