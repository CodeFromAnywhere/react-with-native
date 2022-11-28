import {
  markdownReaderGetStaticPaths,
  markdownReaderGetStaticProps,
} from "markdown-reader-functions";
import { DocsReaderLayout } from "reader-ui";
export default DocsReaderLayout;

export const getStaticPaths = markdownReaderGetStaticPaths;
export const getStaticProps = markdownReaderGetStaticProps;
