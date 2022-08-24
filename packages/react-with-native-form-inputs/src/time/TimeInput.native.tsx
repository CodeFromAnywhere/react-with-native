//todo
import DateTimepicker from "@react-native-community/datetimepicker";
import { PluginComponent } from "react-with-native-form";
import { TimeInputType } from "./types";
// CSS Modules, react-datepicker-cssmodules.css

export const TimeInput: PluginComponent<TimeInputType> = ({
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

TimeInput.defaultInitialValue = new Date();
