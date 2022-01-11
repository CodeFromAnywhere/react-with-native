import * as React from "react";
import { Input } from "react-with-native";
import Template from "../template";

const InputScreen = () => {
  return (
    <Template
      component={
        <Input
          placeholder="Type here..."
          className="text-2xl"
          native={{ placeholder: "Type here..." }}
        />
      }
      title={"Input"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Input } from "react-with-native";`;

const USAGE = `
<Input
  placeholder="Type here..."
  className="text-2xl"
  native={{placeholder:"Type here..."}}
/>`;

export default InputScreen;
