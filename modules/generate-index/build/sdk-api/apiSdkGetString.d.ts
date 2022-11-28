import { TsFunction } from "code-types";
/**
 * Generate an endpoint type interface from a TsFunction definition
 */
export declare const tsFunctionToEndpointTypeInterface: (tsFunction: TsFunction) => string;
/**
   * Generates Endpoint Sdk typescript code
   
  # sdk-api
  
  Add sdk-api as a `/generated ` package to be generated for all functions
  
  Generate that and use it to type a new api function that doesn't need the method and has the function as the first parameter
  
  Refactor all code to use this new api function
  
  I probably need to add the descriptions to the parameters and the function name, because it would be a waste if these are lost.
  
  This would be an insane improvement to the frontends and really almost complete Sensible 2.0
   */
export declare const apiSdkGetString: (tsFunctions: TsFunction[]) => string;
//# sourceMappingURL=apiSdkGetString.d.ts.map