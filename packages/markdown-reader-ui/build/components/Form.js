"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = exports.makeField = void 0;
var react_with_native_form_1 = require("react-with-native-form");
var react_with_native_form_inputs_1 = require("react-with-native-form-inputs");
var text = { component: react_with_native_form_inputs_1.TextInput };
var password = { component: react_with_native_form_inputs_1.PasswordInput };
var date = { component: react_with_native_form_inputs_1.DateInput };
var datetime = { component: react_with_native_form_inputs_1.DatetimeInput };
var number = { component: react_with_native_form_inputs_1.NumberInput };
var select = { component: react_with_native_form_inputs_1.SelectInput };
var selectMultiple = { component: react_with_native_form_inputs_1.SelectMultipleInput };
var stars = { component: react_with_native_form_inputs_1.StarsInput };
var phone = { component: react_with_native_form_inputs_1.PhoneInput };
var textArea = { component: react_with_native_form_inputs_1.TextAreaInput };
var time = { component: react_with_native_form_inputs_1.TimeInput };
var toggle = { component: react_with_native_form_inputs_1.ToggleInput };
var labels = { component: react_with_native_form_inputs_1.LabelsInput };
var plugins = {
    text: text,
    password: password,
    date: date,
    datetime: datetime,
    number: number,
    select: select,
    selectMultiple: selectMultiple,
    stars: stars,
    phone: phone,
    textArea: textArea,
    time: time,
    toggle: toggle,
    labels: labels,
};
var makeField = function (type, config) { return (0, react_with_native_form_1.makeInputField)(type, config); };
exports.makeField = makeField;
var Form = function (props) {
    return (0, react_with_native_form_1.setConfig)(react_with_native_form_1.DataForm, {
        plugins: plugins,
    })(props);
};
exports.Form = Form;
//# sourceMappingURL=Form.js.map