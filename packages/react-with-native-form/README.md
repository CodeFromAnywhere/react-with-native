# react-with-native-form

Plug-and-play yet unopinionated and extensible forms constructor for React and React Native apps

# Installation

1. make sure you install [react-with-native](../..)

2. `yarn add react-with-native-form`

# Usage

Choose the packages you want to include for the different input types:

```
yarn add react-with-native-text-input react-with-native-password-input react-with-native-toggle-input react-with-native-select-input react-with-native-textarea-input react-with-native-date-input react-with-native-phone-input react-with-native-number-input
```

Then create a wrapper like this:

```
import DataForm, {
    setConfig,
    makeInputField,
    Field,
    Keys,
    DataFormProps,
    Plugin,
  } from "react-with-native-form";

  import TextInput, { TextInputType } from "react-with-native-text-input";
  import PasswordInput, {
    PasswordInputType,
  } from "react-with-native-password-input";
  import ToggleInput, { ToggleInputType } from "react-with-native-toggle-input";
  import ImageInput, { ImageInputType, ImageValue } from "./ImageInput";

  import SelectInput, { SelectInputType } from "react-with-native-select-input";
  import TextAreaInput, {
    TextAreaInputType,
  } from "react-with-native-textarea-input";
  import DateInput, { DateInputType } from "react-with-native-date-input";
  import PhoneInput, { PhoneInputType } from "react-with-native-phone-input";
  import NumberInput, { NumberInputType } from "react-with-native-number-input";
  import { getEnv } from "react-with-native";

  export const isValidImage = (value: ImageValue | null) =>
    !!value?.base64 && !!value?.url;

  const text = {
    component: TextInput,
  };


  const phone = {
    component: PhoneInput,
  };
  const date = {
    component: DateInput,
  };
  const password = {
    component: PasswordInput,
  };

  const toggle = {
    component: ToggleInput,
  };

  const image = {
    component: ImageInput,
  };


  const select = {
    component: SelectInput,
  };


  const textArea = {
    component: TextAreaInput,
  };

  const number = {
    component: NumberInput,
  };

  const plugins = {
    text,
    password,
    toggle,
    image,
    select,
    textArea,
    date,
    phone,
    number,
  };

  export const makeField = <T extends Keys<AllInputs>>(
    type: T,
    config: Omit<Field<AllInputs, T>, "type">
  ) => makeInputField<AllInputs, T>(type, config);

  export interface AllInputs {
    text: TextInputType;
    password: PasswordInputType;
    toggle: ToggleInputType;
    image: ImageInputType;
    select: SelectInputType;
    textArea: TextAreaInputType;
    date: DateInputType;
    phone: PhoneInputType;
    number: NumberInputType;
  }

  export const Form = <TState extends { [key: string]: any } = any>(
    props: DataFormProps<AllInputs, TState>
  ) =>
    setConfig<AllInputs, TState>(DataForm, {
      plugins,
    })(props);
```

Now you can create a form like this:

```
#import this
import { Form, makeField } from "../components/form";

# define your fields
const fields =
      [
          makeField("text", {
            field: "username",
            title: "Username",
            startSection: true,
            sectionTitle: "Account",
            extra: {
              placeholder: "Username",
            },
            hasError: (value) =>
              !isValidVarchar(value as string, false)
                ? "Fill in a username that's less than 256 characters"
                : false,
          }),

          makeField("text", {
            field: "email",
            title: "Email",
            extra: {
              placeholder: "Email",
            },
            hasError: (value) =>
              !isValidVarchar(value as string, false)
                ? "Fill in an email that's less than 256 characters"
                : false,
          }),

          makeField("password", {
            field: "password1",
            title: "Password",
            extra: {
              placeholder: "password",
            },
            hasError: (value) =>
              !isValidVarchar(value as string, false, 1024)
                ? "Fill in a password shorter than 1024 characters"
                : false,
          }),

          makeField("password", {
            field: "password2",
            title: "Repeat Password",
            extra: {
              placeholder: "password",
            },
            hasError: (value) =>
              !isValidVarchar(value as string, false, 1024)
                ? "Fill in a password shorter than 1024 characters"
                : false,
          }),

          makeField("text", {
            field: "name",
            title: "Name",
            startSection: true,
            sectionTitle: "Personal Information",
            extra: {
              placeholder: "Name",
            },
            hasError: (value) =>
              !isValidVarchar(value as string, false)
                ? "Fill in a name that's less than 256 characters"
                : false,
          }),

          makeField("text", {
            field: "phone",
            title: "Phone number",
            extra: {
              placeholder: "Phone number",
            },
            hasError: (value) =>
              !isValidVarchar(value as string, false)
                ? "Fill in a phone number"
                : false,
          }),

          makeField("text", {
            field: "country",
            title: "Country",
            startSection: true,
            sectionTitle: "Geography",
            extra: {
              placeholder: "Country",
            },
            hasError: (value) =>
              !isValidVarchar(value as string, false)
                ? "Fill in a country that's less than 256 characters"
                : false,
          }),

          makeField("text", {
            field: "city",
            title: "City",
            extra: {
              placeholder: "City",
            },
            hasError: (value) =>
              !isValidVarchar(value as string, false)
                ? "Fill in a city that's less than 256 characters"
                : false,
          }),
        ];

# render this
 <Form
    title="Become a host"
    fields={fields}
    onSubmit={(values,resolve,reject) => {

        //do something with those values
    }}
    />

```

And you're done!
