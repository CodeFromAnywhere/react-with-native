import { MarkdownCallToAction, WebMarkdownFile } from "markdown-types";
/**
Reads a markdown absolute path to a `WebMarkdownFile` model

Attaches default calls to action and header
 */
export declare const readMarkdownFileToModel: (absoluteFilePath: string, webOperationName: string, markdownCallToActions: MarkdownCallToAction[]) => Promise<null | WebMarkdownFile>;
//# sourceMappingURL=readMarkdownFileToModel.d.ts.map