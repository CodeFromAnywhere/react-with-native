import * as React from "react";
import Form, { makeField } from "../wrappers/Form";
import { Div } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

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
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "Form",
  instalation: "yarn add react-with-native",
  imports: 'import { Div } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: `
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
      />`,
    },
    {
      code: `
      const text = {
        component: TextInput,
        config: {},
      };
      
      const password = {
        component: PasswordInput,
        config: {},
      };
      
      const toggle = {
        component: ToggleInput,
        config: {},
      };
      
      const plugins = {
        text,
        password,
        toggle,
      };`,
      description: "Just a test",
    },
    {
      code: `
      export const makeField = <T extends Keys<AllInputs>>(
        type: T,
        config: Omit<Field<AllInputs, T>, "type">
      ) => makeInputField<AllInputs, T>(type, config);
      `,
      description: "Just a test",
    },
    {
      code: `
      export interface AllInputs {
        text: TextInputType;
        password: PasswordInputType;
        toggle: ToggleInputType;
      }
      `,
      description: "Just a test",
    },
    {
      code: `
      type AnyObj = { [key: string]: any };
      
      const Form = <TState extends AnyObj = any>(
        props: DataFormProps<AllInputs, TState>
      ) =>
        setConfig<AllInputs, TState>(DataForm, {
          plugins,
        })(props);
      
      export default Form;
      `,
      description: "Just a test",
    },
  ],
};

export default FormScreen;
