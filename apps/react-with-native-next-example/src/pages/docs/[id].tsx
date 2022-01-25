import { GetStaticPaths, GetStaticProps } from "next";
import DocFile from "../../components/docs/DocFile";
import { FileDataParams, getAllFileIds, getFileData } from "../../lib/docFiles";

export type FileData = {
  id: string;
  date: string;
  title: string;
  contentHtml: string;
  hasSidebar: boolean;
};

export default function Screen({ fileData }: { fileData: FileData }) {
  return <DocFile fileData={fileData} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllFileIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as FileDataParams;
  const fileData = await getFileData(id);
  return {
    props: {
      fileData,
    },
  };
};
