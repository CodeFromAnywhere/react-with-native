"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TimeInput=void 0;var jsx_runtime_1=require("react/jsx-runtime"),rc_time_picker_1=__importDefault(require("rc-time-picker")),moment_1=__importDefault(require("moment")),react_with_native_ui_1=require("react-with-native-ui"),TimeInput=function(e){e.extra;var t=e.value,r=e.onChange;return(0,jsx_runtime_1.jsx)(rc_time_picker_1.default,{onChange:function(e){return r(e)},value:(0,moment_1.default)(t),showSecond:!1,format:"h:mm a",use12Hours:!0,className:react_with_native_ui_1.UI.dateInput})};exports.TimeInput=TimeInput,exports.TimeInput.defaultInitialValue=new Date;
//# sourceMappingURL=TimeInput.js.map