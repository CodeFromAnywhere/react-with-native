"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useTsInterfaceForm=void 0;var jsx_runtime_1=require("react/jsx-runtime"),SimplifiedSchemaForm_1=require("./SimplifiedSchemaForm"),react_1=require("react"),useReferencableModelData_1=require("./useReferencableModelData"),useTsInterfaceForm=function(
/**
 * NB: Don't change this! The amount of hooks depends on this
 */
e,r,
/**
 * Only works if set on first render
 */
a,
/**
 * Tell the form where the model will be stored so the form can render assets correctly
 *
 * If not given, it is tried to be taken from tthe initialValue (will only work if it's a db-model instance with a `.projectRelativePath`)
 */
t,
/**
 * must be provided in case of a db model
 */
i){var o=(0,react_1.useState)(r||"s".concat(String(Math.random())))[0],m=(0,react_1.useState)([a]),l=m[0],n=m[1],s=l[0],u=e.type.simplifiedSchema;if(!u)return[];var c=(0,useReferencableModelData_1.useReferencableModelData)(u);return[(0,jsx_runtime_1.jsx)(SimplifiedSchemaForm_1.SimplifiedSchemaForm,{modelName:i,id:o,onChange:n,values:l,itemNameOrId:(null==s?void 0:s.name)||(null==s?void 0:s.id),parameters:[{name:"",required:!0,simplifiedSchema:u,isDbModel:!0}],projectRelativeStorageFilePath:t||(null==a?void 0:a.projectRelativePath),referencableModelData:c},o),s,function(e){return n([e])}]};exports.useTsInterfaceForm=useTsInterfaceForm;
//# sourceMappingURL=useTsInterfaceForm.js.map