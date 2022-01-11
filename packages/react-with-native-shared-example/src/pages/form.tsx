import * as React from "react";
import Form, { makeField } from "../wrappers/formProps";
import { Div } from "react-with-native";
import Template from "../template";

const FormScreen = () => {
  return (
    <Template
      component={
        <Div className={"flex p-4"}>
          <Form<{
            email: string;
            password: string;
            passwordRepeat: string;
            subscribeToNewsletter: boolean;
          }>

            onSubmit={() => {}}
            fields={[
              makeField("text", {
                field: "email",
                title: "email",
              }),
              makeField("password", {
                field: "password",
                title: "password",
              }),
              makeField("password", {
                field: "passwordRepeat",
                title: "password repeat",
              }),

              makeField("toggle", {
                field: "subscribeToNewsletter",
                extra: {
                  label: "Subscribe to newsletter",
                },
              }),
            ]}
          />
        </Div>
      }
      title={"Form"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Div } from "react-with-native";`;

const USAGE = `
<Form<{
  email: string;
  password: string;
  passwordRepeat: string;
  subscribeToNewsletter: boolean;
}>
  onSubmit={() => {}}
  fields={[
    makeField("text", {
      field: "email",
      title: "email",
    }),
    makeField("password", {
      field: "password",
      title: "password",
    }),
    makeField("password", {
      field: "passwordRepeat",
      title: "password repeat",
    }),

    makeField("toggle", {
      field: "subscribeToNewsletter",
      extra: {
        label: "Subscribe to newsletter",
      },
    }),
  ]}
/>`;

export default FormScreen;
