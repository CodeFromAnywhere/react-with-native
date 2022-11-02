import { JSONSchema7 } from "json-schema";
import { SimplifiedSchema } from "code-types";
/**
 Return a SimplifiedSchema by giving the JSONSchema7 schema, its name and a list of possible references in the JSONSchema.
 
 A SimplifiedSchema is a data structure that allows you to easily define type interfaces that need to build out forms.

 # Todo
 
Dual types aren't done right yet. I probably don't look at `anyOf` yet, which makes it result in an empty object.

For example, this one is problematic:

INPUT:

```json
{
"schema": {
    "anyOf": [
      {"type": "string"},
      {"type": "array","items": {"type": "string"}}
    ]
  },
```

Output:
```json
{
"simplifiedSchema": {
  "properties": [],
  "type": "object"
},
}
      ```

      To test this one, test `npx rebuildOperation filename-conventions`
 */
export declare const simplifySchema: (name: string | null, schema: JSONSchema7, possibleRefs: {
    /** the name of the schema, (without /definitions/ prefix like $ref) */
    name: string;
    schema: JSONSchema7;
}[], rootStack: string[]) => SimplifiedSchema | undefined;
//# sourceMappingURL=simplifySchema.d.ts.map