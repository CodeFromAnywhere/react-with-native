import { Div, P } from "react-with-native";
import { MarkdownChunk, MarkdownParse } from "code-types";
import { FrontMatter } from "common-types";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

/**
 * renders a markdown striing (without frontmatter)
 */
export const renderMarkdownContent = (
  content: string,
  config?: { big?: boolean }
) => {
  console.log("Need to render:", content);
  return (
    <ReactMarkdown
      className={config?.big ? "max-w-lg" : undefined}
      rehypePlugins={[rehypeHighlight, remarkGfm]}
      components={{
        td: ({ node, ...props }) => (
          // @ts-ignore
          <td
            className="border border-gray-900 dark:border-gray-100"
            {...props}
          />
        ),
        th: ({ node, ...props }) => (
          // @ts-ignore
          <th
            className="border border-gray-900 dark:border-gray-100"
            {...props}
          />
        ),

        ol: ({ node, ...props }) => <ol className="list-decimal" {...props} />,
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
        code: ({ node, ...props }) => (
          <code
            className="dark:bg-gray-700"
            style={{ color: "darkcyan" }}
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

/**
 * renders a markdown title (level should be 1 for h1 and 6 for h6)
 */
const renderMarkdownTitle = (title: string, level: number) => {
  const levelSize =
    level === 1
      ? "text-3xl"
      : level === 2
      ? "text-2xl"
      : level === 3
      ? "text-xl"
      : level === 4
      ? "text-lg"
      : level === 5
      ? "text-md"
      : level === 6
      ? "text-sm"
      : "text-xs";

  return (
    <P id={title} className={levelSize}>
      {title}
    </P>
  );
};

/**
 * renders a MarkdownChunk interface
 */
const renderMarkdownChunk = (chunk: MarkdownChunk) => {
  const title = chunk.title
    ? renderMarkdownTitle(chunk.title, chunk.level)
    : null;
  return (
    <Div>
      {title}
      {chunk.content ? renderMarkdownContent(chunk.content) : null}
      {chunk.children?.map(renderMarkdownChunk)}
    </Div>
  );
};

/**
 * renders the MardkownParse interface (including frontmatter)
 */
export const renderMarkdownParse = (markdownParse: MarkdownParse) => {
  return (
    <Div>
      {renderFrontMatter(markdownParse.parameters, { renderSpacer: true })}
      {markdownParse.content?.map(renderMarkdownChunk)}
    </Div>
  );
};

/**
 * Renders markdown frontmatter parameters (and optionally a spacer)
 */
export const renderFrontMatter = (
  parameters: FrontMatter,
  config?: { renderSpacer?: boolean }
) => {
  const frontMatterKeys = Object.keys(parameters);

  return frontMatterKeys.length > 0 ? (
    <Div>
      <Div>
        {frontMatterKeys.map((key) => (
          <P>
            {key}: {parameters[key]}
          </P>
        ))}
      </Div>

      {config?.renderSpacer ? <P>------------</P> : null}
    </Div>
  ) : null;
};
