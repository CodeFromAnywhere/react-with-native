import { MarkdownReaderPage } from "./MarkdownReaderPage";
import { MarkdownFile } from "code-types";
import { MappedObject } from "js-util";
import { AugmentedWord } from "./AugmentedWord";
export declare type MarkdownReaderPageProps = {
    projectRelativeMarkdownPath?: string | null;
    augmentedWordObject?: MappedObject<AugmentedWord>;
    /**
     * If markdownfile is null, the page should exist, but the reading of the file failed
     */
    markdownFile?: MarkdownFile | null;
    pages: MarkdownReaderPage[];
    /**
     * Title of the page
     */
    title?: string | null;
    /**
     * If path is not a markdownfile, will return all children here
     */
    children?: {
        title: string;
        firstParagraph: string | null;
        folderName: string;
    }[];
    previousQueryPath?: string | null;
    nextQueryPath?: string | null;
    description?: string | null;
};
//# sourceMappingURL=MarkdownReaderPageProps.d.ts.map