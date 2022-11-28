"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SelectInputType=exports.SelectInput=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_select_1=require("react-with-native-select"),react_with_native_ui_1=require("react-with-native-ui"),SelectInput=function(e){
//console.log({ value, extraOptions: extra.options });
var t=e.value,n=e.extra,u=e.onChange,i=e.className;return(0,jsx_runtime_1.jsx)(react_with_native_select_1.Select,{autoSuggest:n.autoSuggest,
// containerClassName={UI.input}
className:i||react_with_native_ui_1.UI.selectInput,title:n.title||"",options:n.options,value:t,onChange:function(e){e&&u(e)}})};exports.SelectInput=SelectInput,exports.SelectInput.defaultInitialValue=null;var SelectInputType=function(){};exports.SelectInputType=SelectInputType;
//# sourceMappingURL=select.js.map