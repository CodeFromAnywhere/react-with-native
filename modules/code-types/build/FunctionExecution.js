"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionExersize = void 0;
const getExamples = (functionName) => __awaiter(void 0, void 0, void 0, function* () {
    // const examples = (await db.get("FunctionExecution")).filter(x=>x.isExample && x.functionName === functionName)
});
const getFunctionExersize = (functionId) => __awaiter(void 0, void 0, void 0, function* () {
    //1) get the function, make the description, input, and output string
    const descriptionString = "";
    const inputString = "";
    const outputString = "";
    //2) get all it's examples from `FunctionExecution`, make the example string
    const examplesString = 'Input `x, y, z`. Output should be "a"';
    return `
Write a function that can do this:

${descriptionString}

It should take this as its inputs:

${inputString}

It should return this:

${outputString}

Some examples:

${examplesString}
`;
});
exports.getFunctionExersize = getFunctionExersize;
//# sourceMappingURL=FunctionExecution.js.map