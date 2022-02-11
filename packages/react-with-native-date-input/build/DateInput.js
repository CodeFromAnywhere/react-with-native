import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { inputClass } from "react-with-native-form";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";
var DateInput = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (React.createElement(DatePicker, { selected: value, onChange: function (date) {
            console.log("date", date);
            onChange(date);
        }, dateFormat: "dd-MM-yyyy", className: inputClass }));
};
DateInput.defaultInitialValue = null;
export default DateInput;
//# sourceMappingURL=DateInput.js.map