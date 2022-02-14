import * as React from "react";
import { Div, Text } from "react-with-native";
import CodeBlock from "./CodeBlock";

export type TemplateType = {
  title: string;
  instalation: string;
  imports: string;
  usage: Usage[];
};

type Usage = {
  title?: string;
  description?: string;
  code: string;
};

const Template = ({
  component,
  info, //data || template
}: {
  component: any;
  info: TemplateType;
}) => {
  return (
    <Div className={"flex-1 flex-row justify-center items-center p-16"}>
      <Text className="p-4 text-2xl text-gray-600">{info.title}</Text>
      <Div className={"flex-1 flex-row justify-center items-center p-4"}>
        {component}
      </Div>
      <TemplateSection title={"Instalation"} code={info.instalation} />
      <TemplateSection title={"Imports"} code={info.imports} />

      {info.usage.map((usage, index) => (
        <TemplateSection
          key={index}
          title={usage.title}
          description={usage.description}
          code={usage.code}
        />
      ))}
    </Div>
  );
};

const TemplateSection = ({
  title,
  description,
  code,
}: {
  title?: string;
  description?: string;
  code: string;
}) => {
  return (
    <Div className="flex-1 p-4">
      {title ? (
        <Text className="py-4 text-2xl text-gray-600">{title}</Text>
      ) : null}
      {description ? (
        <Text className="py-4 text-lg text-gray-600">{description}</Text>
      ) : null}
      <CodeBlock code={code} language={"tsx"} />
    </Div>
  );
};

export default Template;
