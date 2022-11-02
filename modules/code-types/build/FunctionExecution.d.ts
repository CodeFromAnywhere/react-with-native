import { DefaultModelType, Id } from "model-types";
import { PerformanceItem } from "./PerformanceItem";
import { TsFunction } from "./TsFunction";
/**
 * Model for tests, examples, cache, and recent executions of any function
 *
 * Requirement for **tifo-stitching**

Example:

const someFunction = (inputA: string, inputB:string):string => {

  return `${inputA} != ${inputB}`
}


// find this in the database after executing the function

const functionExecution1 = {
  ....
  functionName: "someFunction",
  inputParameters: ["hello", "world"],
  output: "hello != world",
  isTest: false,
  isExample: false,
  isResultFromCache: false,
  performance: [....],
}

*/
export interface FunctionExecution extends DefaultModelType {
    functionName: string;
    tsFunctionId: Id;
    tsFunction?: TsFunction;
    inputParameters: any[] | undefined;
    output: any;
    isTest: boolean;
    isExample: boolean;
    isResultFromCache: boolean;
    performance: PerformanceItem[];
}
//# sourceMappingURL=FunctionExecution.d.ts.map