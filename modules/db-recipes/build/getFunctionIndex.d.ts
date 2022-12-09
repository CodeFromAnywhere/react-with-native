import { TsFunction } from "code-types";
/** Simple function to test whether or not the DbRecipes endpoints are available. If it returns true through the api, the other ones are also available. */
export declare const hasDbRecipes: () => boolean;
/**
 * finds function indexation from database
 *
 * TODO: this should be used!
 */
export declare const getFunctionIndex: ({ functionName, }: {
    functionName: string;
}) => Promise<{
    success: boolean;
    response: string;
    function?: TsFunction;
}>;
//# sourceMappingURL=getFunctionIndex.d.ts.map