import { PluginComponent } from "react-with-native-form";
//import DatePicker from "react-datepicker";
import { DatetimeInputType } from "./types";
import Datetime from "react-datetime";
import { useState } from "react";

export const DatetimeInput: PluginComponent<DatetimeInputType> = ({
  extra,
  value,
  onChange,
  ...props
}) => {
  const newExtra: DatetimeInputType["extra"] = { ...extra, type: "dateTime" };
  const [date, setDate] = useState<Date>(new Date());
  //return <TextInput {...props} extra={newExtra} />;
  const handleChange = (date: any) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    onChange(date);
  };
  return (
    <div>
      {/* <div>Selected date: </div> */}
      {/* <div>{date && date.toDateString() + ` ` + date.toLocaleTimeString()}</div> */}
      {
        // @ts-ignore
        <Datetime
          {...props}
          value={value ? new Date(value) : new Date()}
          initialValue={date}
          onChange={(value: any) => {
            handleChange(new Date(value));
          }}
        />
      }
    </div>
  );
};

DatetimeInput.defaultInitialValue = new Date();
export default DatetimeInput;
