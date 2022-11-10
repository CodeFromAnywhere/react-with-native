import { Markdown, Price, TsIndexModelType } from "model-types";
import { SizeSummary } from "./FolderSummary";
import { TypeInfo } from "./TypeInfo";
import { TsComment } from "./TsComment";
import { Schema } from "ts-json-schema-generator";
import { SimplifiedSchema } from "./SimplifiedSchema";
import { AuthorizationLevel } from "auth-types";
export interface FunctionParameter {
    name: string;
    schema?: Schema;
    simplifiedSchema?: SimplifiedSchema;
    required: boolean;
}
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
 * ---
 * dbStorageMethod: jsonSingle
 * ---
 *
 * Interface for arrow functions and normal functions
 */
export interface TsFunction extends TsIndexModelType {
    /**
     * whether or not the function is can be cached (relies on cache invalidation)
     */
    canCache?: boolean;
    /**
     * if true, the function will get the `server`.js context as its only argument, and it's directly exposed as GET api. Endpoint path will be inferred from the function name
     *
     * For this to be indexed to `true`, you need to call the function `abcXyzGetApi` whhere `abcXyz` can be anything.
     */
    isGetApi?: boolean;
    /**
     * If true, the function will get the `server`.js context as its only argument, and it's directly exposed as POST api. Endpoint path will be inferred from the function name
     *
     * For this to be indexed to `true`, you need to call the function `abcXyzPostApi` where `abcXyz` can be anything.
     */
    isPostApi?: boolean;
    /**
     * The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation
     */
    isExported: boolean;
    /**
     * for all exported functions in node operations, true by default
     * false for others
     *
     * can be overwritten using frontmatter
     */
    isApiExposed: boolean;
    /**
     * The default authorization that is set level applies to users without any specific authorization (granted to everyone).
     *
     * should be indexed based on doccomment containing `AUTH-PUBLIC: [execute], [read], [search]`
     *
     *
     */
    publicAuthorization: AuthorizationLevel[];
    /**
     You can specify `runEveryPeriod` in your frontmatter of a function. This will set `runEveryPeriod` for the TsFunction. This is used by `function-server`: it will execute CRON-jobs that run these things on those periods.
  
     Will only work if the function takes no arguments.
     */
    runEveryPeriod?: RunEveryPeriodEnum;
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
    /**
     * Indexed from frontmatter `price`
     */
    price?: Price;
}
//# sourceMappingURL=TsFunction.d.ts.map