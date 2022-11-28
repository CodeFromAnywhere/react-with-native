import { Schema } from "ts-json-schema-generator";
import { SimplifiedSchema } from "./SimplifiedSchema";
export interface FunctionParameter {
    name: string;
    schema?: Schema;
    simplifiedSchema?: SimplifiedSchema;
    required: boolean;
}
//# sourceMappingURL=FunctionParameter.d.ts.map