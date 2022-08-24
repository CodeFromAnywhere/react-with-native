import { Div } from "react-with-native";
import { PluginComponent } from "react-with-native-form";
import { StarsInputType } from "./types";

export const StarsInput: PluginComponent<StarsInputType> = ({
  onChange,
  value,
  extra,
  config,
}) => {
  config = config || {};

  return <Div>Stars Input (Coming soon)</Div>;
};

StarsInput.defaultInitialValue = null;
