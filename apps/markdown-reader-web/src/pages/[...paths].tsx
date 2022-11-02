import { pagesObject } from "markdown-reader-ui";
import {
  markdownReaderGetStaticPaths,
  markdownReaderGetStaticProps,
} from "markdown-reader-functions";
export default pagesObject.index;

export const getStaticPaths = markdownReaderGetStaticPaths;
export const getStaticProps = markdownReaderGetStaticProps;
