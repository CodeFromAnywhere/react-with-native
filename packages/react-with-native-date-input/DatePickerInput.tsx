import * as React from "react";
import DatePicker from "react-datepicker";
import { inputClass, Inputs } from "../DataForm";
import "react-datepicker/dist/react-datepicker.css";

type Value = Inputs["date"]["value"];

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerInput = ({
  value,
  onChange,
}: {
  value: Value;
  onChange: (v: Value) => void;
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
export default DatePickerInput;
