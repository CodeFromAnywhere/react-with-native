import * as React from "react";
import { Div, Input } from 'react-with-native';

const InputScreen = () => {
  return (
      <Div className={"flex flex-1 items-center justify-center bg-blue-400"} >
        <Input
            placeholder="Type here..."
            className="text-2xl"
            native={{placeholder:"Type here..."}}
        />
      </Div>
  );
}

export default InputScreen;