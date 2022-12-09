import { FunctionContext } from "function-context-type";
import { Person } from "peer-types";
/**
 * This finds all persons you should be logged in as according to all your device's Authentication Methods.
 *
 * Does not update your device to add the found persons.
 */
export declare const findLoggedinPersonsWithContext: (functionContext: FunctionContext) => Promise<{
    isSuccessful: boolean;
    persons?: Person[] | undefined;
    message: string;
}>;
//# sourceMappingURL=findLoggedInPersonsWithContext.d.ts.map