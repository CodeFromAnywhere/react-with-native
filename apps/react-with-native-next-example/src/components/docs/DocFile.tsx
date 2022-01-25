import Head from "next/head";
import { Div, Text } from "react-with-native";
import { FileData } from "../../pages/docs/[id]";
import SiteLayout from "../SiteLayout";
import Documentation from "./Documentation";
import markdownStyles from "./markdown-styles.module.css";

export default function DocFile({ fileData }: { fileData: FileData }) {
  return (
    <SiteLayout>
      <Documentation hasSidebar={fileData.hasSidebar}>
        <Div className={"flex-1 flex-row justify-center items-center p-16"}>
          <Head>
            <title>{fileData.title}</title>
          </Head>
          <Text className="p-4 text-2xl text-gray-600">{fileData.title}</Text>
          <br />
          {fileData.id}
          <br />
          {fileData.date}
          <br />
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: fileData.contentHtml }}
          />
        </Div>
      </Documentation>
    </SiteLayout>
  );
}
