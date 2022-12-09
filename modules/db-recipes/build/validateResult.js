"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResult = void 0;
var sdk_api_1 = require("sdk-api");
//import Ajv from "ajv";
var log_1 = require("log");
/** wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.*/
var validateResult = function (functionName, result, tsFunction) {
    var fn = sdk_api_1.sdk[functionName];
    /**
     * NB: https://www.npmjs.com/package/typescript-json
     *
     * this seems a great way to validate the return type, not sure what it would do to my compile times and runtime performance and if it works at all, but if it works, it'd be great because we basically create 100% typesafety, not only for the input, but also for the output!
     */
    // const isValid = TSON.equal<ResultType>(result)
    var schema = tsFunction.returnType.typeDefinition;
    if (!schema) {
        (0, log_1.log)("Not able to validate ".concat(functionName, " result"), { type: "debug" });
        return { isValid: true };
    }
    //const validate = ajv.compile(schema);
    var isValid = true; //validate(result);
    if (!isValid) {
        (0, log_1.log)("According to the schema, you have given invalid arguments to the function", { type: "warning" });
    }
    return { isValid: isValid };
};
exports.validateResult = validateResult;
//# sourceMappingURL=validateResult.js.map