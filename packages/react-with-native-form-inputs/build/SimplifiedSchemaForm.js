"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SimplifiedSchemaForm=exports.getReferencedModelData=exports.renderParameterTitle=exports.isCalculatedParameter=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_1=require("react"),code_types_1=require("code-types"),react_with_native_1=require("react-with-native"),convert_case_1=require("convert-case"),js_util_1=require("js-util"),schema_util_1=require("schema-util"),text_1=require("./text/text"),toggle_1=require("./toggle/toggle"),number_1=require("./number/number"),selectMultiple_1=require("./selectMultiple/selectMultiple"),select_1=require("./select/select"),textArea_1=require("./textarea/textArea"),password_1=require("./password/password"),isCalculatedParameter=function(e){return code_types_1.generatedParameterNames.includes(e)||e.endsWith("Calculated")};
/**

TODO:

Support for arrays: Arrays can be empty, so rendering a form for an array should start with rendering the title and a plus-button (assuming the array is undefined or empty in value)

If you have an object that can be recursed on but it's not required, don't recurse yet until you expand it.

 */
// modules
exports.isCalculatedParameter=isCalculatedParameter;var renderParameterTitle=function(e,r){var t,a,i=(0,schema_util_1.getReferenceParameterInfo)(e.name);
// console.log({ isDebug });
return(0,jsx_runtime_1.jsxs)(react_with_native_1.P,{children:[i.isReferenceParameter?(0,convert_case_1.humanCase)("".concat(i.descriptor||""," ").concat(i.interfaceName)):(0,convert_case_1.humanCase)(e.name),r?(0,jsx_runtime_1.jsxs)(react_with_native_1.P,__assign({className:"italic text-gray-400"},{children:["[",null===(t=e.simplifiedSchema)||void 0===t?void 0:t.type,"]:"," ",(0,jsx_runtime_1.jsx)(react_with_native_1.Span,__assign({className:"text-gray-600"},{children:null===(a=e.simplifiedSchema)||void 0===a?void 0:a.description}))]})):null]})};exports.renderParameterTitle=renderParameterTitle;var getReferencedModelData=function(e,r){var t=(0,schema_util_1.getReferenceParameterInfo)(e),a=t&&t.interfaceName&&r[t.interfaceName]&&r[t.interfaceName].length>0?r[t.interfaceName]:void 0;return t?__assign({referencedData:a},t):void 0};exports.getReferencedModelData=getReferencedModelData;
/**
recursive component that renders a form for a SimplifiedSchema


TODO: CLEANUP: Think about the different steps involved because some may be able to be reused, for example, in interactive-cli forms, chatbot interfaces, siri-like agents... etc.

 */
var SimplifiedSchemaForm=function(e){var r=e.id,t=e.onChange,a=e.parameters,i=e.values,n=e.referencedModelData,l=e.referencedModelDataIsLoading,s=e.isDbModel,u=(e.title,e.isDebug);if((0,react_1.useEffect)((function(){Array.isArray(i)||t(a.map((function(){})))}),[]),!i)return null;
// For every parameter we are going to return elements
var o=a.map((function(e,a){var o,c,_,d,m,v,p,f,h,x;if(e.simplifiedSchema){var g="".concat(r,".").concat(e.name),j={uniqueFieldId:g,fieldName:g};if("array"===(null===(o=e.simplifiedSchema)||void 0===o?void 0:o.type))
// create a component where you can add and remove items, where each item that is added should recurse on this form builder
return u?(0,jsx_runtime_1.jsxs)(react_with_native_1.P,__assign({className:"text-red-500"},{children:[e.name,": Arrays are not supported yet..."]})):null;if("object"===(null===(c=e.simplifiedSchema)||void 0===c?void 0:c.type)){
// we can only render the object if it has properties...
if(!e.simplifiedSchema.properties||0===e.simplifiedSchema.properties.length)return console.log("Object without properties",{parameter:e}),u?(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"text-red-500"},{children:"Object without properties"})):null;
// for each parameter, recurse this form builder
var S=e.simplifiedSchema.properties.map((function(e){var r;return null===(r=i[a])||void 0===r?void 0:r[e.name]})),y=e.simplifiedSchema.properties.map((function(e){return{name:e.name,required:e.required,simplifiedSchema:e.schema}})),P=e.name;return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:P?"ml-2 pl-2 my-4 border-l border-gray-900 dark:border-gray-100":void 0},{children:[P?(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"font-bold"},{children:(0,convert_case_1.humanCase)(P||"")})):null,u?(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"italic text-gray-600"},{children:e.simplifiedSchema.description})):null,(0,jsx_runtime_1.jsx)(exports.SimplifiedSchemaForm,{isDebug:u,isDbModel:s,id:"".concat(r,".").concat(a),parameters:y,referencedModelData:n,onChange:function(r){var n,l,s=null===(l=null===(n=e.simplifiedSchema)||void 0===n?void 0:n.properties)||void 0===l?void 0:l.map((function(e,t){var a;return(a={})[e.name]=r[t],a})),u=s?(0,js_util_1.mergeObjectsArray)(s):void 0,o=i.map((function(e,r){return r===a?u:e}));
// NB: every item in the array is linked with a parameter in the object
t(o)},values:S})]}))}if(!s||!(0,exports.isCalculatedParameter)(e.name)){if("number"===(null===(_=e.simplifiedSchema)||void 0===_?void 0:_.type)){var b=i[a];return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,{children:[(0,exports.renderParameterTitle)(e,u),(0,jsx_runtime_1.jsx)(number_1.NumberInput,__assign({},j,{onChange:function(r){var n=e.required||null!=r?r||0:void 0,l=i.map((function(e,r){
// NB: only change the index we are on
return r===a?n:e}));t(l)},value:b,extra:{},config:{}}))]})}if("boolean"===(null===(d=e.simplifiedSchema)||void 0===d?void 0:d.type)){var w=i[a];return(0,jsx_runtime_1.jsx)(react_with_native_1.Div,{children:(0,jsx_runtime_1.jsx)(toggle_1.ToggleInput,__assign({},j,{onChange:function(r){var n=i.map((function(t,i){
// NB: only change the index we are on
return i===a?// NB: ony return undefined for an empty string that's not required
e.required||!1!==r?r:void 0:t}));t(n)},value:w||!1,extra:{label:(0,exports.renderParameterTitle)(e,u)},config:{}}))})}var D=(0,exports.getReferencedModelData)(e.name,n);
// NB : only string type left... this can still be many things...
if(D&&D.isReferenceParameter){
// selectbox, if referencedModelData is available
if(D.isReferenceMultipleParameter){
// select multiple
var M=i[a],q=(null===(m=D.referencedData)||void 0===m?void 0:m.map((function(e){return{value:D.keyInModel?e[D.keyInModel]:void 0,label:e.name}})))||[],C=[{label:"Select an option",value:""}].concat(q);return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,{children:[(0,exports.renderParameterTitle)(e,u),l?"Loading...":(0,jsx_runtime_1.jsx)(selectMultiple_1.SelectMultipleInput,__assign({},j,{onChange:function(r){var n=0!==r.length||e.required?r.map((function(e){return e.value})):void 0;t(i.map((function(e,r){return r===a?n:e})))},value:M.map((function(e){return{label:(0,convert_case_1.humanCase)(e),value:e}})),extra:{options:C,autoSuggest:C.length>10},config:{}}))]})}
// select single
// If a referenced model contains the `categoryStack` parameter, this data should be used to group the selectbox. Without categoryStack parameter, simply use the name.
var I=i[a],N=I?{label:(null===(p=null===(v=D.referencedData)||void 0===v?void 0:v.find((function(e){return!!D.keyInModel&&e[D.keyInModel]===I})))||void 0===p?void 0:p.name)||"Select an option",value:I}:null;q=(null===(f=D.referencedData)||void 0===f?void 0:f.map((function(e){var r=e.categoryStack;return{value:D.keyInModel?e[D.keyInModel]:void 0,label:r?r.concat(e.name).join(" › "):e.name}})))||[],C=[{label:"Select an option",value:""}].concat(q);return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,{children:[(0,exports.renderParameterTitle)(e,u),l?"Loading...":(0,jsx_runtime_1.jsx)(select_1.SelectInput,__assign({},j,{onChange:function(r){var n=r||e.required?null==r?void 0:r.value:void 0;t(i.map((function(e,r){return r===a?n:e})))},value:N,extra:{options:C,autoSuggest:C.length>10},config:{}}))]})}
// NB: only string text left... sometimes it can be markdown though (textArea would be great here)... But we can't see this yet due to indexation
var T=i[a];if(null===(h=e.simplifiedSchema)||void 0===h?void 0:h.enum){var R=function(e){var r=i.map((function(r,t){
// NB: only change the index we are on
return t===a?//   NB: ony return undefined for an empty string that's not required
e||null:r}));t(r)},k=e.simplifiedSchema.enum.map((function(e){return{value:String(e),label:(0,convert_case_1.humanCase)(String(e))}})),A=null===(x=e.simplifiedSchema)||void 0===x?void 0:x.enum[0],O=A?String(A):null;
// NB: we are changing the state here to set the enum to the first value, if it's not specified
void 0===T&&R(O);var F=T||O,L=k.find((function(e){return e.value===F}));return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,{children:[(0,exports.renderParameterTitle)(e,u),(0,jsx_runtime_1.jsx)(select_1.SelectInput,__assign({},j,{onChange:function(e){return R((null==e?void 0:e.value)||null)},value:L,extra:{options:k,autoSuggest:k.length>10},config:{}}))]})}var E=code_types_1.markdownTextParameterNames.includes(e.name)?textArea_1.TextAreaInput:code_types_1.passwordTextParameterNames.includes(e.name)?password_1.PasswordInput:text_1.TextInput;return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,{children:[(0,exports.renderParameterTitle)(e,u),(0,jsx_runtime_1.jsx)(E,__assign({},j,{onChange:function(r){var n=i.map((function(t,i){
// NB: only change the index we are on
return i===a?//   NB: ony return undefined for an empty string that's not required
e.required||0!==r.length?r:void 0:t}));t(n)},value:T||"",extra:{},config:{}}))]})}}})).filter(js_util_1.notEmpty);return(0,jsx_runtime_1.jsx)(react_with_native_1.Div,{children:o})};exports.SimplifiedSchemaForm=SimplifiedSchemaForm;
//# sourceMappingURL=SimplifiedSchemaForm.js.map