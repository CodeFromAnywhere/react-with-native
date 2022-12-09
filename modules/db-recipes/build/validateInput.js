"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = void 0;
// import Ajv from "ajv";
var js_util_1 = require("js-util");
var log_1 = require("log");
/** wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.*/
var validateInput = function (functionName, parameters, tsFunction) {
    var _a;
    var invalidParameters = ((_a = tsFunction.parameters) === null || _a === void 0 ? void 0 : _a.map(function (parameter, index) {
        if (!parameter.schema)
            return;
        // NB: we have a problem now because of the references missing. Recursively including all references every time can be hard though, that is another indexation step probably... May also become quite slow given the side of these schemas. We can either try and create a mapped validation object that includes the schemas for every function or we can try to use typescript-json instead, that may be easier, and better since we already need that for the backend as well. The last option would be to validate it ourselves using our own SimplifiedSchema. A validator for that would be useful anyway because it can also be used at the frontend with SimplifiedSchemaForm.
        // const validate = ajv.compile(parameter.schema);
        // const isValid = validate(value);
        var value = parameters === null || parameters === void 0 ? void 0 : parameters[index];
        var isValid = true;
        if (isValid)
            return;
        return { isValid: isValid, parameter: parameter, value: value };
    }).filter(js_util_1.notEmpty)) || [];
    var isValid = invalidParameters.length === 0;
    if (!isValid) {
        (0, log_1.log)("According to the schema, you have given invalid arguments to the function", { type: "warning" });
        console.dir({ invalidParameters: invalidParameters }, { depth: 99 });
    }
    return { isValid: isValid };
};
exports.validateInput = validateInput;
//# sourceMappingURL=validateInput.js.map