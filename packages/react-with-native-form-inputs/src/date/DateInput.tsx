import DatePicker from "react-datepicker";
import { inputClass, PluginComponent } from "react-with-native-form";
import { DateInputType } from "./types";
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
      className={inputClass}
    />
  );
};

DateInput.defaultInitialValue = null;

export default DateInput;
