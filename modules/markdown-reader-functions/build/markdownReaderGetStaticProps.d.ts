import { MarkdownReaderPageProps } from "markdown-reader-types";
import { GetStaticPropsContext } from "next";
/**
 Fix `operationBasePath not working` error when building: log `getStaticProps`/`getStaticPaths`
 */
export declare const markdownReaderGetStaticProps: (context: GetStaticPropsContext) => Promise<{
    props: MarkdownReaderPageProps;
}>;
//# sourceMappingURL=markdownReaderGetStaticProps.d.ts.map