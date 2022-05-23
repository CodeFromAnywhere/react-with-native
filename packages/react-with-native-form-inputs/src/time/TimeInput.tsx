import TimePicker from "rc-time-picker";
import { inputClass, PluginComponent } from "react-with-native-form";
import { TimeInputType } from "./types";
import Moment from "moment";

// CSS Modules, react-datepicker-cssmodules.css

const TimeInput: PluginComponent<TimeInputType> = ({
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
      className={inputClass}
    />
  );
};

TimeInput.defaultInitialValue = new Date();
export { TimeInput };
export default TimeInput;
