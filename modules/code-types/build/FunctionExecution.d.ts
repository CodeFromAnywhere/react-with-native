import { DefaultModelType, Id, Markdown } from "model-types";
import { PerformanceItem } from "measure-performance";
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
    /**
     * test description or example description or anything
     */
    description?: Markdown;
    isResultFromCache: boolean;
    /**
     * if true, the api of the function (input/output interface) has changed in bewteen, so the re-execution would probably fail or return a different result
     */
    hasApiChanged?: boolean;
    performance: PerformanceItem[];
}
export declare const getFunctionExersize: (functionId: string) => Promise<string>;
//# sourceMappingURL=FunctionExecution.d.ts.map