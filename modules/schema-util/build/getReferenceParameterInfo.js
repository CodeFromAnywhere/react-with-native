"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPossibleReferenceParameterNames = exports.getReferenceParameterInfo = void 0;
var name_conventions_1 = require("name-conventions");
var convert_case_1 = require("convert-case");
var pluralize_1 = require("pluralize");
var js_util_1 = require("js-util");
/**
 Takes a parameterName and returns information about it according to the convention `{descriptorName}_{modelName}{referenceKey}` where:
 
 - descriptorName with the suffixing underscore is optional
 - referenceKey can be slug, index, or id (or there plural variants)
 - modelName should refer to a database model

 */
var getReferenceParameterInfo = function (parameterName) {
    var descriptorModelSplit = parameterName.split("_");
    var descriptor = parameterName.includes("_")
        ? descriptorModelSplit[0]
        : undefined;
    var rest = parameterName.includes("_")
        ? descriptorModelSplit[1]
        : parameterName;
    var wordArray = (0, convert_case_1.lowerCaseArray)(rest);
    var singleWord = wordArray.length === 1;
    var parameterLastWord = wordArray.pop();
    var isReferenceSingleParameter = !singleWord && name_conventions_1.referenceParameterNames.includes(parameterLastWord);
    var isReferenceMultipleParameter = !singleWord && name_conventions_1.referencePluralParameterNames.includes(parameterLastWord);
    var isReferenceParameter = isReferenceSingleParameter || isReferenceMultipleParameter;
    // NB: the last item has been removed now
    var interfaceName = isReferenceParameter
        ? (0, convert_case_1.pascalCase)(wordArray.join("-"))
        : undefined;
    // slug or id
    var keyInModel = isReferenceParameter
        ? (0, pluralize_1.singularize)(parameterLastWord)
        : undefined;
    /**
     * the reference keyword should be removed from the parameterName to receive the dataParameterName
     *
     * e.g. `weirdSluggyModelSlugs` becomes `weirdSluggyModels`
     */
    var dataParameterName = isReferenceParameter && keyInModel
        ? (0, js_util_1.replaceLastOccurence)(parameterName, (0, convert_case_1.capitaliseFirstLetter)(keyInModel), "")
        : undefined;
    var referenceParameterInfo = {
        descriptor: descriptor,
        keyInModel: keyInModel,
        interfaceName: interfaceName,
        isReferenceMultipleParameter: isReferenceMultipleParameter,
        isReferenceSingleParameter: isReferenceSingleParameter,
        isReferenceParameter: isReferenceParameter,
        dataParameterName: dataParameterName,
        parameterName: parameterName,
    };
    return referenceParameterInfo;
};
exports.getReferenceParameterInfo = getReferenceParameterInfo;
/**
returns the reference parameterNames...
 

e.g.:
```
todos -> todoSlugs + todoIds
todo -> todoSlug + todoId
```

 */
var getPossibleReferenceParameterNames = function (parameterName) {
    var possibleReferenceParameterNames = (0, pluralize_1.isPlural)(parameterName)
        ? name_conventions_1.referencePluralParameterNames
            .map(convert_case_1.capitaliseFirstLetter)
            .map(function (ref) { return "".concat((0, pluralize_1.singularize)(parameterName)).concat(ref); })
        : name_conventions_1.referenceParameterNames
            .map(convert_case_1.capitaliseFirstLetter)
            .map(function (ref) { return "".concat(parameterName).concat(ref); });
    return possibleReferenceParameterNames;
};
exports.getPossibleReferenceParameterNames = getPossibleReferenceParameterNames;
//# sourceMappingURL=getReferenceParameterInfo.js.map