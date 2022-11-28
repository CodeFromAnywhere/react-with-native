import { TsFunction, TsImport, TsInterface, TsVariable } from "code-types";
import { DependantCountObject } from "./DependantCountObject";
/** Double arrow function to get the count for the item */
export declare const addDependantCount: (type: "tsFunction" | "tsVariable" | "tsInterface", imports: TsImport[]) => (item: TsFunction | TsVariable | TsInterface) => Promise<DependantCountObject>;
//# sourceMappingURL=addDependantCount.d.ts.map