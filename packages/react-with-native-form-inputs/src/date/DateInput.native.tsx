import { Div } from "react-with-native";
import { PluginComponent } from "react-with-native-form";
import { DateInputType } from "./types";
import { UI } from "react-with-native-ui";

export const DateInput: PluginComponent<DateInputType> = ({
  value,
  onChange,
}) => {
  return <Div>DateInput (Coming soon)</Div>;
};

DateInput.defaultInitialValue = null;
