import { Div, P } from "react-with-native";
import { mdToJsonParse } from "markdown-parse-js";
import { renderMarkdownParse } from "markdown-parse-transpile-ui";
import { ALink } from "next-a-link";
import { ClickableIcon } from "clickable-icon";
import { useRouter } from "react-with-native-router";
import { getFolderJs } from "fs-util-js";
import { Layout } from "../components/Layout";
import { isDev } from "server-api-url";
import { RWNPage } from "../types";
import { MarkdownReaderPageProps } from "markdown-reader-types";
import { getQueryPath } from "markdown-reader-functions-js";
import { Dictionary } from "../components/Dictionary";

const Page: RWNPage = (props: MarkdownReaderPageProps) => {
  const router = useRouter();
  const queryPath = getQueryPath(router.query);

  const { augmentedWordObject, projectRelativeMarkdownPath } = props;

  const renderBottomNavigation = () => {
    return (
      <Div className="flex flex-row w-full justify-between">
        {props.previousQueryPath ? (
          <ALink href={`${props.previousQueryPath}`}>
            <Div className="w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center">
              <P className="font-bold text-xl">
                {props.previousQueryPath.split("/").pop()}
              </P>
              <P className="font-bold text-6xl">⬅</P>
            </Div>
          </ALink>
        ) : (
          <Div />
        )}

        {props.nextQueryPath ? (
          <ALink href={`${props.nextQueryPath}`}>
            <Div className="w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center">
              <P className="font-bold text-xl">
                {props.nextQueryPath.split("/").pop()}
              </P>
              <P className="font-bold text-6xl">➡</P>
            </Div>
          </ALink>
        ) : (
          <Div />
        )}
      </Div>
    );
  };

  const renderPage = () => {
    const markdownParse = props.markdownFile?.markdown
      ? mdToJsonParse(props.markdownFile?.markdown)
      : null;
    const projectRelativeMarkdownFilePath = projectRelativeMarkdownPath;
    const projectRelativeBaseFolderPath = projectRelativeMarkdownPath
      ? getFolderJs(projectRelativeMarkdownPath)
      : undefined;

    return (
      <Div>
        {queryPath.length > 1 ? (
          <ClickableIcon
            emoji="⬅"
            onClick={() => {
              const parts = queryPath.split("/");
              parts.pop();
              const oneFolderUp = parts.join("/");
              router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
            }}
          />
        ) : null}

        {markdownParse &&
        projectRelativeBaseFolderPath &&
        projectRelativeMarkdownFilePath
          ? renderMarkdownParse(markdownParse, {
              augmentedWordObject,
              projectRelativeBaseFolderPath,
              projectRelativeMarkdownFilePath,
              isDev,
              isStatic: true,
            })
          : null}

        {props.previousQueryPath || props.nextQueryPath
          ? renderBottomNavigation()
          : null}
      </Div>
    );
  };

  const renderNav = () => {
    return (
      <Div>
        <Div className="flex flex-row items-center">
          <ClickableIcon
            emoji="⬅"
            onClick={() => {
              const parts = queryPath.split("/");
              parts.pop();
              const oneFolderUp = parts.join("/");
              router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
            }}
          />
          <P className="text-4xl">&nbsp;&nbsp;{props.title}</P>
        </Div>

        {props.description ? <P>{props.description}</P> : null}

        <Div className="flex flex-row flex-wrap">
          {props.children?.map((child) => {
            return (
              <ALink href={`${queryPath}/${child.folderName}`}>
                <Div className="w-60 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center">
                  <P className="font-bold text-xl">{child.title}</P>
                  {child.firstParagraph ? (
                    <P className="text-xs">{child.firstParagraph}</P>
                  ) : null}
                </Div>
              </ALink>
            );
          })}
        </Div>
      </Div>
    );
  };

  const word: string | undefined = Array.isArray(router.query?.word)
    ? router.query?.word?.[0]
    : router.query.word;

  return (
    <Layout augmentedWordObject={props.augmentedWordObject} pages={props.pages}>
      {queryPath === "dictionary" && props.augmentedWordObject ? (
        <Dictionary
          augmentedWordObject={props.augmentedWordObject}
          word={word}
        />
      ) : (
        <Div className="pb-4 px-4 w-full" scroll>
          {props.children ? renderNav() : renderPage()}
        </Div>
      )}
    </Layout>
  );
};

Page.options = {};

export default Page;
