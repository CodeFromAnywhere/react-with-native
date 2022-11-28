import type { GetStaticPathsContext, GetStaticPathsResult } from "next-types";
/**
Function that tells Next.js what the pages are that need to be statically generated
 */
export declare const docsGetStaticPaths: (context: GetStaticPathsContext, basePaths: {
    projectRelativeBasePath: string;
    queryPath: string;
}[]) => Promise<GetStaticPathsResult>;
//# sourceMappingURL=docsGetStaticPaths.d.ts.map