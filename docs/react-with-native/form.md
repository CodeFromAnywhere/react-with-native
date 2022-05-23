# Forms

Plug-and-play yet unopinionated and extensible forms constructor for React and React Native apps with high-class typescript support!

# Installation

```bash
yarn add react-with-native-form
```

Please note:

- You need to create your own inputs, or you can use our default inputs, see [Form inputs](/react-with-native/form-inputs) for installation instructions
- You need [react-with-native](/react-with-native) for this.

# Usage

Create a wrapper like this:

```tsx
import DataForm, {
  setConfig,
  makeInputField,
  Field,
  Keys,
  DataFormProps,
} from "react-with-native-form";

import {
  TextInput,
  TextInputType,
  PasswordInput,
  PasswordInputType,
  DateInput,
  DateInputType,
  DatetimeInput,
  DatetimeInputType,
  NumberInput,
  NumberInputType,
  SelectInput,
  SelectInputType,
  StarsInput,
  StarsInputType,
  PhoneInput,
  PhoneInputType,
  TextAreaInput,
  TextAreaInputType,
  TimeInputType,
  TimeInput,
  ToggleInput,
  ToggleInputType,
} from "react-with-native-form-inputs";

const text = { component: TextInput };
const password = { component: PasswordInput };
const date = { component: DateInput };
const datetime = { component: DatetimeInput };
const number = { component: NumberInput };
const select = { component: SelectInput };
const stars = { component: StarsInput };
const phone = { component: PhoneInput };
const textArea = { component: TextAreaInput };
const time = { component: TimeInput };
const toggle = { component: ToggleInput };

const plugins = {
  text,
  password,
  date,
  datetime,
  number,
  select,
  stars,
  phone,
  textArea,
  time,
  toggle,
};

export const makeField = <T extends Keys<Inputs>>(
  type: T,
  config: Omit<Field<Inputs, T>, "type">
) => makeInputField<Inputs, T>(type, config);

export interface Inputs {
  text: TextInputType;
  password: PasswordInputType;
  date: DateInputType;
  datetime: DatetimeInputType;
  number: NumberInputType;
  select: SelectInputType;
  stars: StarsInputType;
  phone: PhoneInputType;
  textArea: TextAreaInputType;
  time: TimeInputType;
  toggle: ToggleInputType;
}

export type InputValues = {
  [key in keyof Inputs]: Inputs[key]["value"];
};

export const Form = <TState extends { [key: string]: any } = any>(
  props: DataFormProps<Inputs, TState>
) =>
  setConfig<Inputs, TState>(DataForm, {
    plugins,
  })(props);
```

Now you can create a form like this:

```tsx
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
        title="Form Example"
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
```
