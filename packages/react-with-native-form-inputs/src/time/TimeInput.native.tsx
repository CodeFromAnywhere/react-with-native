//todo
import * as React from "react";
import DateTimepicker from "@react-native-community/datetimepicker";
import { inputClass, PluginComponent } from "react-with-native-form";
import { TimeInputType } from "./types";
// CSS Modules, react-datepicker-cssmodules.css

export const DateInput: PluginComponent<TimeInputType> = ({
  value,
  onChange,
}) => {
  return (
    <DateTimepicker
      mode="time"
      value={value || new Date()}
      onChange={(event: any, time: any) => onChange(time)}
    />
  );
};

DateInput.defaultInitialValue = new Date();

export default DateInput;
