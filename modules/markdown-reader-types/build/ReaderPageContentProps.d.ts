import { AugmentedWord } from "augmented-word-types";
import { MappedObject } from "js-util";
import { WebMarkdownFile } from "markdown-types";
export interface ReaderPageContentProps {
    projectRelativeMarkdownPath?: string | null;
    augmentedWordObject?: MappedObject<AugmentedWord>;
    markdownFile?: WebMarkdownFile | null;
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
        projectRelativeMarkdownPath: string | null;
    }[];
    previousQueryPath?: string | null;
    nextQueryPath?: string | null;
    description?: string | null;
}
//# sourceMappingURL=ReaderPageContentProps.d.ts.map