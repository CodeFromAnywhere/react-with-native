import { TsComment } from "code-types";
import { Creation } from "model-types";
import { CommentRange } from "ts-morph";
/**
 * this is actually a fundamental part of the OS. How should comments be structured?
 *
 * I think, in general, that we should make it look as much as possible at markdown, because it should always be able to have markdown anyway.
 */
export declare const makeTsComment: (config: {
    operationRelativeTypescriptFilePath: string;
    commentRange: CommentRange;
    /**
     * if we can give the statement a name, it should be provided here
     */
    statementName: string | undefined;
    rawStatement: string;
    /** needed for calculating line numbers */
    fileContent: string;
}) => Creation<TsComment>;
//# sourceMappingURL=makeTsComment.d.ts.map