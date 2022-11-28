import { MarkdownReaderPageProps } from "markdown-reader-types";
import { GetStaticPropsContext } from "next-types";
export declare const docsGetStaticProps: (context: GetStaticPropsContext, basePaths: {
    projectRelativeBasePath: string;
    queryPath: string;
}[], webOperationName: string) => Promise<{
    props: MarkdownReaderPageProps;
}>;
//# sourceMappingURL=docsGetStaticProps.d.ts.map