import * as React from "react";
import Form, { makeField } from "../wrappers/formProps";
import { Div } from "react-with-native";

const FormScreen = () => {
  return (
    <Div className={"flex absolute inset-0 justify-center items-center"}>
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
  );
};

export default FormScreen;