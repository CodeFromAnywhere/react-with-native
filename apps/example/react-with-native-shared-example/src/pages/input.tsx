import * as React from "react";
import { Input } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

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
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "Input",
  instalation: "yarn add react-with-native",
  imports: 'import { Input } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: `
      <Input
        placeholder="Type here..."
        className="text-2xl"
        native={{placeholder:"Type here..."}}
      />`,
    },
  ],
};

export default InputScreen;
