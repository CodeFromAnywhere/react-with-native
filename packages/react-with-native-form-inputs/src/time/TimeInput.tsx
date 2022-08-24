import TimePicker from "rc-time-picker";
import { PluginComponent } from "react-with-native-form";
import { TimeInputType } from "./types";
import Moment from "moment";
import { UI } from "react-with-native-ui";

// CSS Modules, react-datepicker-cssmodules.css

export const TimeInput: PluginComponent<TimeInputType> = ({
  extra,
  value,
  onChange,
}) => {
  return (
    <TimePicker
      onChange={(time: any) => onChange(time)}
      value={Moment(value)}
      showSecond={false}
      format="h:mm a"
      use12Hours
      className={UI.dateInput}
      // className={inputClass}
    />
  );
};

TimeInput.defaultInitialValue = new Date();
