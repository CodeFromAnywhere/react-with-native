import { AnyModelType } from "./any-model";
/**
 * identifier of any index type interface
 */
export interface TsIndexModelType extends AnyModelType {
    /**
     * unique id of the model
     */
    id: string;
    /**
     * name (identifier) of the model
     */
    name: string;
    /**
     * kebab-case variant of the name
     */
    slug: string;
    /**
     * relative file path from the operation that this indexed instance is referencing to
     *
     * e.g. src/general.ts
     *
     * (no preceding slash)
     */
    operationRelativeTypescriptFilePath: string;
}
//# sourceMappingURL=TsIndexModelType.d.ts.map