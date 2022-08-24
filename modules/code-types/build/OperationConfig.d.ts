/**
 * anything configurable about the operation.
 *
 * This can live in operation.json or as a prop in package.json.
 */
export declare type OperationConfig = {
    /**
     *
     * Sometimes you are using function in a UI, which cannot be inferred with imports because they are used indirectly via an api. Here you can specify which operations on the backend are needed for an operation (ui mostly)
     *
     * This array is simply a list of operation names needed for this operation that are not imported.
     *
     * NB: no need to specify things here that you also import in this operation, because these are already automatically detected.
     *
     */
    indirectDependencies?: string[];
};
//# sourceMappingURL=OperationConfig.d.ts.map