/**
 * generates schemas for db models
 *
 * Is done every time you run `rebuildOperation` and `generateSdkOperations`
 *
 * TODO: there are some problems with references that cannot be found with references to generic types... This can probably be solved, but it's not going to be easy!
 *
 * IDEA:
 *
 * 1) find all referencing definitions in the main schema
 * 2) find those in all other interfaces
 * 3) recursively find references in those as well
 * 4) if you can't find the reference, remove the reference and replace type to "any" (add WARNING to description "reference not found")
 *
 * This will result in a valid schema that has no unresolved references
 *
 * TODO: apply Storage<X> to db-models
 *
 * TODO: apply Array<X> to db-models with json-multiple
 *
 * TODO: apply special config conventions (MergedDbConfig) like tsconfig.json and package.json
 *
 * TODO: Make a validator that validates the whole database to this schema.
 */
export declare const generateJsonSchemas: (manualProjectRoot?: string, operationName?: string) => Promise<void>;
//# sourceMappingURL=generateJsonSchemas.d.ts.map