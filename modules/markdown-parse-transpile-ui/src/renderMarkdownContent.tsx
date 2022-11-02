import { isPathRelative } from "fs-util-js";
import { AugmentedWord } from "markdown-reader-types";
import React from "react";
import ReactMarkdown from "react-markdown";
import ReactTooltip from "react-tooltip";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { getUrlFromRelativeUrl } from "./getUrlFromRelativeUrl";
import { MarkdownParseRenderConfig } from "./types";
import { getRealSrc } from "./util/getRealSrc";

/**
 * renders a markdown striing (without frontmatter)
 */
export const renderMarkdownContent = (
  content: string,
  config: MarkdownParseRenderConfig
) => {
  // console.log("Need to render:", content);
  return (
    <>
      <ReactTooltip multiline className="w-40" />
      <ReactMarkdown
        className={config?.big ? "max-w-lg" : undefined}
        rehypePlugins={[rehypeHighlight, remarkGfm]}
        components={{
          img: ({ node, src, ...props }) => {
            const realSrc = getRealSrc(src, config);
            return <img src={realSrc} {...props} />;
          },
          //Fix newlines with `<br>`
          br: ({ node, ...props }) => (
            // @ts-ignore
            <br {...props} />
          ),

          details: ({ node, ...props }) => (
            // @ts-ignore
            <details {...props} />
          ),
          summary: ({ node, ...props }) => (
            // @ts-ignore
            <summary {...props} />
          ),
          td: ({ node, children, ...props }) => {
            return (
              // @ts-ignore
              <td
                className="border border-gray-900 dark:border-gray-100"
                {...props}
              >
                {children?.map((child) =>
                  child === "<br />" ? <br /> : child
                )}
              </td>
            );
          },
          th: ({ node, ...props }) => (
            // @ts-ignore
            <th
              className="border border-gray-900 dark:border-gray-100"
              {...props}
            />
          ),

          ol: ({ node, ...props }) => (
            <ol className="list-decimal mx-3 p-2" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul
              style={{ listStyleType: "circle" }}
              className="mx-3 p-2"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p style={{ marginTop: 15, marginBottom: 15 }} {...props} />
          ),
          li: ({ node, ...props }) => <li className="" {...props} />,
          code: ({ node, children, ...props }) => {
            const word: React.ReactNode | string = children[0];

            // WERKT NU NIET
            const foundWord: AugmentedWord | undefined =
              typeof word === "string"
                ? config?.augmentedWordObject?.[word]
                : undefined;

            return foundWord ? (
              <a
                href={`/${foundWord?.queryPath}`}
                style={{ color: "darkred" }}
                {...props}
                data-tip={foundWord.spoiler}
              >
                {children}
              </a>
            ) : (
              <code
                className="dark:bg-gray-700"
                style={{ color: "darkcyan" }}
                {...props}
              >
                {children}
              </code>
            );
          },
          a: ({ node, ...props }) => (
            <a
              className="text-blue-500"
              style={{ color: "darkblue" }}
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </>
  );
};
