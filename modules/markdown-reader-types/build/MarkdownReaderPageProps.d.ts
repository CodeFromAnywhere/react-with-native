import { PublicBundleConfig } from "bundle-types";
import { NestedWebPage, ReaderWebPage } from "webpage-types";
import { ReaderPageContentProps } from "./ReaderPageContentProps";
export declare type MarkdownReaderPageProps = {
    publicBundleConfig?: PublicBundleConfig | null;
    menu: {
        flat: ReaderWebPage[];
        nested: NestedWebPage[];
    };
    content?: ReaderPageContentProps;
};
//# sourceMappingURL=MarkdownReaderPageProps.d.ts.map