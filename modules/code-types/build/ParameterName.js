"use strict";
/**
 * ---
 * labels: TYPENET 🕺🏾
 * ---
 *
 * Improves the convention for parameter names that refer to models. probably it's better to do this: `slug/id/index` are reserved on every model, let's call them "Ref". `modelNameRef` refers to modelName. But what if you want to call it differently? Then you'd need to distinguish a prefix from the modelName. Let's do this with a underscore (no dash because underscore preserves ability to dotting on the object). If you want a reference to a user be called author, you'd name it `author_userSlug`.
 */Object.defineProperty(exports,"__esModule",{value:!0}),exports.isGeneratedParameterName=exports.generatedParameterNames=exports.referencePluralParameterNames=exports.referenceParameterNames=exports.passwordTextParameterNames=exports.markdownTextParameterNames=void 0;const contentTypeConst=[
// automatic
"generated",
//string
"markdown","text",
// numbers
"number","date","time","datetime",
// boolean
"toggle",
// enum
"select",
// enum[]
"selectMultiple"],patternMatchers=[{pattern:"%m",matches:"modelName"},{pattern:"%d",matches:"descriptor"},{pattern:"%r",matches:"referenceKeyword",isSingleWord:!0},{pattern:"%n",matches:"nameKeyword",isSingleWord:!0}],parameterNames=[{pattern:"%d_%m%r",example:"author_userSlug",type:"string",contentType:["select"],description:"model reference with description"},{pattern:"%m%r",example:"userSlug",type:"string",contentType:["select"],description:"model reference without description"},{pattern:"%d_%m%rs",example:"author_userSlugs",type:"array",secondaryType:"string",contentType:["selectMultiple"],description:"multiple model references with description"},{pattern:"%m%rs",example:"userSlugs",type:"array",secondaryType:"string",contentType:["selectMultiple"],description:"multiple model reference without description"},{pattern:"%r",example:"slug",type:"string",contentType:["generated"],description:"identifier"},{pattern:"createdAt",example:"createdAt",contentType:["generated"],type:"number",description:"the time the instance in the model was created"},{pattern:"updatedAt",example:"updatedAt",contentType:["generated"],type:"number",description:"the time the instance in the model was last updated"},{pattern:"%dAt",example:"fulfilledAt",contentType:["date","datetime","time","generated"],type:"number",description:"any time indicator"}];exports.markdownTextParameterNames=["markdown","description","content"],exports.passwordTextParameterNames=["password","repeatPassword"],exports.referenceParameterNames=["slug","id","index"],
// NB: misspelling on purpose to keep simple parsing from singular to plural
exports.referencePluralParameterNames=["slugs","ids","indexs"],exports.generatedParameterNames=["createdAt","updatedAt","deletedAt","createdFirstAt","slug","id","index","relativeIndex"];const isGeneratedParameterName=e=>{parameterNames.filter((e=>1===e.contentType.length&&"generated"===e.contentType[0])).map((e=>e.pattern));
// TODO: match the patterns against the name to find match
};exports.isGeneratedParameterName=isGeneratedParameterName;const getParameterContentType=e=>{};
//# sourceMappingURL=ParameterName.js.map