#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=exports.lowerCaseArray=exports.humanCase=exports.capitalCase=exports.kebabCase=exports.snakeCase=exports.pascalCase=exports.camelCase=exports.convertCase=exports.capitaliseFirstLetter=exports.getDelimiter=void 0;var make_test_1=require("make-test"),splitCasingDelimiters=function(a){return a.split("").reduce((function(a,e){
//get the last word, we know it's always defined because of the initial value of the reduce
var r=a.pop(),t=r.substring(-1),s=t.toUpperCase()!==t,n=e.toUpperCase()===e,i=s&&n?[r,e]:["".concat(r).concat(e)];
//let's also get the last letter
return a.concat(i)}),[""]);
// if it was lowercase but it became upper, it's a new word
},nonCasingDelimiters=/[\s,._-]+/,getDelimiter=function(a){return"capital"===a?"_":"human"===a?" ":"kebab"===a?"-":"snake"===a?"_":""};exports.getDelimiter=getDelimiter;var capitaliseFirstLetter=function(a){return a.charAt(0).toUpperCase().concat(a.substring(1))};exports.capitaliseFirstLetter=capitaliseFirstLetter;var convertToTargetCasing=function(a,e,r){return"capital"===r?a.toUpperCase():"kebab"===r||"snake"===r?a.toLowerCase():"pascal"===r?(0,exports.capitaliseFirstLetter)(a):"camel"===r?0===e?a.toLowerCase():(0,exports.capitaliseFirstLetter)(a):0===e?(0,exports.capitaliseFirstLetter)(a):a.toLowerCase()},convertCase=function(
/**
 * NB: texts of more than a sentence are not supported
 */
a,e){return a.split(nonCasingDelimiters).reduce((function(a,e){return a.concat(splitCasingDelimiters(e))}),[]).map((function(a,r){return convertToTargetCasing(a,r,e)})).join((0,exports.getDelimiter)(e))};
/**
 *
 */exports.convertCase=convertCase;var camelCase=function(a){return(0,exports.convertCase)(a,"camel")};exports.camelCase=camelCase;var pascalCase=function(a){return(0,exports.convertCase)(a,"pascal")};exports.pascalCase=pascalCase;var snakeCase=function(a){return(0,exports.convertCase)(a,"snake")};exports.snakeCase=snakeCase;var kebabCase=function(a){return(0,exports.convertCase)(a,"kebab")};exports.kebabCase=kebabCase;var capitalCase=function(a){return(0,exports.convertCase)(a,"capital")};exports.capitalCase=capitalCase;var humanCase=function(a){return(0,exports.convertCase)(a,"human")};exports.humanCase=humanCase;
/**
 * converts any string to an array of lowercase words
 *
 * format ["word1","word2","word3"] from a string of any casing.
 */
var lowerCaseArray=function(a){return(0,exports.kebabCase)(a).split("-")};exports.lowerCaseArray=lowerCaseArray,exports.test=(0,make_test_1.makeTest)((function(){return["Handige harry","handigeHarry","HandigeHarry","handige-harry","handige_harry","HANDIGE_HARRY"].map((function(a){return{word:a,camel:(0,exports.camelCase)(a),snake:(0,exports.snakeCase)(a),kebab:(0,exports.kebabCase)(a),pascal:(0,exports.pascalCase)(a),capital:(0,exports.capitalCase)(a),human:(0,exports.humanCase)(a)}}))}),(function(a){return JSON.stringify(a)===JSON.stringify([{word:"Handige harry",camel:"handigeHarry",snake:"handige_harry",kebab:"handige-harry",pascal:"HandigeHarry",capital:"HANDIGE_HARRY",human:"Handige harry"},{word:"handigeHarry",camel:"handigeHarry",snake:"handige_harry",kebab:"handige-harry",pascal:"HandigeHarry",capital:"HANDIGE_HARRY",human:"Handige harry"},{word:"HandigeHarry",camel:"handigeHarry",snake:"handige_harry",kebab:"handige-harry",pascal:"HandigeHarry",capital:"HANDIGE_HARRY",human:"Handige harry"},{word:"handige-harry",camel:"handigeHarry",snake:"handige_harry",kebab:"handige-harry",pascal:"HandigeHarry",capital:"HANDIGE_HARRY",human:"Handige harry"},{word:"handige_harry",camel:"handigeHarry",snake:"handige_harry",kebab:"handige-harry",pascal:"HandigeHarry",capital:"HANDIGE_HARRY",human:"Handige harry"},{word:"HANDIGE_HARRY",camel:"handigeHARRY",snake:"handige_harry",kebab:"handige-harry",pascal:"HANDIGEHARRY",capital:"HANDIGE_HARRY",human:"HANDIGE harry"}])}));
//# sourceMappingURL=general.js.map