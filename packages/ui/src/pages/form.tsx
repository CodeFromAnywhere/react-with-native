import { Div } from "react-with-native";
import { Item } from "react-with-native-select";
import { Form, InputValues, makeField } from "../components/Form";
import useStore from "../store";

const options: Item<string>[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
  { value: "5", label: "Option 5" },
  { value: "6", label: "Option 6" },
  { value: "7", label: "Option 7" },
  { value: "8", label: "Option 8" },
];

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
      options,
    },
  }),

  makeField("selectMultiple", {
    field: "selectMultiple",
    title: "Select multiple",
    extra: {
      options,
    },
  }),
  makeField("stars", { field: "stars", title: "Stars" }),
  makeField("textArea", { field: "textArea", title: "Text area" }),
  makeField("time", { field: "time", title: "Time" }),
  makeField("toggle", {
    field: "toggle",
    title: "Toggle",
    extra: { label: "Toggle this on or off" },
  }),
];

// Now your form can be rendered like this
// Make sure to provide the generic based on the inputs type interfaces
// otherwise your form won't be typesafe!

const FormPage = () => {
  const [name] = useStore("name");
  return (
    <Div scroll className="p-4 w-full mx-4 lg:mx-20">
      <Form<{
        text: InputValues["text"];
        password: InputValues["password"];
        date: InputValues["date"];
        datetime: InputValues["datetime"];
        number: InputValues["number"];
        phone: InputValues["phone"];
        select: InputValues["select"];
        selectMultiple: InputValues["selectMultiple"];
        stars: InputValues["stars"];
        textArea: InputValues["textArea"];
        time: InputValues["time"];
        toggle: InputValues["toggle"];
      }>
        title="Form Example"
        fields={fields}
        onSubmit={(values, resolve, reject) => {
          //do something with those values
          const message = `Form submitted. Hello, ${values.text}`;
          resolve(message);
        }}
        defaultValues={{ text: name || "" }}
      />
    </Div>
  );
};

export default FormPage;
