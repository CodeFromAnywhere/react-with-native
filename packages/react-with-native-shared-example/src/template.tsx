import * as React from "react";
import { Div, Text, CodeBlock } from "react-with-native";

const Template = ({
  component,
  title,
  instalation,
  imports,
  usage,
}: {
  component: any;
  title: string;
  instalation: string;
  imports: string;
  usage: string;
}) => {
  return (
    <Div className={"flex-1 flex-row justify-center items-center p-16"}>
      <Text className="p-4 text-2xl text-gray-600">{title}</Text>
      <Div className={"flex-1 flex-row justify-center items-center p-4 mx-4"}>
        {component}
      </Div>
      <Text className="p-4 text-2xl text-gray-600">Instalation</Text>
      <Div className="flex p-4 mx-4">
        <CodeBlock code={instalation} language={"tsx"} />
      </Div>
      <Text className="p-4 text-2xl text-gray-600">Imports</Text>
      <Div className="flex p-4 mx-4">
        <CodeBlock code={imports} language={"tsx"} />
      </Div>
      <Text className="p-4 text-2xl text-gray-600">Usage</Text>
      <Div className="flex p-4 mx-4">
        <CodeBlock code={usage} language={"tsx"} />
      </Div>
    </Div>
  );
};

export default Template;
