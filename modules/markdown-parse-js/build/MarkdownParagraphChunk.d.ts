import { MarkdownCodeblock } from "./MarkdownCodeblock";
import { MarkdownReference } from "./MarkdownReference";
export declare type MarkdownParagraphChunk = {
    isNewline?: boolean;
    codeblock?: MarkdownCodeblock;
    text?: string;
    isBolded?: boolean;
    isItalic?: boolean;
    isBackticked?: boolean;
    reference?: MarkdownReference;
};
//# sourceMappingURL=MarkdownParagraphChunk.d.ts.map