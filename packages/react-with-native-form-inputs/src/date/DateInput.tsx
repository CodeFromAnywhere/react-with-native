import DatePicker from "react-datepicker";
import { PluginComponent } from "react-with-native-form";
import { DateInputType } from "./types";
import { UI } from "react-with-native-ui";

// CSS Modules, react-datepicker-cssmodules.css

export const DateInput: PluginComponent<DateInputType> = ({
  value,
  onChange,
}) => {
  return (
    <DatePicker
      selected={value}
      onChange={(date: Date) => {
        console.log("date", date);
        onChange(date);
      }}
      dateFormat="dd-MM-yyyy"
      className={UI.dateInput}
    />
  );
};

DateInput.defaultInitialValue = null;
