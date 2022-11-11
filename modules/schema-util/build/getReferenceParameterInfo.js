"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPossibleReferenceParameterNames=exports.getReferenceParameterInfo=void 0;var name_conventions_1=require("name-conventions"),convert_case_1=require("convert-case"),pluralize_1=require("pluralize"),js_util_1=require("js-util"),getReferenceParameterInfo=function(e){var r=e.split("_"),a=e.includes("_")?r[0]:void 0,t=e.includes("_")?r[1]:e,n=(0,convert_case_1.lowerCaseArray)(t),c=1===n.length,s=n.pop(),i=!c&&name_conventions_1.referenceParameterNames.includes(s),o=!c&&name_conventions_1.referencePluralParameterNames.includes(s),l=i||o,m=l?(0,convert_case_1.pascalCase)(n.join("-")):void 0,_=l?(0,pluralize_1.singularize)(s):void 0;return{descriptor:a,keyInModel:_,interfaceName:m,isReferenceMultipleParameter:o,isReferenceSingleParameter:i,isReferenceParameter:l,dataParameterName:l&&_?(0,js_util_1.replaceLastOccurence)(e,(0,convert_case_1.capitaliseFirstLetter)(_),""):void 0,parameterName:e}};exports.getReferenceParameterInfo=getReferenceParameterInfo;
/**
returns the reference parameterNames...
 

e.g.:
```
todos -> todoSlugs + todoIds
todo -> todoSlug + todoId
```

 */
var getPossibleReferenceParameterNames=function(e){return(0,pluralize_1.isPlural)(e)?name_conventions_1.referencePluralParameterNames.map(convert_case_1.capitaliseFirstLetter).map((function(r){return"".concat((0,pluralize_1.singularize)(e)).concat(r)})):name_conventions_1.referenceParameterNames.map(convert_case_1.capitaliseFirstLetter).map((function(r){return"".concat(e).concat(r)}))};exports.getPossibleReferenceParameterNames=getPossibleReferenceParameterNames;
//# sourceMappingURL=getReferenceParameterInfo.js.map