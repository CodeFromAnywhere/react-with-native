import { MarkdownReaderPage } from "./MarkdownReaderPage";
import { WebMarkdownFile } from "code-types";
import { BundleConfig } from "bundle-types";
import { MappedObject } from "js-util";
import { AugmentedWord } from "./AugmentedWord";
export declare type MarkdownReaderPageProps = {
    /**
     *
     */
    publicBundleConfig?: Omit<BundleConfig, "customisableBundleConfig" | "createBundleConfig"> | null;
    projectRelativeMarkdownPath?: string | null;
    augmentedWordObject?: MappedObject<AugmentedWord>;
    /**
     * If markdownfile is null, the page should exist, but the reading of the file failed
     */
    markdownFile?: WebMarkdownFile | null;
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
        projectRelativeMarkdownPath: string | null;
    }[];
    previousQueryPath?: string | null;
    nextQueryPath?: string | null;
    description?: string | null;
};
//# sourceMappingURL=MarkdownReaderPageProps.d.ts.map