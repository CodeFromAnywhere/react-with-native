"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isCalculatedParameter=exports.getParameterContentType=exports.isGeneratedParameterName=exports.generatedParameterNames=exports.referencePluralParameterNames=exports.referenceParameterNames=exports.passwordTextParameterNames=exports.markdownTextParameterNames=exports.parameterNames=exports.patternMatchers=void 0,exports.patternMatchers=[{pattern:"%m",matches:"modelName"},{pattern:"%d",matches:"descriptor"},{pattern:"%r",matches:"referenceKeyword",isSingleWord:!0},{pattern:"%n",matches:"nameKeyword",isSingleWord:!0}],
/**

## Form input types

How do we show different UI's based on certain things we know about some parameter (name + type)? There are many things

- All "image" or "xxxImage" should be Image + camera inputs
- All "asset" or "xxxAsset" should be File inputs
- All "recording" or "xxxAudio" should be mic inputs
- All "position" or "xxxPosition" should be coordinates which should be pickable on the map
- All "path" or "xxxPath" should be an input where you can select a relative path from project root or operation src root, depending on what we need. It needs to be clear what kind of paths are allowed, so we need to think about all the options and if we can all put that in the parameter name (would be best) or if we need to use the description...
 */
exports.parameterNames=[{pattern:"%d_%m%r",example:"author_userSlug",type:"string",contentType:["select"],description:"model reference with description"},{pattern:"%m%r",example:"userSlug",type:"string",contentType:["select"],description:"model reference without description"},{pattern:"%d_%m%rs",example:"author_userSlugs",type:"array",secondaryType:"string",contentType:["selectMultiple"],description:"multiple model references with description"},{pattern:"%m%rs",example:"userSlugs",type:"array",secondaryType:"string",contentType:["selectMultiple"],description:"multiple model reference without description"},{pattern:"%r",example:"slug",type:"string",contentType:["generated"],description:"identifier"},{pattern:"createdAt",example:"createdAt",contentType:["generated"],type:"number",description:"the time the instance in the model was created"},{pattern:"updatedAt",example:"updatedAt",contentType:["generated"],type:"number",description:"the time the instance in the model was last updated"},{pattern:"%dAt",example:"fulfilledAt",contentType:["date","datetime","time","generated"],type:"number",description:"any time indicator"}],
/**
 * Any parameter names that should render a textArea
 */
exports.markdownTextParameterNames=["markdown","description","content"],exports.passwordTextParameterNames=["password","repeatPassword"],exports.referenceParameterNames=["slug","id"],
// NB: misspelling on purpose to keep simple parsing from singular to plural
exports.referencePluralParameterNames=["slugs","ids"],exports.generatedParameterNames=["createdAt","updatedAt","deletedAt","createdFirstAt","slug","id","operationRelativePath","projectRelativePath","operationName"];var isGeneratedParameterName=function(e){exports.parameterNames.filter((function(e){return 1===e.contentType.length&&"generated"===e.contentType[0]})).map((function(e){return e.pattern}));
// TODO: match the patterns against the name to find match
};exports.isGeneratedParameterName=isGeneratedParameterName;var getParameterContentType=function(e){
// todo: Match parameterName against all patterns in the ParameterName array until it finds one that matches
// 1) replace all patternmatch words with the %x
// 2) whatever's left, make sure to distinguish the descriptor from the type indicator (e.g. authorName indicates a nametype which is a string, while the descriptor is an author)
// 3) return some object that describes all the different parts individually and with that the whole name together. It can then be used in the admin UI to explain any type interface
};exports.getParameterContentType=getParameterContentType;
/**
 * this is part of the database convention
 */
var isCalculatedParameter=function(e){return exports.generatedParameterNames.includes(e)||e.endsWith("Calculated")};exports.isCalculatedParameter=isCalculatedParameter;
//# sourceMappingURL=name-conventions.js.map