"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useReferencableModelData=void 0;var js_util_1=require("js-util"),schema_util_1=require("schema-util"),api_1=require("api"),useReferencableModelData=function(e){var t,a=null===(t=(0,schema_util_1.getReferencableModels)(e))||void 0===t?void 0:t.map((function(e){return e.interfaceName})).filter(js_util_1.notEmpty);if(a){
/**
     * NB: here we just get the referencable model data for the referencable model names in this form. But since they are decoupled, useQuery is caching them, across forms!
     */
var r=a.map((function(e){var t,a=e,r=api_1.queries.useGetReferencableModelData(a),i=r.data,l=r.isLoading,u=null==i?void 0:i.result;return(t={})[e]={data:u,isLoading:l},t})).filter(js_util_1.notEmpty);return r?(0,js_util_1.mergeObjectsArray)(r):void 0}};exports.useReferencableModelData=useReferencableModelData;
//# sourceMappingURL=useReferencableModelData.js.map