import { Markdown, Price, TsIndexModelType } from "model-types";
import { SizeSummary } from "./FolderSummary";
import { TypeInfo } from "./TypeInfo";
import { TsComment } from "./TsComment";
import { FunctionClassification } from "./FunctionClassification";
import { FunctionParameter } from "./FunctionParameter";
export declare const runEveryPeriodReadonlyArray: readonly ["minute", "5-minutes", "quarter-hour", "hour", "6-hours", "midnight", "week", "month", "3-months", "year"];
export declare const runEveryPeriodStringArray: string[];
/**
 Used to specify functions that need to run every time with a specific interval

All times are at at the server timezone time

- `minute`: every minute at 0 seconds
- `5-mintues`: every 5 minutes, starting at the first minute of the hour
- `quarter-hour`: every 15 minutes, starting at the first minute of the hour
- `hour`: every hour, starting at the first minute of the hour
- `6-hours`: every 6 hours, starting at midnight
- `midnight`: every midnight (00:00:00)
- `week`: every week at sundaynight (sunday, 1 second after 23:59:59 PM)
- `month`: at the first second of the first day of the month (0:00:00)
- `3-months`: every start of the quarter: january 1st (0:00:00), april 1st, july 1st, october 1st
- `year`: every new year at january 1st at 0:00:00

 */
export declare type RunEveryPeriodEnum = typeof runEveryPeriodReadonlyArray[number];
/**
 * Everything you can do with frontmatter on a TsFunction
 */
export declare type TsFunctionFrontmatterConfig = {
    /**
     * Other keys in frontmatter that are group names, can be added here
     */
    groupAuthorization: {
        [groupName: string]: string;
    };
    /**
     * for all exported functions in node operations, true by default
     * false for others
     *
     * can be overwritten using frontmatter
     */
    isApiExposed: boolean;
    /**
     * whether or not the function can be cached (relies on cache invalidation)
     */
    canCache?: boolean;
    /**
     You can specify `runEveryPeriod` in your frontmatter of a function. This will set `runEveryPeriod` for the TsFunction. This is used by `function-server`: it will execute CRON-jobs that run these things on those periods.
  
     Will only work if the function takes no arguments.
     */
    runEveryPeriod?: RunEveryPeriodEnum;
    /**
     * Indexed from frontmatter `price`
     */
    price?: Price;
    classification?: FunctionClassification;
};
export declare type TsFunctionIndex = {
    /**
     * If you give a function a type explicitly on its declaration, this type will be set here.
     */
    explicitTypeName?: string;
    /**
     * The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation
     */
    isExported: boolean;
    /**
     * parsed comment from doc-comment
     */
    description?: Markdown;
    /**
     * raw text of the function
     */
    rawText?: string;
    /**
     * all comments found in a function and the node that they belong to
     */
    commentsInside: TsComment[];
    /**
     * return type JSON Schema definition
     */
    returnType: TypeInfo;
    /**
     * parameters the function takes as its arguments, if any
     */
    parameters?: FunctionParameter[];
    /**
     * size of this function (comments + code)
     */
    size: SizeSummary;
    /**
     * size of the comments of this function (including surrounding comments)
     */
    commentSize?: SizeSummary;
    /**
     * size of the code inside the function (without comments)
     */
    codeSize?: SizeSummary;
    /**
     * tells you the size of itself and all its dependencies that are used that are also part of an operation, recursively
     */
    cumulativeSize?: SizeSummary;
    cumulativeCommentSize?: SizeSummary;
    cumulativeCodeSize?: SizeSummary;
    /**
     * maximum amount of times indedented in this function
     *
     * good for determining the complexity and finding code that can be simplified/destructured into smaller pieces
     */
    maxIndentationDepth: number;
    /**
     * finds all files that import this function
     *
     * NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly.
     */
    dependantFiles?: string[];
};
/**
 * ---
 * dbStorageMethod: jsonSingle
 * ---
 *
 * Interface for arrow functions and normal functions
 */
export interface TsFunction extends TsIndexModelType, TsFunctionFrontmatterConfig, TsFunctionIndex {
}
//# sourceMappingURL=TsFunction.d.ts.map