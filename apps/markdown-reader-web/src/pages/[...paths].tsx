import { pagesObject } from "markdown-reader-ui";
import { pathGetStaticProps } from "../pathGetStaticProps";
import { pathsGetStaticPaths } from "../pathsGetStaticPaths";
export default pagesObject.index;

export const getStaticPaths = pathsGetStaticPaths;
export const getStaticProps = pathGetStaticProps;
