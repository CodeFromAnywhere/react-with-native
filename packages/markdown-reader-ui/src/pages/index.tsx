import { Div, P } from "react-with-native";
import { mdToJsonParse } from "markdown-parse-js";
import { Layout } from "../components/Layout";
import { renderMarkdownParse } from "markdown-parse-transpile-ui";
import { MainPageProps, RWNPage } from "../types";
import { useRouter } from "react-with-native-router";
import { getQueryPath } from "../util/getQueryPath";

const Page: RWNPage = (props: MainPageProps) => {
  const router = useRouter();
  const queryPath = getQueryPath(router.query);

  return (
    <Layout queryPaths={props.queryPaths}>
      <Div className="pb-4 px-4 w-full" scroll>
        {props.markdownString ? (
          renderMarkdownParse(mdToJsonParse(props.markdownString))
        ) : (
          <P>Markdown not found ({queryPath})</P>
        )}
      </Div>
    </Layout>
  );
};

Page.options = {};

export default Page;
