import * as React from "react";
import { P, Strong } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

const PScreen = () => {
  return (
    <Template
      component={
        <P className="w-1/2">
          The <Strong>Netherlands</Strong>, informally Holland, is a country
          located in Western Europe with territories in the Caribbean. It is the
          largest of four constituent countries of the Kingdom of the
          Netherlands.
        </P>
      }
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "P",
  instalation: "yarn add react-with-native",
  imports: 'import { P } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: `
      <P>The <Strong>Netherlands</Strong>, informally Holland, is 
      a country located in Western Europe with territories in the Caribbean. 
      It is the largest of four constituent countries of the Kingdom of the 
      Netherlands.</P>`,
    },
  ],
};

export default PScreen;
