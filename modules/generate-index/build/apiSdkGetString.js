"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.apiSdkGetString=exports.tsFunctionToEndpointTypeInterface=void 0;var convert_case_1=require("convert-case"),schema_util_1=require("schema-util"),tsFunctionToEndpointTypeInterface=function(n){var e,t,o=null===(e=n.parameters)||void 0===e?void 0:e.map((function(n){return"".concat(n.name,": ").concat((0,schema_util_1.simplifiedSchemaToTypeDefinitionString)(n.simplifiedSchema),";\n")})).join(""),i=(0,schema_util_1.simplifiedSchemaToTypeDefinitionString)(null===(t=n.returnType)||void 0===t?void 0:t.simplifiedSchema),c="".concat((0,convert_case_1.pascalCase)(n.name),"EndpointType");return"type ".concat(c," = {\n      body: {\n        ").concat(o,"\n      };\n      response: Promise<").concat(i,">;\n    };")};exports.tsFunctionToEndpointTypeInterface=tsFunctionToEndpointTypeInterface;
/**
   * Generates Endpoint Sdk typescript code
   
  # sdk-api
  
  Add sdk-api as a `/generated ` package to be generated for all functions
  
  Generate that and use it to type a new api function that doesn't need the method and has the function as the first parameter
  
  Refactor all code to use this new api function
  
  I probably need to add the descriptions to the parameters and the function name, because it would be a waste if these are lost.
  
  This would be an insane improvement to the frontends and really almost complete Sensible 2.0
   */
var apiSdkGetString=function(n){var e=n.map((function(n){return(0,exports.tsFunctionToEndpointTypeInterface)(n)})).map((function(n){return"export ".concat(n,"\n\n")})).join(""),t=n.map((function(n){var e="".concat((0,convert_case_1.pascalCase)(n.name),"EndpointType");return"".concat(n.name,": ").concat(e,";")})),o="export type ApiSdk = {\n".concat(t.join("\n"),"\n};\n");return"".concat(e).concat(o)};exports.apiSdkGetString=apiSdkGetString;
//# sourceMappingURL=apiSdkGetString.js.map