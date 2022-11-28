"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSdkGetString = exports.tsFunctionToEndpointTypeInterface = void 0;
var convert_case_1 = require("convert-case");
var schema_util_1 = require("schema-util");
/**
 * Generate an endpoint type interface from a TsFunction definition
 */
var tsFunctionToEndpointTypeInterface = function (tsFunction) {
    var _a, _b;
    var bodyTypesWithNamesString = (_a = tsFunction.parameters) === null || _a === void 0 ? void 0 : _a.map(function (x) {
        return "".concat(x.name, ": ").concat((0, schema_util_1.simplifiedSchemaToTypeDefinitionString)(x.simplifiedSchema), ";\n");
    }).join("");
    var responseTypeString = (0, schema_util_1.simplifiedSchemaToTypeDefinitionString)((_b = tsFunction.returnType) === null || _b === void 0 ? void 0 : _b.simplifiedSchema);
    var endpointTypeName = "".concat((0, convert_case_1.pascalCase)(tsFunction.name), "EndpointType");
    return "type ".concat(endpointTypeName, " = {\n      body: {\n        ").concat(bodyTypesWithNamesString, "\n      };\n      response: Promise<").concat(responseTypeString, ">;\n    };");
};
exports.tsFunctionToEndpointTypeInterface = tsFunctionToEndpointTypeInterface;
/**
   * Generates Endpoint Sdk typescript code
   
  # sdk-api
  
  Add sdk-api as a `/generated ` package to be generated for all functions
  
  Generate that and use it to type a new api function that doesn't need the method and has the function as the first parameter
  
  Refactor all code to use this new api function
  
  I probably need to add the descriptions to the parameters and the function name, because it would be a waste if these are lost.
  
  This would be an insane improvement to the frontends and really almost complete Sensible 2.0
   */
var apiSdkGetString = function (tsFunctions) {
    var endpointTypesString = tsFunctions
        .map(function (x) { return (0, exports.tsFunctionToEndpointTypeInterface)(x); })
        .map(function (x) { return "export ".concat(x, "\n\n"); })
        .join("");
    var endpointsSdkParts = tsFunctions.map(function (x) {
        var endpointTypeName = "".concat((0, convert_case_1.pascalCase)(x.name), "EndpointType");
        var part = "".concat(x.name, ": ").concat(endpointTypeName, ";");
        return part;
    });
    var sdkString = "export type ApiSdk = {\n".concat(endpointsSdkParts.join("\n"), "\n};\n");
    return "".concat(endpointTypesString).concat(sdkString);
};
exports.apiSdkGetString = apiSdkGetString;
//# sourceMappingURL=apiSdkGetString.js.map