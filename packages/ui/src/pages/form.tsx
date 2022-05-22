import { Div } from "react-with-native";
import {
  PasswordInputType,
  TextInputType,
} from "react-with-native-form-inputs";
import { Form, makeField } from "../components/Form";
const fields = [
  makeField("text", {
    field: "username",
    title: "Username",
    hasError: (value) =>
      value.length === 0 ? "Please fill in a username" : false,
  }),
  makeField("password", {
    field: "password",
    title: "Password",
    hasError: (value) =>
      value.length === 0 ? "Please fill in a password" : false,
  }),
];

// Now your form can be rendered like this
// Make sure to provide the generic based on the inputs type interfaces
// otherwise your form won't be typesafe!

const FormPage = () => {
  return (
    <Div className="p-4">
      <Form<{
        username: TextInputType["value"];
        password: PasswordInputType["value"];
      }>
        title="Login"
        fields={fields}
        onSubmit={(values, resolve, reject) => {
          //do something with those values
          const message = `Form submitted. Hello, ${values.username}`;
          resolve(message);
        }}
      />
    </Div>
  );
};

export default FormPage;
