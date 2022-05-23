import { Div } from "react-with-native";
import { Form, InputValues, makeField } from "../components/Form";
const fields = [
  makeField("text", {
    field: "text",
    title: "Text",
    hasError: (value) => (value.length === 0 ? "Please fill in a text" : false),
  }),
  makeField("password", {
    field: "password",
    title: "Password",
    hasError: (value) =>
      value.length === 0 ? "Please fill in a password" : false,
  }),

  makeField("date", { field: "date", title: "Date" }),
  makeField("datetime", { field: "datetime", title: "Datetime" }),
  makeField("number", { field: "number", title: "Number" }),
  makeField("phone", { field: "phone", title: "Phone" }),
  makeField("select", {
    field: "select",
    title: "Select",
    extra: {
      options: [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
      ],
    },
  }),
  makeField("stars", { field: "stars", title: "Stars" }),
  makeField("textArea", { field: "textArea", title: "Text area" }),
  makeField("time", { field: "time", title: "Time" }),
  makeField("toggle", { field: "toggle", title: "Toggle" }),
];

// Now your form can be rendered like this
// Make sure to provide the generic based on the inputs type interfaces
// otherwise your form won't be typesafe!

const FormPage = () => {
  return (
    <Div scroll className="p-4">
      <Form<{
        text: InputValues["text"];
        password: InputValues["password"];
        date: InputValues["date"];
        datetime: InputValues["datetime"];
        number: InputValues["number"];
        phone: InputValues["phone"];
        select: InputValues["select"];
        stars: InputValues["stars"];
        textArea: InputValues["textArea"];
        time: InputValues["time"];
        toggle: InputValues["toggle"];
      }>
        title="Login"
        fields={fields}
        onSubmit={(values, resolve, reject) => {
          //do something with those values
          const message = `Form submitted. Hello, ${values.text}`;
          resolve(message);
        }}
      />
    </Div>
  );
};

export default FormPage;
