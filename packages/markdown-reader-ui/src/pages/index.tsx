import { Div, P } from "react-with-native";
import { mdToJsonParse } from "markdown-parse-js";
import { humanCase } from "convert-case";
import { renderMarkdownContent, renderMarkdownParse } from "markdown";
import { MarkdownView } from "writer-input";
import { useState, useEffect } from "react";
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
import { useStore } from "../store";

const Page: RWNPage = (props: MarkdownReaderPageProps) => {
  const router = useRouter();

  const [view, setView] = useState("view" as "view" | "presentation");
  const queryPath = getQueryPath(router.query);
  const [isMobileMenuEnabled, setIsMobileMenuEnabled] = useStore(
    "menu.isMobileMenuEnabled"
  );
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

  const markdownParse = props.markdownFile?.markdown
    ? mdToJsonParse(props.markdownFile?.markdown)
    : null;

  const renderMarkdownView = () => {
    const projectRelativeMarkdownFilePath = projectRelativeMarkdownPath;
    const projectRelativeBaseFolderPath = projectRelativeMarkdownPath
      ? getFolderJs(projectRelativeMarkdownPath)
      : undefined;

    if (
      !markdownParse ||
      projectRelativeBaseFolderPath === undefined ||
      projectRelativeMarkdownFilePath === undefined ||
      projectRelativeMarkdownFilePath === null
    ) {
      return null;
    }

    const markdownParseRenderConfig = {
      augmentedWordObject,
      projectRelativeBaseFolderPath,
      projectRelativeMarkdownFilePath,
      isDev,
      isStatic: true,
    };

    return (
      <MarkdownView
        markdownParse={markdownParse}
        markdownParseRenderConfig={markdownParseRenderConfig}
        view={view}
      />
    );
  };
  const renderPage = () => {
    console.log("RENDER PAG");

    const hasNoMainTitle =
      markdownParse?.content?.filter((x) => !!x.title && x.level === 1)
        .length !== 1;

    // console.log({ hasNoMainTitle, f: props.markdownFile?.name });

    return (
      <Div>
        <Div className="flex flex-row justify-between">
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

          <Div className="flex flex-row">
            <Div className="lg:hidden">
              <ClickableIcon
                emoji="⃛"
                onClick={() => {
                  setIsMobileMenuEnabled(true);
                }}
              />
            </Div>
            <ClickableIcon
              emoji="👁"
              onClick={() => {
                setView(view === "presentation" ? "view" : "presentation");
              }}
            />
          </Div>
        </Div>

        {hasNoMainTitle && props.markdownFile?.name ? (
          <P className="text-3xl">{humanCase(props.markdownFile.name)}</P>
        ) : null}

        {renderMarkdownView()}

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
          <P className="text-xl lg:text-4xl w-full">
            &nbsp;&nbsp;{props.title}
          </P>

          <Div className="lg:hidden">
            <ClickableIcon
              emoji="⃛"
              onClick={() => {
                setIsMobileMenuEnabled(true);
              }}
            />
          </Div>
        </Div>

        {props.description && props.projectRelativeMarkdownPath ? (
          <Div>
            {renderMarkdownContent(props.description, {
              projectRelativeMarkdownFilePath:
                props.projectRelativeMarkdownPath,
              augmentedWordObject,
              projectRelativeBaseFolderPath: getFolderJs(
                props.projectRelativeMarkdownPath
              )!,
            })}
          </Div>
        ) : null}

        <Div className="flex flex-row flex-wrap">
          {props.children?.map((child, index) => {
            return (
              <ALink
                key={`child${child.projectRelativeMarkdownPath}-${index}`}
                href={`${queryPath}/${child.folderName}`}
              >
                <Div className="w-60 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center">
                  <P className="font-bold text-xl">{child.title}</P>
                  {child.firstParagraph && child.projectRelativeMarkdownPath ? (
                    <Div>
                      {renderMarkdownContent(child.firstParagraph, {
                        projectRelativeBaseFolderPath: getFolderJs(
                          child.projectRelativeMarkdownPath
                        )!,
                        projectRelativeMarkdownFilePath:
                          child.projectRelativeMarkdownPath,
                        augmentedWordObject,
                      })}
                    </Div>
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
    <Layout
      publicBundleConfig={props.publicBundleConfig}
      augmentedWordObject={props.augmentedWordObject}
      pages={props.pages}
    >
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
