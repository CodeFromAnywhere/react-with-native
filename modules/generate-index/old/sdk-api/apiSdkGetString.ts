import { TsFunction } from "code-types";
import { pascalCase } from "convert-case";
import { simplifiedSchemaToTypeDefinitionString } from "schema-util";

/**
 * Generate an endpoint type interface from a TsFunction definition
 */
export const tsFunctionToEndpointTypeInterface = (tsFunction: TsFunction) => {
  const bodyTypesWithNamesString = tsFunction.parameters
    ?.map((x) => {
      return `${x.name}: ${simplifiedSchemaToTypeDefinitionString(
        x.simplifiedSchema
      )};\n`;
    })
    .join("");

  const responseTypeString = simplifiedSchemaToTypeDefinitionString(
    tsFunction.returnType?.simplifiedSchema
  );

  const endpointTypeName = `${pascalCase(tsFunction.name)}EndpointType`;

  return `type ${endpointTypeName} = {
      body: {
        ${bodyTypesWithNamesString}
      };
      response: Promise<${responseTypeString}>;
    };`;
};

/**
  
Generates Endpoint Sdk typescript code
   
  # sdk-api
  
  Add sdk-api as a `/generated ` package to be generated for all functions
  
  Generate that and use it to type a new api function that doesn't need the method and has the function as the first parameter
    
  TODO: look if I can add the descriptions to the parameters and the function name
  
   */
export const apiSdkGetString = (tsFunctions: TsFunction[]): string => {
  const endpointTypesString = tsFunctions
    .map((x) => tsFunctionToEndpointTypeInterface(x))
    .map((x) => `export ${x}\n\n`)
    .join("");

  const endpointsSdkParts = tsFunctions.map((x) => {
    const endpointTypeName = `${pascalCase(x.name)}EndpointType`;

    const part = `${x.name}: ${endpointTypeName};`;
    return part;
  });
  const sdkString = `export type ApiSdk = {\n${endpointsSdkParts.join(
    "\n"
  )}\n};\n`;

  return `${endpointTypesString}${sdkString}`;
};
