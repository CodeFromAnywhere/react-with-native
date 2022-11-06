/// <reference types="react" />
import { MarkdownParse } from "code-types";
import { UseStoreResult } from "react-with-native-store";
import { MarkdownViewEnum } from "./types";
export declare const MarkdownPage: (props: {
    markdownParse: MarkdownParse;
    reload: () => void;
    path: string | undefined;
    name: string | undefined;
    loading: boolean;
    markdownViewStore: UseStoreResult<MarkdownViewEnum>;
}) => JSX.Element;
//# sourceMappingURL=MarkdownPage.d.ts.map